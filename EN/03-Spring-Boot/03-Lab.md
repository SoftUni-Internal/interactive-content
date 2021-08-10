# Lab: Spring Boot and Spring Data

[slide hideTitle]

# Description

## West Compass Dealer Shop

_**Here is a**_ [link](https://videos.softuni.org/resources/java/Java-Spring-Fundamentals/07_Spring-Fundamentals-Spring-Essentials-Lab_MobiLeLeLe_Resources.zip) _**to the resources for this task**_.

West Compass Dealer Shop is an application in which you register cars, with several properties.

You will have to create a simple application that has several pages and some object entities.

[/slide]

[slide hideTitle]

# 1. Data

This is the data layer of the application.

There is some data object for you to implement.

## Brand

Create a **Brand** class, which holds the following properties:

- **id** - a **uuid or number**
- **name** - a **name of brand**
- **created** - a **date and time**
- **modified** - a **date and time**

## Model

Create a **Model** class, which holds the following properties:

- **id** - **uuid or number**
- **name** - a **model name**
- **imageUrl** - the **url of image**
- **startYear** - a **number**
- **endYear** - a **number**
- **created** - a **date and time**
- **modified** - a **date and time**
- **brand** - a **model brand**

## Offer

Create a **Model** class, which holds the following properties:

- **id** - **uuid or number**
- **description** - some **text**
- **engine** - **enumerated value**
- **imageUrl** - the **url of image**
- **mileage** - a **number**
- **price** - the **price of the offer**
- **transmission** - **enumerated value**
- **year** - the **year of offered car**
- **created** - a date and time
- **modified** - a **date and time**
- **model** - the **model of a car**
- **seller** - a **user that sells the car**

## User

Create a **User** class, which holds the following properties:

- **id** - **uuid or number**
- **username** - username of the **user**
- **firstName** - first name of the **user**
- **lastName** - last name of the **user**
- **active** - **true OR false**
- **role** - **user's role**
- **imageUrl** - a **url of user's picture**
- **created** - a **date and time**
- **modified** - a **date and time**

## UserRole

Create a **UserRole** class, which holds the following properties:

- **id** - **uuid or number**
- **role** - **enumerated value**

This is an example of ER Diagram

[image assetsSrc="Java-Spring-Boot-Lab-1.jpg" /]

[/slide]

[slide hideTitle]

# 2. Populate DB

For this moment, populate your DB manually. Our app should be extended in the next lecture and have this functionality.

[/slide]

[slide hideTitle]

# 3. Home/index - route ("/")

It should support only a **GET** request.

It should return the following HTML page, upon a **GET** request.

[image assetsSrc="Java-Spring-Boot-Lab-2.jpg" /]

[/slide]

[slide hideTitle]

# 4. All Cars - route ("/cars/all").

It should support only a **GET** request.

It should return the following HTML page, upon a **GET** request.

[image assetsSrc="Java-Spring-Boot-Lab-3.jpg" /]

**Hint section**:

Because you will learn Thymeleaf next week, we'll give you a little hint on how to implement this functionality

- This is an example code of how to visualize all offers in the all.html page using th:each:

[image assetsSrc="Java-Spring-Boot-Lab-4.jpg" /]

- This is a [link](https://www.thymeleaf.org/doc/tutorials/2.1/usingthymeleaf.html#using-theach) to the thymeleaf documentation.


[/slide]
