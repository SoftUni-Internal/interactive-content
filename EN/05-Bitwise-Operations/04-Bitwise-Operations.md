# Bitwise Operations

[slide]
# Video

[vimeo-video startTimeInSeconds="3144" endTimeInSeconds="4256"]
[stream language="EN" videoId="426199411" default /]
[stream language="RO" videoId="426200319"  /]
[/video-vimeo]

[/slide]

[slide]
# Bitwise Operations

**Combinations of bitwise operations** can manipulate the **bits in integer** numbers. 

Processing bits is **important for many fields** of computer science, information technologies and software systems, like networking protocols, data storage and file systems, binary file formats, memory management, data compression, data encryption, video streaming, Internet of things (IoT) systems, low-level programming, computer graphics and many others.

Examples where bitwise operations are important:

- In **networking protocols** bit-level processing is often used. Many devices communicate using **bit-level protocols**. For example, the **SYN flag** in the **TCP protocol** header is the **bit #1** from the **14th byte** in the **TCP packets**. The **TCP** (Transmission Control Protocol) is the **main protocol** used to **transmit data** when you open a Web site or send an email, so it is used very much in practice. 

- **Тhe Web browsers** use bitwise operations to **open to a Web site**.

- **Many binary file formats** use bits to **save space**. For example, PNG images (the Portable Network Graphics image format) use 3 bits to specify the colour format used (8-bit colour, 24-bit colour, 32-bit colour with transparency).

- **Data compression algorithms** **replace** bit or byte sequences with **shorter bit sequences**. For example, the "DEFLATE" algorithm, used to **compress data in the ZIP files**, finds the **most often sequences** and **replaces them with shorter sequences**. This is done using **heavy bit-level processing** with bitwise operations.

[/slide]


[slide]

# Bitwise Operators

**Bitwise operators** and their application in programming: 

- the bitwise `&` (and) 

- the bitwise `|` (or) 

- the bitwise `^` (exclusive or) 

- the bitwise `~` (not operators). 

It is possible to read and write bits from a given integer number using **bit masks** and **bitwise operations**.


**Bitwise operators** work with the **binary representations** of the numbers, applying bit by bit calculations. 

For example, it is possible to apply a **bitwise operation on two 8-bit numbers**, the **result is a new 8 bits**.

A simple bitwise operator over a single argument is the **"tilde" operator**  `~` – the bitwise logical NOT (also called negation).
The **operator "tilde"** turns all `0` to `1` and all `1` to `0`, like the "exclamation mark" operator `!` for the **Boolean expressions** but it works **bit by bit**. 

For example: the binary number `1 0 0`, its negation `~ 1 0 0` is `0 1 1`.

The operators `|`, `&` and `^` behave like the `||`, `&&` and `^` for **Boolean expressions** but they work **bit by bit**.

The bitwise **OR** operator `|` returns `1` if **one of its input bits is 1**, otherwise returns `0`.

The bitwise **AND** operator `&` returns `1` if **both of its input bits are 1**, otherwise returns `0`.

The bitwise exclusive **OR (XOR)** operator `^` returns `1` if **one of its arguments is 1**, but **not both** at the same time, otherwise returns `0`.

The table below illustrates the work of the bitwise **OR** `|`, **AND** `&` and **XOR** `^` operators.

| Operator | \| | \| | \| | \| | & | & | & | & | ^ | ^ | ^ | ^ |
| -------- | ----- | ----- | ----- | ------ | ----- | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| Operand1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| Operand2 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |
|  Result  | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 |


For example:

- Bitwise **NOT** `~`

``` java
5   // 0101
~5  // 1010
```

- Bitwise **OR** `|`

``` java
5       // 0101
3       // 0011
5 | 3   // 0111
```

- Bitwise **AND** `&`

``` java
5       // 0101
3       // 0011
5 & 3   // 0001
```

- Bitwise **XOR** `^`

``` java
5       // 0101
3       // 0011
5 ^ 3   // 0110
```
[/slide]

[slide]

# Bit Shifts

**Bit shifts** are bitwise operations, where **bits inside a number** are moved (or shifted) **to the left or the right**.

During the **shifting operation**, the bits that fall at **invalid positions** are **lost** and the bits which come from **missing positions** are **replaced** by `0`.

- **Left shift** `<<` - moves the bits from `0` to `n` to the **left** into positions `1` to `n + 1`. The **leftmost** bit (at position `n` before the shifting) is **lost**. And the **rightmost** bit (at position `0` after shifting) takes a **value of** `0`. Shifting left a **decimal number** is equivalent to **multiplying by 2** (when the integer does not overflow). 

  - For example, 5 shifted left is 10.

- **Right shift** `>>` - moves the bits from `0` to `n` to the **right** into positions `-1` to `n - 1`. The **rightmost** bit (at position `0` before the shifting) is **lost**. And the **leftmost** bit (at position `n` after shifting) takes a **value of** `0`. Shifting right a **decimal number** is equivalent to **integer division by 2**. 

  - For example, 5 shifted right is 2.

**Bit shifting** can be applied for **8-bit, 16-bit, 32-bit, and 64-bit numbers**, as well as for numbers of **other sizes in bits**. The bit size of the number being shifted **defines the valid bit positions** and where the **bits get lost**.

Bits can be shifted by **more than 1 position**. 

  - For example 5, shifted left twice is 20 and 5 shifted right twice is 1.


[/slide]

[slide]
# Examples of Bit Operations

## Last Bit of Given Number

Get the **last bit** of given integer `n`.

The **last bit** of numbers defines their **parity** (odd or even). **Odd numbers** have `1` in their last bit. **Even numbers** have `0` in their last bit.

``` java
            //   7 6 5 4 3 2 1 `0`       - position of symbols
n = 125     //   0 1 1 1 1 1 0 `1`       - binary representation
mask = 1    // & 0 0 0 0 0 0 0 `1`       - bitmask of 1
n & mask    //   0 0 0 0 0 0 0 `1` = 1

lastBit = n & 1     // short formula
```


## Get Bit at Position

Extract the bit from the given position `p` in given integer `n`.

Shift to the right `p` times the input number `n`, the bit at position `p` will move to position `0`. It will be the last bit. In this example `125` shifted **5 times** to the **right** is `3`. Then get the value of the **last bit** by applying **bitwise AND 1**. In our example `3 AND 1` is `1`. The bit from **position 5** has value `1`.

The short formula for **extracting a bit** at position `p` from the number `n` is **bit equals** to `n >> p & 1`

``` java
            //   7 6 `5` 4 3 2 1 0       - position of symbols
n = 125     //   0 1 `1` 1 1 1 0 1       - binary representation
p = 5       //   5th position   
125 >> p    //   0 0 0 0 0 0 1 `1` = 3   - bitmask of 3
3 & 1       //   0 0 0 0 0 0 0 `1` = 1   - bitmask of 1

bit = (n >> p) & 1     // short formula
```


## Set Bit at Position

Assign a value for the bit at **given position** `p` in given integer `n`.

To clear the bit at position `p` (which means to assign `0` at this position) create a bitmask with all bits `1`, except the bit at position `p` (which is zero), **shifted left** `p` times. By applying the bitmask with the bitwise **AND** operator `&` and **removing** the bit at position `p`, while keeping **all other bits stay unchanged**.

To set the bit at position `p` (which means to assign `1` at this position) create a bitmask, holding `1` at position `p` with all other bits `0`. This is `1` **shifted left** `p` times. By applying the bitmask with the bitwise **OR** operator `|` and set to `1` the bit at position `p`, while keeping **all other bits unchanged**.

The last step is to assign a value `b` for the bit at position `p` in the given integer `n` using the short formula, that clears the bit `p` in `n` and if `b` is `1`, puts `1` at position `p` in `n`:
`n = n & ~(1 << p) | (b << p)`

``` java
// clear a bit (0) at position `p`
                    //   7 6 `5` 4 3 2 1 0       - position of symbols
p = 5               //   5th position   
n = 125             //   0 1 `1` 1 1 1 0 1       - binary representation
mask = ~(1 << p)    //   0 0 `0` 0 0 0 1 1 = 3   - bitmask of 3
result = n & mask   //   0 0 `0` 0 0 0 0 1 = 1   - bitmask of 1

// set a bit (1) at position `p`
                    //   7 6 `5` 4 3 2 1 0       - position of symbols
p = 5               //   5th position   
n = 125             //   0 1 `1` 1 1 1 0 1       - binary representation
mask = 1 << p       //   0 0 `0` 0 0 0 1 1 = 3   - bitmask of 3
result = n | mask   //   0 0 `0` 0 0 0 0 1 = 1   - bitmask of 1

// assign a bit `b` (0 or 1) at position `p`
n = n & ~(1 << p) | (b << p)    // short formula
```




[/slide]