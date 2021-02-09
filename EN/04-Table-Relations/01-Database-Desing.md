[slide hideTitle]

# Database Design and Rules

The process of creating a database does not start with adding the information, but with designing the database.

When we are building a database, we should always consider how to organize the entities in it correctly, this won't only make our database easier to comprehend, but also make our queries work easier and faster.

Data design is a part that should not be neglected and in this lesson, we will try to understand how to properly create our entities and relations.

There are a few fundamental steps when creating a database, which we should consider the following.

## Steps in database design

1. Identificatiion of entities.


2. Defining table columns.


3. Defining primary keys.


4. Modeling relationships.


5. Defining constraints.


6. Filling test data. 

[/slide]

[slide hideTitle]

## Identification of Entities

When given the task of designing the database, the first thing we should consider is defining its entities.

This process is complex and you should always pay attention to defining the entities correctly. 

The first thing to realize is that the entities are nothing more than a real-world object and your job is to find these objects and define their characteristics in the given context.

Luckily as programmers, we are often given specifications for our software, in which we can find the information we need. 

**Most often the nouns in the specification are our entities**

Let's have a look.

**Specification**
We need to develop a system that stores information about **students**, which are trained in various courses. 
The **courses** are held in different **towns**. 
When registering a new student the following information is entered: name, faculty number, photo, and date.
 

Entities: **Student**, **Course**, **Town**

Did you notice it, the nouns from our specification became our entities.

[/slide]

[slide hideTitle]

## Identification of the Columns

After figuring out which are our entities, now we should consider what characteristics they have. 

This step also plays an important role in our database design as this will determine what information we are going to store for our entities.

When given **specifications** we can also try and seek information that will help us understand the **columns** of our entities.

**Specification**

We need to develop a system that stores information about students, who are trained in various **courses**.
The courses are held in different towns.
When registering a new student the following information is entered: **name**, **faculty number**, **photo** and **date**.


Columns: 
- Student: **name, faculty number, photo date of enlistment, list of courses**.
- Course: **town**.

From the second skimming through the specification, we managed to figure out that the **student** must register: name, faculty number, photo and date of enlistments, and a list of courses they visit. For the courses, we must keep data of the town it's held.

[/slide]

[slide hideTitle]

## Choosing a primary key.

The primary key is the identity of your entity, it's making each row in it unique, therefore you should always define an additional column for it.

There are a few pieces of advice which you should keep in mind to choose a proper primary key and type for it. 

- Don't use an existing column(for example SSN): Although you may think that a given column is unique, sometimes this turns against you.


- Can be an integer number: Integer is always a good choice when picking a primary key, as it is unique and easy to sustain.


- Must be declared as a PRIMARY KEY: when creating your database, don't forget to identify the primary key.


- Use AUTO_INCREMENT to implement auto-increment: this will make the Id always different and will take the responsibility for sustaining it.


- Put the primary key as the first column: makes the table easier to comprehend and it's accepted as a convention.


**Exceptions**:
Entities that have well-known ID eg. countries(USA, DK, DE) and currencies (USD, EUR), etc. can be set as primary keys, as they are unique the average Joe is supposed to know them. 

**Bonus**: 
If you want a unique primary key, which is harder to guess, you should consider using a **GUID**. 

[/slide]

[slide hideTitle]

## Identification of Relationships

As you know MySQL is a relational database and that means it keeps the entities in its database and keeps track of them by making relations between different tables.

**Relationships are dependencies between the entities.**

In relational databases there are two types of relations: 

- Many-to-many.
- Many to one.

To better understand the two types of relationships we will have a look at our specifications again and try to find the different relations.

**Specification** 

We need to develop a system that stores information about **students, who are trained in various courses**.
The **courses are held in different towns.
When registering a new student the following information is entered: name, faculty number, photo, and date.


- **"Students are trained in courses."** Now let's paraphrase: **"Many students are trained in many courses."** - Many to Many relationships.


- **"Course is held in towns."** becomes **"One course is held in many towns"** - here the relationship is One-To-Many.

When designing our database, finding the relations between the entities is one of the most tricky parts, a piece of advice you should consider is always try to paraphrase the specifications to find your relations as well as always thing if the most often queries you are going to make with the given entity.

[/slide]