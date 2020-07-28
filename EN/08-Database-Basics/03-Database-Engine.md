# Database Engines
[slide]
# Video

[vimeo-video startTimeInSeconds="0"]
[stream language="EN" videoId="442292374" default /]
[stream language="RO" videoId="" /]
[/video-vimeo]

[/slide]

[slide]
# Database Engine Flow
[image assetsSrc="Database-Engine-Flow.png" /]

The DBMS **depends on software-specific** files where the data is stored.

The engine is responsible for the o**ptimization of data access**, structure, and manipulation.

The client is software used to connect to a database and access the data.

Each **DBMS there is a client to work with** because otherwise, we wouldn't be able to work with those databases.

The workflow is as follows:

Create a query through the client which is passed to the engine.

The engine processes the query and accesses the data.

The database returns the desired data to the engine.

In the end, the engine interprets the returned data and passes it to the client in a human-readable format.

[/slide]

[slide]
# Server Architecture

[image assetsSrc="Server-Architecture.png" /]

An instance of a server is like installation of a software.

For example, you can have three instances of Visual Studio, which is the IDE used to write C#.
This way, you can have **more than one** DBMS.

They can be of different types or just different instances of the same type.

In an instance, we have a **distribution of the database** (the schema) and all of the structure of the instance.

Of course, the tables are also **part of the structure**.

This all is called **logical storage**.

There is also another layer, **physical storage**.

That is the **files**, the **raw data** on our hard disk.

Also, there are **logs** about what has been done by whom.

That is the physical storage.

[/slide]

[slide]
# Database Table Elements

[image assetsSrc="Database-Table-Elements.png" /]

The table is the **primary building block** in the relational databases.

There is an example of a table about order.

Each row is called a **record**, or entity.

It defines a **single object of that type**.

In this example, each row refers to a **specific order**.

Each column (also called a field) defines the type of data they contain.

It is a piece of information about the **entity**.

In this case, there are **4 columns**, each contains information about an order.

The `ItemId` column keeps the ID that of the order.

Every intersection of a row and column is called a cell.

[/slide]
