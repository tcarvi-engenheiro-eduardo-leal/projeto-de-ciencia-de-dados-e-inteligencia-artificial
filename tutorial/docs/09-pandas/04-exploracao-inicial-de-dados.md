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
dados.head()
dados.head(3)
dados.tail()
print(dados.shape) # (x,y) # -> x-> collumns, y -> lines
print(dados.columns)
print(dados.info())
dados.describe()
```  
