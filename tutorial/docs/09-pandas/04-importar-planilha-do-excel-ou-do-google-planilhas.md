# Exploração Inicial de Dados
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

#
# Visualização da forma dos Dados
#
print(type(dados)) # pandas.core.frame.Dataframe
print(dados.shape) # (2379, 8) # NumpyArray bidemensional com 2379 linhas e 8 colunas.
print(dados.columns) # Título das colunas
# dados.info() informa:
#    - Quantidade total de dados e de colunas. 
#    - Quantidade de dados não nulos de cada coluna.
#    - Tipo de dado de cada coluna.
print(dados.info())

#
# Visualização Inicial dos Dados
#
print(dados.head())
print(dados.head(3))
print(dados.tail())

# Visualização de Series
print('## ObservationDate ###############################################')

# Index e Valores 
# Name: ObservationDate, Lenght: 2379, dtype: object
print(dados['ObservationDate'])
print(dados['ObservationDate'].unique())

# (2379,) # NumpyArray unidimensional com 2379 linhas.
print(dados['ObservationDate'].shape)

# class 'pandas.core.series.Series'
# RangeIndex: 2379 entries, 0 to 2378
# Series name: ObservationDate
# Non-null count: 2379 non null
# Dtype: object
# dTypes: object(1)
# memory usage: 18.7+ Kb
print(dados['ObservationDate'].info())

print('## Confirmed ## Deaths ## Recovered ###############################')

# Index e Valores das 3 Series
# [2379 rows x 3 columns]
print(dados[['Confirmed', 'Deaths', 'Recovered']])

# (2379, 3) # NumpyArrya bidimensional com 2379 linhas e 3 colunas
print(dados[['Confirmed', 'Deaths', 'Recovered']].shape)

# class 'pandas.core.series.Series'
# RangeIndex: 2379 entries, 0 to 2378
# Data columns: (total 3 columns):
#  #  Column      Non-null Count  Dtype
# --- ---------- --------------- ------
#  0  Confirmed   2379 non-null  float64 
#  1  Deaths      2379 non-null  float64
#  2  Recovered   2379 non-null  float64
# dTypes: float64(3)
# memory usage: 55.9 Kb
# None
print(dados[['Confirmed', 'Deaths', 'Recovered']].info())
```  

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