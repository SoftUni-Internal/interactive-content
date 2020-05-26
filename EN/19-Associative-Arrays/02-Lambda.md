[slide]
# Lambda

A lambda expression is an anonymous function containing expressions and statements
(a -> a > 5)

Lambda expressions

Use the lambda operator `->`. Read as "goes to"

The **left** side specifies the **input** parameters
The **right** side holds the **expression** or **statement**

Lambda functions are **inline methods** (functions) that take input parameters and return values:

`x -> x / 2` = `static int function(int x) { return x / 2; }`

`x -> x != 0` = `static boolean function(int x) { return x != 0; }`

`() -> 42` = `static int function() { return 42; }`


[/slide]
