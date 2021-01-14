[slide]

# App to database connection

## ORM Frameworks Overview

- In development programmers use **object-relational mapping** frameworks.
  - Mapping Java classes and data types to **DB tables** and **SQL data types**.
  - Generate SQL calls and **relieves** the developer from **manual handling**.

Example:

```Java
User user = new User("Peter", 25);
dbManager.saveToDB(user);
```

- ORM frameworks **do not** drop the need to write SQL.
  - At some point you might need some **manual query optimization**.
- ORM Frameworks examples:
  - Java – Hibernate, EclipseLink, TopLink...
  - .NET – Entity Framework, NHibernate...
  - PHP – Doctrine, Laravel(Eloquent)...

## Connection to DB Via Java App Demo

- Download the demo from the course platform
- You are given a simple application that:

  - Establishes connection with the "**soft_uni**" DB.
  - Executes simple MySQL statement to retrieve the employees' names by **given salary criteria**.

- Let us analyze the program:
  - Connection to DB is established by asking the user to give credentials:

```Java
System.out.print("Enter username default (root): ");
String user = sc.nextLine();
user = user.equals("") ? "root" : user;
...
System.out.print("Enter password default (empty):");
String password = sc.nextLine().trim();
```

- Using an external library (**MySQL Connector/J**) we make a connection via a **DriverManager** and a **Connection** class.

```Java
Properties props = new Properties();
        props.setProperty("user", user);
        props.setProperty("password", password);

Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/soft_uni", props);
```

- We retrieve the result with the **ResultSet** and the **PreparedStatement** classes.

```Java
PreparedStatement stmt = connection.prepareStatement
("SELECT * FROM employees WHERE salary > ?");  // SQL Query

String salary = sc.nextLine();  // Salary criteria by user input
stmt.setDouble(1, Double.parseDouble(salary));
ResultSet rs = stmt.executeQuery();  // Runs the SQL statement and returns retrieved result
```

- Iterating over the result:

```Java
while(rs.next()) {  // Retrieving data
  System.out.printf("%s  %s",
  rs.getString("first_name")
    rs.getString("last_name"));  // The ResultSet is a set of table rows
}
```

### Conclusion

- We can access databases on a programmer level
  - No manual actions needed
- In bigger applications we can:
  - Encapsulate custom SQL logic in methods
  - Achieve database abstraction

[/slide]