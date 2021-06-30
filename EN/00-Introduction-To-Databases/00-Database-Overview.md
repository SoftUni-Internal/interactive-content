# MySQL Exam
[slide hideTitle]
# SoftUni Taxi Company

As part of the best students in SoftUni, you are charged with the difficult task of developing an example database for another new direction of SoftUni - a taxi company. 

Since you are not so familiar with this industry you will be given a document with detailed explanations of what this database should be. 

You will also receive testing data, with which you will be able to do many tests to prove that you have managed to fully cope with your task.

## Database Overview
You have been given an Entity / Relationship Diagram of the **SoftUni Taxi Company**:

[image assetsSrc="mysql_exam-1.png" /]

The **SoftUni Taxi Company** (**stc**) needs to hold information about cars, courses, drivers, clients, addresses and categories.

Your task is to create a database called **stc** (**SoftUni Taxi Company**). 

Then you will have to create several **tables**:

- "**cars**" - contains information about the **cars**
   - Each car has a **make** column, a **model** column, a year column, a **mileage** column, a **condition** column and a **category** column
- "**courses**" - contains information about the **courses**
   - Each course has a "**from_address**" column, a **start** column, a **car** column, a **client** column and a **bill** column
- "**drivers**" - contains information about the **drivers** 
   - Each driver has a **first** and **last** name columns, an **age** column and a **rating** column
- "**clients**" - contains information about the **clients**
    - Each client has a **full name** column and a **phone number** column
- "**addresses**" - contains information about the **addresses**
- "**categories**" - contains information about the **categories**
    - Contains the name of the category
- "**cars_drivers**" - a **many** to **many mapping** tables between the **cars** and the **drivers**
    - Have composite primary key from the "**car_id**" column and the "**driver_id**" column


[/slide]