[slide hideTitle]

# Application to Database Connection

- Download the demo from the course platform
- You are given a simple application that:

  - establishes connection with the "**soft_uni**" DB
  - executes simple MySQL statement to retrieve the employees' names by **given salary criteria**

[/slide]

[slide hideTitle]

# Connection to DB via Java App Demo

- Let us analyze the program:
  - connection to DB is established by asking the user to give credentials:

```Java
System.out.print("Enter username default (root): ");
String user = sc.nextLine();
user = user.equals("") ? "root" : user;
...
System.out.print("Enter password default (empty):");
String password = sc.nextLine().trim();
```

- Using an external library (**MySQL Connector/J**) we make a connection via a **DriverManager** and a **Connection** class

```Java
Properties props = new Properties();
        props.setProperty("user", user);
        props.setProperty("password", password);

Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/soft_uni", props);
```

- We retrieve the result with the **ResultSet** and the **PreparedStatement** classes

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

[/slide]

[slide hideTitle]

# Demo Conclusion

- We can access databases on a programmer level
  - no manual actions needed
- In bigger applications we can:
  - encapsulate custom SQL logic in methods
  - achieve database abstraction

[/slide]