[slide]
# Model Definition

There are 3 main models that the **NLT** database application should contain in its functionality.

Design them, considering the following data constraints:

## Company
- **id** - **integer** number, **primary identification field**.
- name - string (required).

## Project
- **id** - integer, **primary identification field**.
- **name** - string (**required**).
- **description** - string (**required**).
- **is_finished** - Boolean.
- **payment** - Big Decimal (**required**).
- **start_date** - string.
- **company** - **Company** entity (**required**).

## Employee
- **id** - integer, **primary identification field**.
- **first_name** - string (**required**).
- **last_name** - string (**required**).
- **age** - integer (**required**).
- **project** - Project entity(**required**).

NOTE: Create the entities and their class members, **exactly** in the **format stated** above. Follow the **camelCase** naming convention. If you have a field named **first_name**, you are to name it **firstName**.


[/slide]

[slide]
# Relantionships
The **NLT** decided to give you a little hint about the more complex relationships in the database so that you can implement them correctly.

One **Project** may have only one **Company**, and one **Company** may have many **Projects**.

One **Project** may have many **Employees**, and one **Employee** may be appointed to only one **Project**.


[image assetsSrc="nlt-workshop-13.png" /]


[/slide]