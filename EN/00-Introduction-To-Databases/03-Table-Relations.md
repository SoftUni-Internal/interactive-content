
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