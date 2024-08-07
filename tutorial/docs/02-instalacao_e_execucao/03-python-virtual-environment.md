# Python Virtual Environment

## Melhor prática
- Sempre que possível levante um Ambiente Virtual com python.
- E instale bibliotecas apenas neste ambiente temporário.
- Mesmo se usar o Jupyter ou outra solução de Notebook, use o python do Ambiente Virtual.

### Crie e ative um ambiente virtual, escolhendo versão específica do Python:  
```console
python3.12 -m venv myvenv
```  
  
```console
source myvenv/bin/activate
```  
  
```console title="Para desativar o ambiente virtual do Python"
deactivate
```  

## PATHs do ambiente virtual em execução
- `./myvenv/bin`
  - activate
  - pip
  - pip3
  - python
  - python3
  - python3.12