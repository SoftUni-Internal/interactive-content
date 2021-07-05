# Data Types in MySQL

[slide hideTitle]

# Data Types

There are several data types in MySQL:

- **Numeric** - MySQL supports a wide range of numeric types with different precisions and maximum storage size:
    - BIT
    - INTEGER
    - INT
    - SMALLINT
    - TINYINT
    - MEDIUMINT
    - BIGINT
    - DECIMAL
    - FLOAT
    - DOUBLE
- **String** - Used for storing text and characters to represent various kinds of data:
    - CHAR
    - VARCHAR
    - BINARY
    - VARBINARY
    - BLOB
    - TEXT
    - ENUM
    - SET

- **Date** - MySQL supports a lot of the common temporal data values, each with its own range of valid values:
    - DATE
    - DATETIME
    - TIMESTAMP
    - TIME
    - YEAR

There are also **spatial types** and **JSON data type**, which are not the focus of this lesson.

[/slide]

[slide hideTitle]

# Numeric Data Types

The **Numeric** data types have a specific **range**

Depending on the range, they can be **Signed** and **Unsigned** except for the **BIT** data type, which only stores numbers from 1 to 64.

This is an example of a Signed and Unsigned **INT**:

`Signed`: Represents numbers both in the positive and negative range

(min value: **-2147483648**, max value: **2147483647**)

`Unsigned`: Represents numbers only in the positive range

(min value: **0**, max value: **4294967295**)

The following table shows a summary of the numeric types in MySQL:

| **Numeric Types** | **Description**|**Signed Min/Max Value**|
| --- | --- | --- |
| TINYINT | A very small integer | integer (-128 to 127)  |
| SMALLINT| A small integer | integer (-32768 to 32767) | 
| MEDIUMINT | A medium-sized integer | integer (-8388608 to 8388607) | 
| INT |A standard integer| integer (-2147483648 to 2147483647 |
| BIGINT | A large integer | integer (-9223372036854775808 to 9223372036854775807) |
| DECIMAL | A fixed-point number| double stored as string | 
| FLOAT | A single-precision floating point number | decimal (precision to 23 digits)|
| DOUBLE| A double-precision floating point number | decimal (24 to 53 digits) |

INTEGER, SMALLINT, DECIMAL, and NUMERIC are called exact numeric types, while DOUBLE AND FLOAT are of varying precision.

```Java
INT[(M)][UNSIGNED];  // "M" is the count of digits stored for the value
```

```Java
DOUBLE[(M, D)][UNSIGNED];  //  "M" is the count of digits stored for the value
                           //  "D" is the count of digits after floating point
                           //  Example: DOUBLE[5, 2] - 999.99
```

```Java
DECIMAL[(M, D)][UNSIGNED]; 
```

Note that after MySQL version 8.0.17, table columns of type **FLOAT**, **DOUBLE**, and **DECIMAL** should not use the unsigned attribute as it is deprecated for those types. 

If you need to only store positive numbers in these columns, you can use a CHECK constraint.

[/slide]

[slide hideTitle]

# String Data Types

The following table shows the summary of **String** data types in MySQL:

| **String Types** | **Description** |**Spec**|
| --- | --- | --- |
| CHAR | A fixed-length non-binary (character) string | string (0 - 255) |
| VARCHAR| A variable length non-binary string| string (0 - 255)|
| TINYTEXT| A very small non-binary string | string (0 - 255)|
| TEXT| A small non-binary string | string (0 - 65535) |
| BLOB | A small BLOB | string (0 - 65535) |
| MEDIUMTEXT | A small non-binary string | string (0 - 16777215) |
| MEDIUMBLOB | A medium-sized BLOB | string (0 - 16777215) |
| LONGTEXT | A large non-binary string | string (0 - 4294967295) |
| LONGBLOB | A large BLOB  | string (0 - 4294967295) |

```Java
CHAR[(M)]; // Example: CHAR(30)
```

```Java
VARCHAR[(M)]; // Example: VARCHAR(250)
```

String column definitions include attributes that specify the **CHARACTER SET** or **COLLATION**.

A character set is a set of symbols and encodings. 

A collation is a set of rules for comparing characters in a character set.

For example, a subset of a character set could consist of the letters: A, B, and C. 

A default collation could define these as appearing in ascending order of A, B, C.

**CHARACTER SET (Encoding)** - "utf8", "ucs2", etc.

**CHARACTER COLLATION** - "latin1_general_cs", "Traditional_Spanish_ci_ai", etc.

The order in which the elements are sorted when you try to order them in a specific way will be affected by the character collation.

Character sets and collations can be defined in the database, table, or column level.

`CHAR` vs `VARCHAR`

| **Value**  | **CHAR(4)** | **Storage Required** | **VARCHAR(4)** | **Storage Required** |
| --- | --- | --- | --- | --- |
| '' | ' ' | 4 bytes  | '' | 1 byte  |
| 'ab' | 'ab' | 4 bytes | 'ab' | 5 bytes |
| 'abcd' | 'abcd' | 4 bytes  | 'abcd' | 5 bytes  |
| 'abcdefgh' | 'abcd' | 4 bytes  | 'abcd' | 5 bytes |

[/slide]

[slide hideTitle]

# Date Data Types

The following table shows the summary of **Date** data types in MySQL:

| **Data Type** | **Description**                                     | **Used For** |
| --- | --- | --- |
| DATE          | A date value in YYYY-MM-DD format                   | For storing only a date with no time part. |
| TIME          | A time value in hh:mm:ss format                     | For storing only the time part. |
| DATETIME      | A date and time value in YYYY-MM-DD hh:mm:ss format | For storing the date and time. |
| TIMESTAMP     | A timestamp value in YYYY-MM-DD hh:mm:ss format     | For storing the date and time. |
| YEAR          | A year value in YYYY or YY format                   | For storing only the year part. |

MySQL retrieves values for a given date type in a **standard output format**.

Here is an example: 'YYYY-MM-DD' or 'YY-MM-DD'

**TIMESTAMP** and **DATETIME** have built-in automatic behavior for setting the current time on initialization. They can be used for retrieving the time once during the creation of a record or updating a field with the current time and date when a value in the record's row changes.

**DATETIME** has a range of **1000-01-01 00:00:00** to **9999-12-31 23:59:59**, while **TIMESTAMP** supports a range of **1970-01-01 00:00:01** UTC to **2038-01-19 03:14:07** UTC.

The main difference is not just their range but that **TIMESTAMP** will convert the current date and time into **UTC format** (Universal Time Zone).

This means that when you retrieve the time and date stored into a **TIMESTAMP** field, a conversion to the current time zone will be done.

By default, it is converted to the server's timezone.

[/slide]
