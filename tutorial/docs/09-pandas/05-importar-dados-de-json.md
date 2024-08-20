# Importar Dados de JSON

## Importação de path local
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/pacientes.json').absolute()
dados = pd.read_json(path)
dados.head()
```  

## Importação de JSON com dados não-normalizados
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/python-coding/notebook/pacientes.json').absolute()
dados = pd.read_json(path_local)
dados.head()
```  

## Normalizar e Importar dados de JSON
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/python-coding/notebook/pacientes.json').absolute()
dados = pd.read_json(path_local)
dados.head()
dados_nomalizados = pd.json_normalize(dados['Pacientes'])
dados_normalizados.head()
```  

## Join de Dados Normalizados, na tabela de extração
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/python-coding/notebook/pacientes.json').absolute()
dados = pd.read_json(path_local)
dados.head()
dados_nomalizados = pd.json_normalize(dados['Pacientes'])
dados2 = dados[['Pesquisa', 'Ano']].join(dados_nomalizados)
dados2.head()
```  

## Gravação depois do Join de Dados Normalizados, na tabela de extração
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/python-coding/notebook/pacientes.json').absolute()
dados = pd.read_json(path_local)
dados.head()
dados_nomalizados = pd.json_normalize(dados['Pacientes'])
dados2 = dados[['Pesquisa', 'Ano']].join(dados_nomalizados)
dados2.head()

path_local2 = Path('src/python-coding/notebook/pacientes2.json').absolute()
dados2.to_json(path_local2)

verificacao_dados = pd.read_json(path_local2)
verificacao_dados.head()
```  