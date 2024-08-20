# Manipulação de Dados de database sqlite
- Executar operações simples de consulta e criação de nova tabela com funções do pandas e sqlalchemy
    - pd.read_sql_table([parameters])
    - pd.to_sql([parameters])
- Executar manipulação de dados CRUD com uso de ORM de sqlalchemy
    - ORM é uma técnica de MAPEAMENTO OBJETO RELACIONAL que permite a execução do CRUD em banco de dados relacional, através de comandos enviados para objetos criados no código.
    - Biblioteca ORM para CRUD: sqlalchemy
        - CREATE
        - READ
        - UPDATE
        - DELETE

# Criar Engine para as conexões com o banco de dados local sqlite

```python
from sqlalchemy import create_engine
# sqlalchemy pode fazer conexão com:
# - sqlite
# - mysql/mariaDB
# - postgresql
# - oracle

# define a conexão co o banco de daados sqlite
engine = create_engine('sqlite:///:memory:')
```  

## Saber quai são os dados existentes na coluna, sem considerar a repetição dos mesmos
```python
# dados únicos de uma coluna
dados["Nome_coluna"].unique()
```

## Verificar quais dados de uma coluna são iguais a certo valor
```python
selecionados = dados["Nome_coluna"] == "Algum valor existente..."
print('Quantidade do Selecionado = %s' %(sum(selecionados)) )
```

## Verificar quais dados de uma coluna são iguais a certo valor ou a outro valor
```python
selecionados = (dados["Nome_coluna"] == "Algum valor existente...") | (dados["Nome_coluna"] == "Algum outro valor existente...")
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```

## Forma sintética para fazer verificações, em 1 coluna
```python 
selecionados =  dados["Nome_coluna"].isin(["Algum valor existente...", "Algum outro valor existente..."])
# Retorna True ou False para cada célula da coluna...
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```  

## Filtragem com series.loc(), sem limitar seleção por colunas
```python
# series.loc() seleciona dados de uma coluna, a partir de um array de valores True ou False, que tenha o mesmo tamanho de index da coluna.
selecionados =  dados.loc[ dados["Nome_coluna"].isin(["Algum valor existente...", "Algum outro valor existente..."]) ]
# Retorna True ou False para cada célula da coluna...
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```  

## Filtragem com series.loc(), com limitação da seleção por coluna
```python
# series.loc() seleciona dados de uma coluna, a partir de um array de valores True ou False, que tenha o mesmo tamanho de index da coluna.
selecionados =  dados.loc[ dados["Nome_coluna"].isin(["Algum valor existente...", "Algum outro valor existente..."]), 1970 ]
# Retorna True ou False para cada célula da coluna...
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```

## Filtragem com series.loc(), com limitação da seleção por várias colunas
```python
# series.loc() seleciona dados de uma coluna, a partir de um array de valores True ou False, que tenha o mesmo tamanho de index da coluna.
selecionados =  dados.loc[ dados["Nome_coluna"].isin(["Algum valor existente...", "Algum outro valor existente..."]), 1970:2021 ]
# Retorna True ou False para cada célula da coluna...
print('Quantidade do Selecionado  = %s' %(sum(selecionados)) )
```