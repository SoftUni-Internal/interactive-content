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

[slide]

# Exporting Modules

Having all model definitions in the **main** module is not good practice.

That is the reason Node.js has **modules** in the first place.

``` js
const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   facultyNumber: { type: String, required: true, unique: true },
   age: { type: Number }
});

module.exports = mongoose.model('Student', studentSchema);
```

We can put each **model** in a different **module** and **load** all models at the start of our program.

``` js
const Student = require('./models/Student');
```

[/slide]