[slide]

# Joins, Subqueries and Indices

In this lesson we will have a look at **Joins**, **Subqueries** and **Indices**.

_Download the resources needed for this lesson from here:_ [Mega.nz](https://mega.nz/file/3IZTXSDR#FHeTo3uqIs6yEfIMQ1AXZh02WgkbUGaDsecPveCrSho)

[/slide]

[slide]

# Joins

## Gathering data from multiple tables

Sometimes you need to combine data from several tables into a new table.

Have a look at the example below.

[image assetsSrc="Joins-Subqueries-And-Indices.png" /]

### Cartesian Product(1)

This example will produce Cartesian product:

```Java
SELECT last_name, name, AS department_name
FROM employees, departments;
```

The result:

| **last_name** | **department_name** |
| ------------- | ------------------- |
| Gilbert       | Engineering         |
| Brown         | Engineering         |
| ...           | ...                 |
| Gilbert       | Sales               |
| Brown         | Sales               |

### Cartesian Product(2)

- Each row in the first table is paired with all the rows in the second table
  - When there is no relationship defined between the two tables
- Formed when:
  - A join condition is omitted
  - A join condition is invalid
- To avoid, always include a valid **JOIN condition**

### Joins

- **JOINS** - used to collect data from **two** or **more** tables
- Types:
  - INNER JOIN
  - LEFT JOIN
  - RIGHT JOIN
  - OUTER(UNION) JOIN
  - CROSS JOIN

**INNER JOIN**:

Table students:

| **id** | **name** | **course_id** |
| ------ | -------- | ------------- |
| 1      | Alice    | 1             |
| 2      | Michael  | 1             |
| 3      | Caroline | 2             |
| 4      | David    | 5             |
| 5      | Emma     | NULL          |

Table courses:

| **id** | **name**   |
| ------ | ---------- |
| 1      | HTML5      |
| 2      | CSS3       |
| 3      | JavaScript |
| 4      | PHP        |
| 5      | MySQL      |

```Java
SELECT students.name, courses.name
FROM students
INNER JOIN courses  // or just JOIN
ON students.course_id = courses.id
```

The resulting table would be:

| **students_name** | **course_name** |
| ----------------- | --------------- |
| Alice             | HTML5           |
| Michael           | HTML5           |
| Caroline          | CSS3            |
| David             | MySQL           |

Produces a set of records which **match in both tables**!

[image assetsSrc="Joins-Subqueries-And-Indices(1).png" /]

**LEFT JOIN**:

```Java
SELECT students.name, courses.name
FROM students
LEFT JOIN courses
ON students.course_id = courses.id
```

And this is the resulting table:

| **students_name** | **courses_name** |
| ----------------- | ---------------- |
| Alice             | HTML5            |
| Michael           | HTML5            |
| Caroline          | CSS3             |
| David             | MySQL            |
| Emma              | NULL             |

Matches every entry in **left** table regardless of match in the **right**.

[image assetsSrc="Joins-Subqueries-And-Indices(2).png" /]

**RIGHT JOIN**:

```Java
SELECT students.name, courses.name
FROM students
RIGHT JOIN courses
ON students.course_id = courses.id
```

And this is the resulting table:

| **students_name** | **courses_name** |
| ----------------- | ---------------- |
| Alice             | HTML5            |
| Michael           | HTML5            |
| Caroline          | CSS3             |
| NULL              | JavaScript       |
| NULL              | PHP              |
| David             | MySQL            |

Matches every entry in **right** table regardless of match in the **left**.

[image assetsSrc="Joins-Subqueries-And-Indices(3).png" /]

**OUTER (FULL JOIN)**:

Returns all records in both tables regardless of **any** match

- Less useful than **INNER**, **LEFT** or **RIGHT JOINs** and it's **not implemented in MySQL**.
- We can use **UNION** of a **LEFT** and **RIGHT JOIN**.

[image assetsSrc="Joins-Subqueries-And-Indices(4).png" /]

**UNION of LEFT and RIGHT JOIN**:

```Java
SELECT students.name, courses.name
FROM students
LEFT JOIN courses
ON students.course_id = courses.id

UNION

SELECT students.name, courses.name
FROM students
RIGHT JOIN courses
ON students.course_id = courses.id
```

And this is the resulting table:

| **students_name** | **courses_name** |
| ----------------- | ---------------- |
| Alice             | HTML5            |
| Michael           | HTML5            |
| Caroline          | CSS3             |
| David             | MySQL            |
| Emma              | NULL             |
| NULL              | JavaScript       |
| NULL              | PHP              |

**CROSS JOIN(1)**

- Produces a set of associated rows of two tables
  - Multiplication of each row in the first table with each in second.
  - The result is a **Cartesian** product, when there's **no condition** in the **WHERE** clause.

```Java
SELECT * FROM courses AS c
CROSS JOIN students AS s;  // No Join Condition
```

**CROSS JOIN(2)**

[image assetsSrc="Joins-Subqueries-And-Indices(5).png" /]

**Join Overview**

[image assetsSrc="Joins-Subqueries-And-Indices(6).png" /]

INNER JOIN

[image assetsSrc="Joins-Subqueries-And-Indices(7).png" /]

LEFT JOIN

[image assetsSrc="Joins-Subqueries-And-Indices(8).png" /]

RIGHT JOIN

[image assetsSrc="Joins-Subqueries-And-Indices(9).png" /]

[/slide]

[slide hideTitle]

# Problem: Managers

[code-task title="Problem: Managers" taskId="6348adff-105f-4b37-b315-8fd114592db1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to retrieve information about the managers – **id**, **full_name**, **deparment_id** and **department_name**.

Select the **first 5** departments ordered by **employee_id**.

**Run your query statements & submit the output from the queries as plain text**.

## Examples

| **employee_id** | **full_name**      | **department_id** | **department_name** |
| --------------- | ------------------ | ----------------- | ------------------- |
| 3               | Roberto Tamburello | 10                | Finance             |
| 4               | Rob Walters        | 2                 | Tool Design         |
| ...             | ...                | ...               | ...                 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Roberto Tamburello
10
Finance
4
Rob Walters
2
Tool Design
6
David Bradley
5
Purchasing
12
Terri Duffy
1
Engineering
21
Peter Krebs
8
Production Control
[/input]
[output]
3
Roberto Tamburello
10
Finance
4
Rob Walters
2
Tool Design
6
David Bradley
5
Purchasing
12
Terri Duffy
1
Engineering
21
Peter Krebs
8
Production Control
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Managers

[code-task title="Problem: Managers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to retrieve information about the managers – **id**, **full_name**, **deparment_id** and **department_name**.

Select the **first 5** departments ordered by **employee_id**.

**Run your query statements & submit the output from the queries as plain text**.

## Examples

| **employee_id** | **full_name**      | **department_id** | **department_name** |
| --------------- | ------------------ | ----------------- | ------------------- |
| 3               | Roberto Tamburello | 10                | Finance             |
| 4               | Rob Walters        | 2                 | Tool Design         |
| ...             | ...                | ...               | ...                 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Roberto Tamburello
10
Finance
4
Rob Walters
2
Tool Design
6
David Bradley
5
Purchasing
12
Terri Duffy
1
Engineering
21
Peter Krebs
8
Production Control
[/input]
[output]
3
Roberto Tamburello
10
Finance
4
Rob Walters
2
Tool Design
6
David Bradley
5
Purchasing
12
Terri Duffy
1
Engineering
21
Peter Krebs
8
Production Control
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Towns Addresses

[code-task title="Problem: Towns Addresses" taskId="afa0ba53-d9d5-4714-a011-3677f53cf5eb" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to get information about the **addresses** in the database, which are in **San Francisco**, **Sofia** or **Carnation**.

Retrieve **town_id**, **town_name**, **address_text**.

Order the result by **town_id**, then by **address_id**.

**Run your query statements & submit the output from the queries as plain text**.

## Examples

| **town_id** | **town_name** | **address_text** |
| ----------- | ------------- | ---------------- |
| 9           | San Fransisco | 1234 Seaside Way |
| 9           | San Fransisco | 5725 Glaze Drive |
| 15          | Carnation     | 1411 Ranch Drive |
| ...         | ...           | ...              |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
9
San Francisco
1234 Seaside Way
9
San Francisco
5725 Glaze Drive
15
Carnation
1411 Ranch Drive
15
Carnation
3074 Arbor Drive
15
Carnation
390 Ridgewood Ct.
15
Carnation
9666 Northridge Ct.
15
Carnation
9752 Jeanne Circle
32
Sofia
163 Nishava Str, ent A, apt. 1
[/input]
[output]
9
San Francisco
1234 Seaside Way
9
San Francisco
5725 Glaze Drive
15
Carnation
1411 Ranch Drive
15
Carnation
3074 Arbor Drive
15
Carnation
390 Ridgewood Ct.
15
Carnation
9666 Northridge Ct.
15
Carnation
9752 Jeanne Circle
32
Sofia
163 Nishava Str, ent A, apt. 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Towns Addresses

[code-task title="Problem: Towns Addresses" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to get information about the **addresses** in the database, which are in **San Francisco**, **Sofia** or **Carnation**.

Retrieve **town_id**, **town_name**, **address_text**.

Order the result by **town_id**, then by **address_id**.

**Run your query statements & submit the output from the queries as plain text**.

## Examples

| **town_id** | **town_name** | **address_text** |
| ----------- | ------------- | ---------------- |
| 9           | San Fransisco | 1234 Seaside Way |
| 9           | San Fransisco | 5725 Glaze Drive |
| 15          | Carnation     | 1411 Ranch Drive |
| ...         | ...           | ...              |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
9
San Francisco
1234 Seaside Way
9
San Francisco
5725 Glaze Drive
15
Carnation
1411 Ranch Drive
15
Carnation
3074 Arbor Drive
15
Carnation
390 Ridgewood Ct.
15
Carnation
9666 Northridge Ct.
15
Carnation
9752 Jeanne Circle
32
Sofia
163 Nishava Str, ent A, apt. 1
[/input]
[output]
9
San Francisco
1234 Seaside Way
9
San Francisco
5725 Glaze Drive
15
Carnation
1411 Ranch Drive
15
Carnation
3074 Arbor Drive
15
Carnation
390 Ridgewood Ct.
15
Carnation
9666 Northridge Ct.
15
Carnation
9752 Jeanne Circle
32
Sofia
163 Nishava Str, ent A, apt. 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Employees Without Managers

[code-task title="Problem: Employees Without Managers" taskId="49bb3e9a-cfd0-4b4e-804e-f43ac7182c82" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to get information about **employee_id**, **first_name**, **last_name**, **department_id** and **salary** for all employees who **don't have** a manager.

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
109
Ken
Sanchez
16
125500.0000
291
Svetlin
Nakov
6
48000.0000
292
Martin
Kulov
6
48000.0000
293
George
Denchev
6
48000.0000
[/input]
[output]
109
Ken
Sanchez
16
125500.0000
291
Svetlin
Nakov
6
48000.0000
292
Martin
Kulov
6
48000.0000
293
George
Denchev
6
48000.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Employees Without Managers

[code-task title="Problem: Employees Without Managers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to get information about **employee_id**, **first_name**, **last_name**, **department_id** and **salary** for all employees who **don't have** a manager.

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
109
Ken
Sanchez
16
125500.0000
291
Svetlin
Nakov
6
48000.0000
292
Martin
Kulov
6
48000.0000
293
George
Denchev
6
48000.0000
[/input]
[output]
109
Ken
Sanchez
16
125500.0000
291
Svetlin
Nakov
6
48000.0000
292
Martin
Kulov
6
48000.0000
293
George
Denchev
6
48000.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
