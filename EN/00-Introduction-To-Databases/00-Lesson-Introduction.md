# Homework

[slide hideTitle]

# Problem with Solution: Replace Titles
[code-task title="Replace Titles" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-replace-titles" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```

```
[/code-editor]
[task-description]

Write an SQL query that finds **books which titles start with "The".** 

**Replace the substring with 3 asterisks** and retrieve the updated titles.

**Order the result by id.** 

## Example

| Title |
| --- |
| \*\*\* Mysterious Affair at Styles |
| \*\*\* Big Four |
| \*\*\* Murder at the Vicarage |
| \*\*\* Mystery of the Blue Train |
| \*\*\* Ring |
| \*\*\* Ring |
| \*\*\* Alchemist |
| \*\*\* Fifth Mountain |
| \*\*\* Zahir |
| \*\*\* Dead Zone |
| \*\*\* Hobbit |
| \*\*\* Adventures of Tom Bombadil |
| ..... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE IF NOT EXISTS authors (
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
	
CREATE TABLE  IF NOT EXISTS  books (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	author_id INT NOT NULL,
	year_of_release DATETIME,
	CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO books(author_id,title, year_of_release) VALUES
	(1,'Unfinished Portrait', '1930-01-01'),
	(1,'The Mysterious Affair at Styles', '1920-01-01'),
	(1,'The Big Four', '1927-01-01'),
	(1,'The Murder at the Vicarage', '1930-01-01'),
	(1,'The Mystery of the Blue Train', '1928-01-01'),
	(2,'Julius Caesar', '1599-01-01'),
	(2,'Timon of Athens', '1607-01-01'),
	(2,'As You Like It', '1600-01-01'),
	(2,'A Midsummer Night''s Dream', '1595-01-01'),
	(3,'Going Home', '1973-01-01'),
	(3,'The Ring', '1980-01-01'),
	(3,'Secrets', '1985-01-01'),
	(3,'Message From Nam', '1990-01-01'),
	(4,'Career of Evil', '2015-01-01'),
	(4, 'Harry Potter and the Philosopher''s Stone','1997-01-01'),
	(4,'Harry Potter and the Chamber of Secrets','1998-01-01'),
	(4,'Harry Potter and the Prisoner of Azkaban','1999-01-01'),
	(4,'Harry Potter and the Goblet of Fire','2000-01-01'),
	(4,'Harry Potter and the Order of the Phoenix','2003-01-01'),
	(4,'Harry Potter and the Half-Blood Prince','2005-01-01'),
	(4,'Harry Potter and the Deathly Hallows','2007-01-01'),
	(4,'Harry Potter and the Deathly Hallows','2007-01-01'),
	(5,'Anna Karenina','1877-01-01'),
	(5,'War And Peace','1869-01-01'),
	(5,'Boyhood','1854-01-01'),
	(6,'By the River Piedra I Sat Down and Wept','1994-01-01'),
	(6,'The Alchemist','1988-01-01'),
	(6,'The Fifth Mountain','1996-01-01'),
	(6,'The Zahir','2005-01-01'),
	(7,'Rage','1977-01-01'),
	(7,'The Dead Zone','1979-01-01'),
	(7,'It','1986-01-01'),
	(7,'It','1986-01-01'),	
	(8,'The Hobbit','1937-01-01'),	
	(8,'The Adventures of Tom Bombadil','1962-01-01'),	
	(9,'Fifty Shades of Grey','2011-01-01'),	
	(9,'Fifty Shades Darker','2012-01-01'),	
	(9,'Fifty Shades Freed','2012-01-01');
[/input]
[output]
\*\*\* Mysterious Affair at Styles
\*\*\* Big Four
\*\*\* Murder at the Vicarage
\*\*\* Mystery of the Blue Train
\*\*\* Ring
\*\*\* Alchemist
\*\*\* Fifth Mountain
\*\*\* Zahir
\*\*\* Dead Zone
\*\*\* Hobbit
\*\*\* Adventures of Tom Bombadil
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS authors (
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
	
CREATE TABLE  IF NOT EXISTS  books (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	author_id INT NOT NULL,
	year_of_release DATETIME,
	CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO books(author_id,title, year_of_release) VALUES
	(1,'Unfinished Portrait', '1930-01-01'),
	(1,'The Mysterious Affair at Styles', '1920-01-01'),
	(1,'The Big Four', '1927-01-01'),
	(1,'The Murder at the Vicarage', '1930-01-01'),
	(1,'The Mystery of the Blue Train', '1928-01-01'),
	(2,'Julius Caesar', '1599-01-01'),
	(2,'Timon of Athens', '1607-01-01'),
	(2,'As You Like It', '1600-01-01'),
	(2,'A Midsummer Night''s Dream', '1595-01-01'),
	(3,'Going Home', '1973-01-01'),
	(3,'The Ring', '1980-01-01'),
	(3,'Secrets', '1985-01-01'),
	(3,'Message From Nam', '1990-01-01'),
	(4,'Career of Evil', '2015-01-01'),
	(4, 'Harry Potter and the Philosopher''s Stone','1997-01-01'),
	(4,'Harry Potter and the Chamber of Secrets','1998-01-01'),
	(4,'Harry Potter and the Prisoner of Azkaban','1999-01-01'),
	(4,'Harry Potter and the Goblet of Fire','2000-01-01'),
	(4,'Harry Potter and the Order of the Phoenix','2003-01-01'),
	(4,'Harry Potter and the Half-Blood Prince','2005-01-01'),
	(4,'Harry Potter and the Deathly Hallows','2007-01-01'),
	(4,'Harry Potter and the Deathly Hallows','2007-01-01'),
	(5,'Anna Karenina','1877-01-01'),
	(5,'War And Peace','1869-01-01'),
	(5,'Boyhood','1854-01-01'),
	(6,'By the River Piedra I Sat Down and Wept','1994-01-01'),
	(6,'The Alchemist','1988-01-01'),
	(6,'The Fifth Mountain','1996-01-01'),
	(6,'The Zahir','2005-01-01'),
	(7,'Rage','1977-01-01'),
	(7,'The Dead Zone','1979-01-01'),
	(7,'It','1986-01-01'),
	(7,'It','1986-01-01'),	
	(8,'The Hobbit','1937-01-01'),	
	(8,'The Adventures of Tom Bombadil','1962-01-01'),	
	(9,'Fifty Shades of Grey','2011-01-01'),	
	(9,'Fifty Shades Darker','2012-01-01'),	
	(9,'Fifty Shades Freed','2012-01-01');
[/input]
[output]
\*\*\* Mysterious Affair at Styles
\*\*\* Big Four
\*\*\* Murder at the Vicarage
\*\*\* Mystery of the Blue Train
\*\*\* Ring
\*\*\* Alchemist
\*\*\* Fifth Mountain
\*\*\* Zahir
\*\*\* Dead Zone
\*\*\* Hobbit
\*\*\* Adventures of Tom Bombadil
[/output]
[/test]
[/tests]
[/code-task]
[/slide]