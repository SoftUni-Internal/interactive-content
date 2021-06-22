
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