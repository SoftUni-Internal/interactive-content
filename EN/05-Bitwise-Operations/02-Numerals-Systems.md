# Numerals Systems

[slide]
# Video

[vimeo-video startTimeInSeconds="426" endTimeInSeconds="1837"]
[stream language="EN" videoId="426199411" default /]
[stream language="RO" videoId="426200319"  /]
[/video-vimeo]

[/slide]

[slide]
# Numerals Systems

**Numeral systems** are the ones used by humans and computers to **write sequences using digits**:

- The **decimal system** that is used every day.

- The **binary system** which is native to computer systems used to represent numbers and data with bits.

- The **hexadecimal numeral system** and its power to write large binary **numbers** in just a few digits. 

For example: 

| Decimal | Binary | Hexadecimal |
| ------- | ------ | ----------- |
| 30 | 111110 | 1E |
| 45 | 101101 | 2D |
| 60 | 111100 | 3C |

It is possible to convert numbers **from a given numeral system to another**.

In computer science-specific numeral systems are of big importance: **the positional numeral systems**. In the positional numeral systems, the **value** of each digit depends on its **position**. In the **integer numbers**, the digits on the left have a bigger weight than the digits, staying on the right.

Positional numeral systems use the so-called **base**, which specifies how many digits are used to represent a number. 

[/slide]


[slide]

# Decimal System

The **decimal system** uses **10 digits**: 1, 2, 3, 4, 5, 6, 7, 8, 9 and 0. 

Each **position** in a decimal number corresponds to a certain **power of 10**. 

For example:

``` java
401 = 4 * 10 ^ 2 + 0 * 10 ^ 1 + 1 * 10 ^ 0 = 
    = 4 * 100 + 0 * 10 + 1 * 1 = 
    = 400 + 0 + 1 =
    = 401
```

The **conversion from decimal to binary system** is done by **dividing** the input number **to the base 2** until **0 is reached** and take the **obtained reminders in reversed order**.

For example:
```java
11 / 2 = 5 (1)  // last digit
5 / 2 = 2 (1)   // previous digit
2 / 2 = 1 (0)   // previous digit
1 / 2 = 0 (1)   // first digit
Result: 1011
```


The **conversion from decimal to hexadecimal system** is done by continuously **dividing by 16** and taking the **reminders** in **reversed order until zero**. 

For example:
```java
500 / 16 = 31 (4)
31 / 16 = 1 (F)
1 / 16 = 0 (1)
Result: 0x1F4
```

[/slide]


[slide]

# Binary system

The binary numeral system is **fundamental for computer systems**. The **binary system** uses only **two digits**: `1` and `0`.

Binary numbers are sequences of `0` and `1`. 

For example from decimal to binary `5 == 101`. Binary numbers are denoted with a small suffix **b** at the end.

Each **position** in a binary number corresponds to a different **power of 2**, starting from `2 ^ 0` for the rightmost position, continuing with `2 ^ 1` for the position on its left, then `2 ^ 2`, etc.

Like in the decimal system, the **rightmost digit** has the **smallest weight** and the **leftmost position** has the **biggest weight**.

To convert the **binary numeral** to **decimal number** follow the definition above, multiply each digit by its **corresponding magnitude** (or weight), which is a **power of 2**, starting from `2 ^ 0` for the rightmost number.

For example:

``` java
101 = 1 * 2 ^ 2 + 0 * 2 ^ 1 + 1 * 2 ^ 0 = 
    = 4 + 0 + 1 = 
    = 5 
```

```java
1010 = 1 * 2 ^ 3 + 0 * 2 ^ 2 + 1 * 2 ^ 1 + 0 * 2 ^ 0 = 
     = 8 + 0 + 2 + 0 =
     = 10 
```

```java
1011 = 1 * 2 ^ 3 + 0 * 2 ^ 2 + 1 * 2 ^ 1 + 1 * 2 ^ 0 = 
     = 1 * 8 + 0 * 4 + 1 * 2 + 1 * 1 =
     = 8 + 0 + 2 + 1 =
     = 11
```

**Binary and hex numbers** can be **easily mapped** one to another, because **4 binary digits** directly correspond to **1 hex digit**. Following this property, the **conversion from binary to hexadecimal** (and back) is **straightforward**.

For example, the binary number `1010 0010 1110 0011 1111` can be converted to hex by splitting the number into groups of 4 bits, like it is shown, and taking the **hex digit for each 4 binary digits**: 
```java
1010 0010 1110 0011 1111 = A2E3F
1010 = 10 = A
0010 = 2 = 2
1110 = 14 = E
0011 = 3 = 3
1111 = 15 = F
```

[/slide]


[slide]

# Hexadecimal System

**Hexadecimal numbers** (also known as hex numbers) are widely used in computer science. Hex numbers use **base 16** and are represented by a sequence of hex digits. 

The **hexadecimal system** uses **16 digits**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. Note that after `9` the next digit is `A`, which has a **decimal value of 10**. The next hex digits after `A` are `B`, `C`, `D`, `E` and `F` and they have decimal values of `11`, `12`, `13`, `14` and `15`. These decimal values are used when we convert a hex number to a decimal value.

In computer science, the hex numbers are usually **prefixed with** `0x`, for example: `0xFF`.

Each position represents a **power of 16**. The calculations are **identical** with the **decimal** and the **binary** numeral systems, but with the **base 16 instead of 10 or 2**.

For example:
``` java
0xB7F6 = B * 16 ^ 3 + 7 * 16 ^ 2 + F * 16 ^ 1 + 6 * 16 ^ 0 =
       = 11 * 4096 + 7 * 256 + 15 * 16 + 6 * 1 =
       = 45056 + 1792 + 240 + 6 =
       = 47094
```


Hex numbers are important in computer science because they have a flexible property: **4 binary** digits correspond to **1 hex** digit. Thus **8-bit** number can be represented by **2 hex** digits.


To convert **hex** number to **decimal** use the **same algorithms** used for converting binary numbers to the decimal system. To convert a hex number to decimal following the definition of hex numbers **multiply each digit** to its weight (which is the **power of 16**) and **sum the weighted digits**.

For example:
```java
0x1F4 = 1 * 16 ^ 2 + 15 * 16 ^ 1 + 4 * 16 ^ 0 = 
      = 1 * 256 + 15 * 16 + 4 * 1 =
      = 256 + 240 + 4 =
      = 500
```

**Binary and hex numbers** can be **easily mapped** one to another, because **4 binary digits** directly correspond to **1 hex digit**. Following this property, the **conversion from binary to hexadecimal** (and back) is **straightforward**.

For example the hex number `A2E3F` can be converted to binary by taking the **4 binary digits for each hex digit** like this:
```java
A2E3F = 1010 0010 1110 0011 1111
A = 1010
2 = 0010
E = 1110
3 = 0011
F = 1111
```

In programming hex numbers are used for memory addresses, also to represent 8-bit, 16-bit, and 32-bit values and in many situations related to bit sequences and bytes.

[/slide]
