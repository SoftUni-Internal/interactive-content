# Mongoose

[slide hideTitle]

# Mongoose Overview

**Mongoose** is an **Object Data Modeling library** for MongoDB and Node.Js.

It is used to manage the relations between data and translate our objects into code.

These are some of its features:

- It provides a **straightforward**, **schema-based** solution to **model** your application data

  * the *schema* describes the fields of the properties

- Since MongoDB is a schema-less NoSQL document database, we can store **JSON** documents in it

- Extends the native **queries**

To **install** it, just open a **command line** and type:

`npm install mongoose`

There are some benefits to using **Mongoose** over **native MongoDB**:

- When using **Mongoose** we eliminate the need to use **named collections** since it provides an **abstraction layer** on top of **MongoDB**

- We can write new functions which can be attached to **Models** in Mongoose

- Queries use function chaining

That makes the code more flexible and readable.

You can learn more about **MongooseJS** [here.](https://mongoosejs.com/docs/api.html)

[/slide]

[slide hideTitle]

# Working with Mongoose in Node.js

To work with Mongoose, we must load the following **module**:

`const mongoose = require('mongoose')`

Then, we connect to the database with the `.connect()` method:

`mongoose.connect('mongodb://localhost:27017/unidb')`

These two lines of code are all we need to begin working with Mongoose.
[/slide]


[slide hideTitle]

# MongoDB Hosting

To host a **database** in the global MongoDB **cloud** service go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and register.

You can store up to 512 MB of data for free.

[/slide]
