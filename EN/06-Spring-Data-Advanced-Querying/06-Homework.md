[slide]

# Homework

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/06-Spring-Advanced-Querying-Homework.zip) **for this task.**

For the following tasks use the bookshop_system database from the previous exercise. 

Make sure it has proper connections between the tables and it is populated with any sample data.

[/slide]

[slide]

# Books Titles by Age Restriction

### Description:

Write a program that prints **the titles of all books**, 

for which the **age restriction** matches the given input (minor, teen or adult). 

**Ignore casing** of the input.

### Example:

| **input**  | **output**  |
|---|---|
| miNor  | A che punto Ã¨ la note  |
|   | After Many a Summer Dies the Swan  |
|   | Ah  |
|   | …  |
|   |   |

| **input**  | **output**  |
|---|---|
| teEN  | All Passion Spent  |
|   | Wide Sea  |
|   | Antic Hay  |
|   | …  |
|   |   |

[/slide]

[slide]

# Golden Books

### Description:

Write a program **that prints the titles of the golden edition** books, 

which have **less than 5000 copies**.

### Example:
| **output**  |
|---|
|Behold the Man   |
|Bury My Heart at Wounded Knee   |
|The Cricket on the Hearth   |
|…   |
|    |

[/slide]

[slide]

# Books by Price

### Description:
Write a program that prints **the titles and prices of books** with **price lower than 5 and higher than 40**.

### Example:

| **output**  |
|---|
|A che punto Ã¨ la note - $45.78   |
|All the King's Men - $45.60   |
|An Evil Cradling - $3.30   |
|Beyond the Mexique Bay - $45.45  |
|…  |
|   |

[/slide]

[slide]

# Not Released Books

Write a program that prints **the titles** of all books that are **NOT released** in a given year

### Description:

### Example:

| **input**  | **output**  |
|---|---|
| 2000  | Absalom  |
|   | A che punto Ã¨ la note  |
|   | After Many a Summer Dies the Swan  |
|   | …  |
|   |   |

| **input**  | **output**  |
|---|---|
| 1998  | A che punto Ã¨ la note  |
|   | Ah  |
|   | Wilderness!  |
|   | …  |
|   |   |

[/slide]

[slide]

# Books Released Before Date

### Description:

Write a program that prints the title, 

**the edition type and the price** of books, 

which are **released before a given date**. 

The date will be in the **format dd-MM-yyyy**.

### Example:

| **input**  | **output**  |
|---|---|
| 12-04-1992  | All Passion Spent PROMO 7.18  |
|   | Bury My Heart at Wounded Knee GOLD 3.86  |
|   | A Catskill Eagle NORMAL 15.78  |
|   | ...   |
|   |   |

| **input**  | **output**  |
|---|---|
| 30-12-1989  | Bury My Heart at Wounded Knee GOLD 3.86  |
|   | Consider the Lilies PROMO 30.89  |
|   | The Curious Incident of the Dog in the Night-Time NORMAL 23.41  |
|   | …  |
|   |   |

[/slide]

[slide]

# Authors Search

### Description:

Write a program that prints **the names** of those authors, 

whose **first name ends with a given string**.

### Example:

| **input**  | **output**  |
|---|---|
| e  | George Powell  |
|   | Jane Ortiz  |
|   | Julie Washington  |
|   |   |

| **input**  | **output**  |
|---|---|
| dy  | Randy Morales  |
|   | Randy Graham  |
|   |   |

[/slide]

[slide]

# Books Search

### Description:

Write a program that prints **the titles of books**, 

which **contain a given string** (regardless of the casing).

### Example:

| **input**  | **output**  |
|---|---|
| sK  | A Catskill Eagle  |
|   | The Daffodil Sky  |
|   | The Skull Beneath the Skin  |
|   |   |

| **input**  | **output**  |
|---|---|
| WOR  | Great Work of Time  |
|   | Terrible Swift Sword  |
|   |   |



[/slide]

[slide]

# Book Titles Search

### Description:

Write a program that prints the titles of books, 

which are written by authors, 

whose last name starts with a given string.

### Example:

| **input**  | **output**  |
|---|---|
| Ric  | Arms and the Man (Amanda Rice)   |
|   | ...  |
|   |   |

| **input**  | **output**  |
|---|---|
| gr  | Cover Her Face (Brenda Griffin)  |
|   | ...  |
|   |   |

Book Title ( Authors first and last name)
**Check results manually in DB, because we insert random Authors for every books.**


[/slide]


[slide]

# Count Books

### Description:

Write a program that prints **the number of books**, 

whose **title is longer than a given number**.

### Example:

| **input**  | **output**  | **output**  |
|---|---|---|
| 12  | 174  | There are 174 books with longer title than 12 symbols  |
| 40  | 2  | There are 2 books with longer title than 40 symbols  |
|   |   |   |


[/slide]


[slide]

# Total Book Copies

### Description:

Write a program that prints the **total number of book copies by author**. 

Order the results **descending by total book copies**.

### Example:

| **Output**  | 
|---|
| Randy	Graham - 196584  |
|   |

**Check results manually in DB, because we insert random Authors for every books.**

[/slide]

[slide]

# Reduced Book

### Description:

Write a program that prints **information (title, edition type, age restriction and price)** for a book **by given title**. 

When retrieving the book information **select only those fields** and **do NOT include any other information** in the returned result.

### Example:

| **input**  | **output**  |
|---|---|
| Things Fall Apart    | Things Fall Apart GOLD ADULT 40.02  |
|    |    |


[/slide]

[slide]

# Increase Book Copies

### Description:

Write a program that **increases the copies of all books released after a given date with a given number**. 

Print the total amount of book copies that were added.

**Input**

-	On the **first line** – date in the format **dd MMM yyyy**. 
If a book is released after that date (exclusively), 
increase its book copies with the provided number from the second line of the input.

-	On the **second line** – number of **book copies** each book should be increased with.

**Output**
-	**Total number of books** that was added to the database.


### Example:

| **input**  | **output**  | **comments**  |
|---|---|---|
| 12 Oct 2005   | 6100   | 61 books are released after 12 Oct 2005, so total of 6100 book copies were added  |
| 100   |    |    |
|    |    |    |

| **input**  | **output**  | **comments**  |
|---|---|---|
| 06 Jun 2013   | 572   | 13 books are released after 6 Jun 2013, so total of 572 book copies were added  |
| 44   |    |    |
|    |    |    |


[/slide]

[slide]

# Remove Books

### Description:

Write a program that **removes from the database those books**, 

which **copies are lower than a given number**. 

Print the** number of books that were deleted** from the database.

[/slide]

[slide]

# Stored Procedure

### Description:

Using Workbench (or other similar tool) **create a stored procedure**, 

which receives an **author's first and last name** and returns the **total amount of books the author has written**. 

Then write a **program that receives an author's name** and prints the **total number of books** the author has written by **using the stored procedure** you've just created.

### Example:

| **input**  | **output**  |
|---|---|
| Amanda Rice    | Amanda Rice has written 9 books  |
|    |    |

| **input**  | **output**  |
|---|---|
| Christina Jordan    | {Author first and last name} has writtent {number of books} books  |
|    |    |

| **input**  | **output**  |
|---|---|
| Wanda Morales    | {Author first and last name} has writtent {number of books} books  |
|    |    |

**Check results manually in DB, because we insert random Authors for every books.**

[/slide]
