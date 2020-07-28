# Database Management

[slide]
# Video

[vimeo-video startTimeInSeconds="0"]
[stream language="EN" videoId="442289177" default /]
[stream language="RO" videoId="" /]
[/video-vimeo]

[/slide]

[slide]
# What is а Database?

[image assetsSrc="what-si-db.png" /]

A database is a **collection** of information that is organized so that it can be **easily accessed**, managed, and updated.

Usually, you need to store information that will be **accessible** even after you end the program.

One way to do that is by **using a text file** but this is not scalable and **doesn’t provide any structure**.

This is where databases takes over.

Modern databases are managed by a **Database Management System**, which makes it much easier for the developers.

In comparison with the text file option, a real database provides **structure**.

This makes databases very optimized.

Each type of information is stored **in its a table**.

For example, **information** about students and teachers will be stored in **two different tables**.

Different data about students, for example, their age, **is stored in columns**.

Relations between tables **establish connectivity**, which will be explained later.

Databases provide you **CRUD operations**.

**CRUD** is an abbreviation, where each letter stands for a **single operation**.

Those are the basic operations you will be performing on a database:

- **C** –\> Create, add information to the database.
- **R** –\> Read, retrieve information from the database.
- **U** –\> Update already added information.
- **D** –\> Delete information from the database.

Databases also give you the possibility to execute **more complex** operations with queries.

Those can be for **searching**, **sorting**, etc., the information stored in the database.

[/slide]

[slide]
# Database Management System

**Database Management System**, also referred just as **Database** is a software that defines, manipulates, retrieves, and manages data in a database.

While a database is just a **collection** of files, the **DBMS** is what makes it so powerful with its structure and optimizations.

For comparison, in a text file will be able to save **whatever information** you like, while in a database, managed by the DBMS you **can set rules** on the incoming information.

Each DBMS defines its **type of files** with which it operates.

The **software then works with those files**, executing the commands you give it for manipulating the data.

You c**annot use the files** of one database with another database.

However, some databases provide you the option to **export** and **import** files.

Some examples of **DBMS** you may have heard of are:

- MySQL -\> which is **free** to use.

- MS SQL Server -\> which is **free** to use.

- Oracle -\> it's also paid.

They are very **similar** to each other.

Differences may be noticed on **large-scale projects**.

Communities usually stick to a specific **DBMS**, although it isn't set in stone, a programming language isn't coupled with a DBMS.

For example, C# developers use MS SQL Server, while Java developers use Oracle.

[/slide]


[slide]
# Storage vs. Management

[image assetsSrc="storage-vs-manegement.png" /]

Information about each order or **purchase** from a store is printed on a receipt, this is a **database**.
But if you have **thousands** of sales or buys per day.
It's hard to keep all receipts physically, that will take way too much space.

Moreover, managing that data will be hard too, searching through it, for example.

Databases give you the possibility to **keep different information** about the same thing in columns.

[image assetsSrc="table.png" /]

As you can see, there is information about the number of the order, when it has been made, who is the customer, etc.

This is a **database table** for orders.

All that **information** is stored in a separate column.

This **resembles** a lot an Excel table.

Each row is a single **entity**, in this example – an **order**.

This is much more optimized than keeping physically thousands of receipts.

If we take the sore receipt for as an example, it would take a huge amount of space to keep all of the receipts.

This is easily solved with a database as it is stored on your computer, or even on a cloud service.

With databases, you can easily **update** the entity you need to, setting a new **value**.

This is much like setting a new value to a **variable**.

[/slide]