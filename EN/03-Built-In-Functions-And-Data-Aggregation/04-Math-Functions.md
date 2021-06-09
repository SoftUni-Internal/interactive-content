[slide hideTitle]

# The Math Functions

Execution of mathematical functions usually is based on input values, provided as arguments.

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
| - (arg) | Change the sign of an argument |

Let us take a look at some **Math** functions.

## PI()

`PI()` returns the **PI** value.

It has a **15 digit** precision.

PI is approximately equal to **3.14159**.

## ABS()

`ABS()` returns the **absolute value** of a number.

``` java
SELECT ABS(-243.5);
```

**Output:**
```
243.5
```

## SQRT()

`SQRT()` returns the **square root** of a number passed as an argument.

``` java
SELECT SQRT(1024);
```

**Output:**

```
32
```

## POW()

`POW()` returns the result of raising a number to the **power** of another number passed as an argument.

``` java
SELECT POW(5, 2);
```

**Output:**

```
25
```

## CONV()

The `CONV()` function **converts** a number from one numeric system to another.

``` java
SELECT CONV(15, 10, 2); 
```

It accepts three arguments:

- "**value**": 15
- "**from_base**": in this case, decimal - 10
- "**to_base**": 2 (binary)

**Output:**

```
1111
```

## ROUND()

As the name suggests, `ROUND()` is used to round a number to a **precision** passed as an argument.

``` java
SELECT ROUND(10.5021401, 2); 
```

**Output:**

```
10.50
```

## FLOOR()

`FLOOR()` returns the value as an **integer**, **smaller or equal to** the number passed as an **argument**.

``` java
SELECT FLOOR(11.85);
```

**Output:**

```
11
```

## CEILING()

`CEILING()` returns an **integer** number **greater than or equal to** the number passed as an argument.

``` java
SELECT CEILING(6.55);
```

**Output:**

```
7
```

## SIGN()

The `SIGN()` function returns the **sign** of a number depending on the value passed as an argument.

**Example:**

If we have a number **higher than 0**, it will return **1**.

If we have a number **equal to 0**, it will return **0**.

If we have a number **lower than 0**, it will return **-1**.

``` java
SELECT SIGN(-5);
```

**Output:**
```
-1
```

## RAND()

`RAND()` returns a **float** number between 0 and 1 exclusively.

If **Seed** is not specified, it will return a completely random number. 

If we use **Seed**, it will return a sequence of random numbers.

``` java
SELECT RAND(); # It will return a completely random number
```

**Output:**

```
0.40613597483014313
```

[/slide]

