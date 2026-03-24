/** Dados mock: empresas e mensagens do feed. */
window.BioSyncDashboard = window.BioSyncDashboard || {};

window.BioSyncDashboard.companies = [
    'Carrefour Brasil',
    'Pão de Açúcar',
    'Atacadão',
    'Extra Hipermercados',
    'BIG Supermercados',
    'Sonda Supermercados',
    'Zaffari',
    'Angeloni',
    'Savegnago',
    'Condor Super Center',
];

window.BioSyncDashboard.feedMessages = [
    {
        color: 'orange',
        text: 'Cooperativa Sul: <strong>clima × histórico de safra × demanda futura</strong> cruzados — <strong>excesso de milho</strong> 11 dias antes da colheita.',
        time: 'Agora',
    },
    {
        color: 'green',
        text: 'Stream de <strong>previsão climática</strong> atualizado; modelo recalibrou risco de <strong>soja</strong> em 3 regiões.',
        time: 'Agora',
    },
    {
        color: 'blue',
        text: '<strong>Demanda de mercado</strong> (derivativos + offtake) divergiu da safra esperada — alerta de <strong>excesso</strong> em armazém cooperativo.',
        time: '1min atrás',
    },
    {
        color: 'orange',
        text: 'Fazenda Triângulo: <strong>14 dias antes da colheita</strong>, sinal de <strong>toneladas excedentes</strong> de soja (confiança 91%).',
        time: '2min atrás',
    },
    {
        color: 'green',
        text: 'Série histórica de safra + chuva dos últimos 30d: <strong>óleo de palma</strong> com janela de escoamento sugerida.',
        time: '3min atrás',
    },
    {
        color: 'blue',
        text: 'Ingestão <strong>tempo real</strong>: estações meteorológicas + satélite + preços spot — pipeline de campo <strong>OK</strong>.',
        time: '5min atrás',
    },
    {
        color: 'purple',
        text: 'Ledger: lote de <strong>pré-colheita</strong> registrado (hash verificável) para auditoria de <strong>excesso evitado</strong>.',
        time: '7min atrás',
    },
    {
        color: 'orange',
        text: 'Citrus SP: modelo cruzou <strong>geada tardia</strong> com <strong>demanda interna</strong> — ajuste de colheita sugerido.',
        time: '9min atrás',
    },
    {
        color: 'green',
        text: '<strong>Carrefour Pinheiros</strong> (PDV): 240kg hortifruti — complementa sinal de campo na mesma região.',
        time: '11min atrás',
    },
    {
        color: 'blue',
        text: 'Rota fechada: <strong>3 cargas</strong> do excesso de campo → hub logístico → Banco de Alimentos.',
        time: '14min atrás',
    },
    {
        color: 'purple',
        text: 'Token #TKN-8821: <strong>prova de impacto</strong> ligada a lote pré-colheita (carbono + social).',
        time: '18min atrás',
    },
    {
        color: 'blue',
        text: 'Retreino do modelo: <strong>94%</strong> acerto em <strong>antecipação de excesso</strong> (validação out-of-sample).',
        time: '22min atrás',
    },
    {
        color: 'orange',
        text: 'Canavieiro NE: <strong>demanda etanol</strong> vs estoque projetado — alerta de <strong>balanço positivo</strong> pré-moagem.',
        time: '28min atrás',
    },
    {
        color: 'green',
        text: '<strong>Angeloni SC</strong>: integração ERP — ingestão de <strong>demanda de varejo</strong> alimentando o mesmo grafo do campo.',
        time: '32min atrás',
    },
];
