document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element Selectors ---
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mainContent = document.querySelector('.main-content');
    const travelDataTable = document.getElementById('travelDataTable');
    const travelDataTableHead = document.querySelector('#travelDataTable thead tr');
    const travelDataTableBody = document.querySelector('#travelDataTable tbody');
    const searchFilter = document.getElementById('searchFilter');
    const fileUpload = document.getElementById('fileUpload');
    const fileNameSpan = document.getElementById('fileName');
    const columnSelectorDropdown = document.getElementById('columnSelectorDropdown');
    const dateFilterDropdown = document.querySelector('.date-dropdown');

    // Select the dropdown buttons
    const columnDropdownBtn = document.querySelector('.actions-group .dropdown:nth-child(2) .dropdown-btn');
    const dateDropdownBtn = document.querySelector('.actions-group .dropdown:nth-child(3) .dropdown-btn');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const downloadTemplateBtn = document.getElementById('downloadTemplateBtn');
    const dragDropOverlay = document.getElementById('dragDropOverlay');
    const tableViewBtn = document.getElementById('tableViewBtn');
    const cardViewBtn = document.getElementById('cardViewBtn');
    const tableView = document.getElementById('table-view');
    const cardView = document.getElementById('card-view');
    const modal = document.getElementById('detailsModal');
    const modalCloseBtn = document.querySelector('.modal .close-btn');
    const modalBody = document.querySelector('.modal-body');
    const modalHeader = document.querySelector('.modal-header h2'); // Added
    const modalFooter = document.createElement('div'); // Added
    modalFooter.className = 'modal-footer'; // Added
    modal.querySelector('.modal-content').appendChild(modalFooter); // Added
    const expandTableBtn = document.getElementById('expandTableBtn'); // Added
    const tableResponsive = document.querySelector('.table-responsive'); // Added

    // --- Data Definitions ---
    const columnHeaders = [
        { key: 'NF', label: 'NF', group: 'Geral' },
        { key: 'CTE', label: 'CTE', group: 'Geral' },
        { key: 'Manifesto', label: 'Manifesto', group: 'Geral' },
        { key: 'Tipo', label: 'Tipo', group: 'Geral' },
        { key: 'CLIENTE', label: 'Cliente', group: 'Geral' },
        { key: 'DESTINATÁRIO', label: 'Destinatário', group: 'Geral' },
        { key: 'CIDADE', label: 'Cidade', group: 'Rota' },
        { key: 'RAIO', label: 'Raio', group: 'Rota' },
        { key: 'DURAÇÃO DA ROTA', label: 'Duração da Rota', group: 'Rota' },
        { key: 'PLACA', label: 'Placa', group: 'Veículo' },
        { key: 'FROTA', label: 'Frota', group: 'Veículo' },
        { key: 'MOTORISTA', label: 'Motorista', group: 'Veículo' },
        { key: 'Tipologia', label: 'Tipologia', group: 'Veículo' },
        { key: 'CAPACIDADE', label: 'Capacidade', group: 'Carga' },
        { key: 'PESO BRUTO', label: 'Peso Bruto', group: 'Carga' },
        { key: 'Devolução KG', label: 'Devolução KG', group: 'Carga' },
        { key: '% Devolução', label: '% Devolução', group: 'Carga' },
        { key: 'OCUPAÇÃO', label: 'Ocupação', group: 'Carga' },
        { key: 'Data Emissão', label: 'Status' },
        { key: 'FRETE PESO', label: 'Frete Peso', group: 'Financeiro' },
        { key: 'VALOR MERCADORIA', label: 'Valor Mercadoria', group: 'Financeiro' },
        { key: 'R$ p/KG', label: 'R$ p/KG', group: 'Financeiro' },
        { key: 'DROP', label: 'Drop', group: 'Rota' },
        { key: 'Lead Time - Cliente', label: 'Lead Time', group: 'Status' },
        { key: 'Baixa da Entrega', label: 'Baixa da Entrega', group: 'Status' },
        { key: 'On time', label: 'On Time', group: 'Status' },
        { key: 'DESCARGA', label: 'Descarga', group: 'Carga' },
        { key: 'Vlr Agregado', label: 'Vlr Agregado', group: 'Financeiro' }
    ];

    const columnGroups = columnHeaders.reduce((acc, header) => {
        const group = header.group;
        if (!acc[group]) {
            acc[group] = [];
        }
        acc[group].push(header);
        return acc;
    }, {});

    const mockData = [
        { "NF": 79990, "Tipo": "", "CLIENTE": "CANTO", "DESTINATÁRIO": "ATACADAO", "CIDADE": "ASA NORTE", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "TATU-01", "FROTA": "Agregado", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 958.2, "Devolução KG": "", "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-08-26 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "CTE": 100001, "VALOR MERCADORIA": 26862.73, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-05-04 00:00:00", "On time": "NOK", "DESCARGA": 500, "Vlr Agregado": 60 },
        { "NF": 79991, "Tipo": "Reentrega", "CLIENTE": "CANTO", "DESTINATÁRIO": "ATACADAO", "CIDADE": "ASA NORTE", "RAIO": "Interior", "DURAÇÃO DA ROTA": 3, "PLACA": "TATU-01", "FROTA": "FROTA", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 1113.23, "Devolução KG": "", "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-09-15 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "CTE": 100002, "VALOR MERCADORIA": 14748.46, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-18 00:00:00", "On time": "NOK", "DESCARGA": 350, "Vlr Agregado": 60 },
        { "NF": 80037, "Tipo": "NORMAL", "CLIENTE": "CANTO", "DESTINATÁRIO": "ASSAI", "CIDADE": "ASA NORTE", "RAIO": "", "DURAÇÃO DA ROTA": "", "PLACA": "TATU-01", "FROTA": "", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 236.2, "Devolução KG": "", "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-09-01 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "CTE": 100003, "VALOR MERCADORIA": 4285, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-04 00:00:00", "On time": "NOK", "DESCARGA": "", "Vlr Agregado": 60 },
        { "NF": 1240412, "Tipo": "", "CLIENTE": "FRUTAP", "DESTINATÁRIO": "", "CIDADE": "ASA NORTE", "RAIO": "", "DURAÇÃO DA ROTA": "", "PLACA": "TATU-01", "FROTA": "", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 349.808, "Devolução KG": "", "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-09-10 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "CTE": 100004, "VALOR MERCADORIA": 2740.07, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-13 00:00:00", "On time": "NOK", "DESCARGA": "", "Vlr Agregado": 60 },
        { "NF": 606762, "Tipo": "", "CLIENTE": "QUALITA", "DESTINATÁRIO": "ATACADAO S.A.", "CIDADE": "SIA", "RAIO": "", "DURAÇÃO DA ROTA": "", "PLACA": "TATU-01", "FROTA": "", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 72.96, "Devolução KG": 1000, "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-08-30 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "CTE": 100005, "VALOR MERCADORIA": 28, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-02 00:00:00", "On time": "NOK", "DESCARGA": "", "Vlr Agregado": 60 },
        { "NF": 80001, "Tipo": "NORMAL", "CLIENTE": "BIMBO", "DESTINATÁRIO": "PÃO DE AÇÚCAR", "CIDADE": "LAGO SUL", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2, "PLACA": "TRUCK-05", "FROTA": "FROTA", "MOTORISTA": "CARLOS", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 5600.5, "Devolução KG": 50, "% Devolução": "0.89%", "OCUPAÇÃO": "46.67%", "Data Emissão": "2025-09-20 00:00:00", "FRETE PESO": 800, "Manifesto": 2, "CTE": 100006, "VALOR MERCADORIA": 85000, "R$ p/KG": 0.15, "DROP": 5, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-09-21 00:00:00", "On time": "OK", "DESCARGA": 1200, "Vlr Agregado": 150 },
        { "NF": 80002, "Tipo": "NORMAL", "CLIENTE": "NESTLE", "DESTINATÁRIO": "CARREFOUR", "CIDADE": "TAGUATINGA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1.5, "PLACA": "VAN-03", "FROTA": "Agregado", "MOTORISTA": "MARIA", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 3250.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "40.63%", "Data Emissão": "2025-09-20 00:00:00", "FRETE PESO": 450, "Manifesto": 3, "CTE": 100007, "VALOR MERCADORIA": 45000, "R$ p/KG": 0.14, "DROP": 8, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-20 00:00:00", "On time": "OK", "DESCARGA": 800, "Vlr Agregado": 100 },
        { "NF": 80003, "Tipo": "Devolução", "CLIENTE": "DANONE", "DESTINATÁRIO": "BIG BOX", "CIDADE": "GUARA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "MOTO-07", "FROTA": "Agregado", "MOTORISTA": "JOÃO", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 150.7, "Devolução KG": 150.7, "% Devolução": "100%", "OCUPAÇÃO": "30.14%", "Data Emissão": "2025-09-21 00:00:00", "FRETE PESO": 50, "Manifesto": 4, "CTE": 100008, "VALOR MERCADORIA": 3000, "R$ p/KG": 0.33, "DROP": 1, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-21 00:00:00", "On time": "OK", "DESCARGA": 100, "Vlr Agregado": 20 },
        { "NF": 80004, "Tipo": "NORMAL", "CLIENTE": "AMBEV", "DESTINATÁRIO": "DISTRIBUIDORA XYZ", "CIDADE": "FORMOSA", "RAIO": "Interior", "DURAÇÃO DA ROTA": 5, "PLACA": "CARRETA-01", "FROTA": "FROTA", "MOTORISTA": "PEDRO", "Tipologia": "Super Pesado", "CAPACIDADE": 25000, "PESO BRUTO": 24500.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "98%", "Data Emissão": "2025-09-22 00:00:00", "FRETE PESO": 3000, "Manifesto": 5, "CTE": 100009, "VALOR MERCADORIA": 150000, "R$ p/KG": 0.12, "DROP": 1, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-25 00:00:00", "On time": "OK", "DESCARGA": 2500, "Vlr Agregado": 300 },
        { "NF": 80005, "Tipo": "NORMAL", "CLIENTE": "COCA-COLA", "DESTINATÁRIO": "WALMART", "CIDADE": "ÁGUAS CLARAS", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2, "PLACA": "TRUCK-02", "FROTA": "FROTA", "MOTORISTA": "ANA", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 9800.0, "Devolução KG": 120, "% Devolução": "1.22%", "OCUPAÇÃO": "81.67%", "Data Emissão": "2025-09-22 00:00:00", "FRETE PESO": 1100, "Manifesto": 6, "CTE": 100010, "VALOR MERCADORIA": 95000, "R$ p/KG": 0.11, "DROP": 3, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-22 00:00:00", "On time": "OK", "DESCARGA": 1000, "Vlr Agregado": 120 },
        { "NF": 80006, "Tipo": "Reentrega", "CLIENTE": "P&G", "DESTINATÁRIO": "DROGARIA ROSARIO", "CIDADE": "CEILÂNDIA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2.5, "PLACA": "VAN-01", "FROTA": "Agregado", "MOTORISTA": "LUCAS", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 4200.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "52.5%", "Data Emissão": "2025-09-23 00:00:00", "FRETE PESO": 500, "Manifesto": 7, "CTE": 100011, "VALOR MERCADORIA": 60000, "R$ p/KG": 0.12, "DROP": 12, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-09-24 00:00:00", "On time": "OK", "DESCARGA": 600, "Vlr Agregado": 90 },
        { "NF": 80007, "Tipo": "NORMAL", "CLIENTE": "UNILEVER", "DESTINATÁRIO": "SUPERMAIA", "CIDADE": "SAMAMBAIA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 3, "PLACA": "TRUCK-03", "FROTA": "FROTA", "MOTORISTA": "FERNANDA", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 7500.8, "Devolução KG": 300, "% Devolução": "4%", "OCUPAÇÃO": "62.51%", "Data Emissão": "2025-09-24 00:00:00", "FRETE PESO": 900, "Manifesto": 8, "CTE": 100012, "VALOR MERCADORIA": 78000, "R$ p/KG": 0.12, "DROP": 7, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-09-25 00:00:00", "On time": "OK", "DESCARGA": 950, "Vlr Agregado": 110 },
        { "NF": 80008, "Tipo": "NORMAL", "CLIENTE": "MONDELEZ", "DESTINATÁRIO": "ULTRA BOX", "CIDADE": "RECANTO DAS EMAS", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2, "PLACA": "VAN-02", "FROTA": "Agregado", "MOTORISTA": "GABRIEL", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 2100.3, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "26.25%", "Data Emissão": "2025-09-25 00:00:00", "FRETE PESO": 300, "Manifesto": 9, "CTE": 100013, "VALOR MERCADORIA": 35000, "R$ p/KG": 0.14, "DROP": 15, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-25 00:00:00", "On time": "OK", "DESCARGA": 400, "Vlr Agregado": 75 },
        { "NF": 80009, "Tipo": "NORMAL", "CLIENTE": "KRAFT HEINZ", "DESTINATÁRIO": "DONA DE CASA", "CIDADE": "GAMA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 3.5, "PLACA": "TRUCK-04", "FROTA": "FROTA", "MOTORISTA": "RODRIGO", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 11500.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "95.83%", "Data Emissão": "2025-09-26 00:00:00", "FRETE PESO": 1300, "Manifesto": 10, "CTE": 100014, "VALOR MERCADORIA": 110000, "R$ p/KG": 0.11, "DROP": 4, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-09-27 00:00:00", "On time": "OK", "DESCARGA": 1500, "Vlr Agregado": 180 },
        { "NF": 80010, "Tipo": "NORMAL", "CLIENTE": "PEPSICO", "DESTINATÁRIO": "ATACADÃO DIA A DIA", "CIDADE": "SANTA MARIA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2.5, "PLACA": "TRUCK-01", "FROTA": "FROTA", "MOTORISTA": "JULIANA", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 8800.0, "Devolução KG": 50, "% Devolução": "0.57%", "OCUPAÇÃO": "73.33%", "Data Emissão": "2025-09-27 00:00:00", "FRETE PESO": 1000, "Manifesto": 11, "CTE": 100015, "VALOR MERCADORIA": 92000, "R$ p/KG": 0.11, "DROP": 6, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-27 00:00:00", "On time": "OK", "DESCARGA": 1100, "Vlr Agregado": 130 },
        { "NF": 80011, "Tipo": "NORMAL", "CLIENTE": "MARS", "DESTINATÁRIO": "LEÃO SUPERMERCADO", "CIDADE": "PLANALTINA", "RAIO": "Interior", "DURAÇÃO DA ROTA": 4, "PLACA": "VAN-04", "FROTA": "Agregado", "MOTORISTA": "RAFAEL", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 6300.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "78.75%", "Data Emissão": "2025-09-28 00:00:00", "FRETE PESO": 750, "Manifesto": 12, "CTE": 100016, "VALOR MERCADORIA": 70000, "R$ p/KG": 0.12, "DROP": 9, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-10-01 00:00:00", "On time": "OK", "DESCARGA": 800, "Vlr Agregado": 100 },
        { "NF": 80012, "Tipo": "NORMAL", "CLIENTE": "COLGATE", "DESTINATÁRIO": "FARMACIA POPULAR", "CIDADE": "SOBRADINHO", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2, "PLACA": "MOTO-02", "FROTA": "Agregado", "MOTORISTA": "TIAGO", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 250.5, "Devolução KG": 10, "% Devolução": "3.99%", "OCUPAÇÃO": "50.1%", "Data Emissão": "2025-09-29 00:00:00", "FRETE PESO": 60, "Manifesto": 13, "CTE": 100017, "VALOR MERCADORIA": 5000, "R$ p/KG": 0.24, "DROP": 20, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-29 00:00:00", "On time": "OK", "DESCARGA": 150, "Vlr Agregado": 25 },
        { "NF": 80013, "Tipo": "NORMAL", "CLIENTE": "JOHNSON & JOHNSON", "DESTINATÁRIO": "VENANCIO", "CIDADE": "CRUZEIRO", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1.5, "PLACA": "VAN-05", "FROTA": "FROTA", "MOTORISTA": "BRUNA", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 3800.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "47.5%", "Data Emissão": "2025-09-30 00:00:00", "FRETE PESO": 480, "Manifesto": 14, "CTE": 100018, "VALOR MERCADORIA": 55000, "R$ p/KG": 0.13, "DROP": 11, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-30 00:00:00", "On time": "OK", "DESCARGA": 500, "Vlr Agregado": 80 },
        { "NF": 80014, "Tipo": "NORMAL", "CLIENTE": "KIMBERLY-CLARK", "DESTINATÁRIO": "EXTRA", "CIDADE": "SUDOESTE", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "TRUCK-06", "FROTA": "Agregado", "MOTORISTA": "DIEGO", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 6900.0, "Devolução KG": 200, "% Devolução": "2.9%", "OCUPAÇÃO": "57.5%", "Data Emissão": "2025-10-01 00:00:00", "FRETE PESO": 800, "Manifesto": 15, "CTE": 100019, "VALOR MERCADORIA": 72000, "R$ p/KG": 0.12, "DROP": 2, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-01 00:00:00", "On time": "OK", "DESCARGA": 900, "Vlr Agregado": 100 },
        { "NF": 80015, "Tipo": "NORMAL", "CLIENTE": "GAROTO", "DESTINATÁRIO": "BOMBOCADO", "CIDADE": "NOROESTE", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "VAN-06", "FROTA": "FROTA", "MOTORISTA": "FELIPE", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 1500.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "18.75%", "Data Emissão": "2025-10-02 00:00:00", "FRETE PESO": 250, "Manifesto": 16, "CTE": 100020, "VALOR MERCADORIA": 25000, "R$ p/KG": 0.17, "DROP": 18, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-02 00:00:00", "On time": "OK", "DESCARGA": 300, "Vlr Agregado": 50 },
        { "NF": 80016, "Tipo": "NORMAL", "CLIENTE": "FERRERO", "DESTINATÁRIO": "AMERICANAS", "CIDADE": "PARK SUL", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1.5, "PLACA": "VAN-07", "FROTA": "Agregado", "MOTORISTA": "VANESSA", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 3300.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "41.25%", "Data Emissão": "2025-10-03 00:00:00", "FRETE PESO": 400, "Manifesto": 17, "CTE": 100021, "VALOR MERCADORIA": 48000, "R$ p/KG": 0.12, "DROP": 10, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-03 00:00:00", "On time": "OK", "DESCARGA": 450, "Vlr Agregado": 70 },
        { "NF": 80017, "Tipo": "NORMAL", "CLIENTE": "PERFETTI", "DESTINATÁRIO": "POSTO IPIRANGA", "CIDADE": "EPIA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 0.5, "PLACA": "MOTO-01", "FROTA": "Agregado", "MOTORISTA": "MARCELO", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 80.2, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "16.04%", "Data Emissão": "2025-10-04 00:00:00", "FRETE PESO": 30, "Manifesto": 18, "CTE": 100022, "VALOR MERCADORIA": 1500, "R$ p/KG": 0.37, "DROP": 25, "Lead Time - Cliente": 0, "Baixa da Entrega": "2025-10-04 00:00:00", "On time": "OK", "DESCARGA": 50, "Vlr Agregado": 15 },
        { "NF": 80018, "Tipo": "NORMAL", "CLIENTE": "RICLAN", "DESTINATÁRIO": "PADARIA PÃO DOURADO", "CIDADE": "ASA SUL", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "MOTO-03", "FROTA": "Agregado", "MOTORISTA": "SANDRA", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 120.0, "Devolução KG": 5, "% Devolução": "4.17%", "OCUPAÇÃO": "24%", "Data Emissão": "2025-10-05 00:00:00", "FRETE PESO": 40, "Manifesto": 19, "CTE": 100023, "VALOR MERCADORIA": 2200, "R$ p/KG": 0.33, "DROP": 13, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-05 00:00:00", "On time": "OK", "DESCARGA": 80, "Vlr Agregado": 18 },
        { "NF": 80019, "Tipo": "NORMAL", "CLIENTE": "HARIBO", "DESTINATÁRIO": "CASA DO COLEGA", "CIDADE": "VILA PLANALTO", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "MOTO-04", "FROTA": "Agregado", "MOTORISTA": "ROBERTO", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 95.5, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "19.1%", "Data Emissão": "2025-10-06 00:00:00", "FRETE PESO": 35, "Manifesto": 20, "CTE": 100024, "VALOR MERCADORIA": 1800, "R$ p/KG": 0.37, "DROP": 17, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-06 00:00:00", "On time": "OK", "DESCARGA": 60, "Vlr Agregado": 16 },
        { "NF": 80020, "Tipo": "NORMAL", "CLIENTE": "PERNOD RICARD", "DESTINATÁRIO": "ADEGA DO CHEFE", "CIDADE": "LUZIÂNIA", "RAIO": "Interior", "DURAÇÃO DA ROTA": 6, "PLACA": "CARRETA-02", "FROTA": "FROTA", "MOTORISTA": "CLAUDIO", "Tipologia": "Super Pesado", "CAPACIDADE": 25000, "PESO BRUTO": 22000.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "88%", "Data Emissão": "2025-10-07 00:00:00", "FRETE PESO": 2800, "Manifesto": 21, "CTE": 100025, "VALOR MERCADORIA": 250000, "R$ p/KG": 0.13, "DROP": 1, "Lead Time - Cliente": 4, "Baixa da Entrega": "2025-10-11 00:00:00", "On time": "OK", "DESCARGA": 2800, "Vlr Agregado": 400 },
        { "NF": 80021, "Tipo": "NORMAL", "CLIENTE": "DIAGEO", "DESTINATÁRIO": "SHOPPING BEBIDAS", "CIDADE": "VALPARAÍSO", "RAIO": "Interior", "DURAÇÃO DA ROTA": 4.5, "PLACA": "TRUCK-07", "FROTA": "Agregado", "MOTORISTA": "PATRICIA", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 10500.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "87.5%", "Data Emissão": "2025-10-08 00:00:00", "FRETE PESO": 1200, "Manifesto": 22, "CTE": 100026, "VALOR MERCADORIA": 130000, "R$ p/KG": 0.11, "DROP": 2, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-10-11 00:00:00", "On time": "OK", "DESCARGA": 1300, "Vlr Agregado": 200 },
        { "NF": 80022, "Tipo": "NORMAL", "CLIENTE": "BACARDI", "DESTINATÁRIO": "BAR DO JORGE", "CIDADE": "CIDADE OCIDENTAL", "RAIO": "Interior", "DURAÇÃO DA ROTA": 3, "PLACA": "VAN-08", "FROTA": "FROTA", "MOTORISTA": "MARCOS", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 5000.0, "Devolução KG": 150, "% Devolução": "3%", "OCUPAÇÃO": "62.5%", "Data Emissão": "2025-10-09 00:00:00", "FRETE PESO": 600, "Manifesto": 23, "CTE": 100027, "VALOR MERCADORIA": 65000, "R$ p/KG": 0.12, "DROP": 5, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-10-10 00:00:00", "On time": "OK", "DESCARGA": 700, "Vlr Agregado": 95 },
        { "NF": 80023, "Tipo": "NORMAL", "CLIENTE": "CAMPARI", "DESTINATÁRIO": "MERCADINHO DO ZE", "CIDADE": "NOVO GAMA", "RAIO": "Interior", "DURAÇÃO DA ROTA": 3.5, "PLACA": "VAN-09", "FROTA": "Agregado", "MOTORISTA": "TATIANA", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 4800.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "60%", "Data Emissão": "2025-10-10 00:00:00", "FRETE PESO": 550, "Manifesto": 24, "CTE": 100028, "VALOR MERCADORIA": 58000, "R$ p/KG": 0.11, "DROP": 8, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-10-11 00:00:00", "On time": "OK", "DESCARGA": 600, "Vlr Agregado": 85 },
        { "NF": 80024, "Tipo": "NORMAL", "CLIENTE": "HEINEKEN", "DESTINATÁRIO": "CONVENIENCIA 24H", "CIDADE": "ÁGUAS LINDAS", "RAIO": "Interior", "DURAÇÃO DA ROTA": 5, "PLACA": "TRUCK-08", "FROTA": "FROTA", "MOTORISTA": "LEONARDO", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 11800.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "98.33%", "Data Emissão": "2025-10-11 00:00:00", "FRETE PESO": 1400, "Manifesto": 25, "CTE": 100029, "VALOR MERCADORIA": 120000, "R$ p/KG": 0.12, "DROP": 3, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-10-14 00:00:00", "On time": "OK", "DESCARGA": 1500, "Vlr Agregado": 190 },
        { "NF": 80025, "Tipo": "NORMAL", "CLIENTE": "BUDWEISER", "DESTINATÁRIO": "ESPETINHO DO MI", "CIDADE": "SANTO ANTÔNIO", "RAIO": "Interior", "DURAÇÃO DA ROTA": 4, "PLACA": "TRUCK-09", "FROTA": "Agregado", "MOTORISTA": "SIMONE", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 9200.0, "Devolução KG": 300, "% Devolução": "3.26%", "OCUPAÇÃO": "76.67%", "Data Emissão": "2025-10-12 00:00:00", "FRETE PESO": 1100, "Manifesto": 26, "CTE": 100030, "VALOR MERCADORIA": 95000, "R$ p/KG": 0.12, "DROP": 4, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-10-15 00:00:00", "On time": "OK", "DESCARGA": 1200, "Vlr Agregado": 150 }
    ];

    // --- State Management ---
    let currentTableData = [...mockData];
    let visibleColumns = columnHeaders.map(col => col.key);

    // --- Functions ---

    /**
     * Formata uma string de data no formato ano-mês-dia para dia/mês/ano.
     * @param {string} dateStr A string da data a ser formatada.
     * @returns {string} A string da data formatada.
     */
    function formatDateBR(dateStr) {
        if (!dateStr) return '';
        const [year, month, day] = dateStr.split('-');
        if (year && month && day) return `${day}/${month}/${year}`;
        return dateStr;
    }

    /**
     * Renders the table headers and body based on current state.
     */
    function renderTable() {
        travelDataTableHead.innerHTML = '';
        travelDataTableBody.innerHTML = '';

        const visibleColumnHeaders = columnHeaders.filter(h => visibleColumns.includes(h.key));

        visibleColumnHeaders.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header.label;
            travelDataTableHead.appendChild(th);
        });

        // Add a header for the edit button column
        const thEdit = document.createElement('th');
        thEdit.textContent = 'Ações';
        travelDataTableHead.appendChild(thEdit);

        currentTableData.forEach(rowData => {
            const tr = document.createElement('tr');
            tr.dataset.id = rowData.NF; // Add data-id for linking
            visibleColumnHeaders.forEach(header => {
                const td = document.createElement('td');
                let value = rowData[header.key] !== undefined ? rowData[header.key] : '';
                
                if (header.key === 'Data Emissão' || header.key === 'Baixa da Entrega') {
                    value = value ? formatDateBR(String(value).split(' ')[0]) : '';
                }
                if (header.key === 'PESO BRUTO' && typeof value === 'number') {
                    value = Math.round(value);
                }

                td.textContent = value;
                td.dataset.field = header.key; // Add data-field for download functionality
                if (['NF', 'Manifesto', 'CTE'].includes(header.key)) {
                    td.classList.add('downloadable-field');
                }
                tr.appendChild(td);
            });

            // Add Edit button to each row
            const editTd = document.createElement('td');
            const editButton = document.createElement('button');
            editButton.className = 'icon-btn edit-row-btn';
            editButton.innerHTML = '<i class="fas fa-edit"></i>';
            editButton.title = 'Editar Linha';
            editButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent row selection
                const tripId = parseInt(tr.dataset.id, 10);
                const tripData = currentTableData.find(d => d.NF === tripId);
                if (tripData) {
                    openModal(tripData, null, true); // Open in edit mode
                }
            });
            editTd.appendChild(editButton);
            tr.appendChild(editTd);

            travelDataTableBody.appendChild(tr);
        });
    }

    /**
     * Renders the data as cards.
     */
    function renderCards() {
        cardView.innerHTML = '';
        currentTableData.forEach(data => {
            const card = document.createElement('div');
            card.className = 'trip-card';
            card.dataset.id = data.NF;

            const importantInfo = {
                'NF': data.NF,
                'Cliente': data.CLIENTE,
                'Destinatário': data.DESTINATÁRIO,
                'Cidade': data.CIDADE,
            };

            // Apply custom rounding for 'PESO BRUTO'
            let pesoBrutoValue = data['PESO BRUTO'];
            if (typeof pesoBrutoValue === 'number') {
                const decimalPart = pesoBrutoValue - Math.floor(pesoBrutoValue);
                if (decimalPart <= 0.5) {
                    pesoBrutoValue = Math.floor(pesoBrutoValue);
                } else {
                    pesoBrutoValue = Math.ceil(pesoBrutoValue);
                }
            }
            importantInfo['PESO BRUTO'] = pesoBrutoValue;

            let mainInfoHtml = `
                <div class="card-title-and-menu">
                    <h3>Viagem NF ${data.NF}</h3>
                    <div class="card-menu">
                        <button class="menu-btn"><i class="fas fa-ellipsis-v"></i></button>
                    </div>
                </div>
                <div class="info-grid">
            `;
            for (const [key, value] of Object.entries(importantInfo)) {
                const isDownloadable = ['NF', 'Manifesto', 'CTE'].includes(key) ? 'downloadable-field' : '';
                mainInfoHtml += `
                    <div class="info-item">
                        <strong>${key}</strong>
                        <span data-field="${key}" class="${isDownloadable}">${value || 'N/A'}</span>
                    </div>`;
            }
            mainInfoHtml += `</div>`;

            card.innerHTML = `
                <div class="card-main-info">
                    ${mainInfoHtml}
                </div>
                <div class="card-actions">
                    <button class="view-details-btn">Ver Detalhes</button>
                    <button class="icon-btn edit-card-btn" title="Editar Card">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                </div>
            `;
            cardView.appendChild(card);
        });
    }

    /**
     * Switches between table and card view.
     * @param {string} viewToShow 'table' or 'card'
     */
    function switchView(viewToShow) {
        if (viewToShow === 'card') {
            tableView.style.display = 'none';
            cardView.style.display = 'grid';
            tableViewBtn.classList.remove('active');
            cardViewBtn.classList.add('active');
            renderCards();
        } else {
            cardView.style.display = 'none';
            tableView.style.display = 'block';
            cardViewBtn.classList.remove('active');
            tableViewBtn.classList.add('active');
            renderTable();
        }
    }

    /**
     * Opens the modal with trip details.
     * @param {object} data The data for the selected trip.
     * @param {string|null} specificField The specific field to show, if any.
     * @param {boolean} isEditable Whether the modal should open in edit mode.
     */
    function openModal(data, specificField = null, isEditable = false) {
        modalBody.innerHTML = '';
        modalFooter.innerHTML = ''; // Clear footer content
        document.body.style.overflow = 'hidden'; // Disable body scroll

        modalHeader.textContent = isEditable ? 'Editar Detalhes da Viagem' : 'Detalhes da Viagem';

        let content = '<div class="info-grid">';
        if (specificField) {
            const col = columnHeaders.find(h => h.key === specificField);
            if (col) {
                const value = data[col.key] !== undefined ? data[col.key] : '';
                const displayValue = (col.key === 'Data Emissão' || col.key === 'Baixa da Entrega') && value ? formatDateBR(String(value).split(' ')[0]) : value;
                const isDownloadable = ['NF', 'Manifesto', 'CTE'].includes(col.key);

                content += `
                    <div class="info-item">
                        <strong>${col.label}</strong>
                        <div class="value-and-button">
                            <span>${displayValue || 'N/A'}</span>
                            ${isDownloadable ? `<button class="download-btn" data-field="${col.key}" data-value="${value}"><i class="fas fa-download"></i> Baixar</button>` : ''}
                        </div>
                    </div>
                `;
            }
        } else {
            columnHeaders.forEach(col => {
                const value = data[col.key] !== undefined ? data[col.key] : '';
                const displayValue = (col.key === 'Data Emissão' || col.key === 'Baixa da Entrega') && value ? formatDateBR(String(value).split(' ')[0]) : value;
                const isDownloadable = ['NF', 'Manifesto', 'CTE'].includes(col.key);

                content += `
                    <div class="info-item">
                        <strong>${col.label}</strong>
                        <div class="value-and-button">
                `;
                if (isEditable) {
                    // For editing, use input fields
                    content += `<input type="text" data-key="${col.key}" value="${value}" ${col.key === 'NF' ? 'readonly' : ''}>`; // NF is read-only
                } else {
                    // For viewing, use span and download button
                    content += `<span>${displayValue || 'N/A'}</span>`;
                    if (isDownloadable) {
                        content += `<button class="download-btn" data-field="${col.key}" data-value="${value}"><i class="fas fa-download"></i> Baixar</button>`;
                    }
                }
                content += `
                        </div>
                    </div>
                `;
            });
        }
        content += '</div>';
        modalBody.innerHTML = content;

        if (isEditable) {
            const saveBtn = document.createElement('button');
            saveBtn.className = 'primary-btn';
            saveBtn.textContent = 'Salvar Alterações';
            saveBtn.addEventListener('click', () => saveChanges(data.NF));

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'secondary-btn';
            cancelBtn.textContent = 'Cancelar';
            cancelBtn.addEventListener('click', closeModal);

            modalFooter.appendChild(saveBtn);
            modalFooter.appendChild(cancelBtn);
        }

        modal.style.display = 'flex'; // Use flex to center the modal

        // Attach download button listeners (only if not in editable mode)
        if (!isEditable) {
            modalBody.querySelectorAll('.download-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const field = e.currentTarget.dataset.field;
                    const value = e.currentTarget.dataset.value;
                    handleDownload(field, value);
                });
            });
        }
    }

    /**
     * Closes the modal.
     */
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable body scroll
    }

    /**
     * Saves changes made in the modal to the currentTableData.
     * @param {number} tripId The NF of the trip being edited.
     */
    function saveChanges(tripId) {
        const updatedData = {};
        modalBody.querySelectorAll('input[data-key]').forEach(input => {
            updatedData[input.dataset.key] = input.value;
        });

        const index = currentTableData.findIndex(d => d.NF === tripId);
        if (index !== -1) {
            // Update the specific row data
            currentTableData[index] = { ...currentTableData[index], ...updatedData };
            // Re-render both views to reflect changes
            if (tableView.style.display !== 'none') {
                renderTable();
            } else {
                renderCards();
            }
            alert('Alterações salvas com sucesso!');
            closeModal();
        } else {
            alert('Erro: Viagem não encontrada para salvar as alterações.');
        }
    }

    /**
     * Populates the column selector dropdown with checkboxes.
     */
    function populateColumnSelector() {
        columnSelectorDropdown.innerHTML = '';
        columnHeaders.forEach(col => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = col.key;
            checkbox.checked = visibleColumns.includes(col.key);
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${col.label}`));
            columnSelectorDropdown.appendChild(label);

            checkbox.addEventListener('change', () => {
                visibleColumns = Array.from(columnSelectorDropdown.querySelectorAll('input:checked')).map(cb => cb.value);
                renderTable();
            });
        });
    }

    /**
     * Applies all active filters and re-renders the table.
     */
    function applyFilters() {
        let filteredData = [...mockData];
        const searchTerm = searchFilter.value.toLowerCase().trim();
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        if (searchTerm) {
            const searchTerms = searchTerm.split(' ').filter(term => term !== '');
            filteredData = filteredData.filter(row => {
                return searchTerms.every(term => {
                    return Object.values(row).some(value =>
                        String(value).toLowerCase().includes(term)
                    );
                });
            });
        }

        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            filteredData = filteredData.filter(row => {
                const emissionDateStr = row['Data Emissão'].split(' ')[0];
                if (!emissionDateStr) return false;
                const emissionDate = new Date(emissionDateStr);
                return emissionDate >= start && emissionDate <= end;
            });
        }

        currentTableData = filteredData;
        if (tableView.style.display !== 'none') {
            renderTable();
        } else {
            renderCards();
        }
    }
    
    /**
     * Resets all filters to their default state.
     */
    function clearFilters() {
        searchFilter.value = '';
        startDateInput.value = '';
        endDateInput.value = '';
        visibleColumns = columnHeaders.map(col => col.key);
        populateColumnSelector();
        applyFilters();
        removeHighlight();
    }

    /**
     * Removes highlight from all rows and the table.
     */
    function removeHighlight() {
        travelDataTable.classList.remove('has-highlight');
        document.querySelectorAll('#travelDataTable tbody tr.highlight').forEach(row => {
            row.classList.remove('highlight');
        });
    }

    /**
     * Handles file attachment, either via input or drag-and-drop.
     * @param {File} file The file to attach.
     */
    function handleFileAttachment(file) {
        if (file) {
            fileNameSpan.textContent = file.name;
            alert(`Arquivo "${file.name}" selecionado. A leitura do arquivo não está implementada neste protótipo.`);
            // In a real application, you would parse the Excel file here.
        } else {
            fileNameSpan.textContent = '';
        }
    }

    // --- Event Listeners ---

    // Expand table button
    expandTableBtn.addEventListener('click', () => {
        tableResponsive.classList.toggle('expanded-table');
        if (tableResponsive.classList.contains('expanded-table')) {
            expandTableBtn.innerHTML = '<i class="fas fa-compress-alt"></i> Recolher Planilha';
        } else {
            expandTableBtn.innerHTML = '<i class="fas fa-expand-alt"></i> Expandir Planilha';
        }
    });

    // View switcher
    tableViewBtn.addEventListener('click', () => switchView('table'));
    cardViewBtn.addEventListener('click', () => switchView('card'));

    // Modal listeners
    modalCloseBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // --- Context Menu Logic ---
    let contextMenu = null;

    function createContextMenu() {
        if (document.getElementById('context-menu')) return;
        contextMenu = document.createElement('div');
        contextMenu.id = 'context-menu';
        document.body.appendChild(contextMenu);
    }

    function showContextMenu(event, tripData) {
        event.preventDefault();
        contextMenu.innerHTML = ''; // Clear previous items

        // --- Build Main Menu ---
        const mainMenuContent = `
            <div class="menu-item">
                <button><i class="fas fa-info-circle"></i>Ver Detalhes</button>
            </div>
            <div class="menu-divider"></div>
            <div class="menu-item">
                <button>
                    <span><i class="fas fa-layer-group" style="margin-right: 5px;"></i>Geral</span>
                    <span class="submenu-arrow"><i class="fas fa-chevron-right"></i></span>
                </button>
                <div class="submenu">
                    ${columnGroups['Geral'].map(col => `<button data-field="${col.key}"><i class="fas fa-eye"></i>${col.label}</button>`).join('')}
                </div>
            </div>
            <div class="menu-item">
                <button>
                    <span><i class="fas fa-route" style="margin-right: 5px;"></i>Rota</span>
                    <span class="submenu-arrow"><i class="fas fa-chevron-right"></i></span>
                </button>
                <div class="submenu">
                    ${columnGroups['Rota'].map(col => `<button data-field="${col.key}"><i class="fas fa-eye"></i>${col.label}</button>`).join('')}
                </div>
            </div>
            <div class="menu-item">
                <button>
                    <span><i class="fas fa-truck" style="margin-right: 5px;"></i>Veículo</span>
                    <span class="submenu-arrow"><i class="fas fa-chevron-right"></i></span>
                </button>
                <div class="submenu">
                    ${columnGroups['Veículo'].map(col => `<button data-field="${col.key}"><i class="fas fa-eye"></i>${col.label}</button>`).join('')}
                </div>
            </div>
            <div class="menu-item">
                <button>
                    <span><i class="fas fa-box-open" style="margin-right: 5px;"></i>Carga</span>
                    <span class="submenu-arrow"><i class="fas fa-chevron-right"></i></span>
                </button>
                <div class="submenu">
                    ${columnGroups['Carga'].map(col => `<button data-field="${col.key}"><i class="fas fa-eye"></i>${col.label}</button>`).join('')}
                </div>
            </div>
             <div class="menu-item">
                <button>
                    <span><i class="fas fa-dollar-sign" style="margin-right: 5px;"></i>Financeiro</span>
                    <span class="submenu-arrow"><i class="fas fa-chevron-right"></i></span>
                </button>
                <div class="submenu">
                    ${columnGroups['Financeiro'].map(col => `<button data-field="${col.key}"><i class="fas fa-eye"></i>${col.label}</button>`).join('')}
                </div>
            </div>
        `;
        contextMenu.innerHTML = mainMenuContent;

        // Attach event listeners
        contextMenu.querySelectorAll('button[data-field]').forEach(button => {
            button.addEventListener('click', () => {
                openModal(tripData, button.dataset.field);
                hideContextMenu();
            });
        });
        // Find the "Ver Detalhes" button (which doesn't have data-field)
        const verDetalhesButton = contextMenu.querySelector('.menu-item > button:not([data-field])');
        if (verDetalhesButton) {
            verDetalhesButton.addEventListener('click', () => {
                openModal(tripData);
                hideContextMenu();
            });
        }

        const { clientX: mouseX, clientY: mouseY } = event;
        contextMenu.style.display = 'flex'; // Display first to get dimensions

        const menuWidth = contextMenu.offsetWidth;
        const menuHeight = contextMenu.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let finalLeft = mouseX;
        let finalTop = mouseY;

        // Adjust if menu goes off right edge
        if (mouseX + menuWidth > viewportWidth) {
            finalLeft = viewportWidth - menuWidth - 10; // 10px padding from right edge
        }
        // Adjust if menu goes off bottom edge
        if (mouseY + menuHeight > viewportHeight) {
            finalTop = viewportHeight - menuHeight - 10; // 10px padding from bottom edge
        }

        contextMenu.style.left = `${finalLeft < 0 ? 0 : finalLeft}px`; // Ensure it doesn't go off left edge
        contextMenu.style.top = `${finalTop < 0 ? 0 : finalTop}px`; // Ensure it doesn't go off top edge

        // Adjust submenu positioning dynamically
        contextMenu.querySelectorAll('.menu-item').forEach(menuItem => {
            const submenu = menuItem.querySelector('.submenu');
            if (submenu) {
                menuItem.addEventListener('mouseenter', () => {
                    submenu.style.display = 'flex';
                    const submenuWidth = submenu.offsetWidth;
                    const menuItemRect = menuItem.getBoundingClientRect();
                    const submenuLeftPosition = menuItemRect.right;

                    // Check if submenu goes off right edge
                    if (submenuLeftPosition + submenuWidth > viewportWidth) {
                        submenu.style.left = `-${submenuWidth}px`; // Open to the left
                    } else {
                        submenu.style.left = '100%'; // Open to the right (default)
                    }

                    // Check if submenu goes off bottom edge, adjust to open upwards
                    const submenuRect = submenu.getBoundingClientRect();
                    const spaceBelow = viewportHeight - menuItemRect.bottom;
                    const spaceAbove = menuItemRect.top;

                    if (submenuRect.height > spaceBelow && submenuRect.height <= spaceAbove) {
                        // If not enough space below, but enough space above, open upwards
                        submenu.style.top = `-${submenu.offsetHeight - menuItem.offsetHeight}px`;
                    } else {
                        submenu.style.top = '-7px'; // Default top position
                    }
                });
                menuItem.addEventListener('mouseleave', () => {
                    submenu.style.display = 'none';
                });
            }
        });
    }

    function hideContextMenu() {
        if (contextMenu) {
            contextMenu.style.display = 'none';
        }
    }

    function handleDownload(field, value) {
        alert(`Funcionalidade de download para ${field}: ${value} será implementada no futuro.`);
    }

    // Card view event delegation
    cardView.addEventListener('click', (event) => {
        const target = event.target;
        const card = target.closest('.trip-card');
        if (!card) return;

        // Handle card selection
        if (event.ctrlKey || event.metaKey) { // Ctrl or Cmd key for multi-selection
            card.classList.toggle('selected');
        } else {
            document.querySelectorAll('.trip-card.selected').forEach(selectedCard => {
                if (selectedCard !== card) {
                    selectedCard.classList.remove('selected');
                }
            });
            card.classList.toggle('selected');
        }

        const tripId = parseInt(card.dataset.id, 10);
        const tripData = currentTableData.find(d => d.NF === tripId);

        if (target.closest('.menu-btn')) {
            showContextMenu(event, tripData);
        } else if (target.closest('.view-details-btn')) {
            openModal(tripData);
        } else if (target.closest('.edit-card-btn')) { // Added
            openModal(tripData, null, true); // Open in edit mode
        } else if (target.classList.contains('downloadable-field')) {
            const field = target.dataset.field;
            const value = tripData[field];
            handleDownload(field, value);
        }
    });

    cardView.addEventListener('contextmenu', (event) => {
        const target = event.target;
        const card = target.closest('.trip-card');
        if (!card) return;

        const tripId = parseInt(card.dataset.id, 10);
        const tripData = currentTableData.find(d => d.NF === tripId);
        
        showContextMenu(event, tripData);
    });

    travelDataTableBody.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('downloadable-field')) {
            const field = target.dataset.field;
            const row = target.closest('tr');
            const tripId = parseInt(row.dataset.id, 10);
            const tripData = currentTableData.find(d => d.NF === tripId);
            const value = tripData[field];
            handleDownload(field, value);
        }
    });

    // Double-click event listener for table rows
    travelDataTableBody.addEventListener('dblclick', (event) => { // Added
        const clickedRow = event.target.closest('tr');
        if (!clickedRow) return;

        const tripId = parseInt(clickedRow.dataset.id, 10);
        const tripData = currentTableData.find(d => d.NF === tripId);
        if (tripData) {
            openModal(tripData, null, true); // Open in edit mode
        }
    });

    // Sidebar toggle
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        mainContent.classList.toggle('expanded');
    });

    // Column selector dropdown toggle
    columnDropdownBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        dateDropdownBtn.classList.remove('active');
        dateFilterDropdown.classList.remove('show');

        columnDropdownBtn.classList.toggle('active');
        columnSelectorDropdown.classList.toggle('show');
    });

    // Date filter dropdown toggle
    dateDropdownBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        columnDropdownBtn.classList.remove('active');
        columnSelectorDropdown.classList.remove('show');

        dateDropdownBtn.classList.toggle('active');
        dateFilterDropdown.classList.toggle('show');
    });

    // File upload handler (via input)
    fileUpload.addEventListener('change', (event) => {
        handleFileAttachment(event.target.files[0]);
    });

    // Download template button (placeholder)
    downloadTemplateBtn.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Funcionalidade de download de modelo não implementada neste protótipo.');
    });

    // Filter triggers
    searchFilter.addEventListener('input', applyFilters);
    startDateInput.addEventListener('change', applyFilters);
    endDateInput.addEventListener('change', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);

    // Row highlighting logic
    travelDataTableBody.addEventListener('click', (event) => {
        const clickedRow = event.target.closest('tr');
        if (!clickedRow) return;

        const isAlreadyHighlighted = clickedRow.classList.contains('highlight');
        
        if (event.ctrlKey || event.metaKey) { // Ctrl or Cmd key for multi-selection
            clickedRow.classList.toggle('highlight');
            if (document.querySelectorAll('#travelDataTable tbody tr.highlight').length > 0) {
                travelDataTable.classList.add('has-highlight');
            } else {
                travelDataTable.classList.remove('has-highlight');
            }
        } else {
            removeHighlight(); // Clear previous highlights first
            if (!isAlreadyHighlighted) {
                clickedRow.classList.add('highlight');
                travelDataTable.classList.add('has-highlight');
            }
        }
    });

    // Drag and Drop functionality
    mainContent.addEventListener('dragover', (event) => {
        event.preventDefault(); // Prevent default to allow drop
        dragDropOverlay.classList.add('show'); // Show overlay
    });

    mainContent.addEventListener('dragleave', (event) => {
        // Only hide if leaving the main content area, not just moving over child elements
        if (!event.currentTarget.contains(event.relatedTarget)) {
            dragDropOverlay.classList.remove('show');
        }
    });

    dragDropOverlay.addEventListener('dragleave', () => {
        dragDropOverlay.classList.remove('show');
    });

    dragDropOverlay.addEventListener('drop', (event) => {
        event.preventDefault(); // Prevent default action (opening file in new tab)
        dragDropOverlay.classList.remove('show');

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const excelFile = Array.from(files).find(file => 
                file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                file.type === 'application/vnd.ms-excel'
            );
            if (excelFile) {
                handleFileAttachment(excelFile);
            } else {
                alert('Por favor, arraste um arquivo Excel (.xlsx ou .xls).');
            }
        }
    });

    // Global click listeners to close dropdowns or remove highlights
    window.addEventListener('click', (event) => {
        // Close column selector dropdown if click is outside
        if (!columnSelectorDropdown.contains(event.target) && !columnDropdownBtn.contains(event.target)) {
            columnSelectorDropdown.classList.remove('show');
            columnDropdownBtn.classList.remove('active');
        }
        // Close date filter dropdown if click is outside
        if (!dateFilterDropdown.contains(event.target) && !dateDropdownBtn.contains(event.target)) {
            dateFilterDropdown.classList.remove('show');
            dateDropdownBtn.classList.remove('active');
        }
        
        // Remove table highlight
        if (!travelDataTable.contains(event.target) && !event.target.closest('.actions-bar')) {
            removeHighlight();
        }

        // Close context menu
        if (contextMenu && !contextMenu.contains(event.target) && !event.target.closest('.menu-btn')) {
            hideContextMenu();
        }
    });

    // --- Initial Setup ---
    createContextMenu();
    populateColumnSelector();
    renderTable();
});
