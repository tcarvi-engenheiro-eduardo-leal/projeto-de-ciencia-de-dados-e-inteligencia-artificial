# Seleção e Apresentação dos Dados
  
# Seleção
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

print(dados['ObservationDate'])
print(dados.ObservationDate)
print(dados['Confirmed'])
print(dados.Confirmed)
print(dados['Deaths'])
print(dados.Deaths)
print(dados['Recovered'])
print(dados.Recovered)
```  
  
# Seleção com groupby
- groupby agrupa os dados para permitir que você execute operações em cada grupo criado. 
- Esse método divide os dados com base na coluna e/ou condição desejada em grupos.
- Este método aplica a função desejada nos grupo criados, individualmente, combinando o resultado em uma única saída.
- Etapas:
    - Dividir os dados em grupos com base em alguns critérios;
    - Aplicar uma função a cada grupo de forma independente;
    - Combinar os resultados em uma estrutura de dados, geralmente em um DataFrame ou em uma Series.
  
```python  
# Extrai coluna "Confirmed" e a fixa com index. Gera uma tabela com estes dados.
print(dados.groupby('Confirmed'))
# Depois apresenta média dos valores do index em todas as colunas numéricas.
print(dados.groupby('Confirmed').mean())

# Extrai coluna "Confirmed" e a fixa com index. Gera uma tabela com estes dados.
print(dados.groupby('Confirmed'))
# Depois apresenta média dos valores do index em todas as colunas numéricas.
print(dados.groupby('Confirmed')['Recovered'].mean())

# Extrai coluna "Confirmed" e a fixa com index. Gera uma tabela com estes dados.
print(dados.groupby('Confirmed'))
# Depois apresenta média dos valores do index em todas as colunas numéricas.
print(dados.groupby('Confirmed')['Recovered'].mean().sort_values('Valor'))
```  

# Plotagem usando pandas
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

dados.Confirmed.plot(kind='barh', figsise=(14, 10), color="purple")
```
