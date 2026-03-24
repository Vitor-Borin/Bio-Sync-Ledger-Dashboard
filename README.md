# Bio-Sync Ledger

Protótipo front-end de um pitch em slides + dashboard operacional (dados simulados). Foco: logística preditiva na cadeia alimentar, sinal de **excesso no campo antes da colheita** e encadeamento até ledger / tokens.

## Stack

- HTML5, CSS3 (variáveis, grid, `clamp`, `prefers-reduced-motion`)
- JavaScript (vanilla, IIFE, sem build)
- [Chart.js](https://www.chartjs.org/) (CDN) nos gráficos do dashboard
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Como rodar

É estático. Abra no navegador:

- `pitch.html` — apresentação (setas, espaço, clique ou swipe)
- `dashboard.html` — painel com contadores, pipeline, gráficos e feed

Ou sirva a pasta com qualquer servidor HTTP, por exemplo:

```bash
npx serve .
```

## Deploy (Vercel)

Site **estático**: no projeto Vercel use **Framework Preset: Other**, sem comando de build, raiz do repositório = pasta do projeto.

A URL `/` precisa apontar para o dashboard. Este repo inclui:

- `index.html` — redireciona para `dashboard.html`
- `vercel.json` — rewrite de `/` → `/dashboard.html`

Depois de dar **push**, faça um novo deploy (ou deixe o deploy automático rodar).

## Estrutura

```
├── index.html          # entrada / redireciona ao dashboard
├── vercel.json         # rewrite / → dashboard (Vercel)
├── pitch.html
├── dashboard.html
├── assets/
│   ├── css/
│   │   ├── pitch.css
│   │   └── dashboard.css
│   └── js/
│       ├── pitch.js
│       └── dashboard/
│           ├── config.js    # empresas + mensagens do feed
│           ├── charts.js    # Chart.js
│           └── simulation.js # relógio, animações, tabela simulada
└── design-system/
    └── bio-sync-ledger/      # notas de marca / tokens (referência)
```