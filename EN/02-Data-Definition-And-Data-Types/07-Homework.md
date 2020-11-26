
# Homework

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

[code-task title="Problem: Create Tables" taskId="13097236-6b8f-4e36-85e2-cd7991984dde" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Run your query statements & submit the output from the queries as plain text.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
minions
age
minions
id
minions
name
id
towns
town_id
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
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Alter Minions Table

[code-task title="Problem: Alter Minions Table" taskId="d511ca4f-de89-4d76-b03f-7ed202f8432e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Before continuing with the next assignments, **rename the town_id** to **id** using Workbench's GUI.

Change the structure of the Minions table to have **new column town_id** that would be of the same type as the **id** column of **towns table**.

Add **new constraint** that makes **town_id foreign key** and references to **id** column of **towns** table.

**Run your query statements & submit the output from the queries as plain text.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
age
id
name
town_id
minions
town_id
towns
id
[/input]
[output]
age
id
name
town_id
minions
town_id
towns
id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Insert Records in Both Tables

[code-task title="Problem: Insert Records in Both Tables" taskId="7eefd50c-3fee-4592-9177-e7685dc163f6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Populate both tables** with sample records given in the table below.

Use only insert SQL queries.

**Run your query statements & submit the output from the queries as plain text.**

## Examples

**minions**
| **id** | **name** | **age** | **town_id** |
| ------ | -------- | ------- | ----------- |
| 1 | Kevin | 22 | 1 |
| ... | ... | ... | ... |

**towns**
| **id** | **name** |
| ------ | -------- |
| 1 | London |
| ... | ... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
London
2
Frankfurt
3
Manchester
1
Kevin
22
1
2
Bob
15
3
3
Steward

2
[/input]
[output]
1
London
2
Frankfurt
3
Manchester
1
Kevin
22
1
2
Bob
15
3
3
Steward

2
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Truncate Table Minions

[code-task title="Problem: Truncate Table Minions" taskId="a6b52ba6-fa40-4ec3-ab42-79c593333e7a" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Delete all the data** from the **minions** table using **SQL query**.

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]

[/code-task]

[/slide]

[slide hideTitle]

# Problem: Drop All Tables

[code-task title="Problem: Drop All Tables" taskId="58ee9bfb-6050-454a-a730-c89571d2eacc" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Delete all tables** from the **minions** database using **SQL query**.

**Run your query statements & submit the output from the queries as plain text.**

[/task-description]

[/code-task]

[/slide]

[slide hideTitle]

# Problem: Create Table People

[code-task title="Problem: Create Table People" taskId="873f2618-c38e-4e5f-8ebe-000fc6e08ff2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Using **SQL query** create table **"people"** with columns:

- **id** – unique number for every person there will be **no more than 231-1people**. (Auto incremented)
- **name** – full name of the person will be **no more than 200 Unicode characters**. (Not null)
- **picture** – image with **size up to 2 MB**. (Allow nulls)
- **height** – In meters. Real number precise up to **2 digits** after floating point. (Allow nulls)
- **weight** – In kilograms. Real number precise up to **2 digits** after floating point. (Allow nulls)
- **gender** – Possible states are **m** or **f**. (Not null)
- **birthdate** – (Not null)
- **biography** – detailed biography of the person it can **contain max allowed Unicode characters**. (Allow nulls)

Make **id** primary key.

Populate the table with **5 records**.

**Run your query statements & submit the output from the queries as plain text.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
id
name
picture
height
weight
gender
birthdate
biography
id
id
id
name
gender
birthdate
5
[/input]
[output]
id
name
picture
height
weight
gender
birthdate
biography
id
id
id
name
gender
birthdate
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Create Table Users

[code-task title="Problem: Create Table Users" taskId="0715e8ac-923a-4ae5-b291-68c8819c3253" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Using **SQL query** create table **users** with columns:

- **id** – unique number for every user. There will be **no more than 263-1 users**. (Auto incremented)
- **username** – unique identifier of the user will be **no more than 30 characters (non Unicode)**. (Required)
- **password** – password will be **no longer than 26 characters (non Unicode)**. (Required)
- **profile_picture** – image with **size up to 900 KB**.
- **last_login_time**
- **is_deleted** – shows if the user deleted his/her profile. Possible states are **true** or **false**.

Make **id** primary key. Populate the table with **5 records**.

Submit your **CREATE** and **INSERT statements**.

Submit your **CREATE** and **INSERT statements** as **Run queries & check DB**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
users
id
id
[/input]
[output]
users
id
id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Change Primary Key

[code-task title="Problem: Change Primary Key" taskId="0f0cef21-e3dd-4ab5-b663-9e2c88246ae7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Using **SQL queries** modify table **users** from the previous task.

First **remove current primary key** then create **new primary key** that would be **combination** of fields **id** and **username**.

The initial primary key name on **id** is **pk_users**.

**Run your query statements & submit the output from the queries as plain text.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
id
username
[/input]
[output]
id
username
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Set Default Value of a Field

[code-task title="Problem: Set Default Value of a Field" taskId="ee230a5c-506c-4f17-8657-8773f05fbd7b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Using **SQL queries** modify table **users**.

Make the **default value** of **last_login_time** field to be the **current time**.

**Run your query statements & submit the output from the queries as plain text.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
users
last_login_time
CURRENT_TIMESTAMP
[/input]
[output]
users
last_login_time
CURRENT_TIMESTAMP
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Set Unique Field

[code-task title="Problem: Set Unique Field" taskId="d78dc928-3381-4b22-bbdc-ecdf1449754b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Using **SQL queries** modify table **users**.

Remove **username** field from the primary key so only the field **id** would be primary key.

Now **add unique constraint** to the **username** field.

The initial primary key name on (**id, username**) is **pk_users**.

**Run your query statements & submit the output from the queries as plain text.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
id
users
username
UNIQUE
[/input]
[output]
id
users
username
UNIQUE
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Movies Database

## Description

Using **SQL queries** create **Movies** database with the following entities:

- **directors** (id, director_name, notes)
- **genres** (id, genre_name, notes)
- **categories** (id, category_name, notes)
- **movies** (id, title, director_id, copyright_year, length, genre_id, category_id, rating, notes)

Set most **appropriate data types** for each column.

**Set primary key** to each table. Populate each table with **5 records**.

Make sure the columns that are present in 2 tables would be of the **same data type**.

Consider which fields are always required and which are optional.

Submit your **CREATE TABLE** and **INSERT statements** as **Run queries & check DB**.

[/slide]

[slide hideTitle]

# Problem: Multiple Implementation

[code-task title="Problem: Multiple Implementation" taskId="8a146d85-e504-48a4-8331-5a594f4f988b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Using **SQL queries** create **car_rental** database with the following entities:

- **categories (id, category, daily_rate, weekly_rate, monthly_rate, weekend_rate)**
- **cars (id, plate_number, make, model, car_year, category_id, doors, picture, car_condition, available)**
- **employees (id, first_name, last_name, title, notes)**
- **customers (id, driver_licence_number, full_name, address, city, zip_code, notes)**
- **rental_orders (id, employee_id, customer_id, car_id, car_condition, tank_level, kilometrage_start, kilometrage_end, total_kilometrage, start_date, end_date, total_days, rate_applied, tax_rate, order_status, notes)**

Set most **appropriate data types** for each column.

**Set primary key** to each table.

Populate each table with **3 records**.

Make sure the columns that are present in 2 tables would be of the **same data type**.

Consider which fields are always required and which are optional.

Submit your **CREATE TABLE** and **INSERT statements** as **Run queries & check DB**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
categories
category
daily_rate
id
monthly_rate
weekend_rate
weekly_rate
id
[/input]
[output]
categories
category
daily_rate
id
monthly_rate
weekend_rate
weekly_rate
id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem Name: Hotel Database

## Description

Using **SQL queries** create **Hotel** database with the following entities:

- **employees (id, first_name, last_name, title, notes)**
- **customers (account_number, first_name, last_name, phone_number, emergency_name, emergency_number, notes)**
- **room_status (room_status, notes)**
- **room_types (room_type, notes)**
- **bed_types (bed_type, notes)**
- **rooms (room_number, room_type, bed_type, rate, room_status, notes)**
- **payments (id, employee_id, payment_date, account_number, first_date_occupied, last_date_occupied, total_days, amount_charged, tax_rate, tax_amount, payment_total, notes)**
- **occupancies (id, employee_id, date_occupied, account_number, room_number, rate_applied, phone_charge, notes)**

Set most **appropriate data types** for each column.

**Set primary key** to each table.

Populate each table with **3 records**.

Make sure the columns that are present in 2 tables would be of the **same data type**.

Consider which fields are always required and which are optional.

Submit your **CREATE TABLE** and **INSERT statements** as **Run queries & check DB**.

[/slide]

[slide hideTitle]

# Problem: Basic Insert

[code-task title="Problem: Basic Insert" taskId="2d5e23d3-a6fa-4440-af16-03680555919a" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Now create bigger database called soft_uni.

You will use database in the future tasks. It should hold information about

- towns (id, name)
- addresses (id, address_text, town_id)
- departments (id, name)
- employees (id, first_name, middle_name, last_name, job_title, department_id, hire_date, salary, address_id)

Id columns are auto incremented starting from 1 and increased by 1 (1, 2, 3, 4…).

Make sure you use appropriate data types for each column.

Add primary and foreign keys as constraints for each table.

Use only SQL queries.

Consider which fields are always required and which are optional.

**Do not submit** creation of database **only** the **insert statements**.

Use the **SoftUni** database and insert some data **using SQL queries**.

- **towns**: London, Frankfurt, Manchester, Liverpool
- **departments**: Engineering, Sales, Marketing, Software Development, Quality Assurance
- **employees**:

**Run your query statements & submit the output from the queries as plain text.**

## Examples

| **name**         | **job_title**   | **department**       | **hire_date** | **salary** |
| ---------------- | --------------- | -------------------- | ------------- | ---------- |
| Peter Michael Jr | .NET Developer  | Software Development | 01/02/2013    | 3500.00    |
| Peter Lee Parker | Senior Engineer | Engineering          | 02/03/2004    | 4000.00    |
| Merry Poppins Jr | Intern          | Quality Assurance    | 28/08/2016    | 525.25     |
| ...              | ...             | ...                  | ...           | ...        |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Sofia
Plovdiv
Varna
Burgas
Engineering
Sales
Marketing
Software Development
Quality Assurance
Peter
Michael
Jr
.NET Developer
4
2013-02-01 00:00:00
3500.00
Peter
Lee
Parker
Senior Engineer
1
2004-03-02 00:00:00
4000.00
Merry
Poppins
Jr
Intern
5
2016-08-28 00:00:00
525.25
George
Booker
T
CEO
2
2007-12-09 00:00:00
3000.00
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88
[/input]
[output]
Sofia
Plovdiv
Varna
Burgas
Engineering
Sales
Marketing
Software Development
Quality Assurance
Peter
Michael
Jr
.NET Developer
4
2013-02-01 00:00:00
3500.00
Peter
Lee
Parker
Senior Engineer
1
2004-03-02 00:00:00
4000.00
Merry
Poppins
Jr
Intern
5
2016-08-28 00:00:00
525.25
George
Booker
T
CEO
2
2007-12-09 00:00:00
3000.00
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Basic Select All Fields

[code-task title="Problem: Basic Select All Fields" taskId="95056717-3b17-4ad1-b228-15f912ca7060" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Use the **soft_uni** database and first select all records from the **towns**, then from **departments** and finally from **employees** table.

Use SQL queries and submit them to Judge at once.

Submit your query statements as **Prepare DB & Run queries**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
London
2
Frankfurt
3
Manchester
4
Liverpool
1
Engineering
2
Sales
3
Marketing
4
Software Development
5
Quality Assurance
1
Peter
Michael
Jr
.NET Developer
4
2013-02-01 00:00:00
3500

2
Peter
Lee
Parker
Senior Engineer
1
2004-03-02 00:00:00
4000

3
Merry
Poppins
Jr
Intern
5
2016-08-28 00:00:00
525.25

4
George
Booker
T
CEO
2
2007-12-09 00:00:00
3000

5
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88
[/input]
[output]
1
London
2
Frankfurt
3
Manchester
4
Liverpool
1
Engineering
2
Sales
3
Marketing
4
Software Development
5
Quality Assurance
1
Peter
Michael
Jr
.NET Developer
4
2013-02-01 00:00:00
3500

2
Peter
Lee
Parker
Senior Engineer
1
2004-03-02 00:00:00
4000

3
Merry
Poppins
Jr
Intern
5
2016-08-28 00:00:00
525.25

4
George
Booker
T
CEO
2
2007-12-09 00:00:00
3000

5
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Basic Select All Fields and Order Them

[code-task title="Problem: Basic Select All Fields and Order Them" taskId="02dedc64-6d54-4a95-89d8-0183ab1f51f5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Modify queries from previous problem by sorting:

- **towns** - alphabetically by name
- **departments** - alphabetically by name
- **employees** - descending by salary

Submit your query statements as **Prepare DB & Run queries**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Liverpool
2
Frankfurt
1
London
3
Manchester
1
Engineering
3
Marketing
5
Quality Assurance
2
Sales
4
Software Development
2
Peter
Lee
Parker
Senior Engineer
1
2004-03-02 00:00:00
4000

1
Peter
Michael
Jr
.NET Developer
4
2013-02-01 00:00:00
3500

4
George
Booker
T
CEO
2
2007-12-09 00:00:00
3000

5
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88

3
Merry
Poppins
Jr
Intern
5
2016-08-28 00:00:00
525.25
[/input]
[output]
4
Liverpool
2
Frankfurt
1
London
3
Manchester
1
Engineering
3
Marketing
5
Quality Assurance
2
Sales
4
Software Development
2
Peter
Lee
Parker
Senior Engineer
1
2004-03-02 00:00:00
4000

1
Peter
Michael
Jr
.NET Developer
4
2013-02-01 00:00:00
3500

4
George
Booker
T
CEO
2
2007-12-09 00:00:00
3000

5
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88

3
Merry
Poppins
Jr
Intern
5
2016-08-28 00:00:00
525.25
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Basic Select Some Fields

[code-task title="Problem: Basic Select Some Fields" taskId="07a89b1f-a1f8-44bc-82be-711a3dcddbf7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Modify queries from previous problem to show only **some of the columns**.

For table:

- **towns – name**
- **departments – name**
- **employees – first_name, last_name, job_title, salary**

**Keep the ordering** from the previous problem.

Submit your query statements as **Prepare DB & Run queries**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Burgas
Plovdiv
Sofia
Varna
Engineering
Marketing
Quality Assurance
Sales
Software Development
Peter
Parker
Senior Engineer
4000
Peter
Jr
.NET Developer
3500
George
T
CEO
3000
Peter
Pan
Intern
599.88
Merry
Jr
Intern
525.25
[/input]
[output]
Burgas
Plovdiv
Sofia
Varna
Engineering
Marketing
Quality Assurance
Sales
Software Development
Peter
Parker
Senior Engineer
4000
Peter
Jr
.NET Developer
3500
George
T
CEO
3000
Peter
Pan
Intern
599.88
Merry
Jr
Intern
525.25
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Increase Employees Salary

[code-task title="Problem: Increase Employees Salary" taskId="c555ff5d-a08f-42a6-913d-2c54a3291be0" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Use **softuni** database and **increase the salary** of all employees by **10%**.

Then select **only salary** column from the **employees** table.

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3850
4400
577.775
3300
659.868
[/input]
[output]
3850
4400
577.775
3300
659.868
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Decrease Tax Rate

[code-task title="Problem: Decrease Tax Rate" taskId="7eefe61a-27a4-4fee-a8b5-053f892511cf" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Use **hotel** database and **decrease tax rate by 3%** to all payments.

Select **only tax_rate** column from the **payments** table.

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2.33
2.04
1.07
[/input]
[output]
2.33
2.04
1.07
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Homework Results

[tasks-results/]

[/slide]
