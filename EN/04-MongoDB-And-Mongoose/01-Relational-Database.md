
# Relational and NoSQL Database

[slide hideTitle]

# Relational Database

A **relational database** is a collection of information stored in tables.

Each column of the table contains a different attribute of the data.

Every table in the database has a unique identifier field called **primary key**.

It can link the original table with other ones where it is used as a **foreign key**.

Almost all **relational databases** use **SQL** (Structured Query Language) to **extract** data.

SQL syntax may be different depending on which **relational database** management system you use.

Some of the most popular **relational database** are:

- **MySQL**

- **PostgreSQL**

- **Oracle DB**

- **SQLite**

[image assetsSrc="MongoDB-And-Mongoose.png" /]

[/slide]

[slide hideTitle]

# Non-relational Database (NoSQL)

**Non-relational databases** store data differently than traditional relational databases. 

The **Non-Relational database** is more flexible than the traditional one since it stores data in a non-tabular form and might be based on structures like documents. 

The document files can be highly detailed, containing a range of different types of information.

**NoSQL** databases are often used when large and complex data needed to be organized.

Some of the most popular **Non-relational database** are:

- **MongoDB**

- **Cassandra**

- **Redis**

Here is a simple example of a table in a **relational database:**

| **Id** | **Name** | **Price** | **Quantity** | **Department** |
| :---: | :---: | :---: | :---: | :---: |
| 1 | Milk | 1.49 | 50 | Dairy |
| 2 | Muesli | 2.30 | 120 | Cereal |
| 3 | Apples | 0.60 | 80 | Fruits |

The **same** data in a **non-relational database:**

```js
{
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

The main difference is that in the **non-relational database** we can add other entries without the need to have the same **keys**.

So, a new product with different properties can be added:

```js 
{
    id: 4,
    name: "Coca-Cola",
    rating: 25
},
```

In this example, we **add a new entry** (item) in our table without previous fields.

As we see, the new product does not have a **price**, **department**, or **quantity** field.

Instead, it has a new field called **rating**.

This is the main difference. 

In a **Non-Relational database**, we do not rely on a schema that defines the fields beforehand.

This makes them very flexible.

[/slide]

