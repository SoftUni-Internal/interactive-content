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