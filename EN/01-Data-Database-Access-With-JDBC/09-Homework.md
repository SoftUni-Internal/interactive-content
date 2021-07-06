# Homework

[slide hideTitle]

## 1. Initial Setup 

Be familiar with database "**minions_db**". Here is an ER diagram:

[image assetsSrc="Spring-Data-Database-Access-With-JDBC-Homework.png" /]

Execute the SQL file that was given to you.

[/slide]

[slide hideTitle]

# 2. Get Villains’ Names

## Description 
Write a program that prints on the console **all villains’ names** and their **number of minions**.

Get only the villains who have more than 15 minions. **Order** them by the number of minions in **descending order**.

## Example

| **Output**  |
|---|
| Flo 19
Carl 16  |
|   |

[/slide]

[slide hideTitle]

# 3. Get Minion Names

## Description

Write a program that prints on the console **all minion names** and their **age** for given **villain id**. 

For the output, use the formats given in the examples.

## Example

| **Input**  | **Output**  |
|---|---|
| 1  | Villain: Carl 1. Annabella 34 2. Eldredge 32  3. ...  |
|   |   |

| **Input**  | **Output**  |
|---|---|
| 3  | Villain: Arabele 1. Davey 22 2. Orsola 16 3. ... |
|   |   |

| **Input**  | **Output**  |
|---|---|
| 2  | Villain: Crissy 1. Gayleen 14 2. Skipp 16 3. ... |
|   |   |

| **Input**  | **Output**  |
|---|---|
| 10 | No villain with ID 10 exists in the database. |
|   |   |

[/slide]

[slide hideTitle]

# 4. Add Minion

## Description
Write a program that reads information about a minion and its villain and **adds it to the database**. 

In case the town of the minion is not in the database, insert it as well. 

In case the villain is not present in the database, add him too with the default evilness factor of “evil”. Finally, set the new minion to be a servant of the villain. 

Print appropriate messages after each operation - see the examples.

## Example

| **Input**  | **Output**  |
|---|---|
| Minion: Robert 14 Berlin Villain: Gru | Villain Gru was added to the database. Successfully added Robert to be minion of Gru. |
| Minion: Cathleen 20 Liverpool Villain: Gru | Town Liverpool was added to the database. Successfully added Cathleen to be minion of Gru.  |
| Minion: Mars 23 Sofia Villain: Poppy  | Villain Poppy was added to the database. Successfully added Mars to be minion of Poppy  |
| Minion: Carry 20 Eindhoven Villain: Jimmy  | Town Eindhoven was added to the database. Villain Jimmy was added to the database. Successfully added Carry to be minion of Jimmy |
|   |   |

[/slide]

[slide hideTitle]

# 5. Change Town Names Casing

## Description
Write a program that **changes all town names to uppercase** for a given country.

**Print the number of towns that were changed** in the format provided in examples. 

On the next line **print** the **names that were changed**, separated by comma and space.

## Example

| **Input**  | **Output**  |
|---|---|
| Bulgaria  | 3 town names were affected. [SOFIA, PLOVDIV, BURGAS]  |
| Italy  |  No town names were affected. |

[/slide]

[slide hideTitle]

# 6. Remove Villain

## Description

Write a program that receives an ID of a villain, deletes him from the database, and releases his minions from serving him. 

As an output print, the name of the villain and the number of minions released. 

Make sure all operations go as planned, otherwise do not make any changes to the database. 

For the output use the format given in the examples.

## Example

| **Input**  | **Output**  |
|---|---|
| 1  | Carl has deleted 16 minions released  |
| 3  | Arabele has deleted 14 minions released  |
| 101  | No such villain was found  |
|   |   |

[/slide]

[slide hideTitle]

# 7. Print All Minion Names

## Description
Write a program that **prints all minion** names from the minion's table **in order** first record, last record, first + 1, last - 1, first + 2, last - 2… first + n, last - n. 

## Example

| **Original Order**  | **Output**  |
|---|---|
| May  | May  |
| Brina  | Brandie  |
| Roslyn  | Brina  |
| Virgie  | Tara  |
| Nananne  | Roslyn  |
| Gayleen  | Theodor  |
| ...  | ...  |
| ...  | ...  |
| ...  | ...  |
| Lu  | Katine  |
| Theodor  | Skipp  |
| Tara  | Chevalier  |
| Brandie  | Abbe  |
|   |   |

[/slide]

[slide hideTitle]

# 8.Increase Minions Age

## Description

Read from the console minion IDs, separated by space. 

**Increment the age** of those minions **by 1** and make their **names title to lower case**. 

Finally, **print** the **names** and the **ages** of **all minions** that are in the database. 

See the examples below.

## Example

|   **minions**   |
| **id**  | **name**  | **age**  |
|---|---|---|
| 1  | May  | 44  |
| 2  | Brina  | 43  |
| 3  | Roslyn  | 50  |
| 4  | Virgie  |  53 |
| 5  | Nananne  | 23  |
| ...  | ...  | ...  |
|   |   |   |


| **Input**  | **Output**  |
|---|---|
| 2 1 4  | may 45  |
|   | brina 44  |
|   | Roslyn 50  |
|   | virgie 54  |
|   | Nananne 23  |
|   | ...  |
|   |   |

[/slide]

[slide hideTitle]

# 9. Increase Age Stored Procedure

## Description

Create a stored procedure **usp_get_older** (**directly in the database** using **MySQL Workbench** or any other similar tool) that receives a **minion_id** and **increases the minion’s years by 1**. 

Write a program that **uses that stored procedure to increase the age of a minion**, whose **id** will be given as an input from the console. 

After that **print the name and the age** of that minion.

[/slide]