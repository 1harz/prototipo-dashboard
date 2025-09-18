# Sistema de Dashboard de Logística

Este documento descreve o sistema de dashboard de logística, suas funcionalidades, objetivos e a estrutura de dados que o alimenta. O dashboard é uma ferramenta de visualização interativa projetada para monitorar e analisar o desempenho de operações logísticas, utilizando Key Performance Indicators (KPIs), gráficos e velocímetros.

## Funcionalidades Principais

### 1. Navegação e Layout
- **Sidebar Responsiva:** Um menu lateral (`.sidebar`) com opções de navegação (Dashboard, Operações, Relatórios, Configurações, Ajuda) e informações do usuário (Operador Logístico, status Online). A sidebar pode ser minimizada/expandida para otimizar o espaço da tela.
- **Header:** Exibe o título da seção atual ("Análise de Desempenho").
- **Layout em Grid:** O conteúdo principal é organizado em um layout de grid responsivo, com colunas para diferentes tipos de gráficos e visualizações.

### 2. Filtragem de Dados
O dashboard oferece um sistema de filtros hierárquico para refinar a visualização dos dados:
- **Região:** Filtra os dados por regiões geográficas (Norte, Sul, Leste, Oeste, Nordeste, Centro-Oeste, Sudeste).
- **Filial:** Filtra por filiais, que são dependentes da região selecionada.
- **Centro de Custo:** Filtra por centros de custo, dependentes da filial selecionada.
- **Cliente:** Filtra por clientes, dependentes do centro de custo selecionado.
- **Ano e Mês:** Permite selecionar um ano e múltiplos meses para análise de tendência. A seleção de meses é interativa, permitindo arrastar para selecionar um intervalo.

### 3. Visualização de KPIs
- **Cartões de KPI:** Exibe os principais indicadores de desempenho em cartões individuais, com:
    - Título do KPI (Receita, On Time, Ocupação, Terceiro, Disponibilidade).
    - Ícone representativo e cor de destaque.
    - Valor atual (Real).
    - Comparação com o Orçamento (BGT) e Mês Anterior (PM), incluindo a diferença percentual e um indicador visual (seta para cima/baixo, cor verde/vermelha).
    - Um indicador do dia atual do mês.

### 4. Gráficos Interativos
- **Actual vs BGT/PM por Unidade (Gráfico de Barras):**
    - Compara o valor "Real" com o "BGT" (Orçamento) ou "PM" (Mês Anterior) para diferentes unidades (RMSP, RMRJ, CWBI, REC) e um total geral.
    - Possui um toggle para alternar entre a comparação com BGT e PM.
    - Exibe caixas de diferença percentual acima das barras, indicando a variação entre Real e a meta selecionada (BGT/PM).
- **Tendência Mensal (BGT x PM) (Gráfico de Barras):**
    - Mostra a tendência mensal de BGT e PM ao longo de meses selecionados.
    - Os filtros de ano e mês estão integrados a este cartão.

### 5. Velocímetros (Gauges)
- **Múltiplos Velocímetros:** Três velocímetros para categorias específicas (CATERING, FRACIONADO, DEDICADO).
- Cada velocímetro exibe um valor "Real" e comparações com "BGT" e "PM".
- A agulha do velocímetro se move dinamicamente com base no valor "Real".
- Os velocímetros possuem um gradiente de cores que indica faixas de desempenho.

## Objetivos do Dashboard

O principal objetivo deste dashboard é fornecer uma visão clara e em tempo real (ou quase real, dependendo da atualização dos dados) do desempenho das operações logísticas. Especificamente, ele visa:

1.  **Monitoramento de KPIs:** Permitir o acompanhamento rápido e eficiente de métricas críticas como Receita, Pontualidade (On Time), Ocupação de veículos/armazéns, Custos com Terceiros e Disponibilidade de recursos.
2.  **Análise de Desempenho:** Facilitar a comparação do desempenho atual (Real) com metas orçamentárias (BGT) e desempenho passado (PM), identificando desvios e áreas que necessitam de atenção.
3.  **Tomada de Decisão Baseada em Dados:** Oferecer insights para gestores e operadores logísticos tomarem decisões informadas, seja para otimizar rotas, realocar recursos, negociar com fornecedores ou ajustar estratégias.
4.  **Identificação de Tendências:** Através do gráfico de tendência mensal, é possível observar padrões e prever comportamentos futuros, auxiliando no planejamento estratégico.
5.  **Segmentação de Análise:** Os filtros permitem uma análise granular por região, filial, centro de custo e cliente, possibilitando identificar gargalos ou sucessos em níveis específicos da operação.
6.  **Visualização Intuitiva:** Apresentar dados complexos de forma simples e visualmente atraente, tornando a informação acessível e compreensível para diferentes níveis de usuários.

## Estrutura de Dados (Mock Data)

O dashboard atualmente utiliza dados mockados (`mockData` no `script.js`) para simular o fluxo de informações. Para o novo sistema, esses dados precisarão ser fornecidos por uma API ou banco de dados.

### `mockData` Estrutura:

```javascript
const mockData = {
    "date": "2025-09-09", // Data de referência para os dados
    "summary": { // Resumo geral dos KPIs (pode ser calculado a partir de kpiEntries)
        "RECEITA": { "real": 150000.00, "bgt": 140000.00, "pm": 135000.00 },
        "ON_TIME": { "real": 92.5, "bgt": 95.0, "pm": 90.0 },
        "OCUPACAO": { "real": 85.0, "bgt": 88.0, "pm": 82.0 },
        "TERCEIRO": { "real": 15.0, "bgt": 10.0, "pm": 12.0 },
        "DISPONIBILIDADE": { "real": 98.0, "bgt": 99.0, "pm": 97.5 }
    },
    "kpiEntries": [ // Detalhes dos KPIs por entidade (cliente, centro de custo, etc.)
        {
            "id": "kpi1",
            "date": "2025-09-09",
            "clientId": "clientA",
            "clientName": "Cliente Alpha",
            "costCenterId": "cc1",
            "costCenterName": "Centro Custo 1",
            "branchId": "branch1",
            "branchName": "Filial A",
            "regionId": "norte",
            "regionName": "Região Norte",
            "kpiType": "RECEITA", // Tipo de KPI (RECEITA, ON_TIME, etc.)
            "kpiValue": 50000.00 // Valor do KPI
        },
        // ... outros kpiEntries
    ],
    "regions": [ // Lista de regiões para o filtro
        { "id": "norte", "name": "Região Norte" },
        // ... outras regiões
    ],
    "branches": [ // Lista de filiais, com referência à região
        { "id": "branch1", "name": "Filial A", "regionId": "norte" },
        // ... outras filiais
    ],
    "costCenters": [ // Lista de centros de custo, com referência à filial
        { "id": "cc1", "name": "Centro Custo 1", "branchId": "branch1" },
        // ... outros centros de custo
    ],
    "clients": [ // Lista de clientes, com referência ao centro de custo
        { "id": "clientA", "name": "Cliente A", "costCenterId": "cc1" },
        // ... outros clientes
    ]
};
```

### Dados para Gráficos Específicos:

-   **`unidadesData`**: Dados para o gráfico "Actual vs BGT/PM por Unidade".
    ```javascript
    const unidadesData = [
      { unidade: 'RMSP', bgt: 959, pm: 940, real: 937 },
      { unidade: 'RMRJ', bgt: 141, pm: 150, real: 164 },
      { unidade: 'CWBI', bgt: 120, pm: 110, real: 115 },
      { unidade: 'REC',  bgt: 80,  pm: 85,  real: 90  }
    ];
    ```
-   **`tendenciaMensalData`**: Dados para o gráfico "Tendência Mensal (BGT x PM)".
    ```javascript
    const tendenciaMensalData = [
      { mes: 'jan', bgt: 2752, pm: 2310 },
      { mes: 'fev', bgt: 2333, pm: 1906 },
      { mes: 'mar', bgt: 2100, pm: 2000 },
      { mes: 'abr', bgt: 2200, pm: 2100 }
    ];
    ```
-   **`gaugesData`**: Dados para os velocímetros.
    ```javascript
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
    ```

## Considerações para o Novo Sistema de Dados

O novo sistema de dados deve ser capaz de fornecer as informações acima, preferencialmente através de uma API RESTful, que o dashboard possa consumir. Os endpoints da API devem permitir a recuperação de dados filtrados por região, filial, centro de custo, cliente, ano e mês, de forma a alimentar dinamicamente os KPIs, gráficos e velocímetros.

A estrutura de dados deve ser flexível para acomodar novos KPIs ou dimensões de análise no futuro. A performance da API será crucial para garantir uma experiência de usuário fluida no dashboard.
