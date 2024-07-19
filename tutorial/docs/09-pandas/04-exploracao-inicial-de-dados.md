# Exploração Inicial de Dados
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

#
# Viasualização Inicial dos Dados
#
print(type(dados)) # pandas.core.frame.Dataframe
print(dados.head())
print(dados.head(3))
print(dados.tail())
print(dados.shape) # (x,y) # -> x-> linhas, y -> colunas
print(dados.columns) # Título das colunas
print(dados.info())
dados.describe()
```  
