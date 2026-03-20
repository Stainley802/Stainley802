# 每日匯率報告 📊

每天早上 09:00（台灣時間）自動寄送匯率日報 Email，**只在工作日發送**（週末 + 台灣國定假日自動跳過）。

## 功能

- 🟢 1 USD = ? TWD
- 🔵 1 EUR = ? TWD
- 🟡 1 USD = ? EUR
- 🟠 1 EUR = ? USD
- 📎 附件：Excel 歷史記錄（每天自動累積）

---

## 設定步驟（只需做一次）

### 1. 取得 Gmail 應用程式密碼

1. 登入 [Google 帳戶](https://myaccount.google.com/)
2. 安全性 → 兩步驟驗證（需先開啟）
3. 安全性 → 應用程式密碼 → 產生新密碼（選「郵件」）
4. 複製那 16 碼密碼備用

### 2. 在 GitHub 設定 Secrets

到 GitHub Repo → **Settings → Secrets and variables → Actions → New repository secret**，新增以下三個：

| Secret 名稱 | 值（範例） |
|---|---|
| `GMAIL_USER` | `stainley.huang@gmail.com` |
| `GMAIL_APP_PASSWORD` | `xxxx xxxx xxxx xxxx`（16碼應用程式密碼） |
| `RECIPIENTS` | `stainley.huang@gmail.com,Stainley.huang@gmail.com` |

> `RECIPIENTS` 可用逗號分隔多個收件人

### 3. 完成！

GitHub Actions 每個工作日 09:00 自動執行，無需任何伺服器。

---

## 手動測試

到 GitHub → **Actions → Daily Exchange Rate Report → Run workflow** 即可立即測試發送。
