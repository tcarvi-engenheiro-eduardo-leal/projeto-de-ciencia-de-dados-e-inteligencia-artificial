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
import pandas as pd

url = "https://gist.github.com/guilhermesilveira/73cc6976569c41a338bbec78757d6756"
dados = pd.read_csv(url)
```  

