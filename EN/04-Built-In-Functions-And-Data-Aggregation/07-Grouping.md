[slide]

# Grouping

The **Group By** clause in SQL allows us to take data in to **separate groups** based on a **common property**.

[image assetsSrc="Built-in-Functions-Data-Aggregations(5).png" /]

Using **GROUP BY** we can get each **separate** group and use an **aggregate** function over it. (Average, Min, Max)

Let's take a look at this simple example using **soft_uni** database:

``` java
SELECT e.`job_title`, count(employee_id) // This query would return a list of position 
  FROM `employees` AS e                  // titles and the number of employees assigned to each one of them.
GROUP BY e.`job_title`;
```

**Output:**

| job_title | count(employee_id) |
| --- | --- |
| Production Technician | 157 |
| Marketing Assistant | 3 |
| Engineering Manager | 1 |
| Senior Tool Designer | 2 |
| ...... | ...... |

[/slide]

[slide hideTitle]

# Problem: Departments Info
[code-task title="Problem: Departments Info" taskId="741003dd-c7ac-4443-b344-e1e4307f9a2b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description

Write a query to **count** the number of employees **in each department by id**. 

Order the information by **deparment_id**, then by **employees count**. 

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
2
2
4
3
3
[/input]
[output]
1
2
2
4
3
3
[/output]
[/test]
[test]
[input]
1
2
2
4
3
3
[/input]
[output]
1
2
2
4
3
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Departments Info
[code-task title="Problem: Departments Info"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description

Write a query to **count** the number of employees **in each department by id**. 

Order the information by **deparment_id**, then by **employees count**. 

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
2
2
4
3
3
[/input]
[output]
1
2
2
4
3
3
[/output]
[/test]
[test]
[input]
1
2
2
4
3
3
[/input]
[output]
1
2
2
4
3
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]