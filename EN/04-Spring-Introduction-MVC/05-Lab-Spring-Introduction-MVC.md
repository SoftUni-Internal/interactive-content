# Lab: Spring Introduction MVC 

[slide hideTitle]
# MobiLeLeLe Web Application 

**Here is a link to the** [resources]() **for this task.**

MobiLeLeLe is an application in which you register cars, with several properties. 

You will have to create a simple application that has several pages and some object entities. 

## Data 

This is the data layer of the application. 

There is some data object for you to implement. 

## Brand 

Create a Brand class, which holds the following properties: 

- **id** - a **guid or number**
- **name** - a **name of brand**
- **created** - a **date and time**
- **modified** - a **date and time**     
 
## Model 

Create a **Model** class, which holds the following properties: 

- **id** - **guid or number**
- **name** - a **model name**
- **category** - an enumeration (Car, Buss, Truck, Motorcycle) 
- **imageUrl** - the **url of image** with size between 8 and 512 characters
- **startYear** - a **number**
- **endYear** - a **number**
- **created** - a **date and time**
- **modified** - a **date and time**
- **brand** - a **model brand** 

## Offer 

Create a Model class, which holds the following properties: 

- **id** - **guid or number**
- **description** - some **text**
- **engine** - **enumerated** value (GASOLINE, DIESEL, ELECTRIC, HYBRID)
- **imageUrl** - the **url of image**
- **mileage** - a **number** 
- **price** - the **price of the offer** 
- **transmission** - **enumerated** value (MANUAL, AUTOMATIC)
- **year** - the **year** of offered car
- **created** - a **date and time**
- **modified** - a **date and time**
- **model** - the **model of a car**
- **seller** - a **user that sells the car** 

## User 

Create a User class, which holds the following properties: 

- **id** - **guid or number**
- **username** -  username of the **user**
- **firstName** -  first name of the **user**
- **lastName** -  last name of the **user**
- **isActive** - **true OR false**
- **role** -  **user's role** (**User or Admin**)
- **imageUrl** - a **url of user's picture** 
- **created** - a **date and time**
- **modified** - a **date and time** 

## UserRole 

Create a **UserRole** class, which holds the following properties: 

- **id** - **guid or number**
- **role** - **enumerated value**

## Example of ER Diagram

[image assetsSrc="Java-Spring-Fund-MVC-9.jpg" /]

## Populate Database

Create a Data Initializer class, that populates the database with information about cars when the application starts for the first time.

[/slide]

[slide hideTitle]
# Home/Index

Route: `/`

It should support only a **GET** request.

It should return the following HTML page, upon a **GET** request.

[image assetsSrc="Java-Spring-Fund-MVC-10.png" /]
[/slide]

[slide hideTitle]
# Register User

Route: `/users/register`

It should support only a **GET** and **POST** request.

It should return the following HTML page, upon a **GET** request.

First, we need to add some users to our database.

[image assetsSrc="Java-Spring-Fund-MVC-11.png" /]

**Hint section**:   
- **Because you will learn Thymeleaf in detail in the next lecture, we will give you hints on how to implement some things**
- **Do not forget to add Thymeleaf in you** `pom.xml` **file**
- **Do not forget to add Thymeleaf namespaces**:

[image assetsSrc="Java-Spring-Fund-MVC-12.jpg" /]

- Also you need to add in are the HTML form action and method (remember the last lecture):

[image assetsSrc="Java-Spring-Fund-MVC-13.png" /]
[/slide]

[slide hideTitle]
# Login

Route: `/users/login`

It should support only a **GET** and **POST** request.

It should return the following HTML page, upon a **GET** request.


[image assetsSrc="Java-Spring-Fund-MVC-14.png" /]
[/slide]

[slide hideTitle]
# Navigation for Login User 

When a user logs in, in the application, he cannot see the Register and Login buttons, but Logout.

Also, if he has an Admin role, he can see the Admin dropdown.

Because you will learn Thymeleaf in the next lesson, we will give you a little hint on how to do this point.

[image assetsSrc="Java-Spring-Fund-MVC-15.png" /]

Expected result for login user:

[image assetsSrc="Java-Spring-Fund-MVC-16.png" /]
[/slide]

[slide hideTitle]
# All Brands and Models in Out Database 

Route: `/brands/all`

It should support only a **GET** request.

It should return the following HTML page, upon a **GET** request.

[image assetsSrc="Java-Spring-Fund-MVC-17.png" /]

We continue with more functionality in the next lab.

[/slide]