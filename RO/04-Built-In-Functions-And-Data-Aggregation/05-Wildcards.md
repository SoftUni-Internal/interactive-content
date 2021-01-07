[slide]

# Wildcards

**Wildcards** characters in MySQL are used to substitute one or more **characters** in a string.

| Symbol | Description |
| --- | --- |
| % | Represents zero or more characters |
| _ | Represents a single character |
| ^ | Represents any character not in brackets |
| [] | Represents any single character within the brackets |
| - | Represents range of characters |

They can be used with **LIKE** operator in a **WHERE** clause. It is pretty similar to **Regular expressions**.

Let's see some **examples:**

``` java
WHERE CustomerName LIKE 'a%'; // It will find any values that starts with "a" (Customer name in our case).
```

``` java
WHERE CustomerName LIKE '_r%'; // It will find values that have "r" in second position.
```

``` java
WHERE ContactName LIKE 'a%o'; // It will find values that starts with "a" and ends with "o".
```

The \[charlist\] wildcards are used to specify **which characters** to look for.

Similarly we can use \[!charlist\] wildcard to specify **excluding** characters.

We can use `REGEXP` function to match by any pattern.

**Example:**

``` java
SELECT * FROM `customers` // In this case, we will look for the city which is "a" , "b" or "c".
WHERE `city` REGEXP '[a-c]%'; 
```



[/slide]


[slide hideTitle]
# Problem: Harry Potter Books
[code-task title="Problem: Harry Potter Books" taskId="a376e673-25be-4fcc-8312-b60d73b5bc15" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]

# Description

Write a SQL query to retrieve titles of all the Harry Potter books. **Order the information by id.** 

**Run your query statements & submit the output from the queries as plain text.**


## Example:

| title |
| --- |
| Harry Potter and the Philosopher's Stone |
| Harry Potter and the Chamber of Secrets |
| Harry Potter and the Prisoner of Azkaban |
| ... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Harry Potter and the Philosopher's Stone
Harry Potter and the Chamber of Secrets
Harry Potter and the Prisoner of Azkaban
Harry Potter and the Goblet of Fire
Harry Potter and the Order of the Phoenix
Harry Potter and the Half-Blood Prince
Harry Potter and the Deathly Hallows
Harry Potter and the Deathly Hallows
[/input]
[output]
Harry Potter and the Philosopher's Stone
Harry Potter and the Chamber of Secrets
Harry Potter and the Prisoner of Azkaban
Harry Potter and the Goblet of Fire
Harry Potter and the Order of the Phoenix
Harry Potter and the Half-Blood Prince
Harry Potter and the Deathly Hallows
Harry Potter and the Deathly Hallows
[/output]
[/test]
[test]
[input]
Harry Potter and the Philosopher's Stone
Harry Potter and the Chamber of Secrets
Harry Potter and the Prisoner of Azkaban
Harry Potter and the Goblet of Fire
Harry Potter and the Order of the Phoenix
Harry Potter and the Half-Blood Prince
Harry Potter and the Deathly Hallows
Harry Potter and the Deathly Hallows
[/input]
[output]
Harry Potter and the Philosopher's Stone
Harry Potter and the Chamber of Secrets
Harry Potter and the Prisoner of Azkaban
Harry Potter and the Goblet of Fire
Harry Potter and the Order of the Phoenix
Harry Potter and the Half-Blood Prince
Harry Potter and the Deathly Hallows
Harry Potter and the Deathly Hallows
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Harry Potter Books
[code-task title="Problem: Harry Potter Books" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]

# Description

Write a SQL query to retrieve titles of all the Harry Potter books. **Order the information by id.** 

**Run your query statements & submit the output from the queries as plain text.**


## Example:

| title |
| --- |
| Harry Potter and the Philosopher's Stone |
| Harry Potter and the Chamber of Secrets |
| Harry Potter and the Prisoner of Azkaban |
| ... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Harry Potter and the Philosopher's Stone
Harry Potter and the Chamber of Secrets
Harry Potter and the Prisoner of Azkaban
Harry Potter and the Goblet of Fire
Harry Potter and the Order of the Phoenix
Harry Potter and the Half-Blood Prince
Harry Potter and the Deathly Hallows
Harry Potter and the Deathly Hallows
[/input]
[output]
Harry Potter and the Philosopher's Stone
Harry Potter and the Chamber of Secrets
Harry Potter and the Prisoner of Azkaban
Harry Potter and the Goblet of Fire
Harry Potter and the Order of the Phoenix
Harry Potter and the Half-Blood Prince
Harry Potter and the Deathly Hallows
Harry Potter and the Deathly Hallows
[/output]
[/test]
[test]
[input]
Harry Potter and the Philosopher's Stone
Harry Potter and the Chamber of Secrets
Harry Potter and the Prisoner of Azkaban
Harry Potter and the Goblet of Fire
Harry Potter and the Order of the Phoenix
Harry Potter and the Half-Blood Prince
Harry Potter and the Deathly Hallows
Harry Potter and the Deathly Hallows
[/input]
[output]
Harry Potter and the Philosopher's Stone
Harry Potter and the Chamber of Secrets
Harry Potter and the Prisoner of Azkaban
Harry Potter and the Goblet of Fire
Harry Potter and the Order of the Phoenix
Harry Potter and the Half-Blood Prince
Harry Potter and the Deathly Hallows
Harry Potter and the Deathly Hallows
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

