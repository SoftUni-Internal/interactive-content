# MySQL Exam
[slide hideTitle]
# SoftUni Taxi Company

As one of the best students in SoftUni, you are given the difficult task of developing a database for its new business project - a taxi company. 

Since you are not very familiar with the industry, you will be given a document with detailed explanations of what this database should consist of. 

You will also receive testing data, which you can test to prove that you have managed to fully complete your task.

## Database Overview
You have been given an Entity / Relationship Diagram of the **SoftUni Taxi Company**:

[image assetsSrc="mysql_exam-1.png" /]

The **SoftUni Taxi Company** (**stc**) **database** should hold information about **cars**, **courses**, **drivers**, **clients**, **addresses**, and **categories**.

Your task is to create a database called "**stc**". 

Then, you will have to create several **tables**:

- "**cars**" - Contains information about the cars
  - each car has a **make** column, a **model** column, a **year** column, a **mileage** column, a **condition** column, and a **category** column
- "**courses**" - Contains information about the ****
   - each course has a **from_address** column, a **start** column, a **car** column, a **client** column and a **bill** column
- "**drivers**" - Contains information about the **drivers**
   - each driver has a **first** and **last** name columns, an **age** column, and a **rating** column
- "**clients**" - Contains information about the **clients**
   - each client has a **full name** column and a **phone number** column
- "**addresses**" - Contains information about the **addresses**
- "**categories**" - Contains name of the category
- "**cars_drivers**" - Establishes a **many** to **many relationship** between the **cars** and the **drivers** tables
   - has composite primary key from the **car_id** column and the **driver_id** column



[/slide]