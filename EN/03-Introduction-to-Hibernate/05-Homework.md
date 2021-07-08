# Homework

[slide hideTitle]

# Setup

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/03-Java-ORM-And-Spring-Data-introtohibernate_resources.zip) **for this task.**

Use the **provided skeleton** to create **soft_uni** database. 

- Change the **port, username** and **password** accordingly to your settings.

[image assetsSrc="Homework-Hibernate-Introduction.jpg" /]

- **Create** EntityManagerFactory and **run** your program.

``` java
EntitiManagerFactory factory = Persistence.createEntityManagerFactory("soft_uni");
EntityManager em = factory.createEntityManager();
```

- Fill the database into Workbench by **executing** the provided **.sql** script. 


[/slide]

[slide hideTitle]

# Change Casing 

Use the **soft_uni** database. Persist **all towns** from the database. Detach those whose name length is **more than 5 symbols.** Then transform the **names** of all attached towns **to lowercase** and **save them to the database.**

[/slide]

[slide hideTitle]

# Contains Employee

Use the **soft_uni** database. Write a program that checks if a given employee name **is contained in the database.**

## Example:

| **Input** | **Output** |
| --- | --- |
| Svetlin Nakov | Yes |
| John Doe | No |

[/slide]

[slide hideTitle]

# Employees with Salary Over 50 000

Write a program that gets the first name of all employees who have salary over **50 000.**

## Example:

| **Output** |
| --- |
| Terri | 
| Jean | 
| Ken |
| ... | 


[/slide]

[slide hideTitle]

# Employees from Department

Extract all employees from the **Research and Development** department. Order them by **salary** (in ascending order), then by **id** (in **ascending** order). Print only their **first name, last name, department name** and **salary.** 

## Example:

| **Output** |
| --- |
| Diane Margheim from Research and Development - $40900.00 |
| Gigi Matthew from Research and Development - $40900.00 |
| Michael Raheem from Research and Development - $42500.00 |
| Svetlin Nakov from Research and Development - $48000.00 |
| Martin Kulov from Research and Development - $48000.00 |
| George Denchev from Research and Development - $48000.00 |
| Dylan Miller from Research and Development - $50500.00 |

[/slide]

[slide hideTitle]

# Adding a New Address and Updating Employee

Create a new address with text **"Oxford Str 15"**. Set that address to an **employee** with a **last name**, given as an input.


[/slide]


[slide hideTitle]

# Addresses with Employee Count

Find all addresses, **ordered** by the **number of employees** who live there (**descending**).

Take only the **first 10 addresses** and print their **address text**, **town name** and **employee count**. 

## Example:

| **Output** | 
| --- |
| 163 Nishava Str, ent A, apt. 1, Sofia - 3 employees |
| 7726 Driftwood Drive, Monroe - 2 employees |
| ... |


[/slide]

[slide hideTitle]

# Get Employee with Project

Get an **employee by his/her id.**

Print only his/her **first name, last name, job title** and **projects** (only their names). 

The projects should be **ordered by name** (ascending). The output should be printed in the format given in the example.

## Example:

| **Input** | **Output** |
| --- | --- |
| 147 | Linda Randall - Production Technician |
|     | HL Touring Handlebars |
|     | ML Road Rear Wheel |
|     | Patch kit | 
|     | Touring-1000 |
| 83  | John Evans - Production Technician |
|     | Half-Finger Gloves | 
|     | LL Mountain Handlebars |
|     | Racing Socks |
|     | Women's Tights |
[/slide]


[slide hideTitle]

# Find Latest 10 Projects

Write a program that prints the **last 10 started projects**. Print their **name**, **description**, **start** and **end date** and **sort** them **by name** lexicographically. 

For the output, check the format from the example.

## Example:

| **Output:** |
| --- |
|  Project name: All-Purpose Bike Stand |
| 	Project Description: Research, design and development of … |
| 	Project Start Date:2005-09-01 00:00:00.0 | 
| 	Project End Date: null |
|  Project name: Bike Wash |
| 	Project Description: Research, design and development of … |
| 	Project Start Date:2005-08-01 00:00:00.0 |
| 	Project End Date: null |
|  Project name: HL Touring Frame |
| 	Project Description: Research, design and development of … |
| 	Project Start Date:2005-05-16 16:34:00.0 |
| 	Project End Date: null |
| ... |

[/slide]

[slide hideTitle]

# Increase Salaries

Write a program that increases the salaries of all employees, who are in the **Engineering**, **Tool Design**, **Marketing** or **Information Services** departments by **12%.**

Then **print the first name, the last name and the salary** for the employees, whose salary was increased.

## Example:

| **Output:** |
| --- |
| Roberto Tamburello ($48496.00) |
| Gail Erickson ($36624.00) |
| Jossef Goldberg ($36624.00) |
| Terri Duffy ($71120.00) |
| ... |


[/slide]


[slide hideTitle]

# Find Employees by First Name

Write a program that finds **all employees**, whose **first name starts with a pattern** given as an input from the console. 

Print their **first and last names**, their **job title** and **salary** in the format given in the example below.

## Example:

| **Input:** | **Output:** |
| --- | --- |
| SA | Sariya Harnpadoungsataya - Marketing Specialist - ($16128.00) |
|    | Sandra Reategui Alayo - Production Technician - ($9500.00) |
|    | Sairaj Uddin - Scheduling Assistant - ($16000.00) |
|    | Samantha Smith - Production Technician - ($14000.00) |
|    | Sameer Tejani - Production Technician - ($11000.00) |
|    | Sandeep Kaliyath - Production Technician - ($15000.00) |


[/slide]

[slide hideTitle]

# Employees Maximum Salaries


Write a program that finds the **max salary** for each **department.** 

Filter the departments, which max salaries **are not in the range** between 30000 and 70000.

## Example:

| **Output:** |
| --- |
| Engineering	 71120.00 |
| Sales	 72100.00 |
| Marketing 16128.00  |
| Production 84100.00 |
| ... |



[/slide]


[slide hideTitle]

# Remove Towns

Write a program that **deletes a town,** which name is given as an input. 

The program should **delete all addresses** that are in the given town. Print on the console the **number of addresses** that were **deleted.** 

Check the example for the output format.

## Example:

| **Input:** | **Output:** |
| --- | --- |
| Sofia | 1 address in Sofia deleted |
| Seattle | 44 addresses in Seattle deleted |

[/slide]
