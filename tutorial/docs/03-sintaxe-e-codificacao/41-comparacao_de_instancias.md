# Comparação de Instâncias  

## Comparação com \_\_eq\_\_ e \_\_lt\_\_, sem biblioteca functools

### Implementação para comparação com `==` ou com `!=`:
1. Defina método `__eq__(self, qualquer_outro_nome)` na classe
  - Obrigatoriamente indique o parâmetro "self" pois haverá automaticamente chamada com parâmetro self=instancia.
2. Retorne True ou False devido comparações, no método `__eq__(self, qualquer_outro_nome)`
3. Compare instâncias desta classe com `==` ou com `!=`
  - **Não compare, com este design, a opção `<=` ou `>=`.** 
    - Estas comparações adicionais precisam da biblioteca `functools`.

### Implementação para comparação com `<` ou com `>`:
1. Defina método `__eq__(self, qualquer_outro_nome)` na classe
  - Obrigatoriamente indique o parâmetro "self" pois haverá automaticamente chamada com parâmetro self=instancia.
2. Retorne True ou False devido comparações, no método `__lt__(self, qualquer_outro_nome)`
3. Compare instâncias desta classe com `<` ou com `>`
  - **Não compare, com este design, a opção `<=` ou `>=`.** 
    - Estas comparações adicionais precisam da biblioteca `functools`.

```python
class Conta:

    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0

    def deposita(self, valor):
        self._saldo += valor

    def __eq__(self, outro):
        if type(outro) != Conta:
            return False
        return self._codigo == outro._codigo and self._saldo == outro._saldo

    def __lt__(self, outro):
        return self._saldo < outro._saldo

    def __str__(self):
        return "[>>Codigo {} Saldo {}<<]".format(self._codigo, self._saldo)
```  

## Exemplo de comparações
```python  
# 
# Comparação de __eq__ e __lq__
#   devido implementação destes métodos,
# Sem a necessidade de bibliotecas especializadas.
# Mas não pode comparar <= e >=.
#   <= e >= exigem união do processamento mediante biblioteca functools
#
class Conta:

    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0

    def deposita(self, valor):
        self._saldo += valor

    def __eq__(self, outro):
        if type(outro) != Conta:
            return False
        return self._saldo == outro._saldo and self._codigo == outro._codigo

    def __lt__(self, outro):
        return self._saldo < outro._saldo

    def __str__(self):
        return "[>>Codigo {} Saldo {}<<]".format(self._codigo, self._saldo)
# Testes:
conta1 = Conta(36)
conta2 = Conta(37)
conta3 = Conta(38)
lista_de_contas = [conta1, conta2]
for conta in lista_de_contas:
    print(conta == conta1) # False
    print(conta != conta1) # True
print(conta1 < conta2) # False pois saldo de ambas é 0
print(conta1 > conta2) # False pois saldo de ambas é 0
conta1.deposita(100)
conta2.deposita(200)
conta3.deposita(200)
print(conta1 < conta2) # True
print(conta1 > conta2) # False
for conta in sorted(lista_de_contas):
    # Ordenação funciona devido implementação de __eq__ e __lt__
    print(conta)
```  

```python
# 
# Comparação usando valor retornado por função externa
#     que processa campo de objeto Conta.
#
def extrai_saldo(conta):
  return conta._saldo
for conta in sorted(contas, key=extrai_saldo):
  print(conta)
```  
  
```python
# 
# Comparação com attrgetter que consulta,
#     em seu processo interno, campo interno privado.
#
from operator import attrgetter

for conta in sorted(contas, key=attrgetter("_saldo")):
  print(conta)
```  

## Comparação completa, com biblioteca functools

### Implementação para comparação completa, inclusive com `>=` e `<=`:
1. from functools import total_ordering
2. Indique, na definição do método, o decorator @total_ordering
3. Defina método __eq__(self, qualquer_outro_nome) na classe
  - Obrigatoriamente indique o parâmetro "self"
  - Haverá automaticamente chamada com parâmetro self=instancia
4. Defina método __lt__(self, qualquer_outro_nome) na classe
  - Obrigatoriamente indique o parâmetro "self"
  - Haverá automaticamente chamada com parâmetro self=instancia3. Compare instâncias desta classe com `<` ou com `>`
5. Retorne True ou False devido comparações nestes 2 métodos
6. Compare instâncias com `>=` e `<=`:

```python  
# Necessidade de importação de total_ordering
#   da biblioteca functools
from functools import total_ordering

# Necessidade de uso de decorator
@total_ordering
class ContaSalario:
  
  def __init__(self, codigo):
    self._codigo = codigo
    self._saldo = 0

  # Primeira das 2 implementações necessárias
  def __eq__(self, outro):
    if type(outro) != ContaSalario:
      return False
    
    return self._codigo == outro._codigo and self._saldo == outro._saldo
  
  # Segunda das 2 implementações necessárias
  def __lt__(self, outro):
    if self._saldo != outro._saldo:
      return self._saldo < outro._saldo
    
    return self._codigo < outro._codigo
  
  def deposita(self, valor):
    self._saldo += valor
    
  def __str__(self):
    return "[>>Codigo {} Saldo {}<<]".format(self._codigo, self._saldo)
```  
  
```python
conta_do_guilherme = ContaSalario(1700)
conta_do_guilherme.deposita(500)
conta_da_daniela = ContaSalario(3)
conta_da_daniela.deposita(1000)
conta_do_paulo = ContaSalario(133)
conta_do_paulo.deposita(500)
# A comparação conjunta de __eq__ e __lt__
#   exige biblioteca incluída na classe acima.
conta_do_guilherme <= conta_da_daniela
conta_do_guilherme <= conta_do_paulo
conta_do_guilherme >= conta_da_daniela
conta_do_guilherme >= conta_do_paulo
```  
