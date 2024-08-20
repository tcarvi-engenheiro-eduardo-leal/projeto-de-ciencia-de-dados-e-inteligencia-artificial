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

## Manipulação de Dados apenas com Pandas e sqlalchemy
```python
from sqlalchemy import create_engine
engine = create_engine('sqlite:///:memory:')

import pandas as pd

# sem limitar a consulta por colunas
pd.read_sql_table('user_account', engine)
```

## READ de Banco de Dados sqlite com pandas e com limitação das colunas a serem mostradas
```python
from sqlalchemy import create_engine
engine = create_engine('sqlite:///:memory:')

import pandas as pd

# limitando a consulta para colunas escolhidas
pd.read_sql_table('user_account', engine, columns=['id', 'fullname'])
```  

## Importar dados csv da internet, e criar nova tabela no banco de dados
```python
from sqlalchemy import create_engine
engine = create_engine('sqlite:///:memory:')

import pandas as pd
url = 'https://XXXX'

# gravar dados importados, em uma nova table de nome "clientes"
pd.to_sql('clientes', engine, index=False)

# Verifica se houve gravação
inspector = inspect(engine)
print(inspector.get_table_name()) # ['clientes'] 
```  