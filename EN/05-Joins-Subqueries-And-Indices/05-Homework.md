[slide hideTitle]

# Homework

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/06.MySQL-Joins-Subqueries-and-Indices-Exercise-Resources.zip) **for the homework.**

[/slide]

[slide hideTitle]

# Problem: Employee Address TODO ADD TESTS

## Description

Create a query that selects:

- **employee_id**
- **job_title**
- **address_id**
- **address_text**

Return the first 5 rows sorted by **address_id** in ascending order.

## Examples

| **employee_id** | **job_title**           | **address_id** | **address_text**   |
| --------------- | ----------------------- | -------------- | ------------------ |
| 142             | Production Technician   | 1              | 108 Lakeside Court |
| 30              | Human Resources Manager | 2              | 1341 Prospect St   |
| ...             | ...                     | ...            | ...                |


[/slide]

[slide hideTitle]

# Problem: Addresses with Towns TODO ADD TESTS

## Description

Create a query that selects:

- **first_name**
- **last_name**
- **town**
- **address_text**

Sort the result by **first_name** in ascending order then by **last_name**. 

Select the first **five** employees.

## Examples

| **first_name** | **last_name** | **town**      | **address_text**   |
| -------------- | ------------- | ------------- | ------------------ |
| A.Scott        | Wright        | Newport Hills | 1400 Gate Drive    |
| Alan           | Brewer        | Kenmore       | 8192 Seagull Court |
| ...            | ...           | ...           | ...                |


[/slide]

[slide hideTitle]

# Problem: Sales Employee TODO ADD TESTS

## Description

Create a query that selects:

- **employee_id**
- **first_name**
- **last_name**
- **department_name**

Sort the result by **employee_id in descending order**. Select only employees from the "**Sales**" department.

## Examples

| **employee_id** | **first_name** | **last_name** | **department_name** |
| --------------- | -------------- | ------------- | ------------------- |
| 290             | Lynn           | Tsoflias      | Sales               |
| 289             | Rachel         | Valdez        | Sales               |
| ...             | ...            | ...           | ...                 |


[/slide]

[slide hideTitle]

# Problem: Employee Departments TODO ADD TESTS

## Description

Create a query that selects:

- **employee_id**
- **first_name**
- **salary**
- **department_name**

Filter only employees with **salary** higher than 15000. Return the first 5 rows sorted by **department_id in descending order**.

## Examples

| **employee_id** | **first_name** | **last_name** | **department_name** |
| --------------- | -------------- | ------------- | ------------------- |
| 109             | Ken            | 125500.00     | Executive           |
| 140             | Laura          | 60100.00      | Executive           |
| ...             | ...            | ...           | ...                 |


[/slide]

[slide hideTitle]

# Problem: Employees Without Project TODO ADD TESTS

## Description

Create a query that selects:

- **employee_id**
- **first_name**

Filter only **employees** without a project. Return the first 3 rows sorted by **employee_id in descending order**.

[/slide]

[slide hideTitle]

# Problem: Employees Hired After TODO ADD TESTS

## Description

Create a query that selects:

- **first_name**
- **last_name**
- **hire_date**
- **dept_name**

Filter only employees hired after 1/1/1999 and from either the "**Sales**" or the "**Finance**" **departments**.

Sort the result by **hire_date (ascending)**.

## Examples

| **first_name** | **last_name** | **hire_date**       | **dept_name** |
| -------------- | ------------- | ------------------- | ------------- |
| Debora         | Poe           | 2001-01-19 00:00:00 | Finance       |
| Wendy          | Kahn          | 2001-01-26 00:00:00 | Finance       |
| ...            | ...           | ...                 | ...           |

[/slide]

[slide hideTitle]

# Problem: Employees with Project TODO ADD TESTS

## Description

Create a query that selects:

- **employee_id**
- **first_name**
- **project_name**

Filter only the **employees** with a project, which has started after **13.08.2002** and it is still **ongoing** (no end date).

Return the first 5 rows sorted by **first_name** **then by** **project_name both in ascending order**.

## Examples

| **employee_id** | **first_name** | **project_name**      |
| --------------- | -------------- | --------------------- |
| 44              | A. Scott       | Hitch Rack - 4-Bike   |
| 170             | Alan           | LL Touring Handlebars |
| ...             | ...            | ...                   |

[/slide]

[slide hideTitle]

# Problem: Employee 24 TODO ADD TESTS

## Description

Create a query that selects:

- **employee_id**
- **first_name**
- **project_name**

Filter all of the **projects** of employees with an **id of 24**.

If the project has started after **2005 inclusively** the return value should be **NULL**.

Sort the result by **project_name alphabetically**.

[/slide]

[slide hideTitle]

# Problem: Employee Manager TODO ADD TESTS

## Description

Create a query that selects:

- **employee_id**
- **first_name**
- **manager_id**
- **manager_name**

Filter all **employees** with a manager who has **id equal to 3 or 7**.

Return all rows sorted by **the first_name the employees in ascending order**.

## Examples

| **employee_id** | **first_name** | **manager_id** | **manager_name** |
| --------------- | -------------- | -------------- | ---------------- |
| 122             | Bryan          | 7              | JoLynn           |
| 158             | Dylan          | 3              | Roberto          |
| ...             | ...            | ...            | ...              |


[/slide]

[slide hideTitle]

# Employee Summary TODO ADD TESTS

## Description

Create a query that selects:

- **employee_id**
- **employee_name**
- **manager_name**
- **department_name**

Show the first **5 employees** (only for employees who have a manager) with their **managers** and the **departments** they are in (show the departments of the **employees**).

Order by **employee_id**.

## Examples

| **employee_id** | **employee_name** | **manager_name** | **department_name** |
| --------------- | ----------------- | ---------------- | ------------------- |
| 1               | Guy Gilbert       | Jo Brown         | Production          |
| 2               | Kevin Brown       | David Bradley    | Marketing           |
| ...             | ...               | ...              | ...                 |

[/slide]

[slide hideTitle]

# Problem: Min Average Salary TODO ADD TESTS

## Description

Create a query that returns the value of the lowest average **salary** of all **departments**.

[/slide]

[slide hideTitle]

# Problem: Highest Peaks in Bulgaria TODO ADD TESTS

## Description

Create a query that selects:

- **country_code**
- **mountain_range**
- **peak_name**
- **elevation**

Filter all **peaks** in **Bulgaria** with **elevation** over **2835**.

Return all rows sorted by **elevation** **in descending order**.

## Examples

| **country_code** | **mountain_range** | **peak_name** | **elevation** |
| ---------------- | ------------------ | ------------- | ------------- |
| BG               | Rila               | Musala        | 2925          |
| BG               | Pirin              | Vihren        | 2914          |
| ...              | ...                | ...           | ...           |


[/slide]

[slide hideTitle]

# Problem: Count Mountain Ranges TODO ADD TESTS

## Description

Create a query that selects:

- **country_code**
- **mountain_range**

Filter the **count** of the **mountain ranges** in the **United States**, **Russia** and **Bulgaria**.

Sort result by **mountain_range count** in **decreasing order**.

[/slide]

[slide hideTitle]

# Problem: Countries with Rivers TODO ADD TESTS

## Description

Create a query that selects:

- **country_name**
- **river_name**

Find the first **5 countries** with or without **rivers** in **Africa**.

Sort them by **country_name in ascending order**.

[/slide]

[slide hideTitle]

# Problem: Continents and Currencies TODO ADD TESTS

## Description

Create a query that selects:

- **continent_code**
- **currency_code**
- **currency_usage**

Find all **continents** and their most used **currency**.

Filter any **currency** that is used in only one **country**.

Sort the result by **continent_code and currency_code**.

## Examples

| **continetn_code** | **currency_code** | **currency_usage** |
| ------------------ | ----------------- | ------------------ |
| AF                 | XOF               | 8                  |
| AS                 | AUD               | 2                  |
| AS                 | ILS               | 2                  |
| ...                | ...               | ...                |

[/slide]

[slide hideTitle]

# Problem: Countries Without Any Mountains TODO ADD TESTS

## Description

Find the count of all **countries** which don't have a **mountain**.

[/slide]

[slide hideTitle]

# Problem: Highest Peak and Longest River by Country TODO ADD TESTS

## Description

For each **country**, find the **elevation** of **the highest peak** and **the length of the longest river**, sorted by the highest **peak_elevation (from highest to lowest)**, then by the **longest river_length (from longest to smallest)**, then by **country_name (alphabetically)**.

Display **NULL** when no data is available in some of the columns.

Limit only the **first 5 rows**.

## Examples

| **country_name** | **highest_peak_elevation** | **longest_river_length** |
| ---------------- | -------------------------- | ------------------------ |
| China            | 8848                       | 6300                     |
| India            | 8848                       | 3180                     |
| Nepal            | 8848                       | 2948                     |
| ...              | ...                        | ...                      |

[/slide]

