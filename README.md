# Bio-Sync Ledger

Protótipo front-end de um produto conceitual na **cadeia alimentar**: antecipação de excesso no **campo** (clima × safra × demanda), operação em **pipeline** até **ledger/tokens**, e narrativa de **tokenização de impacto** para varejo e agronegócio.  
Os números e o feed são **simulados** — servem para demonstrar UX, hierarquia de informação e fluxo da ideia.

---

## O que tem aqui

| Página | Descrição |
|--------|-----------|
| **`index.html`** | Capa com marca, proposta em uma frase e CTA para o painel. |
| **`dashboard.html`** | KPIs, proposta de valor (campo + mercado), pipeline ao vivo (UI), gráficos ([Chart.js](https://www.chartjs.org/)), blocos/tabela de tokens, feed e projeção. |

---

## Stack

- **HTML / CSS** — layout em grid, variáveis CSS, responsivo (breakpoints ~375 / 768 / 1024 / 1440), `prefers-reduced-motion`.
- **JavaScript** — sem build; módulos em `assets/js/dashboard/` (config mock, Chart.js, animações e feed).
- **Tipografia** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts).

---

## Rodar localmente

Na raiz do projeto:

```bash
npx serve .
```

Depois abra:

- [http://localhost:3000](http://localhost:3000) — capa (ou a porta que o `serve` indicar)
- `/dashboard.html` — dashboard

Qualquer servidor estático (`python -m http.server`, Live Server no VS Code, etc.) também funciona.

---

## Deploy na Vercel

1. Conecte o repositório ao [Vercel](https://vercel.com).
2. **Framework Preset:** *Other*.
3. **Build Command** e **Output Directory:** deixe em branco (não há build).
4. A raiz do repositório deve ser a pasta onde estão `index.html`, `dashboard.html` e `assets/`.

O Vercel entrega **`/`** como `index.html` automaticamente. Não é obrigatório `vercel.json`.

---

## Estrutura do repositório

```
├── index.html                 # Landing / capa
├── dashboard.html             # Painel operacional (demo)
├── LICENSE
├── assets/
│   ├── css/
│   │   ├── landing.css        # Estilos da capa
│   │   └── dashboard.css      # Estilos do painel
│   └── js/
│       └── dashboard/
│           ├── config.js      # Empresas + mensagens do feed (mock)
│           ├── charts.js      # Gráficos Chart.js
│           └── simulation.js  # Relógio, contadores, pipeline, tabela, feed
└── design-system/
    └── bio-sync-ledger/       # Notas de marca / tokens (referência interna)
```