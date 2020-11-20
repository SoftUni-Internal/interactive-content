[slide]

# Annotations
Now, lets find out what is Java Annotation.

Annotations are kind of **metadata** that you can insert in your Java code.

They are Java types that are preceded by an "@" symbol and are used to **describes** parts of your code.

Annotations can be applied to **Classes**, **Fields**, **Methods**, etc.

Lets see simple exaple of annotations:

``` java
@Deprecated // That shows our method is Deprecated
public void deprecatedMethod() {
  System.out.println("Deprecated!");
}
```

These annotation are used to generate or suppress warnings and errors. It is good practice to apply them since it can prevent future programmer errors.

Here is example of some **Built-In** annotations:

- `@Override` annotation indicates that a method overrides or replaces the behavior of an inherited method.

- `@Deprecated` annotation for example shows us an API that is not intended for use anymore.

- `@SupressWarning` is used to turn off compiler warnings. 

Lets see how we can use it:

```java
@SuppressWarnings(value = "unchecked")
public <T> void warning(int size) {
  T[] unchecked = (T[]) new Object[size]; // Where (T[]) generates compiler warning
}
```

We can create Custom Annotations using @interface keyword.

Here is other things to remember while creating custom annotations:

- Methods can have default values

- Return types are restricted to **primitives**, **String**, **Class**, **enums**, **annotations**, and **arrays** of the preceding types.

- Our method declarations must not throws any clause or have any parameters.

Here is custom annotation Java example:

``` java
@interface MyAnnotation {

   String   name();
   int      age();
   String[] newNames();
}
``` 

We can notice here that every element is defined similarly to a method definition in an interfaces.

To use our custom created annotation we can use code like this:

``` java
@MyAnnotation(
    name="George",
    age=25,
    newNames={"Peter", "Anderson"}
)
public class MyClass {

}
```

One more thing we can do is to specify where the annotation is applicable.

We can achieve this using `@Target`

``` java
@Target(ElementType.FIELD) // it is used to annotate fields only
public @interface FieldAnnotation {
}
```

Available Element Types are:

- CONSTRUCTOR
- FIELD
- LOCAL_VARIABLE
- METHOD
- PACKAGE
- PARAMETER
- TYPE

We use `@Retention` to specify if our custom annotation should be available during runtime.

``` java
@Retention(RetentionPolicy.RUNTIME) // we can get info at runtime
public @interface RuntimeAnnotation {
  // ... logic here
}
```

Other retention policies:

- SOURCE
- CLASS
- RUNTIME


[/slide]

[slide hideTitle]

# Problem: Create Annotation

[/slide]


[slide]

# Obtaining Annotations

Lets see, how can obtain class annotations:

We can use `getAnnotations()` method to obtain all class annotations.

```java
Annotation[] annotations = aClass.getAnnotations();
```

If we need to obtain parameter annotations we can use following syntax:

```java
Annotation[][] parameterAnnotations = method.getParameterAnnotations();
```

Its important to know that this method returns a two-dimensional Annotation array, representing the annotations of the method object.

We can also obtain the fields and methods of the annotations:

``` java
Annotation[] fieldAnots = field.getDeclaredAnnotations();
```

``` java
Annotation[] methodAnot = method.getDeclaredAnnotations();
```


[/slide]

[slide hideTitle]
# Problem: Create Annotation
[code-task title="Problem: Create Annotation" taskId="b8c27c60-4a50-4b09-9b9e-cfea3b81d211" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description
Create annotation **Subject** with a **String[]** element called **categories**, that: 
- Should be available at runtime
- Can be placed only on types

# Example
```java
@Subject(categories {"Test", "Annotations"})
public class Testclass {
}
```
[/slide]

[slide]

# Solution: Create Annotation

[/slide]

[slide hideTitle]
# Problem: Coding Tracker
[code-task title="Problem: Coding Tracker" taskId="18d26a01-9dd1-4020-a967-e28a0672ec0c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description
Create annotation **Author** with a **String** element called **name**, that:
- Should be available at runtime
- Can be placed only on methods

Create a class **Tracker** with a method:
- **public static void printMethodsByAuthor()**


# Example
```java
@Author (name = "George")
public static void main(String[] args) {
    Tracker.print Methods ByAuthor(Tracker.class);
}

@Author (name "Peter")
public static void printMethodsByAuthor(Class<?> cl) {...}
```
## Output
```java
George: main()
Peter: printMethodsByAuthor()
```
[/slide]

[slide]

# Solution: Coding Tracker

[/slide]

[slide hideTitle]
# Problem: Find Book Titles
[code-task title="Problem: Find Book Titles" taskId="cd68587e-9e7a-42ed-a7ab-30b39255b0a0" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description
Download from the course instance and get familiar with the book_library database. 

You will use it in the following exercises. (database for built-in-functions lesson 1-5 problems)

Download resources [here](https://mega.nz/file/yEg2xCKZ#OyxQOyoK2Q-WL4dQo_2zBmuF82V5HAPg2Ycdp07M3jY).

Write a SQL query to find **books which titles start with "The".** 

**Order the result by id.** 

Submit your query statements as **Prepare DB & run queries.** 

## Example
| **title** |
| --- |
| The Mysterious Affair at Styles |
| The Big Four |
| The Murder at the Vicarage |
| The Mystery of the Blue Train |
| The Ring |
| … |

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
# Solution: Find Book Titles

[/slide]