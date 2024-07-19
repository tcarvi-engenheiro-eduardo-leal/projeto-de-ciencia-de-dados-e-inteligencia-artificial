# Seleção e Apresentação dos Dados
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

# dados
print(dados.shape) # (2379, 8) # NumpyArray bidemensional com 2379 linhas e 8 colunas.

print('## ObservationDate ###############################################')

# Index e Valores 
# Name: ObservationDate, Lenght: 2379, dtype: object
print(dados['ObservationDate'])

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

print(dados[['Confirmed', 'Deaths', 'Recovered']])
print(dados[['Confirmed', 'Deaths', 'Recovered']].shape)
print(dados[['Confirmed', 'Deaths', 'Recovered']].info())
# Seleção e cálculo de média aritmética simples (mean)
print(dados['Valor'].mean())

print(dados.groupby('Tipo').mean(numeric_value=TRUE)) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.

print(dados.groupby('Tipo')['Valor'].mean()) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.
print(dados.groupby('Tipo')['Valor'].mean().sort_values('Valor')) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.

print(dados.groupby('Tipo')[['Valor','XXXXX']].mean()) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.

dados.precos.plot(kind='barh', figsise=(14, 10), color="purple")
dados.Tipo.unique()
```  
