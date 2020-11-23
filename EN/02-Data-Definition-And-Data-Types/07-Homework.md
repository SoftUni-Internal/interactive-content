[slide]

# Homework

[/slide]

[slide hideTitle]

# Problem: Create Database

[code-task title="Problem: Create Database" taskId="c1031a4b-ea2c-4224-821c-5eb6a43dc3d2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```

[/code-editor]
[task-description]

## Description

You now know how to create database using the GUI of the Workbench.

Now it's time to create it using SQL queries.

In that task (and the several following it) you will be required to create the database from the previous exercise **using only SQL queries**.

Firstly, just **create new database** named **minions**.

[/task-description]

[/code-task]

[/slide]

[slide hideTitle]

# Problem: Create Tables

[code-task title="Problem: Create Database" taskId="fdacd1d9-9dba-44bf-942c-c57457923a20" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```

[/code-editor]
[task-description]

## Description

In the newly created database Minions add table **minions (id, name, age)**.

Then add new table **towns (town_id, name)**.

Set **id and town_id** columns of both tables to be **primary key** as **constraint**, id's must be **auto increment**.

Submit yours create table queries in Judge together for both tables (one after another separated by ";") as **Run queries & check DB**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'minions'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
and lower(table_name) = 'minions'
order by lower(COLUMN_NAME);

SELECT lower(TABLE_NAME), lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'towns' AND lower(COLUMN_NAME) = 'town_id'
ORDER by lower(COLUMN_NAME);
[/input]
[output]
minions
age
minions
id
minions
name
id
towns
town_id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME) as t
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = database()
and lower(table_name) = 'minions';
[/input]
[output]
minions
[/output]
[/test]
[test]
[input]
SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'minions'
order by lower(COLUMN_NAME);
[/input]
[output]
age
id
name
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
and lower(table_name) = 'minions';
[/input]
[output]
id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME) as t
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = database()
and lower(table_name) = 'towns';
[/input]
[output]
towns
[/output]
[/test]
[test]
[input]
SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'towns' AND lower(COLUMN_NAME) = 'town_id';
[/input]
[output]
town_id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
and lower(table_name) = 'towns' AND lower(COLUMN_NAME) = 'town_id';
[/input]
[output]
town_id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Homework Results

[tasks-results/]

[/slide]
