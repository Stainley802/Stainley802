import smtplib
import os
import sys
import requests
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from datetime import date
from pathlib import Path

import openpyxl
import holidays


def is_working_day(d):
    if d.weekday() >= 5:
        return False
    tw_holidays = holidays.Taiwan(years=d.year)
    return d not in tw_holidays


def fetch_rates():
    url = "https://api.exchangerate-api.com/v4/latest/USD"
    resp = requests.get(url, timeout=10)
    resp.raise_for_status()
    rates = resp.json()["rates"]

    usd_twd = round(rates["TWD"], 2)
    usd_eur = round(rates["EUR"], 4)
    eur_twd = round(rates["TWD"] / rates["EUR"], 2)
    eur_usd = round(1 / rates["EUR"], 4)

    return {
        "USD_TWD": usd_twd,
        "EUR_TWD": eur_twd,
        "USD_EUR": usd_eur,
        "EUR_USD": eur_usd,
    }


def update_excel(rates, today):
    excel_path = Path(__file__).parent / "history.xlsx"

    if excel_path.exists():
        wb = openpyxl.load_workbook(excel_path)
        ws = wb.active
    else:
        wb = openpyxl.Workbook()
        ws = wb.active
        ws.title = "匯率歷史"
        ws.append(["日期", "1 USD = TWD", "1 EUR = TWD", "1 USD = EUR", "1 EUR = USD"])

    ws.append([
        today.strftime("%Y/%m/%d"),
        rates["USD_TWD"],
        rates["EUR_TWD"],
        rates["USD_EUR"],
        rates["EUR_USD"],
    ])
    wb.save(excel_path)
    return excel_path


def send_email(rates, today, excel_path):
    sender = os.environ["GMAIL_USER"]
    recipients_str = os.environ.get("RECIPIENTS", sender)
    recipients = [r.strip() for r in recipients_str.split(",")]
    app_password = os.environ["GMAIL_APP_PASSWORD"]

    date_str = today.strftime("%Y/%m/%d")
    subject = f"每日匯率報告 {date_str}"

    body = (
        f"早安！以下是 {date_str} 09:00 的最新匯率：\n\n"
        f"🟢 1 USD = {rates['USD_TWD']} TWD\n"
        f"🔵 1 EUR = {rates['EUR_TWD']} TWD\n"
        f"🟡 1 USD = {rates['USD_EUR']} EUR\n"
        f"🟠 1 EUR = {rates['EUR_USD']} USD\n\n"
        "詳細歷史記錄請見附件 Excel 檔案。\n\n"
        "（此郵件由自動排程程式發送）"
    )

    msg = MIMEMultipart()
    msg["From"] = sender
    msg["To"] = ", ".join(recipients)
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain", "utf-8"))

    with open(excel_path, "rb") as f:
        part = MIMEBase("application", "octet-stream")
        part.set_payload(f.read())
    encoders.encode_base64(part)
    part.add_header(
        "Content-Disposition",
        f'attachment; filename="匯率歷史_{today.strftime("%Y%m%d")}.xlsx"',
    )
    msg.attach(part)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender, app_password)
        server.sendmail(sender, recipients, msg.as_string())

    print(f"✅ Email sent to: {', '.join(recipients)}")


def main():
    today = date.today()

    if not is_working_day(today):
        print(f"⏭️  {today} is not a working day. Skipping.")
        sys.exit(0)

    print(f"📡 Fetching exchange rates for {today}...")
    rates = fetch_rates()
    print(f"   1 USD = {rates['USD_TWD']} TWD")
    print(f"   1 EUR = {rates['EUR_TWD']} TWD")
    print(f"   1 USD = {rates['USD_EUR']} EUR")
    print(f"   1 EUR = {rates['EUR_USD']} USD")

    excel_path = update_excel(rates, today)
    print(f"📊 Excel updated: {excel_path}")

    send_email(rates, today, excel_path)
    print("🎉 Done!")


if __name__ == "__main__":
    main()
