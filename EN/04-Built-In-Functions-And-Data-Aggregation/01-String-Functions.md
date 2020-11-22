
[slide]

# String Functions

We use String Functions to manipulate our character string effectively.

Take a look at this simple example of String Function:

## SUBSTRING()

The `SUBSTRING()` function allows us to extract part of a string.

We can use it this way:

``` java
SUBSTRING(String, Position) // Here we select our String and position from which we will take the substring
```

**Example:**

``` java
SELECT SUBSTRING('softuni.org',2);
```

**Output will be:**

```
oftuni.org
```

The second way of using our `SUBSTRING()` is:

``` java
SUBSTRING(String, Position, Length) // We take the index from where our result will start to index from where it will finish
```

**Example**:

``` java
SELECT SUBSTRING('softuni.org',1,3);
```

**Output will be:**

```
sof
```


We can use the `SUBSTRING()` method this way too:

``` java
SUBSTRING(String FROM Position FOR Length) // This way, we can choose from which position we want to 
                                           //  start taking the substring and for what length.
```

**Example:**

``` java
SELECT SUBSTRING('softuni.org' FROM 2 FOR 5);
```

**Output will be:**

```
ouftun
```

Now, let's try to solve a simple problem knowing this:



[/slide]


[slide hideTitle]

# Problem: Find Book Titles
[code-task title="Problem: Find Book Titles" taskId="a68acaa8-d49e-4ed1-974f-00974e5d2ce2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
# Description

Write a SQL query to find **books which titles start with "The".** 

**Order the result by id.** 

**Run your query statement and submit the following output as plain text.**

## Example:

| Title |
| --- |
| The Mysterious Affair at Styles |
| The Big Four |
| The Murder at the Vicarage |
| The Mystery of the Blue Train |
| The Ring |
| ..... |



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
	(1,'Unfinished Portrait', '1930-00-00', 15.99),
	(1,'The Mysterious Affair at Styles', '1920-00-00',17.99),
	(1,'The Big Four', '1927-00-00',14.99),
	(1,'The Murder at the Vicarage', '1930-00-00',13.99),
	(1,'The Mystery of the Blue Train', '1928-00-00',12.99),
	(2,'Julius Caesar', '1599-00-00',11.99),
	(2,'Timon of Athens', '1607-00-00',13.99),
	(2,'As You Like It', '1600-00-00',18.99),
	(2,'A Midsummer Night\'s Dream', '1595-00-00',15.99),
	(3,'Going Home', '1973-00-00',15.99),
	(3,'The Ring', '1980-00-00',14.99),
	(3,'Secrets', '1985-00-00',15.99),
	(3,'Message From Nam', '1990-00-00',13.99),
	(4,'Career of Evil', '2015-00-00',15.99),
	(4, 'Harry Potter and the Philosopher\'s Stone','1997-00-00',19.99),
	(4,'Harry Potter and the Chamber of Secrets','1998-00-00',19.99),
	(4,'Harry Potter and the Prisoner of Azkaban','1999-00-00',19.99),
	(4,'Harry Potter and the Goblet of Fire','2000-00-00',19.99),
	(4,'Harry Potter and the Order of the Phoenix','2003-00-00',19.99),
	(4,'Harry Potter and the Half-Blood Prince','2005-00-00',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-00-00',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-00-00',15.99),
	(5,'Anna Karenina','1877-00-00',15.99),
	(5,'War And Peace','1869-00-00',30),
	(5,'Boyhood','1854-00-00',15.99),
	(6,'By the River Piedra I Sat Down and Wept','1994-00-00',15.99),
	(6,'The Alchemist','1988-00-00',15.99),
	(6,'The Fifth Mountain','1996-00-00',15.99),
	(6,'The Zahir','2005-00-00',15.99),
	(7,'Rage','1977-00-00',13.99),
	(7,'The Dead Zone','1979-00-00',13.99),
	(7,'It','1986-00-00',13.99),
	(7,'It','1986-00-00',13.99),	
	(8,'The Hobbit','1937-00-00',20.99),	
	(8,'The Adventures of Tom Bombadil','1962-00-00',13.99),	
	(9,'Fifty Shades of Grey','2011-00-00',13.99),	
	(9,'Fifty Shades Darker','2012-00-00',13.99),	
	(9,'Fifty Shades Freed','2012-00-00',13.99);
[/input]
[output]
The Mysterious Affair at Styles
The Big Four
The Murder at the Vicarage
The Mystery of the Blue Train
The Ring
The Alchemist
The Fifth Mountain
The Zahir
The Dead Zone
The Hobbit
The Adventures of Tom Bombadil
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
	(1,'Unfinished Portrait', '1930-00-00', 15.99),
	(1,'The Mysterious Affair at Styles', '1920-00-00',17.99),
	(1,'The Big Four', '1927-00-00',14.99),
	(1,'The Murder at the Vicarage', '1930-00-00',13.99),
	(1,'The Mystery of the Blue Train', '1928-00-00',12.99),
	(2,'Julius Caesar', '1599-00-00',11.99),
	(2,'Timon of Athens', '1607-00-00',13.99),
	(2,'As You Like It', '1600-00-00',18.99),
	(2,'A Midsummer Night\'s Dream', '1595-00-00',15.99),
	(3,'Going Home', '1973-00-00',15.99),
	(3,'The Ring', '1980-00-00',14.99),
	(3,'Secrets', '1985-00-00',15.99),
	(3,'Message From Nam', '1990-00-00',13.99),
	(4,'Career of Evil', '2015-00-00',15.99),
	(4, 'Harry Potter and the Philosopher\'s Stone','1997-00-00',19.99),
	(4,'Harry Potter and the Chamber of Secrets','1998-00-00',19.99),
	(4,'Harry Potter and the Prisoner of Azkaban','1999-00-00',19.99),
	(4,'Harry Potter and the Goblet of Fire','2000-00-00',19.99),
	(4,'Harry Potter and the Order of the Phoenix','2003-00-00',19.99),
	(4,'Harry Potter and the Half-Blood Prince','2005-00-00',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-00-00',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-00-00',15.99),
	(5,'Anna Karenina','1877-00-00',15.99),
	(5,'War And Peace','1869-00-00',30),
	(5,'Boyhood','1854-00-00',15.99),
	(6,'By the River Piedra I Sat Down and Wept','1994-00-00',15.99),
	(6,'The Alchemist','1988-00-00',15.99),
	(6,'The Fifth Mountain','1996-00-00',15.99),
	(6,'The Zahir','2005-00-00',15.99),
	(7,'Rage','1977-00-00',13.99),
	(7,'The Dead Zone','1979-00-00',13.99),
	(7,'It','1986-00-00',13.99),
	(7,'It','1986-00-00',13.99),	
	(8,'The Hobbit','1937-00-00',20.99),	
	(8,'The Adventures of Tom Bombadil','1962-00-00',13.99),	
	(9,'Fifty Shades of Grey','2011-00-00',13.99),	
	(9,'Fifty Shades Darker','2012-00-00',13.99),	
	(9,'Fifty Shades Freed','2012-00-00',13.99);
[/input]
[output]
The Mysterious Affair at Styles
The Big Four
The Murder at the Vicarage
The Mystery of the Blue Train
The Ring
The Alchemist
The Fifth Mountain
The Zahir
The Dead Zone
The Hobbit
The Adventures of Tom Bombadil
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Solution: Find Book Titles
[code-task title="Problem: Find Book Titles" taskId="a68acaa8-d49e-4ed1-974f-00974e5d2ce2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
# Description

Write a SQL query to find **books which titles start with "The".** 

**Order the result by id.** 

**Run your query statement and submit the following output as plain text.**

## Example:

| Title |
| --- |
| The Mysterious Affair at Styles |
| The Big Four |
| The Murder at the Vicarage |
| The Mystery of the Blue Train |
| The Ring |
| ..... |



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
	(1,'Unfinished Portrait', '1930-00-00', 15.99),
	(1,'The Mysterious Affair at Styles', '1920-00-00',17.99),
	(1,'The Big Four', '1927-00-00',14.99),
	(1,'The Murder at the Vicarage', '1930-00-00',13.99),
	(1,'The Mystery of the Blue Train', '1928-00-00',12.99),
	(2,'Julius Caesar', '1599-00-00',11.99),
	(2,'Timon of Athens', '1607-00-00',13.99),
	(2,'As You Like It', '1600-00-00',18.99),
	(2,'A Midsummer Night\'s Dream', '1595-00-00',15.99),
	(3,'Going Home', '1973-00-00',15.99),
	(3,'The Ring', '1980-00-00',14.99),
	(3,'Secrets', '1985-00-00',15.99),
	(3,'Message From Nam', '1990-00-00',13.99),
	(4,'Career of Evil', '2015-00-00',15.99),
	(4, 'Harry Potter and the Philosopher\'s Stone','1997-00-00',19.99),
	(4,'Harry Potter and the Chamber of Secrets','1998-00-00',19.99),
	(4,'Harry Potter and the Prisoner of Azkaban','1999-00-00',19.99),
	(4,'Harry Potter and the Goblet of Fire','2000-00-00',19.99),
	(4,'Harry Potter and the Order of the Phoenix','2003-00-00',19.99),
	(4,'Harry Potter and the Half-Blood Prince','2005-00-00',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-00-00',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-00-00',15.99),
	(5,'Anna Karenina','1877-00-00',15.99),
	(5,'War And Peace','1869-00-00',30),
	(5,'Boyhood','1854-00-00',15.99),
	(6,'By the River Piedra I Sat Down and Wept','1994-00-00',15.99),
	(6,'The Alchemist','1988-00-00',15.99),
	(6,'The Fifth Mountain','1996-00-00',15.99),
	(6,'The Zahir','2005-00-00',15.99),
	(7,'Rage','1977-00-00',13.99),
	(7,'The Dead Zone','1979-00-00',13.99),
	(7,'It','1986-00-00',13.99),
	(7,'It','1986-00-00',13.99),	
	(8,'The Hobbit','1937-00-00',20.99),	
	(8,'The Adventures of Tom Bombadil','1962-00-00',13.99),	
	(9,'Fifty Shades of Grey','2011-00-00',13.99),	
	(9,'Fifty Shades Darker','2012-00-00',13.99),	
	(9,'Fifty Shades Freed','2012-00-00',13.99);
[/input]
[output]
The Mysterious Affair at Styles
The Big Four
The Murder at the Vicarage
The Mystery of the Blue Train
The Ring
The Alchemist
The Fifth Mountain
The Zahir
The Dead Zone
The Hobbit
The Adventures of Tom Bombadil
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
	(1,'Unfinished Portrait', '1930-00-00', 15.99),
	(1,'The Mysterious Affair at Styles', '1920-00-00',17.99),
	(1,'The Big Four', '1927-00-00',14.99),
	(1,'The Murder at the Vicarage', '1930-00-00',13.99),
	(1,'The Mystery of the Blue Train', '1928-00-00',12.99),
	(2,'Julius Caesar', '1599-00-00',11.99),
	(2,'Timon of Athens', '1607-00-00',13.99),
	(2,'As You Like It', '1600-00-00',18.99),
	(2,'A Midsummer Night\'s Dream', '1595-00-00',15.99),
	(3,'Going Home', '1973-00-00',15.99),
	(3,'The Ring', '1980-00-00',14.99),
	(3,'Secrets', '1985-00-00',15.99),
	(3,'Message From Nam', '1990-00-00',13.99),
	(4,'Career of Evil', '2015-00-00',15.99),
	(4, 'Harry Potter and the Philosopher\'s Stone','1997-00-00',19.99),
	(4,'Harry Potter and the Chamber of Secrets','1998-00-00',19.99),
	(4,'Harry Potter and the Prisoner of Azkaban','1999-00-00',19.99),
	(4,'Harry Potter and the Goblet of Fire','2000-00-00',19.99),
	(4,'Harry Potter and the Order of the Phoenix','2003-00-00',19.99),
	(4,'Harry Potter and the Half-Blood Prince','2005-00-00',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-00-00',19.99),
	(4,'Harry Potter and the Deathly Hallows','2007-00-00',15.99),
	(5,'Anna Karenina','1877-00-00',15.99),
	(5,'War And Peace','1869-00-00',30),
	(5,'Boyhood','1854-00-00',15.99),
	(6,'By the River Piedra I Sat Down and Wept','1994-00-00',15.99),
	(6,'The Alchemist','1988-00-00',15.99),
	(6,'The Fifth Mountain','1996-00-00',15.99),
	(6,'The Zahir','2005-00-00',15.99),
	(7,'Rage','1977-00-00',13.99),
	(7,'The Dead Zone','1979-00-00',13.99),
	(7,'It','1986-00-00',13.99),
	(7,'It','1986-00-00',13.99),	
	(8,'The Hobbit','1937-00-00',20.99),	
	(8,'The Adventures of Tom Bombadil','1962-00-00',13.99),	
	(9,'Fifty Shades of Grey','2011-00-00',13.99),	
	(9,'Fifty Shades Darker','2012-00-00',13.99),	
	(9,'Fifty Shades Freed','2012-00-00',13.99);
[/input]
[output]
The Mysterious Affair at Styles
The Big Four
The Murder at the Vicarage
The Mystery of the Blue Train
The Ring
The Alchemist
The Fifth Mountain
The Zahir
The Dead Zone
The Hobbit
The Adventures of Tom Bombadil
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# REPLACE Function

Now, let's take a look at the `REPLACE()` function in MySQL:

`REPLACE()` Function allows us to replace all occurrences of a substring with a string.

It's important to know that this method performs a **case-sensitive** match.

The **Syntax** here we can use is:

``` java
REPLACE(String, Pattern, Replacement) // Where String is our field from the table.
                                      // Pattern is the String which we need to replace
                                      // Replacement is our replacement pattern                               
```

Take a look at this simple code:

``` java
SELECT REPLACE('aaa.softuni.org','a','w'); // This example will replace all "a" with "w"
```

**Output after executing will be:**

```
www.softuni.org
```

Using this method we can **replace whole words**:

``` java
SELECT REPLACE('We can replace the word blood with a different symbol or words', 'blood', '*****') 
// Where we first have our text, second we write the word we need to replace, and the last we write the replacement symbol or character.
```

**Output will be:**

```
We can replace the word ***** with different symbol or words
```


[/slide]

[slide hideTitle]

# Problem: Replace Titles

We will need the resources from the link at the beginning of our lesson.

# Description

Write a SQL query to find books which titles **start with "The" and replace the substring with 3 asterisks.**

Retrieve data about the updated titles. **Order the result by id**. Submit your query statements as **Prepare DB & run queries**. 


## Example:

| Title |
| --- |
| *** Mysterious Affair at Styles |
| *** Big Four |
| *** Murder at the Vicarage |
| *** Mystery of the Blue Train |
| *** Ring |
| *** Alchemist |
| *** Fifth Mountain |
| *** Zahir |
| *** Dead Zone |
| *** Hobbit |
| *** Adventures of Tom Bombadil |




[/slide]

[slide hideTitle]

# Solution: Replace Titles

We will need the resources from the link at the beginning of our lesson.

# Description

Write a SQL query to find books which titles **start with "The" and replace the substring with 3 asterisks.**

Retrieve data about the updated titles. **Order the result by id**. Submit your query statements as **Prepare DB & run queries**. 


## Example:

| Title |
| --- |
| *** Mysterious Affair at Styles |
| *** Big Four |
| *** Murder at the Vicarage |
| *** Mystery of the Blue Train |
| *** Ring |
| *** Alchemist |
| *** Fifth Mountain |
| *** Zahir |
| *** Dead Zone |
| *** Hobbit |
| *** Adventures of Tom Bombadil |


[/slide]

[slide]

# LTRIM & RTRIM Functions

**LTRIM** and **RTRIM** functions remove the space characters of a string passed as an argument.

We can use the function like this:

``` java
LTRIM(String)
RTRIM(String)
```

Let's take a look at this simple example:

``` java
SELECT LTRIM('    Softuni rocks!')
```

The Left Trim will trim the spaces left from "Softuni rocks!" and the **output** will be:

``` 
Softuni rocks!
```

The same principle is valid for the `RTRIM()`, but this time it will remove the trailing spaces right after the text.

``` java
SELECT RTRIM('Softuni rocks!'     )
```

**Output**:

```
Softuni rocks!
```

[/slide]

[slide]

# CHAR_LENGTH & LENGTH Functions

`CHAR_LENGTH()` will return the length of our string. 

We will understand this better with the following examples:

``` java
SELECT CHAR_LENGTH('Let us count the characters in this sentence');
// This will count the whitespaces too
```

**Output:**

```
44
```

The `LENGTH()` will return the **same result** from the input above:

So, what is the difference between them?

It's important to know that a **multi-byte character will counts as a single character**.

If our string c**ontains five two-bite characters**, our `CHAR_LENGTH()` function will return **5**, but our `LENGTH()` will return **10**.

We will picture this better with a very simple example:

``` java
SELECT LENGTH('§'); vs SELECT CHAR_LENGTH('§');
```

| **LENGTH('§')** | **CHAR_LENGTH('§')** | 
| --- | --- |
| 2 | 1 |

As we see here, the `LENGTH()` function will return the result of **2**, and the `CHAR_LENGTH()` will return **1**.

[/slide]

[slide]

# LEFT & RIGHT Functions

`LEFT()` and `RIGHT()` Functions get characters from **beginning** or **end** of a string.

Let see the Syntax first:

``` java
LEFT(String, Count)
RIGHT(String, Count)
```

**Examples:**

``` java
SELECT LEFT('Testing Left Function', 5); // This syntax will return the first five characters from the left in our string.
```

**Output:**

```
Testi
```

Similarly, our `RIGHT()` function will return the first five characters from the right in our String:

``` java
SELECT RIGHT('Testing Left Function', 5);
```

**Output:**

```
ction
```


[/slide]

[slide]

# LOWER & UPPER Functions

In MySQL we use `LOWER()` function to converts all characters in our string to **lowercase** letters.

Let's see the following example:

``` java
SELECT LOWER('SOFTUNI DB COURSE'); // This will convert all upper characters to lower.
```

**Output** will be:

```
softuni db course
```

Similarly to this, we can use `UPPER()` to convert all lower case letters to upper case.

**Example:**

``` java
SELECT UPPER('i am an upper case');
```

**Output:**

```
I AM UPPER CASE
```

[/slide]

[slide]

# REVERSE & REPEAT Functions

Next, we will take a look at `REVERSE()` and `REPEAT()` functions:

`REVERSE()` function allows us to reverse the order of all characters in the string.

For example:

``` java
SELECT REVERSE('softuni'); // This will reverse the characters in the "softuni" string
```

**Output** will be:

```
inutfos
```

`REPEAT()` function allows us to repeat a string a specified number of times.

The syntax here is also pretty easy:

``` java
SELECT REPEAT('softuni ',3); // This will repeat softuni with the whitespace after exactly 3 times
```

**Output:**

```
softuni softuni softuni 
```
[/slide]

[slide]

# LOCATE & INSERT Functions

`LOCATE()` function in MySQL lets us locate a specific pattern (substring) in our string.

The function performs a **case-insensitive** search.

We can see the syntax here:

``` java
LOCATE(Pattern, String,[Position]) // Where the [Position] argument is optional. If omitted, it defaults to 1. 
                                  // The first position in our string is 1.
```

Let's illustrate this with a simple code example:

``` java
SELECT LOCATE('st','teststring');
```

The following **output** will be:

```
3
```

The last **String** function we will look at is `INSERT()` function.

It allows us to insert substring at a specific position.

**Syntax:**

``` java
INSERT(String, Position, Length, Substring) // Our Length parameter indicates the count characters will be deleted.
```

**Example:**

``` java
SELECT INSERT('SoftuniTestString', 2, 4, ' insert ');
```

**Output after executing:**

```
'S insert niTestString'
```


[/slide]