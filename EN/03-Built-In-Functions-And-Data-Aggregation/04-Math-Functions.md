[slide hideTitle]

# The Math Functions

Execution of mathematical functions usually is based on input values that are provided as arguments.

It returns a value as the result of the operation.

Here is the table of **supported arithmetic operators:**

| Name | Description |
| --- | --- |
| DIV | Integer division |
| / | Division operator |
| - | Substraction operator |
| %, MOD | Modulo operator |
| + | Addition operator |
| * | Multiplication operator | 
| - (arg) | Change sign of argument |

Let us take a look at some **Math** functions:

- `PI()` - Returns the PI value. It has a 15 digit precision.

- `ABS()` - Returns the absolute value of an number.

``` java
SELECT ABS(-243.5);
```

**Output**:
```
243.5
```

- `SQRT()` - Returns the square root of a number passed as an argument.

``` java
SELECT SQRT(1024);
```

**Output:**

```
32
```

- `POW()` - Returns the result of raising number to the power of another number passed as argument.

``` java
SELECT POW(5, 2);
```

**Output**:

```
25
```

- `CONV()` - This function converts a number from one numeric system to another. 


``` java
SELECT CONV(15, 10, 2);  // The first argument is "value", second is "from_base", third "to_base"
```

**Output**:

```
12
```

- `ROUND()` - Rounds the number to precision passed as an argument.

``` java
SELECT ROUND(10.5021401, 2); 
```

**Output**:

```
10.50
```

- `FLOOR()` - Returns the value as integer that is smaller or equal to the number passed as argument.

``` java
SELECT FLOOR(11.85);
```

**Output**:

```
11
```

- `CEILING()` - Returns integer number that is greater than or equal to the number passed as argument.

``` java
SELECT CEILING(6.55);
```

**Output**:

```
7
```

- `SIGN()` - This function returns the sign of a number depending on value passed as an argument.

**Example**:

If we have a number **higher than 0**, it will return **1**.

If we have a number **equal to 0**, it will return **0**.

If we have a number **lower than 0**, it will return **-1**.

``` java
SELECT SIGN(-5);
```

**Output**:
```
-1
```

- `RAND()` - Returns a float number between 0 and 1 exclusively.

If **Seed** is not specified, it will return a completely random number. 

If we use **seed**, it will return a sequence of random numbers.

``` java
SELECT RAND();  // It will return a completely random number
```

**Output:**

```
0.40613597483014313
```

[/slide]

