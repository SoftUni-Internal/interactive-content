[slide]
# Console (Terminal)
Generally, the **system console** represents a text terminal, which means that it accepts and visualizes just **text** without any graphical elements like buttons, menus,etc. 

It usually looks like a black colored window like this two:

[image src="https://raw.githubusercontent.com/AtanasovAtanas/pb-interactive-csharp/master/assets/00.Console-example.png"/]

In most operating systems, the **console** is available as a standalone application on which we write console commands. 

It is called a **Command Prompt** in Windows, and a **Terminal** in Linux and Mac. 

The console runs console applications. They read text from the command line and print text on the console. We are going to learn programming mostly through creating **console applications**.

In the next examples we will **read data** (like integers, floating-point numbers and strings) from the console and will **print data** on the console (text and numbers).
[/slide]

[slide]
# Printing and Formatting Text and Numbers

## Using `print(…)` and `print(…, end=" ")`
Work with these methods is easy because they can print all the basic types (string, numeric and primitive types).

Here are some examples of printing various types of data:
```python live
print("Hello World")
print(5)
print(3.14159265358979)
```

The difference between `print(…)` and `print(…, end=" ")` is that the `print(…)` method by default prints a new line after printing your expression, whereas 
`print(…, end=" ")` appends only space afterwards.

In fact the method does not print a new line but simply puts a **"command" for moving** cursor to the position where the new line starts (this command consists of the character `\r` followed by `\n`).

Here is an example, which illustrates the difference between `print(…)` and `print(…, end=" ")`:
```python live
print("I love")
print("this", end=" ")
print("course!", end=" ")
```

We notice that the output of this example is printed on two lines, even though the code is on three. 

This happens because on the first line of code we use `print(…)` which prints **"I love"** and then goes to a new line. 

In the next two lines of the code uses the `print(…, end=" ")` method, which prints without going on a new line and thus the words **"this"** and **"course!"** remain on the same line.

## Formatting
In Python, when printing a text, numbers and other data on the console, **we can join them** by using templates `{...}` etc. 

In programming, these templates are called **placeholders**. This is a simple example:
```python live
first_name = "John"
last_name = "Doe"
print(f"{first_name} {last_name}") # John Doe
```

The placeholders `{...}` are replaced by the value of the variable, which name lies inside the parentheses.

Floating-point numbers can be formatted to some digit after the decimal point.

In the following example we want to limit the number to 2 decimal points.
```python live
a = 5.123
print(f"{a:.2f}") # 5.12
```
[/slide]

[slide]
# Reading User Input
To read a **text** (string) from the console, again, we have to **initialize a new variable** and use the standard **command for reading a text from the console**:
```python
str = input()
```

By default, the `input(…)` method returns a **text result** – a text line, read from the console.
- After you read a text from the console, additionally, you can **parse the text** to an integer by `int(…)` or a floating-point number by `float(…)`.
- If parsing to a number is not done, **each number** will simply be **text**, and we **cannot do** arithmetic operations with it.

# Example: Home Town
Let's write a program that asks the user for their home town and prints the text `"I am from {homeTown}!"`.

```python
home_town = input()
print(f"I am from {home_town}!")
```

In this case the `{home_town}` expression is replaced with the value of the variable `home_town`. 

If we enter **"Sofia"**, the output will be as follows:
```
I am from Sofia!
```
[/slide]

[slide]
# Reading Integers
In order to read an **integer** (not a float) **number** from the console, we have to **initialize a variable**, declare the **number type** and use the standard command for **reading a text line** from the system console `input()` and after that **convert the text line into an integer number** using `int(text)`:

```python
num = int(input())
```

The above line of Python code **reads an integer** from the first line on the console.

Try to write a wrong number, for example **"hello"**. 

You will get an error message during runtime (exception). This is normal.

Later on, we will find out how we can catch these kinds of errors and make the user enter a number again.

# Example: Calculating a Square Area
This code demonstrates how we can calculate the square area by the given length of the side:
```python
print("a = ", end=" ")             
a = int(input())
area = a * a
print("Square area = ", end=" ")
print(area)
```

Here is how the program would work if we had a square with a side length equal to 3:

[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/expressions-and-statements-area-3.png"/]
[/slide]

[slide]
# Reading Floating-Point Numbers
To read a **floating-point number** (fractional number, non-integer) from the console use the following command:
```python
num = float(input())
```

The above Python code first reads a **text line** from the console, then converts (parses) it to a **floating-point number**.

# Example: Converting Inches into Centimeters
Let's write a program that reads a floating-point number in inches and converts it to centimeters:
```py
print("Inches = ", end=" ")            
inches = float(input())
centimeters = inches * 2.54
print("Centimeters = ", end=" ")
print(centimeters)
```

Let's start the program and make sure that when a value in inches is entered, we obtain a correct output in centimeters:

[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/expressions-and-statements-inches-to-centimeters.png"/]

Note that if you enter and **invalid number**, e.g. **"asfd"**, the program will crash with an error message (exception). 

We will learn how to handle exceptions in later courses.
[/slide]

[slide]
# Importing Libraries (import)
Sometimes we need to import external libraries.

A library is a collection of functions and methods that allows you to perform actions without having to write any code.
```python
import name of the library
```
Examples
```python
import math      # import math library
import sys       # import sys library
import math, sys # import both math and sys libraries
```
[/slide]

[slide]
# Problem: Greeting
[code-task title="Greeting" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a **program**, which:

  * Reads a user input: **name**, from the console
  * Prints "Hello, \{name\}", where {**name**} is the **user input**
# Example
## Input
- Peter
## Output
- Hello, Peter
[/task-description]
[tests]
[test]
[input]
John
[/input]
[output]
Hello, John
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide]
# Solution: Greeting
[code-task title="Greeting" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
name = input()
print('Hello,', end=" ")
print(name)
```
[/code-editor]
[task-description]
# Description
Write a **program**, which:

  * Reads a user input: **name**, from the console
  * Prints "Hello, \{name\}", where {**name**} is the **user input**
# Example
## Input
- Peter
## Output
- Hello, Peter
[/task-description]
[tests]
[test]
[input]
John
[/input]
[output]
Hello, John
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide]
# Concatenating Text and Numbers
Besides for summing up numbers, the operator `+` is also used for **joining pieces of text** (concatenation of two strings one after another). 

In programming, joining two pieces of text is called **"concatenation"**. 

Here is how we can concatenate a text with a number by the `+` operator:

```py live
firstName = "John"
lastName = "Doe"
age = 19
str = firstName + " " + lastName + " @ " + str(age)
print(str)  # John Doe @ 19
```

# Examples: Concatenating Text and Numbers
Here is another **example** of concatenating text and numbers:
```py live
a = 1.5
b = 2.5
sum = "The sum is: " + str(a) + str(b)
print(sum);  # The sum is: 1.52.5
```

Did you notice **something strange**? Maybe you expected the numbers `a` and `b` to be summed? 

Actually, the concatenation works from right to left and the result above is absolutely correct. 

If we want to sum the numbers, we have to use **brackets**, in order to change the order of execution of the operations:
```py live
a = 1.5;
b = 2.5;
sum = "The sum is: " + str(a + b);
print(sum);  # The sum is: 4.0
```
[/slide]

[slide]
# Video

[vimeo-video videoId="341528681" startTimeInSeconds="3268" endTimeInSeconds="4092" /]

[/slide]