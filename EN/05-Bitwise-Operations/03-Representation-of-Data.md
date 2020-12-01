# Representation of Data

[slide]
# Video

[vimeo-video startTimeInSeconds="1840" endTimeInSeconds="3143"]
[stream language="EN" videoId="426199411" default /]
[stream language="RO" videoId="426200319"  /]
[/video-vimeo]

[/slide]

[slide]
# Representation of Integers

**Integer numbers** are represented in the computer memory as **sequences of bits**: 8-bits, 16-bits, 24-bits, 32-bits, 64-bits and others, but always a multiple of 8 (one byte).

Integers can be **signed** or **unsigned**. 

- **Signed** integers can hold **positive and negative values**. They tend to be used more often. For example, in the real world the daily temperature can be positive and negative, or zero. **Signed** integers in computer systems use their **leftmost bit** as a sign, where bit value `0` means **positive** number (or zero number) and `1` means **negative** number. This bit is called also `MSB` (most significant bit). 

- **Unsigned** integers can hold **only positive values**. Some values in the real world can only be positive, e.g. the numbers of students enrolled for a class. 

For example the **most-significant bit** (the bit at position 7) in given 8-bit integer number can hold `0` for **non-negative values** and `1` for **negative values**.

``` java
0XXXXXXX > 0  // 00010010b = 18
00000000 = 0 
1YYYYYYY < 0  // 10010010b = -110
```

**Positive 8-bit integers** have a **leading zero**, followed by **7 other bits**. Their format matches the pattern `0XXXXXXX` (positive sign + 7 significant bits). Their value is the decimal value of their significant bits (the last 7 bits).

**Negative 8-bit integers** have a **leading one**, followed by **7 other bits**. Their format matches the pattern `1YYYYYYY` (negative sign + 7 significant bits). Their value is -128 (which is minus 2 to the power of 7) plus the decimal value of their significant bits.

``` java
10010010b = -27 + 0010010 =
          = -128 + 18 =
          = -110
```

## Largest and Smallest Signed Integers

Examples:

- The largest signed 8-bit integer:
```java
127 = (2 ^ 7 - 1) = 01111111
```
- The smallest negative 8-bit integer:
```java
-128 = -(2 ^ 7) = 10000000
```
- The largest signed 32-bit integer:
``` java
2147483647 = (231 – 1) = 0111…1111
```
- The smallest negative 32-bit integer:
``` java
-2147483648 = -(231) = 1000…0000
```

The **8-bit signed** integers range is **from -128 to 127**. This is the `sbyte` type in C# and the `byte` type in Java.

The **8-bit unsigned** integers range is **from 0 to 255**. This is the `byte` type in C#.

The **16-bit signed** integers range is **from -32768 to 32767**. This is the `short` type in Java, C#.

The **16-bit unsigned** integers range is **from 0 to 65536**. This is the `ushort` type in C#.

The **32-bit signed** integers range is **from -2 ^ 31 … 2 ^ 31-1** (which is from minus 2 billions to 2 billions roughly). This is the `int` type in C#, Java, and most other languages. 

This **32-bit signed** integer data type is the **most often used** type in computer programming.

Most programming languages also have **64-bit signed and unsigned** integers, which behave just like the other **integer types**, but have **significantly larger ranges**.

[/slide]

[slide]
# Representation of Real Numbers

Numbers like `1.5` or `0.25`, non-integer numbers, are called "real numbers". Computers use the floating-point number format, defined by the **IEEE 754 technical standard** for floating-point arithmetic with real numbers. This is the **standard** which is implemented by the **computer hardware**: 

- microprocessors

- smartphones 

- WiFi routers

- and other devices. 

This **IEEE-754 standard** represents how computers represent real numbers.

The standard defines:

- **Arithmetic formats** – representations of the binary and decimal floating-point data as a sequence of bits and encodings in the memory.

- **Rounding rules** -  representation of floating-point numbers. For example, if `1` is divided by `3`, the result is an infinite decimal fraction, which is rounded before storing in the memory.

- **Operations** – arithmetic and other operations over a floating-point number, like sum, difference, product and quotient of two numbers.

- **Special numbers** – such as infinity, negative infinity, and "NaN" (not a number). These special values behave especially, defined by the standard. For example, infinity plus one is equal to infinity.


**Floating-point numbers** are stored as a **sequence of bits**, which represent 3 separate parts: 

- **Sign bit** - specifies whether the number is positive or negative

- **Exponent** - holds the magnitude of the number, for example, 220 or 2-3. It is a multiplier for the mantissa, used to represent very big numbers and numbers very close to zero.

- **Mantissa** - holds the meaningful value of the number, it is so-called "precision". Bigger mantissa means higher precision.
 
For example this 32-bits represent the real number value:
`1 10000011 01010010100000000000000 == -21.15625`

The first part is the sign - `1`.
The second part is the exponent - `10000011`.
And the third part is the mantissa - `01010010100000000000000`.

There is a **floating-point numbers errors** in calculations and **precision**. 
The main reason why calculations with floating-point numbers sometimes are incorrect is that some numbers (like `0.3`) **cannot be represented in the above format without rounding** (as a sum of negative powers of 2).


[/slide]

[slide]
# Representation of Text

Computers represent **text characters** as **unsigned integer numbers**, which means that **letters** are **sequences of bits**, just like the numbers. 

In computers, the text characters are the letters from different alphabets, the digits, the punctuation chars, and other textual symbols in a text document. 

## ASCII Standard

The **ASCII standard** represent text characters as **8-bit integers**. 

It is one of the oldest standards in the computer industry, which defines **mappings between symbols and unsigned integers**. 

**ASCII** comes from the abbreviation "American Standard Code for Information Interchange" and includes **only the English alphabet,  digits, many punctuation symbols, and some special characters**. 

It simply assigns a **unique number for each letter** and thus allows letters to be **encoded as numbers**.

The **ASCII standard** defines the so-called **ASCII code** for **127 chars**, described in the **ASCII table**. 

For example:
```java
'A' == 65 
'B' == 66
'+' == 43
```

## Unicode Standard

The **Unicode standard** represents the rest symbols (see unicode.org). 

This standard represents more than **100,000 text characters as 16-bit integers**. 

Unlike ASCII it uses **more bits per character** and therefore it can represent texts in many languages and alphabets, like Latin, Cyrillic, Arabic, Chinese, Greek, Korean, Japanese, etc.

Unicode is **universal by design**. It covers **more than 1 million** letters, special symbols, and glyphs and uses **internal encoding schemes** to overcome the range of the 16-bit integers (which can store 65536 different values). 

Unicode is developed over time and with each new version, new characters are added, like the emoji symbols.

For example:
- The Latin letter `A` has Unicode number `65`.

- The Cyrillic letter `Щ` has Unicode number `1097`.

- The **"guitar" emoji** symbol has Unicode number `127928`.

Unicode texts can be stored in **text files** using **different encodings** (known also as charsets).

**Character encodings** define how characters are represented as **sequences of bytes**.

**Simple encodings** (like ASCII) use **one byte** (which is 8-bits) per character. More **complex encodings** use **one or several bytes** per character. 

The **most frequent characters**, such as the **Latin letters** and the **digits**, are stored using only **1 byte**, more rear alphabets, such as the **Cyrillic letters**, are stored in **2 bytes**, other alphabets and symbols take **3 or 4 bytes**. 

The **UTF-16** encoding use **2 bytes** for most Unicode characters and **4 bytes** for the others. The **UTF-8** encoding uses **1, 2, 3 or 4 bytes** for each character.

The **UTF-8 standard** is used by most of the Web sites on the Internet to represent the text data in these sites. UTF-8 is more efficient for storage and transportation, while UTF-16 is more efficient for internal character processing.

This is the reason why C#, Java, JavaScript, and Python use UTF-16 to store and process text data in the computer memory, but HTML, CSS, and HTTP use UTF-8 (in most cases) to represent and transport Web content between the Web server and the Web browser.


## Sequences of Characters - String

**ASCII** and **Unicode** define how a **single character** can be represented **by an integer number**. In programming, the sequence of characters (text data) is called `String`.

`Strings` are arrays of characters, typically represented like this: 4 bytes length, followed by 2 bytes for each character.

For example:
The string `Hello` takes **14 bytes** in the computer memory (for the most platforms and programming languages). These 14 bytes are calculated as follows: **4 bytes (length) plus 5 chars by 2 bytes each**. 

In most languages and platforms **strings** hold their **size as prefix**. For example, in C#, Java, JavaScript, and Python strings hold their **length at the start**.

Aside from the string length, the **characters** in the string can be **single-byte or multi-byte**.
The **characters** in the strings in C#, Java, JavaScript and Python use the **16-bit** encoding `UTF-16`.


[/slide]