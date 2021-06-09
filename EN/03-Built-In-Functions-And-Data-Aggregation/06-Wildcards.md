[slide hideTitle]

# Wildcards

**Wildcard** symbols in MySQL substitute one or more **characters** in a string.

| Symbol | Description |
| --- | --- |
| % | Represents zero or more characters |
| _ | Represents a single character |
| ^ | Represents any character that is not in brackets |
| [] | Represents any single character within the brackets |
| - | Represents a range of characters |

We use them with the **LIKE** operator in a **WHERE** clause. 

It is pretty similar to how **regular expressions** work.

Here are a few **examples**.

- Finding any values that **start with "a"** (Customer name in our case):

``` java
WHERE CustomerName LIKE 'a%'; 
```

- Here we are looking for values that have **"r"** in their **second position**:

``` java
WHERE CustomerName LIKE '_r%'; 
```

- The following code will find values that **start with "a"**, and **end with "o"**:
  
``` java
WHERE ContactName LIKE 'a%o'; 
```

The \[charlist\] wildcards specify **which characters** to look for.

Similarly, we can use \[!charlist\] wildcard to specify **excluding** characters.

We can use the `REGEXP` function to match it to any pattern.

**For example**:

``` java
SELECT * FROM `customers` 
WHERE `city` REGEXP '[a-c]%'; 
```

In the above case, we will look for a **city**, named **either "a" , "b" or "c"**.

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


