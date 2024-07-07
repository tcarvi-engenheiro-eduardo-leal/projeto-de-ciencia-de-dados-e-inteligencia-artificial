# Operations on numerical types

```python
# Addition
result = x + y

# Subtraction
result = x - y

# Multiplication
result = x * y

# Division (divisão com resultado no conjunto de Reais)
result = x / y

# integer division (floored quotient) (divisão com resultado inteiro)
result = x // y
# For operands of type int, the result has type int.
# For operands of type float, the result has type float.
# The result is always rounded towards minus infinity: 1//2 is 0, (-1)//2 is -1, 1//(-2) is -1, and (-1)//(-2) is 0.

# Remainder of x divided by y
# Módulo operator %
result = x % y

# x negated
result = -x

# x unchanged
result = +x

# absolute value or magnitude of x
result = abs(x)

# int value
result = int(x)

# float value
result = float(x)

# complex value
# A complex number with real part re, imaginary part im. im defaults to zero
result = complex(re, im)

# Conjugate of complex number
result_conjugate = result.conjugate()

# Geração de par (x // y, x % y)
result = divmod(x, y) # (x // y, x % y)

# Exponenciação
# Operação de elevar base a um expoente
result = pow(x, y) # x to the power y
result = x ** y    # x to the power y


- Python fully supports mixed arithmetic: when a binary arithmetic operator has operands of different numeric types, the operand with the “narrower” type is widened to that of the other, where integer is narrower than floating point, which is narrower than complex. A comparison between numbers of different types behaves as though the exact values of those numbers were being compared.
- Conversion from float to int truncates, discarding the fractional part.
- Python defines pow(0, 0) and 0 ** 0 to be 1, as is common for programming languages.

- Additional Methods on Integer Types:
    - `int.bit_length()`
        - `(-37).bit_length()`
    - `int.bit_count()`
        - `(-37).bit_count()`
    - `int.to_bytes(length=1, byteorder='big', *, signed=False)`
        - `(-37).to_bytes()`
    - **classmethod** `int.from_bytes(bytes, byteorder='big', *, signed=False)`
        - `int.from_bytes(b'\x00\x10', byteorder='big')`
    - `int.as_integer_ratio()`
    - `int.is_integer()`
```
