# Polimorfismo
  
## Implementação:
1. Indique o nome da ClassePai como parâmetro, na definição da ClasseFilho
    - Ex.:
        - class ContaPoupanca(Conta)
        - class ContaCorrente(Conta)
        - class ContaSalario(Conta)
2. Diferencie as classes filhas definindo, para cada, um método que tenha mesmo nome/assinatura mas comportamentos diferentes.

```python
class Conta:

    def __init__(self, codigo):
        self._codigo = codigo
        self._outra_variavel = 0

    def deposita(self, valor):
        self._saldo += valor

    def __str__(self):
        return "{} and {}".format(self._codigo, self._outra_variárea)
```  
  
```python
class ContaCorrente(Conta):

    def passa_o_mes(self)
        self._saldo -= 2
```  
  
```python
class ContaPoupanca(Conta):

    def passa_o_mes(self)
        self._saldo -= 3
```  

## Exemplo de Polimorfismo
```python  
conta1 = ContaCorrente()
conta2 = ContaPoupanca()
lista_de_contas = [conta1, conta2]
for conta in lista_de_contas:
    # Tanto ContaCorrente quanto ContaPoupanca implementa passa_o_mes.
    # Mas o comportamento de cada implementação é diferente.
    # Poly formas diferentes para mesmo método.
    conta.passa_o_mes() # polimorfismo
    print(conta)
``` 
