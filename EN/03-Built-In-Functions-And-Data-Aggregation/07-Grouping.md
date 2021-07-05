[slide hideTitle]

# Grouping

The **Group By** clause in SQL allows us to take data in to **separate groups** based on a **common property**.

[image assetsSrc="Built-in-Functions-Data-Aggregations(5).png" /]

Using **GROUP BY** we can get each **separate** group and use an **aggregate** function over it (Average, Min, Max).

Let us take a look at this simple example using **soft_uni** database:

``` java
SELECT e.`job_title`, count(employee_id)  
  FROM `employees` AS e                   
GROUP BY e.`job_title`;
```

This query will return a **list** of **position titles** and the **number of employees** assigned to each one of them.

**Output:**

| job_title | count(employee_id) |
| --- | --- |
| Production Technician | 157 |
| Marketing Assistant | 3 |
| Engineering Manager | 1 |
| Senior Tool Designer | 2 |
| ...... | ...... |

[/slide]

[slide hideTitle]
# Problem and Solution: Menu Prices
[code-task title="Menu Prices" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-menu-prices" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]

Use the database that is called "**Restaurant Databases**".

Write a query to retrieve information about the prices of each **category**. 

The **output** should consist of the following: 
- Category_id 
- Average Price  
- Cheapest Product 
- Most Expensive Product 
  
See the examples for more information. 

**Round** the results to **2 digits after the decimal point**.   

## Example

| **category_id** | **Average Price** | **Cheapest Product** | **Most Expensive Product** |
|---|---|---|---|
| 1 | 7.49 | 6.79 | 8.79 |
| 2 | 10.93 | 7.99 | 14.89 |
| 3 | 7.90 | 6.90 | 8.89 |
| 4 | 12.79 | 11.69 | 13.69 |
| 5 | 5.37 | 4.90 | 5.60 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE departments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	department_id INT NOT NULL,
	salary DOUBLE NOT NULL,
	CONSTRAINT fk_department_id FOREIGN KEY(`department_id`) REFERENCES departments(`id`)
);

CREATE TABLE categories (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL
);

CREATE TABLE  products (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	category_id INT NOT NULL,
	price DOUBLE NOT NULL,
	CONSTRAINT fk_cateogory_id FOREIGN KEY(`category_id`) REFERENCES categories(`id`)
);

INSERT INTO departments(name) VALUES ("Management"), ("Kitchen Staff"), ("Wait Staff");

INSERT INTO employees (first_name, last_name, department_id, salary) VALUES ("Jasmine","Maggot",2,1250.00), 
("Nancy","Olson",2,1350.00), ("Karen","Bender",1,2400.00), ("Pricilia","Parker",2,980.00),
("Stephen","Bedford",2,780.00),("Jack","McGee",1,1700.00),("Clarence","Willis",3,650.00),
("Michael","Boren",3,780.00),("Michael","Boren",3,780.00);

INSERT INTO categories(name) VALUES("salads"),("appetizers"),("soups"),("main"),("desserts");

INSERT INTO products (name, category_id,price) VALUES ("Lasagne", 4,12.99),
("Linguine Positano with Chicken", 4,11.69),
("Chicken Marsala", 4,13.69),
("Calamari", 2,14.89),
("Tomato Caprese with Fresh Burrata", 2,7.99),
("Wood-Fired Italian Wings", 2,9.90),
("Caesar Side Salad", 1,8.79),
("House Side Salad", 1,6.79),
("Johny Rocco Salad", 1,6.90),
("Minestrone", 3,8.89),
("Sausage & Lentil", 3,7.90),
("Mama Mandola’s Sicilian Chicken Soup", 3,6.90),
("Tiramisú", 5,4.90),
("John Cole", 5,5.60),
("Mini Cannoli", 5,5.60);
[/input]
[output]
1
7.49
6.79
8.79
2
10.93
7.99
14.89
3
7.9
6.9
8.89
4
12.79
11.69
13.69
5
5.37
4.9
5.6
[/output]
[/test]
[test]
[input]
CREATE TABLE departments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	department_id INT NOT NULL,
	salary DOUBLE NOT NULL,
	CONSTRAINT fk_department_id FOREIGN KEY(`department_id`) REFERENCES departments(`id`)
);

CREATE TABLE categories (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL
);

CREATE TABLE  products (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	category_id INT NOT NULL,
	price DOUBLE NOT NULL,
	CONSTRAINT fk_cateogory_id FOREIGN KEY(`category_id`) REFERENCES categories(`id`)
);

INSERT INTO departments(name) VALUES ("Management"), ("Kitchen Staff"), ("Wait Staff");

INSERT INTO employees (first_name, last_name, department_id, salary) VALUES ("Jasmine","Maggot",2,1250.00), 
("Nancy","Olson",2,1350.00), ("Karen","Bender",1,2400.00), ("Pricilia","Parker",2,980.00),
("Stephen","Bedford",2,780.00),("Jack","McGee",1,1700.00),("Clarence","Willis",3,650.00),
("Michael","Boren",3,780.00),("Michael","Boren",3,780.00);

INSERT INTO categories(name) VALUES("salads"),("appetizers"),("soups"),("main"),("desserts");

INSERT INTO products (name, category_id,price) VALUES ("Lasagne", 4,12.99),
("Linguine Positano with Chicken", 4,11.69),
("Chicken Marsala", 4,13.69),
("Calamari", 2,14.89),
("Tomato Caprese with Fresh Burrata", 2,7.99),
("Wood-Fired Italian Wings", 2,9.90),
("Caesar Side Salad", 1,8.79),
("House Side Salad", 1,6.79),
("Johny Rocco Salad", 1,6.90),
("Minestrone", 3,8.89),
("Sausage & Lentil", 3,7.90),
("Mama Mandola’s Sicilian Chicken Soup", 3,6.90),
("Tiramisú", 5,4.90),
("John Cole", 5,5.60),
("Mini Cannoli", 5,5.60);
[/input]
[output]
1
7.49
6.79
8.79
2
10.93
7.99
14.89
3
7.9
6.9
8.89
4
12.79
11.69
13.69
5
5.37
4.9
5.6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]