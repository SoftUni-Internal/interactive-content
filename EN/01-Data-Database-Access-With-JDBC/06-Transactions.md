[slide hideTitle]

# Transactions.

After finishing the lesson we will have a look over a bit more advanced topics: Transactions.

JDBC allows us to use transactions.

By default, every SQL statement is committed on completion but we have the option to change that behavior. 

In bigger applications, we want to have bigger control over if and when we want to apply changes to our data stored in the database.

We can turn-off auto commit in one line:

```java
connection.setAutoCommit(false);
```

Let us see the JDBC Transaction pattern with some pseudo-code:

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

With the code above we turn off the auto-commit option and from there, we can collect SQL statements and once we want to send it to the database we simply say **.commit**.

This will create a transaction to our database, we already know transactions from our previous module. 

When we put it in a try-catch statement like this, if any error appeared we will catch it and process it, and because it was a transaction none of the SQL statements will pass through and change our data.

[/slide]