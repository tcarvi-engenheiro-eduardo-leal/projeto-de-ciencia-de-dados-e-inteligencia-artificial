# Bitwise Operations on ints

- Usar apenas com números inteiros.
- O resultado considera: `two’s complement with an infinite number of sign bits`.
- Prioridade na execução:
    - Menor do que operações numéricas
    - Maior do que comparações
- O operador "unary" chamado de `inverted` ~ tem a mesma prioridade de execução que outros opedores numéridos do tipo "unary" como "+" ou "-".
- `x | y` (***bitwise or*** of x and y)
- `x ^ y` (***bitwise exclusive or*** of x and y)
- `x &  y` (***bitwise and*** of x and y)
- `x << n` (x ***shifted left by*** n ***bits***)
    - A left shift by n bits is equivalent to multiplication by pow(2, n).
- `x >> n` (x ***shifted right by*** n ***bits***)
    - A right shift by n bits is equivalent to floor division by pow(2, n).
- `~x` (the bits of x ***inverted***)
