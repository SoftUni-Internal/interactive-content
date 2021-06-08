# Table Customization

[slide hideTitle]

# Custom column properties

## Primary Key

```Java
id INT NOT NULL PRIMARY KEY // PRIMARY KEY is a column property
```

## Auto-Increment (Identity)

```Java
id INT AUTO_INCREMENT PRIMARY KEY // Auto-Increment PRIMARY KEY
```

## Unique constraint – no repeating values in entire table

```jAVA
EMAIL varchar(50) UNIQUE
```

## Default value – if not specified (otherwise set to NULL)

```Java
balance DECIMAL(10, 2) DEFAULT 0 // Default value set to 0
```

[/slide]

[slide hideTitle]

# Problems: Create and Insert

1. Create new database called `gamebar`
2. Create Tables:
   - `employees` - id, first_name, last_name
   - `categories` - id, name
   - `products` - id, name, category_id
3. Insert Data:
   - Populate the `employees` table with 3 test values

[/slide]

[slide hideTitle]

# Problem: Create Tables

[code-task title="Problem: Create Tables" taskId="0423b2de-8ec2-4d0d-8280-eb7cf9ab62c2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

When we create tables, we specify the database we want to add them to.

Use the "**USE**" clause.

**Run your query statements & submit the output from the queries as plain text**.

Table "**employees**":

- id – **INT, primary key, AUTO_INCREMENT**;
- first_name – **VARCHAR, NOT NULL**;
- last_name – **VARCHAR, NOT NULL**;

Create the "**categories**" and "**products**" tables analogically:

Table "**categories**":

- id – **INT, primary key, AUTO_INCREMENT**;
- name – **VARCHAR, NOT NULL**;
  Table "**products**":
- id – **INT, primary key, AUTO_INCREMENT**;
- name – **VARCHAR, NOT NULL**;
- category_id – **INT, NOT NULL** – it is not a foreign key for now.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
employees
first_name
employees
id
employees
last_name
id
categories
id
categories
name
id
products
category_id
products
id
products
name
id
[/input]
[output]
employees
first_name
employees
id
employees
last_name
id
categories
id
categories
name
id
products
category_id
products
id
products
name
id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Create Tables

[code-task title="Problem: Create Tables" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

When we create tables, we specify the database we want to add them to.

Use the "**USE**" clause.

**Run your query statements & submit the output from the queries as plain text**.

Table "**employees**":

- id – **INT, primary key, AUTO_INCREMENT**;
- first_name – **VARCHAR, NOT NULL**;
- last_name – **VARCHAR, NOT NULL**;

Create the "**categories**" and "**products**" tables analogically:

Table "**categories**":

- id – **INT, primary key, AUTO_INCREMENT**;
- name – **VARCHAR, NOT NULL**;
  Table "**products**":
- id – **INT, primary key, AUTO_INCREMENT**;
- name – **VARCHAR, NOT NULL**;
- category_id – **INT, NOT NULL** – it is not a foreign key for now.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
employees
first_name
employees
id
employees
last_name
id
categories
id
categories
name
id
products
category_id
products
id
products
name
id
[/input]
[output]
employees
first_name
employees
id
employees
last_name
id
categories
id
categories
name
id
products
category_id
products
id
products
name
id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Insert Data in Tables

[code-task title="Problem: Insert Data in Tables" taskId="5a1cda6f-110a-4d66-9373-8c33071ea14c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Inserting data can be done with a query too.

To do that, use the "**INSERT**" clause. 

Populate the "**employees**" table with 3 test values.

[/task-description]
[code-io /]
[tests]
[test]
[input]
3
[/input]
[output]
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Insert Data in Tables

[code-task title="Problem: Insert Data in Tables" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Inserting data can be done with a query too.

To do that, use the "**INSERT**" clause. 

Populate the "**employees**" table with 3 test values.

[/task-description]
[code-io /]
[tests]
[test]
[input]
3
[/input]
[output]
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
