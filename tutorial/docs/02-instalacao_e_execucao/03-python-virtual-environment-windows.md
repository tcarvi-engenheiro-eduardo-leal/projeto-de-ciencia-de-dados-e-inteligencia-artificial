# Python Virtual Environment para Windows
- Use o aplicativo Anaconda Navigator para criar a Virtual Environment.
  - Depois abra o **terminal da virtual environment** para instalar dependências do projeto, inclusive o jupyterlab. E para executar o jupyterlab.

### Instalação e Execução na Virtual Environment  
- Iniciar aplicativo Anaconda Navigator
- Arir aba Environments
- Clicar no botão create (se não tiver criado ainda a Virtual Environment)
- Opção de inicializar o terminal, dentro do Environment criado.

```console
pip install numpy
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