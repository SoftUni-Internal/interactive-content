[slide]
# What is Coding?
**To program** means to **give commands** to the computer, for example *"to play a sound"*, *"to print something on the screen"* or *"to multiply two numbers"*. 

When the commands are one after another, they are called **a computer program**. 

The text of computer programs is called **a program code** (or a **source code**, or even shorter – **code**).

Example of command for the computer:
```python live
print("Welcome to coding")
```
[/slide]

[slide]
# Computer Programs
Computer programs represent **a sequence of commands** that are written in certain **programming language**, like Python, Java, JavaScript, C#, C++, PHP, C, Ruby, Swift, Go or another.

Example of **computer program** in Python:
```python
size = 5
print("Size = ", size)
print("Area = ", size * size)
```

The above program holds a sequence of **3 commands**:
- Assigning a **value** to a **name**: `size = 5;`
- Calculating and **printing** an **expression**: `print("Size = ", size);`
- Calculating and **printing** an **expression**: `print("Area = ", size * size);`

The result (output) from the above program is as follows:
```
Size = 5
Area = 25
```

In order to write commands, we should know **the syntax and the semantics of the language** which we are working with, in our case – **Python**. 

Therefore, we are going to get familiar with the syntax and the semantics of the language Python, and with programming generally, by learning step by step code writing from the simpler to the more complex programming constructions.
[/slide]

[slide]
# Algorithms
Computer programs usually execute some algorithm. 

**Algorithms** are a **sequence of steps**, necessary for the completion of a certain task and for gaining some expected result, something like a "recipe".

For example, if we fry eggs, we follow some recipe (an algorithm): 
- warm up the oil in a pan
- break the eggs inside it
- wait for them to fry
- move them away from the stove

Similarly, in programming **the computer programs execute algorithms**: a sequence of commands, necessary for the completion of a certain task. 

For example, to arrange a sequence of numbers in an ascending order, an algorithm is needed, e.g. find the smallest number and print it, then find the smallest number among the rest of the numbers and print it, and this is repeated until there are no more numbers left.

For convenience when creating programs, for writing programming code, for execution of programs and other operations related to programming, we need a **development environment**, for example PyCharm.
[/slide]

[slide]
# Console-Based Python Program – Example
Let's look at a simple program that reads from the user some amount of money in U.S. Dollars (USD) - an integer, converts it into Euro (EUR) by dividing it by the Euro's rate and prints the obtained result. 

This is a program of 3 consecutive commands:

```python
dollars = int(input())
euro = dollars * 0.883795087
print(euro)
```
[/slide]

[slide]
# Video

[vimeo-video videoId="351878876" startTimeInSeconds="1761" endTimeInSeconds="2734" /]

[/slide]