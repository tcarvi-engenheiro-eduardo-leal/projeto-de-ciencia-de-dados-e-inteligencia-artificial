# Bitwise Operations on ints

- Bitwise operations only make sense for integers.
- The result of bitwise operations is calculated as though carried out in two’s complement with an infinite number of sign bits.
- The priorities of the binary bitwise operations are all lower than the numeric operations and higher than the comparisons.
- The unary operation ~ has the same priority as the other unary numeric operations (+ and -).
- `x | y` (***bitwise or*** of x and y)
- `x ^ y` (***bitwise exclusive or*** of x and y)
- `x &  y` (***bitwise and*** of x and y)
- `x << n` (x ***shifted left by*** n ***bits***)
    - A left shift by n bits is equivalent to multiplication by pow(2, n).
- `x >> n` (x ***shifted right by*** n ***bits***)
    - A right shift by n bits is equivalent to floor division by pow(2, n).
- `~x` (the bits of x ***inverted***)