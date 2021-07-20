# Homework

[slide hideTitle]

# Resources

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/Homework-Resources-JPQL-and-Auto-Mapping-Objects.zip) **for these tasks.**

## Part 1: Bookshop System

You will be provided with a **bookshop_system** database. 

Make sure it has proper connections between the tables and is populated with sample data.

[/slide]

[slide hideTitle]

# Problem: Books Titles by Age Restriction

You will receive an **age restriction** from the console. 

Create a program that retrieves the titles of all books that match the **age restriction**. 

The age restriction will be **case insensitive**. 

## Examples

### Example One

| **Input** | **Output** |
| --- | --- |
| miNor | `A che punto Ã¨ la note` |
| | After Many a Summer Dies the Swan |
| | Ah |
| |  ... |

### Example Two

| **Input** | **Output** |
| --- | --- |
| teEN | All Passion Spent |
| | Wide Sea |
| | Antic Hay |
| |  ... |

[/slide]

[slide hideTitle]

# Problem: Golden Books

Create a program that retrieves the **titles of the golden edition books**, which have **less than 5000 copies**. 

## Example

| **Output** |
| --- |
| Behold the Man |
| Bury My Heart at Wounded Knee |
| The Cricket on the Hearth |
| ... |

[/slide]

[slide hideTitle]

# Problem: Books by Price

Create a program that retrieves **the titles and prices of books that cost less than 5** or **higher than 40**. 

## Example

| **Output** |
| --- |
| `A che punto Ã¨ la note - $45.78` |
| All the King's Men - $45.60 |
| An Evil Cradling - $3.30 |
| Beyond the Mexique Bay - $45.45 |
| ... |

[/slide]

[slide hideTitle]

# Problem: Not Released Books

Create a program that retrieves **the titles** of all books that are **not released** in a given year.

## Examples

### Example One

| **Input** | **Output** |
| --- | --- |
| 2000 | Absalom |
| | `A che punto Ã¨ la note` |
| | After Many a Summer Dies the Swan |
| |  ... |

### Example Two

| **Input** | **Output** |
| --- | --- |
| 1998 | `A che punto Ã¨ la note` |
| | Ah |
| | Wilderness! |
| |  ... |

[/slide]

[slide hideTitle]

# Problem: Books Released Before Date

Create a program that retrieves **the title**, **the edition type, and the price** of books, which are **released before a given date**. 

The date will be in the **format dd-MM-yyyy**.

## Examples

### Example One

| **Input** | **Output** |
| --- | --- |
| 12-04-1992 | All Passion Spent PROMO 7.18 |
| | Bury My Heart at Wounded Knee GOLD 3.86 |
| | A Catskill Eagle NORMAL 15.78 |
| | ... |

### Example Two

| **Input** | **Output** |
| --- | --- |
| 30-12-1989 | Bury My Heart at Wounded Knee GOLD 3.86 |
| | Consider the Lilies PROMO 30.89 |
| | The Curious Incident of the Dog in the Night-Time NORMAL 23.41 |
| |  ... |

[/slide]

[slide hideTitle]

# Problem: Authors Search

Create a program that retrieves **the names** of the authors whose **first names end with a given string**.

## Examples

### Example One

| **Input** | **Output** |
| --- | --- |
| e | George Powell |
| | Jane Ortiz |
| | Julie Washington |

### Example Two

| **Input** | **Output** |
| --- | --- |
| dy | Randy Morales |
| | Randy Graham |

[/slide]

[slide hideTitle]

# Problem: Books Search

Create a program that retrieves **the titles of books**, which **contain a given string** (regardless of the casing).

## Examples

### Example One

| **Input** | **Output** |
| --- | --- |
| sK | A Catskill Eagle |
| | The Daffodil Sky |
| | The Skull Beneath the Skin |

### Example Two

| **Input** | **Output** |
| --- | --- |
| WOR | Great Work of Time |
| | Terrible Swift Sword |

[/slide]

[slide hideTitle]

# Problem: Book Titles Search

Create a program that retrieves the titles of books, which are **written by authors** whose **last names start with a given string**.

## Examples

### Example One

| **Input** | **Output** |
| --- | --- |
| Ric | Arms and the Man (Amanda Rice) |
| | ... |
| | Book Title (Author's first and last name) |
| | **Check the results manually in the database, because we insert random Authors for every book.** |

### Example Two

| **Input** | **Output** |
| --- | --- |
| gr | Cover Her Face (Brenda Griffin) |
| | ... |
| | Book Title (Author's first and last name) |
| | **Check the results manually in the database, because we insert random Authors for every book.** |

[/slide]

[slide hideTitle]

# Problem: Count Books

Create a program that retrieves **the number of books**, which **titles' character length is longer than a given number**. 

## Example

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 12 | 174 | There are 174 books with titles longer than 12 symbols |
| 40 | 2 | There are 2 books with titles longer than 40 symbols | |

[/slide]

[slide hideTitle]

# Problem: Total Book Copies

Create a program that retrieves the **total number of book copies by author**. 

Order the results **in descending order by the total book copies**.

## Example

| **Output** | 
| --- |
| Randy	Graham - 196584 |
| **Check the results manually in the database, because we insert random Authors for every book.** |

[/slide]

[slide hideTitle]

# Problem: Reduced Book

Create a program that retrieves the **information (title, edition type, age restriction, and price)** for a book **by given title**. 

When retrieving the book's information, **select only the specified fields**.

## Example

| **Input** | **Output** |
| --- | --- |
| Things Fall Apart | Things Fall Apart GOLD ADULT 40.02 |

[/slide]

[slide hideTitle]

# Problem: Increase Book Copies

Create a program that **increases the copies of all books released after a given date with a given number**. 

Print the total amount of book copies that were added.

## Input

-	On the **first line** - a date in the format **dd MMM yyyy**
    * if a book is released after that date (exclusively), increase its book copies with the provided number from the second line of the input

-	On the **second line** - the number of **book copies** each book should be increased with

## Output
-	The **total number of books** that was added to the database

## Examples

### Example One

| **Input** | **Output** | **comments** |
| --- | --- | --- |
| 12 Oct 2005 | 6100 | 61 books have been released after 12 Oct 2005, so a total of 6100 book copies were added |
| 100 | | |

### Example Two

| **Input** | **Output** | **comments** |
| --- | --- | --- |
| 06 Jun 2013 | 572 | 13 books have been released after 6 Jun 2013, so total of 572 book copies were added |
| 44 | | |

[/slide]

[slide hideTitle]

# Problem: Remove Books

Create a program that **removes from the database those books**, which **are less than the provided number**. 

Print the **number of books that were deleted** from the database.

[/slide]

[slide hideTitle]

# Problem: Stored Procedure

Using the MySQL Workbench (or other similar tools) **create a stored procedure**, which receives an **author's first and last name** and returns the **total amount of books the author has written**. 

Then, create a **program that receives an author's name** and returns the **total number of books that the author has written** by **using the newly created stored procedure**.

## Examples

### Example One

| **Input** | **Output** |
| --- | --- |
| Amanda Rice | Amanda Rice has written 9 books |
| | **Check the results manually in the database, because we insert random Authors for every book.** |

### Example Two

| **Input** | **Output** |
| --- | --- |
| Christina Jordan | \{Author's first and last name\} has written \{number of books\} books |

### Example Three

| **Input** | **Output** |
| --- | --- |
| Wanda Morales | \{Author's first and last name\} has written \{number of books\} books |

[/slide]

[slide hideTitle]

# Problem: Data Models 

## Part 2: SoftUni Authentication Service 

Create the required **entities**. Use appropriate **data types**.

- The system contains information about *users* 
- Users can **register** in the system

For a successful registration, the user must have:

- an **email**
- a **password**
- a full name
- a "**created**" field, which should be automatically populated with the **current time**
- a "**modified**" field - should be automatically filled when a **modification is made to the user**

[/slide]

[slide hideTitle]

# Problem: Implement User Registration, Login and Logout 

**Unauthenticated** users can either register or log in:

- `RegisterUser|<email>|<password>|<confirmPassword>|<fullName>` - this command adds a new user to the database if the parameters are valid
  * otherwise, it prints appropriate messages informing why the user cannot be registered

The requirements for **valid parameters** are: 

1. **Email** – must contain the `@` sign and a period
    * it must be unique

2. **Password** – the character length must be **at least 6 symbols** and must contain at least **1 uppercase** letter, **1 lowercase** letter and **1 digit**

3. **Confirm Password** – must **match** the provided password

- `LoginUser|<email>|<password>` - this command sets the current logged in user, if it exists
    * otherwise, prints an appropriate message

**Logged in** users can logout.

- `Logout` – this command logs the user out of the system
    * if there is no logged in user, prints the appropriate message

## Examples

### Example One

| **Input** | **Output** |
| --- | --- |
| RegisterUser\|aariel@fixari.com\|aAriel123\|aAriel123\|Ariel | Ariel was registered |
| LoginUser\|aariel@fixari.com\|aAriel123 | Successfully logged in Ariel |
| Logout | User Ariel successfully logged out |

### Example Two

| **Input** | **Output** |
| --- | --- |
| RegisterUser\|aariel.com\|aAriel123\|aAriel123\|Ariel | Incorrect email. |

### Example Three

| **Input** | **Output** |
| --- | --- |
| LoginUser\|aariel@fixari.com\|aAriel123 | Incorrect username / password |

### Example Four

| **Input** | **Output** |
| --- | --- |
| Logout | Cannot log out. No user was logged in. |

[/slide]