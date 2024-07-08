# Extração de dados armazenados em listas

## Extração gerando list de tuples

- Extração de list de tuples, a partir de 2 listas quaisquer, usando:
    - conceito de `list` e `tuples`
    - `list comprehension`
    - `range(len(input))`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [(dado1[i], dado2[i]) for i in range(len(dado1))]
```  

- Extração de list de tuples, a partir de 2 listas quaisquer, usando:
    - conceito de `list` e `tuples`
    - `list comprehension com condition`
    - `range(len(input))`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [(dado1[i], dado2[i]) for i in range(len(dado1)) if dado2[i] > 7]
```

- Extração de list de tuples, a partir de 2 listas quaisquer, usando:
    - conceito de `list` e `tuples`
    - `list comprehension`
    - `zip(dado1, dado2)`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [{key: valor} for key, valor in zip(dado1, dado2)]
```

- Extração de list de tuples, a partir de 2 listas quaisquer, usando:
    - conceito de `list` e `tuples`
    - `list comprehension com condition`
    - `zip(dado1, dado2)`
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [{key: valor} for key, valor in zip(dado1, dado2) if valor > 7]
```  

## Extração gerando dicts
- Com dict comprehension e range()
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {dado1[i]: dado2[i] for i in range(len(dado1))}
```

- Com dict comprehension, range() e condition
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {dado1[i]: dado2[i] for i in range(len(dado1)) if dado2[i] > 7}
```

- Com dict comprehension e zip()
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {key: valor for key, valor in zip(dado1, dado2)}
```

- Com dict comprehension, zip() e condition
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = {key: valor for key, valor in zip(dado1, dado2) if valor > 7}
```  
