# Remote Databases

[slide hideTitle]

# Relational Databases

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-3-relational-databases-FIX-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Relational databases** maintain data in **tables**, providing an **efficient and flexible** way to store and access structured information. 

The tables consist of **columns** containing one or more data categories, as well as rows.

**Rows**, also known as table records, are **sets of data**, defined by the **category**.

Each table has a **unique** identifier called a **primary key**, which identifies the information in the table.

The logical connection between different tables is established with **foreign keys** - a field in a table that connects with the **primary key** of another table.

**SQL** or **Structured Query Language** is the primary interface used to communicate with relational databases.

[/slide]

[slide hideTitle]

# Non-Relational Databases

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-4-non-relational-databases-FIX-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The main difference between **relational** and **non-relational** databases is how they **store their information.**

**Non-relational** databases, often called **NoSQL**, are different from traditional relational databases in that they store their data in a **non-tabular form.** 

Non-relational databases are based on data structures, **like documents.** 

A document can be **highly detailed** while containing a range of distinct **types** of information in different **formats**. 

This ability to organize various types of information **side-by-side** makes non-relational databases much more **flexible** than relational databases.

**Non-relational** databases often perform **faster** because a query does not have to **view several tables** to deliver an answer, as relational datasets often do. 

**Non-relational** databases are ideal for storing data that may be **changed frequently** or for applications that handle many different kinds of data.

[/slide]

[slide hideTitle]

# Relational And Non-Relational Pros

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-5-relational-and-non-relational-pros-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Pros of Relational Databases:**
- The data is structured by categories
- They support **ACID** transactional consistency and "**JOINs**"
  * **ACID** makes sure that data is properly transferred in all circumstances
  * **JOIN** clauses enable combining rows from separate tables, based on a related column
- Built-in data integrity and a large ecosystem
- Relationships in this system have constraints
- Limitless indexing

One of the **benefits** of using a Relational Database is that it allows the user to **classify the data into different categories** and store them efficiently. 

In computer science, **ACID** (atomicity, consistency, isolation, durability) is a set of properties of database transactions intended to **guarantee** data validity despite errors, power failures, etc.

The key constraint specifies that in any relation, all of the values of a primary key must be unique.

The value of a primary key must not be **null**.

Relational databases use indexes to quickly locate data without searching every row in every table.

**Pros of Non-Relational Databases:**
- Data is not confined to a structured group
- You can perform functions that allow for a greater flexibility
- They scale out horizontally
- High availability
- Many NoSQL databases are **open source**

NoSQL databases have become popular because they **store** data in **straightforward** forms that can be easier to **understand** than the type of data models used in SQL databases.

NoSQL databases often allow developers to change the **structure of the data**.

They can scale out "**horizontally**", meaning that they run on multiple **servers** that work together, each sharing part of the load.

High-availability NoSQL databases are systems designed to run **without an interruption of service.**

Many web-based businesses require data services that are available without interruption.

[/slide]

[slide hideTitle]

# What is BaaS?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-6-backend-as-a-service-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Backend-as-a-Service** or **BaaS** is a cloud service model, in which developers outsource all of the behind-the-scenes aspects of a web or a mobile application so that they only have to write and maintain the frontend. 

**BaaS** vendors provide pre-written software for activities that take place on servers, such as **user authentication**, **database management**, **remote updating**, and push notifications (for mobile apps), as well as **cloud storage** and **hosting**.

Using a **BaaS** drastically increases the development speed while keeping the price low.

It being **serverless** is yet another advantage, because there is no need for infrastructure management.

There are two types of BaaS: **Cloud BaaS** and **Open-source BaaS**.

[/slide]
