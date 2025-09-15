// Mock Data from original script
const mockData = {
    "date": "2025-09-09",
    "summary": {
        "RECEITA": { "real": 150000.00, "bgt": 140000.00, "pm": 135000.00 },
        "ON_TIME": { "real": 92.5, "bgt": 95.0, "pm": 90.0 },
        "OCUPACAO": { "real": 85.0, "bgt": 88.0, "pm": 82.0 },
        "TERCEIRO": { "real": 15.0, "bgt": 10.0, "pm": 12.0 },
        "DISPONIBILIDADE": { "real": 98.0, "bgt": 99.0, "pm": 97.5 }
    },
    "kpiEntries": [
        { "id": "kpi1", "date": "2025-09-09", "clientId": "clientA", "clientName": "Cliente Alpha", "costCenterId": "cc1", "costCenterName": "Centro Custo 1", "branchId": "branch1", "branchName": "Filial A", "regionId": "norte", "regionName": "Região Norte", "kpiType": "RECEITA", "kpiValue": 50000.00 },
        { "id": "kpi2", "date": "2025-09-09", "clientId": "clientB", "clientName": "Cliente Beta", "costCenterId": "cc2", "costCenterName": "Centro Custo 2", "branchId": "branch2", "branchName": "Filial B", "regionId": "nordeste", "regionName": "Região Nordeste", "kpiType": "RECEITA", "kpiValue": 70000.00 },
        { "id": "kpi3", "date": "2025-09-09", "clientId": "clientA", "clientName": "Cliente Alpha", "costCenterId": "cc1", "costCenterName": "Centro Custo 1", "branchId": "branch1", "branchName": "Filial A", "regionId": "norte", "regionName": "Região Norte", "kpiType": "ON_TIME", "kpiValue": 95.0 },
        { "id": "kpi4", "date": "2025-09-09", "clientId": "clientB", "clientName": "Cliente Beta", "costCenterId": "cc2", "costCenterName": "Centro Custo 2", "branchId": "branch2", "branchName": "Filial B", "regionId": "nordeste", "regionName": "Região Nordeste", "kpiType": "ON_TIME", "kpiValue": 90.0 },
        { "id": "kpi5", "date": "2025-09-08", "clientId": "clientC", "clientName": "Cliente Gama", "costCenterId": "cc3", "costCenterName": "Centro Custo 3", "branchId": "branch3", "branchName": "Filial C", "regionId": "centro-oeste", "regionName": "Região Centro-Oeste", "kpiType": "RECEITA", "kpiValue": 45000.00 },
        { "id": "kpi6", "date": "2025-09-08", "clientId": "clientC", "clientName": "Cliente Gama", "costCenterId": "cc3", "costCenterName": "Centro Custo 3", "branchId": "branch3", "branchName": "Filial C", "regionId": "centro-oeste", "regionName": "Região Centro-Oeste", "kpiType": "ON_TIME", "kpiValue": 88.0 },
        { "id": "kpi7", "date": "2025-09-09", "clientId": "clientA", "clientName": "Cliente Alpha", "costCenterId": "cc1", "costCenterName": "Centro Custo 1", "branchId": "branch1", "branchName": "Filial A", "regionId": "norte", "regionName": "Região Norte", "kpiType": "OCUPACAO", "kpiValue": 85.0 },
        { "id": "kpi8", "date": "2025-09-09", "clientId": "clientB", "clientName": "Cliente Beta", "costCenterId": "cc2", "costCenterName": "Centro Custo 2", "branchId": "branch2", "branchName": "Filial B", "regionId": "nordeste", "regionName": "Região Nordeste", "kpiType": "OCUPACAO", "kpiValue": 78.0 },
        { "id": "kpi9", "date": "2025-09-09", "clientId": "clientC", "clientName": "Cliente Gama", "costCenterId": "cc3", "costCenterName": "Centro Custo 3", "branchId": "branch3", "branchName": "Filial C", "regionId": "centro-oeste", "regionName": "Região Centro-Oeste", "kpiType": "OCUPACAO", "kpiValue": 90.0 },
        { "id": "kpi10", "date": "2025-09-09", "clientId": "clientA", "clientName": "Cliente Alpha", "costCenterId": "cc1", "costCenterName": "Centro Custo 1", "branchId": "branch1", "branchName": "Filial A", "regionId": "norte", "regionName": "Região Norte", "kpiType": "TERCEIRO", "kpiValue": 15.0 },
        { "id": "kpi11", "date": "2025-09-09", "clientId": "clientB", "clientName": "Cliente Beta", "costCenterId": "cc2", "costCenterName": "Centro Custo 2", "branchId": "branch2", "branchName": "Filial B", "regionId": "nordeste", "regionName": "Região Nordeste", "kpiType": "TERCEIRO", "kpiValue": 22.0 },
        { "id": "kpi12", "date": "2025-09-09", "clientId": "clientC", "clientName": "Cliente Gama", "costCenterId": "cc3", "costCenterName": "Centro Custo 3", "branchId": "branch3", "branchName": "Filial C", "regionId": "centro-oeste", "regionName": "Região Centro-Oeste", "kpiType": "TERCEIRO", "kpiValue": 10.0 },
        { "id": "kpi13", "date": "2025-09-09", "clientId": "clientA", "clientName": "Cliente Alpha", "costCenterId": "cc1", "costCenterName": "Centro Custo 1", "branchId": "branch1", "branchName": "Filial A", "regionId": "norte", "regionName": "Região Norte", "kpiType": "DISPONIBILIDADE", "kpiValue": 98.0 },
        { "id": "kpi14", "date": "2025-09-09", "clientId": "clientB", "clientName": "Cliente Beta", "costCenterId": "cc2", "costCenterName": "Centro Custo 2", "branchId": "branch2", "branchName": "Filial B", "regionId": "nordeste", "regionName": "Região Nordeste", "kpiType": "DISPONIBILIDADE", "kpiValue": 95.0 },
        { "id": "kpi15", "date": "2025-09-09", "clientId": "clientC", "clientName": "Cliente Gama", "costCenterId": "cc3", "costCenterName": "Centro Custo 3", "branchId": "branch3", "branchName": "Filial C", "regionId": "centro-oeste", "regionName": "Região Centro-Oeste", "kpiType": "DISPONIBILIDADE", "kpiValue": 99.0 },
        { "id": "kpi16", "date": "2025-09-09", "clientId": "clientD", "clientName": "Cliente Delta", "costCenterId": "cc4", "costCenterName": "Centro Custo 4", "branchId": "branch4", "branchName": "Filial D", "regionId": "sudeste", "regionName": "Região Sudeste", "kpiType": "RECEITA", "kpiValue": 80000.00 },
        { "id": "kpi17", "date": "2025-09-09", "clientId": "clientD", "clientName": "Cliente Delta", "costCenterId": "cc4", "costCenterName": "Centro Custo 4", "branchId": "branch4", "branchName": "Filial D", "regionId": "sudeste", "regionName": "Região Sudeste", "kpiType": "ON_TIME", "kpiValue": 93.0 },
        { "id": "kpi18", "date": "2025-09-09", "clientId": "clientD", "clientName": "Cliente Delta", "costCenterId": "cc4", "costCenterName": "Centro Custo 4", "branchId": "branch4", "branchName": "Filial D", "regionId": "sudeste", "regionName": "Região Sudeste", "kpiType": "OCUPACAO", "kpiValue": 87.0 },
        { "id": "kpi19", "date": "2025-09-09", "clientId": "clientD", "clientName": "Cliente Delta", "costCenterId": "cc4", "costCenterName": "Centro Custo 4", "branchId": "branch4", "branchName": "Filial D", "regionId": "sudeste", "regionName": "Região Sudeste", "kpiType": "TERCEIRO", "kpiValue": 18.0 },
        { "id": "kpi20", "date": "2025-09-09", "clientId": "clientD", "clientName": "Cliente Delta", "costCenterId": "cc4", "costCenterName": "Centro Custo 4", "branchId": "branch4", "branchName": "Filial D", "regionId": "sudeste", "regionName": "Região Sudeste", "kpiType": "DISPONIBILIDADE", "kpiValue": 96.0 },
        { "id": "kpi21", "date": "2025-09-09", "clientId": "clientE", "clientName": "Cliente Epsilon", "costCenterId": "cc5", "costCenterName": "Centro Custo 5", "branchId": "branch5", "branchName": "Filial E", "regionId": "sul", "regionName": "Região Sul", "kpiType": "RECEITA", "kpiValue": 65000.00 },
        { "id": "kpi22", "date": "2025-09-09", "clientId": "clientE", "clientName": "Cliente Epsilon", "costCenterId": "cc5", "costCenterName": "Centro Custo 5", "branchId": "branch5", "branchName": "Filial E", "regionId": "sul", "regionName": "Região Sul", "kpiType": "ON_TIME", "kpiValue": 96.0 },
        { "id": "kpi23", "date": "2025-09-09", "clientId": "clientE", "clientName": "Cliente Epsilon", "costCenterId": "cc5", "costCenterName": "Centro Custo 5", "branchId": "branch5", "branchName": "Filial E", "regionId": "sul", "regionName": "Região Sul", "kpiType": "OCUPACAO", "kpiValue": 89.0 },
        { "id": "kpi24", "date": "2025-09-09", "clientId": "clientE", "clientName": "Cliente Epsilon", "costCenterId": "cc5", "costCenterName": "Centro Custo 5", "branchId": "branch5", "branchName": "Filial E", "regionId": "sul", "regionName": "Região Sul", "kpiType": "TERCEIRO", "kpiValue": 12.0 },
        { "id": "kpi25", "date": "2025-09-09", "clientId": "clientE", "clientName": "Cliente Epsilon", "costCenterId": "cc5", "costCenterName": "Centro Custo 5", "branchId": "branch5", "branchName": "Filial E", "regionId": "sul", "regionName": "Região Sul", "kpiType": "DISPONIBILIDADE", "kpiValue": 99.0 }
    ],
    "regions": [
        { "id": "norte", "name": "Região Norte" },
        { "id": "nordeste", "name": "Região Nordeste" },
        { "id": "centro-oeste", "name": "Região Centro-Oeste" },
        { "id": "sudeste", "name": "Região Sudeste" },
        { "id": "sul", "name": "Região Sul" }
    ],
    "branches": [
        { "id": "branch1", "name": "Filial A", "regionId": "norte" },
        { "id": "branch2", "name": "Filial B", "regionId": "nordeste" },
        { "id": "branch3", "name": "Filial C", "regionId": "centro-oeste" },
        { "id": "branch4", "name": "Filial D", "regionId": "sudeste" },
        { "id": "branch5", "name": "Filial E", "regionId": "sul" }
    ],
    "costCenters": [
        { "id": "cc1", "name": "Centro Custo 1", "branchId": "branch1" },
        { "id": "cc2", "name": "Centro Custo 2", "branchId": "branch2" },
        { "id": "cc3", "name": "Centro Custo 3", "branchId": "branch3" },
        { "id": "cc4", "name": "Centro Custo 4", "branchId": "branch4" },
        { "id": "cc5", "name": "Centro Custo 5", "branchId": "branch5" }
    ],
    "clients": [
        { "id": "clientA", "name": "Cliente A", "costCenterId": "cc1" },
        { "id": "clientB", "name": "Cliente B", "costCenterId": "cc2" },
        { "id": "clientC", "name": "Cliente C", "costCenterId": "cc3" },
        { "id": "clientD", "name": "Cliente D", "costCenterId": "cc4" },
        { "id": "clientE", "name": "Cliente E", "costCenterId": "cc5" }
    ]
};

// --- NEW CHART DATA ---
const unidadesData = [
  { unidade: 'RMSP', bgt: 959, pm: 940, real: 937 },
  { unidade: 'RMRJ', bgt: 141, pm: 150, real: 164 },
  { unidade: 'CWBI', bgt: 120, pm: 110, real: 115 },
  { unidade: 'REC',  bgt: 80,  pm: 85,  real: 90  }
];
const tendenciaMensalData = [
  { mes: 'jan', bgt: 2752, pm: 2310 },
  { mes: 'fev', bgt: 2333, pm: 1906 },
  { mes: 'mar', bgt: 2100, pm: 2000 },
  { mes: 'abr', bgt: 2200, pm: 2100 }
];
const gaugesData = [
  {
    titulo: 'CATERING',
    valores: { bgt: 118, pm: 126, real: 36 },
    unidadesDisponiveis: ['REC', 'SSA', 'FOR', 'TODAS']
  },
  {
    titulo: 'FRACIONADO',
    valores: { bgt: 200, pm: 210, real: 100 },
    unidadesDisponiveis: ['RMSP', 'RMRJ', 'CWBI', 'TODAS']
  },
  {
    titulo: 'DEDICADO',
    valores: { bgt: 300, pm: 320, real: 150 },
    unidadesDisponiveis: ['REC', 'SSA', 'FOR', 'TODAS']
  }
];
// --- END NEW CHART DATA ---


// Variáveis globais
let selectedRegion = 'all';
let selectedBranch = 'all';
let selectedCostCenter = 'all';
let selectedClient = 'all';
let selectedYear = 2025; // Default to mock data year
let selectedMonth = [9]; // Default to mock data month (September, 1-indexed)
let metaSelecionada = 'bgt'; // 'bgt' ou 'pm' for new charts

// Função para calcular o resumo dos KPIs com base nos filtros (Original Function)
function calculateKpiSummary(filters, data) {
    const { regionId, branchId, costCenterId, clientId, year, months } = filters;

    const kpiSummary = {
        "RECEITA": { real: 0, bgt: 0, pm: 0 },
        "ON_TIME": { real: 0, bgt: 0, pm: 0 },
        "OCUPACAO": { real: 0, bgt: 0, pm: 0 },
        "TERCEIRO": { real: 0, bgt: 0, pm: 0 },
        "DISPONIBILIDADE": { real: 0, bgt: 0, pm: 0 }
    };

    const kpiCounts = {
        "RECEITA": 0,
        "ON_TIME": 0,
        "OCUPACAO": 0,
        "TERCEIRO": 0,
        "DISPONIBILIDADE": 0
    };

    let filteredKpiEntries = data.kpiEntries;

    if (regionId !== 'all') {
        filteredKpiEntries = filteredKpiEntries.filter(entry => entry.regionId === regionId);
    }
    if (branchId !== 'all') {
        filteredKpiEntries = filteredKpiEntries.filter(entry => entry.branchId === branchId);
    }
    if (costCenterId !== 'all') {
        filteredKpiEntries = filteredKpiEntries.filter(entry => entry.costCenterId === costCenterId);
    }
    if (clientId !== 'all') {
        filteredKpiEntries = filteredKpiEntries.filter(entry => entry.clientId === clientId);
    }
    if (year && months && months.length > 0) {
        filteredKpiEntries = filteredKpiEntries.filter(entry => {
            const entryDate = new Date(entry.date);
            return entryDate.getFullYear() === year && months.includes(entryDate.getMonth() + 1);
        });
    }

    filteredKpiEntries.forEach(entry => {
        if (kpiSummary[entry.kpiType]) {
            kpiSummary[entry.kpiType].real += entry.kpiValue;
            kpiCounts[entry.kpiType]++;
        }
    });

    const percentageKPIs = ["ON_TIME", "OCUPACAO", "TERCEIRO", "DISPONIBILIDADE"];
    percentageKPIs.forEach(kpiType => {
        if (kpiCounts[kpiType] > 0) {
            kpiSummary[kpiType].real /= kpiCounts[kpiType];
        }
    });

    const multiplier = {
        RECEITA: { bgt: 0.93, pm: 0.9 },
        ON_TIME: { bgt: 1.01, pm: 0.97 },
        OCUPACAO: { bgt: 0.99, pm: 0.96 },
        TERCEIRO: { bgt: 1.1, pm: 1.05 },
        DISPONIBILIDADE: { bgt: 0.98, pm: 0.97 }
    };

    for (const kpiType in kpiSummary) {
        if (kpiSummary.hasOwnProperty(kpiType)) {
            const realValue = kpiSummary[kpiType].real;
            kpiSummary[kpiType].bgt = realValue / multiplier[kpiType].bgt;
            kpiSummary[kpiType].pm = realValue / multiplier[kpiType].pm;
        }
    }

    const formattedKpiData = [
        {
            title: 'Receita',
            icon: 'dollar-sign',
            color: '#3498db',
            value: `R$ ${kpiSummary.RECEITA.real.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            budget: `R$ ${kpiSummary.RECEITA.bgt.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            previous: `R$ ${kpiSummary.RECEITA.pm.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            type: 'currency'
        },
        {
            title: 'On Time',
            icon: 'clock',
            color: '#2ecc71',
            value: `${kpiSummary.ON_TIME.real.toFixed(1)}%`,
            budget: `${kpiSummary.ON_TIME.bgt.toFixed(1)}%`,
            previous: `${kpiSummary.ON_TIME.pm.toFixed(1)}%`,
            type: 'percentage'
        },
        {
            title: 'Ocupação',
            icon: 'box',
            color: '#f39c12',
            value: `${kpiSummary.OCUPACAO.real.toFixed(1)}%`,
            budget: `${kpiSummary.OCUPACAO.bgt.toFixed(1)}%`,
            previous: `${kpiSummary.OCUPACAO.pm.toFixed(1)}%`,
            type: 'percentage'
        },
        {
            title: 'Terceiro',
            icon: 'truck',
            color: '#9b59b6',
            value: `${kpiSummary.TERCEIRO.real.toFixed(1)}%`,
            budget: `${kpiSummary.TERCEIRO.bgt.toFixed(1)}%`,
            previous: `${kpiSummary.TERCEIRO.pm.toFixed(1)}%`,
            type: 'percentage'
        },
        {
            title: 'Disponibilidade',
            icon: 'warehouse',
            color: '#e74c3c',
            value: `${kpiSummary.DISPONIBILIDADE.real.toFixed(1)}%`,
            budget: `${kpiSummary.DISPONIBILIDADE.bgt.toFixed(1)}%`,
            previous: `${kpiSummary.DISPONIBILIDADE.pm.toFixed(1)}%`,
            type: 'percentage'
        }
    ];

    formattedKpiData.forEach(kpi => {
        const real = parseFloat(kpi.value.replace(/[R$%,.]/g, '').replace(',', '.'));
        const budget = parseFloat(kpi.budget.replace(/[R$%,.]/g, '').replace(',', '.'));
        const previous = parseFloat(kpi.previous.replace(/[R$%,.]/g, '').replace(',', '.'));

        const budgetDiff = ((real - budget) / budget) * 100;
        const previousDiff = ((real - previous) / previous) * 100;

        kpi.budgetDiff = `${budgetDiff >= 0 ? '+' : ''}${budgetDiff.toFixed(2)}%`;
        kpi.previousDiff = `${previousDiff >= 0 ? '+' : ''}${previousDiff.toFixed(2)}%`;

        kpi.budgetStatus = budgetDiff >= 0 ? 'positive' : 'negative';
        kpi.previousStatus = previousDiff >= 0 ? 'positive' : 'negative';
        
        if (kpi.title === 'Terceiro') {
            kpi.budgetStatus = budgetDiff >= 0 ? 'negative' : 'positive';
            kpi.previousStatus = previousDiff >= 0 ? 'negative' : 'positive';
        }
    });

    return formattedKpiData;
}

// DOMContentLoaded - Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    // --- ORIGINAL INITIALIZATION ---
    const regionFilter = document.getElementById('regionFilter');
    const branchFilter = document.getElementById('branchFilter');
    const costCenterFilter = document.getElementById('costCenterFilter');
    const clientFilter = document.getElementById('clientFilter');

    populateFilter(regionFilter, mockData.regions, 'all', 'Todas as Regiões');

    // New Year and Month Filters
    const yearFilter = document.getElementById('yearFilter');
    const monthSelector = document.getElementById('monthSelector');

    populateYearFilter(yearFilter);
    populateMonthSelector(monthSelector);

    yearFilter.addEventListener('change', () => {
        selectedYear = parseInt(yearFilter.value);
        updateDashboard();
    });

    let isDragging = false;
    let startMonth = -1;
    let endMonth = -1;

    monthSelector.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('month-button')) {
            isDragging = true;
            startMonth = parseInt(event.target.dataset.month);
            endMonth = startMonth;
            selectedMonth = [startMonth]; // Start a new selection
            updateMonthButtons(); // Update visual state immediately
        }
    });

    monthSelector.addEventListener('mouseover', (event) => {
        if (isDragging && event.target.classList.contains('month-button')) {
            endMonth = parseInt(event.target.dataset.month);
            selectedMonth = getMonthsInRange(startMonth, endMonth);
            updateMonthButtons(); // Update visual state during drag
        }
    });

    monthSelector.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            updateDashboard(); // Update dashboard with final selection
        }
    });

    // Also handle mouseup outside the month selector in case drag ends off-element
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            updateDashboard();
        }
    });

    regionFilter.addEventListener('change', () => {
        selectedRegion = regionFilter.value;
        selectedBranch = 'all';
        selectedCostCenter = 'all';
        selectedClient = 'all';
        populateFilter(branchFilter, mockData.branches.filter(b => b.regionId === selectedRegion || selectedRegion === 'all'), 'all', 'Todas as Filiais');
        branchFilter.disabled = selectedRegion === 'all';
        costCenterFilter.disabled = true;
        clientFilter.disabled = true;
        populateFilter(costCenterFilter, [], 'all', 'Todos os Centros de Custo');
        populateFilter(clientFilter, [], 'all', 'Todos os Clientes');
        updateDashboard();
    });

    branchFilter.addEventListener('change', () => {
        selectedBranch = branchFilter.value;
        selectedCostCenter = 'all';
        selectedClient = 'all';
        populateFilter(costCenterFilter, mockData.costCenters.filter(cc => cc.branchId === selectedBranch || selectedBranch === 'all'), 'all', 'Todos os Centros de Custo');
        costCenterFilter.disabled = selectedBranch === 'all';
        clientFilter.disabled = true;
        populateFilter(clientFilter, [], 'all', 'Todos os Clientes');
        updateDashboard();
    });

    costCenterFilter.addEventListener('change', () => {
        selectedCostCenter = costCenterFilter.value;
        selectedClient = 'all';
        populateFilter(clientFilter, mockData.clients.filter(c => c.costCenterId === selectedCostCenter || selectedCostCenter === 'all'), 'all', 'Todos os Clientes');
        clientFilter.disabled = selectedCostCenter === 'all';
        updateDashboard();
    });

    clientFilter.addEventListener('change', () => {
        selectedClient = clientFilter.value;
        updateDashboard();
    });

    updateDashboard();
    // --- END ORIGINAL INITIALIZATION ---

    // --- NEW CHART INITIALIZATION ---
    initBarUnidadesChart();
    initBarTendenciaChart();
    renderGauges();

    const toggle = document.getElementById('toggleBgtPm');
    const toggleLabel = document.getElementById('toggleLabel');
    toggle.addEventListener('change', function() {
        metaSelecionada = toggle.checked ? 'pm' : 'bgt';
        toggleLabel.textContent = toggle.checked ? 'PM' : 'BGT';
        updateBarUnidadesChart();
        updateGauges();
    });
    // --- END NEW CHART INITIALIZATION ---
});

// Helper function to populate select dropdowns (Original)
function populateFilter(selectElement, options, defaultValue, defaultText) {
    selectElement.innerHTML = `<option value="${defaultValue}">${defaultText}</option>`;
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.id;
        opt.textContent = option.name;
        selectElement.appendChild(opt);
    });
}

// Criar cartões de KPI (Original)
function createKpiCards(kpiData) {
    const kpiCardsContainer = document.querySelector('.kpi-cards');
    if (!kpiCardsContainer) return;
    kpiCardsContainer.innerHTML = '';
    
    const currentDay = new Date().getDate();

    kpiData.forEach(kpi => {
        const card = document.createElement('div');
        card.className = 'kpi-card';
        card.innerHTML = `
            <div class="kpi-header">
                <div class="kpi-title">${kpi.title}</div>
                <div class="kpi-header-right">
                    <span class="kpi-day-indicator">${currentDay}°</span>
                    <div class="kpi-icon" style="background-color: ${kpi.color};">
                        <i class="fas fa-${kpi.icon}"></i>
                    </div>
                </div>
            </div>
            <div class="kpi-value-main">
                ${kpi.value}
            </div>
            <div class="kpi-comparison-group">
                <div class="kpi-comparison">
                    <span class="kpi-label">BGT:</span>
                    <span class="kpi-budget-value">${kpi.budget}</span>
                    <span class="kpi-diff ${kpi.budgetStatus}">
                        <i class="fas fa-${kpi.budgetStatus === 'positive' ? 'arrow-up' : 'arrow-down'}"></i> ${kpi.budgetDiff}
                    </span>
                </div>
                <div class="kpi-comparison">
                    <span class="kpi-label">P.M:</span>
                    <span class="kpi-previous-value">${kpi.previous}</span>
                    <span class="kpi-diff ${kpi.previousStatus}">
                        <i class="fas fa-${kpi.previousStatus === 'positive' ? 'arrow-up' : 'arrow-down'}"></i> ${kpi.previousDiff}
                    </span>
                </div>
            </div>
        `;
        kpiCardsContainer.appendChild(card);
    });
}

// Atualização do dashboard com base nos filtros (Original)
function updateDashboard() {
    const filters = {
        regionId: selectedRegion,
        branchId: selectedBranch,
        costCenterId: selectedCostCenter,
        clientId: selectedClient,
        year: selectedYear,
        months: selectedMonth // Pass the array of selected months
    };

    const kpiData = calculateKpiSummary(filters, mockData);
    createKpiCards(kpiData);
}


// --- NEW CHART FUNCTIONS ---
let barUnidadesChart;
function initBarUnidadesChart() {
  const ctx = document.getElementById('barUnidadesChart').getContext('2d');
  barUnidadesChart = new Chart(ctx, {
    type: 'bar',
    data: getBarUnidadesChartData(),
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y}`;
            }
          }
        }
      },
      scales: {
        x: { stacked: false },
        y: { beginAtZero: true }
      }
    }
  });
}
function getBarUnidadesChartData() {
  const total = unidadesData.reduce((acc, u) => ({
    bgt: acc.bgt + u.bgt,
    pm: acc.pm + u.pm,
    real: acc.real + u.real
  }), { bgt: 0, pm: 0, real: 0 });
  const labels = [...unidadesData.map(u => u.unidade), 'Total'];
  const metaData = [...unidadesData.map(u => u[metaSelecionada]), total[metaSelecionada]];
  const realData = [...unidadesData.map(u => u.real), total.real];

  return {
    labels,
    datasets: [
      {
        label: metaSelecionada.toUpperCase(),
        data: metaData,
        backgroundColor: metaSelecionada === 'bgt' ? '#3498db' : '#f39c12'
      },
      {
        label: 'Real',
        data: realData,
        backgroundColor: '#e67e22'
      }
    ]
  };
}
function updateBarUnidadesChart() {
  barUnidadesChart.data = getBarUnidadesChartData();
  barUnidadesChart.update();
}

let barTendenciaChart;
function initBarTendenciaChart() {
  const ctx = document.getElementById('barTendenciaChart').getContext('2d');
  barTendenciaChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tendenciaMensalData.map(d => d.mes),
      datasets: [
        {
          label: 'BGT',
          data: tendenciaMensalData.map(d => d.bgt),
          backgroundColor: '#3498db'
        },
        {
          label: 'PM',
          data: tendenciaMensalData.map(d => d.pm),
          backgroundColor: '#f39c12'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y}`;
            }
          }
        }
      },
      scales: {
        x: { stacked: false },
        y: { beginAtZero: true }
      }
    }
  });
}

// New function to populate year filter
function populateYearFilter(selectElement) {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 5; // 5 years back
    const endYear = currentYear + 1;   // 1 year forward

    selectElement.innerHTML = '';
    for (let year = startYear; year <= endYear; year++) {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        if (year === currentYear) {
            opt.selected = true;
        }
        selectElement.appendChild(opt);
    }
}

// New function to populate month selector
function populateMonthSelector(containerElement) {
    const months = [
        { name: 'Jan', value: 1 }, { name: 'Fev', value: 2 }, { name: 'Mar', value: 3 },
        { name: 'Abr', value: 4 }, { name: 'Mai', value: 5 }, { name: 'Jun', value: 6 },
        { name: 'Jul', value: 7 }, { name: 'Ago', value: 8 }, { name: 'Set', value: 9 },
        { name: 'Out', value: 10 }, { name: 'Nov', value: 11 }, { name: 'Dez', value: 12 }
    ];

    containerElement.innerHTML = '';
    months.forEach(month => {
        const button = document.createElement('button');
        button.className = 'month-button';
        button.dataset.month = month.value;
        button.textContent = month.name;
        if (selectedMonth.includes(month.value)) { // Check if month is in the array
            button.classList.add('active');
        }
        containerElement.appendChild(button);
    });
}

// Helper function to get months in a range
function getMonthsInRange(start, end) {
    const months = [];
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    for (let i = min; i <= max; i++) {
        months.push(i);
    }
    return months;
}

// Helper function to update month button active states
function updateMonthButtons() {
    const monthButtons = document.querySelectorAll('.month-button');
    monthButtons.forEach(button => {
        const monthValue = parseInt(button.dataset.month);
        if (selectedMonth.includes(monthValue)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function renderGauges() {
  gaugesData.forEach((gauge, idx) => {
    // Render ECharts gauge
    setTimeout(() => {
      renderGaugeEChart(`gauge-card-${idx}`, gauge.valores.real);
      // Preenche os valores nos campos de comparação
      document.getElementById(`gauge-bgt-${idx}`).textContent = gauge.valores.bgt;
      document.getElementById(`gauge-pm-${idx}`).textContent = gauge.valores.pm;
      document.getElementById(`gauge-real-${idx}`).textContent = gauge.valores.real;
    }, 0);
  });
}

function renderGaugeEChart(containerId, value) {
  const dom = document.getElementById(containerId);
  if (!dom) return;
  const myChart = echarts.init(dom);
  const option = {
    series: [{
      type: 'gauge',
      max: 166,
      startAngle: 180,
      endAngle: 0,
      progress: { show: false, width: 10 },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 10,
          color: [
            [33 / 166, '#d43714ff'],
            [66 / 166, '#ff9696ff'],
            [100 / 166, '#eeff00ff'],
            [133 / 166, '#7aff6eff'],
            [1, '#15ff00ff']
          ]
        }
      },
      axisTick: { show: false },
      splitLine: {
        length: 15,
        lineStyle: { width: 0, color: '#999' }
      },
      axisLabel: { show: false },
      pointer: {
        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
        length: '85%',
        width: 6,
        offsetCenter: [0, '0']
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 10,
        itemStyle: { borderWidth: 3 }
      },
      detail: {
        show: true,
        offsetCenter: [0, '80%'],
        formatter: function (value) {
          return value.toFixed(1) + '%';
        },
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333'
        }
      },
      data: [{ value }]
    }]
  };
  myChart.setOption(option, true);
}
