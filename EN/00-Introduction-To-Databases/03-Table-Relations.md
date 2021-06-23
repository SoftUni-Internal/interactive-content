
[slide hideTitle]
# Problem with Solution: Self Referencing
[code-task title="One-To-One Relationship" taskId="table-relations-self-referencing" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
## Description
Create a tables: 

- **teachers** 

| **teacher_id** | **name** | **manager_id**|
| --- | --- | --- |
| 101 | John ||
| 102 | Maya |106|
| 103 | Silvia |106|
| 104 | Ted |105|
| 105 | Mark |101|
| 106 | Greta |101|


**Insert the data from the example above.**
-	Add primary and foreign keys
-	The foreign key must be between **manager_id** and **teacher_id**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(table_name)
	 FROM information_schema.TABLES 
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'teachers';

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'teachers'
order by lower(COLUMN_NAME);

SELECT COLUMN_NAME AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('teachers');
  
SELECT 
  lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
  REFERENCED_TABLE_SCHEMA = database() AND
  lower(REFERENCED_COLUMN_NAME) = 'teacher_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'teachers';
  
select * from 
teachers 
order by teacher_id;
[/input]
[output]
teachers
manager_id
name
teacher_id
teacher_id
teachers
manager_id
teachers
teacher_id
101
John

102
Maya
106
103
Silvia
106
104
Ted
105
105
Mark
101
106
Greta
101
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
	 FROM information_schema.TABLES 
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'teachers';
[/input]
[output]
teachers
[/output]
[/test]
[test]
[input]

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'teachers'
order by lower(COLUMN_NAME);
[/input]
[output]
manager_id
name
teacher_id
[/output]
[/test]
[test]
[input]

SELECT COLUMN_NAME AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('teachers');
[/input]
[output]
teacher_id
[/output]
[/test]
[test]
[input]

SELECT 
  lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
  REFERENCED_TABLE_SCHEMA = database() AND
  lower(REFERENCED_COLUMN_NAME) = 'teacher_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'teachers';
[/input]
[output]
teachers
manager_id
teachers
teacher_id
[/output]
[/test]
[test]
[input]
select * from 
teachers 
order by teacher_id;
[/input]
[output]
101
John

102
Maya
106
103
Silvia
106
104
Ted
105
105
Mark
101
106
Greta
101
[/output]
[/test]
[/tests]
[/code-task]
[/slide]