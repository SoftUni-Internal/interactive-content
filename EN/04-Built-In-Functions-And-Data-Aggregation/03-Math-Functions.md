[slide]

# Math Functions

Execution of mathematical functions usually is based on input values that are provided as arguments.

It return a value as the result of the operation.


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

Let's take a look at some **Math** functions:

- `PI()` - This SQL function returns the PI value. It has 15 digit precision.

- `ABS()` - It returns the absolute value of an number.

``` java
SELECT ABS(-243.5);
```

**Output:**
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
-
- `POW()` - Returns the result of raising number to the power of another number passed as argument.

``` java
SELECT POW(5, 2);
```

**Output:**

```
25
```

- `CONV()` - This function converts a number from one numeric system to another. 


``` java
SELECT CONV(15, 10, 2); // First argument is "value", second is "from_base", third "to_base"
```

**Output:**

```
12
```





[/slide]