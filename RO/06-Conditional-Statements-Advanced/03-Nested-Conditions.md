[slide]
# Nested Conditions
Pretty often the program logic requires the use of `if` or `if-else` statements, which are contained one inside another.  
They are called **nested** `if` or `if-else` statements. 

As implied by the title **"nested"**, these are `if` or `if-else` statements that are placed inside other `if` or `else` statements.

```py
if condition1:
    if condition2:
        # body
    else
        # body
```

# Example: Personal Titles
Depending on **age** (decimal number and **gender** (**m** / **f**), print a personal title:
-  "Mr." – a man (gender "m") – 16 or more years old.
-  "Master" – a boy (gender "m") under 16 years.
-  "Ms." – a woman (gender "f") – 16 or more years old.
-  "Miss" – a girl (gender "f") under 16 years.

# Solution: Person Titles
We should notice that the **output** of the program **depends on a few things**. 

**First**, we have to check what is the entered **gender** and **then** check the **age**. 

Respectively, we are going to use **a few** `if-else` blocks. 

These blocks will be **nested**, meaning from **the result** of the first, we are going to **define** which one of the **others** to execute.

The diagram below illustrates the process in detail:

[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/01.Personal-titles-01.jpg"/]

After reading the input data from the console, the following program logic should be executed:
```py
age = int(input())
char = input()

if age < 16
    if gender == "m":
        print("Master")
    elif gender == "f":
        print("Miss")
else
    if gender == "m":
        print("Mr.")
    elif gender == "f":
        print("Ms.")
```

# Deep nesting
Nesting of **more than three conditional statements** inside each other is not considered a good practice.

It **has to be avoided**, mostly through optimization of the structure/the algorithm of the code and/or by using another type of conditional statement.
[/slide]

[slide]
# Problem: Marketplace
[code-task title="Marketplace" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program which:
  * Reads a **product** and **day** from the console
  * Prints the **price**, formatted to 2nd digit, based on the price table below

|Product|Weekday|Weekend| 
|-------|-------|-------|
|Banana|2.50|2.70|
|Apple|1.30|1.60|
|Kiwi|2.20|3.00|
# Example
## Input
- Banana
- Weekday
## Output
- 2.50

[/task-description]
[tests]
[test]
[input]
Banana
Weekday
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
Apple
Weekend
[/input]
[output]
1.60
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Marketplace
[code-task title="Marketplace" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
product = input()
day_of_week = input()

if product == "Banana":
  if day_of_week == "Weekday":
    print("2.50")
  else:
    print("2.70")
elif product == "Apple":
  if day_of_week == "Weekday":
    print("1.30")
  else:
    print("1.60")
elif product == "Kiwi":
  if day_of_week == "Weekday":
    print("2.20")
  else:
    print("3.00")
```
[/code-editor]
[task-description]
# Description
Write a program which:
  * Reads a **product** and **day** from the console
  * Prints the **price**, formatted to 2nd digit, based on the price table below

|Product|Weekday|Weekend| 
|-------|-------|-------|
|Banana|2.50|2.70|
|Apple|1.30|1.60|
|Kiwi|2.20|3.00|
# Example
## Input
- Banana
- Weekday
## Output
- 2.50

[/task-description]
[tests]
[test]
[input]
Banana
Weekday
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
Apple
Weekend
[/input]
[output]
1.60
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Biggest Number of Three
[code-task title="Biggest Number of Three" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

  * Reads **3 numbers** from the console
  * Prints **the biggest** number
# Example
## Input
- 1
- 2
- 3
## Output
- 3
[/task-description]
[tests]
[test]
[input]
1
2
3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
-1
-5
-9
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
1
5
3
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Biggest Number of Three
[code-task title="Biggest Number of Three" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
first = int(input())
second = int(input())
third = int(input())
if first > second:
  if first > third:
    print(first)
  else:
    print(third)
else:
  if second > third:
    print(second)
  else:
    print(third)
```
[/code-editor]
[task-description]
# Description
Write a program, which:

  * Reads **3 numbers** from the console
  * Prints **the biggest** number
# Example
## Input
- 1
- 2
- 3
## Output
- 3
[/task-description]
[tests]
[test]
[input]
1
2
3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
-1
-5
-9
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
1
5
3
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Video

[vimeo-video videoId="341568008" startTimeInSeconds="1121" endTimeInSeconds="2059" /]

[/slide]