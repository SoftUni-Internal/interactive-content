[slide]

# Grouping

The **Group By** statement in SQL allows us to take data in to **separate groups** based on a **common property**.

[image assetsSrc="Built-in-Functions-Data-Aggregations(5).png" /]

Using **GROUP BY** we can get each **separate** group and use an **aggregate** function over it. (Average, Min, Max)

Let's take a look at this simple example using **soft_uni** database:

``` java
SELECT e.`job_title`, count(employee_id) // The result of this query will be 
  FROM `employees` AS e                  // names of positions and the number of staff working on the specific position
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

# Description:

Write a query to **count** the number of employees **in each department by id**. 

Order the information by **deparment_id**, then by **employees count**. 

**Run your query statements & submit the output from the queries as plain text.**


[/slide]

[slide hideTitle]

# Solution: Departments Info

# Description:

Write a query to **count** the number of employees **in each department by id**. 

Order the information by **deparment_id**, then by **employees count**. 

**Run your query statements & submit the output from the queries as plain text.**


[/slide]

