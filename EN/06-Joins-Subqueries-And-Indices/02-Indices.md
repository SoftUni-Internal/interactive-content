[slide]

# Indices

## Clustered and Non-Clustered Indices

Indices are:

- Structures associated with a table or view that speeds up retrieval of rows
  - usually implemented as **B-trees**
- Indices can be built-in the table (clustered) or stored externally (non-clustered)

- Adding and deleting records in indexed table is slower!
  - Indeces should be used for big tables only (e.g. 50000 rows)

### Clustered Indeces

- **Clustered** index **determine the order** of data
  - Very useful for fast execution of **WHERE**, **ORDER BY** and **GROUP BY** clauses
- Maximum **1** clustered index per table
  - If a table has no clustered index, its data rows are stored in an **unordered structure** (heap)

[image assetsSrc="[Joins-Subqueries-And-Indices(10).png" /]

### Non-Clustered Indices

- Useful for fast retrieving a **single record** or a **range** of records
  - Each **key value entry** has a pointer to the data row that contains the key value
- Maintained in a separate
- Structure in the DB

[image assetsSrc="[Joins-Subqueries-And-Indices(11).png" /]

### Indices Syntax

```Java
CREATE INDEX
ix_users_first_name_last_name
ON users(first_name, last_name);  // users is a table name, first_name and last_name are columns
```

[/slide]
