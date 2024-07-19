# Seleção e Apresentação dos Dados
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

print(dados.shape) # (2379, 8) # NumpyArray bidemensional com 2379 linhas e 8 colunas.
# seleção e apresentação de dados
print('## ObservationDate ###############################################')
print(dados['ObservationDate']) # Index e Valores # Name: ObservationDate, Lenght: 2379, dtype: object
print(dados['ObservationDate'].shape) # (2379,) # NumpyArray unidimensional com 2379 linhas.
print('## Province/State ################################################')
print(dados['Province/State'])
print('## Country/Region #################################################')
print(dados['Country/Region'])
print('## Confirmed #####################################################')
print(dados['Confirmed'])
print('## Confirmed ## Deaths ## Recovered ###############################')
print(dados[['Confirmed', 'Deaths', 'Recovered']])

shape

# Seleção e cálculo de média aritmética simples (mean)
print(dados['Valor'].mean())

print(dados.groupby('Tipo').mean(numeric_value=TRUE)) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.

print(dados.groupby('Tipo')['Valor'].mean()) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.
print(dados.groupby('Tipo')['Valor'].mean().sort_values('Valor')) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.

print(dados.groupby('Tipo')[['Valor','XXXXX']].mean()) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.

dados.precos.plot(kind='barh', figsise=(14, 10), color="purple")
dados.Tipo.unique()
```  
