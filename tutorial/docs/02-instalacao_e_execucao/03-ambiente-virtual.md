# PYHTON VIRTUAL ENVIRONMENT

## Melhor prática
- Sempre que pssível levante um Ambiente Virtual
- E instale bibliotecas neste ambiente temporário

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