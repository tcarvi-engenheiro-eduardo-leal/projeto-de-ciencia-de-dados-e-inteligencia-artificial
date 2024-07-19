# Seleção e Apresentação dos Dados
```python
from pathlib import Path
import pandas as pd

path = Path('src/python-coding/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

# Seleção
print(dados['ObservationDate'])
print(dados.ObservationDate)
print(dados['Confirmed'])
print(dados.Confirmed)
print(dados['Deaths'])
print(dados.Deaths)
print(dados['Recovered'])
print(dados.Recovered)


# Seleção com groupby
- groupby agrupa os dados para permitir que você execute operações em cada grupo criado. 
- Esse método divide os dados com base na coluna e/ou condição desejada em grupos.
- Este método aplica a função desejada nos grupo criados, individualmente, combinando o resultado em uma única saída.

- Etapas:
    - Dividir os dados em grupos com base em alguns critérios;
    - Aplicar uma função a cada grupo de forma independente;
    - Combinar os resultados em uma estrutura de dados, geralmente em um DataFrame ou em uma Series.

print(dados.groupby('Tipo').mean(numeric_value=TRUE)) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.

print(dados.groupby('Tipo')['Valor'].mean()) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.
print(dados.groupby('Tipo')['Valor'].mean().sort_values('Valor')) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.

print(dados.groupby('Tipo')[['Valor','XXXXX']].mean()) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.

dados.precos.plot(kind='barh', figsise=(14, 10), color="purple")
dados.Tipo.unique()
```  
