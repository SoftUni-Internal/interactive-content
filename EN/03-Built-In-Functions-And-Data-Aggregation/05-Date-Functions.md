[slide hideTitle]

# Date Functions

The **Date** functions are used to handle date and time data effectively.

## EXTRACT()

The `EXTRACT()` function extracts a segment from a date passed as argument.

``` java
SELECT EXTRACT(YEAR FROM "1995-11-24"); 
```

In this case, the function will extract only the year from `1995-11-24`.

**Output:**

```
1995
```

## TIMESTAMPDIFF()

`TIMESTAMPDIFF()` extracts the difference between two dates.

``` java
TIMESTAMPDIFF(Part, FirstDate, SecondDate)  
```

**Part** can be any part and format of a date or time.

Let us see a simple query example using our **soft_uni** database:

``` java
SELECT `employee_id`, `first_name`, `last_name`,
       TIMESTAMPDIFF(year, `hire_date`, '2017-05-31')
    AS 'Years In Service'
  FROM `employees`;
```

The **resulting table** will look as follows:

| employee_id | first_name | last_name | Years In Service |
| --- | --- | --- | --- |
| 1 | Guy | Gilbert | 18 |
| 2 | Kevin | Brown | 18 |
| 3 | Roberto | Tamburello | 17 |
| 4 | Rob | Walters | 17 |
| ... | ... | ... | ... |

## DATE_FORMAT()

The `DATE_FORMAT()` function formats the date as specified.

``` java
SELECT DATE_FORMAT('2015/01/16', '%Y %b %D') AS 'Date';
```

**Output**:

```
Date
2015 Jan 16th
```

## NOW()

`NOW()` obtains the **current** date and time.

```java
SELECT NOW();
```


[/slide]

[slide hideTitle]

# Problem with Solution: Days Lived
[code-task title="Days Lived" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-days-lived" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your code here
```
[/code-editor]
[task-description]

**Use the booklibrary database.**

Write an SQL query to **calculate** the **lifetimes** of the authors, in **days**. 

**NULL** values indicate that the author is still alive.  

## Example

| Full Name | Days Lived |
| --- | --- |
| Agatha Christie | 31164 |
| William Shakespeare | 18990 |
| Danielle Schuelein-Steel | NULL |
| Joanne Rowling | NULL |
| Lev Tolstoy | 30021 |
| Paulo Souza | NULL |
| Stephen King | NULL |
| John Tolkien | 29827 |
| Erika Mitchell | NULL |

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
	(1,'Agatha', 'Mary Clarissa','Christie', '1890-09-15 00:00:00', '1976-01-12 00:00:00'),
	(2,'William', NULL,'Shakespeare', '1564-04-26 00:00:00', '1616-04-23 00:00:00'),
	(3,'Danielle', 'Fernandes Dominique', 'Schuelein-Steel', '1947-07-14 00:00:00', NULL),
	(4,'Joanne', NULL,'Rowling' , '1965-07-31 00:00:00', NULL),
	(5,'Lev', 'Nikolayevich', 'Tolstoy', '1828-09-09 00:00:00', '1910-11-20 00:00:00'),
	(6,'Paulo', 'Coelho de', 'Souza', '1947-08-24 00:00:00', NULL),
	(7,'Stephen', 'Edwin', 'King', '1947-09-21 00:00:00', NULL),
	(8,'John', 'Ronald Reuel', 'Tolkien', '1892-01-03 00:00:00', '1973-09-02 00:00:00'),
	(9,'Erika', NULL, 'Mitchell', '1963-03-07 00:00:00', NULL);
	
CREATE TABLE books (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	author_id INT NOT NULL,
	year_of_release DATE,
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
```
Agatha Christie
31164
William Shakespeare
18990
Danielle Schuelein-Steel

Joanne Rowling

Lev Tolstoy
30021
Paulo Souza

Stephen King

John Tolkien
29827
Erika Mitchell

```
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
	(1,'Agatha', 'Mary Clarissa','Christie', '1890-09-15 00:00:00', '1976-01-12 00:00:00'),
	(2,'William', NULL,'Shakespeare', '1564-04-26 00:00:00', '1616-04-23 00:00:00'),
	(3,'Danielle', 'Fernandes Dominique', 'Schuelein-Steel', '1947-07-14', NULL),
	(4,'Joanne', NULL,'Rowling' , '1965-07-31 00:00:00', NULL),
	(5,'Lev', 'Nikolayevich', 'Tolstoy', '1828-09-09 00:00:00', '1910-11-20 00:00:00'),
	(6,'Paulo', 'Coelho de', 'Souza', '1947-08-24 00:00:00', NULL),
	(7,'Stephen', 'Edwin', 'King', '1947-09-21 00:00:00', NULL),
	(8,'John', 'Ronald Reuel', 'Tolkien', '1892-01-03 00:00:00', '1973-09-02 00:00:00'),
	(9,'Erika', NULL, 'Mitchell', '1963-03-07 00:00:00', NULL);
	
CREATE TABLE books (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	author_id INT NOT NULL,
	year_of_release DATE,
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
```
Agatha Christie
31164
William Shakespeare
18990
Danielle Schuelein-Steel

Joanne Rowling

Lev Tolstoy
30021
Paulo Souza

Stephen King

John Tolkien
29827
Erika Mitchell

```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
