# Remote Databases

[slide]

# Relational Databases

[vimeo-video]
[stream language="EN" videoId="498356193/5a0918ae93" default /]
[stream language="RO" videoId="498356193/5a0918ae93"  /]
[/video-vimeo]

A relational database is a collection of tables with pre-defined relationships between them. 

The data is organized as a set of tables with columns and rows. 

Tables are used to hold information about the objects represented in the database. 

Each column in a table holds a certain kind of data.

The rows in the table represent a collection of related values of one object or entity. 

Each row in a table could be marked with a unique identifier called a primary key, and rows among multiple tables can be made related using foreign keys. 

SQL or Structured Query Language is the primary interface used to communicate with Relational Databases.

[image assetsSrc="Remote-Databases(19).png" /]

# Non-Relational Databases

The main difference between relational and non-relational databases is how they store their information.

Non-relational databases (often called NoSQL databases) are different from traditional relational databases in that they store their data in a non-tabular form. 

Non-relational databases might be based on data structures like documents. 

A document can be highly detailed while containing a range of different types of information in different formats. 

This ability to organize various types of information side-by-side makes non-relational databases much more flexible than relational databases.

Non-relational databases often perform faster because a query does not have to view several tables in order to deliver an answer, as relational datasets often do. 

Non-relational databases are therefore ideal for storing data that may be changed frequently or for applications that handle many different kinds of data.

[image assetsSrc="Remote-Databases(20).png" /]

[/slide]

[slide]

# Relational And Non-Relational Pros

[vimeo-video]
[stream language="EN" videoId="498356293/48bad932af" default /]
[stream language="RO" videoId="498356293/48bad932af"  /]
[/video-vimeo]

**Pros of a Relational Database:**
- Data is easily structured into categories.
- They support **ACID** transactional consistency and support "joins".
- Relationships can be easily defined between data points.
- Limitless indexing.

One of the major benefits of using a Relational Database is that this type of database allows the user to simply classify the data into different categories and store them efficiently. 

This arrangement can be further fetched using queries and filters. 

After creating the new database, any set of data under different categories can be included in the database, without any alteration to the existing system.

In computer science, ACID (atomicity, consistency, isolation, durability) is a set of properties of database transactions intended to guarantee data validity despite errors, power failures, and other mishaps.

As the data is divided amongst the tables of the relational database system, it is possible to make a few tables to be tagged as confidential and others not. 

This segregation is easily implemented with a relational database management system, unlike other databases.

Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed.

**Pros of a Non-Relational Database:**
- Data is not confined to a structured group.
- You can perform functions that allow for greater flexibility.
- They scale out horizontally.
- High availability.
- Many are **open source**.

NoSQL databases have become popular because they store data in simple straightforward forms that can be easier to understand than the type of data models used in SQL databases.

In addition, NoSQL databases often allow developers to directly change the structure of the data.

They can scale-out “horizontally,” meaning that they run on multiple servers that work together, each sharing part of the load.

High-availability NoSQL databases are systems designed to run without interruption of service. 

Many web-based businesses require data services that are available without interruption.

[/slide]

[slide]

# What is BaaS?

[vimeo-video]
[stream language="EN" videoId="498356368/437c121efd" default /]
[stream language="RO" videoId="498356368/437c121efd"  /]
[/video-vimeo]

Backend-as-a-Service (BaaS) is a cloud service model in which developers outsource all the behind-the-scenes aspects of a web or mobile application so that they only have to write and maintain the frontend. 

BaaS vendors provide pre-written software for activities that take place on servers, such as user authentication, database management, remote updating, and push notifications (for mobile apps), as well as cloud storage and hosting.

There are two types of BaaS. One is Cloud BaaS and the other is Open source BaaS.

[/slide]