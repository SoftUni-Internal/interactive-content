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