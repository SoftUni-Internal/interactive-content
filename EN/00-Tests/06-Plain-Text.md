[slide hideTitle]
# Problem: Find All Information About Departments
[code-task title="Problem: Find All Information About Departments" taskId="ff777793-c543-4504-8b1d-461a3a1351b2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here

        1
Engineering
12
2
Tool Design
4
3
Sales
273
4
Marketing
46
5
Purchasing
6
6
Research and Development
42
7
Production
148
8
Production Control
21
9
Human Resources
30
10
Finance
3
11
Information Services
42
12
Document Control
90
13
Quality Assurance
274
14
Facilities and Maintenance
218
15
Shipping and Receiving
85
16
Executive
109
    }
}
```
[/code-editor]
[task-description]
## Description

Download and get familiar with the **soft_uni, diablo and geography** database schemas and tables. 

You will use them in this and the following exercises to write queries. 

**Queries for SoftUni Database**

Write a SQL query to find **all available information about the departments.**

**Sort the information by id.**

 Submit your query statements as **Prepare DB & run queries.** 

## Examples
| **department_id** | **name** | **manager_id** |
| --- | --- | --- |
| 1  | Engineering  | 12  |
| 2  | Tool Design  | 4  |
| 3  | Sales  | 273  |
| …  | …  | …  |
|  |  | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
Engineering
12
2
Tool Design
4
3
Sales
273
4
Marketing
46
5
Purchasing
6
6
Research and Development
42
7
Production
148
8
Production Control
21
9
Human Resources
30
10
Finance
3
11
Information Services
42
12
Document Control
90
13
Quality Assurance
274
14
Facilities and Maintenance
218
15
Shipping and Receiving
85
16
Executive
109
[/input]
[output]
1
Engineering
12
2
Tool Design
4
3
Sales
273
4
Marketing
46
5
Purchasing
6
6
Research and Development
42
7
Production
148
8
Production Control
21
9
Human Resources
30
10
Finance
3
11
Information Services
42
12
Document Control
90
13
Quality Assurance
274
14
Facilities and Maintenance
218
15
Shipping and Receiving
85
16
Executive
109
[/output]
[/test]
[/tests]
[/code-task]
[/slide]