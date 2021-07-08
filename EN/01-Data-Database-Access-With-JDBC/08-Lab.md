# Lab

[slide hideTitle]

# Part 0: Inspect SoftUni DB

Download the [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/lab_resources_database_data_database_access_with_JDBC.zip) needed for this lesson.

## Database Apps Introduction

[image assetsSrc="Spring-Data-Database-Access-With-JDBC-Lab.png" /]

[/slide]

[slide hideTitle]

# Part 1: Accessing Database via Simple Java Application 

You are given a simple java program that opens a connection to the local database server and retrieves the following data - the first name and the last name of the employees from the "**soft_uni**" database. 

The data is filtered by the salary criteria, which is given by the user as the input. 

## Examples

| **Input** | **Output** |
|---|---|
| 70000.00   | Ken Sanchez |
||James Hamilton |
||Brian Welcker |

| **Input** | **Output** |
|---|---|
| 80000.00  | Ken Sanchez |
||James Hamilton   |

[/slide]

[slide hideTitle]

# Connection and Connection Properties

Up to this point, we have used the MySQL Workbench IDE to connect to the local instance of the MySQL server. 

[image assetsSrc="Spring-Data-Database-Access-With-JDBC-Lab(1).png" /]

From now on, we will achieve it using this **Java code snippet**, which uses the **JDBC API**.

```java
Properties props = new Properties();
props.setProperty("user", user);
props.setProperty("password", password);

Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/soft_uni", props);
```

The following code snippet shows how a connection is created:

Let us take a look at what the snippet does. 

A new **Properties** class is created, which will hold the username and the password of the user. 

The username and the password are given beforehand by the input. 

They are passed as an argument to the static DriverManager class's getConnection method via the props instance.

The getConnection method is static that establishes a connection, for which the **DriverManager** selects the appropriate driver - the **MySQL Connector/J** driver in our case.

The **getConnection** method requires a second argument - **a connection string**. 

A **connection string** is a string, which holds information about the data source and consists of a database name and other parameters required to establish an initial connection. In our case these parameters are:

- The host and port of our local server - **localhost:3306**
- The name of the database - can be diverse, but by the means of our assignment it is "**soft_uni**"
- User - by default **root**, or any other **specified by the user**
- Password - user password for connection if there is one


Remember that the user and the password are already included in the **Properties** instance **props**.


[/slide]

[slide hideTitle]

# Preparing and Executing Statements

```java
PreparedStatement stmt =
    connection.prepareStatement("SELECT first_name, last_name FROM employees WHERE salary > ?");
String salary = sc.nextLine();
stmt.setDouble(1, Double.parseDouble(salary));
```

An SQL query execution is done via the Statement interface. 

To prevent SQL Injections, the **PreparedStatement** is used: 

The user is asked to set the salary criteria, by which we filter the results.

Then we use the **connection** to prepare a **PreparedStatement** and pass an unfinished SQL query, to which we must append the value for the **salary** criteria. 

The question mark is a placeholder for that value. 

The **setDouble** method accepts two parameters - the index of the parameter and the value. 

If we had done a plain concatenation using only the Statement interface and appended the value for the salary to the query, we would have made our program vulnerable to SQL Injections because we wouldn't be checking the value. 

It could be another SQL query, which in the worst case would harm our database. Therefore, we use the **PreparedStatement** class, the **setDouble**, and the **Double.parseDouble** methods, to ensure that the value is as expected.


[/slide]

[slide hideTitle]

# Iterating Over the Result


Finally, if the data in the database matches the given criteria, we will receive a **ResultSet** of rows, otherwise, it will be empty. 

```java
ResultSet rs = stmt.executeQuery();
```

The **ResultSet** object is a table of data. 

It is not updatable and it can be read only from first to last. 

Thus it keeps a cursor pointing to the rows of the table. 

Field values can be accessed via **getter** methods, such as **getString**, which accepts column name:

```java
while(rs.next()) {
    System.out.println(rs.getString("first_name") + " " + rs.getString("last_name"));
}
```

[/slide]

[slide hideTitle]

# Part 2: Writing your Data Retrieval Application

Follow the steps to write a java application that retrieves the information about the users, their games, and duration. Use the "**diablo**" database from the provided resources. 

## Example

| **Input** | **Output** |
|---|---|
| sbudgey1   | User: sbudgey1|
||Saloma Budgey has played 6 games|


| **Input** | **Output** |
|---|---|
| destroyer  | No such user exists  |


[/slide]

