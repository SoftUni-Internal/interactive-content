[slide]

# Subqueries

## Query Manipulation On Multiple Levels

Subquetries are basically SQL queries inside a large one:

- Can be nested in **SELECT**, **INSERT**, **UPDATE**, **DELETE**
  - Usually added within a **WHERE** clause

```Java
SELECT * FROM students
WHERE course_id = 1;
```

And the resulting table is:

| **id** | **name** | **course_id** |
| ------ | -------- | ------------- |
| 1      | Alice    | 1             |
| 2      | Michael  | 1             |

[/slide]

[slide hideTitle]

# Problem: Higher Salary

[code-task title="Problem: Higher Salary" taskId="30675704-d280-4020-af47-a1f72b191cfb" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to count the number of employees who receive **salary** higher than the **average**.

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
88
[/input]
[output]
88
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Higher Salary

[code-task title="Problem: Higher Salary" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to count the number of employees who receive **salary** higher than the **average**.

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
88
[/input]
[output]
88
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
