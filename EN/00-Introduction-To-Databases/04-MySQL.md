# MySQL

[slide hideTitle]

# MySQL

MySQL is free and open-source software under the terms of the **GNU General Public License** and is also available under a variety of proprietary licenses. 

It was owned and sponsored by the Swedish company **MySQL AB**, which was bought by **Sun Microsystems** now called **Oracle Corporation**.

Many database-driven web applications use MySQL, including **Drupal**, **Joomla**, **phpBB**, and **WordPress**.

MySQL is also used by many popular websites, among them **Facebook**, **Twitter** and **YouTube**.

Works on many system platforms including **Windows**, **MAC OS**, **Linux**.

Here are some links for downloading MySQL Server:

- [For Windows](https://dev.mysql.com/downloads/mysql/)
- [For Ubuntu](https://dev.mysql.com/downloads/repo/apt/)

[/slide]

[slide hideTitle]

# MySQL Server Architecture

The MySQL server architecture isolates the application programmer and DBA from all of the low-level implementation details at the storage level, providing a consistent and easy application model and API. 

Аlthough there are different capabilities across different storage engines, the application is shielded from these differences. 

The MySQL storage engine architecture enables us to select a specialized storage engine for a particular application need while being completely shielded from the need to manage any specific application coding requirements. 

In the logical storage, we have instances, each consisting of a database with its tables.

In the physical storage, we have data files and logs.

[image assetsSrc="Introduction-To-Databases(5).png" /]

[/slide]

[slide hideTitle]

# Database Table Elements

The table is the main building block of any database, where each row is called a record or entity. Columns define the type of data they contain.

Additionally, in a relational database such as MySQL, we have **primary** keys and **secondary** keys, which we use to define the relationship between the tables.

In the example below we have **Customer** table with **primary** key **customer_id** and **secondary** key **city_id**.

This **secondary** key is a reference to the **primary** key in the **City** table.

[image assetsSrc="Introduction-To-Databases(6).png" /]

[/slide]
