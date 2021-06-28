# Homework


[slide hideTitle]
# Problem: One-To-One Relationship
[code-task title="One-To-One Relationship" taskId="java-db-and-MySQL-table-relations-one-to-one-relationship" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
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
# Problem: One-To-Many Relationship
[code-task title="One-To-One Relationship" taskId="java-db-and-MySQL-table-relations-one-to-many-relationship" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
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
# Problem: Many to Many Relationship
[code-task title="One-To-One Relationship" taskId="java-db-and-MySQL-table-relations-many-to-many-relationship" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
Create three tables: 

- **exams** 

| **exam_id**  | **name** | 
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


| **student_id** | **exam_id**  | 
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
# Description
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
```
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
```
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
```
select * from 
teachers 
order by teacher_id;
```
[/input]
[output]
```
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
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Online Store Database
[code-task title="Online Store Database" taskId="java-db-and-MySQL-table-relations-online-store-database" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
Create a new database and design the following structure:

[image assetsSrc="Table-Relations-Homework(1).png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'orders';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'orders'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('orders');


SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'customers';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'customers'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'customers';


SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'cities';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'cities'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'cities';



SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'items';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'items'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'items';


SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'item_types';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'item_types'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'item_types';


SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'order_items';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'order_items'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'order_items'
ORDER BY lower(COLUMN_NAME);


SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(REFERENCED_COLUMN_NAME) = 'city_id' AND
        lower(REFERENCED_TABLE_NAME) = 'cities';


SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(REFERENCED_COLUMN_NAME) = 'item_type_id' AND
        lower(REFERENCED_TABLE_NAME) = 'item_types';


SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(REFERENCED_COLUMN_NAME) = 'item_id' AND
        lower(REFERENCED_TABLE_NAME) = 'items';


SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(REFERENCED_COLUMN_NAME) = 'order_id' AND
        lower(REFERENCED_TABLE_NAME) = 'orders';


SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(REFERENCED_COLUMN_NAME) = 'customer_id' AND
        lower(REFERENCED_TABLE_NAME) = 'customers';
[/input]
[output]
orders
customer_id
int
order_id
int
order_id
customers
birthday
date
city_id
int
customer_id
int
name
varchar(50)
customer_id
cities
city_id
int
name
varchar(50)
city_id
items
item_id
int
item_type_id
int
name
varchar(50)
item_id
item_types
item_type_id
int
name
varchar(50)
item_type_id
order_items
item_id
int
order_id
int
item_id
order_id
customers
city_id
cities
city_id
items
item_type_id
item_types
item_type_id
order_items
item_id
items
item_id
order_items
order_id
orders
order_id
orders
customer_id
customers
customer_id
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'orders';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'orders'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('orders');
[/input]
[output]
orders
customer_id
int
order_id
int
order_id
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'customers';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'customers'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'customers';
[/input]
[output]
customers
birthday
date
city_id
int
customer_id
int
name
varchar(50)
customer_id
[/output]
[/test]
[test]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'cities';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'cities'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'cities';
[/input]
[output]
cities
city_id
int
name
varchar(50)
city_id
[/output]
[/test]
[test]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'items';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'items'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'items';
[/input]
[output]
items
item_id
int
item_type_id
int
name
varchar(50)
item_id
[/output]
[/test]
[test]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'item_types';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'item_types'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'item_types';
[/input]
[output]
item_types
item_type_id
int
name
varchar(50)
item_type_id
[/output]
[/test]
[test]
[input]
SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'order_items';

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'order_items'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'order_items'
 ORDER BY lower(COLUMN_NAME);
[/input]
[output]
order_items
item_id
int
order_id
int
item_id
order_id
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
  lower(REFERENCED_COLUMN_NAME) = 'city_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'cities';
[/input]
[output]
customers
city_id
cities
city_id
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
  lower(REFERENCED_COLUMN_NAME) = 'item_type_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'item_types';
[/input]
[output]
items
item_type_id
item_types
item_type_id
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
  lower(REFERENCED_COLUMN_NAME) = 'item_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'items';
[/input]
[output]
order_items
item_id
items
item_id
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
  lower(REFERENCED_COLUMN_NAME) = 'order_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'orders';
[/input]
[output]
order_items
order_id
orders
order_id
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
  lower(REFERENCED_COLUMN_NAME) = 'customer_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'customers';
[/input]
[output]
orders
customer_id
customers
customer_id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: University Database
[code-task title="University Database" taskId="java-db-and-MySQL-table-relations-university-database" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
Create a new database and design the following structure: 

[image assetsSrc="Table-Relations-Homework(2).png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'majors'
order by lower(TABLE_NAME);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'majors'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('majors');




SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students'
order by lower(TABLE_NAME);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('students');


SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'payments'
order by lower(TABLE_NAME);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'payments'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('payments');


SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'subjects'
order by  lower(table_name);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'subjects'
order by  lower(table_name);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'subjects';



SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'agenda'
order by  lower(table_name);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'agenda'
order by  lower(table_name);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'agenda';


SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(REFERENCED_COLUMN_NAME) = 'major_id' AND
        lower(REFERENCED_TABLE_NAME) = 'majors';



SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(TABLE_NAME) = 'payments' AND
        lower(REFERENCED_COLUMN_NAME) = 'student_id' AND
        lower(REFERENCED_TABLE_NAME) = 'students';



SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(REFERENCED_COLUMN_NAME) = 'subject_id' AND
        lower(REFERENCED_TABLE_NAME) = 'subjects';


SELECT
    lower(TABLE_NAME) tn,lower(COLUMN_NAME) cn, lower(REFERENCED_TABLE_NAME) ref_tn,lower(REFERENCED_COLUMN_NAME) ref_cn
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
        REFERENCED_TABLE_SCHEMA = database() AND
        lower(TABLE_NAME) = 'agenda' AND
        lower(REFERENCED_COLUMN_NAME) = 'student_id' AND
        lower(REFERENCED_TABLE_NAME) = 'students';
[/input]
[output]
majors
major_id
int
name
varchar(50)
major_id
students
major_id
int
student_id
int
student_name
varchar(50)
student_number
varchar(12)
student_id
payments
payment_amount
decimal(8,2)
payment_date
date
payment_id
int
student_id
int
payment_id
subjects
subject_id
int
subject_name
varchar(50)
subject_id
agenda
student_id
int
subject_id
int
student_id
subject_id
students
major_id
majors
major_id
payments
student_id
students
student_id
agenda
subject_id
subjects
subject_id
agenda
student_id
students
student_id
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'majors'
order by lower(TABLE_NAME);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'majors'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('majors');
[/input]
[output]
majors
major_id
int
name
varchar(50)
major_id
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students'
order by lower(TABLE_NAME);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'students'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('students');
[/input]
[output]
students
major_id
int
student_id
int
student_name
varchar(50)
student_number
varchar(12)
student_id
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'payments'
order by lower(TABLE_NAME);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'payments'
order by lower(COLUMN_NAME), lower(COLUMN_TYPE);

SELECT COLUMN_NAME AS pk_count
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME IN ('payments');
[/input]
[output]
payments
payment_amount
decimal(8,2)
payment_date
date
payment_id
int
student_id
int
payment_id
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'subjects'
order by  lower(table_name);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'subjects'
order by  lower(table_name);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'subjects';
[/input]
[output]
subjects
subject_id
int
subject_name
varchar(50)
subject_id
[/output]
[/test]
[test]
[input]

SELECT lower(table_name)
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'agenda'
order by  lower(table_name);

SELECT lower(COLUMN_NAME), lower(COLUMN_TYPE)
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database() and lower(TABLE_NAME) = 'agenda'
order by  lower(table_name);

SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = database()
  AND COLUMN_KEY = 'PRI'
  AND TABLE_NAME = 'agenda';
[/input]
[output]
agenda
student_id
int
subject_id
int
student_id
subject_id
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
  lower(REFERENCED_COLUMN_NAME) = 'major_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'majors';
[/input]
[output]
students
major_id
majors
major_id
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
  lower(TABLE_NAME) = 'payments' AND
  lower(REFERENCED_COLUMN_NAME) = 'student_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'students';
[/input]
[output]
payments
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
  lower(REFERENCED_COLUMN_NAME) = 'subject_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'subjects';
[/input]
[output]
agenda
subject_id
subjects
subject_id
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
  lower(TABLE_NAME) = 'agenda' AND
  lower(REFERENCED_COLUMN_NAME) = 'student_id' AND 
  lower(REFERENCED_TABLE_NAME) = 'students';
[/input]
[output]
agenda
student_id
students
student_id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: SoftUni Design

Create an E/R Diagram of the "**SoftUni Database**". 

There are some special relations you should check out: **employees** are **self-referenced (manager_id)** and **departments** have **One-to-One** with the **employees (manager_id)** while the **employees** have **One-to-Many (department_id)**. 

You might find it interesting how it looks on а diagram. 
[/slide]

[slide hideTitle]
# Problem: Geography Design

Create an E/R Diagram of the "**Geography Database**".
[/slide]

[slide hideTitle]
# Problem: Peaks in Rila
[code-task title="Peaks in Rila" taskId="java-db-and-MySQL-table-relations-peaks-in-rila"executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
# Description

Use the database that is called "**Geography Database**".

Display all peaks of the "**Rila**" **mountain_range**. 

Include:
-	**mountain_range**
-	**peak_name**
-	**peak_elevation**

Peaks should be sorted in descending order by **peak_elevation**.

## Example

| **mountain_range** | **peak_name** | **peak_elevation**|
| --- | --- | --- |
| Rila | Musala |2925|
| ... | ... |...|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
/\*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT \*/;
/\*!40101 SET NAMES utf8mb4 \*/;
/\*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 \*/;
/\*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' \*/;

CREATE TABLE IF NOT EXISTS `continents` (
  `continent_code` char(2) NOT NULL,
  `continent_name` varchar(50) NOT NULL,
  PRIMARY KEY (`continent_code`),
  UNIQUE KEY `PK_Continents` (`continent_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `continents` DISABLE KEYS \*/;
INSERT INTO `continents` (`continent_code`, `continent_name`) VALUES
	('AF', 'Africa'),
	('AN', 'Antarctica'),
	('AS', 'Asia'),
	('EU', 'Europe'),
	('NA', 'North America'),
	('OC', 'Oceania'),
	('SA', 'South America');
/\*!40000 ALTER TABLE `continents` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `countries` (
  `country_code` char(2) NOT NULL,
  `iso_code` char(3) NOT NULL,
  `country_name` varchar(45) NOT NULL,
  `currency_code` char(3) DEFAULT NULL,
  `continent_code` char(2) NOT NULL,
  `population` int(10) NOT NULL,
  `are_in_sq_km` int(10) NOT NULL,
  `capital` varchar(30) NOT NULL,
  PRIMARY KEY (`country_code`),
  UNIQUE KEY `PK_Countries` (`country_code`),
  KEY `fk_countries_currencies` (`currency_code`),
  KEY `fk_countries_continents` (`continent_code`),
  CONSTRAINT `fk_countries_continents` FOREIGN KEY (`continent_code`) REFERENCES `continents` (`continent_code`),
  CONSTRAINT `fk_countries_currencies` FOREIGN KEY (`currency_code`) REFERENCES `currencies` (`currency_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `countries` DISABLE KEYS \*/;
INSERT INTO `countries` (`country_code`, `iso_code`, `country_name`, `currency_code`, `continent_code`, `population`, `are_in_sq_km`, `capital`) VALUES
	('AD', 'AND', 'Andorra', 'EUR', 'EU', 84000, 468, 'Andorra la Vella'),
	('AE', 'ARE', 'United Arab Emirates', 'AED', 'AS', 4975593, 82880, 'Abu Dhabi'),
	('AF', 'AFG', 'Afghanistan', 'AFN', 'AS', 29121286, 647500, 'Kabul'),
	('AG', 'ATG', 'Antigua and Barbuda', 'XCD', 'NA', 86754, 443, 'St. John''s'),
	('AI', 'AIA', 'Anguilla', 'XCD', 'NA', 13254, 102, 'The Valley'),
	('AL', 'ALB', 'Albania', 'ALL', 'EU', 2986952, 28748, 'Tirana'),
	('AM', 'ARM', 'Armenia', 'AMD', 'AS', 2968000, 29800, 'Yerevan'),
	('AO', 'AGO', 'Angola', 'AOA', 'AF', 13068161, 1246700, 'Luanda'),
	('AQ', 'ATA', 'Antarctica', NULL, 'AN', 0, 14000000, ''),
	('AR', 'ARG', 'Argentina', 'ARS', 'SA', 41343201, 2766890, 'Buenos Aires'),
	('AS', 'ASM', 'American Samoa', 'USD', 'OC', 57881, 199, 'Pago Pago'),
	('AT', 'AUT', 'Austria', 'EUR', 'EU', 8205000, 83858, 'Vienna'),
	('AU', 'AUS', 'Australia', 'AUD', 'OC', 21515754, 7686850, 'Canberra'),
	('AW', 'ABW', 'Aruba', 'AWG', 'NA', 71566, 193, 'Oranjestad'),
	('AX', 'ALA', 'Åland', 'EUR', 'EU', 26711, 1580, 'Mariehamn'),
	('AZ', 'AZE', 'Azerbaijan', 'AZN', 'AS', 8303512, 86600, 'Baku'),
	('BA', 'BIH', 'Bosnia and Herzegovina', 'BAM', 'EU', 4590000, 51129, 'Sarajevo'),
	('BB', 'BRB', 'Barbados', 'BBD', 'NA', 285653, 431, 'Bridgetown'),
	('BD', 'BGD', 'Bangladesh', 'BDT', 'AS', 156118464, 144000, 'Dhaka'),
	('BE', 'BEL', 'Belgium', 'EUR', 'EU', 10403000, 30510, 'Brussels'),
	('BF', 'BFA', 'Burkina Faso', 'XOF', 'AF', 16241811, 274200, 'Ouagadougou'),
	('BG', 'BGR', 'Bulgaria', 'BGN', 'EU', 7148785, 110910, 'Sofia'),
	('BH', 'BHR', 'Bahrain', 'BHD', 'AS', 738004, 665, 'Manama'),
	('BI', 'BDI', 'Burundi', 'BIF', 'AF', 9863117, 27830, 'Bujumbura'),
	('BJ', 'BEN', 'Benin', 'XOF', 'AF', 9056010, 112620, 'Porto-Novo'),
	('BL', 'BLM', 'Saint Barthélemy', 'EUR', 'NA', 8450, 21, 'Gustavia'),
	('BM', 'BMU', 'Bermuda', 'BMD', 'NA', 65365, 53, 'Hamilton'),
	('BN', 'BRN', 'Brunei', 'BND', 'AS', 395027, 5770, 'Bandar Seri Begawan'),
	('BO', 'BOL', 'Bolivia', 'BOB', 'SA', 9947418, 1098580, 'Sucre'),
	('BQ', 'BES', 'Bonaire', 'USD', 'NA', 18012, 328, ''),
	('BR', 'BRA', 'Brazil', 'BRL', 'SA', 201103330, 8511965, 'Brasília'),
	('BS', 'BHS', 'Bahamas', 'BSD', 'NA', 301790, 13940, 'Nassau'),
	('BT', 'BTN', 'Bhutan', 'BTN', 'AS', 699847, 47000, 'Thimphu'),
	('BV', 'BVT', 'Bouvet Island', 'NOK', 'AN', 0, 49, ''),
	('BW', 'BWA', 'Botswana', 'BWP', 'AF', 2029307, 600370, 'Gaborone'),
	('BY', 'BLR', 'Belarus', 'BYR', 'EU', 9685000, 207600, 'Minsk'),
	('BZ', 'BLZ', 'Belize', 'BZD', 'NA', 314522, 22966, 'Belmopan'),
	('CA', 'CAN', 'Canada', 'CAD', 'NA', 33679000, 9984670, 'Ottawa'),
	('CC', 'CCK', 'Cocos Islands', 'AUD', 'AS', 628, 14, 'West Island'),
	('CD', 'COD', 'Democratic Republic of the Congo', 'CDF', 'AF', 70916439, 2345410, 'Kinshasa'),
	('CF', 'CAF', 'Central African Republic', 'XAF', 'AF', 4844927, 622984, 'Bangui'),
	('CG', 'COG', 'Republic of the Congo', 'XAF', 'AF', 3039126, 342000, 'Brazzaville'),
	('CH', 'CHE', 'Switzerland', 'CHF', 'EU', 7581000, 41290, 'Berne'),
	('CI', 'CIV', 'Ivory Coast', 'XOF', 'AF', 21058798, 322460, 'Yamoussoukro'),
	('CK', 'COK', 'Cook Islands', 'NZD', 'OC', 21388, 240, 'Avarua'),
	('CL', 'CHL', 'Chile', 'CLP', 'SA', 16746491, 756950, 'Santiago'),
	('CM', 'CMR', 'Cameroon', 'XAF', 'AF', 19294149, 475440, 'Yaoundé'),
	('CN', 'CHN', 'China', 'CNY', 'AS', 1330044000, 9596960, 'Beijing'),
	('CO', 'COL', 'Colombia', 'COP', 'SA', 47790000, 1138910, 'Bogotá'),
	('CR', 'CRI', 'Costa Rica', 'CRC', 'NA', 4516220, 51100, 'San José'),
	('CU', 'CUB', 'Cuba', 'CUP', 'NA', 11423000, 110860, 'Havana'),
	('CV', 'CPV', 'Cape Verde', 'CVE', 'AF', 508659, 4033, 'Praia'),
	('CW', 'CUW', 'Curacao', 'ANG', 'NA', 141766, 444, 'Willemstad'),
	('CX', 'CXR', 'Christmas Island', 'AUD', 'AS', 1500, 135, 'The Settlement'),
	('CY', 'CYP', 'Cyprus', 'EUR', 'EU', 1102677, 9250, 'Nicosia'),
	('CZ', 'CZE', 'Czech Republic', 'CZK', 'EU', 10476000, 78866, 'Prague'),
	('DE', 'DEU', 'Germany', 'EUR', 'EU', 81802257, 357021, 'Berlin'),
	('DJ', 'DJI', 'Djibouti', 'DJF', 'AF', 740528, 23000, 'Djibouti'),
	('DK', 'DNK', 'Denmark', 'DKK', 'EU', 5484000, 43094, 'Copenhagen'),
	('DM', 'DMA', 'Dominica', 'XCD', 'NA', 72813, 754, 'Roseau'),
	('DO', 'DOM', 'Dominican Republic', 'DOP', 'NA', 9823821, 48730, 'Santo Domingo'),
	('DZ', 'DZA', 'Algeria', 'DZD', 'AF', 34586184, 2381740, 'Algiers'),
	('EC', 'ECU', 'Ecuador', 'USD', 'SA', 14790608, 283560, 'Quito'),
	('EE', 'EST', 'Estonia', 'EUR', 'EU', 1291170, 45226, 'Tallinn'),
	('EG', 'EGY', 'Egypt', 'EGP', 'AF', 80471869, 1001450, 'Cairo'),
	('EH', 'ESH', 'Western Sahara', 'MAD', 'AF', 273008, 266000, 'El Aaiún'),
	('ER', 'ERI', 'Eritrea', 'ERN', 'AF', 5792984, 121320, 'Asmara'),
	('ES', 'ESP', 'Spain', 'EUR', 'EU', 46505963, 504782, 'Madrid'),
	('ET', 'ETH', 'Ethiopia', 'ETB', 'AF', 88013491, 1127127, 'Addis Ababa'),
	('FI', 'FIN', 'Finland', 'EUR', 'EU', 5244000, 337030, 'Helsinki'),
	('FJ', 'FJI', 'Fiji', 'FJD', 'OC', 875983, 18270, 'Suva'),
	('FK', 'FLK', 'Falkland Islands', 'FKP', 'SA', 2638, 12173, 'Stanley'),
	('FM', 'FSM', 'Micronesia', 'USD', 'OC', 107708, 702, 'Palikir'),
	('FO', 'FRO', 'Faroe Islands', 'DKK', 'EU', 48228, 1399, 'Tórshavn'),
	('FR', 'FRA', 'France', 'EUR', 'EU', 64768389, 547030, 'Paris'),
	('GA', 'GAB', 'Gabon', 'XAF', 'AF', 1545255, 267667, 'Libreville'),
	('GB', 'GBR', 'United Kingdom', 'GBP', 'EU', 62348447, 244820, 'London'),
	('GD', 'GRD', 'Grenada', 'XCD', 'NA', 107818, 344, 'St. George''s'),
	('GE', 'GEO', 'Georgia', 'GEL', 'AS', 4630000, 69700, 'Tbilisi'),
	('GF', 'GUF', 'French Guiana', 'EUR', 'SA', 195506, 91000, 'Cayenne'),
	('GG', 'GGY', 'Guernsey', 'GBP', 'EU', 65228, 78, 'St Peter Port'),
	('GH', 'GHA', 'Ghana', 'GHS', 'AF', 24339838, 239460, 'Accra'),
	('GI', 'GIB', 'Gibraltar', 'GIP', 'EU', 27884, 6, 'Gibraltar'),
	('GL', 'GRL', 'Greenland', 'DKK', 'NA', 56375, 2166086, 'Nuuk'),
	('GM', 'GMB', 'Gambia', 'GMD', 'AF', 1593256, 11300, 'Banjul'),
	('GN', 'GIN', 'Guinea', 'GNF', 'AF', 10324025, 245857, 'Conakry'),
	('GP', 'GLP', 'Guadeloupe', 'EUR', 'NA', 443000, 1780, 'Basse-Terre'),
	('GQ', 'GNQ', 'Equatorial Guinea', 'XAF', 'AF', 1014999, 28051, 'Malabo'),
	('GR', 'GRC', 'Greece', 'EUR', 'EU', 11000000, 131940, 'Athens'),
	('GS', 'SGS', 'South Georgia and the South Sandwich Islands', 'GBP', 'AN', 30, 3903, 'Grytviken'),
	('GT', 'GTM', 'Guatemala', 'GTQ', 'NA', 13550440, 108890, 'Guatemala City'),
	('GU', 'GUM', 'Guam', 'USD', 'OC', 159358, 549, 'Hagåtña'),
	('GW', 'GNB', 'Guinea-Bissau', 'XOF', 'AF', 1565126, 36120, 'Bissau'),
	('GY', 'GUY', 'Guyana', 'GYD', 'SA', 748486, 214970, 'Georgetown'),
	('HK', 'HKG', 'Hong Kong', 'HKD', 'AS', 6898686, 1092, 'Hong Kong'),
	('HM', 'HMD', 'Heard Island and McDonald Islands', 'AUD', 'AN', 0, 412, ''),
	('HN', 'HND', 'Honduras', 'HNL', 'NA', 7989415, 112090, 'Tegucigalpa'),
	('HR', 'HRV', 'Croatia', 'HRK', 'EU', 4491000, 56542, 'Zagreb'),
	('HT', 'HTI', 'Haiti', 'HTG', 'NA', 9648924, 27750, 'Port-au-Prince'),
	('HU', 'HUN', 'Hungary', 'HUF', 'EU', 9982000, 93030, 'Budapest'),
	('ID', 'IDN', 'Indonesia', 'IDR', 'AS', 242968342, 1919440, 'Jakarta'),
	('IE', 'IRL', 'Ireland', 'EUR', 'EU', 4622917, 70280, 'Dublin'),
	('IL', 'ISR', 'Israel', 'ILS', 'AS', 7353985, 20770, ''),
	('IM', 'IMN', 'Isle of Man', 'GBP', 'EU', 75049, 572, 'Douglas'),
	('IN', 'IND', 'India', 'INR', 'AS', 1173108018, 3287590, 'New Delhi'),
	('IO', 'IOT', 'British Indian Ocean Territory', 'USD', 'AS', 4000, 60, ''),
	('IQ', 'IRQ', 'Iraq', 'IQD', 'AS', 29671605, 437072, 'Baghdad'),
	('IR', 'IRN', 'Iran', 'IRR', 'AS', 76923300, 1648000, 'Tehran'),
	('IS', 'ISL', 'Iceland', 'ISK', 'EU', 308910, 103000, 'Reykjavik'),
	('IT', 'ITA', 'Italy', 'EUR', 'EU', 60340328, 301230, 'Rome'),
	('JE', 'JEY', 'Jersey', 'GBP', 'EU', 90812, 116, 'Saint Helier'),
	('JM', 'JAM', 'Jamaica', 'JMD', 'NA', 2847232, 10991, 'Kingston'),
	('JO', 'JOR', 'Jordan', 'JOD', 'AS', 6407085, 92300, 'Amman'),
	('JP', 'JPN', 'Japan', 'JPY', 'AS', 127288000, 377835, 'Tokyo'),
	('KE', 'KEN', 'Kenya', 'KES', 'AF', 40046566, 582650, 'Nairobi'),
	('KG', 'KGZ', 'Kyrgyzstan', 'KGS', 'AS', 5508626, 198500, 'Bishkek'),
	('KH', 'KHM', 'Cambodia', 'KHR', 'AS', 14453680, 181040, 'Phnom Penh'),
	('KI', 'KIR', 'Kiribati', 'AUD', 'OC', 92533, 811, 'Tarawa'),
	('KM', 'COM', 'Comoros', 'KMF', 'AF', 773407, 2170, 'Moroni'),
	('KN', 'KNA', 'Saint Kitts and Nevis', 'XCD', 'NA', 51134, 261, 'Basseterre'),
	('KP', 'PRK', 'North Korea', 'KPW', 'AS', 22912177, 120540, 'Pyongyang'),
	('KR', 'KOR', 'South Korea', 'KRW', 'AS', 48422644, 98480, 'Seoul'),
	('KW', 'KWT', 'Kuwait', 'KWD', 'AS', 2789132, 17820, 'Kuwait City'),
	('KY', 'CYM', 'Cayman Islands', 'KYD', 'NA', 44270, 262, 'George Town'),
	('KZ', 'KAZ', 'Kazakhstan', 'KZT', 'AS', 15340000, 2717300, 'Astana'),
	('LA', 'LAO', 'Laos', 'LAK', 'AS', 6368162, 236800, 'Vientiane'),
	('LB', 'LBN', 'Lebanon', 'LBP', 'AS', 4125247, 10400, 'Beirut'),
	('LC', 'LCA', 'Saint Lucia', 'XCD', 'NA', 160922, 616, 'Castries'),
	('LI', 'LIE', 'Liechtenstein', 'CHF', 'EU', 35000, 160, 'Vaduz'),
	('LK', 'LKA', 'Sri Lanka', 'LKR', 'AS', 21513990, 65610, 'Colombo'),
	('LR', 'LBR', 'Liberia', 'LRD', 'AF', 3685076, 111370, 'Monrovia'),
	('LS', 'LSO', 'Lesotho', 'LSL', 'AF', 1919552, 30355, 'Maseru'),
	('LT', 'LTU', 'Lithuania', 'EUR', 'EU', 2944459, 65200, 'Vilnius'),
	('LU', 'LUX', 'Luxembourg', 'EUR', 'EU', 497538, 2586, 'Luxembourg'),
	('LV', 'LVA', 'Latvia', 'EUR', 'EU', 2217969, 64589, 'Riga'),
	('LY', 'LBY', 'Libya', 'LYD', 'AF', 6461454, 1759540, 'Tripoli'),
	('MA', 'MAR', 'Morocco', 'MAD', 'AF', 31627428, 446550, 'Rabat'),
	('MC', 'MCO', 'Monaco', 'EUR', 'EU', 32965, 1, 'Monaco'),
	('MD', 'MDA', 'Moldova', 'MDL', 'EU', 4324000, 33843, 'Chisinau'),
	('ME', 'MNE', 'Montenegro', 'EUR', 'EU', 666730, 14026, 'Podgorica'),
	('MF', 'MAF', 'Saint Martin', 'EUR', 'NA', 35925, 53, 'Marigot'),
	('MG', 'MDG', 'Madagascar', 'MGA', 'AF', 21281844, 587040, 'Antananarivo'),
	('MH', 'MHL', 'Marshall Islands', 'USD', 'OC', 65859, 181, 'Majuro'),
	('MK', 'MKD', 'Macedonia', 'MKD', 'EU', 2062294, 25333, 'Skopje'),
	('ML', 'MLI', 'Mali', 'XOF', 'AF', 13796354, 1240000, 'Bamako'),
	('MM', 'MMR', 'Myanmar', 'MMK', 'AS', 53414374, 678500, 'Nay Pyi Taw'),
	('MN', 'MNG', 'Mongolia', 'MNT', 'AS', 3086918, 1565000, 'Ulan Bator'),
	('MO', 'MAC', 'Macao', 'MOP', 'AS', 449198, 254, 'Macao'),
	('MP', 'MNP', 'Northern Mariana Islands', 'USD', 'OC', 53883, 477, 'Saipan'),
	('MQ', 'MTQ', 'Martinique', 'EUR', 'NA', 432900, 1100, 'Fort-de-France'),
	('MR', 'MRT', 'Mauritania', 'MRO', 'AF', 3205060, 1030700, 'Nouakchott'),
	('MS', 'MSR', 'Montserrat', 'XCD', 'NA', 9341, 102, 'Plymouth'),
	('MT', 'MLT', 'Malta', 'EUR', 'EU', 403000, 316, 'Valletta'),
	('MU', 'MUS', 'Mauritius', 'MUR', 'AF', 1294104, 2040, 'Port Louis'),
	('MV', 'MDV', 'Maldives', 'MVR', 'AS', 395650, 300, 'Malé'),
	('MW', 'MWI', 'Malawi', 'MWK', 'AF', 15447500, 118480, 'Lilongwe'),
	('MX', 'MEX', 'Mexico', 'MXN', 'NA', 112468855, 1972550, 'Mexico City'),
	('MY', 'MYS', 'Malaysia', 'MYR', 'AS', 28274729, 329750, 'Kuala Lumpur'),
	('MZ', 'MOZ', 'Mozambique', 'MZN', 'AF', 22061451, 801590, 'Maputo'),
	('NA', 'NAM', 'Namibia', 'NAD', 'AF', 2128471, 825418, 'Windhoek'),
	('NC', 'NCL', 'New Caledonia', 'XPF', 'OC', 216494, 19060, 'Noumea'),
	('NE', 'NER', 'Niger', 'XOF', 'AF', 15878271, 1267000, 'Niamey'),
	('NF', 'NFK', 'Norfolk Island', 'AUD', 'OC', 1828, 34, 'Kingston'),
	('NG', 'NGA', 'Nigeria', 'NGN', 'AF', 154000000, 923768, 'Abuja'),
	('NI', 'NIC', 'Nicaragua', 'NIO', 'NA', 5995928, 129494, 'Managua'),
	('NL', 'NLD', 'Netherlands', 'EUR', 'EU', 16645000, 41526, 'Amsterdam'),
	('NO', 'NOR', 'Norway', 'NOK', 'EU', 5009150, 324220, 'Oslo'),
	('NP', 'NPL', 'Nepal', 'NPR', 'AS', 28951852, 140800, 'Kathmandu'),
	('NR', 'NRU', 'Nauru', 'AUD', 'OC', 10065, 21, ''),
	('NU', 'NIU', 'Niue', 'NZD', 'OC', 2166, 260, 'Alofi'),
	('NZ', 'NZL', 'New Zealand', 'NZD', 'OC', 4252277, 268680, 'Wellington'),
	('OM', 'OMN', 'Oman', 'OMR', 'AS', 2967717, 212460, 'Muscat'),
	('PA', 'PAN', 'Panama', 'PAB', 'NA', 3410676, 78200, 'Panama City'),
	('PE', 'PER', 'Peru', 'PEN', 'SA', 29907003, 1285220, 'Lima'),
	('PF', 'PYF', 'French Polynesia', 'XPF', 'OC', 270485, 4167, 'Papeete'),
	('PG', 'PNG', 'Papua New Guinea', 'PGK', 'OC', 6064515, 462840, 'Port Moresby'),
	('PH', 'PHL', 'Philippines', 'PHP', 'AS', 99900177, 300000, 'Manila'),
	('PK', 'PAK', 'Pakistan', 'PKR', 'AS', 184404791, 803940, 'Islamabad'),
	('PL', 'POL', 'Poland', 'PLN', 'EU', 38500000, 312685, 'Warsaw'),
	('PM', 'SPM', 'Saint Pierre and Miquelon', 'EUR', 'NA', 7012, 242, 'Saint-Pierre'),
	('PN', 'PCN', 'Pitcairn Islands', 'NZD', 'OC', 46, 47, 'Adamstown'),
	('PR', 'PRI', 'Puerto Rico', 'USD', 'NA', 3916632, 9104, 'San Juan'),
	('PS', 'PSE', 'Palestine', 'ILS', 'AS', 3800000, 5970, ''),
	('PT', 'PRT', 'Portugal', 'EUR', 'EU', 10676000, 92391, 'Lisbon'),
	('PW', 'PLW', 'Palau', 'USD', 'OC', 19907, 458, 'Melekeok - Palau State Capital'),
	('PY', 'PRY', 'Paraguay', 'PYG', 'SA', 6375830, 406750, 'Asunción'),
	('QA', 'QAT', 'Qatar', 'QAR', 'AS', 840926, 11437, 'Doha'),
	('RE', 'REU', 'Réunion', 'EUR', 'AF', 776948, 2517, 'Saint-Denis'),
	('RO', 'ROU', 'Romania', 'RON', 'EU', 21959278, 237500, 'Bucharest'),
	('RS', 'SRB', 'Serbia', 'RSD', 'EU', 7344847, 88361, 'Belgrade'),
	('RU', 'RUS', 'Russia', 'RUB', 'EU', 140702000, 17100000, 'Moscow'),
	('RW', 'RWA', 'Rwanda', 'RWF', 'AF', 11055976, 26338, 'Kigali'),
	('SA', 'SAU', 'Saudi Arabia', 'SAR', 'AS', 25731776, 1960582, 'Riyadh'),
	('SB', 'SLB', 'Solomon Islands', 'SBD', 'OC', 559198, 28450, 'Honiara'),
	('SC', 'SYC', 'Seychelles', 'SCR', 'AF', 88340, 455, 'Victoria'),
	('SD', 'SDN', 'Sudan', 'SDG', 'AF', 35000000, 1861484, 'Khartoum'),
	('SE', 'SWE', 'Sweden', 'SEK', 'EU', 9555893, 449964, 'Stockholm'),
	('SG', 'SGP', 'Singapore', 'SGD', 'AS', 4701069, 692, 'Singapore'),
	('SH', 'SHN', 'Saint Helena', 'SHP', 'AF', 7460, 410, 'Jamestown'),
	('SI', 'SVN', 'Slovenia', 'EUR', 'EU', 2007000, 20273, 'Ljubljana'),
	('SJ', 'SJM', 'Svalbard and Jan Mayen', 'NOK', 'EU', 2550, 62049, 'Longyearbyen'),
	('SK', 'SVK', 'Slovakia', 'EUR', 'EU', 5455000, 48845, 'Bratislava'),
	('SL', 'SLE', 'Sierra Leone', 'SLL', 'AF', 5245695, 71740, 'Freetown'),
	('SM', 'SMR', 'San Marino', 'EUR', 'EU', 31477, 61, 'San Marino'),
	('SN', 'SEN', 'Senegal', 'XOF', 'AF', 12323252, 196190, 'Dakar'),
	('SO', 'SOM', 'Somalia', 'SOS', 'AF', 10112453, 637657, 'Mogadishu'),
	('SR', 'SUR', 'Suriname', 'SRD', 'SA', 492829, 163270, 'Paramaribo'),
	('SS', 'SSD', 'South Sudan', 'SSP', 'AF', 8260490, 644329, 'Juba'),
	('ST', 'STP', 'São Tomé and Príncipe', 'STD', 'AF', 175808, 1001, 'São Tomé'),
	('SV', 'SLV', 'El Salvador', 'USD', 'NA', 6052064, 21040, 'San Salvador'),
	('SX', 'SXM', 'Sint Maarten', 'ANG', 'NA', 37429, 21, 'Philipsburg'),
	('SY', 'SYR', 'Syria', 'SYP', 'AS', 22198110, 185180, 'Damascus'),
	('SZ', 'SWZ', 'Swaziland', 'SZL', 'AF', 1354051, 17363, 'Mbabane'),
	('TC', 'TCA', 'Turks and Caicos Islands', 'USD', 'NA', 20556, 430, 'Cockburn Town'),
	('TD', 'TCD', 'Chad', 'XAF', 'AF', 10543464, 1284000, 'N''Djamena'),
	('TF', 'ATF', 'French Southern Territories', 'EUR', 'AN', 140, 7829, 'Port-aux-Français'),
	('TG', 'TGO', 'Togo', 'XOF', 'AF', 6587239, 56785, 'Lomé'),
	('TH', 'THA', 'Thailand', 'THB', 'AS', 67089500, 514000, 'Bangkok'),
	('TJ', 'TJK', 'Tajikistan', 'TJS', 'AS', 7487489, 143100, 'Dushanbe'),
	('TK', 'TKL', 'Tokelau', 'NZD', 'OC', 1466, 10, ''),
	('TL', 'TLS', 'East Timor', 'USD', 'OC', 1154625, 15007, 'Dili'),
	('TM', 'TKM', 'Turkmenistan', 'TMT', 'AS', 4940916, 488100, 'Ashgabat'),
	('TN', 'TUN', 'Tunisia', 'TND', 'AF', 10589025, 163610, 'Tunis'),
	('TO', 'TON', 'Tonga', 'TOP', 'OC', 122580, 748, 'Nuku''alofa'),
	('TR', 'TUR', 'Turkey', 'TRY', 'AS', 77804122, 780580, 'Ankara'),
	('TT', 'TTO', 'Trinidad and Tobago', 'TTD', 'NA', 1228691, 5128, 'Port of Spain'),
	('TV', 'TUV', 'Tuvalu', 'AUD', 'OC', 10472, 26, 'Funafuti'),
	('TW', 'TWN', 'Taiwan', 'TWD', 'AS', 22894384, 35980, 'Taipei'),
	('TZ', 'TZA', 'Tanzania', 'TZS', 'AF', 41892895, 945087, 'Dodoma'),
	('UA', 'UKR', 'Ukraine', 'UAH', 'EU', 45415596, 603700, 'Kyiv'),
	('UG', 'UGA', 'Uganda', 'UGX', 'AF', 33398682, 236040, 'Kampala'),
	('UM', 'UMI', 'U.S. Minor Outlying Islands', 'USD', 'OC', 0, 0, ''),
	('US', 'USA', 'United States', 'USD', 'NA', 310232863, 9629091, 'Washington'),
	('UY', 'URY', 'Uruguay', 'UYU', 'SA', 3477000, 176220, 'Montevideo'),
	('UZ', 'UZB', 'Uzbekistan', 'UZS', 'AS', 27865738, 447400, 'Tashkent'),
	('VA', 'VAT', 'Vatican City', 'EUR', 'EU', 921, 0, 'Vatican'),
	('VC', 'VCT', 'Saint Vincent and the Grenadines', 'XCD', 'NA', 104217, 389, 'Kingstown'),
	('VE', 'VEN', 'Venezuela', 'VEF', 'SA', 27223228, 912050, 'Caracas'),
	('VG', 'VGB', 'British Virgin Islands', 'USD', 'NA', 21730, 153, 'Road Town'),
	('VI', 'VIR', 'U.S. Virgin Islands', 'USD', 'NA', 108708, 352, 'Charlotte Amalie'),
	('VN', 'VNM', 'Vietnam', 'VND', 'AS', 89571130, 329560, 'Hanoi'),
	('VU', 'VUT', 'Vanuatu', 'VUV', 'OC', 221552, 12200, 'Port Vila'),
	('WF', 'WLF', 'Wallis and Futuna', 'XPF', 'OC', 16025, 274, 'Mata-Utu'),
	('WS', 'WSM', 'Samoa', 'WST', 'OC', 192001, 2944, 'Apia'),
	('XK', 'XKX', 'Kosovo', 'EUR', 'EU', 1800000, 10908, 'Pristina'),
	('YE', 'YEM', 'Yemen', 'YER', 'AS', 23495361, 527970, 'Sanaa'),
	('YT', 'MYT', 'Mayotte', 'EUR', 'AF', 159042, 374, 'Mamoutzou'),
	('ZA', 'ZAF', 'South Africa', 'ZAR', 'AF', 49000000, 1219912, 'Pretoria'),
	('ZM', 'ZMB', 'Zambia', 'ZMW', 'AF', 13460305, 752614, 'Lusaka'),
	('ZW', 'ZWE', 'Zimbabwe', 'ZWD', 'AF', 11651858, 390580, 'Harare');
/\*!40000 ALTER TABLE `countries` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `countries_rivers` (
  `river_id` int(10) NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`river_id`,`country_code`),
  UNIQUE KEY `PK_CountriesRivers` (`country_code`,`river_id`),
  CONSTRAINT `fk_countries_rivers_countries` FOREIGN KEY (`country_code`) REFERENCES `countries` (`country_code`),
  CONSTRAINT `fk_countries_rivers_rivers` FOREIGN KEY (`river_id`) REFERENCES `rivers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `countries_rivers` DISABLE KEYS \*/;
INSERT INTO `countries_rivers` (`river_id`, `country_code`) VALUES
	(1, 'BI'),
	(1, 'CD'),
	(1, 'EG'),
	(1, 'ER'),
	(1, 'ET'),
	(1, 'KE'),
	(1, 'RW'),
	(1, 'SD'),
	(1, 'SS'),
	(1, 'TZ'),
	(1, 'UG'),
	(2, 'BO'),
	(2, 'BR'),
	(2, 'CO'),
	(2, 'EC'),
	(2, 'GY'),
	(2, 'PE'),
	(2, 'VE'),
	(3, 'CN'),
	(4, 'CA'),
	(4, 'US'),
	(5, 'MN'),
	(5, 'RU'),
	(6, 'CN'),
	(7, 'CN'),
	(7, 'KZ'),
	(7, 'MN'),
	(7, 'RU'),
	(8, 'AR'),
	(8, 'BO'),
	(8, 'BR'),
	(8, 'PY'),
	(8, 'UY'),
	(9, 'AO'),
	(9, 'BI'),
	(9, 'CD'),
	(9, 'CF'),
	(9, 'CG'),
	(9, 'CM'),
	(9, 'RW'),
	(9, 'TZ'),
	(9, 'ZM'),
	(10, 'CN'),
	(10, 'MN'),
	(10, 'RU'),
	(11, 'RU'),
	(12, 'CN'),
	(12, 'KH'),
	(12, 'LA'),
	(12, 'MM'),
	(12, 'TH'),
	(12, 'VN'),
	(13, 'CA'),
	(14, 'BF'),
	(14, 'BJ'),
	(14, 'CM'),
	(14, 'DZ'),
	(14, 'GN'),
	(14, 'ML'),
	(14, 'NE'),
	(14, 'NG'),
	(14, 'TD'),
	(15, 'AU'),
	(16, 'BR'),
	(17, 'RU'),
	(18, 'IQ'),
	(18, 'SY'),
	(18, 'TR'),
	(19, 'BO'),
	(19, 'BR'),
	(19, 'PE'),
	(20, 'BR'),
	(20, 'PE'),
	(21, 'CA'),
	(21, 'US'),
	(22, 'CN'),
	(22, 'IN'),
	(22, 'PK'),
	(23, 'BR'),
	(24, 'KG'),
	(24, 'KZ'),
	(24, 'TJ'),
	(24, 'UZ'),
	(25, 'CN'),
	(25, 'MM'),
	(25, 'TH'),
	(26, 'CA'),
	(26, 'US'),
	(27, 'MX'),
	(27, 'US'),
	(28, 'RU'),
	(29, 'BD'),
	(29, 'BT'),
	(29, 'CN'),
	(29, 'IN'),
	(29, 'NP'),
	(30, 'AT'),
	(30, 'BG'),
	(30, 'DE'),
	(30, 'HR'),
	(30, 'HU'),
	(30, 'RO'),
	(30, 'RS'),
	(30, 'SK');
/\*!40000 ALTER TABLE `countries_rivers` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `currencies` (
  `currency_code` char(3) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`currency_code`),
  UNIQUE KEY `PK_Currencies` (`currency_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `currencies` DISABLE KEYS \*/;
INSERT INTO `currencies` (`currency_code`, `description`) VALUES
	('AED', 'United Arab Emirates Dirham'),
	('AFN', 'Afghanistan Afghani'),
	('ALL', 'Albania Lek'),
	('AMD', 'Armenia Dram'),
	('ANG', 'Netherlands Antilles Guilder'),
	('AOA', 'Angola Kwanza'),
	('ARS', 'Argentina Peso'),
	('AUD', 'Australia Dollar'),
	('AWG', 'Aruba Guilder'),
	('AZN', 'Azerbaijan New Manat'),
	('BAM', 'Bosnia and Herzegovina Convertible Marka'),
	('BBD', 'Barbados Dollar'),
	('BDT', 'Bangladesh Taka'),
	('BGN', 'Bulgaria Lev'),
	('BHD', 'Bahrain Dinar'),
	('BIF', 'Burundi Franc'),
	('BMD', 'Bermuda Dollar'),
	('BND', 'Brunei Darussalam Dollar'),
	('BOB', 'Bolivia Boliviano'),
	('BRL', 'Brazil Real'),
	('BSD', 'Bahamas Dollar'),
	('BTN', 'Bhutan Ngultrum'),
	('BWP', 'Botswana Pula'),
	('BYR', 'Belarus Ruble'),
	('BZD', 'Belize Dollar'),
	('CAD', 'Canada Dollar'),
	('CDF', 'Congo/Kinshasa Franc'),
	('CHF', 'Switzerland Franc'),
	('CLP', 'Chile Peso'),
	('CNY', 'China Yuan Renminbi'),
	('COP', 'Colombia Peso'),
	('CRC', 'Costa Rica Colon'),
	('CUC', 'Cuba Convertible Peso'),
	('CUP', 'Cuba Peso'),
	('CVE', 'Cape Verde Escudo'),
	('CZK', 'Czech Republic Koruna'),
	('DJF', 'Djibouti Franc'),
	('DKK', 'Denmark Krone'),
	('DOP', 'Dominican Republic Peso'),
	('DZD', 'Algeria Dinar'),
	('EGP', 'Egypt Pound'),
	('ERN', 'Eritrea Nakfa'),
	('ETB', 'Ethiopia Birr'),
	('EUR', 'Euro Member Countries'),
	('FJD', 'Fiji Dollar'),
	('FKP', 'Falkland Islands (Malvinas) Pound'),
	('GBP', 'United Kingdom Pound'),
	('GEL', 'Georgia Lari'),
	('GGP', 'Guernsey Pound'),
	('GHS', 'Ghana Cedi'),
	('GIP', 'Gibraltar Pound'),
	('GMD', 'Gambia Dalasi'),
	('GNF', 'Guinea Franc'),
	('GTQ', 'Guatemala Quetzal'),
	('GYD', 'Guyana Dollar'),
	('HKD', 'Hong Kong Dollar'),
	('HNL', 'Honduras Lempira'),
	('HRK', 'Croatia Kuna'),
	('HTG', 'Haiti Gourde'),
	('HUF', 'Hungary Forint'),
	('IDR', 'Indonesia Rupiah'),
	('ILS', 'Israel Shekel'),
	('IMP', 'Isle of Man Pound'),
	('INR', 'India Rupee'),
	('IQD', 'Iraq Dinar'),
	('IRR', 'Iran Rial'),
	('ISK', 'Iceland Krona'),
	('JEP', 'Jersey Pound'),
	('JMD', 'Jamaica Dollar'),
	('JOD', 'Jordan Dinar'),
	('JPY', 'Japan Yen'),
	('KES', 'Kenya Shilling'),
	('KGS', 'Kyrgyzstan Som'),
	('KHR', 'Cambodia Riel'),
	('KMF', 'Comoros Franc'),
	('KPW', 'Korea (North) Won'),
	('KRW', 'Korea (South) Won'),
	('KWD', 'Kuwait Dinar'),
	('KYD', 'Cayman Islands Dollar'),
	('KZT', 'Kazakhstan Tenge'),
	('LAK', 'Laos Kip'),
	('LBP', 'Lebanon Pound'),
	('LKR', 'Sri Lanka Rupee'),
	('LRD', 'Liberia Dollar'),
	('LSL', 'Lesotho Loti'),
	('LYD', 'Libya Dinar'),
	('MAD', 'Morocco Dirham'),
	('MDL', 'Moldova Leu'),
	('MGA', 'Madagascar Ariary'),
	('MKD', 'Macedonia Denar'),
	('MMK', 'Myanmar (Burma) Kyat'),
	('MNT', 'Mongolia Tughrik'),
	('MOP', 'Macau Pataca'),
	('MRO', 'Mauritania Ouguiya'),
	('MUR', 'Mauritius Rupee'),
	('MVR', 'Maldives (Maldive Islands) Rufiyaa'),
	('MWK', 'Malawi Kwacha'),
	('MXN', 'Mexico Peso'),
	('MYR', 'Malaysia Ringgit'),
	('MZN', 'Mozambique Metical'),
	('NAD', 'Namibia Dollar'),
	('NGN', 'Nigeria Naira'),
	('NIO', 'Nicaragua Cordoba'),
	('NOK', 'Norway Krone'),
	('NPR', 'Nepal Rupee'),
	('NZD', 'New Zealand Dollar'),
	('OMR', 'Oman Rial'),
	('PAB', 'Panama Balboa'),
	('PEN', 'Peru Nuevo Sol'),
	('PGK', 'Papua New Guinea Kina'),
	('PHP', 'Philippines Peso'),
	('PKR', 'Pakistan Rupee'),
	('PLN', 'Poland Zloty'),
	('PYG', 'Paraguay Guarani'),
	('QAR', 'Qatar Riyal'),
	('RON', 'Romania New Leu'),
	('RSD', 'Serbia Dinar'),
	('RUB', 'Russia Ruble'),
	('RWF', 'Rwanda Franc'),
	('SAR', 'Saudi Arabia Riyal'),
	('SBD', 'Solomon Islands Dollar'),
	('SCR', 'Seychelles Rupee'),
	('SDG', 'Sudan Pound'),
	('SEK', 'Sweden Krona'),
	('SGD', 'Singapore Dollar'),
	('SHP', 'Saint Helena Pound'),
	('SLL', 'Sierra Leone Leone'),
	('SOS', 'Somalia Shilling'),
	('SPL', 'Seborga Luigino'),
	('SRD', 'Suriname Dollar'),
	('SSP', 'South Sudanese Pound'),
	('STD', 'São Tomé and Príncipe Dobra'),
	('SVC', 'El Salvador Colon'),
	('SYP', 'Syria Pound'),
	('SZL', 'Swaziland Lilangeni'),
	('THB', 'Thailand Baht'),
	('TJS', 'Tajikistan Somoni'),
	('TMT', 'Turkmenistan Manat'),
	('TND', 'Tunisia Dinar'),
	('TOP', 'Tonga Pa''anga'),
	('TRY', 'Turkey Lira'),
	('TTD', 'Trinidad and Tobago Dollar'),
	('TVD', 'Tuvalu Dollar'),
	('TWD', 'Taiwan New Dollar'),
	('TZS', 'Tanzania Shilling'),
	('UAH', 'Ukraine Hryvnia'),
	('UGX', 'Uganda Shilling'),
	('USD', 'United States Dollar'),
	('UYU', 'Uruguay Peso'),
	('UZS', 'Uzbekistan Som'),
	('VEF', 'Venezuela Bolivar'),
	('VND', 'Viet Nam Dong'),
	('VUV', 'Vanuatu Vatu'),
	('WST', 'Samoa Tala'),
	('XAF', 'Communauté Financière Africaine (BEAC) CFA Franc BEAC'),
	('XCD', 'East Caribbean Dollar'),
	('XDR', 'International Monetary Fund (IMF) Special Drawing Rights'),
	('XOF', 'Communauté Financière Africaine (BCEAO) Franc'),
	('XPF', 'Comptoirs Français du Pacifique (CFP) Franc'),
	('YER', 'Yemen Rial'),
	('ZAR', 'South Africa Rand'),
	('ZMW', 'Zambia Kwacha'),
	('ZWD', 'Zimbabwe Dollar');
/\*!40000 ALTER TABLE `currencies` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `mountains` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `mountain_range` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Mountains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `mountains` DISABLE KEYS \*/;
INSERT INTO `mountains` (`id`, `mountain_range`) VALUES
	(1, 'Alaska Range'),
	(2, 'Alborz'),
	(3, 'Andes'),
	(4, 'Balkan Mountains'),
	(5, 'Caucasus'),
	(6, 'Cordillera Neovolcanica'),
	(7, 'Ellsworth Mountains'),
	(8, 'Executive Committee Range'),
	(9, 'Himalayas'),
	(10, 'Jayawijaya Mountains'),
	(11, 'Karakoram'),
	(12, 'Kenyan Highlands'),
	(13, 'Kilimanjaro'),
	(14, 'Kilimanjaro Region'),
	(15, 'Maoke Mountains'),
	(16, 'Pirin'),
	(17, 'Rila'),
	(18, 'Saint Elias Mountains'),
	(19, 'Sentinel Range'),
	(20, 'Southern Highlands'),
	(21, 'The Sudirman Range'),
	(22, 'Trans-Mexican Volcanic Belt'),
	(23, 'Rhodope Mountains'),
	(24, 'Vitosha'),
	(25, 'Strandza'),
	(26, 'Monte Rosa');
/\*!40000 ALTER TABLE `mountains` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `mountains_countries` (
  `mountain_id` int(10) NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`mountain_id`,`country_code`),
  UNIQUE KEY `PK_MountainsContinents` (`mountain_id`,`country_code`),
  KEY `fk_mountains_countries_mountains` (`country_code`),
  CONSTRAINT `fk_mountains_countries_countries` FOREIGN KEY (`mountain_id`) REFERENCES `mountains` (`id`),
  CONSTRAINT `fk_mountains_countries_mountains` FOREIGN KEY (`country_code`) REFERENCES `countries` (`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `mountains_countries` DISABLE KEYS \*/;
INSERT INTO `mountains_countries` (`mountain_id`, `country_code`) VALUES
	(3, 'AR'),
	(4, 'BG'),
	(16, 'BG'),
	(17, 'BG'),
	(23, 'BG'),
	(24, 'BG'),
	(25, 'BG'),
	(18, 'CA'),
	(26, 'CH'),
	(3, 'CL'),
	(9, 'CN'),
	(11, 'CN'),
	(5, 'GE'),
	(10, 'ID'),
	(15, 'ID'),
	(21, 'ID'),
	(9, 'IN'),
	(2, 'IR'),
	(26, 'IT'),
	(12, 'KE'),
	(6, 'MX'),
	(22, 'MX'),
	(9, 'NP'),
	(20, 'PG'),
	(11, 'PK'),
	(5, 'RU'),
	(13, 'TZ'),
	(14, 'TZ'),
	(1, 'US');
/\*!40000 ALTER TABLE `mountains_countries` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `peaks` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `peak_name` varchar(50) NOT NULL,
  `elevation` int(10) NOT NULL,
  `mountain_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Peaks` (`id`),
  KEY `fk_peaks_mountains` (`mountain_id`),
  CONSTRAINT `fk_peaks_mountains` FOREIGN KEY (`mountain_id`) REFERENCES `mountains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `peaks` DISABLE KEYS \*/;
INSERT INTO `peaks` (`id`, `peak_name`, `elevation`, `mountain_id`) VALUES
	(62, 'Aconcagua', 6962, 3),
	(63, 'Botev', 2376, 4),
	(64, 'Carstensz Pyramid', 4884, 21),
	(65, 'Damavand', 5610, 2),
	(66, 'Dykh-Tau', 5205, 5),
	(67, 'Elbrus', 5642, 5),
	(68, 'Everest', 8848, 9),
	(69, 'Julianatop', 4760, 10),
	(70, 'K2', 8611, 11),
	(71, 'Kangchenjunga', 8586, 9),
	(72, 'Kilimanjaro', 5895, 13),
	(73, 'Malyovitsa', 2729, 17),
	(74, 'Mawenzi', 5149, 14),
	(75, 'Monte Pissis', 6793, 3),
	(76, 'Mount Giluwe', 4368, 20),
	(77, 'Mount Kenya', 5199, 12),
	(78, 'Mount Logan', 5959, 18),
	(79, 'Mount McKinley', 6194, 1),
	(80, 'Mount Shinn', 4661, 19),
	(81, 'Mount Sidley', 4285, 8),
	(82, 'Mount Tyree', 4852, 19),
	(83, 'Musala', 2925, 17),
	(84, 'Ojos del Salado', 6893, 3),
	(85, 'Pico de Orizaba', 5636, 22),
	(86, 'Puncak Trikora', 4750, 15),
	(87, 'Shkhara', 5193, 5),
	(88, 'Vihren', 2914, 16),
	(89, 'Vinson Massif', 4897, 7),
	(90, 'Golyam Perelik', 2191, 23),
	(91, 'Shirokolashki Snezhnik', 2188, 23),
	(92, 'Golyam Persenk', 2091, 23),
	(93, 'Batashki Snezhnik', 2082, 23),
	(94, 'Cerro Bonete', 6759, 3),
	(95, 'Galán', 5912, 3),
	(96, 'Mercedario', 6720, 3),
	(97, 'Pissis', 6795, 3),
	(98, 'Lhotse', 8516, 9),
	(99, 'Makalu', 8462, 9),
	(100, 'Cho Oyu', 8201, 9),
	(101, 'Kutelo', 2908, 16),
	(102, 'Banski Suhodol', 2884, 16),
	(103, 'Golyam Polezhan', 2851, 16),
	(104, 'Kamenitsa', 2822, 16),
	(105, 'Malak Polezhan', 2822, 16),
	(106, 'Malka Musala', 2902, 17),
	(107, 'Orlovets', 2685, 17),
	(108, 'Vezhen', 2198, 4),
	(109, 'Kom', 2016, 4);
/\*!40000 ALTER TABLE `peaks` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `rivers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `river_name` varchar(50) NOT NULL,
  `length` int(10) NOT NULL,
  `drainage_area` int(10) NOT NULL,
  `average_discharge` int(10) NOT NULL,
  `outflow` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Rivers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `rivers` DISABLE KEYS \*/;
INSERT INTO `rivers` (`id`, `river_name`, `length`, `drainage_area`, `average_discharge`, `outflow`) VALUES
	(1, 'Nile', 6650, 3254555, 5100, 'Mediterranean'),
	(2, 'Amazon', 6400, 7050000, 219000, 'Atlantic Ocean'),
	(3, 'Yangtze', 6300, 1800000, 31900, 'East China Sea'),
	(4, 'Mississippi', 6275, 2980000, 16200, 'Gulf of Mexico'),
	(5, 'Yenisei', 5539, 2580000, 19600, 'Kara Sea'),
	(6, 'Yellow River', 5464, 745000, 2110, 'Bohai Sea'),
	(7, 'Ob', 5410, 2990000, 12800, 'Gulf of Ob'),
	(8, 'Paraná', 4880, 2582672, 18000, 'Río de la Plata'),
	(9, 'Congo', 4700, 3680000, 41800, 'Atlantic Ocean'),
	(10, 'Amur', 4444, 1855000, 11400, 'Sea of Okhotsk'),
	(11, 'Lena', 4400, 2490000, 17100, 'Laptev Sea'),
	(12, 'Mekong', 4350, 810000, 16000, 'South China Sea'),
	(13, 'Mackenzie', 4241, 1790000, 10300, 'Beaufort Sea'),
	(14, 'Niger', 4200, 2090000, 9570, 'Gulf of Guinea'),
	(15, 'Murray', 3672, 1061000, 7670, 'Southern Ocean'),
	(16, 'Tocantins', 3650, 950000, 13598, 'Atlantic Ocean, Amazon'),
	(17, 'Volga', 3645, 1380000, 8080, 'Caspian Sea'),
	(18, 'Shatt al-Arab', 3596, 884000, 8560, 'Persian Gulf'),
	(19, 'Madeira', 3380, 1485200, 31200, 'Amazon'),
	(20, 'Purús', 3211, 63166, 8400, 'Amazon'),
	(21, 'Yukon', 3185, 850000, 6210, 'Bering Sea'),
	(22, 'Indus', 3180, 960000, 7160, 'Arabian Sea'),
	(23, 'São Francisco', 3180, 610000, 3300, 'Atlantic Ocean'),
	(24, 'Syr Darya', 3078, 219000, 7030, 'Aral Sea'),
	(25, 'Salween', 3060, 324000, 3153, 'Andaman Sea'),
	(26, 'Saint Lawrence', 3058, 1030000, 10100, 'Gulf of Saint Lawrence'),
	(27, 'Rio Grande', 3057, 570000, 820, 'Gulf of Mexico'),
	(28, 'Lower Tunguska', 2989, 473000, 3600, 'Yenisei'),
	(29, 'Brahmaputra', 2948, 1730000, 19200, 'Ganges'),
	(30, 'Danube', 2888, 817000, 7130, 'Black Sea');
/\*!40000 ALTER TABLE `rivers` ENABLE KEYS \*/;
/\*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') \*/;
/\*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) \*/;
/\*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT \*/;
[/input]
[output]
Rila
Musala
2925
Rila
Malka Musala
2902
Rila
Malyovitsa
2729
Rila
Orlovets
2685
[/output]
[/test]
[test]
[input]

CREATE TABLE IF NOT EXISTS `continents` (
  `continent_code` char(2) NOT NULL,
  `continent_name` varchar(50) NOT NULL,
  PRIMARY KEY (`continent_code`),
  UNIQUE KEY `PK_Continents` (`continent_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `countries` (
  `country_code` char(2) NOT NULL,
  `iso_code` char(3) NOT NULL,
  `country_name` varchar(45) NOT NULL,
  `currency_code` char(3) DEFAULT NULL,
  `continent_code` char(2) NOT NULL,
  `population` int(10) NOT NULL,
  `are_in_sq_km` int(10) NOT NULL,
  `capital` varchar(30) NOT NULL,
  PRIMARY KEY (`country_code`),
  UNIQUE KEY `PK_Countries` (`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `countries_rivers` (
  `river_id` int(10) NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`river_id`,`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `currencies` (
  `currency_code` char(3) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`currency_code`),
  UNIQUE KEY `PK_Currencies` (`currency_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `mountains` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `mountain_range` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Mountains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `mountains` DISABLE KEYS \*/;
INSERT INTO `mountains` (`id`, `mountain_range`) VALUES
	(17, 'Rila');
/\*!40000 ALTER TABLE `mountains` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `mountains_countries` (
  `mountain_id` int(10) NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`mountain_id`,`country_code`),
  UNIQUE KEY `PK_MountainsContinents` (`mountain_id`,`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `peaks` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `peak_name` varchar(50) NOT NULL,
  `elevation` int(10) NOT NULL,
  `mountain_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Peaks` (`id`),
  KEY `fk_peaks_mountains` (`mountain_id`),
  CONSTRAINT `fk_peaks_mountains` FOREIGN KEY (`mountain_id`) REFERENCES `mountains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `peaks` DISABLE KEYS \*/;
INSERT INTO `peaks` (`id`, `peak_name`, `elevation`, `mountain_id`) VALUES
	(1, 'Musala', 2925, 17),
	(2, 'Malka Musala', 2902, 17),
	(3, 'Malyovitsa', 2729, 17),
	(4, 'Orlovets', 2685, 17);
/\*!40000 ALTER TABLE `peaks` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `rivers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `river_name` varchar(50) NOT NULL,
  `length` int(10) NOT NULL,
  `drainage_area` int(10) NOT NULL,
  `average_discharge` int(10) NOT NULL,
  `outflow` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Rivers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
[/input]
[output]
Rila
Musala
2925
Rila
Malka Musala
2902
Rila
Malyovitsa
2729
Rila
Orlovets
2685
[/output]
[/test]
[test]
[input]

CREATE TABLE IF NOT EXISTS `continents` (
  `continent_code` char(2) NOT NULL,
  `continent_name` varchar(50) NOT NULL,
  PRIMARY KEY (`continent_code`),
  UNIQUE KEY `PK_Continents` (`continent_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `countries` (
  `country_code` char(2) NOT NULL,
  `iso_code` char(3) NOT NULL,
  `country_name` varchar(45) NOT NULL,
  `currency_code` char(3) DEFAULT NULL,
  `continent_code` char(2) NOT NULL,
  `population` int(10) NOT NULL,
  `are_in_sq_km` int(10) NOT NULL,
  `capital` varchar(30) NOT NULL,
  PRIMARY KEY (`country_code`),
  UNIQUE KEY `PK_Countries` (`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `countries_rivers` (
  `river_id` int(10) NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`river_id`,`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `currencies` (
  `currency_code` char(3) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`currency_code`),
  UNIQUE KEY `PK_Currencies` (`currency_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `mountains` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `mountain_range` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Mountains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `mountains` DISABLE KEYS \*/;
INSERT INTO `mountains` (`id`, `mountain_range`) VALUES
	(17, 'Rila'),
	(18, 'Pirin');
/\*!40000 ALTER TABLE `mountains` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `mountains_countries` (
  `mountain_id` int(10) NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`mountain_id`,`country_code`),
  UNIQUE KEY `PK_MountainsContinents` (`mountain_id`,`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `peaks` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `peak_name` varchar(50) NOT NULL,
  `elevation` int(10) NOT NULL,
  `mountain_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Peaks` (`id`),
  KEY `fk_peaks_mountains` (`mountain_id`),
  CONSTRAINT `fk_peaks_mountains` FOREIGN KEY (`mountain_id`) REFERENCES `mountains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `peaks` DISABLE KEYS \*/;
INSERT INTO `peaks` (`id`, `peak_name`, `elevation`, `mountain_id`) VALUES
	(1, 'Musala', 2925, 17),
	(2, 'Malka Musala', 2902, 17),
	(3, 'Malyovitsa', 2729, 17),
	(4, 'Orlovets', 2685, 17),
	(5, 'Vihren', 2785, 18);
/\*!40000 ALTER TABLE `peaks` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `rivers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `river_name` varchar(50) NOT NULL,
  `length` int(10) NOT NULL,
  `drainage_area` int(10) NOT NULL,
  `average_discharge` int(10) NOT NULL,
  `outflow` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Rivers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
[/input]
[output]
Rila
Musala
2925
Rila
Malka Musala
2902
Rila
Malyovitsa
2729
Rila
Orlovets
2685
[/output]
[/test]
[test]
[input]

CREATE TABLE IF NOT EXISTS `continents` (
  `continent_code` char(2) NOT NULL,
  `continent_name` varchar(50) NOT NULL,
  PRIMARY KEY (`continent_code`),
  UNIQUE KEY `PK_Continents` (`continent_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `countries` (
  `country_code` char(2) NOT NULL,
  `iso_code` char(3) NOT NULL,
  `country_name` varchar(45) NOT NULL,
  `currency_code` char(3) DEFAULT NULL,
  `continent_code` char(2) NOT NULL,
  `population` int(10) NOT NULL,
  `are_in_sq_km` int(10) NOT NULL,
  `capital` varchar(30) NOT NULL,
  PRIMARY KEY (`country_code`),
  UNIQUE KEY `PK_Countries` (`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `countries_rivers` (
  `river_id` int(10) NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`river_id`,`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `currencies` (
  `currency_code` char(3) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`currency_code`),
  UNIQUE KEY `PK_Currencies` (`currency_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `mountains` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `mountain_range` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Mountains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `mountains` DISABLE KEYS \*/;
INSERT INTO `mountains` (`id`, `mountain_range`) VALUES
	(17, 'Rila');
/\*!40000 ALTER TABLE `mountains` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `mountains_countries` (
  `mountain_id` int(10) NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`mountain_id`,`country_code`),
  UNIQUE KEY `PK_MountainsContinents` (`mountain_id`,`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `peaks` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `peak_name` varchar(50) NOT NULL,
  `elevation` int(10) NOT NULL,
  `mountain_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Peaks` (`id`),
  KEY `fk_peaks_mountains` (`mountain_id`),
  CONSTRAINT `fk_peaks_mountains` FOREIGN KEY (`mountain_id`) REFERENCES `mountains` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `peaks` DISABLE KEYS \*/;
INSERT INTO `peaks` (`id`, `peak_name`, `elevation`, `mountain_id`) VALUES
	(1, 'Malka Musala', 2902, 17),
	(2, 'Orlovets', 2685, 17),
	(3, 'Malyovitsa', 2729, 17),
	(4, 'Musala', 2925, 17);
/\*!40000 ALTER TABLE `peaks` ENABLE KEYS \*/;



CREATE TABLE IF NOT EXISTS `rivers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `river_name` varchar(50) NOT NULL,
  `length` int(10) NOT NULL,
  `drainage_area` int(10) NOT NULL,
  `average_discharge` int(10) NOT NULL,
  `outflow` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PK_Rivers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
[/input]
[output]
Rila
Musala
2925
Rila
Malka Musala
2902
Rila
Malyovitsa
2729
Rila
Orlovets
2685
[/output]
[/test]
[/tests]
[/code-task]
[/slide]