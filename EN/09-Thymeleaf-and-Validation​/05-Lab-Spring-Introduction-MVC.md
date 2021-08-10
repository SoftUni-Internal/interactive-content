# Lab: Thymeleaf and Validations

[slide hideTitle]
# LinkedOut

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-Spring-Fundamentals/09.Thymeleaf-and-Validation-Lab-Skeleton.zip) **for this task.**

The application should be able to easily accept hard-formatted. 

The application is called - **LinkedOut**.


## Data 

There are 2 main models that the **LinkedOut database** application should contain in its functionality.

Design them in the **most appropriate** way, considering the following **data constraints**:

## Company
- **id** - a **char sequence**
- **budget** - a **number**, must be a positive number, cannot be **null**
- **description** - a **very long char sequence**, cannot be **null**, must be **at least 10 characters**
- **name** - a **char sequence**, must be **unique** and cannot be **null**, must be **between 2 and 10 characters**
- **town** - a **char sequence**, cannot be **null**, must be **between 2 and 10 characters**

## Employee

- **id** - a **char sequence**
- **birthdate** - a **date**, cannot be **null**
- **educationLevel** - a **char sequence**, cannot be **null**
- **firstName** - a **char sequence**, must be at least **2 characters**, cannot be **null**
- **jobTitle** - a **char sequence**, cannot be **null**
- **lastName** - a **char sequence**, must be at least **2 characters**, cannot be **null**
- **salary** - a **number**, must be a positive number, cannot be **null**

**NOTE:** Name the entities and their class members, **exactly** in the **format stated** above. 

Do not name them in snake case with the dashes, of course.

## Relationships

Your partners gave you a little hint about the more complex relationships in the database so that you can implement them correctly.

One **Employee** may be in only one **Company**, and one **Company** may have many **Employees**.

[image assetsSrc="Java-Spring-Thymeleaf-and-Validation​-Lab-1.png" /]

[/slide]

[slide hideTitle]
# Home/Index

Route: `/`

[image assetsSrc="Java-Spring-Thymeleaf-and-Validation​-Lab-2.png" /]
[/slide]

[slide hideTitle]
# Add a Company

Route: `/companies/add`

[image assetsSrc="Java-Spring-Thymeleaf-and-Validation​-Lab-3.png" /]

[image assetsSrc="Java-Spring-Thymeleaf-and-Validation​-Lab-4.png" /]

[/slide]

[slide hideTitle]
# Add an Employee

Route: `/employees/add`

[image assetsSrc="Java-Spring-Thymeleaf-and-Validation​-Lab-5.png" /]
[/slide]

[slide hideTitle]
# All Companies

[image assetsSrc="Java-Spring-Thymeleaf-and-Validation​-Lab-6.png" /]

[image assetsSrc="Java-Spring-Thymeleaf-and-Validation​-Lab-7.png" /]
[/slide]

[slide hideTitle]
# All Employees

Route: `/employees/all`

[image assetsSrc="Java-Spring-Thymeleaf-and-Validation​-Lab-8.png" /]

[image assetsSrc="Java-Spring-Thymeleaf-and-Validation​-Lab-9.png" /]

[/slide]

