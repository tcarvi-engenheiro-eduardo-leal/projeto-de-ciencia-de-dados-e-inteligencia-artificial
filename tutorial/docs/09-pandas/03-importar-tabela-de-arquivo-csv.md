# Importar Dados

## Importação de URI da web
```python
import pandas as pd

url = 'xxxxxxx'
dados = pd.read_csv(url, sep=';')
print(dados)
```  

## Importação de path local
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)
print(dados)
```  
## Importação de tabela Excell
```python
from pathlib import Path
import pandas as pdg

path = Path('src/python-coding/notebook/dados.xlsx').absolute()
dados = pd.read_excel(path, sheet_name = 'GEE Estados') # Nome da planilha
print(dados)
```  