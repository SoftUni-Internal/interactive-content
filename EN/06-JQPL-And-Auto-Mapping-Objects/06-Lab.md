# Lab

[slide hideTitle]

# Resources

Download the resources for these tasks [here]().

You are given an implementation of the **Shampoo Company**.

Now it is time to start writing some query methods to retrieve data.

Before you start, insert the data from the "**shampoo-company-insert.sql**" file.

[/slide]

[slide hideTitle]

# Problem with Solution: Select Shampoos by Size 

Create a method that selects all shampoos with a **given size, ordered by the shampoo id**.

## Example 

| **Input** | **Output** |
| --- | --- |
| MEDIUM | Nature Moments Mediterranean Olive Oil & Aloe Vera MEDIUM 6.50 euro. |
| | Volume & Fullness Lavender MEDIUM 5.50 euro. |
| | Rose Shine & Hydration MEDIUM 6.50 euro. |
| | Color Protection & Radiance MEDIUM 6.75 euro. |
| | Heavenly Long Long-Hair MEDIUM 7.50 euro. |
| | Sea Buckthorn Vital MEDIUM 6.50 euro. |
| | Fresh it Up! MEDIUM 7.65 euro. |
| | Nectar Nutrition MEDIUM 6.85 euro. |

[/slide]

[slide hideTitle]

# Problem with Solution: Select Shampoos by Size or Label 

Create a method that selects all shampoos by their **given size and label id**.

Sort the result in **ascending order by their price**.


## Example 

| **Input** | **Output** |
| --- | --- |
| MEDIUM | Volume & Fullness Lavender MEDIUM 5.50 euro. |
| 10 | Intense-Charm Brunette SMALL 5.50 euro. |
| | Nature Moments Mediterranean Olive Oil & Aloe Vera MEDIUM 6.50 euro. |
| | Rose Shine & Hydration MEDIUM 6.50 euro. |
| | Sea Buckthorn Vital MEDIUM 6.50 euro. |
| | Color Protection & Radiance MEDIUM 6.75 euro. |
| | Nectar Nutrition MEDIUM 6.85 euro. |
| | Heavenly Long Long-Hair MEDIUM 7.50 euro. |
| | Fresh it Up! MEDIUM 7.65 euro. |
| | Active-Caffeine SMALL 7.80 euro. |

[/slide]

[slide hideTitle]

# Problem with Solution: Select Shampoos by Price 

You will receive a number.

Create a method that selects all shampoos, which **cost more than the given price**.

Sort the result in **descending order by their price**.


## Example 

| **Input** | **Output** |
| --- | --- |
| 5 | Superfruit Nutrition LARGE 13.80 euro. |
| | Cotton Fresh LARGE 13.60 euro. |
| | Color Protection & Radiance LARGE 11.50 euro. |
| | Rose Shine & Hydration LARGE 10.70 euro. |
| | Nectar Nutrition LARGE 10.50 euro. |
| | Keratin Strong SMALL 8.80 euro. |
| | Superfruit Nutrition SMALL 8.80 euro. |
| | Cotton Fresh SMALL 8.80 euro. |
| | Keratin Strong LARGE 8.80 euro. |
| | Volume & Fullness Lavender LARGE 8.50 euro. |
| | ... |
 
[/slide]

[slide hideTitle]

# Problem with Solution: Select Ingredients by Name 

Create a method that selects all **ingredients**, whose **names start with a given letter**.


## Example 

| **Input** | **Output** |
| --- | --- |
| M | Macadamia Oil |
| | Mineral-Collagen |
| | Micro Crystals |

[/slide]

[slide hideTitle]

# Problem with Solution: Count Shampoos by Price 

Create a method **that counts all the shampoos** who **cost less than a given price**.


## Example 

| **Input** | **Output** |
| --- | --- |
| 8.50 | 15 |

[/slide]

[slide hideTitle]

# Problem with Solution: Select Shampoos by Ingredients 

You will receive **shampoos**.

Create a method that finds all **shampoos** who **use the given ingredients**.


## Example 

| **Input** | **Output** |
| --- | --- |
| Berry | Color Protection & Radiance |
| Mineral-Collagen | Fresh it Up! |
| | Nectar Nutrition |
| | Superfruit Nutrition |
| | Color Protection & Radiance |
| | Nectar Nutrition |
| | Superfruit Nutrition |
| | ... |

[/slide]

[slide hideTitle]

# Problem with Solution: Select Shampoos by Ingredients Count 

Create a method that selects all ****shampoos**** that have **less ingredients than a given number**.


## Example 

| **Input** | **Output** |
| --- | --- |
| 2 | Moroccan Argan Oil & Macadamia |
| | Volume & Fullness Lavender |
| | Sea Buckthorn Vital |
| | Active-Caffeine |

[/slide]

[slide hideTitle]

# Problem with Solution: Delete Ingredients by Name

Create a method that **deletes ingredients by a given name**.

[/slide]

[slide hideTitle]

# Problem with Solution: Update Ingredients by Price 

Create a method that **increases the price of all ingredients by 10%**.

[/slide]

[slide hideTitle]

# Problem with Solution: Simple Mapping 

Create an `Employee` class that has the following properties: **first name, last name, salary, birthday** and **address**.

Then, create an `EmployeeDto` class that only hold the employees' **first name, last name** and **salary** information.

Create **an instance of the** `Employee` object and **use the** `ModelMapper` **to map** any **newly created employees** to the `EmployeeDto` **object**.

[/slide]

[slide hideTitle]

# Problem with Solution: Advanced Mapping 

Create an `Employee` class that has the following properties: 

- **first name** 
- **last name** 
- **salary** 
- **birthday** 
- information about whether the employee **is on a holiday** 
- **address** 
- **manager** (another employee) 
- a **list of employees** that they are in charge of 

Create **2 types** of data transfer objects: 

- `EmployeeDto` – first name, last name, salary 
- `ManagerDto` – first name, last name, list of **EmployeeDtos** that they are in charge of 
  
**Create a list** of several **employees and populate the database with them**.

After that, **extract the managers** with **their employees** in the following format: 

```
{ManagerFirstName} {ManagerLastName} | Employees: {EmployeesCount} 
    - {EmployeeFirstName} {EmployeeLastName} {EmployeeSalary} 
```

## Example 

### Sample Output:

```
Steve Jobbsen | Employees: 2 
    - Stephen Bjorn 4300.00 
    - Kirilyc Lefi 4400.00 
Carl Kormac | Employees: 14 
    - Jurgen Straus 1000.45 
    - Moni Kozinac 2030.99 
    - Kopp Spidok 2000.21 
    - ...
```
 
[/slide]

[slide hideTitle]

# Problem with Solution: Projection 

Create and insert a list of employees into a database.

Each employee has the following properties: 

- **first name** 
- **last name** 
- **salary** 
- **birthday** 
- **address** 
- **manager** (another employee) 

Transform them into an `EmployeeDto` (first name, last name, salary, manager's last name) and extract those employees who are **born before 1990**.

Order them **by their salary in descending order** and **print them to the console**.

## Example 

| **Sample output** |
| --- |
| Steve Jobbsen 6000.20 – Manager: \[no manager\] |
| Kirilyc Lefi 4400.00 – Manager: Jobbsen |
| Stephen Bjorn 4300.00 – Manager: Jobbsen  |

[/slide]