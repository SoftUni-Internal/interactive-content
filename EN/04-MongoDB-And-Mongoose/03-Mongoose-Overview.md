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