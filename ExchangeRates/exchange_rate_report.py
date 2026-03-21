import smtplib
import os
import sys
import requests
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import date

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


def send_email(rates, today):
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
        f"🟠 1 EUR  = {rates['EUR_USD']} USD\n\n"
        "(This email was sent automatically by a scheduled workflow.)"
    )

    msg = MIMEMultipart()
    msg["From"] = sender
    msg["To"] = ", ".join(recipients)
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain", "utf-8"))

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

    send_email(rates, today)
    print("🎉 Done!")


if __name__ == "__main__":
    main()
