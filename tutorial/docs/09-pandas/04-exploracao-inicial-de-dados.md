# Exploração Inicial de Dados
```python
import pandas as pd

url = 'XXXXXXX'
dados = pd.read_csv(url, sep=';')

#
# Viasualização Inicial dos Dados
#
dados.head()
dados.head(3)
dados.tail()

print(dados['serie1'])
print(dados['serie2'])
print(dados['serie3'])
print(dados['serie4'])

dados.describe()

print(type(dados)) # pandas.core.frame.Dataframe
```  
