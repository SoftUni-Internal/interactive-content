[slide hideTitle]

# Summary

## In this lesson you learned:

- We got to know the ORM frameworks and their job to **map Java objects to SQL entities**

```Java
User user = new User("Peter", 25);
dbManager.saveToDB(user);
```

- The **classes and interfaces JDBC** provide us to work with our database

```Java
Connection c = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/soft_uni", props);  // soft_uni is a database name, props are credentials
```

- What is **SQL injection** and how to protect us from this kind of attack

```java
SELECT id FROM users
WHERE username = 'example_user'
AND password = '1' OR username = 'admin';
```

- How to use **Transactions** with JDBC

```java
try {
   connection.setAutoCommit(false);
   Statement stmt = conn.createStatement();
   String sql = "…";
   stmt.executeUpdate(sql);  
   // If there is no error
   connection.commit();
} catch(SQLException se){
   // If there is any error
   conn.rollback();
}
```

## In the next lesson you will learn:

- What is MAVEN
- Hibernate Framework
- How to use the Java Persistence API

[/slide]