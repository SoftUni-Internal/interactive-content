# Homework

[slide hideTitle]

# Initial Setup

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/03-Java-ORM-And-Spring-Data-introtohibernate_resources-NEW.zip) **for this task.**

Use the **provided skeleton** to create the **soft_uni** database. 

- Change the **port**, **username**, and **password** according to your settings

[image assetsSrc="Homework-Hibernate-Introduction.jpg" /]

- **Create** an `EntityManagerFactory` and **run** your program

```java
EntityManagerFactory factory = Persistence.createEntityManagerFactory("soft_uni");
EntityManager em = factory.createEntityManager();
```

- Populate the database by **executing** the provided `.sql` script with Workbench


[/slide]

[slide hideTitle]

# Problem: Change Casing 

Use the **soft_uni** database. Persist **all towns** from the database. 

Detach those whose name length is **more than 5 symbols.**
 
Then transform the **names** of all attached towns **to lowercase** and **save them to the database.**

[/slide]

[slide hideTitle]

# Problem: Contains Employee

Use the **soft_uni** database. 

Write a program that checks if **the database** contains a given employee's name.

## Example

| **Input** | **Output** |
| --- | --- |
| Stephen Park | Yes |
| John Doe | No |

[/slide]

[slide hideTitle]

# Problem: Employees with Salaries Above 50 000

Write a program that obtains the first names of all employees with salaries above **50 000**.

## Example

| **Output** |
| --- |
| Terri | 
| Jean | 
| Ken |
| ... | 

[/slide]

[slide hideTitle]

# Problem: Employees from Department

Extract all employees from the **Research and Development** department. 

Order them by **salary** and then by **id** (both in **ascending** order). 

Print the **first name, last name, department name** and **salary of each employee**.

## Example

| **Output** |
| --- |
| Diane Margheim from Research and Development - $40900.00 |
| Gigi Matthew from Research and Development - $40900.00 |
| Michael Raheem from Research and Development - $42500.00 |
| Stephen Park from Research and Development - $48000.00 |
| Maria Calliope from Research and Development - $48000.00 |
| George Petersonn from Research and Development - $48000.00 |
| Dylan Miller from Research and Development - $50500.00 |

[/slide]

[slide hideTitle]

# Problem: Adding a New Address and Updating an Employee

Create a new address with text **"Oxford Str 15"**.
 
Assign it to an **employee** whose **last name** matches the given **input**.

[/slide]

[slide hideTitle]

# Problem: Addresses with Employee Count

Find all addresses, **ordered** by the **number of employees** living there (in **descending order**).

Take only the **first 10 addresses** and print their **address text**, **town name** and **employee count**. 

## Example

| **Output** | 
| --- |
| 163 Nishava Str, ent A, apt. 1, Sofia - 3 employees |
| 7726 Driftwood Drive, Monroe - 2 employees |
| ... |

[/slide]

[slide hideTitle]

# Problem: Get Employee with Project

Get an **employee by their id.**

Print only their **first name, last name, job title** and **projects** (only the project names). 

The projects should be **ordered by name** (in ascending order). 

The **output**'s layout should match the example below. 

## Examples

### Example One

#### Input

`147`

#### Output

```
Linda Randall - Production Technician 
    HL Touring Handlebars 
    ML Road Rear Wheel 
    Patch kit 
    Touring-1000 
```

### Example Two

#### Input

`83`

#### Output

```
John Evans - Production Technician 
    Half-Finger Gloves 
    LL Mountain Handlebars 
    Racing Socks 
    Women's Tights 
```

[/slide]

[slide hideTitle]

# Problem: Find Latest 10 Projects

Write a program that prints the **last 10 started projects**. 

Print their **names**, **descriptions**, **start** and **end dates**.

**Sort** them lexicographically **by name**. 

Verify that the output format matches the example.

## Example

### Output

```
Project name: All-Purpose Bike Stand 
    Project Description: Research, design and development of … 
    Project Start Date:2005-09-01 00:00:00.0 
    Project End Date: null 
Project name: Bike Wash 
    Project Description: Research, design and development of … 
    Project Start Date:2005-08-01 00:00:00.0 
    Project End Date: null 
Project name: HL Touring Frame 
    Project Description: Research, design and development of … 
    Project Start Date:2005-05-16 16:34:00.0 
    Project End Date: null 
… 
```

[/slide]

[slide hideTitle]

# Problem: Increase Salaries

Write a program that increases the salaries of all employees, part of the **Engineering**, **Tool Design**, **Marketing**, or **Information Services** departments by **12%.**

Then, **print the first names, the last names, and the salaries** of the employees whose salaries have been increased. 

## Example

| **Output** |
| --- |
| Roberto Tamburello ($48496.00) |
| Gail Erickson ($36624.00) |
| Jossef Goldberg ($36624.00) |
| Terri Duffy ($71120.00) |
| ... |

[/slide]

[slide hideTitle]

# Problem: Find Employees by First Name

Write a program that finds all employees whose **first names start with a pattern, received as input**. 

Print their **first and last names, job titles, and salaries** in the format shown below. 

## Example

| **Input** | **Output** |
| --- | --- |
| SA | Sariya Harnpadoungsataya - Marketing Specialist - ($16128.00) |
|    | Sandra Reategui Alayo - Production Technician - ($9500.00) |
|    | Sairaj Uddin - Scheduling Assistant - ($16000.00) |
|    | Samantha Smith - Production Technician - ($14000.00) |
|    | Sameer Tejani - Production Technician - ($11000.00) |
|    | Sandeep Kaliyath - Production Technician - ($15000.00) |

[/slide]

[slide hideTitle]

# Problem: Employees Largest Salaries

Write a program that finds the **largest salary** in each **department.** 

**Filter** the departments with maximum salaries **outside of the** 30000 and 70000 **range**.

## Example

| **Output** |
| --- |
| Engineering	 71120.00 |
| Sales	 72100.00 |
| Marketing 16128.00  |
| Production 84100.00 |
| ... |

[/slide]

[slide hideTitle]

# Problem: Remove Towns

Write a program that **deletes a town** which name matches the input.

It should **delete all addresses** in the given town. 

Print the **count of deleted addresses** to the console.

Check the example for the output format.

## Example

| **Input** | **Output** |
| --- | --- |
| Sofia | 1 address in Sofia deleted |
| Seattle | 44 addresses in Seattle deleted |

[/slide]
