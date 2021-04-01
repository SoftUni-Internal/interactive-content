# Data Types in MySQL

[slide hideTitle]

# Data Types

In this lesson, you will learn about the data types in MySQL and how to use them effectively in designing databases.

There are several data types in MySQL:

- **Numeric**
- **String**
- **Date**

[/slide]

[slide hideTitle]

# Numeric Data Types

The **Numeric** data types have a specific **range**

Depending on the range, they can be **Signed** and **Unsigned** except for the **BIT** data type.

An example for Signed and Unsigned **INT**:

`Signed`: Represents numbers both in the positive and negative range

(min value: **-2147483648**, max value: **2147483647**)

`Unsigned`: Represents numbers only in the positive range

(min value: **0**, max value: **4294967295**)

The following table shows the summary of numeric types in MySQL:

| **Numeric Types** | **Description**                          | **Spec**                                              |
| ----------------- | ---------------------------------------- | ----------------------------------------------------- |
| TINYINT           | A very small integer                     | integer (-128 to 127)                                 |
| SMALLINT          | A small integer                          | integer (-32768 to 32767)                             |
| MEDIUMINT         | A medium-sized integer                   | integer (-8388608 to 8388607)                         |
| INT               | A standard integer                       | integer (-2147483648 to 2147483647                    |
| BIGINT            | A large integer                          | integer (-9223372036854775808 to 9223372036854775807) |
| DECIMAL           | A fixed-point number                     | double stored as string                               |
| FLOAT             | A single-precision floating point number | decimal (precision to 23 digits)                      |
| DOUBLE            | A double-precision floating point number | decimal (24 to 53 digits)                             |

```Java
INT[(M)][UNSIGNED];  // "M" is the count of digits stored for the value
```

```Java
DOUBLE[(M, D)][UNSIGNED];  //  "M" is the count of digits stored for the value
                           //  "D" is the count of digits after floating point
                           //  Example: DOUBLE[5, 2] - 999.99
```

[/slide]

[slide hideTitle]

# String data types

The following table shows the summary of **String** data types in MySQL:

| **String Types** | **Description**                              | **Spec**                |
| ---------------- | -------------------------------------------- | ----------------------- |
| CHAR             | A fixed-length non-binary (character) string | string (0 - 255)        |
| VARCHAR          | A variable length non-binary string          | string (0 - 255)        |
| TINYTEXT         | A very small non-binary string               | string (0 - 255)        |
| TEXT             | A small non-binary string                    | string (0 - 65535)      |
| BLOB             | A small BLOB                                 | string (0 - 65535)      |
| MEDIUMTEXT       | A small non-binary string                    | string (0 - 16777215)   |
| MEDIUMBLOB       | A medium-sized BLOB                          | string (0 - 16777215)   |
| LONGTEXT         | A large non-binary string                    | string (0 - 4294967295) |
| LONGBLOB         | A large BLOB                                 | string (0 - 4294967295) |

```Java
CHAR[(M)]; // Example: CHAR(30)
```

```Java
VARCHAR[(M)]; // Example: VARCHAR(250)
```

String column definitions include attributes that specify the **CHARACTER SET** or **COLLATION**.

A character set is a set of symbols and encodings. A collation is a set of rules for comparing characters in a character set.

For example, a subset of a character set could consist of the letters: A, B and C. 

A default collation could define these as appearing in ascending order of A, B, C.

**CHARACTER SET (Encoding)** - "utf8", "ucs2", etc.

**CHARACTER COLLATION** - "latin1_general_cs", "Traditional_Spanish_ci_ai", etc.

Character sets and collations can be defined in the database, table, or column level.

`CHAR` vs `VARCHAR`

| **Value**  | **CHAR(4)** | **Storage Required** | **VARCHAR(4)** | **Storage Required** |
| ---------- | ----------- | -------------------- | -------------- | -------------------- |
| ''         | ' '         | 4 bytes              | ''             | 1 byte               |
| 'ab'       | 'ab'        | 4 bytes              | 'ab'           | 5 bytes              |
| 'abcd'     | 'abcd'      | 4 bytes              | 'abcd'         | 5 bytes              |
| 'abcdefgh' | 'abcd'      | 4 bytes              | 'abcd'         | 5 bytes              |

[/slide]

[slide hideTitle]

# Date data types

The following table shows the summary of **Date** data types in MySQL:

| **Data Type** | **Description**                                     |
| ------------- | --------------------------------------------------- |
| DATE          | A date value in YYYY-MM-DD format                   |
| TIME          | A time value in hh:mm:ss format                     |
| DATETIME      | A date and time value in YYYY-MM-DD hh:mm:ss format |
| TIMESTAMP     | A timestamp value in YYYY-MM-DD hh:mm:ss format     |
| YEAR          | A year value in YYYY or YY format                   |

MySQL retrievs values for a given date type in a **standard output format**.

Example: 'YYYY-MM-DD' or 'YY-MM-DD'

[/slide]
