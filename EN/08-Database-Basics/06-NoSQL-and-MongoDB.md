# NoSQL Databases
[slide]
# Video

[vimeo-video startTimeInSeconds="0"]
[stream language="EN" videoId="442293738" default /]
[stream language="RO" videoId="" /]
[/video-vimeo]

[/slide]

[slide]
# NoSQL Databases - Live Demo

[vimeo-video startTimeInSeconds="0"]
[stream language="EN" videoId="442294031" default /]
[stream language="RO" videoId="" /]
[/video-vimeo]

[/slide]
[slide]
# NoSQL Database

```
{
  ObjectId("59d3fe7ed81452db0933a871"),
  "email": peter@gmail.com,
  "age": 22
}
```

As the name suggests, SQL queries are not used in NoSQL databases.

The NoSQL databases are more **scalable** because of their unstructured nature and they provide **superior performance** in comparison to the SQL databases.

Non-relational databases are, but not limited to:

- MongoDB
- Cassandra
- Redis

As you can see in the example on the slide, data is **stored** as key-value pairs.

It is very similar to JavaScript objects or associative arrays, they have properties and values.

[/slide]

[slide]

# MongoDB

There are **4 different types of NoSQL** database structures.

It is **open-source** and also a **cross-platform** database that follows the document-oriented structure.

MongoDB uses **JSON-like** documents.

Their structure is the same as JavaScript objects.

JSON means **JavaScript Object Notation**.

Nowadays, it is the most used format for transferring data in the programming world.

This kind of NoSQL structure is preferred for creating an **e-commerce product catalog**, **blogs**, etc.
That's because such things have evolving data requirements and it is much easier when you are using a NoSQL database.

The objects are loosely coupled, and this is exactly why it is preferred for applications with ever-evolving data requirements.

# Developer Tools

The client we recommend you to use it **Robo 3T**.

It is a fully-featured client with an embedded shell.

**Robo 3T** will make your work with MongoDB much easier.

It features a visual query builder, which helps you a lot, especially if you are a newbie to databases.

Moreover, it provides you a nice feature.

An alternative client would be NoSQLBooster.

It is a **shell-centric** and cross-platform client with a graphical interface.

It features a fluent query builder that allows you to communicate with the database engine.

[/slide]

[slide]
# Creating a Database

You can see how the database creation pop-up window looks like:

[image assetsSrc="create-database1.png" /]

**Creating a database** with the Robo 3T client is done simply by using the graphical interface it provides.

Easily right-click on `New Connection` and select `Create Database`.

Then you'll have to enter the desired database name and click the `Create` button.

You can see how the database creation pop-up window looks on the slide.

# Creating Collection and Inserting Values

There are no **tables** in MongoDB.
It structures the data in collections instead.
To create a collection, you have to enter the method:

```
db.createCollection('people')
```
The collection name is passed as a string between quotes in the brackets.

To **insert** a record in a collection, first you have to **retrieve it using the** `db.getCollection()` method:
```
db.getCollection('people')
  .insert({ 
   firstName: 'Michael',
   lastName: 'Smith',
   email: 'michael@gmail.com',  
})
```

Just like the previous method – you have to pass **the collection name between the brackets**.

Then, right after, you have to use the `.insert()` method which accepts a JSON object.

JSON objects start with an **opening curly brace** and finish with a **closing curly brace**.

Between the curly braces, key-value pairs are listed separated with a comma.

# Retrieve Entries
First, you have to retrieve the desired collection with the method we already covered:

```
db.getCollection('people').find({})
```
Then, you use the method `find()` which accepts a **JSON object** and tries to find and return it.
But as you see in the example, passing an **empty** object will return you all the objects in that collection.


If you want to **filter retrieved objects by given criteria**, you need to pass an object with the **key-value pair** you are looking for to the `.find()` method:
```
db.getCollection('people').find({ firstName: 'Michael' })
```
This method line will retrieve all people who have a key `firstName` with value `Michael`.


To retrieve a specific field, you need to pass one more object to the `.find()` method.

The first object serves as a filter, while the second one specifies which fields you want to be returned.

```
db.getCollection('people').find(
  { firstName: 'Michael' },
  { firstName: 1 }
)
```
The example will return every record that has `firstName` equal to `Michael`, but only its `firstName` key and its value.

[/slide]

[slide]
# Updating and Delete Entries

You can also update entries:
```
db.getCollection('people').update(
  { firstName: 'Anne' }, 
  { firstName: 'George' }
)
```

To update the first record in the collection, just use the `.update()` method.

Then you pass 2 objects:

- `.find()` method, it searches for entries with the given criteria.

- The second one holds the keys to be updated and their values.

In the example, the method will look for records with `firstName` equal to `Anna` and change it to `George`.

But the update operation will be executed **only on the first found entry**.

If you want to update all entries that match the criteria in the first object, you have to pass one more object with key-value pair `$multi: true`:

```
db.getCollection('people').update(
  { firstName: 'Anne' },
  { firstName: 'George' },
  { $multi: true }
)
```
It will make the `.update()` method update all entries found.

# Deleting Entries
To delete a single entry, you have to use the `.deleteOne()` method:

```
db.getCollection('people').deleteOne(
   { firstName: 'George' }
)
```

Just like the previous methods, it accepts an object that serves as criteria to search the collection.
As the name suggests, this method deletes one entry, the first that matches the criteria given.

If you want to delete all entries that match the given criteria, you simply have to use the `.deleteMany()` method:

```
db.getCollection('people').deleteMany(
   { firstName: 'George' }
)
```

It does the same job with the only difference that it will delete all entries that match the criteria, instead of only the first one.

[/slide]