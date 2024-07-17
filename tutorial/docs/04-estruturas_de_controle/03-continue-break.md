# Continue e break

```python
for elemento in iterable:
    # bloco de execução
    if truth_testing:
        continue
    # Bloco de código não executado se comando "continue" é executado. 
    # Mas fluxo de nova iteração é executada.
```  

```python
for elemento in iterable:
    # bloco de execução
    if truth_testing:
        break
    # Bloco de código não executado se comando "break" é executado. 
    # Fluxo completo do loop é encerrado.
```  