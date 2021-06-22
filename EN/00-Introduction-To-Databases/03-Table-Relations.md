# Table Relations


[slide hideTitle]
# Problem with Solution: Delete Mountains
[code-task title="Delete Mountains" taskId="table-relations-delete-mountains" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
## Description
Use the tables from the **first** problem - **Mountains and Peaks**.

Write a query to create a **one-to-many** relationship between one table, holding information about **mountains** (**id**, **name**) and another table - about **peaks** (**id**, **name**, **mountain_id**), so that when a mountain gets removed from the database, all of its peaks get deleted too.


[/task-description]
[code-io /]
[tests]
[test open]
[input]
insert into mountains(id,name) values(1,"Pirin"),(2,"Rila");
insert into peaks(id,name,mountain_id) values(1, "Vihren",1),(2, "Kutelo",1),(4, "Musala",2);
delete from mountains where id = 1;
select \* from peaks;
[/input]
[output]
4
Musala
2
[/output]
[/test]
[test]
[input]
insert into mountains(name) values("Pirin"),("Rila");
insert into peaks(id,name,mountain_id) values(1, "Vihren",1),(2, "Kutelo",1),(4, "Musala",2);
delete from mountains where id = 2;
select \* from peaks;
[/input]
[output]
1
Vihren
1
2
Kutelo
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]