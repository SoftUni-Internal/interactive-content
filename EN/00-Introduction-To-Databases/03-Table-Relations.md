
[slide hideTitle]
# Problem with Solution: Self Referencing
[code-task title="Self Referencing" taskId="java-db-and-MySQL-table-relations-self-referencing" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
CREATE TABLE `teachers` (
	`teacher_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `manager_id` INT
);

INSERT INTO `teachers` 
VALUES
(101, 'John', NULL),
(102, 'Maya', 106),
(103, 'Silvia', 106),
(104, 'Ted', 105),
(105, 'Mark', 101),
(106, 'Greta', 101);

ALTER TABLE `teachers`
ADD CONSTRAINT fk_teachers_managers
FOREIGN KEY (`manager_id`)
REFERENCES `teachers`(`teacher_id`);
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
```
# test 1 : 'teachers' table name

SELECT lower(table_name)
	 FROM information_schema.TABLES 
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'teachers';

# test 2 : 'teachers' column names

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'teachers'
order by lower(COLUMN_NAME);


# test 3 : table teachers PK check

SELECT COLUMN_NAME AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('teachers');
   
# FK check

SELECT 
  lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
  REFERENCED_TABLE_SCHEMA = database() AND
  lower(REFERENCED_COLUMN_NAME) = 'teacher_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'teachers';
  
  # test 5 : data check

select * from 
teachers 
order by teacher_id;
```
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
order by teacher_id(COLUMN_NAME);
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

[slide hideTitle]
# Problem: Online Store Database

Create a new database and design the following structure:

[image assetsSrc="Table-Relations-Homework(11).png" /]
[image assetsSrc="Table-Relations-Homework(1).png" /]
[/slide]

[slide hideTitle]
# Problem: Online University Database

Create a new database and design the following structure: 

[image assetsSrc="Table-Relations-Homework(2).png" /]
[image assetsSrc="Table-Relations-Homework.png" /]
[/slide]