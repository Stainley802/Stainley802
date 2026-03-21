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
from openpyxl.chart import LineChart, Reference
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
    jpy_twd = round(rates["TWD"] / rates["JPY"] * 100, 2)  # 100 JPY = TWD

    return {
        "USD_TWD": usd_twd,
        "EUR_TWD": eur_twd,
        "USD_EUR": usd_eur,
        "EUR_USD": eur_usd,
        "JPY_TWD": jpy_twd,
    }


def update_excel(rates, today):
    excel_path = Path(__file__).parent / "history.xlsx"

    if excel_path.exists():
        wb = openpyxl.load_workbook(excel_path)
        ws = wb.active
    else:
        wb = openpyxl.Workbook()
        ws = wb.active
        ws.title = "Exchange Rate History"
        ws.append(["Date", "1 USD = TWD", "1 EUR = TWD", "1 USD = EUR", "1 EUR = USD", "100 JPY = TWD"])

    ws.append([
        today.strftime("%Y/%m/%d"),
        rates["USD_TWD"],
        rates["EUR_TWD"],
        rates["USD_EUR"],
        rates["EUR_USD"],
        rates["JPY_TWD"],
    ])

    # Rebuild 12-month trend chart (last ~252 trading days)
    max_row = ws.max_row
    min_row = max(2, max_row - 251)

    # Remove old chart sheet and recreate
    if "12-Month Trend" in wb.sheetnames:
        del wb["12-Month Trend"]
    chart_ws = wb.create_sheet("12-Month Trend")

    # --- TWD Rates chart (USD_TWD, EUR_TWD, 100 JPY_TWD) ---
    chart_twd = LineChart()
    chart_twd.title = "TWD Exchange Rates - 12 Month Trend"
    chart_twd.style = 10
    chart_twd.y_axis.title = "Rate (TWD)"
    chart_twd.x_axis.title = "Date"
    chart_twd.width = 30
    chart_twd.height = 15

    data_twd = Reference(ws, min_col=2, max_col=3, min_row=1, max_row=max_row)
    chart_twd.add_data(data_twd, titles_from_data=True)
    data_jpy = Reference(ws, min_col=6, min_row=1, max_row=max_row)
    chart_twd.add_data(data_jpy, titles_from_data=True)
    cats = Reference(ws, min_col=1, min_row=min_row, max_row=max_row)
    chart_twd.set_categories(cats)
    chart_ws.add_chart(chart_twd, "A1")

    # --- Cross Rates chart (USD_EUR, EUR_USD) ---
    chart_cross = LineChart()
    chart_cross.title = "USD / EUR Cross Rates - 12 Month Trend"
    chart_cross.style = 10
    chart_cross.y_axis.title = "Rate"
    chart_cross.x_axis.title = "Date"
    chart_cross.width = 30
    chart_cross.height = 15

    data_cross = Reference(ws, min_col=4, max_col=5, min_row=1, max_row=max_row)
    chart_cross.add_data(data_cross, titles_from_data=True)
    chart_cross.set_categories(cats)
    chart_ws.add_chart(chart_cross, "A30")

    wb.save(excel_path)
    return excel_path


def send_email(rates, today, excel_path):
    sender = os.environ["GMAIL_USER"]
    recipients_str = os.environ.get("RECIPIENTS", sender)
    recipients = [r.strip() for r in recipients_str.split(",")]
    app_password = os.environ["GMAIL_APP_PASSWORD"]

    date_str = today.strftime("%Y/%m/%d")
    subject = f"Daily Exchange Rate Report {date_str}"

    body = (
        f"Good morning! Here are the latest exchange rates as of {date_str} 09:00:\n\n"
        f"🟢 1 USD  = {rates['USD_TWD']} TWD\n"
        f"🔵 1 EUR  = {rates['EUR_TWD']} TWD\n"
        f"🟡 1 USD  = {rates['USD_EUR']} EUR\n"
        f"🟠 1 EUR  = {rates['EUR_USD']} USD\n"
        f"🔴 100 JPY = {rates['JPY_TWD']} TWD\n\n"
        "Please see the attached Excel file for detailed history and 12-month trend charts.\n\n"
        "(This email was sent automatically by a scheduled workflow.)"
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
        f'attachment; filename="ExchangeRates_{today.strftime("%Y%m%d")}.xlsx"',
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
    print(f"   1 USD  = {rates['USD_TWD']} TWD")
    print(f"   1 EUR  = {rates['EUR_TWD']} TWD")
    print(f"   1 USD  = {rates['USD_EUR']} EUR")
    print(f"   1 EUR  = {rates['EUR_USD']} USD")
    print(f"   100 JPY = {rates['JPY_TWD']} TWD")

    excel_path = update_excel(rates, today)
    print(f"📊 Excel updated: {excel_path}")

    send_email(rates, today, excel_path)
    print("🎉 Done!")


if __name__ == "__main__":
    main()
