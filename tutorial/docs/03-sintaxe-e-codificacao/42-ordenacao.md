# Ordenação

## sorted()

```python
idades = [15, 87, 32, 45, 67, 37]
for indice, idade in enumerate(sorted(idades)): 
    # unpacking da tupla gravando indice e idade
    print(indice, idade)
``` 

```python
idades = [15, 87, 32, 45, 67, 37]
for indice, idade in enumerate(sorted(idades, reverse=True)): 
    # unpacking da tupla gravando indice e idade
    print(indice, idade)
```  

```python
def extrai_saldo(conta):
    return conta._saldo

for conta in sorted(contas, key=extrai_saldo): 
    print(conta)
``` 

```python
from operator import attrgetter

for conta in sorted(contas, key=attrgetter('saldo')): 
    print(conta)
``` 

## reversed()
```python
idades = [15, 87, 32, 45, 67, 37]
for indice, idade in enumerate(reversed(idades)): 
    # unpacking da tupla gravando indice e idade
    print(indice, idade)
``` 
  
## sort()

```python
idades = [15, 87, 32, 45, 67, 37]
for indice, idade in enumerate(idades.sort()): 
    # unpacking da tupla gravando indice e idade
    print(indice, idade)
``` 

