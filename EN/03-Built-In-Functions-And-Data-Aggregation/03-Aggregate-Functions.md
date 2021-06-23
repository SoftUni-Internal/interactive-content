[slide hideTitle]

# Aggregate Functions

An **aggregate** function performs calculations on multiple values and then returns a single value.

We have 5 main functions:

- `SUM()`
- `COUNT()`
- `MAX()`
- `MIN()`
- `AVG()`

These functions allow us to build **summarized** data information from our database.

**For these examples, we will use our soft_uni database.**

Usually **aggregate** functions ignore **NULL** values.

**Example**:

``` java
SELECT e.`department_id`, MIN(e.`salary`) AS 'MinSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

This SQL query will produce the following **result**:

| department_id | MinSalary | 
| --- | --- |
| 1 | 32700,0000 |
| 2 | 25000,0000 |
| 3 | 23100,0000 |
| 4 | 13500,0000 |
| 5 | 12800,0000 | 
| 6 | 40900,0000 |
| 7 | 9500,0000 |

After knowing this, let us take a look at the functions and their syntax.


[/slide]

[slide hideTitle]

# The SUM() Function

The `SUM()` function sums all the values in a column.

[image assetsSrc="Built-in-Functions-Data-Aggregations(1).png" /]

If any department has no salaries, **NULL** will be displayed.

``` java
SELECT e.`department_id`, SUM(e.`salary`) AS 'TotalSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**Output**:

| department_id | TotalSalary |
| --- | --- |
| 1 | 241000,0000 |
| 2 | 108600,0000 |
| 3 | 539800,0000 |
| 4 | 112500,0000 |
| 5 | 227800,0000 |
| 6 | 318800,0000 |
| 7 | 2535100,0000 | 
| 8 | 112100,0000 |
| ..... | ...... |

[/slide]

[slide hideTitle]

# Problem with Solution: Sum the Cost of All Books
[code-task title="Sum the Cost of All Books" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-sum-the-cost-of-all-books" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]

Write an SQL query to **sum** the **prices of all books**. 

**Format** the output to **2 digits after the decimal point**.  

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE authors (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	middle_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL,
	born DATETIME NOT NULL,
	died DATETIME
);

INSERT INTO authors(id,first_name, middle_name, last_name, born, died) VALUES
	(1,'Agatha', 'Mary Clarissa','Christie', '1890-09-15', '1976-01-12'),
	(2,'William', NULL,'Shakespeare', '1564-04-26', '1616-04-23'),
	(3,'Danielle', 'Fernandes Dominique', 'Schuelein-Steel', '1947-07-14', NULL),
	(4,'Joanne', NULL,'Rowling' , '1965-07-31', NULL),
	(5,'Lev', 'Nikolayevich', 'Tolstoy', '1828-09-09', '1910-11-20'),
	(6,'Paulo', 'Coelho de', 'Souza', '1947-08-24', NULL),
	(7,'Stephen', 'Edwin', 'King', '1947-09-21', NULL),
	(8,'John', 'Ronald Reuel', 'Tolkien', '1892-01-03', '1973-09-02'),
	(9,'Erika', NULL, 'Mitchell', '1963-03-07', NULL);
	
CREATE TABLE books (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	author_id INT NOT NULL,
	year_of_release DATETIME,
	cost DOUBLE NOT NULL,
	CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO books(author_id,title, year_of_release,cost) VALUES
	(1,'Unfinished Portrait', '1930-01-02', 15.99),
	(1,'The Mysterious Affair at Styles', '1920-01-02',17.99),
	(1,'The Big Four', '1927-01-02',14.99),
	(1,'The Murder at the Vicarage', '1930-01-02',13.99),
	(1,'The Mystery of the Blue Train', '1928-01-02',12.99),
	(2,'Julius Caesar', '1599-01-02',11.99),
	(2,'Timon of Athens', '1607-01-02',13.99),
	(2,'As You Like It', '1600-01-02',18.99),
	(2,'A Midsummer Night''s Dream', '1595-01-02',15.99),
	(3,'Going Home', '1973-01-02',15.99),
	(3,'The Ring', '1980-01-02',14.99),
	(3,'Secrets', '1985-01-02',15.99),
	(3,'Message From Nam', '1990-01-02',13.99),
	(4,'Career of Evil', '2015-01-02',15.99),
	(4, 'Harry Potter and the Philosopher''s Stone','1997-01-02',19.99),
	(4,'Harry Potter and the Chamber of Secrets','1998-01-02',19.99),
	(4,'Harry Potter and the Prisoner of Azkaban','1999-01-02',19.99),
	(4,'Harry Potter and the Goblet of Fire','2000-01-02',19.99),
	(4,'Harry Potter and the Order of the Phoenix','2003-01-02',19.99),
	(4,'Harry Potter and the Half-Blood Prince','2005-01-02',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-01-02',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-01-02',15.99),
	(5,'Anna Karenina','1877-01-02',15.99),
	(5,'War And Peace','1869-01-02',30),
	(5,'Boyhood','1854-01-02',15.99),
	(6,'By the River Piedra I Sat Down and Wept','1994-01-02',15.99),
	(6,'The Alchemist','1988-01-02',15.99),
	(6,'The Fifth Mountain','1996-01-02',15.99),
	(6,'The Zahir','2005-01-02',15.99),
	(7,'Rage','1977-01-02',13.99),
	(7,'The Dead Zone','1979-01-02',13.99),
	(7,'It','1986-01-02',13.99),
	(7,'It','1986-01-02',13.99),	
	(8,'The Hobbit','1937-01-02',20.99),	
	(8,'The Adventures of Tom Bombadil','1962-01-02',13.99),	
	(9,'Fifty Shades of Grey','2011-01-02',13.99),	
	(9,'Fifty Shades Darker','2012-01-02',13.99),	
	(9,'Fifty Shades Freed','2012-01-02',13.99);
[/input]
[output]
628.63
[/output]
[/test]
[test]
[input]
CREATE TABLE authors (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	middle_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL,
	born DATETIME NOT NULL,
	died DATETIME
);

INSERT INTO authors(id,first_name, middle_name, last_name, born, died) VALUES
	(1,'Agatha', 'Mary Clarissa','Christie', '1890-09-15', '1976-01-12'),
	(2,'William', NULL,'Shakespeare', '1564-04-26', '1616-04-23'),
	(3,'Danielle', 'Fernandes Dominique', 'Schuelein-Steel', '1947-07-14', NULL),
	(4,'Joanne', NULL,'Rowling' , '1965-07-31', NULL),
	(5,'Lev', 'Nikolayevich', 'Tolstoy', '1828-09-09', '1910-11-20'),
	(6,'Paulo', 'Coelho de', 'Souza', '1947-08-24', NULL),
	(7,'Stephen', 'Edwin', 'King', '1947-09-21', NULL),
	(8,'John', 'Ronald Reuel', 'Tolkien', '1892-01-03', '1973-09-02'),
	(9,'Erika', NULL, 'Mitchell', '1963-03-07', NULL);
	
CREATE TABLE books (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	author_id INT NOT NULL,
	year_of_release DATETIME,
	cost DOUBLE NOT NULL,
	CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO books(author_id,title, year_of_release,cost) VALUES
	(1,'Unfinished Portrait', '1930-01-02', 15.99),
	(1,'The Mysterious Affair at Styles', '1920-01-02',17.99),
	(1,'The Big Four', '1927-01-02',14.99),
	(1,'The Murder at the Vicarage', '1930-01-02',13.99),
	(1,'The Mystery of the Blue Train', '1928-01-02',12.99),
	(2,'Julius Caesar', '1599-01-02',11.99),
	(2,'Timon of Athens', '1607-01-02',13.99),
	(2,'As You Like It', '1600-01-02',18.99),
	(2,'A Midsummer Night''s Dream', '1595-01-02',15.99),
	(3,'Going Home', '1973-01-02',15.99),
	(3,'The Ring', '1980-01-02',14.99),
	(3,'Secrets', '1985-01-02',15.99),
	(3,'Message From Nam', '1990-01-02',13.99),
	(4,'Career of Evil', '2015-01-02',15.99),
	(4, 'Harry Potter and the Philosopher''s Stone','1997-01-02',19.99),
	(4,'Harry Potter and the Chamber of Secrets','1998-01-02',19.99),
	(4,'Harry Potter and the Prisoner of Azkaban','1999-01-02',19.99),
	(4,'Harry Potter and the Goblet of Fire','2000-01-02',19.99),
	(4,'Harry Potter and the Order of the Phoenix','2003-01-02',19.99),
	(4,'Harry Potter and the Half-Blood Prince','2005-01-02',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-01-02',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-01-02',15.99),
	(5,'Anna Karenina','1877-01-02',15.99),
	(5,'War And Peace','1869-01-02',30),
	(5,'Boyhood','1854-01-02',15.99),
	(6,'By the River Piedra I Sat Down and Wept','1994-01-02',15.99),
	(6,'The Alchemist','1988-01-02',15.99),
	(6,'The Fifth Mountain','1996-01-02',15.99),
	(6,'The Zahir','2005-01-02',15.99),
	(7,'Rage','1977-01-02',13.99),
	(7,'The Dead Zone','1979-01-02',13.99),
	(7,'It','1986-01-02',13.99),
	(7,'It','1986-01-02',13.99),	
	(8,'The Hobbit','1937-01-02',20.99),	
	(8,'The Adventures of Tom Bombadil','1962-01-02',13.99),	
	(9,'Fifty Shades of Grey','2011-01-02',13.99),	
	(9,'Fifty Shades Darker','2012-01-02',13.99),	
	(9,'Fifty Shades Freed','2012-01-02',13.99);
[/input]
[output]
628.63
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# The COUNT() Function

We use the `COUNT()` function when we need to count values (**excluding null**) in one or more columns based on grouping criteria.

When using `COUNT()`, we ignore any employees with **NULL** salary.

[image assetsSrc="Built-in-Functions-Data-Aggregations.png" /]

Here is a simple example using our **soft_uni** database:

``` java
SELECT e.`department_id`, COUNT(e.`salary`) AS 'Salary Count'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**Output**:

| department_id | name | manager_id |
| --- | --- | --- |
| 1 | Engineering | 12 |
| 2 | Tool Design | 4 |
| 3 | Sales | 273 |
| 4 | Marketing | 46 |
| 5 | Purchasing | 6 |
| 6 | Research and Development | 42 |
| 7 | Production | 148 |
| 8 | Production Control | 21 |
| 9 | Human Resources | 30 |
| 10 | Finance | 3 |
| 11 | Information Services | 42 |
| 12 | Document Control | 90 |
| 13 | Quality Assurance | 274 |
| 14 | Facilities and Maintenance | 218 |
| 15 | Shipping and Receiving | 85 |
| 16 | Executive | 109 |

[/slide]

[slide hideTitle]
# Problem and Solution: Department Info
[code-task title="Department Info" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-department-info" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]

[Download]() and familiarize yourself with **the restaurant database.**

You will use it in the following assignments. 

Write an SQL query to **count** the number of employees **in each department by id**. 

Order the information by **deparment_id**, then by the **number of employees**. 

## Example

| **department_id** | **Number of employees** |
|---|---|
| 1 | 2 |
| 2 | 4 |
| 3 | 3 |

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
2
2
4
3
3
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
2
2
4
3
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# The MAX() Function

The `MAX()` function will take the maximum value from a column.

[image assetsSrc="Built-in-Functions-Data-Aggregations(2).png" /]

``` java
SELECT e.`department_id`, MAX(e.`salary`) AS 'MaxSalary'
FROM `employees` AS e 
GROUP BY e.`department_id`; 
```

**Output**:

| department_id | Max_salary |
| --- | --- |
| 1 | 63500,0000 |
| 2 | 29800,0000 |
| 3 | 72100,0000 |
| 4 | 14400,0000 |
| 5 | 37500,0000 |
| 6 | 50500,0000 |
| 7 | 84100,0000 | 
| 8 | 24500,0000 |
| ..... | ...... |


[/slide]

[slide hideTitle]

# The MIN() Function

The `MIN()` function will take the minimum value from a column.

[image assetsSrc="Built-in-Functions-Data-Aggregations(3).png" /]

``` java
SELECT e.`department_id`, MIN(e.`salary`) AS 'MinSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**The resulting table looks like this**:

| department_id | Min_salary |
| --- | --- |
| 1 | 32700,0000 |
| 2 | 25000,0000 |
| 3 | 23100,0000 |
| 4 | 13500,0000 |
| 5 | 12800,0000 |
| 6 | 40900,0000 |
| 7 | 9500,0000 | 
| 8 | 16000,0000 |
| ..... | ...... |

[/slide]

[slide hideTitle]

# Problem with Solution: Minimum Salary
[code-task title="Minimum Salary" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-minimum-salary" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]

Write an SQL query to retrieve information about the departments grouped by `department_id` with a **minimum salary above 800**. 

**Round** the resulting salary to **two digits after the decimal point**.  

## Example

| **department_id** | **Min salary** |
|---|---|
| 1 | 1700 |

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
1700
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
1700
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# The AVG() Function

The `AVG()` function will calculate the average value in a column.

[image assetsSrc="Built-in-Functions-Data-Aggregations(4).png" /]

``` java
SELECT e.`department_id`, AVG(e.`salary`) AS 'AvgSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**Result:**

| department_id | Average_Salary |
| --- | --- |
| 1 | 40166,66666667 |
| 2 | 27150,00000000 |
| 3 | 29988,88888889 |
| 4 | 14062,50000000 |
| 5 | 18983,33333333 |
| 6 | 45542,85714286 |
| 7 | 14162,56983240| 
| 8 | 18683,33333333 |
| ..... | ...... |


[/slide]

[slide hideTitle]

# Problem with Solution: Average Salary
[code-task title="Average Salary" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-average-salary" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]

Write a query to calculate the **average salary** in each department. 

Order the information by **department_id**. 

**Round** the result to **two digits after the decimal point.**  

## Example

| **department_id** | **Average Salary** |
|---|---|
| 1 | 2050 |
| 1 | 1090 |
| 1 | 736.67 |

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
2050
2
1090
3
736.67
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
2050
2
1090
3
736.67
[/output]
[/test]
[/tests]
[/code-task]
[/slide]