[slide hideTitle]

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

[/slide]