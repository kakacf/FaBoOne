# FaBoOne

台股公司分析 PWA。目標是讓使用者在一頁中掌握公司的成長、獲利、財務體質與估值變化。

## MVP 範圍

- 以 `2330 台積電` 做為第一個完整案例。
- 查詢公司基本資料、日收盤價與月營收。
- 顯示近 8 季營收、EPS 與自由現金流趨勢。
- 顯示可追溯來源的規則式分析摘要。

第一版不包含美股、即時行情、新聞爬蟲、登入與推播。

## 專案結構

- `apps/web`：Angular PWA，現在含 2330 公司分析 mock 畫面。
- `apps/api`：ASP.NET Core Web API。
- `workers/data-ingestion`：.NET Worker Service，之後負責排程擷取與標準化資料。
- `FaBoOne.slnx`：API 與 worker 的 .NET solution。

## 本機啟動

需求：Node.js LTS、.NET 10 SDK；PostgreSQL 與 Docker Compose 會在資料層開始實作時加入。

```powershell
# 前端
cd apps/web
npm install
npm start

# API 與 worker
cd ../..
dotnet build FaBoOne.slnx
```

前端啟動後，開啟命令列顯示的本機網址即可瀏覽公司分析頁。

## 文件

- [公司分析 PWA 規格](docs/company-analysis/INDEX.md)
- [系統架構原則](docs/architecture.md)
- [產品範圍](docs/company-analysis/01-product-scope.md)
- [資料字典與口徑](docs/company-analysis/02-data-dictionary.md)
- [MVP 路線圖](docs/company-analysis/03-mvp-roadmap.md)

請先依 [CONTRIBUTING.md](CONTRIBUTING.md) 建立功能分支，再開始修改。
