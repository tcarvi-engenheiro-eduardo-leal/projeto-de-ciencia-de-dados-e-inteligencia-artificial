# Seleção e Apresentação dos Dados
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

# seleção e apresentação de dados
print('## ObservationDate ###############################################')
print(dados['ObservationDate'])
print(dados.shape())
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
