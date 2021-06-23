
[slide hideTitle]
# Problem with Solution: Many-To-Many Relationship
[code-task title="One-To-One Relationship" taskId="table-relations-many-to-many-relationship" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
## Description
Create two tables: 

- **exams** 
| **exam_id** | **name** | 
| --- | --- | 
| 101 | Spring MVC |
| 102 | Neo4j |
| 103 | Oracle 11g |

- **students**
| **student_id** | **name** | 
| --- | --- |  
| 1   | Mila | 
| 2 | Toni | 
| 3 | Ron | 

- **students_exams**
| **student_id** | **exam_id** | 
| --- | --- |  
| 1   | 101 | 
| 1 | 102 | 
| 2 | 101 |
| 3 | 103 |
| 2 | 102 |
| 2 | 103 |

Use the appropriate data types.


**Insert the data from the examples above.**

-	Add primary and foreign keys
-	Keep in mind that the **student_exams** table should have a **composite** primary key

[/task-description]
[code-io /]
[tests]
[test open]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students'
order by lower(COLUMN_NAME);

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'exams'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'exams'
order by lower(COLUMN_NAME);

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students_exams'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students_exams'
order by lower(COLUMN_NAME);


SELECT COLUMN_NAME AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('students');
   
   SELECT COLUMN_NAME AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('exams');
   
   
  
SELECT 
  lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
  REFERENCED_TABLE_SCHEMA = database() AND
  lower(REFERENCED_COLUMN_NAME) = 'student_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'students';
  
  
  
SELECT 
  lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
  REFERENCED_TABLE_SCHEMA = database() AND
  lower(REFERENCED_COLUMN_NAME) = 'exam_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'exams';
  
  

select \* from 
students s inner join students_exams se on s.student_id = se.student_id 
inner join exams e on e.exam_id = se.exam_id
order by s.student_id, e.exam_id;
[/input]
[output]
students
name
student_id
exams
exam_id
name
students_exams
exam_id
student_id
student_id
exam_id
students_exams
student_id
students
student_id
students_exams
exam_id
exams
exam_id
1
Mila
1
101
101
Spring MVC
1
Mila
1
102
102
Neo4j
2
Toni
2
101
101
Spring MVC
2
Toni
2
102
102
Neo4j
2
Toni
2
103
103
Oracle 11g
3
Ron
3
103
103
Oracle 11g
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students'
order by lower(COLUMN_NAME);
[/input]
[output]
students
name
student_id
[/output]
[/test]
[test]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'exams'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'exams'
order by lower(COLUMN_NAME);
[/input]
[output]
exams
exam_id
name
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students_exams'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students_exams'
order by lower(COLUMN_NAME);
[/input]
[output]
students_exams
exam_id
student_id
[/output]
[/test]
[test]
[input]

SELECT COLUMN_NAME AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('students');
[/input]
[output]
student_id
[/output]
[/test]
[test]
[input]

SELECT COLUMN_NAME AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('exams');
[/input]
[output]
exam_id
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
  lower(REFERENCED_COLUMN_NAME) = 'student_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'students';
[/input]
[output]
students_exams
student_id
students
student_id
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
  lower(REFERENCED_COLUMN_NAME) = 'exam_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'exams';
[/input]
[output]
students_exams
exam_id
exams
exam_id
[/output]
[/test]
[test]
[input]

select \* from 
students s inner join students_exams se on s.student_id = se.student_id 
inner join exams e on e.exam_id = se.exam_id
order by s.student_id, e.exam_id;
[/input]
[output]
1
Mila
1
101
101
Spring MVC
1
Mila
1
102
102
Neo4j
2
Toni
2
101
101
Spring MVC
2
Toni
2
102
102
Neo4j
2
Toni
2
103
103
Oracle 11g
3
Ron
3
103
103
Oracle 11g
[/output]
[/test]
[/tests]
[/code-task]
[/slide]