# Extração Organizada de Dados

## Extração gerando list de tuples

- Extração de `list de tuples`, a partir de 2 `list`s quaisquer, usando:
    - `list comprehension`
    - `range(len(input))`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [(dado1[i], dado2[i]) for i in range(len(dado1))]
print(resultado_desejado)
```  

- Extração de `list de tuples`, a partir de 2 `list`s quaisquer, usando:
    - `list comprehension com condition`
    - `range(len(input))`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [(dado1[i], dado2[i]) for i in range(len(dado1)) if dado2[i] > 7]
print(resultado_desejado)
```

- Extração de `list de tuples`, a partir de 2 `list`s quaisquer, usando:
    - `list comprehension`
    - `zip(dado1, dado2)`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [{key: valor} for key, valor in zip(dado1, dado2)]
print(resultado_desejado)
```

- Extração de `list de tuples`, a partir de 2 `list`s quaisquer, usando:
    - `list comprehension com condition`
    - `zip(dado1, dado2)`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [{key: valor} for key, valor in zip(dado1, dado2) if valor > 7]
print(resultado_desejado)
```  

## Extração gerando dicts
- Extração de `dict`, a partir de 2 `list`s quaisquer, usando:
    - `dict comprehension`
    - `range(len(dado))`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {dado1[i]: dado2[i] for i in range(len(dado1))}
print(resultado_desejado)
```

- Extração de `dict`, a partir de 2 `list`s quaisquer, usando:
    - `dict comprehension com condition`
    - `range(len(dado))`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {dado1[i]: dado2[i] for i in range(len(dado1)) if dado2[i] > 7}
print(resultado_desejado)
```

- Extração de `dict`, a partir de 2 `list`s quaisquer, usando:
    - `dict comprehension`
    - `zip(dado1,dado2)`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {key: valor for key, valor in zip(dado1, dado2)}
print(resultado_desejado)
```

- Extração de `dict`, a partir de 2 `list`s quaisquer, usando:
    - `dict comprehension com condition`
    - `zip(dado1,dado2)`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {key: valor for key, valor in zip(dado1, dado2) if valor > 7}
print(resultado_desejado)
```  
