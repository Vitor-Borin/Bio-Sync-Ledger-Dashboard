/** Gráficos do dashboard (Chart.js). */
(function () {
    'use strict';

    const gridColor = 'rgba(255,255,255,0.06)';
    const tickColor = '#64748b';
    const legendLabelColor = '#94a3b8';

    function initCharts() {
        if (typeof Chart === 'undefined') return;

        const main = document.getElementById('chartMain');
        const donut = document.getElementById('chartDonut');
        const projection = document.getElementById('chartProjection');
        if (!main || !donut || !projection) return;

        new Chart(main, {
            type: 'line',
            data: {
                labels: ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'],
                datasets: [
                    {
                        label: 'Desperdício projetado (ton)',
                        data: [1200, 1080, 950, 820, 710, 640],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239,68,68,0.08)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: '#ef4444',
                    },
                    {
                        label: 'Resgatado pós sinal (ton)',
                        data: [300, 480, 620, 790, 920, 1050],
                        borderColor: '#22c55e',
                        backgroundColor: 'rgba(34,197,94,0.08)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: '#22c55e',
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: legendLabelColor,
                            font: { family: 'Inter', size: 12 },
                        },
                    },
                },
                scales: {
                    x: {
                        grid: { color: gridColor },
                        ticks: { color: tickColor, font: { family: 'Inter', size: 12 } },
                    },
                    y: {
                        grid: { color: gridColor },
                        ticks: { color: tickColor, font: { family: 'JetBrains Mono', size: 11 } },
                    },
                },
                interaction: { intersect: false, mode: 'index' },
            },
        });

        new Chart(donut, {
            type: 'doughnut',
            data: {
                labels: ['Grãos (safra)', 'Hortifruti campo', 'Oleaginosas', 'Cana / etanol', 'Outras culturas'],
                datasets: [
                    {
                        data: [38, 22, 18, 12, 10],
                        backgroundColor: [
                            '#22c55e',
                            '#2563eb',
                            '#7c3aed',
                            '#f97316',
                            '#06b6d4',
                        ],
                        borderColor: '#0f1729',
                        borderWidth: 2,
                        hoverOffset: 8,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '68%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: legendLabelColor,
                            font: { family: 'Inter', size: 12 },
                            padding: 16,
                            usePointStyle: true,
                        },
                    },
                },
            },
        });

        new Chart(projection, {
            type: 'bar',
            data: {
                labels: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'],
                datasets: [
                    {
                        label: 'Famílias atendidas (mil)',
                        data: [12, 18, 24, 33, 42, 55, 68, 82, 95, 108, 120, 135],
                        backgroundColor: 'rgba(37,99,235,0.25)',
                        borderColor: '#2563eb',
                        borderWidth: 2,
                        borderRadius: 4,
                    },
                    {
                        label: 'Tokens gerados (mil)',
                        data: [2, 3.5, 5, 7, 10, 14, 18, 23, 28, 34, 40, 48],
                        backgroundColor: 'rgba(124,58,237,0.25)',
                        borderColor: '#7c3aed',
                        borderWidth: 2,
                        borderRadius: 4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: legendLabelColor,
                            font: { family: 'Inter', size: 12 },
                        },
                    },
                },
                scales: {
                    x: {
                        grid: { color: gridColor },
                        ticks: { color: tickColor, font: { family: 'Inter', size: 12 } },
                    },
                    y: {
                        grid: { color: gridColor },
                        ticks: { color: tickColor, font: { family: 'JetBrains Mono', size: 11 } },
                    },
                },
            },
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCharts);
    } else {
        initCharts();
    }
})();
