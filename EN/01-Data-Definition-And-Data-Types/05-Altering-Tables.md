# Altering Tables

[slide hideTitle]

# Altering tables using SQL (1)

A table can be changed using the keyword `ALTER`.

```Java
ALTER TABLE employees;
```

Use the keyword `ADD` to add a new column.

```Java
ALTER TABLE employees
ADD salary DECIMAL; // `salary` is the name of the column and `DECIMAL` specifies the data type
```

[/slide]

[slide hideTitle]

# Altering Tables Using SQL (2)

Delete existing column:

```Java
ALTER TABLE people
DROP COLUMN full_name; // Delete column with name `full_name`
```

Modify data type of existing column:

```Java
ALTER TABLE people
MODIFY COLUMN email VARCHAR(100); // `VARCHAR(100)` is the new data type
```

[/slide]

[slide hideTitle]

# Altering Tables Using SQL (3)

Add primary key to an existing column:

```Java
ALTER TABLE people
ADD CONSTRAINT pk_id // Constraint name
PRIMARY KEY (id); // Column name which can be more than one for composite key
```

Add unique constraint:

```Java
ALTER TABLE people
ADD CONSTRAINT uq_email // Constraint name
UNIQUE (email) // Columns
```

[/slide]

[slide hideTitle]

# Altering Tables Using SQL (4)

Set default value:

```Java
ALTER TABLE people
ALTER COLUMN balance SET DEFAULT 0; // Default value - 0, column name `balance`
```

[/slide]

[slide hideTitle]

# Problem: Alter Tables

1. Alter Table
   - Add a new column `middle_name` to the `employees` table
2. Add Constraints
   - Make `category_id` foreign key linked to `id` in table `categories`
3. Modify Columns - Change the property `VARCHAR(50)` to `VARCHAR(100)` of the `middleName` column in `employees` table

[/slide]

[slide hideTitle]

# Problem: Alter Tables

[code-task title="Problem: Alter Tables" taskId="cc46aa9d-4651-4436-9cbf-03fc15097061" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Altering the tables is done via the "**ALTER TABLE**" clause.

Add a new column – "**middle_name**" to the "**employees**" table.

[/task-description]
[code-io /]
[tests]
[test]
[input]
first_name
id
last_name
middle_name
[/input]
[output]
first_name
id
last_name
middle_name
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Alter Tables

[code-task title="Problem: Alter Tables" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Altering the tables is done via the "**ALTER TABLE**" clause.

Add a new column – "**middle_name**" to the "**employees**" table.

[/task-description]
[code-io /]
[tests]
[test]
[input]
first_name
id
last_name
middle_name
[/input]
[output]
first_name
id
last_name
middle_name
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Adding Constraints

[code-task title="Problem: Adding Constraints" taskId="41e181dc-1933-4114-aeb2-a72bc03aa241" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create the connection via a foreign key between the "**products**" and "**categories**" tables that you've created earlier.

Make "**category_id**" **foreign key linked to** "**id**" **in the** "**categories**" **table**.

[/task-description]
[code-io /]
[tests]
[test]
[input]
id
category_id
[/input]
[output]
id
category_id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Adding Constraints

[code-task title="Problem: Adding Constraints" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create the connection via a foreign key between the "**products**" and "**categories**" tables that you've created earlier.

Make "**category_id**" **foreign key linked to** "**id**" **in the** "**categories**" **table**.

[/task-description]
[code-io /]
[tests]
[test]
[input]
id
category_id
[/input]
[output]
id
category_id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Modifying Columns

[code-task title="Problem: Modifying Columns" taskId="ad103d67-2f7d-44ee-a11e-edbc8981b821" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Change the property "**VARCHAR(50)**" to "**VARCHAR(100)**" to the "**middle_name**" column in "**employees**" table.

[/task-description]
[code-io /]
[tests]
[test]
[input]
middle_name
[/input]
[output]
middle_name
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Modifying Columns

[code-task title="Problem: Modifying Columns" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Change the property "**VARCHAR(50)**" to "**VARCHAR(100)**" to the "**middle_name**" column in "**employees**" table.

[/task-description]
[code-io /]
[tests]
[test]
[input]
middle_name
[/input]
[output]
middle_name
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
