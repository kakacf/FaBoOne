# 系統架構原則

## 核心決策

目前採用單一 repository（monorepo）開發；但前端、後端 API 與資料匯入程式必須具備可獨立拆分、部署與擴充的邊界。

## 目標目錄

```text
apps/web/                 PWA 前端
apps/api/                 對外 API 與商業邏輯
workers/data-ingestion/  排程擷取、清洗與計算財務資料
packages/shared-types/   前後端共用資料型別與 API 合約
docs/                     產品、資料與架構文件
infra/                    部署與基礎設施設定
```

## 程式撰寫規則

1. `apps/web` 不直接連接交易所、公開資訊觀測站或資料庫；只能呼叫 `apps/api` 提供的 API。
2. `apps/api` 不應依賴前端元件或前端框架。
3. `workers/data-ingestion` 只負責擷取、驗證、標準化及寫入資料；不提供使用者介面。
4. API request/response、公司與財報型別放在 `packages/shared-types`，避免前後端各自定義不同欄位。
5. 所有外部資料存取均由後端或 worker 執行，API key 不得出現在前端程式。
6. 每項資料都保留來源、資料期間與更新時間，並由 API 回傳給前端。

## 相依方向

```text
PWA 前端 → API → 資料庫
                 ↑
          資料匯入 worker → 官方資料來源
```

## 未來拆分方式

- `apps/web` 可拆為獨立的前端 repository 與部署管線。
- `apps/api` 可拆為獨立的 API repository，版本化對外 API。
- `workers/data-ingestion` 可獨立部署為排程服務，不與 API 請求生命週期綁定。
- `packages/shared-types` 可保留為共用套件，或在拆分後發佈為私有 package。

## 目前不做

