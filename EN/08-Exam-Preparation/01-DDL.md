[slide hideTitle]

# Data Definition Language (DDL)

[/slide]


[slide hideTitle]

# Database Overview

You have been given an Entity / Relationship Diagram of the **Insta Influencers**:

[image assetsSrc="Exam-Prep-Database-Diagram.png" /]

The **Insta Influencers** needs to hold information about **users, addresses, photos, comments, users_photos, likes**.

Your task is to create a database called **instd (Insta Database)**. Then you will have to create several **tables**.

-	**users** – contains information about the **users**.
    -	Each user has an **id, username, password, email, gender, age, job_title and ip**.

-	**addresses** – contains information about the **addresses**.
    -	Each address has an **id, address, town, country and user_id**.

-	**photos** – contains information about the **photos**.
    -	Each photo has **id, description, date and views**.

-	**comments** – contains information about the **comments**.
    -	Each comment has **id, comment, date and photo_id**.

-	**users_photos** – a many to many mapping table between the **users** and the **photos**.
    -	Have **composite primary key from user_id and photo_id** 

-	**likes** – contains information about the **likes**.
    -	Each like has **id, photo_id and user_id**.

[/slide]

[slide ]

# Problem: Data Definition Language (DDL)

Make sure you implement the whole database **correctly** on your local machine, so that you could work with it.

The instructions you’ll be given will be the minimal required for you to implement the database.

Submit your solutions in Judge on the first task. Submit **all** SQL table creation statements.

You will also be given a **data.sql** file.

It will contain a **dataset** with random data which you will need to **store** in your **local database**. 

This data will be given to you, so you don’t have to imagine it and lose precious time in the process. 

The data is in the form of **INSERT** statement queries.


You have been tasked to create the tables in the database by the following models:

### users
| **Column Name** | **Data Type** |**Constraints** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. | Primary Key AUTO_INCREMENT |
| username | A string containing a maximum of 30 characters. Unicode is NOT needed. | NULL is NOT permitted. |
| password | A string containing a maximum of 30 characters. Unicode is NOT needed. | UNIQUE values. |
| email | A string containing a maximum of 50 characters. Unicode is NOT needed. | NULL is NOT permitted. |
| gender | Exactly 1 character – M or F | NULL is NOT permitted. |
| age | Integer, from 1 to 2,147,483,647. | NULL is NOT permitted. |
| job_title | A string containing a maximum of 40 characters. Unicode is NOT needed. | NULL is NOT permitted. |
| ip | A string containing a maximum of 30 characters. Unicode is NOT needed. | NULL is NOT permitted. |

### addresses
| **Column Name** | **Data Type** |**Constraints** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. | Primary Key AUTO_INCREMENT |
| address | A string containing a maximum of 30 characters. Unicode is NOT needed. | NULL is NOT permitted. |
| town | A string containing a maximum of 30 characters. Unicode is NOT needed. | NULL is NOT permitted. |
| country | A string containing a maximum of 30 characters. Unicode is NOT needed. | NULL is NOT permitted. |
| user_id | Integer, from 1 to 2,147,483,647. | Relationship with table users. | Relationship with table users. NULL is NOT permitted. |


### photos
| **Column Name** | **Data Type** |**Constraints** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. | Primary Key AUTO_INCREMENT |
| description | Very big String. | NULL is NOT permitted. |
| date | The exact date and time. | NULL is NOT permitted. |
| views | Integer, from 1 to 2,147,483,647. | DEFAULT value is 0. NULL is NOT permitted |


### comments
| **Column Name** | **Data Type** |**Constraints** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. | Primary Key AUTO_INCREMENT |
| comment | A String containing a maximum of 255 characters. Unicode is NOT needed. |  NULL is NOT permitted. |
| date | The exact date and time. |  NULL is NOT permitted. |
| photo_id | Integer, from 1 to 2,147,483,647. | Relationship with table photos. NULL is NOT permitted. |


### users_photos 
| **Column Name** | **Data Type** |**Constraints** |
| --- | --- | --- |
| user_id | Integer, from 1 to 2,147,483,647. | Relationship with table users. NULL is NOT permitted. |
| photo_id | Integer, from 1 to 2,147,483,647. | Relationship with table photos. NULL is NOT permitted. |


### likes
| **Column Name** | **Data Type** |**Constraints** |
| --- | --- | --- |
| id | Integer, from 1 to 2,147,483,647. |  Primary Key AUTO_INCREMENT |
| photo_id | Integer, from 1 to 2,147,483,647. | Relationship with table photos. |
| user_id | Integer, from 1 to 2,147,483,647. | Relationship with table users. |

[/slide]
