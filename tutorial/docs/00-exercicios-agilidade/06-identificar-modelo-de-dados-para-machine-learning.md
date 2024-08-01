# Exercício 6 - Identificar Modelo de Dados para Machine Learning

1) Importe dados de https://raw.githubusercontent.com/guilhermesilveira/machine-learning/master/capitulo6/buscas.csv
2) Conheça as colunas de feature "home", "busca" e "logado".
3) Conheça a coluna "comprou".
4) Exclua todas as linhas com NaN.
5) Identifique modelo de dados para prever se os clientes do site devem ou não comprar um produto na loja web.
    - Separe colunas de input (features) e de output (classe).
    - Segmentize dados de treino e de testes, na proporção respectiva de 60% e 40%.
    - Verifique acurácia do sistema de machine learning.
    - Gere estimativa para novos dados de input, sem ter conhecimento dos dados de saída.
7) Apresente relatório das estimativas usando Power BI.
- **Tempo de execução:** 
    - 24/07/2024:**2 min e 27 seg**

## Resolução:
```python  
import pandas as pd

uri = 'https://raw.githubusercontent.com/guilhermesilveira/machine-learning/master/capitulo6/buscas.csv'
dados = pd.read_csv(uri)
dados.head()
```  