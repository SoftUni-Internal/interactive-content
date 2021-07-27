# Clustered and Non-Clustered Indices

[slide hideTitle]

# Indices

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Joins-Subqueries-and-Indices/interactive-java-databases-and-mysql-joins-subqueries-and-indices-26-30-indices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Indices were created to ease the process of working with data.

There are two types of stored data:

- **Ordered** - All the records in a file are ordered by a given value

- **Unordered** - Records are inserted in the file in no particular sequence

With indices, you can quickly find rows with a specific column value.

Without an index, MySQL has to start from the first row and read through the entire table to find the relevant rows.

The larger the table, the more time this process will take. 

If the table has an index for the columns in question, MySQL can quickly get a record without going through all the data.

These are the most important characteristics of indices:

- They are structures associated with a table or а view that speeds up retrieval of rows, usually implemented as **B-trees**
  
- Indices can be built-in to the table (clustered) or stored externally (non-clustered)

- Adding and deleting records in indexed table is slower

- Indices should only be used for big tables (e.g. 50000 rows or more)

[/slide]

[slide hideTitle]

# Clustered Indices

**Clustered indices** determine the **order** in which data rows are stored.

They are very useful for the fast execution of `WHERE`, `ORDER BY`, and `GROUP BY` clauses.

There could be a maximum of **1** clustered index per table.

When you define a `PRIMARY KEY` in your table, the database uses it as a **clustered index**.

You should always define a **primary key** for the tables you create.

If a table has no clustered index, it stores the data rows in an **unordered structure** (heap).

[image assetsSrc="Joins-Subqueries-And-Indices(10).png" /]

[/slide]

[slide hideTitle]

# Non-Clustered Indices

A non-clustered index does not sort the physical data inside the table.

It is stored in one place, while the table data is stored in another.

Each **key value entry** has a pointer to the data row that contains the key value.

This is similar to a textbook, where the book content is located in one place, and the index is located in another.

This index is useful for fast retrieving a **single record** or a **range** of records.

There could be more than one non-clustered index per table.

This is how you can create an index:

```Java
CREATE INDEX
ix_users_first_name_last_name
ON users(first_name, last_name);  // users is a table name, first_name and last_name are column names
```

[image assetsSrc="Joins-Subqueries-And-Indices(11).png" /]

[/slide]

