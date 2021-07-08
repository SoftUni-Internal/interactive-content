[slide hideTitle]

# Application to Database Connection

- Download the [demo](https://softwareuniversity-my.sharepoint.com/:x:/r/personal/ivan_softuni_bg/_layouts/15/Doc.aspx?sourcedoc=%7B7612887C-7509-40AB-98B4-6FCE8C4AB0EC%7D&file=UCDN%20Resources%20Link%20-%20Still%20adding%20links.xlsx&action=default&mobileredirect=true&cid=4b401da1-c14d-48ae-8d68-ad53f655c8fd) from the course platform
- You are given a simple application that:
  - establishes connection with the "**soft_uni**" database
  - executes simple MySQL statement to retrieve the employees' names by **given salary criteria**

[/slide]

[slide hideTitle]

# Connection to Database via Java App Demo

- Let us analyze the program:
  - connection to DB is established by asking the user to give credentials:

```Java
System.out.print("Enter username default (root): ");
String user = sc.nextLine();
user = user.equals("") ? "root" : user;

System.out.print("Enter password default (empty):");
String password = sc.nextLine().trim();
password = password.length() > 0 ? password : "root";
```
In this example, we take the user name, by using the **scanner class**.

Next, we check if the user is an **empty string**, if it is a **default value is given** ("root"), because there is no need to **manually type in the user**.

On the last two lines, **a password is required**, and if the password is empty, a default password ("root") is given.

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

We can access databases on a programmer level with every relational database such as PostgreSQL, MySQL, SQLite etc., by using the same approach:
- Create connection
- Create a statement with escaping
- Set parameters
- Execute the query, or execute create, insert, update, delete

In bigger applications we can:
- Encapsulate custom SQL logic in methods
- Achieve database abstraction

[/slide]