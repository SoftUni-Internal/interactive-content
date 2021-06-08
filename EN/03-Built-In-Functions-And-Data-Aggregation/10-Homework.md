# Homework

[slide hideTitle]

## Part 1 - Queries From SoftUni Database

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/04.Built-In-Functions-And-Data-Aggregation-Exercise.zip) **for this homework.**

*You will need the databases from "built-in-functions-data-aggregation" for the first 16 problems and the "built-in-functions-data-aggregation" resources for the rest of the problems.*

[/slide]

[slide hideTitle]

# Problem: Find Names of All Employees by First Name - TODO: Add Tests

Create an SQL query that finds **first** and **last** names of all employees whose first name **starts with "Sa" (case insensitively).**

**Order the information by id.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| first_name | last_name |
| --- | --- |
| Sariya | Harnpadoungsataya |
| Sandra | Reategui Alayo |
| ..... | ..... |

[/slide]


[slide hideTitle]
# Problem: Find Names of All Employees by Last Name - TODO: Add Tests

Create an SQL query that finds **first** and **last** names of all employees whose **last name contains "ei" (case insensitively).**

**Order the information by id.**

**Run your query statements & submit the output from the queries as plain text.**


## Example

| first_name | last_name |
| --- | --- |
| Kendall | Keil |
| Christian | Kleinerman |
| ..... | ..... |

[/slide]

[slide hideTitle]

# Problem: Find First Names of All Employees - TODO: Add Tests

Create an SQL query that finds the **first names** of all employees in the departments with ID **3** or **10** and whose **hire year** is **between 1995 and 2005 inclusively.**

**Order the information by id.**

**Run your query statements & submit the output from the queries as plain text.**


## Example

| first_name |
| --- |
| Deborah |
| Wendey |
| Candy |
| ..... |

[/slide]

[slide hideTitle]

# Problem: Find All Employees Except Engineers - TODO: Add Tests

Create an SQL query that finds the **first** and **last names** of all employees whose **job titles does not contain "engineer".**

**Order the information by id.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| first_name | last_name |
| --- | --- |
| Guy | Gilbert |
| Kevin | Brown |
| Rob | Walters |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Find Towns with Name Length - TODO: Add Tests

Create an SQL query that finds **town names** that are **5** or **6** symbols long and **order them alphabetically by town name.** 

**Run your query statements & submit the output from the queries as plain text.**

## Example

| name |
| --- |
| Berlin |
| Duluth |
| Duvall |
| ..... |

[/slide]

[slide hideTitle]
# Problem: Find Towns Starting With - TODO: Add Tests

Create an SQL query that finds all towns that **start with** letters **M**, **K**, **B** or **E** **(case insensitively).**

**Order them alphabetically by town name.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| town_id | name |
| --- | --- |
| 5 | Bellevue |
| 31 | Berlin |
| 30 | Bordeaux |
| ..... | ..... |

[/slide]

[slide hideTitle]

# Problem: Find Towns Not Starting With - TODO: Add Tests

Create an SQL query that finds all towns that **do not start** with letters **R**, **B** or **D** **(case insensitively).**

**Order them alphabetically by name.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| town_id | name |
| --- | --- |
| 2 | Calgary |
| 23 | Cambridge |
| 15 | Carnation |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Create View Employees Hired After 2000 Year - TODO: Add Tests

Create an SQL query that creates a view named **v_employees_hired_after_2000** with **the first and the last name** of all employees **hired after 2000 year.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| first_name | last_name |
| --- | --- |
| Steven | Selikoff |
| Peter | Krebs |
| Stuart | Munson |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Length of Last Name - TODO: Add Tests

Create an SQL query that finds the names of all employees whose last name is **exactly 5 characters long.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| first_name | last_name |
| --- | --- |
| Kevin | Brown |
| Terri | Duffy |
| Jo | Brown |
| Diane | Glimp |
| ..... | ..... |

[/slide]

[slide hideTitle]

# Part 2 - Queries for Geography Database

[/slide]

[slide hideTitle]
# Problem: Countries Holding 'A' 3 or More Times - TODO: Add Tests

Find all countries that hold the **letter 'A' in their name at least 3 times (case insensitively) sorted by the ISO code.**

**Display** the **country name** and the **ISO code.**

**Run your query statements & submit the output from the queries as plain text.**


## Example

| contry_name | iso_code |
| --- | --- |
| Afghanistan | AFG |
| Albania | ALB |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Mix of Peak and River Names - TODO: Add Tests

**Combine all peak names with all river names**, so that the last letter of each peak name is the same as the first letter of its corresponding river name. 

**Display** the **peak name**, the **river name**, and the **obtained mix(converted to lower case).** 

**Sort the results by the obtained mix alphabetically.** 

**Run your query statements & submit the output from the queries as plain text.**


## Example

| peak_name | river_name | mix |
| --- | --- | --- |
| Aconcagua | Amazon | aconcaguamazon |
| Banski Suhodol | Lena | banski suhodolena |
| ..... | ..... | ..... |

[/slide]

[slide hideTitle]

# Part 3 - Queries from Diablo Database

[/slide]

[slide hideTitle]

# Problem: Games from 2011 and 2012 Year - TODO: Add Tests

Find the **top 50 games ordered by start date, then by name.**

Display only the **games from the years 2011 and 2012.**

Display the start date in the format **"YYYY-MM-DD".**

**Run your query statements & submit the output from the queries as plain text.**


## Example

| name | start |
| --- | --- |
| Rose Royalty | 2011-01-05 |
| London | 2011-01-13 |
| Broadway | 2011-01-16 |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: User Email Providers - TODO: Add Tests

Find information about the email providers of all users. 

Display the **user_name** and the **email provider.**
Sort the results by **email provider alphabetically**, then by **username**. 

**Run your query statements & submit the output from the queries as plain text.**

## Example

| user_name | Email Provider |
| --- | --- |
| Pesho | abv.bg |
| monoxidecos | astonrasuna.com |
| bashsassafras | balibless.com |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Get Users with IP Address Like Pattern - TODO: Add Tests

Find the **user_name** and the **ip_address** for each user, sorted by **user_name alphabetically.**

Display only the rows, where the **ip_address** matches the pattern: "\_\_\_.1%.%.\_\_\_". 

Run your query statements & submit the output from the queries as plain text.

## Example:

| user_name | ip_address |
| --- | --- |
| bindbawdy | 192.157.20.222 |
| evolvingimportant | 223.175.227.173 |
| inguinalself | 255.111.250.207 |
| ..... | ..... |

[/slide]

[slide hideTitle]

# Problem: Show All Games with Duration and Part of the Day - TODO: Add Tests

// ToDo: The tests do not cover the output in the example. To investigate this in the future.

[/slide]

[slide hideTitle]

# Part 4 - Date Functions Queries

[/slide]

[slide hideTitle]
# Problem: Orders Table - TODO: Add Tests

You are given a table **orders (id, product_name, order_date)** filled with data.

Consider that the **payment** for an order must be accomplished **within 3 days after the order date.** 

Also **the delivery date is up to 1 month.** Write a query to show each product's **name, order date, pay and deliver due dates.**

**Run your query statements & submit the output from the queries as plain text.**


## Original Table

| id | product_name | order_date |
| --- | --- | --- |
| 1 | Butter | 2016-09-19 00:00:00 |
| 2 | Milk | 2016-09-30 00:00:00 |
| 3 | Cheese | 2016-09-04 00:00:00 |
| 4 | Bread | 2015-12-20 00:00:00 |
| 5 | Tomatoes | 2015-12-30 00:00:00 |
| ..... | ..... | ..... |


## Example

| product_name | order_date | pay_due | deliver_due |
| --- | --- | --- | --- |
| Butter | 2016-09-19 00:00:00 | 2016-09-22 00:00:00 | 2016-10-19 00:00:00 |
| Milk | 2016-09-30 00:00:00 | 2016-10-03 00:00:00 | 2016-10-30 00:00:00 |
| Cheese | 2016-09-04 00:00:00 | 2016-09-07 00:00:00 | 2016-10-04 00:00:00 |
| Bread | 2015-12-20 00:00:00 | 2015-12-23 00:00:00 | 2016-01-20 00:00:00 |
| Tomatoes | 2015-12-30 00:00:00 | 2016-01-02 00:00:00 | 2016-01-30 00:00:00 |
| ..... | ..... | ..... | ..... |

[/slide]

[slide hideTitle]

# Part 5 - Use The "gringotts" Database

Mr. Bodrog is a greedy small goblin. His most precious possession is a small database of the deposits in 
the wizard world. 

Mr. Bodrog wants you to send him some reports.

[/slide]

[slide hideTitle]
# Problem: Records' Count - TODO: Add Tests

Import the database and send the **total count of records** to Mr.Bodrog.

Make sure nothing got lost.

**Run your query statements & submit the output from the queries as plain text.**

[/slide]

[slide hideTitle]
# Problem: Longest Magic Wand - TODO: Add Tests

Select the size of the **longest magic wand.** Rename the new column appropriately.

**Run your query statements & submit the output from the queries as plain text.**

[/slide]

[slide hideTitle]
# Problem: Longest Magic Wand Per Deposit Groups - TODO: Add Tests

For wizards in each deposit group show the longest magic wand. 

**Sort result by longest magic wand** for each deposit group **in increasing order**, then by **deposit_group** alphabetically. 

Rename the new column appropriately.

**Run your query statements & submit the output from the queries as plain text.**

## Example

| deposit_group | longest_magic_wand |
| Human Pride | 30 |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Smallest Deposit Group Per Magic Wand Size * - TODO: Add Tests

Select the deposit group with the **lowest** average wand size.

**Run your query statements & submit the output from the queries as plain text.**

[/slide]

[slide hideTitle]
# Problem: Deposits Sum - TODO: Add Tests

Select all deposit groups and its **total deposit sum**. Sort result by **total_sum** in **increasing order.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| deposit_group | total_sum |
| --- | --- |
| Blue Phoenix | 819598.73 |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Deposits Sum for Ollivander Family - TODO: Add Tests

Select all deposit groups and its total deposit sum but **only for the wizards who has their magic wand crafted by Ollivander family.** 

Sort result by **deposit_group alphabetically.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| deposit_group | total_sum |
| --- | --- |
| Blue Phoenix | 52968.96 |
| Human Pride | 188366.86 |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Deposits Filter - TODO: Add Tests

Select all deposit groups and its total deposit sum but **only for the wizards who has their magic wand crafted by Ollivander family.** 

After this, **filter** total deposit sums **lower than 150000.** Order by total deposit sum in **descending order.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| deposit_group | total_sum |
| --- | --- |
| Troll Chest | 126585.18 |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Deposit Charge - TODO: Add Tests

Create a query that selects:

- **Deposit group**
- **Magic wand creator**
- **Minimum deposit charge for each group**

Group by deposit_group and magic_wand_creator.

Select the data in **ascending order** by **magic_wand_creator** and **deposit_group.**

**Run your query statements & submit the output from the queries as plain text.**

## Example

| deposit_group | magic_wand_creator | min_deposit_charge |
| --- | --- | --- |
| Blue Phoenix | Antioch Peverell | 30.00 |
| ..... | ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Age Groups - TODO: Add Tests

Create a query that creates 7 different groups **based on their age.**

Age groups should be as follows:

- \[0-10\]
- \[11-20\]
- \[21-30\]
- \[31-40\]
- \[41-50\]
- \[51-60\]
- \[61+\]

The query should return:

- **Age groups**

- **Count of wizards in it**

Sort result by **increasing size** of age groups.

**Run your query statements & submit the output from the queries as plain text.**

## Example

| age_group | wizard_count |
| --- | --- |
| \[11-20\] | Antioch Peverell |
| ..... | ..... | 

[/slide]

[slide hideTitle]
# Problem: First Letter - TODO: Add Tests

Create a query that returns all **unique** wizard **first letters of their first names only if they have deposit of type Troll Chest.** 

Order them **alphabetically**. Use **GROUP BY** for uniqueness.

**Run your query statements & submit the output from the queries as plain text.**

## Example

| first_letter |
| --- |
| A |
| ... |

[/slide]

[slide hideTitle]
# Problem: Average Interest - TODO: Add Tests

Mr. Bodrog is highly interested in profitability. 

He wants to know the average interest of all deposits groups split by whether the deposit **has expired** or **not.** 

But that is not all. He wants you to select deposits with **start date after 01/01/1985.** 

Order the data **descending** by Deposit Group and **ascending** by Expiration Flag.

**Run your query statements & submit the output from the queries as plain text.**

## Examples

| deposit_group | is_deposit_expired | average_interest |
| --- | --- | --- |
| Venomous Tongue | 0 | 16.698947 |
| Venomous Tongue | 1 | 13.147500 |
| Troll Chest | 0 | 21.623571 |

[/slide]

[slide hideTitle]
# Employees Minimum Salaries

**Use soft_uni database.**

You have decided to find a proper job as an analyst in **SoftUni**.

It is not a surprise that you will use the **soft_uni database.**

Select the minimum salary from the employees for departments with **ID (2,5,7)** but only for those who are **hired after 01/01/2000.** 

Sort result by **department_id** in **ascending** order.

Your query should return:

- department_id

**Run your query statements & submit the output from the queries as plain text.**

## Example

| department_id | minimum_salary |
| --- | --- |
| 2 | 25000.00 |
| ... | ... |

[/slide]

[slide hideTitle]
# Problem: Employees Average Salaries - TODO: Add Tests

Select all high paid employees who earn **more than 30000** into a new table. 

Then **delete** all high paid employees who have **manager_id = 42** from the new table. 

Then **increase** the salaries of all high paid **employees with department_id = 1 with 5000** in the new table. 

Finally, select the **average** salaries in each department from the new table. 

Sort result by **department_id in increasing order.**

**Run your query statements & submit the output from the queries as plain text.**


## Example

| department_id | avg_salary |
| --- | --- |
| 1 | 45166.6666 |
| ... | ... |

[/slide]

[slide hideTitle]
# Problem: Employees Maximum Salaries - TODO: Add Tests

Find the max salary for each department. 

Filter those which have max salaries not in the range 30000 and 70000. 

Sort result by department_id in increasing order.

**Run your query statements & submit the output from the queries as plain text.**


## Example

| department_id | max_salary |
| --- | --- |
| 2 | 29800.00 |
| ... | ... |

[/slide]

[slide hideTitle]
# Problem: Employees Count Salaries - TODO: Add Tests

Count the salaries of all employees who **do not have a manager.**

**Run your query statements & submit the output from the queries as plain text.**

[/slide]

[slide hideTitle]
# Problem: 3rd Highest Salary - TODO: Add Tests

Find the **third highest salary** in each **department** if there is such. 

Sort result by **department_id** in **increasing order.**

**Run your query statements & submit the output from the queries as plain text.**

## Examples

| department_id | third_highest_salary |
| --- | --- |
| 1 | 36100.00 |
| 2 | 25000.00 |
| ..... | ..... |

[/slide]

[slide hideTitle]
# Problem: Departments Total Salaries - TODO: Add Tests

Create a query ,which shows the **total sum of salaries** for each department.

**Order by department_id.**

Your query should return:	

- department_id

**Run your query statements & submit the output from the queries as plain text.**

## Examples

| department_id | total_salary |
| --- | --- |
| 1 | 241000.00 |
| ..... | ..... |

[/slide]

