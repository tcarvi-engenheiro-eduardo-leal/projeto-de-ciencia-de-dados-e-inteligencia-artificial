# Exception
- 2 tipos de erros:
    - Erros de sintaxe
    - Exceptions

## SyntaxError
- O erro é identificado pelo parser (analisador).

## NameError
- Erro ocorre quando tentamos utilizar um nome de algum elemento/nome inexistente no código.

## IndexError
- O erro ocorre quando tentamos acessar um index inexistente.

## TypeError
- O erro ocorre quando um operador ou função são aplicados a um objeto cujo tipo é inapropriado.

## KeyError
- O erro ocorre quando tentamos acessar uma chave que não está em um dicionário.

## ValueError
- O erro ocorre quando um argumento passado para uma função ou método não é do tipo esperado ou tem um valor inválido.

## Warning
- O erro ocorre para casos que podem ser ignorados.


## Tratamento de exceptions:
```python
try:
    # codigo
except:
    # tratamento de exception
else:
    # Código executado se não houver exception
```  

```python
try:
    # codigo
except KeyError:
    # tratamento de exception
else:
    # Código executado se não houver exception
finally:
    # Código sempre executado
```  

```python
try:
    # codigo
except KeyError:
    # tratamento de exception
except ValueError:
    # tratamento de exception
finally:
    # Código sempre executado
```  

## Lançamento de exceptions:
```python
raise KeyError("Descrição da sua excessão de KeyError")
```  
 