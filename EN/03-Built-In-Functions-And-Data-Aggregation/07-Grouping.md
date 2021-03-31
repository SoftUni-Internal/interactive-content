[slide hideTitle]

# Grouping

The **Group By** clause in SQL allows us to take data in to **separate groups** based on a **common property**.

[image assetsSrc="Built-in-Functions-Data-Aggregations(5).png" /]

Using **GROUP BY** we can get each **separate** group and use an **aggregate** function over it. (Average, Min, Max)

Let us take a look at this simple example using **soft_uni** database:

``` java
SELECT e.`job_title`, count(employee_id)  # This query would return a list of position 
  FROM `employees` AS e                   # titles and the number of employees assigned to each one of them.
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

# Problem with Solution: Departments Info
[code-task title="Departments Info" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-departments-info" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]

## Description

Create a query to **count** the number of employees **in each department by id**. 

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
