[slide hideTitle]

# Transactions

JDBC every query, update, delete, etc. it is a **separate transacrion**, 
it means that `.executeQuery()` and `.executeUpdate()` commits the transactione after every statement. 

By default, every SQL statement is **committed on completion** but this behavior could be **change**.

When an application **grows larger**, cases occur where a **bigger control** over the data into which goes in and out of the database is **needed**.

This could be done by **turn-off auto-commit line**, by using the following syntax:

```java
connection.setAutoCommit(false);
```

## JDBC Transaction Pattern 

```java
try {
   connection.setAutoCommit(false);
   Statement stmt = conn.createStatement();
   String sql = "...";
   stmt.executeUpdate(sql);  
   // If there is no error
   connection.commit();
} catch(SQLException se){
   // If there is any error
   conn.rollback();
}
```

In this example we **turn off the auto-commit option** and from there, we can **collect** SQL statements and once we want to send it to the database we simply say **.commit**, which will create a **transaction to our database**.

By using **try-catch statement**, if any error appears during the query, we can catch it and process it without change any of the database data

[/slide]