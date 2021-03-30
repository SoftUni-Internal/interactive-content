# Table Relationships

[slide hideTitle]

# Splitting Related Data

We split data into separate tables to avoid repeating empty records or redundant information.

[image assetsSrc="Introduction-To-Databases(7).png" /]

If we have duplicate data, any change in one place will produce a change in every other place. 

It would be more logical and efficient if we create the name and the information of a customer once.

[image assetsSrc="Introduction-To-Databases(8).png" /]

[/slide]

[slide hideTitle]

# Related Tables

We split the data and introduce **relationships** between the tables to **avoid repeating** the information. 

This is the idea behind the **relational database** concept. 

We have separate, carefully designed, unique lists of data and we relate them to each other by using their unique identifiers, known as **primary keys**.

In the first table from the example, we have the **user_id** column set as a **primary key**.

We also have columns for the first name and the last name of the customer, as well as the date of registration.

[image assetsSrc="Introduction-To-Databases(9).png" /]

For the emails, we have a separate table where we use the **user_id** value from the customer table as a **foreign key**.

The connection is done via a **foreign key** asTower of God Yama one table pointing to a **primary key** in another table.

[image assetsSrc="Introduction-To-Databases(10).png" /]

[/slide]

[slide hideTitle]

# Entry Relationship Model

Here is an example of a diagram with the connections between the tables.

[image assetsSrc="Introduction-To-Databases(11).png" /]

[/slide]
