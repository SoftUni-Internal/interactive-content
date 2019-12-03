[slide]
# Comparison Operators
In programming, we can compare values using the following operators:

|Operators|Designation|
|---------|-----------|
| Equal to |   **==** |
| Not Equal to |   **!=** |
| Greater than |   **>** |
| Greater than or equal to |   **>=** |
| Less than |   **<** |
| Less than or equal to |   **<=** |

When compared, the result is a Boolean value `True` or `False`, depending on whether the result of the comparison is `True` or `False`.
[/slide]

[slide]
# Examples for Comparing Numbers
Examples of such an expression are as follows:
```py live
a = 5
b = 10
print(a < b)      # True
print(a > 100)    # False
print(a <= 5)     # True
print(b == 2 * a) # True
print(a != b)     # True
```

You can also compare numeric expressions. 

The expressions you compare can themselves be complex expressions, as in the following example.

```py
x / 45 * (y +17) >= math.sqrt(z) / (p - (x * 16))
```

The preceding complex expression includes literals, variables, and function calls. 

The expressions on both sides of the comparison operator are evaluated, and the resulting values are then compared using the `>=` comparison operator. 

If the value of the expression on the left side is greater than or equal to the value of the expression on the right, the entire expression evaluates to `True`, otherwise, it evaluates to `False`.
[/slide]

[slide]
# String Comparison
Comparing text using the equality operator(`==`).

Two string operands are equal when both of them are `null` or both string instances are of the same length and have identical characters in each character position:
```py live
a = "Examplе"
b = a
print(a == b) # True
```

```py
a = "hello"
b = "hello"
print(a == b); # True
print(a < b); # error
```
A string is an object and every object has an instance, but this is a knowledge we will acquire later on throughout the course.
[/slide]

[slide]
# Video

[vimeo-video videoId="341553633" startTimeInSeconds="1448" endTimeInSeconds="2019" /]

[/slide]