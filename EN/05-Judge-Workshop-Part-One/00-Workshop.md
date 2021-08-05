# Workshop Part One: Grading System

[slide hideTitle]
# Database Requirements

The **database** of the **Judge** application needs to support **5 entities**:

## Role

- Has an Id field
   - A **UUID-String** or **Long** field
- Has a **Name** field
   - An option between: **User** and **Admin**

## User
- Has an **Id** field
    - A **UUID-String** or **Long** field
- Has a **Username** field
    - The **values** must be **unique**
    - Must be between **3** and **20** characters long, both numbers are inclusive
- Has a **Password** field
    - Must be between **2** and **20** characters long, both numbers are inclusive
- Has an **Email** field
    - Cannot be **null**
    - Must be a valid **email**
    - Must be **unique**
- Has a **GitHub Address** field
    - A valid github address following the pattern: `https:/github.com/{username}/`
- Has a **Role** field
    - A relational field with the **Role** entity
    - Automatically assigned the **User role** when a **user is successfully registered**: **The first user in the database must be an Admin**

## Exercise
- Has an **Id** field
    - A **UUID-String** or **Long** field
- Has a **Name** field
    - The **values** must be **unique**
    - Must be at least 2 characters long
- Has a **Started On** field
    - A date and time field
    - The date cannot be after the present day 

[image assetsSrc="Java-Spring-Essentials-Workshop-Part-One-1.png" /]

- Has a **Due Date** field
    - A **date** and **time** field
    - The date cannot be before the present day

[image assetsSrc="Java-Spring-Essentials-Workshop-Part-One-2.png" /]

## Homework 

- Has an **Id** field
    - A **UUID-String** or **Long** field
- Has a **Added On** field
    - The current **date** and **time**
- Has a Github Address field
    - A **valid** github address following the **pattern**: `https:/github.com/{username}/{homeworkExample}/`
- Has an **Author** field
    - A **relational** field with the **User** entity
    - The author is set to the **logged in** user
- Has an **Exercise** field
    - A **relational** field with the **Exercise** entity

## Comment 
- Has an **Id** field
    - A **UUID-String** or **Long** field
- Has a **Score** field
    - An **Integer** field
- Has a **Text Content** field
- Has an **Author** field
    - A **relational** field with the **User** entity
    - The author is set to the **logged in** user
- Has an Homework field
    - A **relational** field with the **Homework** entity

Implement the entities with the **correct datatypes**.

[image assetsSrc="Java-Spring-Essentials-Workshop-Part-One-3.png" /]

[/slide]


[slide hideTitle]
# Initialize Roles

Implement functionality that checks if the database does not have roles and 
initialize them if it does not.

[/slide]