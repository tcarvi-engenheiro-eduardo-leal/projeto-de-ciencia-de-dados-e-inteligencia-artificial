# Importar Tabela de Arquivo csv

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
dados.head()
```  
## Importação de apenas algumas colunas de tabela
```python
from pathlib import Path
import pandas as pdg

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path_local, usecols=["ObservationDate", "Province/State"])
dados.head()
```  

## Importação de apenas algumas colunas e algumas linhas de tabela
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path_local, usecols=["ObservationDate", "Province/State"], nrows=3)
dados.head()
```  

## Importação e seguinte gravação de tabela, com outro nome
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path_local, usecols=["ObservationDate", "Province/State"], nrows=3)
dados.head()
path_local2 = Path('src/python-coding/notebook/dados2.csv').absolute()
dados.to_csv(path_local2, index=False)
dados2 = pd.read_csv(path_local2, usecols=["ObservationDate", "Province/State"], nrows=3)
# para ver gravação
dados2.head()
```  