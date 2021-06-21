# MongoDB Overview

[slide hideTitle]
# Installing MongoDB

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/04.MongoDB-And-Mongoose/07-08-09-10-MongoDB-Overview-Install-Configure-MongoDB-Working-with-Schell-client-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

You can download MongoDB from the [official site](https://www.mongodb.com/download-center)

When installed, MongoDB needs a **driver** that works with **Node.js**, **.NET**, and **Java**.

```js
npm install mongodb -g
```

## Configuring MongoDB

When installed, additional configurations will be needed.

- Go to the installation folder and **run** a command prompt as an **administrator**

- Type the following command:

`<path to mongod.exe> mongod --dbpath <path to store data>`

Usually, the path is `C:\Program Files\MongoDB\Server\3.4\bin`.

You can find more information [here.](https://docs.mongodb.com/manual/tutorial/)

## Working with MongoDB Shell Client

There are several steps to follow when working with the Shell Client.

- Start the shell from **another** CLI and type the following commands
  * `mongo`
  * `show dbs`
  * `use mytestdb`

This is how you can add or find data in MongoDB:

```js
db.mycollection.insertOne({"name":"George"})
db.mycollection.find({"name":"George"})
db.mycollection.find({})
```

You can find more information about all other methods and commands [here.](https://docs.mongodb.com/manual/reference/mongo-shell/)

[/slide]


[slide hideTitle]
# MongoDB Shell Client: Demo

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/04.MongoDB-And-Mongoose/MongoDB-Demo-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Working with MongoDB GUI

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/04.MongoDB-And-Mongoose/11-Working-woth-MongoDB-GUI-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Many **MongoDB graphical user interfaces** help developers to manage their databases.

For this lesson, we will not dive deep into the comparison between different interfaces.

The most popular **GUI**'s are:

- [Robo 3T](https://robomongo.org/download)

- [NoSQLBooster](https://nosqlbooster.com)

- [Studio 3T](https://studio3t.com/download/)

You can choose one that matches your project the most.

[/slide]


[slide hideTitle]

# Working with MongoDB from Node.js

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/04.MongoDB-And-Mongoose/12-Working-with-MongoDB-from-NodeJS-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is a simple example of how to connect with **MongoDB** using Node.js

``` js
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr);
client.connect(function(err) {
    if (err) {
        throw new Error(err)
    }
    const db = client.db('testdb');
    const people = db.collection('people');
    people.insert({
        'name': 'John'
    }, (err, result) => {
        people.find({
            name: 'John'
        }).toArray((err, data) => {
            console.log(data);
        });
    });
});
```

First, we import **MongoClient** and set our **connection string**. 

After that, we can create an instance of **MongoClient**.

The last step is to make a function that would collect our data about the people inside.

[/slide]

