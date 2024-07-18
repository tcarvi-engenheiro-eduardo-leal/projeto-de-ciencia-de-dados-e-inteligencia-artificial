# Otimização da Classificação

## Etapas
1. Estratificar os dados reais, antes do treinamento, em:
    - train_x
    - test_x
    - train_y
    - test_x
2. Plotar a dispersão dos dados.

### Estratificação de dados sem biblioteca biblioteca train_test_split
- **Pergunta:**
    - Se uma pessoa ter as features:
        - Vir de certo local
        - E ter covid
        - Qual deve ser a estimativa dela falecer ou se recuperar?
    - Só consigo responder e treinar o sistema de Inteligência Artificial se eu:
        - Mexer nos dados
        - Separar os indivíduos por linha
        - Dar maior significado às colunas
```python
from pathlib import Path
import pandas as pd

file_path = Path('src/python-coding/notebook/dados.csv')
file_path_absolute = file_path.absolute()
dados = pd.read_csv(file_path_absolute)
mapa_de_alteracao_nomes = {
    "Province/State": "local",
    "Confirmed": "confirmacoes_de_covid",
    "Deaths": "obito_por_causa_da_covid",
    "Recovered": "recuperacao_depois_da_covid"
}
dados = dados.rename(columns = mapa_de_alteracao_nomes)
# dados.head()
dados = dados[['local', 'covid_confirmado', 'obito', 'recuperacao']]
print(dados.head())
# modelo de features
# modelo_features_de_item = [feature1, feature2, ]

```  

