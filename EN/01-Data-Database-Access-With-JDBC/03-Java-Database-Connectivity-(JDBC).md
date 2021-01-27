[slide hideTitle]

# Client Access To A Database

## Java Database Connectivity (JDBC)

- JDBC is a standard Java API for database-independent connectivity.
- Includes APIs for:
  - Making a connection to a database.
  - Creating and executing **SQL** queries in the database.
  - Viewing & Modifying the resulting records.

[/slide]

[slide hideTitle]

## JDBC Architecture

[image assetsSrc="Spring-Data-Database-Access-With-JDBC.png" /]

- JDBC **API** – provides the connection between the application and the driver manager.
- JDBC **Driver Manager** – establishes the connection with the correct driver.
  - Supports multiple drivers connected to different types of databases.
- JDBC **Driver** - handles the communications with the database.

[/slide]

[slide hideTitle]

# JDBC API

- JDBC API provides several interfaces and classes:
  - DriverManager – matches requests from the application with the proper DB driver
  - Driver – handles the communication with the DB server
  - Connection – all methods for contacting a database
  - Statement – methods and properties that enable you to send SQL
  - ResultSet – retrieved data (set of table rows)
  - SQLException

[/slide]

[slide hideTitle]

# JDBC API - ResultSet Class

- ResultSet maintains a **cursor** pointing to its current row of data
  - Not updatable
  - Iterable only once and only from the first row to the last row
- Provides getter methods for retrieving column values from the current row

Example:

```Java
while(rs.next()) {
	System.out.printf("%s %s", rs.getString("first_name"), rs.getString("last_name"));}
```

Retrieved information is reached by getter methods:

Example:

- getString("column_name")
- getDouble("column_name")
- getBoolean("column_name") etc.

The driver converts the underlying data to the Java type.

[/slide]

[slide hideTitle]

## Java.sql and MySQL Driver

- The java.sql package provides all previously mentioned JDBC classes.
- In order to work with JDBC we need to download a MySQL Driver – Connector/J.
- It can be found on the following webpage:

https://dev.mysql.com/downloads/connector/j/

[/slide]

[slide hideTitle]

## MySQL Driver Connection

- Connection with the database is established via **connection string**.
  - jdbc:<driver protocol>:<connection details>

Example:

```Java
Connection c = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/soft_uni", props);  // soft_uni is a database name, props are credentials
```

[/slide]

[slide hideTitle]

## Setting Up The Driver In IntelliJ IDEA

[image assetsSrc="Spring-Data-Database-Access-With-JDBC(1).png" /]

[/slide]
