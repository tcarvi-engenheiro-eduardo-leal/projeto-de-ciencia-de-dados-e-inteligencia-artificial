# Exploração Inicial de Dados
```python
import pandas as pd

url = 'XXXXXXX'
dados = pd.read_csv(url, sep=';')

#
# Viasualização Inicial dos Dados
#
print(type(dados)) # pandas.core.frame.Dataframe
dados.head()
dados.head(3)
dados.tail()
print(dados.shape) # (x,y) # -> x-> collumns, y -> lines
print(dados.columns)
print(dados.info())
dados.describe()

print(dados['serie1'])
print(dados['serie2'])
print(dados['serie3'])
print(dados['serie4'])
```  
