[slide hideTitle]

# Wildcards

**Wildcard** symbols in MySQL substitute one or more **characters** in a string.

| Symbol | Description |
| --- | --- |
| % | Represents zero or more characters |
| _ | Represents a single character |
| ^ | Represents any character that is not in brackets |
| [] | Represents any single character within the brackets |
| - | Represents range of characters |

We use them with the **LIKE** operator in a **WHERE** clause. 

It is pretty similar to **Regular expressions**.

**Example**:

``` java
WHERE CustomerName LIKE 'a%'; // It will find any values that start with "a" (Customer name in our case)
```

``` java
WHERE CustomerName LIKE '_r%'; // It will find values that have "r" in second position
```

``` java
WHERE ContactName LIKE 'a%o'; // It will find values that start with "a", and end with "o".
```

The \[charlist\] wildcards specify **which characters** to look for.

Similarly, we can use \[!charlist\] wildcard to specify **excluding** characters.

We can use the `REGEXP` function to match it to any pattern.

**Example**:

``` java
SELECT * FROM `customers` // In this case, we will look for the city which is "a" , "b" or "c".
WHERE `city` REGEXP '[a-c]%'; 
```

[/slide]


[slide hideTitle]
# Problem and Solution: Harry Potter Books - TODO: Add Tests

Create an SQL query to retrieve titles of all the Harry Potter books. 

**Order the information by the id column.** 

**Run your query statements & submit the output from the queries as plain text.**

## Example

| title |
| --- |
| Harry Potter and the Philosopher's Stone |
| Harry Potter and the Chamber of Secrets |
| Harry Potter and the Prisoner of Azkaban |
| ... |

[/slide]


