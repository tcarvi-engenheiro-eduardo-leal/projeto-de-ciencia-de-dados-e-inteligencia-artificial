# Análise Técnica Inicial de Dados

- Em dataframes:
    - type(data_frame_name)
    - data_frame_name.info()
        - Nome da classe
        - Número de linhas (RangeIndex)
        - Número de dados (entries)
        - Descrição da Serie
            - Nome da Serie
            - Quantidade de dados não nulos da Serie
            - Tipo de dado
        - Distribuição dos tipos
        - Uso da memória
    - data_frame_dados.value_counts()
        - Nome da Serie
        - Quantificação de linhas iguais
            - com indicação do tipo
    - **data_frame_name.shape**
        - Tuple com 2 valores: (número_linhas, número_colunas)
    - **data_frame_name.columns**
    - **data_frame_name.head()**
    - **data_frame_name.head(10)**
    - **data_frame_name.tail()**
    - **data_frame_name.tail(10)**
- Em Series:
    - type(serie)
    - serie_name.info()
        - Nome da classe
        - Número de linhas (RangeIndex)
        - Número de dados (entries)
        - Descrição da Serie
            - Nome da Serie
            - Quantidade de dados não nulos da Serie
            - Tipo de dado
        - Distribuição dos tipos
        - Uso da memória
    - serie_name.value_counts()
        - Nome da Serie
        - Quantificação de linhas iguais
            - com indicação do tipo
    - **serie_name.shape**
        - Tuple com apenas 1 valore: (número_linhas,)
    - **serie_name.unique()**
    - **serie_name.head()**
    - **serie_name.head(10)**
    - **serie_name.tail()**
    - **serie_name.tail(10)**


## Análise Técnica do dataframe
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

print(type(data_frame_dados))
data_frame_dados.info()
data_frame_dados.value_counts()
print(data_frame_dados.shape)
print(data_frame_dados.columns)

data_frame_name.head()
data_frame_name.head(10)
data_frame_name.tail()
data_frame_name.tail(10)
```  

## Análise Técnica de Serie
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados_calories = pd.read_csv(path).calories

print(type(dados_calories))
dados_calories.info()
dados_calories.value_counts()
print(dados_calories.unique)
print(dados_calories.shape)
print(dados_calories.columns)

data_frame_name.head()
data_frame_name.head(10)
data_frame_name.tail()
data_frame_name.tail(10)
```  

## Análise do conteúdo de dados

## Saber quai são os dados existentes na coluna, sem considerar a repetição dos mesmos
```python
# dados únicos de uma coluna
dados["Nome_coluna"].unique()
```

## Verificar quais dados de uma coluna são iguais a certo valor
```python
selecionados = dados["Nome_coluna"] == "Algum valor existente..."
print('Quantidade do Selecionado = %s' %(sum(selecionados)) )
```

## Verificar quais dados de uma coluna são iguais a certo valor ou a outro valor
```python
selecionados = (dados["Nome_coluna"] == "Algum valor existente...") | (dados["Nome_coluna"] == "Algum outro valor existente...")
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```

## Forma sintética para fazer verificações, em 1 coluna
```python 
selecionados =  dados["Nome_coluna"].isin(["Algum valor existente...", "Algum outro valor existente..."])
# Retorna True ou False para cada célula da coluna...
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```  

## Filtragem com series.loc(), sem limitar seleção por colunas
```python
# series.loc() seleciona dados de uma coluna, a partir de um array de valores True ou False, que tenha o mesmo tamanho de index da coluna.
selecionados =  dados.loc[ dados["Nome_coluna"].isin(["Algum valor existente...", "Algum outro valor existente..."]) ]
# Retorna True ou False para cada célula da coluna...
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```  

## Filtragem com series.loc(), com limitação da seleção por coluna
```python
# series.loc() seleciona dados de uma coluna, a partir de um array de valores True ou False, que tenha o mesmo tamanho de index da coluna.
selecionados =  dados.loc[ dados["Nome_coluna"].isin(["Algum valor existente...", "Algum outro valor existente..."]), 1970 ]
# Retorna True ou False para cada célula da coluna...
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```

## Filtragem com series.loc(), com limitação da seleção por várias colunas
```python
# series.loc() seleciona dados de uma coluna, a partir de um array de valores True ou False, que tenha o mesmo tamanho de index da coluna.
selecionados =  dados.loc[ dados["Nome_coluna"].isin(["Algum valor existente...", "Algum outro valor existente..."]), 1970:2021 ]
# Retorna True ou False para cada célula da coluna...
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```