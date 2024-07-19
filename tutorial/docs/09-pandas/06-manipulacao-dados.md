# Manipulação de Dados

## Alterar Título das Colunas

```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

print(dados.columns)
```  

```python
mapa = {
   'Confirmed':'confirmados',
   'Deaths':'obitos',
   'Recovered':'recuperados'
}

dados = dados.rename(columns = mapa_alteracao_titulos)
print(dados.columns)
```
