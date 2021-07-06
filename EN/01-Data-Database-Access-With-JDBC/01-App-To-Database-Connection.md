# App to database connection

[slide hideTitle]
# ORM Frameworks Overview

- In development programmers use **object-relational mapping** frameworks
  - mapping Java classes and data types to **DB tables** and **SQL data types**
  - generate SQL calls and **relieves** the developer from **manual handling**

Example:

```Java
User user = new User("Peter", 25);
dbManager.saveToDB(user);
```

- ORM frameworks **do not** drop the need to write SQL
  - at some point you might need some **manual query optimization**
- ORM Frameworks examples:
  - Java - Hibernate, EclipseLink, TopLink
  - .NET - Entity Framework, NHibernate
  - PHP - Doctrine, Laravel(Eloquent)

[/slide]