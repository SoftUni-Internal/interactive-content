[slide hideTitle]

# Application to Database Connection

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/01.Data-Database-Access-With-JDBC/01-Data-Database-Access-With-JDBC-6-7-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Download the [demo](https://videos.softuni.org/Java/Java-Spring-Advanced/db-access-with-jdbc-lab-demo-part-1-solution-.zip) from the course platform
- You are given a simple application that:
  - establishes connection with the "**soft_uni**" database
  - executes simple MySQL statement to retrieve the employees' names by **given salary criteria**

[/slide]

[slide hideTitle]

# Connection to Database via Java App Demo

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/01.Data-Database-Access-With-JDBC/01-Data-Database-Access-With-JDBC-8-11-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/01.Data-Database-Access-With-JDBC/01-Data-Database-Access-With-JDBC-12-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can access databases on a programmer level with every relational database such as PostgreSQL, MySQL, SQLite, etc., by using the same approach:
- Create connection
- Create a statement with escaping
- Set parameters
- Execute the query, or execute create, insert, update, delete

In bigger applications we can:
- Encapsulate custom SQL logic in methods
- Achieve database abstraction

[/slide]