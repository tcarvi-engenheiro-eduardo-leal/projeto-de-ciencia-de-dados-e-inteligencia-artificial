# Otimização da Classificação

## Etapas
1. Estratificar os dados reais, antes do treinamento, em:
    - train_x
    - test_x
    - train_y
    - test_x
2. Plotar a dispersão dos dados.

### Estratificação de dados sem biblioteca biblioteca train_test_split
```python
import pathlib
import pandas as pd

file_path = pathlib('src/python-coding/notebook/dados.csv')
file_path_absolute = file_path.absolute()
dados = pd.read_csv(file_path_absolute)
mapa_de_alteracao_nomes = {
    "Province/State": "local",
    "Confirmed": "covid_confirmado",
    "Deaths": "obito",
    "Recovered": "recuperacao"
}
dados = dados.rename(columns = mapa_de_alteracao_nomes)
dados.head()
```  

