[slide]

# Table Relations

Now let's have a closer look over **table-ralations**.

Table relations is basically connecting two tables by a common field, often named the same way.

There are several things you must know before creating your first relation.

- The **foreign key** is an **indetifier** of a record located in another table (usually its a primary key.) **It must be unique**.

- By using relationships we avoid repeating data in the database.

- Relationships have multiplicity:
    - **One-to-many** - e.g. mountains/peaks
    - **Many-to-many** - e.g. student/course
    - **One-to-one** - e.g. driver/driver licence


## One-To-Many

For the referenced table it's a constraint that the referenced column is unique, otherwise the database won't know with which record it should connect the references. 
The constrains for the referencing table are that the type of foreign_key matches the referenced type as well as that the foreign key must be of an already existing property.

[image assetsSrc="Table-Relations.png" /]

Here we can examine **One-To-Many** relationship.

Peraprahsed: **"One country has many cities"**.

One-to-many relationship is done by adding a unique identifier in a enitity and than referencing it from another entity with through a foreign key constraint.

Foreign key is introduced with this code:
``` java 
CONSTRAINT fk_peaks_mountains            //Giving a name of the constraint/foreign key by convention starting with "fk"
FOREIGN KEY (mountain_id)               //Setting a column for a foreign key
REFERENCES mountains(mountain_id);      //referencing the unique identifier in another column.
```

[/slide]

[slide hideTitle]
# Problem: Mountains and Peaks
[code-task title="Problem: Mountains and Peaks" taskId="fdf83a27-ac8d-42f0-9f7b-5571c41ccf6b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a query to create two tables – **mountains** and **peaks** and **link their fields properly**. Tables should have:

-	Mountains:
  -	**id** 
  -	**name**
-	Peaks: 
  - **id**
  -	**name**
  -	**mountain_id**

Check your solutions using the "**Run Queries and Check DB**" strategy.

## Examples


[/task-description]
[code-io /]
[tests]
[test]
[input]
SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'mountains'
order by lower(column_name);


SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'peaks'
order by lower(column_name);
[/input]
[output]
id
id
mountain_id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'mountains'
order by lower(column_name);


SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'peaks'
order by lower(column_name);
[/input]
[output]
id
id
mountain_id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]