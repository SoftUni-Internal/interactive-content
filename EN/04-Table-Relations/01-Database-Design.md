[slide hideTitle]

# Database Designs and Rules

The process of creating a database starts with **designing** it.

When we are building a database, we should always consider how to **organize the entities** inside correctly.

That will make our database **easier to comprehend** while also making our queries work faster.

These are the six steps of database design:

1. **Identificatiion** of entities
2. Defining table **columns**
3. Defining **primary keys**
4. Modeling **relationships**
5. Defining **constraints**
6. Filling **test data**

[/slide]

[slide hideTitle]

# Identification of Entities

When designing a database, the first thing we should consider is **defining its entities**.

This process is complex, and you should always pay attention to defining them **correctly**. 

The first thing to realize is that the entities are nothing more than a real-world **object**.

Your job is to **find** these objects and define their **characteristics** in the given context.

We usually receive specifications for our software, in which we can find the information we needed, for the process of defining the entities. 

**Most often, the nouns in the given specification are our entities.**

## Specification

We need to develop a system that stores information about **students** enrolled in various courses. 

The **courses** are held in different **towns**. 

When registering a **new student**, we must enter the following information: 
 - **Name**
 - **Faculty number**
 - **Photo**
 - **Date**

There are **three** entities we must define:
- **Student**
- **Course**
- **Town**

As evident above, the **nouns** from our specification became our entities.

[/slide]

[slide hideTitle]

# Identification of the Columns

After figuring out which are our entities, now we should consider what **characteristics** they have. 

This step also plays a significant role in our database design as this will determine what information we are going to store for our entities.

When given **specifications**, we can also try and seek information that will help us understand the **columns** of our entities.

## Specification

We need to develop a system that stores information about **students** enrolled in various courses. 
The courses are held in different towns.
When registering a new student the following information is entered: **name**, **faculty number**, **photo** and **date**.


Columns: 
- Student: **name**, **faculty number**, **photo**, **date of enlistment**, **list of courses**
- Course: **town**


[/slide]

[slide hideTitle]

# Choosing a Primary Key

The primary key is the **identity of your entity** - it is what makes each row inside unique.

Therefore, you should always define an additional column for it.

There are a few pieces of advice, which you should keep in mind to choose a proper primary key and its data type. 

- Do not use an existing column

- Can be an integer number: Integer is always a good choice when picking a primary key because it is unique and easy to sustain

- Must be declared as `PRIMARY KEY`: when creating your database, do not forget to identify the primary key

- Use `AUTO_INCREMENT` to automatically increase a given value
    * this will make the **id** always different and will be responsible for sustaining it

- Put the primary key as the first column
    * this makes the table easier to comprehend, and it is a commonly applied convention

There are exceptions for the **id**.

Entities that have well-known **id**s, like countries (USA, DK, DE) and currencies (USD, EUR), can be set as primary keys, as they are unique.

If you want a unique primary key, which is harder to guess, you should consider using a [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). 

[/slide]

[slide hideTitle]

# Types of Relationships

In relational databases there are three types of relations: 

- **One-to-One**
- **One-to-Many** / **Many-to-One**
- **Many-to-Many**

In the following slides, we will take a closer look at them.

## Specification

We need to develop a system that stores information about **students, who are trained in various courses**.

The **courses are held in different towns**.

When registering a new student, the following information is entered: **name**, **faculty number**, **photo** and **date**.

- **"Students are trained in courses."** can be paraphrased to **"Many students are trained in many courses."**, which is a **many-to-many** relationship

- **"A course can be held in towns."** can be paraphrased to **"One course is held in many towns"**, which is a **one-to-many** relationship

[/slide]

