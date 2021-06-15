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

```js
npm install mongoose
```

There are some benefits to using **Mongoose** over **native MongoDB**:

- When using **Mongoose** we eliminate the need to use **named collections** since it provides an **abstraction layer** on top of **MongoDB**

- We can write new functions which can be attached to **Models** in Mongoose

- Queries use function chaining

That makes the code more flexible and readable.

You can learn more about **MongooseJS** [here.](https://mongoosejs.com/docs/api.html)

## Working with Mongoose in Node.js

To work with Mongoose, we must load the following **module**:

```js
const mongoose = require('mongoose')
```

Then, we connect to the database with the `.connect()` method:

```js
mongoose.connect('mongodb://localhost:27017/unidb')
```

These two lines of code are all we need to begin working with Mongoose.

## MongoDB Hosting

To host a **database** in the global MongoDB **cloud** service go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and register.

You can store up to 512 MB of data for free.

[/slide]

[slide hideTitle]
# Models

Models are constructors compiled from **Schema** definitions.

The **Schema** itself forms the structure of the document.

It may define properties like default values, validators, whereas the **model** provides an interface to the database.

You can create a new Schema as an instance of `mongoose.Schema`:

Take a look at the following example:

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

First, we create a new schema where we define the model properties.

When we call `mongoose.model()` on a Schema, it **compiles** a ready-to-use model.

## Model Methods

Mongoose Models are just JavaScript **object constructors**.

They come with different methods **methods**.

Here is how their syntax differs from plain JS:

``` js
const studentSchema = new mongoose.Schema({…});
studentSchema.methods.getInfo = function() { // Avoid arrow functions
    return `I am ${this.firstName} ${this.lastName}`;
};
```

As you can see, other methods can be added to a schema.

[/slide]

[slide hideTitle]

# Model Virtual Properties

We can create **Virtual** properties that exist only in the **Mongoose Model** and not in MongoDB.

They are additional fields for a given model. 

We should first create a new Schema for our example:

``` js
// We define a user schema
var userSchema = new Schema({  
    firstName: String,
    lastName: String
});

// Then compile our model
var User = mongoose.model('User', userSchema);

// Final step is to add a new user
var employee = new User({  
    firstName: 'Jason',
    lastName: 'Harris'
});
```

If we want to get the full name of our employee, we can concatenate the first and last name manually.

``` js
console.log(mentalist.first + ' ' + mentalist.last); // Jason Harris 
```

This can be done using **virtual fields** as well. 

This way, we avoid concatenating every time we need a full name.

Virtual properties have both **getters** and **setters**.

``` js
userSchema.virtual('fullname').get(function() {  
    return this.firstName + ' ' + this.lastName;
});
```

The virtual full name property will print the same output as above:

``` js
console.log(employee.fullname); // Jason Harris
```

We can use setters to manipulate our string.

This example **splits** the passed name at every whitespace.

``` js
userSchema.virtual('fullname').set(function(name) {
    var split = name.split(' ');
    this.first = split[0];
    this.last = split[1];
});
```

[/slide]

[slide hideTitle]

# Property Validation

Using Mongoose, developers can **define** custom **validations** on their properties.

Validation is defined in the *SchemaType*.

``` js 
studentSchema.path('firstName')
    .validate(function() {
        return this.firstName.length >= 2 &&
            this.firstName.length <= 10
    }, 'First name must be between 2 and 10 symbols long!') // Error message passed as a second parameter
```

By validating, we can make sure that "**bad**" data does not get in the application.

**Mongoose** has **built-in** support for data schemas and the automatic validation of data when it is persisted.

**Mongoose validators** are easy to configure.

[/slide]

[slide hideTitle]

# Exporting Modules

Having all model definitions in the **main** module is a bad practice.

That is the reason Node.js has **modules** in the first place.

```js
const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    facultyNumber: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('Student', studentSchema);
```

We can put each **model** in a different **module** and **load** all models at the start of our program.

```js
const Student = require('./models/Student');
```

[/slide]

[slide hideTitle]

# Mongoose: Demo

//MongoDB-Demo-2

[/slide]
