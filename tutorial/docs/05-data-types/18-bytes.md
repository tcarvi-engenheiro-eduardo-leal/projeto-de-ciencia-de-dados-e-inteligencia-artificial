# bytes
- Bytes objects are immutable sequences of single bytes.
- Since many major binary protocols are based on the ASCII text encoding, bytes objects offer several methods that are only valid when working with ASCII compatible data and are closely related to string objects in a variety of other ways.
- The core built-in types for manipulating binary data are bytes and bytearray. They are supported by memoryview which uses the buffer protocol to access the memory of other binary objects without needing to make a copy.
- The array module supports efficient storage of basic data types like 32-bit integers and IEEE754 double-precision floating values.
- Constructor:
    - `bytes_variable_name0 = bytes()`
    - `bytes_variable_name1 = bytes([source[, encoding[, errors]]])`
- The syntax for bytes literals is largely the same as that for string literals, except that a b prefix is added:
    - Single quotes: b'still allows embedded "double" quotes'
    - Double quotes: b"still allows embedded 'single' quotes"
    - Triple quoted: b'''3 single quotes''', b"""3 double quotes"""
    - Only ASCII characters are permitted in bytes literals (regardless of the declared source code encoding). Any binary values over 127 must be entered into bytes literals using the appropriate escape sequence.
    - As with string literals, bytes literals may also use a r prefix to disable processing of escape sequences.
- While bytes literals and representations are based on ASCII text, bytes objects actually behave like immutable sequences of integers, with each value in the sequence restricted such that 0 `<=` x < 256 (attempts to violate this restriction will trigger ValueError). This is done deliberately to emphasise that while many binary formats include ASCII based elements and can be usefully manipulated with some text-oriented algorithms, this is not generally the case for arbitrary binary data (blindly applying text processing algorithms to binary data formats that are not ASCII compatible will usually lead to data corruption).
- In addition to the literal forms, bytes objects can be created in a number of other ways:
    - A zero-filled bytes object of a specified length: 
        - `bytes_variable_name3 = bytes(10)`
    - From an iterable of integers:
        - `bytes_variable_name3 = bytes(range(20))`
    - Copying existing binary data via the buffer protocol:
        - `bytes_variable_name3 = bytes(obj)`
- Since bytes objects are sequences of integers (akin to a tuple), for a bytes object b, b[0] will be an integer, while b[0:1] will be a bytes object of length 1. (This contrasts with text strings, where both indexing and slicing will produce a string of length 1)
- The representation of bytes objects uses the literal format (b'...') since it is often more useful than e.g. bytes([46, 46, 46]). You can always convert a bytes object into a list of integers using list(b).