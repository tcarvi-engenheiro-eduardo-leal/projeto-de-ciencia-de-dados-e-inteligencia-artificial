# zip(iterator1, iterator2, iterator3, ...)
- Gera uma combinação de elementos extraídos dos iteradores, considerando a mesma posição dos índices dos elementos.
- O objeto retornado é um iterador de tuples, com cada elemento sendo também uma tuple.
- Se os iteradores passados possuem tamanhos diferentes, o iterador de menor tamanho define o tamanho do objeto zip.
- zip(iterator1, iterator2, iterator3, ...)

```python
list1 = ["key1", "key2", "key3"]
list2 = [1, 2, 3]
list3 = ['A', 'B', 'C']
for item in zip(list1, list2, list3):
    print(item)
```  