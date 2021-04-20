[slide hideTitle]

# User-Defined Functions

MySQL is able to accomplish things far beyond just storing and managing your data.

To better understand this fact, we will have a look at his programmability and how we can introduce custom logic to our database.

This lesson we will have a look at: 

- User-Defined Functions
- Triggers
- Stored Procedures

When we need to work with our data but the functions introduced in SQL are just not enough, we have an option of writing custom logic and even more, **encapsulate custom logic** for future use.

That is when User-Defined Functions come handy.

As mentioned before, **U.D.F.** are a way of encapsulating custom logic and introducing it for future use.

But actually they bring much more value than just that:

- Faster execution - once the execution plan is build for the **U.D.F.** it is stored for future use, which removes the need of reparsing and reoptimizing with each use

- Breaks complex logic in smaller code blocks - this makes our queries easier to read and comprehend and allow us to have single-resposibillity

- Modular programming - we write it once and re-use it as many times as we need it

Functions can be two types: 

- Scalar - you put in the parameters and it returns just a **single value** or **NULL**

- Table-Valued Function - simmilar to view, you give her a **SELECT** statement resulting in a table and it stores the table for future use

Think of User-Defined-Functions as methods, which accepts parameters, does **custom logic** and returns a result which is a **Scalar** or a **Table**

There are built-in functions in MySQL, just like: **LENGTH()**, **REPLACE()**, **REVERSE()** etc

Declaring user defined function:

```java
CREATE FUNCTION CalculateAmount(userid INT) RETURNS float(10,2)                  // Declaring that we want to create a function, its parameters and return type.
BEGIN                                                                            // We always set the begining of a function
    DECLARE totalCredits FLOAT;
    SELECT SUM(amount) INTO totalAmount FROM credit_user WHERE id = userid;      // The Logic
    RETURN totalAmount;
END                                                                              // End the function
```
[/slide]

[slide hideTitle]
# Problem with Solution: Count Employees by Town
[code-task title="Count Employees by Town" taskId="java-db-and-mysql-database-programmability-count-employees-by-town" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description

Download the resources from [here](https://mega.nz/file/PIJXWaRZ#s4x7gN5hOng6QXNw60Ku2COWk__M8X4zWFa5GtDYpjY).

Create a function **ufn_count_employees_by_town(town_name)** that accepts a **town_name** as parameter

and returns the **count** of employees who live in that town.

## Example outputs:

```java
SELECT ufn_count_employees_by_town('Berlin'); -> 3

SELECT ufn_count_employees_by_town(NULL); -> 0
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
[/input]
[output]
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


## Example outputs:

```java
SELECT ufn_count_employees_by_town('Berlin');  -> 3

SELECT ufn_count_employees_by_town(NULL);  -> 0
```
