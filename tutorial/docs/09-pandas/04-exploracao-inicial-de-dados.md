# Exploração Inicial de Dados
```python
import pandas as pd

url = 'XXXXXXX'
dados = pd.read_csv(url, sep=';')

#
# Viasualização Inicisl dos Dados
#
dados.head()
dados.head(3)
dados.tail()

dados.describe()

print(type(dados)) # pandas.core.frame.Dataframe
```  
