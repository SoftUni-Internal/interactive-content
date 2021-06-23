# Homework


[slide hideTitle]
# Problem with Solution: One-To-One Relationship
[code-task title="One-To-One Relationship" taskId="table-relations-one-to-one-relationship" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
## Description
Create two tables: 

- **people** 

| **person_id** | **first_name** | **salary** | **passport_id** |
| --- | --- | --- | --- |
| 1   | Roberto | 43300.00 | 102 |
| 2 | Tom | 56100.00 | 103 |
| 3 | Yana | 60200.00 | 101 |

- **passports**

| **passport_id** | **passport_number** |
| --- | --- |
| 101 | N34FG21B |
| 102 | K65LO4R7 |
| 103 | ZE657QP2 |

Use the appropriate data types.

Insert the data from the examples above.

- Alter the **people** table and make **person_id** a **primary key**
- Create a **foreign key** between **people** and **passports** by using the **passport_id** column
- Consider which passport field must be **UNIQUE**
- Format **salary** to the **second** digit after the decimal point

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'people'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'people'
order by lower(COLUMN_NAME);

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'passports'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'passports'
order by lower(COLUMN_NAME);


SELECT TABLE_NAME, COUNT(\*) AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('passports', 'people')
GROUP BY TABLE_NAME
ORDER BY TABLE_NAME;

SELECT lower(column_name)
FROM INFORMATION_SCHEMA.columns
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'people'
  and column_name = 'passport_id'
  and column_key = 'UNI'
order by lower(column_name);

SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(REFERENCED_COLUMN_NAME) = 'passport_id' AND
        lower(REFERENCED_TABLE_NAME) = 'passports'
order by tn, cn, ref_tn, ref_cn;

select \* from
    people per inner join passports pas on per.passport_id = pas.passport_id
order by per.person_id;
[/input]
[output]
people
first_name
passport_id
person_id
salary
passports
passport_id
passport_number
passports
1
people
1
passport_id
people
passport_id
passports
passport_id
1
Roberto
43300.00
102
102
K65LO4R7
2
Tom
56100.00
103
103
ZE657QP2
3
Yana
60200.00
101
101
N34FG21B
[/output]
[/test]
[test]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'people'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'people'
order by lower(COLUMN_NAME);
[/input]
[output]
people
first_name
passport_id
person_id
salary
[/output]
[/test]
[test]
[input]
SELECT lower(table_name)
	 FROM information_schema.TABLES 
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'passports';
	 SELECT lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'passports';
[/input]
[output]
passports
passport_id
passport_number
[/output]
[/test]
[test]
[input]
SELECT TABLE_NAME, COUNT(\*) AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('people')
 GROUP BY TABLE_NAME
 ORDER BY TABLE_NAME;
[/input]
[output]
people
1
[/output]
[/test]
[test]
[input]
SELECT TABLE_NAME, COUNT(\*) AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('passports')
 GROUP BY TABLE_NAME
 ORDER BY TABLE_NAME;
[/input]
[output]
passports
1
[/output]
[/test]
[test]
[input]
SELECT lower(column_name)
    FROM INFORMATION_SCHEMA.columns
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'people'
	and column_name = 'passport_id'
	 and column_key = 'UNI';
[/input]
[output]
passport_id
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
  lower(REFERENCED_COLUMN_NAME) = 'passport_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'passports';
[/input]
[output]
people
passport_id
passports
passport_id
[/output]
[/test]
[test]
[input]
select \* from 
people per inner join passports pas on per.passport_id = pas.passport_id
order by per.person_id;
[/input]
[output]
1
Roberto
43300.00
102
102
K65LO4R7
2
Tom
56100.00
103
103
ZE657QP2
3
Yana
60200.00
101
101
N34FG21B
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: One-To-Many Relationship
[code-task title="One-To-One Relationship" taskId="table-relations-one-to-many-relationship" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
## Description
Create two tables: 

- **manufacturers** 

| **manufacturer_id** | **name** | **established_on** | 
| --- | --- | --- | 
| 1   | BMW  | 01/03/1916 | 
| 2 | Tesla | 01/01/2003 | 
| 3 | Lada | 01/05/1966 | 

- **models**

| **model_id** | **name** | **manufacturer_id**|
| --- | --- | --- |
| 101 | X1 |1 |
| 102 | i6 | 1|
| 103 | Model S |2 |
| 104 | Model X | 2|
| 105 | Model 3 |2 |
| 106 | Nova |3 |

Use the appropriate data types.

**Insert the data from the examples above.**
- Add primary and foreign keys



[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database()
  and lower(TABLE_NAME) = 'manufacturers'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  and lower(TABLE_NAME) = 'manufacturers'
order by lower(COLUMN_NAME);

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database()
  and lower(TABLE_NAME) = 'models'
order by lower(table_name);


SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  and lower(TABLE_NAME) = 'models'
order by lower(COLUMN_NAME);


SELECT TABLE_NAME, COUNT(\*) AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('manufacturers', 'models')
GROUP BY TABLE_NAME
ORDER BY TABLE_NAME;


SELECT TABLE_NAME, COLUMN_NAME, COUNT(\*) AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'MUL'
  AND TABLE_NAME IN ('manufacturers', 'models')
GROUP BY TABLE_NAME, COLUMN_NAME
ORDER BY TABLE_NAME, COLUMN_NAME;

select man.manufacturer_id, man.name, date(man.established_on), m.model_id, m.name
from manufacturers man
         inner join models m on man.manufacturer_id = m.manufacturer_id
order by man.manufacturer_id;
[/input]
[output]
manufacturers
established_on
manufacturer_id
name
models
manufacturer_id
model_id
name
manufacturers
1
models
1
models
manufacturer_id
1
1
BMW
1916-03-01 00:00:00
101
X1
1
BMW
1916-03-01 00:00:00
102
i6
2
Tesla
2003-01-01 00:00:00
103
Model S
2
Tesla
2003-01-01 00:00:00
104
Model X
2
Tesla
2003-01-01 00:00:00
105
Model 3
3
Lada
1966-05-01 00:00:00
106
Nova
[/output]
[/test]
[test]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database()
  and lower(TABLE_NAME) = 'manufacturers'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  and lower(TABLE_NAME) = 'manufacturers'
order by lower(COLUMN_NAME);
[/input]
[output]
manufacturers
established_on
manufacturer_id
name
[/output]
[/test]
[test]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database()
  and lower(TABLE_NAME) = 'models'
order by lower(table_name);


SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  and lower(TABLE_NAME) = 'models'
order by lower(COLUMN_NAME);
[/input]
[output]
models
manufacturer_id
model_id
name
[/output]
[/test]
[test]
[input]
SELECT TABLE_NAME, COUNT(\*) AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('manufacturers')
 GROUP BY TABLE_NAME
 ORDER BY TABLE_NAME;
[/input]
[output]
manufacturers
1
[/output]
[/test]
[test]
[input]
SELECT TABLE_NAME, COUNT(\*) AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'PRI'
   AND TABLE_NAME IN ('models')
 GROUP BY TABLE_NAME
 ORDER BY TABLE_NAME;
[/input]
[output]
models
1
[/output]
[/test]
[test]
[input]
SELECT TABLE_NAME, COLUMN_NAME,  COUNT(\*) AS pk_count
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND COLUMN_KEY = 'MUL'
   AND TABLE_NAME IN ('manufacturers', 'models')
 GROUP BY TABLE_NAME, COLUMN_NAME
 ORDER BY TABLE_NAME, COLUMN_NAME
[/input]
[output]
models
manufacturer_id
1
[/output]
[/test]
[test]
[input]
select man.manufacturer_id, man.name, date(man.established_on), m.model_id, m.name from 
manufacturers man inner join models m on man.manufacturer_id = m.manufacturer_id
order by man.manufacturer_id;
[/input]
[output]
1
BMW
1916-03-01 00:00:00
101
X1
1
BMW
1916-03-01 00:00:00
102
i6
2
Tesla
2003-01-01 00:00:00
103
Model S
2
Tesla
2003-01-01 00:00:00
104
Model X
2
Tesla
2003-01-01 00:00:00
105
Model 3
3
Lada
1966-05-01 00:00:00
106
Nova
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: Many to Many Relationship
[code-task title="One-To-One Relationship" taskId="table-relations-many-to-many-relationship" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
## Description
Create three tables: 

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