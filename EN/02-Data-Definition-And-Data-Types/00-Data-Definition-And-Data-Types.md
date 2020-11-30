[slide]

# Data Types

In this lesson, you will learn about MySQL data types and how to use them effectively in designing databases in MySQL.

There are several data types in MySQL:

- **Numeric**
- **String**
- **Date**

Let's start with **Numeric** data type:

The important thing you should know about **Numeric** data types is that they have a **range**!

Depending on the range they can be **Signed** and **Unsigned** except for the **BIT** type:

Here is an example for Signed and Unsigned **INT**:

`Signed`: Represents numbers both in the positive and negative range.

(min value: **-2147483648**, max value: **2147483647**)

`Unsigned`: Represents numbers only in the positive range.

(min value: **0**, max value: **4294967295**)

The following table shows the summary of numeric types in MySQL:

[image assetsSrc="Data-Definition-And-Data-Types.png" /]

| **Numeric Types** | **Description**                          | **Spec**                                             |
| ----------------- | ---------------------------------------- | ---------------------------------------------------- |
| TINYINT           | A very small integer                     | integer(-128 to 127)                                 |
| SMALLINT          | A small integer                          | integer(-32768 to 32767)                             |
| MEDIUMINT         | A medium-sized integer                   | integer(-8388608 to 8388607)                         |
| INT               | A standard integer                       | integer(-2147483648 to 2147483647                    |
| BIGINT            | A large integer                          | integer(-9223372036854775808 to 9223372036854775807) |
| DECIMAL           | A fixed-point number                     | double stored as string                              |
| FLOAT             | A single-precision floating point number | decimal(precision to 23 digits)                      |
| DOUBLE            | A double-precision floating point number | decimal(24 to 53 digits)                             |

```Java
INT[(M)][UNSIGNED];  // Where "M" is the count of digits stored for the value
```

```Java
DOUBLE[(M, D)][UNSIGNED];  //  "M" is the count of digits stored for the value.
                           //  "D" is the count of digits after floating point.
                           //  Example: DOUBLE[5, 2] - 999.99
```

Next is **String** data type:

The following table shows the summary of string types in MySQL:

[image assetsSrc="Data-Definition-And-Data-Types(1).png" /]

```Java
CHAR[(M)]; // Example: CHAR(30)
```

```Java
VARCHAR[(M)]; // Example: VARCHAR(250)
```

String column definitions include attributes that specify the **CHARACTER SET** or **COLLATION**.

A character set is a set of symbols and encodings. A collation is a set of rules for comparing characters in a character set.

For example, a subset of a character set could consist of the letters A , B and C . A default collation could define these as appearing in an ascending order of A, B, C.

CHARACTER SET(Encoding) - "Where Encoding coud be for example 'utf8', 'ucs2' etc."

CHARACTER COLLATION - "latin1_general_cs, Traditional_Spanish_ci_ai etc."

Character Set and collation can be defined at the database, table or column level.

`CHAR` vs `VARCHAR`

[image assetsSrc="Data-Definition-And-Data-Types(2).png" /]

Finally **Date** data type:

[image assetsSrc="Data-Definition-And-Data-Types(3).png" /]

MySQL retrievs values for a given date type in a **standard output format**

Example: 'YYYY-MM-DD' or 'YY-MM-DD'

[/slide]
