# Manipulação de Dados

## Alteração dos Títulos das Colunas

# Seleção
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

print(dados.columns)
```