[slide hideTitle]

# Updating data

Persisting our records in the database is the first step but we also want to keep the data up to date to always receive the results we expect and need.

In help comes the second part of our acronym CR**UD**.

Updating data is an important part of our work if we want to keep our data relevant.

This can be done with the keyword **UPDATE**. 

```java
UPDATE `students`                                                // On the first line we declare the operation 'UPDATE' and the chosen table
SET `age` = 14                                                   // with the keyword SET we choose the column/columns we want to change
WHERE `first_name` = 'Mary' AND `last_name` = 'Johnson';         // we should not forget to add 'WHERE' clause, otherwise we may change our whole table.
```

Make sure you do not forget to filter the records you want to change otherwise the **UPDATE** operation will change the whole table.

[/slide]

[slide hideTitle]
# Problem: Update Employees Salary
[code-task title="Problem: Update Employees Salary" taskId="e8371b74-d484-4bf3-8cf1-45f5f491bc31" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Update all employees' salaries whose **job_title** is **"Manager"** by **adding 100**. 

**Retrieve** information about **salaries** from table **employees**.

**Run your query statements & submit the output from the queries as plain text.**


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Smith
Johnson
Porter
4
1100
9
Nikolay
Ivanov
Housekeeping
4
1600
[/input]
[output]
3
Smith
Johnson
Porter
4
1100
9
Nikolay
Ivanov
Housekeeping
4
1600
[/output]
[/test]
[test]
[input]
3
Smith
Johnson
Porter
4
1100
9
Nikolay
Ivanov
Housekeeping
4
[/input]
[output]
3
Smith
Johnson
Porter
4
1100
9
Nikolay
Ivanov
Housekeeping
4
1600
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Update Employees Salary

[/slide]

[slide hideTitle]

# Deleting Data

Keeping our data in check and removing the records we don't need anymore is as important as persisting our records. 

We should learn how to do it properly as well, let's have a look.

You can delete specific rows from a given table:

```java
DELETE FROM `employees`      //Here we delete from table employees
WHERE `employee_id` = 1;     //where the condition is true.
```

As well as in the **UPDATE** action, you should not forget to add a **WHERE** clause to filter and **DELETE** only the results you want. 

Be careful, the **DELETE** is permanent and it's only reversible if you have a back-up of your database.

You can also delete all records from a given table by using the keyword **TRUNCATE** (it works faster than **DELETE**).

```java
TRUNCATE TABLE `users`;    //here we delete the whole information we persisted in the users' table.
```

[/slide]

[slide hideTitle]
# Problem: Delete from Table
[code-task title="Problem: Delete from Table" taskId="cf9712a7-79a0-4a93-8fea-ed1ab835ce22" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to delete all employees from the **"employees"** table who are in **department 2 or 1**.

 Order the information by **id**.

**Run your query statements & submit the output from the queries as plain text.**


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Smith
Johnson
Porter
4
1100
6
Ivan
Petrov
Waiter
3
990
7
Jack
Jackson
Executive Chef
3
1800
9
Nikolay
Ivanov
Housekeeping
4
1600
[/input]
[output]
3
Smith
Johnson
Porter
4
1100
6
Ivan
Petrov
Waiter
3
990
7
Jack
Jackson
Executive Chef
3
1800
9
Nikolay
Ivanov
Housekeeping
4
1600
[/output]
[/test]
[test]
[input]
3
Smith
Johnson
Porter
4
1100
6
Ivan
Petrov
Waiter
3
990
7
Jack
Jackson
Executive Chef
3
1800
9
Nikolay
Ivanov
Housekeeping
4
1600
[/input]
[output]
3
Smith
Johnson
Porter
4
1100
6
Ivan
Petrov
Waiter
3
990
7
Jack
Jackson
Executive Chef
3
1800
9
Nikolay
Ivanov
Housekeeping
4
1600
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Delete from Table

[/slide]
