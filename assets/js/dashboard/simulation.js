/**
 * Dashboard: relógio, KPIs animados, pipeline, blocos, tabela de tokens, feed.
 */
(function () {
    'use strict';

    const cfg = window.BioSyncDashboard || {};
    const companies = cfg.companies || [];
    const feedMessages = cfg.feedMessages || [];

    const PIPELINE_LANE_TEXTS = [
        [
            'Clima + safra + demanda (stream)',
            'Excesso detectado: 9d antes colheita',
            'Histórico 12 safras correlacionado',
        ],
        ['PDV Sul: demanda varejo ao vivo', '14 SKUs giro baixo', 'Encaixa com sinal de campo'],
        [
            'Fusão clima×safra×mercado',
            'Inferência ~340 ms',
            'Modelo v2.4 · conf. média 92%',
        ],
        ['6 blocos/hora', 'Pré-colheita auditável', 'Validators ok'],
        ['3 rotas p/ excesso de campo', '12 entregas hoje', 'ETA méd. 38 min'],
        ['Fila mint: 18', '142 tokens/dia', 'Fiscal em sync'],
    ];

    function updateClock() {
        const el = document.getElementById('navClock');
        if (!el) return;
        el.textContent = 'Conectado — ' + new Date().toLocaleTimeString('pt-BR');
    }

    function animateCounter(id, target, prefix, suffix) {
        prefix = prefix || '';
        suffix = suffix || '';
        const el = document.getElementById(id);
        if (!el) return;
        const duration = 2000;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = prefix + Math.floor(eased * target).toLocaleString('pt-BR') + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    function randomHex() {
        return '0x' + [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    }

    function shuffleSlice(arr, n) {
        const copy = arr.slice();
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const t = copy[i];
            copy[i] = copy[j];
            copy[j] = t;
        }
        return copy.slice(0, n);
    }

    function renderPipelineLanes() {
        const root = document.getElementById('pipelineLanes');
        if (!root) return;
        root.querySelectorAll('[data-lane]').forEach((el) => {
            const i = parseInt(el.getAttribute('data-lane'), 10);
            const pool = PIPELINE_LANE_TEXTS[i];
            if (!pool) return;
            el.textContent = pool[Math.floor(Math.random() * pool.length)];
        });
    }

    function renderBlocks() {
        const container = document.getElementById('blockchainRow');
        if (!container) return;
        container.innerHTML = '';
        const baseBlock = 48291;
        for (let i = 0; i < 6; i++) {
            if (i > 0) {
                const conn = document.createElement('div');
                conn.className = 'block-connector';
                conn.textContent = '→';
                container.appendChild(conn);
            }
            const block = document.createElement('div');
            block.className = 'block';
            const tx = Math.floor(Math.random() * 12) + 3;
            block.innerHTML =
                '<div class="block-number">Bloco #' +
                (baseBlock + i) +
                '</div>' +
                '<div class="block-hash">' +
                randomHex() +
                '...' +
                randomHex().slice(2, 6) +
                '</div>' +
                '<div class="block-txns">' +
                tx +
                ' transações</div>';
            container.appendChild(block);
        }
    }

    function renderTokens() {
        const tbody = document.getElementById('tokenTableBody');
        if (!tbody || !companies.length) return;
        tbody.innerHTML = '';
        const statuses = [
            { cls: 'verified', text: '✓ Verificado' },
            { cls: 'pending', text: '◌ Pendente' },
            { cls: 'minting', text: '⟳ Mintando' },
        ];
        for (let i = 0; i < 5; i++) {
            const st = statuses[Math.floor(Math.random() * statuses.length)];
            const row = document.createElement('tr');
            row.innerHTML =
                '<td><span class="token-hash">' +
                randomHex() +
                '</span></td>' +
                '<td>' +
                companies[Math.floor(Math.random() * companies.length)] +
                '</td>' +
                '<td class="cell-tokens">' +
                (Math.floor(Math.random() * 500) + 50) +
                '</td>' +
                '<td><span class="token-status ' +
                st.cls +
                '">' +
                st.text +
                '</span></td>';
            tbody.appendChild(row);
        }
    }

    function renderFeed() {
        const list = document.getElementById('feedList');
        if (!list || !feedMessages.length) return;
        list.innerHTML = '';
        const pick = shuffleSlice(feedMessages, 6);
        pick.forEach((msg, i) => {
            const li = document.createElement('li');
            li.className = 'feed-item';
            li.style.animationDelay = i * 0.1 + 's';
            li.innerHTML =
                '<div class="feed-dot ' +
                msg.color +
                '"></div><div><div class="feed-text">' +
                msg.text +
                '</div><div class="feed-time">' +
                msg.time +
                '</div></div>';
            list.appendChild(li);
        });
    }

    function init() {
        setInterval(updateClock, 1000);
        updateClock();

        setTimeout(() => {
            animateCounter('statToneladas', 4827);
            animateCounter('statEmpresas', 342);
            animateCounter('statTokens', 18463);
            animateCounter('statCarbono', 1284);
            animateCounter('statFamilias', 127850);
        }, 400);

        setTimeout(() => {
            const bar = document.getElementById('pipelineBar');
            const pct = document.getElementById('pipelinePercent');
            if (bar) bar.style.width = '78%';
            if (pct) pct.textContent = '78%';
        }, 800);

        renderBlocks();
        setInterval(renderBlocks, 8000);

        renderTokens();
        setInterval(renderTokens, 6000);

        renderFeed();
        setInterval(renderFeed, 10000);

        renderPipelineLanes();
        setInterval(renderPipelineLanes, 8000);

        let toneladasBase = 4827;
        setInterval(() => {
            const el = document.getElementById('statToneladas');
            if (!el) return;
            toneladasBase += Math.floor(Math.random() * 5) + 1;
            el.textContent = toneladasBase.toLocaleString('pt-BR');
        }, 4000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
