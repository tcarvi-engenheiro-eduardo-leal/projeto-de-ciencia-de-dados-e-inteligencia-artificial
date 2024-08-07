# Jupyter Lab

# Instalação (mac ou linux)
```bash  
pip install jupyterlab
```  
```bash  
jupyter lab
```  
- Se preferir, mantenha até a instalação do jupyter no contexto do homebrew:
```bash  
brew install jupyterlab
```  

## Instalação (windows)
- Instale o Anaconda e use o "Anaconda PowerShell Prompt" para qualquer comando de terminal.

## Execução:
```bash  
jupyter lab
```

## Melhor prática para execução:
- Sempre que possível levante um Ambiente Virtual com python.
  - E instale bibliotecas apenas neste ambiente temporário.
- Mesmo se usar o Jupyter ou outra solução de Notebook, use o python do Ambiente Virtual.
  ![](./img/melhor-pratica.png)
  A execução do jupyterlab indicará o url do kernel-python a ser usado no notebook.