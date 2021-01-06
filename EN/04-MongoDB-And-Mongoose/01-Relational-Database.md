
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


[slide]

# MongoDB Overview

You can download MongoDB from [official site](https://www.mongodb.com/download-center)

When installed, MongoDB needs a **driver** that use with Node.js .NET, Java.

```
npm install mongodb -g
```

[/slide]

[slide]

# Additional Configuration

When installed, additional configurations will be needed.

- Go to installation folder and **run** a command prompt as an **administrator**.

- Type the following command:

```
<path to mongod.exe> mongod --dbpath <path to store data>
```

Usually, in C:\Program Files\MongoDB\Server\3.4\bin

You can find additional information [here](https://docs.mongodb.com/manual/tutorial/)



[/slide]

[slide]

# Working with MongoDB Shell Client

- Start the shell from **another** CLI.
  * Type the command **mongo**
  * show dbs              
  * use mytestdb

```
db.mycollection.insertOne({"name":"George"})
db.mycollection.find({"name":" George"})
db.mycollection.find({})
```

More additional information [here](https://docs.mongodb.com/manual/reference/mongo-shell/)



[/slide]

[slide]

# Working with MongoDB GUI

There are many MongoDB graphical user interfaces that help developers to manage their databases.

For the purposes of this lesson, we will not dive deep in the comparison between different interfaces.

Most popular GUI's are:

- Robo 3T - [Download Link](https://robomongo.org/download)
- NoSQLBooster - [Download Link](https://nosqlbooster.com)
- Studio 3T - [Download Link](https://studio3t.com/download/)

You can choose one that matches your project at most.

[/slide]


[slide]

# Working with MongoDB from Node.js

Here is a simple example how to connect with MongoDB using Node.js

``` js
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr);
client.connect(function(err) {
  if (err) { throw new Error(err) }
  const db = client.db('testdb');
  const people = db.collection('people');
  people.insert({ 'name': 'John' }, (err, result) => {
    people.find({ name: 'John' }).toArray((err, data) => {
      console.log(data);
    });
  });
});
```

First, we import MongoClient and set our connection String. 

After that, that we have connection string, we can create an instance of MongoClient.

The last step is to make a function that would collect our info about the people inside.

[/slide]

[slide]

# Mongoose Overview

Mongoose is an Object Data Modeling library for MongoDB and Node.Js.

It is used to manage the relations between data, and translate our objects in code.

- It provides a straight-forward, **schema-based** solution to **model** your application data.

  * The *schema* describes the fields of the properties.

- Since MongoDB is a schema-less NoSQL document database, we can store **JSON** documents in it.

- Extend the native **queries**.

To **install** - type in CMD:

```
npm install mongoose
```

There are some benefits using Mongoose over native MongoDB:

- When using MongooseJS we eliminate the need to use **named collections**, since MongooseJS provides an abstraction layer on top of MongoDB.

- We can incorporate new functions since functions may be attached to **Models** in Mongoose.

- Queries use function chaining. That makes the code more flexible and readable.



[/slide]

[slide]

# Working with Mongoose in Node.js

To work with MOngoose we must load the following **module**:

```
const mongoose = require('mongoose')
```

Then, we connect to the database:

```
mongoose.connect('mongodb://localhost:27017/unidb')
```


[/slide]

[slide]

# MongoDB Hosting

To host a **database** in the global MongoDB **cloud** service go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and register.

You can store up to 512 MB information.

[/slide]

[slide]

# Mongoose Models

Models are constructors compiled from *Schema* definitions.

The *Schema* itselfs define the structure of the document.

It may defines a properties like default values, validators, whereas the **model** provides an interface to the database.

The schema can be compiled using mongoose.Schema call:

Let's take a look at the following example:

``` js
const exampleSchema = new mongoose.Schema({
  propString: String,
  propNumber: Number,
  propObject: {},
  propArray: [],
  propBool: Boolean
});
const Model = mongoose.model('Example', exampleSchema);
```

The first thing is to create a new schema that we would define the model properties after that compiling.

When we call `mongoose.model()` on a schema, it **compiles** a ready to use model.


[/slide]

[slide]

# Model Methods

Mongoose Models are just JavaScript **object constructors**.

They can have **Methods**.

They use different syntax than plain JS.

``` js
const studentSchema = new mongoose.Schema({…});

studentSchema.methods.getInfo = function() { // Avoid arrow function
   return `I am ${this.firstName} ${this.lastName}`;
};
```

As we see, this methods can be added to a schema.

[/slide]

[slide]

# Model Virtual Properties

We can create a **Virtual** properties that exist only in the **Mongoose Model**, not in the MongoDB itself.

Virtuals are additional fields for a given model. 

A example is helpful:

``` js
// We define a user schema
var userSchema = new Schema({  
    firstName: String,
    lastName: String
});

// Then compile our model
var User = mongoose.model('User', userSchema);

// Final step is to create a document
var employee = new User({  
    firstName: 'Jason',
    lastName: 'Harris'
});
```

if we want to get the full name of our employee we can concatenate first and last name manually.

``` js
console.log(mentalist.first + ' ' + mentalist.last); // Jason Harris 
```

This can be done using **virtual fields**. 

This way, we will write name concatenation only once.

Virtual properties have both **getters** and **setters**.

``` js
userSchema.virtual('fullname').get(function() {  
    return this.firstName + ' ' + this.lastName;
});
```

The virtual fullname property will print the same output as above:

``` js
console.log(employee.fullname); // Jason Harris
```

We can use setters to manipulate our string.

This example splits the passed name at any whitespace.

``` js
userSchema.virtual('fullname').set(function (name) {  
  var split = name.split(' ');
  this.first = split[0];
  this.last = split[1];
});
```

[/slide]

[slide]

# Property Validation

Using Mongoose, developers can **define** custom **validations** on their properties.

Validation is defined in the *SchemaType*.

``` js 
studentSchema.path('firstName')
  .validate(function () {
   	return this.firstName.length >= 2 
	&& this.firstName.length <= 10
}, 'First name must be between 2 and 10 symbols long!') // Error message passed as second parameter
```

Data validation is important. That way, we can make sure that "bad" data does not get in the application.

Mongoose has a built-in support for data schemas, and the automatic validation of data when it is persisted.

Mongoose validators are easy to configurate.

[/slide]