# Table Relationships

[slide]

# Why Split related Data?

We split data into separate tables to avoid repeating empty records or redundant information.

[image assetsSrc="Introduction-To-Databases(7).png" /]

If we have duplicate data any change in one place, must be changed in every other place. 

It would be more logical and efficient if we create the name and the information of a customer only once.

[image assetsSrc="Introduction-To-Databases(8).png" /]

[/slide]

[slide]

# Related Tables

We split the data and introduce relationships between the tables to avoid repeating information. This is the idea behind the relational database concept. 

We have separate, carefully designed, unique lists of data, and we relate them to each other by using their unique identifiers - **primary keys**.

In the example below in the first table we have **user_id** as a **primary key**, first name, last name of the customer and the date of registration.

[image assetsSrc="Introduction-To-Databases(9).png" /]

For the emails we have a separate table where we use **user_id** from the customer table as a **foreign key**.

Connection is done via a **foreign key** in one table pointing to a **primary key** in another table.

[image assetsSrc="Introduction-To-Databases(10).png" /]

[/slide]

[slide]

# Entry Relationship Model

Here is an example of a diagram with the connections between the tables.

[image assetsSrc="Introduction-To-Databases(11).png" /]

[/slide]