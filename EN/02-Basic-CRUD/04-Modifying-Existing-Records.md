[slide hideTitle]

# Updating data

Persisting our records in the database is the first step but we will often need to modify existing data.

This can be done with the keyword **UPDATE**. 

```java
UPDATE `students`                                               
SET `age` = 14                                               
WHERE `first_name` = 'Mary' AND `last_name` = 'Johnson';
```
We choose the column or columns we want to change with the **SET** keyword.

Make sure you do not forget to filter the records you want to change otherwise the **UPDATE** operation will change the whole table.

[/slide]

[slide hideTitle]
# Problem with Solution: Update Employees Salary
TODO: Add Task

[/slide]

[slide hideTitle]

# Deleting Data

Keeping our data in check and removing the records we don't need anymore is as important as persisting our records. 

You can delete specific rows:

```java
DELETE FROM `employees`      
WHERE `employee_id` = 1;    
```

As well as in the **UPDATE** action, you should not forget to add a **WHERE** clause to filter and **DELETE** only the results you want. 

Be careful, the **DELETE** is permanent unless you have a back-up of your database.

You can also delete all records from a given table by using the **TRUNCATE** keyword (it works faster than **DELETE**).

```java
TRUNCATE TABLE `users`;   
```

[/slide]

[slide hideTitle]
# Problem with Solution: Delete from Table

TODO: ADD Task

[/slide]