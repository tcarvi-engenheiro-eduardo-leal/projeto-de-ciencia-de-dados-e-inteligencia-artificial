# Extração de dados armazenados em listas

## Extração com list comprehension, range() e zip()
- Extração de list de tuples, a partir de 2 listas quisquer, usando:
    - coceito de list e tuples
    - list comprehension
    - range(len(input))
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [(dado1[i], dado2[i]) for i in range(len(dado1))]
```

- Com list comprehension, range() e condition
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [(dado1[i], dado2[i]) for i in range(len(dado1)) if dado2[i] > 7]
```

- Com list comprehension e zip()
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [{key: valor} for key, valor in zip(dado1, dado2)]
```

- Com list comprehension, zip() e condition
```python
dado1 = ["key1", "key2", "key3"]
dado2 = [4, 8, 12]
resultado_desejado = [{key: valor} for key, valor in zip(dado1, dado2) if valor > 7]
```  

## Extração com dict comprehension, range() e zip()
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
