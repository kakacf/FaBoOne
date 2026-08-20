# 協作與 Git 流程

## 分支

- `main`：可發布、穩定的版本；不要直接在此分支開發功能。
- `feature/<功能名稱>`：新功能，例如 `feature/company-analysis-page`。
- `fix/<問題名稱>`：錯誤修正，例如 `fix/revenue-unit-format`。
- `docs/<主題>`：只修改文件，例如 `docs/project-guides`。

## 工作流程

1. 先從最新 `main` 建立功能分支。
2. 只修改該工作需要的檔案。
3. 提交前檢查變更範圍與機密資訊。
4. 使用明確的提交訊息提交。
5. 推送分支並建立 Draft Pull Request；確認後才合併到 `main`。

## 提交訊息

使用小寫類型加冒號：

- `feat: add company analysis page`
- `fix: handle missing monthly revenue`
- `docs: clarify financial metric definitions`
- `chore: update development tooling`

## 不可提交的內容

- `.env`、API key、密碼或任何存取權杖。
- `node_modules`、建置產物與暫存檔。
- 使用者資料、未授權的財經新聞全文或付費資料。

## 財務資料原則

- 資料必須標示來源、資料期間與最後更新時間。
- 衍生指標必須保留計算公式與使用的原始值。
- 不把公司分析摘要描述為買賣建議。

