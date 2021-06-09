[slide hideTitle]

# The Having Clause

We can use the **HAVING** clause to summarize group records, as compared to **WHERE**, which applies to individual records only.

The **HAVING** clause operates on records returned by **GROUP BY**.

Unlike **HAVING**, the **WHERE** clause filters rows **before** the aggregation.

Any aggregated functions in the **HAVING** clause and the **SELECT** statement are executed only once.

Let us see the following **example:**

[image assetsSrc="Built-in-Functions-Data-Aggregations(6).png" /]

**HAVING syntax:**

``` java
SELECT e.`department_id`,
SUM(e.salary) AS 'TotalSalary'
FROM `employees` AS e
GROUP BY e.`department_id`
HAVING 'TotalSalary' < 25000;
```

**Output:**

| department_id | TotalSalary |
| --- | --- |
| 5 | 227800,0000 |
| 6 | 318800,0000 |
| 7 | 2535100,0000 |
| 8 | 112100,0000 |
| 9 108100,0000 |
| ..... | ..... |

[/slide]