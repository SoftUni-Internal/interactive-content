# Structured Query Language

[slide hideTitle]

# Structured Query Language

**SQL** is a standard language for accessing and manipulating databases. It stands for **Structured Query Language**. 

Although SQL is an **ANSI/ISO** standard, there are different versions of the SQL language.

With SQL we can:

- Execute queries in a database
- Retrieve data from a database
- Insert records in a database
- Update records in a database
- Delete records from a database
- Create new databases
- Create new tables in a database
- Create stored procedures in a database
- Create views in a database
- Set permissions on tables, procedures, and views

[/slide]

[slide hideTitle]

# Structured Query Language Elements

SQL is subdivided into several language elements:

- Queries
- Clauses
- Expressions
- Predicates
- Statements

Here is an example:

```java
UPDATE employees
SET salary = salary * 1.1
WHERE job_title = "Cashier";
```

`UPDATE employees` is an update clause, `salary * 1.1` is an expression and `job_title = "Cashier"` is a predicate.

The entire piece of code is a statement.

[/slide]

[slide hideTitle]

# Structured Query Language Sections

We can logically divide SQL in four sections:

1. Data Definition (DDL)
    - Describes the structure of our data
2. Data Manipulation (DML)
    - Stores and retrieves data
3. Data Control (DCL)
    - Defines who can access the data
4. Transaction Control (TCL)
    - Bundles operations and allows rollbacks


**DDL**

Specifies:
- the schema of each relation
- the attributes it carries and the domain of those attributes
- the integrity constraint, which makes sure that any changes made to the database will not affect the consistency of the data

Maintains:
- the set of indices for each relation and lets you retrieve the records from the database quickly
- the information about the security of data in the database and keeps the information regarding the authorization for each relation in the database

It also describes the storage structure of each relation on the hard disk.

Examples of DDL commands:

- **CREATE** - Creates a new table in a database
- **ALTER** - Modifies a table in a database
- **DROP** - Drop a column or a table from an existing database
- **TRUNCATE** - Erase all rows in a table


**DML**

The SQL commands that deals with the manipulation of data present in the database belong to the Data Manipulation Language (DML) and this includes most of the SQL statements.

Examples of DML commands:

- **INSERT** - Used to insert data into a table
- **UPDATE** - Used to update existing data within a table
- **DELETE** - Used to delete records from a database table

**DCL**

DCL includes commands such as, **GRANT**, **REVOKE** and **DENY**, which mainly deal with the rights, permissions and other controls of the database system.

Examples of DCL commands:

- **GRANT** - Gives users access privileges to database
- **REVOKE** - Withdraw user’s access privileges given by using the **GRANT** command

**TCL**

TCL commands deal with the transaction within the database.

Examples of TCL commands:

- **COMMIT** - Commits a Transaction
- **ROLLBACK** - Rollbacks a transaction in case of any error occurs
- **SAVEPOINT** - Sets a savepoint within a transaction

[/slide]
