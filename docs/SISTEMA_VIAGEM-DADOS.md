Claro! Segue abaixo a descrição completa da planilha **Mokap.xlsx** no formato **Markdown (.md)**, com o máximo possível de informações extraídas da estrutura e dos dados fornecidos:

---

# 📊 Descrição Detalhada da Planilha: `Mokap.xlsx`

## 📋 Visão Geral

Este arquivo Excel (`Mokap.xlsx`) é utilizado para o **gerenciamento de viagens** de uma operação logística. Ele contém duas abas:

1. **Viagem** (ativa, com dados)
2. **Ocorrência** (vazia)

---

## 📑 Aba: `Viagem`

### 🧾 Metadados da Planilha

- **Nome da Aba:** Viagem
- **Número da Aba:** 1
- **Tipo de Conteúdo:** Dados de viagens logísticas
- **Quantidade de Linhas com Dados:** 10 (linhas 3 a 10) + linhas de resumo e legendas
- **Quantidade de Colunas:** 26 (de A a AB)

---

### 🧩 Estrutura das Colunas

| Coluna | Cabeçalho               | Tipo de Dado              | Descrição                                                                 |
|--------|-------------------------|---------------------------|---------------------------------------------------------------------------|
| A      | NF                      | Numérico                  | Número da Nota Fiscal                                                     |
| B      | Tipo                    | Texto                     | Tipo de entrega (ex: Reentrega, NORMAL)                                   |
| C      | CLIENTE                 | Texto                     | Nome do cliente (ex: CANTO, QUALITA, FRUTAP)                              |
| D      | DESTINATÁRIO            | Texto                     | Nome do destinatário (ex: ATACADAO, ASSAI)                                |
| E      | CIDADE                  | Texto                     | Cidade de destino (ex: ASA NORTE, SIA)                                    |
| F      | RAIO                    | Texto                     | Região de atuação (ex: Metropolitana, Interior)                           |
| G      | DURAÇÃO DA ROTA         | Numérico                  | Duração estimada da rota (em dias?)                                       |
| H      | PLACA                   | Texto                     | Placa do veículo (ex: TATU-01)                                            |
| I      | FROTA                   | Texto                     | Tipo de frota (ex: Agregado, FROTA)                                       |
| J      | MOTORISTA               | Texto                     | Nome do motorista (ex: ELIAS)                                             |
| K      | Tipologia               | Texto                     | Tipo de carga (ex: Leve)                                                  |
| L      | CAPACIDADE              | Numérico                  | Capacidade máxima do veículo (em kg?)                                     |
| M      | PESO BRUTO              | Numérico                  | Peso total da carga (kg)                                                  |
| N      | Devolução KG            | Numérico                  | Peso devolvido (kg)                                                       |
| O      | % Devolução             | Fórmula                   | Percentual de devolução (=N/M)                                            |
| P      | OCUPAÇÃO                | Fórmula                   | Taxa de ocupação do veículo (=M/L)                                        |
| Q      | Data Emissão            | Data/Hora                 | Data de emissão da NF                                                     |
| R      | FRETE PESO              | Numérico                  | Valor do frete por peso (R$)                                              |
| S      | Manifesto               | Numérico                  | Número do manifesto? (sempre 1 nos exemplos)                              |
| T      | VALOR MERCADORIA        | Numérico                  | Valor total da mercadoria (R$)                                            |
| U      | R$ p/KG                 | Fórmula                   | Custo por kg (=R/M)                                                       |
| V      | DROP                    | ?                         | Não preenchido nos dados                                                  |
| W      | Lead Time - Cliente     | Numérico                  | Tempo de lead time (dias?)                                                |
| X      | Baixa da Entrega        | Data/Hora                 | Data/hora da baixa da entrega                                             |
| Y      | On time                 | Texto                     | Indicador de pontualidade (ex: NOK)                                       |
| Z      | DESCARGA                | Numérico                  | Tempo de descarga? (minutos?)                                             |
| AA     | Vlr Agregado            | Numérico                  | Valor agregado (R$)                                                       |
| AB     | Vlr Agregado            | Fórmula                   | Cálculo de valor agregado (=+(AA11/R11-1)*-1)                             |

---

### 📊 Dados das Viagens (Linhas 3 a 10)

| NF      | Tipo      | CLIENTE | DESTINATÁRIO  | CIDADE    | RAIO          | DURAÇÃO | PLACA   | FROTA    | MOTORISTA | Tipologia | CAPACIDADE | PESO BRUTO | Devolução KG | % Devolução | OCUPAÇÃO | Data Emissão       | FRETE PESO | Manifesto | VALOR MERCADORIA | R$ p/KG     | DROP | Lead Time | Baixa da Entrega    | On time | DESCARGA | Vlr Agregado |
|---------|-----------|---------|---------------|-----------|---------------|---------|---------|----------|-----------|-----------|------------|------------|--------------|-------------|----------|---------------------|------------|-----------|------------------|-------------|------|-----------|---------------------|---------|----------|--------------|
| 79990   |           | CANTO   | ATACADAO      | ASA NORTE | Metropolitana | 1       | TATU-01 | Agregado | ELIAS     | Leve      | 4500       | 958.2      |              |             |          | 2025-08-26 00:00:00 | 100        | 1         | 26862.73         | =+R3/M3     |      | 3         | 2025-05-04 00:00:00 | NOK     | 500      | 60           |
| 79991   | Reentrega | CANTO   | ATACADAO      | ASA NORTE | Interior      | 3       | TATU-01 | FROTA    | ELIAS     | Leve      | 4500       | 1113.23    |              |             |          |                     | 100        | 1         | 14748.46         |             |      | 3         | 4                   | NOK     | 350      | 60           |
| 80037   | NORMAL    | CANTO   | ASSAI         | ASA NORTE |               |         | TATU-01 |          | ELIAS     | Leve      | 4500       | 236.2      |              |             |          |                     | 100        | 1         | 4285             |             |      | 3         | 4                   | NOK     |          | 60           |
| 80027   |           | CANTO   | ASSAI         | ASA NORTE |               |         | TATU-01 |          | ELIAS     | Leve      | 4500       | 783.32     |              |             |          |                     | 100        | 1         | 14880.44         |             |      | 3         | 4                   | NOK     |          | 60           |
| 1240412 |           | FRUTAP  |               | ASA NORTE |               |         | TATU-01 |          | ELIAS     | Leve      | 4500       | 349.808    |              |             |          |                     | 100        | 1         | 2740.07          |             |      | 3         | 4                   | NOK     |          | 60           |
| 79992   |           | CANTO   | ATACADAO      | SIA       |               |         | TATU-01 |          | ELIAS     | Leve      | 4500       | 415.79     |              |             |          |                     | 100        | 1         | 9956.36          |             |      | 3         | 4                   | NOK     |          | 60           |
| 79993   |           | CANTO   | ATACADAO      | SIA       |               |         | TATU-01 |          | ELIAS     | Leve      | 4500       | 354.11     |              |             |          |                     | 100        | 1         | 4982.68          |             |      | 3         | 4                   | NOK     |          | 60           |
| 606762  |           | QUALITA | ATACADAO S.A. | SIA       |               |         | TATU-01 |          | ELIAS     | Leve      | 4500       | 72.96      | 1000        |             |          |                     | 100        | 1         | 28               |             |      | 3         | 4                   | NOK     |          | 60           |

---

### 🧮 Linha de Totalização (Linha 11)

A linha 11 contém fórmulas para consolidar os dados das viagens:

| Coluna | Fórmula               | Descrição                           |
|--------|-----------------------|-------------------------------------|
| M      | `=SUM(M3:M10)`        | Soma do peso bruto                  |
| N      | `=SUM(N3:N10)`        | Soma das devoluções em kg           |
| O      | `=+N11/M11`           | Percentual total de devolução       |
| P      | `=+M11/L11`           | Ocupação total do veículo           |
| R      | `=SUM(R3:R10)`        | Soma do frete por peso              |
| T      | `=SUM(T3:T10)`        | Soma do valor da mercadoria         |
| AB     | `=+(AA11/R11-1)*-1`   | Cálculo de valor agregado ajustado |

---

### 📌 Legendas e Campos de Controle (Linhas 12 em diante)

As linhas abaixo da 11 contêm rótulos para possíveis indicadores ou controles:

- Peso
- Receita
- Ocupação
- Disponibilidade
- Frete 3
- On time
- Devolução
- Ocorrência
- Retorno Matriz
- Reentrega
- Descarga
- Refaturamento

---

## 📄 Aba: `Ocorrência`

- **Nome da Aba:** Ocorrência
- **Número da Aba:** 2
- **Status:** Vazia
- **Possível Uso:** Registro de ocorrências durante as viagens (avarias, atrasos, problemas etc.)

---

## 🧠 Análise e Observações

### 🔍 Padrões Identificados

- O veículo **TATU-01** e o motorista **ELIAS** são os únicos presentes nos registros.
- A capacidade do veículo é sempre **4500** (kg?).
- Quase todos os registros têm `On time = NOK`, indicando possíveis atrasos.
- A coluna `Baixa da Entrega` mistura datas e valores numéricos (provavelmente erro de digitação).
- A coluna `DROP` não foi preenchida em nenhum registro.

### ⚠️ Possíveis Problemas

- Datas inconsistentes (ex: baixa em 2025-05-04 para NF emitida em 2025-08-26).
- Valores ausentes em várias colunas.
- Fórmulas dependentes de células vazias podem retornar erro.

### 💡 Sugestões de Melhoria

- Padronizar formato de datas.
- Preencher dados faltantes.
- Validar consistência temporal.
- Utilizar a aba "Ocorrência" para registrar motivos de `NOK` em "On time".

---

## 🧾 Conclusão

Esta planilha serve como um **controle operacional de viagens**, com foco em:

- Gestão de fretes
- Controle de peso e ocupação
- Indicadores de desempenho (on time, devolução, lead time)
- Cálculo de custos e receitas

Recomenda-se a validação e padronização dos dados para melhor aproveitamento do controle.
