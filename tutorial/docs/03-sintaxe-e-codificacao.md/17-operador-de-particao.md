# Operador de Partição

## Partição de tuple em nova tuple
```python
valores_tuple = (2, 4, 8, 6, 2, 4, 2, 8, 12)
print(valores_tuple[2:4]) ## Print elementos de index 2 e 3. Print (8,6)
print(valores_tuple[2:6]) ## Print elementos de index 2,3,4 e 5. Print (8,6,2,4)
print(valores_tuple[:6]) ## Print elementos de index 0,1,2,3,4 e 5. Print (2,4,8,6,2,4)
print(valores_tuple[6:]) ## Print elementos de index 6,7 e 8. Print (2,8,12)
```

## Partição de list em nova list
```python
valores_list = (2, 4, 8, 6, 2, 4, 2, 8, 12)
print(valores_list[2:4]) ## Print elementos de index 2 e 3. Print [8,6]
print(valores_list[2:6]) ## Print elementos de index 2,3,4 e 5. Print [8,6,2,4]
print(valores_list[:6]) ## Print elementos de index 0,1,2,3,4 e 5. Print [2,4,8,6,2,4]
print(valores_list[6:]) ## Print elementos de index 6,7 e 8. Print [2,8,12]