# Importar Planilha do Excel ou do Google Planilhas

## Importar Planilha
```python
from pathlib import Path
import pandas as pd

# Download de:
path_local = Path('src/python-coding/notebook/planilhas_poluicao.xlsx').absolute()
print(pd.ExcelFile(path_local).sheet_names)
# [ ]

dados = pd.read_excel(path_local, sheet_name = "GEE Estados")
# Nome da planilha, dentro do arquivo excel que é um diretório de planilhas
dados.head()
```  

