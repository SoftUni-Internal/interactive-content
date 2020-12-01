[slide]

# Indices

Before you start learning about anything on indexing, it is imperative that you understand how data is organized physically inside of files.

The organizations can be divided into two types:

Ordered organization: All the records in a file are ordered in some search key value.

Unordered organization: In this type, records are inserted in the file wherever the place is available, usually to the very end of the file.

Indexes are used to find rows with specific column values quickly.

Without an index, MySQL must begin with the first row and then read through the entire table to find the relevant rows.

The larger the table, the more this costs. If the table has an index for the columns in question, MySQL can quickly determine the position to seek to in the middle of the data file without having to look at all the data.

This is much faster than reading every row sequentially.

## Clustered and Non-Clustered Indices

Indices are:

- Structures associated with a table or view that speeds up retrieval of rows.
  - usually implemented as **B-trees**.
- Indices can be built-in the table (clustered) or stored externally (non-clustered).

- Adding and deleting records in indexed table is slower!
  - Indeces should be used for big tables only (e.g. 50000 rows).

### Clustered Indeces

When you define a PRIMARY KEY on your table, the database uses it as a clustered index.

Define a primary key for each table that you create!

- **Clustered** index **determine the order** of data.
  - Very useful for fast execution of **WHERE**, **ORDER BY** and **GROUP BY** clauses.
- Maximum **1** clustered index per table.
  - If a table has no clustered index, its data rows are stored in an **unordered structure** (heap).

[image assetsSrc="Joins-Subqueries-And-Indices(10).png" /]

### Non-Clustered Indices

A non-clustered index doesn’t sort the physical data inside the table.

In fact, a non-clustered index is stored at one place and table data is stored in another place.

This is similar to a textbook where the book content is located in one place and the index is located in another.

This allows for more than one non-clustered index per table.

- Useful for fast retrieving a **single record** or a **range** of records.
  - Each **key value entry** has a pointer to the data row that contains the key value.
- Maintained in a separate.
- Structure in the DB.

[image assetsSrc="Joins-Subqueries-And-Indices(11).png" /]

**Conclusion**

From the discussion we find following differences between clustered and non-clustered indexes.

1. There can be only one clustered index per table. However, you can create multiple non-clustered indexes on a single table.
2. Clustered indexes only sort tables. Therefore, they do not consume extra storage. Non-clustered indexes are stored in a separate place from the actual table claiming more storage space.
3. Clustered indexes are faster than non-clustered indexes since they don’t involve any extra lookup step.

### Indices Syntax

```Java
CREATE INDEX
ix_users_first_name_last_name
ON users(first_name, last_name);  // users is a table name, first_name and last_name are column names
```

[/slide]
