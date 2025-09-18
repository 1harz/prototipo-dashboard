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
    const columnDropdownBtn = document.querySelector('.actions-group .dropdown:nth-child(1) .dropdown-btn');
    const dateDropdownBtn = document.querySelector('.actions-group .dropdown:nth-child(2) .dropdown-btn');
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

    // --- Data Definitions ---
    const columnHeaders = [
        { key: 'NF', label: 'NF', group: 'Geral' }, { key: 'Tipo', label: 'Tipo', group: 'Geral' }, { key: 'CLIENTE', label: 'Cliente', group: 'Geral' },
        { key: 'DESTINATÁRIO', label: 'Destinatário', group: 'Geral' }, { key: 'CIDADE', label: 'Cidade', group: 'Rota' }, { key: 'RAIO', label: 'Raio', group: 'Rota' },
        { key: 'DURAÇÃO DA ROTA', label: 'Duração da Rota', group: 'Rota' }, { key: 'PLACA', label: 'Placa', group: 'Veículo' }, { key: 'FROTA', label: 'Frota', group: 'Veículo' },
        { key: 'MOTORISTA', label: 'Motorista', group: 'Veículo' }, { key: 'Tipologia', label: 'Tipologia', group: 'Veículo' }, { key: 'CAPACIDADE', label: 'Capacidade', group: 'Carga' },
        { key: 'PESO BRUTO', label: 'Peso Bruto', group: 'Carga' }, { key: 'Devolução KG', label: 'Devolução KG', group: 'Carga' }, { key: '% Devolução', label: '% Devolução', group: 'Carga' },
        { key: 'OCUPAÇÃO', label: 'Ocupação', group: 'Carga' }, { key: 'Data Emissão', label: 'Status' }, { key: 'FRETE PESO', label: 'Frete Peso', group: 'Financeiro' },
        { key: 'Manifesto', label: 'Manifesto', group: 'Geral' }, { key: 'VALOR MERCADORIA', label: 'Valor Mercadoria', group: 'Financeiro' }, { key: 'R$ p/KG', label: 'R$ p/KG', group: 'Financeiro' },
        { key: 'DROP', label: 'Drop', group: 'Rota' }, { key: 'Lead Time - Cliente', label: 'Lead Time', group: 'Status' }, { key: 'Baixa da Entrega', label: 'Baixa da Entrega', group: 'Status' },
        { key: 'On time', label: 'On Time', group: 'Status' }, { key: 'DESCARGA', label: 'Descarga', group: 'Carga' }, { key: 'Vlr Agregado', label: 'Vlr Agregado', group: 'Financeiro' }
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
        { "NF": 79990, "Tipo": "", "CLIENTE": "CANTO", "DESTINATÁRIO": "ATACADAO", "CIDADE": "ASA NORTE", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "TATU-01", "FROTA": "Agregado", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 958.2, "Devolução KG": "", "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-08-26 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "VALOR MERCADORIA": 26862.73, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-05-04 00:00:00", "On time": "NOK", "DESCARGA": 500, "Vlr Agregado": 60 },
        { "NF": 79991, "Tipo": "Reentrega", "CLIENTE": "CANTO", "DESTINATÁRIO": "ATACADAO", "CIDADE": "ASA NORTE", "RAIO": "Interior", "DURAÇÃO DA ROTA": 3, "PLACA": "TATU-01", "FROTA": "FROTA", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 1113.23, "Devolução KG": "", "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-09-15 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "VALOR MERCADORIA": 14748.46, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-18 00:00:00", "On time": "NOK", "DESCARGA": 350, "Vlr Agregado": 60 },
        { "NF": 80037, "Tipo": "NORMAL", "CLIENTE": "CANTO", "DESTINATÁRIO": "ASSAI", "CIDADE": "ASA NORTE", "RAIO": "", "DURAÇÃO DA ROTA": "", "PLACA": "TATU-01", "FROTA": "", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 236.2, "Devolução KG": "", "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-09-01 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "VALOR MERCADORIA": 4285, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-04 00:00:00", "On time": "NOK", "DESCARGA": "", "Vlr Agregado": 60 },
        { "NF": 1240412, "Tipo": "", "CLIENTE": "FRUTAP", "DESTINATÁRIO": "", "CIDADE": "ASA NORTE", "RAIO": "", "DURAÇÃO DA ROTA": "", "PLACA": "TATU-01", "FROTA": "", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 349.808, "Devolução KG": "", "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-09-10 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "VALOR MERCADORIA": 2740.07, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-13 00:00:00", "On time": "NOK", "DESCARGA": "", "Vlr Agregado": 60 },
        { "NF": 606762, "Tipo": "", "CLIENTE": "QUALITA", "DESTINATÁRIO": "ATACADAO S.A.", "CIDADE": "SIA", "RAIO": "", "DURAÇÃO DA ROTA": "", "PLACA": "TATU-01", "FROTA": "", "MOTORISTA": "ELIAS", "Tipologia": "Leve", "CAPACIDADE": 4500, "PESO BRUTO": 72.96, "Devolução KG": 1000, "% Devolução": "", "OCUPAÇÃO": "", "Data Emissão": "2025-08-30 00:00:00", "FRETE PESO": 100, "Manifesto": 1, "VALOR MERCADORIA": 28, "R$ p/KG": "", "DROP": "", "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-02 00:00:00", "On time": "NOK", "DESCARGA": "", "Vlr Agregado": 60 },
        { "NF": 80001, "Tipo": "NORMAL", "CLIENTE": "BIMBO", "DESTINATÁRIO": "PÃO DE AÇÚCAR", "CIDADE": "LAGO SUL", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2, "PLACA": "TRUCK-05", "FROTA": "FROTA", "MOTORISTA": "CARLOS", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 5600.5, "Devolução KG": 50, "% Devolução": "0.89%", "OCUPAÇÃO": "46.67%", "Data Emissão": "2025-09-20 00:00:00", "FRETE PESO": 800, "Manifesto": 2, "VALOR MERCADORIA": 85000, "R$ p/KG": 0.15, "DROP": 5, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-09-21 00:00:00", "On time": "OK", "DESCARGA": 1200, "Vlr Agregado": 150 },
        { "NF": 80002, "Tipo": "NORMAL", "CLIENTE": "NESTLE", "DESTINATÁRIO": "CARREFOUR", "CIDADE": "TAGUATINGA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1.5, "PLACA": "VAN-03", "FROTA": "Agregado", "MOTORISTA": "MARIA", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 3250.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "40.63%", "Data Emissão": "2025-09-20 00:00:00", "FRETE PESO": 450, "Manifesto": 3, "VALOR MERCADORIA": 45000, "R$ p/KG": 0.14, "DROP": 8, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-20 00:00:00", "On time": "OK", "DESCARGA": 800, "Vlr Agregado": 100 },
        { "NF": 80003, "Tipo": "Devolução", "CLIENTE": "DANONE", "DESTINATÁRIO": "BIG BOX", "CIDADE": "GUARA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "MOTO-07", "FROTA": "Agregado", "MOTORISTA": "JOÃO", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 150.7, "Devolução KG": 150.7, "% Devolução": "100%", "OCUPAÇÃO": "30.14%", "Data Emissão": "2025-09-21 00:00:00", "FRETE PESO": 50, "Manifesto": 4, "VALOR MERCADORIA": 3000, "R$ p/KG": 0.33, "DROP": 1, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-21 00:00:00", "On time": "OK", "DESCARGA": 100, "Vlr Agregado": 20 },
        { "NF": 80004, "Tipo": "NORMAL", "CLIENTE": "AMBEV", "DESTINATÁRIO": "DISTRIBUIDORA XYZ", "CIDADE": "FORMOSA", "RAIO": "Interior", "DURAÇÃO DA ROTA": 5, "PLACA": "CARRETA-01", "FROTA": "FROTA", "MOTORISTA": "PEDRO", "Tipologia": "Super Pesado", "CAPACIDADE": 25000, "PESO BRUTO": 24500.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "98%", "Data Emissão": "2025-09-22 00:00:00", "FRETE PESO": 3000, "Manifesto": 5, "VALOR MERCADORIA": 150000, "R$ p/KG": 0.12, "DROP": 1, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-09-25 00:00:00", "On time": "OK", "DESCARGA": 2500, "Vlr Agregado": 300 },
        { "NF": 80005, "Tipo": "NORMAL", "CLIENTE": "COCA-COLA", "DESTINATÁRIO": "WALMART", "CIDADE": "ÁGUAS CLARAS", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2, "PLACA": "TRUCK-02", "FROTA": "FROTA", "MOTORISTA": "ANA", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 9800.0, "Devolução KG": 120, "% Devolução": "1.22%", "OCUPAÇÃO": "81.67%", "Data Emissão": "2025-09-22 00:00:00", "FRETE PESO": 1100, "Manifesto": 6, "VALOR MERCADORIA": 95000, "R$ p/KG": 0.11, "DROP": 3, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-22 00:00:00", "On time": "OK", "DESCARGA": 1000, "Vlr Agregado": 120 },
        { "NF": 80006, "Tipo": "Reentrega", "CLIENTE": "P&G", "DESTINATÁRIO": "DROGARIA ROSARIO", "CIDADE": "CEILÂNDIA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2.5, "PLACA": "VAN-01", "FROTA": "Agregado", "MOTORISTA": "LUCAS", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 4200.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "52.5%", "Data Emissão": "2025-09-23 00:00:00", "FRETE PESO": 500, "Manifesto": 7, "VALOR MERCADORIA": 60000, "R$ p/KG": 0.12, "DROP": 12, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-09-24 00:00:00", "On time": "OK", "DESCARGA": 600, "Vlr Agregado": 90 },
        { "NF": 80007, "Tipo": "NORMAL", "CLIENTE": "UNILEVER", "DESTINATÁRIO": "SUPERMAIA", "CIDADE": "SAMAMBAIA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 3, "PLACA": "TRUCK-03", "FROTA": "FROTA", "MOTORISTA": "FERNANDA", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 7500.8, "Devolução KG": 300, "% Devolução": "4%", "OCUPAÇÃO": "62.51%", "Data Emissão": "2025-09-24 00:00:00", "FRETE PESO": 900, "Manifesto": 8, "VALOR MERCADORIA": 78000, "R$ p/KG": 0.12, "DROP": 7, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-09-25 00:00:00", "On time": "OK", "DESCARGA": 950, "Vlr Agregado": 110 },
        { "NF": 80008, "Tipo": "NORMAL", "CLIENTE": "MONDELEZ", "DESTINATÁRIO": "ULTRA BOX", "CIDADE": "RECANTO DAS EMAS", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2, "PLACA": "VAN-02", "FROTA": "Agregado", "MOTORISTA": "GABRIEL", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 2100.3, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "26.25%", "Data Emissão": "2025-09-25 00:00:00", "FRETE PESO": 300, "Manifesto": 9, "VALOR MERCADORIA": 35000, "R$ p/KG": 0.14, "DROP": 15, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-25 00:00:00", "On time": "OK", "DESCARGA": 400, "Vlr Agregado": 75 },
        { "NF": 80009, "Tipo": "NORMAL", "CLIENTE": "KRAFT HEINZ", "DESTINATÁRIO": "DONA DE CASA", "CIDADE": "GAMA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 3.5, "PLACA": "TRUCK-04", "FROTA": "FROTA", "MOTORISTA": "RODRIGO", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 11500.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "95.83%", "Data Emissão": "2025-09-26 00:00:00", "FRETE PESO": 1300, "Manifesto": 10, "VALOR MERCADORIA": 110000, "R$ p/KG": 0.11, "DROP": 4, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-09-27 00:00:00", "On time": "OK", "DESCARGA": 1500, "Vlr Agregado": 180 },
        { "NF": 80010, "Tipo": "NORMAL", "CLIENTE": "PEPSICO", "DESTINATÁRIO": "ATACADÃO DIA A DIA", "CIDADE": "SANTA MARIA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2.5, "PLACA": "TRUCK-01", "FROTA": "FROTA", "MOTORISTA": "JULIANA", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 8800.0, "Devolução KG": 50, "% Devolução": "0.57%", "OCUPAÇÃO": "73.33%", "Data Emissão": "2025-09-27 00:00:00", "FRETE PESO": 1000, "Manifesto": 11, "VALOR MERCADORIA": 92000, "R$ p/KG": 0.11, "DROP": 6, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-27 00:00:00", "On time": "OK", "DESCARGA": 1100, "Vlr Agregado": 130 },
        { "NF": 80011, "Tipo": "NORMAL", "CLIENTE": "MARS", "DESTINATÁRIO": "LEÃO SUPERMERCADO", "CIDADE": "PLANALTINA", "RAIO": "Interior", "DURAÇÃO DA ROTA": 4, "PLACA": "VAN-04", "FROTA": "Agregado", "MOTORISTA": "RAFAEL", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 6300.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "78.75%", "Data Emissão": "2025-09-28 00:00:00", "FRETE PESO": 750, "Manifesto": 12, "VALOR MERCADORIA": 70000, "R$ p/KG": 0.12, "DROP": 9, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-10-01 00:00:00", "On time": "OK", "DESCARGA": 800, "Vlr Agregado": 100 },
        { "NF": 80012, "Tipo": "NORMAL", "CLIENTE": "COLGATE", "DESTINATÁRIO": "FARMACIA POPULAR", "CIDADE": "SOBRADINHO", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 2, "PLACA": "MOTO-02", "FROTA": "Agregado", "MOTORISTA": "TIAGO", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 250.5, "Devolução KG": 10, "% Devolução": "3.99%", "OCUPAÇÃO": "50.1%", "Data Emissão": "2025-09-29 00:00:00", "FRETE PESO": 60, "Manifesto": 13, "VALOR MERCADORIA": 5000, "R$ p/KG": 0.24, "DROP": 20, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-29 00:00:00", "On time": "OK", "DESCARGA": 150, "Vlr Agregado": 25 },
        { "NF": 80013, "Tipo": "NORMAL", "CLIENTE": "JOHNSON & JOHNSON", "DESTINATÁRIO": "VENANCIO", "CIDADE": "CRUZEIRO", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1.5, "PLACA": "VAN-05", "FROTA": "FROTA", "MOTORISTA": "BRUNA", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 3800.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "47.5%", "Data Emissão": "2025-09-30 00:00:00", "FRETE PESO": 480, "Manifesto": 14, "VALOR MERCADORIA": 55000, "R$ p/KG": 0.13, "DROP": 11, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-09-30 00:00:00", "On time": "OK", "DESCARGA": 500, "Vlr Agregado": 80 },
        { "NF": 80014, "Tipo": "NORMAL", "CLIENTE": "KIMBERLY-CLARK", "DESTINATÁRIO": "EXTRA", "CIDADE": "SUDOESTE", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "TRUCK-06", "FROTA": "Agregado", "MOTORISTA": "DIEGO", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 6900.0, "Devolução KG": 200, "% Devolução": "2.9%", "OCUPAÇÃO": "57.5%", "Data Emissão": "2025-10-01 00:00:00", "FRETE PESO": 800, "Manifesto": 15, "VALOR MERCADORIA": 72000, "R$ p/KG": 0.12, "DROP": 2, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-01 00:00:00", "On time": "OK", "DESCARGA": 900, "Vlr Agregado": 100 },
        { "NF": 80015, "Tipo": "NORMAL", "CLIENTE": "GAROTO", "DESTINATÁRIO": "BOMBOCADO", "CIDADE": "NOROESTE", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "VAN-06", "FROTA": "FROTA", "MOTORISTA": "FELIPE", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 1500.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "18.75%", "Data Emissão": "2025-10-02 00:00:00", "FRETE PESO": 250, "Manifesto": 16, "VALOR MERCADORIA": 25000, "R$ p/KG": 0.17, "DROP": 18, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-02 00:00:00", "On time": "OK", "DESCARGA": 300, "Vlr Agregado": 50 },
        { "NF": 80016, "Tipo": "NORMAL", "CLIENTE": "FERRERO", "DESTINATÁRIO": "AMERICANAS", "CIDADE": "PARK SUL", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1.5, "PLACA": "VAN-07", "FROTA": "Agregado", "MOTORISTA": "VANESSA", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 3300.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "41.25%", "Data Emissão": "2025-10-03 00:00:00", "FRETE PESO": 400, "Manifesto": 17, "VALOR MERCADORIA": 48000, "R$ p/KG": 0.12, "DROP": 10, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-03 00:00:00", "On time": "OK", "DESCARGA": 450, "Vlr Agregado": 70 },
        { "NF": 80017, "Tipo": "NORMAL", "CLIENTE": "PERFETTI", "DESTINATÁRIO": "POSTO IPIRANGA", "CIDADE": "EPIA", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 0.5, "PLACA": "MOTO-01", "FROTA": "Agregado", "MOTORISTA": "MARCELO", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 80.2, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "16.04%", "Data Emissão": "2025-10-04 00:00:00", "FRETE PESO": 30, "Manifesto": 18, "VALOR MERCADORIA": 1500, "R$ p/KG": 0.37, "DROP": 25, "Lead Time - Cliente": 0, "Baixa da Entrega": "2025-10-04 00:00:00", "On time": "OK", "DESCARGA": 50, "Vlr Agregado": 15 },
        { "NF": 80018, "Tipo": "NORMAL", "CLIENTE": "RICLAN", "DESTINATÁRIO": "PADARIA PÃO DOURADO", "CIDADE": "ASA SUL", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "MOTO-03", "FROTA": "Agregado", "MOTORISTA": "SANDRA", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 120.0, "Devolução KG": 5, "% Devolução": "4.17%", "OCUPAÇÃO": "24%", "Data Emissão": "2025-10-05 00:00:00", "FRETE PESO": 40, "Manifesto": 19, "VALOR MERCADORIA": 2200, "R$ p/KG": 0.33, "DROP": 13, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-05 00:00:00", "On time": "OK", "DESCARGA": 80, "Vlr Agregado": 18 },
        { "NF": 80019, "Tipo": "NORMAL", "CLIENTE": "HARIBO", "DESTINATÁRIO": "CASA DO COLEGA", "CIDADE": "VILA PLANALTO", "RAIO": "Metropolitana", "DURAÇÃO DA ROTA": 1, "PLACA": "MOTO-04", "FROTA": "Agregado", "MOTORISTA": "ROBERTO", "Tipologia": "Ultra Leve", "CAPACIDADE": 500, "PESO BRUTO": 95.5, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "19.1%", "Data Emissão": "2025-10-06 00:00:00", "FRETE PESO": 35, "Manifesto": 20, "VALOR MERCADORIA": 1800, "R$ p/KG": 0.37, "DROP": 17, "Lead Time - Cliente": 1, "Baixa da Entrega": "2025-10-06 00:00:00", "On time": "OK", "DESCARGA": 60, "Vlr Agregado": 16 },
        { "NF": 80020, "Tipo": "NORMAL", "CLIENTE": "PERNOD RICARD", "DESTINATÁRIO": "ADEGA DO CHEFE", "CIDADE": "LUZIÂNIA", "RAIO": "Interior", "DURAÇÃO DA ROTA": 6, "PLACA": "CARRETA-02", "FROTA": "FROTA", "MOTORISTA": "CLAUDIO", "Tipologia": "Super Pesado", "CAPACIDADE": 25000, "PESO BRUTO": 22000.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "88%", "Data Emissão": "2025-10-07 00:00:00", "FRETE PESO": 2800, "Manifesto": 21, "VALOR MERCADORIA": 250000, "R$ p/KG": 0.13, "DROP": 1, "Lead Time - Cliente": 4, "Baixa da Entrega": "2025-10-11 00:00:00", "On time": "OK", "DESCARGA": 2800, "Vlr Agregado": 400 },
        { "NF": 80021, "Tipo": "NORMAL", "CLIENTE": "DIAGEO", "DESTINATÁRIO": "SHOPPING BEBIDAS", "CIDADE": "VALPARAÍSO", "RAIO": "Interior", "DURAÇÃO DA ROTA": 4.5, "PLACA": "TRUCK-07", "FROTA": "Agregado", "MOTORISTA": "PATRICIA", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 10500.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "87.5%", "Data Emissão": "2025-10-08 00:00:00", "FRETE PESO": 1200, "Manifesto": 22, "VALOR MERCADORIA": 130000, "R$ p/KG": 0.11, "DROP": 2, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-10-11 00:00:00", "On time": "OK", "DESCARGA": 1300, "Vlr Agregado": 200 },
        { "NF": 80022, "Tipo": "NORMAL", "CLIENTE": "BACARDI", "DESTINATÁRIO": "BAR DO JORGE", "CIDADE": "CIDADE OCIDENTAL", "RAIO": "Interior", "DURAÇÃO DA ROTA": 3, "PLACA": "VAN-08", "FROTA": "FROTA", "MOTORISTA": "MARCOS", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 5000.0, "Devolução KG": 150, "% Devolução": "3%", "OCUPAÇÃO": "62.5%", "Data Emissão": "2025-10-09 00:00:00", "FRETE PESO": 600, "Manifesto": 23, "VALOR MERCADORIA": 65000, "R$ p/KG": 0.12, "DROP": 5, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-10-10 00:00:00", "On time": "OK", "DESCARGA": 700, "Vlr Agregado": 95 },
        { "NF": 80023, "Tipo": "NORMAL", "CLIENTE": "CAMPARI", "DESTINATÁRIO": "MERCADINHO DO ZE", "CIDADE": "NOVO GAMA", "RAIO": "Interior", "DURAÇÃO DA ROTA": 3.5, "PLACA": "VAN-09", "FROTA": "Agregado", "MOTORISTA": "TATIANA", "Tipologia": "Médio", "CAPACIDADE": 8000, "PESO BRUTO": 4800.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "60%", "Data Emissão": "2025-10-10 00:00:00", "FRETE PESO": 550, "Manifesto": 24, "VALOR MERCADORIA": 58000, "R$ p/KG": 0.11, "DROP": 8, "Lead Time - Cliente": 2, "Baixa da Entrega": "2025-10-11 00:00:00", "On time": "OK", "DESCARGA": 600, "Vlr Agregado": 85 },
        { "NF": 80024, "Tipo": "NORMAL", "CLIENTE": "HEINEKEN", "DESTINATÁRIO": "CONVENIENCIA 24H", "CIDADE": "ÁGUAS LINDAS", "RAIO": "Interior", "DURAÇÃO DA ROTA": 5, "PLACA": "TRUCK-08", "FROTA": "FROTA", "MOTORISTA": "LEONARDO", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 11800.0, "Devolução KG": 0, "% Devolução": "0%", "OCUPAÇÃO": "98.33%", "Data Emissão": "2025-10-11 00:00:00", "FRETE PESO": 1400, "Manifesto": 25, "VALOR MERCADORIA": 120000, "R$ p/KG": 0.12, "DROP": 3, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-10-14 00:00:00", "On time": "OK", "DESCARGA": 1500, "Vlr Agregado": 190 },
        { "NF": 80025, "Tipo": "NORMAL", "CLIENTE": "BUDWEISER", "DESTINATÁRIO": "ESPETINHO DO MI", "CIDADE": "SANTO ANTÔNIO", "RAIO": "Interior", "DURAÇÃO DA ROTA": 4, "PLACA": "TRUCK-09", "FROTA": "Agregado", "MOTORISTA": "SIMONE", "Tipologia": "Pesado", "CAPACIDADE": 12000, "PESO BRUTO": 9200.0, "Devolução KG": 300, "% Devolução": "3.26%", "OCUPAÇÃO": "76.67%", "Data Emissão": "2025-10-12 00:00:00", "FRETE PESO": 1100, "Manifesto": 26, "VALOR MERCADORIA": 95000, "R$ p/KG": 0.12, "DROP": 4, "Lead Time - Cliente": 3, "Baixa da Entrega": "2025-10-15 00:00:00", "On time": "OK", "DESCARGA": 1200, "Vlr Agregado": 150 }
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

        currentTableData.forEach(rowData => {
            const tr = document.createElement('tr');
            tr.dataset.id = rowData.NF; // Add data-id for linking
            visibleColumnHeaders.forEach(header => {
                const td = document.createElement('td');
                let value = rowData[header.key] !== undefined ? rowData[header.key] : '';
                
                if (header.key === 'Data Emissão' || header.key === 'Baixa da Entrega') {
                    value = value ? formatDateBR(value.split(' ')[0]) : '';
                }
                if (header.key === 'PESO BRUTO' && typeof value === 'number') {
                    value = Math.round(value);
                }

                td.textContent = value;
                tr.appendChild(td);
            });
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

            let mainInfoHtml = `<h3>Viagem NF ${data.NF}</h3><div class="info-grid">`;
            for (const [key, value] of Object.entries(importantInfo)) {
                mainInfoHtml += `
                    <div class="info-item">
                        <strong>${key}</strong>
                        <span>${value || 'N/A'}</span>
                    </div>`;
            }
            mainInfoHtml += `</div>`;

            let dropdownMenuHtml = '';
            for (const groupName in columnGroups) {
                dropdownMenuHtml += `
                    <div class="category-menu">
                        <span class="category-title">${groupName}</span>
                        <div class="category-submenu">
                            ${columnGroups[groupName].map(col => `<a href="#" data-field="${col.key}">${col.label}</a>`).join('')}
                        </div>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="card-main-info">
                    ${mainInfoHtml}
                </div>
                <div class="card-footer">
                    <div class="card-menu">
                        <button class="menu-btn"><i class="fas fa-ellipsis-v"></i></button>
                        <div class="card-dropdown-menu">
                            ${dropdownMenuHtml}
                        </div>
                    </div>
                    <button class="view-details-btn">Ver Detalhes</button>
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
     */
    function openModal(data, specificField = null) {
        modalBody.innerHTML = '';
        if (specificField) {
            const header = columnHeaders.find(h => h.key === specificField);
            modalBody.innerHTML = `
                <div class="info-item">
                    <strong>${header.label}</strong>
                    <span>${data[specificField] || 'N/A'}</span>
                </div>
            `;
        } else {
            let content = '<div class="info-grid">';
            columnHeaders.forEach(col => {
                content += `
                    <div class="info-item">
                        <strong>${col.label}</strong>
                        <span>${data[col.key] || 'N/A'}</span>
                    </div>
                `;
            });
            content += '</div>';
            modalBody.innerHTML = content;
        }
        modal.style.display = 'block';
    }

    /**
     * Closes the modal.
     */
    function closeModal() {
        modal.style.display = 'none';
    }

    /**
     * Renders the table headers and body based on current state.
     */
    function renderTable() {
        travelDataTableHead.innerHTML = '';
        travelDataTableBody.innerHTML = '';

        visibleColumns.forEach(colKey => {
            const header = columnHeaders.find(h => h.key === colKey);
            if (header) {
                const th = document.createElement('th');
                th.textContent = header.label;
                travelDataTableHead.appendChild(th);
            }
        });

        currentTableData.forEach(rowData => {
            const tr = document.createElement('tr');
            visibleColumns.forEach(colKey => {
                const td = document.createElement('td');
                let value = rowData[colKey] !== undefined ? rowData[colKey] : '';
                
                // Formata datas para dia/mês/ano
                if (colKey === 'Data Emissão' || colKey === 'Baixa da Entrega') {
                    value = value ? formatDateBR(value.split(' ')[0]) : '';
                }

                // Arredonda o 'PESO BRUTO'
                if (colKey === 'PESO BRUTO' && typeof value === 'number') {
                    value = Math.round(value);
                }

                td.textContent = value;
                tr.appendChild(td);
            });
            travelDataTableBody.appendChild(tr);
        });
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

    // Card view event delegation
    cardView.addEventListener('click', (event) => {
        const target = event.target;
        const card = target.closest('.trip-card');
        if (!card) return;

        const tripId = parseInt(card.dataset.id, 10);
        const tripData = currentTableData.find(d => d.NF === tripId);

        if (target.closest('.menu-btn')) {
            const dropdown = card.querySelector('.card-dropdown-menu');
            
            // Adjust menu direction based on card position
            const cardRect = card.getBoundingClientRect();
            const screenCenter = window.innerWidth / 2;
            if (cardRect.left < screenCenter) {
                dropdown.classList.add('open-right');
            } else {
                dropdown.classList.remove('open-right');
            }

            dropdown.classList.toggle('show');
        } else if (target.closest('.view-details-btn')) {
            openModal(tripData);
        } else if (target.tagName === 'A' && target.dataset.field) {
            event.preventDefault();
            openModal(tripData, target.dataset.field);
            const dropdown = card.querySelector('.card-dropdown-menu');
            dropdown.classList.remove('show');
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
        
        removeHighlight(); // Clear previous highlights first

        if (!isAlreadyHighlighted) {
            clickedRow.classList.add('highlight');
            travelDataTable.classList.add('has-highlight');
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

        // Close card dropdowns
        document.querySelectorAll('.card-dropdown-menu.show').forEach(menu => {
            if (!menu.closest('.trip-card').contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    });

    // --- Initial Setup ---
    populateColumnSelector();
    renderTable();
});
