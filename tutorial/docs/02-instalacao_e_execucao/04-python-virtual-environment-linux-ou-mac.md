# Python Virtual Environment para Linux ou Mac

### Virtual Environment 
- Sempre abra o terminal e crie uma nova virtual environment
  - Ou ative uma virtual environment criada anteriormente.
  
```console
python3.12 -m venv virtual-environment```  
``` 

```console
source virtual-environment/bin/activate
```  
  
```console title="Para desativar o ambiente virtual do Python"
deactivate
```  

## PATHs do ambiente virtual em execução
- `./virtual-environment/bin`
  - activatep
  - pip
  - pip3
  - python
  - python3
  - python3.12

### Instalação na Virtual Environment  
- Depois de criar e ativar o Virtual Environment, execute:

```console
pip install numpy
```  
  
```console
pip install pandas
```  

```console
pip install scipy
```  

```console
pip install matplotlib
```  
  
```console
pip install seaborn
```  

```console
pip install scikit-learn
```  

```console
pip install jupyterlab
```  
  
### Execução na Virtual Environment  

```console
jupyter lab
```  
