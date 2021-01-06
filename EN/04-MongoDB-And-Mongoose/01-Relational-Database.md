
# Relational and NoSQL Database

[slide]

# Relational Database

A relational database is collection of information. 

The tables used in relational databases store information about the objects.

Tables contains rows that holds information, which has unique identifier - known as a **key**.

Each column contains the attributes of the data.

Almost all relational databases use **SQL** to **extract** data.

SQL syntax may be different depending on which relational database management system you use.

Some of the most popular RDBMS are:

- MySQL

- PostgreSQL

- Oracle DB

- SQLite


[/slide]

[slide]

# Relational Database - Example

[image assetsSrc="MongoDB-And-Mongoose.png" /]


[/slide]

[slide]

# Non-relational Database (NoSQL)

A Non-relational databases are different from traditional relational databases. They store data differently than relational databases do.

The Non-Relational database is more flexible than the traditional, since it stores data in a non-tabular form.

They might be based on structures like documents. Most of the times, the document files can be highly detailed while containing a range of different types of information.

**NoSQL** databases are ofter used when large and complex data needed to be organized.

Here is a simple example of a table in a **relational database:**

| id | name | price | quantity | department |
| --- | --- | --- | --- | --- |
| 1 | Milk | 1.49 | 50 | Dairy |
| 2 | Muesli | 2.30 | 120 | Cereal |
| 3 | Apples | 0.60 | 80 | Fruits |

The **same** data in a **non-relational database:**

```
[{
    id: 1,
    name: "Milk",
    price: 1.49,
    quantity: 50,
    department: "Dairy"
},
{
    id: 2,
    name: "Muesli",
    price: 2.30,
    quantity: 120,
    department: "Cereal"
},
{
    id: 3,
    name: "Apples",
    price: 0.60,
    quantity: 80,
    department: "Fruits"
},

```

The main difference is that in the **non-relational database** we can add other entry without need to have the same **key**.

So, new product with different properties can be added:

``` 
{
    id: 4,
    name: "Coca-Cola",
    rating: 25
},
```

In this example, we add new entry (item) in our table without previous fields.

As we see, the new product does not have a **price** , **department** or **quantity** field.

Instead, it has a new field called **rating**.

This is the main difference. In Non-Relational database we does not relie on a schema that defines the fields beforehands.

This adds a **huge** flexibility.



[/slide]

