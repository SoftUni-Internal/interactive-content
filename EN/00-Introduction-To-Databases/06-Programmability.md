# Programmability

[slide hideTitle]

# Indices

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Databases-Introduction/java-databases-and-mysql-databases-introduction-27-28-programmability-indices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A database index is a data structure that improves the speed of operations in a table.

Indices are created using one or more columns, providing the basis for both rapid random lookups and efficient ordering of access to records.

While creating an index, you should consider which column will be used to make SQL queries and create one or more indices on those columns.

There are two types of indices: **Clustered** and **Non-Clustered**.

**Clustered** indices are bound to the **primary key** and are used to physically sort data.

**Non-Clustered** indices can be bound to any field. 

They are used to **reference** the primary index.

[image assetsSrc="Introduction-To-Databases(12).png" /]

[/slide]

[slide hideTitle]

# Views

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Databases-Introduction/java-databases-and-mysql-databases-introduction-29-views-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Views are prepared queries for displaying sections of our data. 

The `CREATE VIEW` statement is used to create a new view.

Once we execute it, MySQL creates the view and stores it in the database for later use.

This is how you can create a view:

```java
CREATE VIEW v_employee_names AS
	SELECT employee_id,
        first_name,
        last_name
    FROM employees
SELECT * FROM v_employee_names
```

[/slide]

[slide hideTitle]

# Procedures, Functions, and Triggers

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Databases-Introduction/java-databases-and-mysql-databases-introduction-30-procedures-functions-and-triggers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A database can also store reusable code such as **Procedures**, **Functions**, and **Triggers**.

**Procedures** are similar to subprograms in a scripting language that are stored in a database.

A MySQL procedure has a **name**, a **parameter list**, and **SQL statement(s)**.

**Functions** are **stored programs** that we can pass parameters into and then **return a value**.

**Triggers** are a set of SQL statements that **reside in a system catalog**. 

They are a type of stored procedure that is invoked automatically in response to an event. 

Each trigger is associated with a table, which is activated on any DML statement such as `INSERT`, `UPDATE`, or `DELETE`.

[/slide]
