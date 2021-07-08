# Client Access to a Database

[slide hideTitle]
# Java Database Connectivity (JDBC)

JDBC is a **standard Java API** for database-independent connectivity, which allows to connect to а database, create queries, execute **CRUD operations** as well as manipulating the database schema.

By using JDBC we can **invoke store procedures** and **create costume functions**.

[/slide]

[slide hideTitle]
# JDBC Architecture

[image assetsSrc="Spring-Data-Database-Access-With-JDBC.png" /]

First, we need to create **an application** that is going to use a database, for learning purposes we will use our **main class** with it is **main method** to send queries to the database.

Тhose queries can be sent by using JDBC **API**, which provides the connection between the application and the driver manager.

The JDBC **Driver Manager** is the file that we load from the `.jar` file, which establishes the connection with the correct driver.

The driver manager supports **multiple drivers** connected to different **types of databases**, where JDBC **Driver** handles the communications with the different relational databases such as MySQL, Oracle, SQL Server, ODBC DC, etc.
[/slide]

[slide hideTitle]

# JDBC API

JDBC API provides several interfaces and classes:

- **DriverManager** - matches requests from the application with the proper database driver
- **Driver** - handles the communication with the database server
- **Connection** - all methods for contacting a database
- **Statement** - methods and properties that enable you to send SQL, also there are is an automatic escaping, which prevents an SQL injection
- **ResultSet** - this is the result of the executed query

Let us say we need to **extract the full names** of all employees working the **engineering department** from the SoftUni database, the result will be a **collection of full names** of the employees working the given department.

Another example is if we want to **increase the salaries** of the employees, working in engineering, by 10%, the result set will be the **number of affected rows**.

- **SQLException** - if an exception occurs during retrieving data from the database, it is a good practice to **catch** the acquired exception **after** the result set, that way we ensure that **no exception during the entire process will be left unprocessed**

[/slide]

[slide hideTitle]

# JDBC API - ResultSet Class

ResultSet maintains a **cursor** pointing to its current row of data, which we iterate through.

The **cursor** could be:
- **Forward only** - can move only in one direction
- **Readable only** - only can read data
- **Updatable** - can manipulate data

Also, the cursor could be saved or not, for example, we decided to **not save the cursor**, the garbage collector eventually will free the memory. 

The default settings of the **cursor** are forward-only and read-only, but depending on the case **these settings could be change** - the cursor could forward and backward as well as read and update and delete.


- Provides getter methods for retrieving column values from the current row

Example:

```Java
while(rs.next()) {
  System.out.printf("%s %s", rs.getString("first_name"), rs.getString("last_name"));}
```

Retrieved information is reached by getter methods:

**Example:**

- `getString("column_name")` - using this method the driver retreive a string
- `getDouble("column_name")` - using this method the driver retreive a double
- `getBoolean("column_name")` - using this method the driver retreive a boolean

The driver **converts** the underlying data to the Java type, this could be string, int, double, bool, even an object.

[/slide]

[slide hideTitle]

## Java.sql and MySQL Driver

The java.sql package provides all previously mentioned JDBC **classes**.

By **using the classes** such as Prepare Statement, Connection, ResultSet, etc., from the SQL package, **less coupling createд** between our application and the databases.

To work with JDBC we need to **download a MySQL Driver** - Connector/J, which can be added as a **module dependency** or **library project** to the project. 

Connector/J can be downloaded on the [MySQL webpage](https://dev.mysql.com/downloads/connector/j/).

[/slide]

[slide hideTitle]

# MySQL Driver Connection

Connection with the database is established via **connection string**:
- `jdbc:<driver protocol>:<connection details>`

**Example:**

```Java
Connection c = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/soft_uni", props);  // soft_uni is a database name, props are credentials
```

In this example we have:
- `mysql` - database type
- `//localhost:3306/` - the port
- `soft_uni` - database name
- `props` - database credentials (username and password)

## Setting up The Driver in IntelliJ IDEA

This is how to set up the MySQL connector driver in IntelliJ IDEA as an external library:

[image assetsSrc="Spring-Data-Database-Access-With-JDBC(1).png" /]

[/slide]
