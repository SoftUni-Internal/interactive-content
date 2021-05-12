# Mongoose

[slide hideTitle]

# Mongoose Overview

**Mongoose** is an **Object Data Modeling library** for MongoDB and Node.Js.

It is used to manage the relations between data, and translate our objects into code.

- It provides a **straight-forward**, **schema-based** solution to **model** your application data

  * the *schema* describes the fields of the properties

- Since MongoDB is a schema-less NoSQL document database, we can store **JSON** documents in it

- Extend the native **queries**

To **install** - type in **CMD**:


`npm install mongoose`


There are some benefits using **Mongoose** over **native MongoDB**:

- When using **MongooseJS** we eliminate the need to use **named collections** since **MongooseJS** provides an **abstraction layer** on top of **MongoDB**

- We can incorporate new functions since functions may be attached to **Models** in Mongoose

- Queries use function chaining

That makes the code more flexible and readable.

You can learn more about **MongooseJS** [here.](https://mongoosejs.com/docs/api.html)

[/slide]

[slide hideTitle]

# Working with Mongoose in Node.js

To work with MOngoose we must load the following **module**:

`const mongoose = require('mongoose')`

Then, we connect to the database:

`mongoose.connect('mongodb://localhost:27017/unidb')`


[/slide]


[slide hideTitle]

# MongoDB Hosting

To host a **database** in the global MongoDB **cloud** service go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and register.

You can store up to 512 MB of information.

[/slide]



