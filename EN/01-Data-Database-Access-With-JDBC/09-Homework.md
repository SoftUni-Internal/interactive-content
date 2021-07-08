# Homework

[slide hideTitle]

# Initial Setup 

## Description 
You are provided with the [Minions Database](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/minions_db_database_data_database_access_with_JDBC.zip) and you have to execute the queries. 

Here is an ER diagram:

[image assetsSrc="Spring-Data-Database-Access-With-JDBC-Homework.png" /]

[/slide]

[slide hideTitle]

# Problem: Get Villains' Names

## Description 
Create a program that retrieves the names of **all villains** and their **number of minions**. 

Retrieve only the villains who have more than 15 minions. 

**Order** them by number of minions in **descending order**.

## Example

| **Output**  |
|---|
| Flo 19|
|Carl 16  |


[/slide]

[slide hideTitle]

# Problem: Get Minion Names

## Description

Create a program that receives a **villain id**. 

Retrieve the names of **all minions** and their **age** for the given **id**. 

For the output, use the formats given in the examples.

## Examples

| **Input**  | **Output**  |
|---|---|
| 1  | Villain: Carl|
||1. Annabella 34| 
||2. Eldredge 32|  
||3. ...  |


| **Input**  | **Output**  |
|---|---|
| 3  | Villain: Arabele |
||1. Davey 22 |
||2. Orsola 16 |
||3. ... |


| **Input**  | **Output**  |
|---|---|
| 2  | Villain: Crissy |
||1. Gayleen 14 |
||2. Skipp 16 |
||3. ... |


| **Input**  | **Output**  |
|---|---|
| 10 | No villain with ID 10 exists in the database. |


[/slide]

[slide hideTitle]

# Problem: Add Minion

## Description
Create a program that reads the information about a minion and its villain and **adds it to the database**. 

In case the town of the minion is not in the database, insert it as well. 

In case the villain is not present in the database, add him too with default evilness factor of "evil". 

Finally, set the new minion to be servant of the villain. 

Print the appropriate messages after each operation - see the examples.

## Examples

| **Input**  | **Output**  |
|---|---|
|Minion: Robert 14 Berlin|Villain Gru was added to the database.|
|Villain: Gru|Successfully added Robert to be minion of Gru.|

| **Input**  | **Output**  |
|---|---|
|Minion: Cathleen 20 Liverpool|Town Liverpool was added to the database.|
|Villain: Gru|Successfully added Cathleen to be minion of Gru.|

| **Input**  | **Output**  |
|---|---|
|Minion: Mars 23 Sofia|Villain Poppy was added to the database.|
|Villain: Poppy|Successfully added Mars to be minion of Poppy.|

| **Input**  | **Output**  |
|---|---|
|Minion: Carry 20 Eindhoven|Town Eindhoven was added to the database.|
|Villain: Jimmy|Villain Jimmy was added to the database.|
||Successfully added Carry to be minion of Jimmy.|

[/slide]

[slide hideTitle]

# Problem: Change Town Names Casing

## Description

Create a program that **changes all of the letters in the town names to uppercase letters** for a given country. 

**Print the number of towns that were changed** in the format provided in examples. 

On the next line, **print** the **names that were changed**, separated by coma and a space.

## Examples

| **Input**  | **Output**  |
|---|---|
| Bulgaria  | 3 town names were affected. |
||[SOFIA, PLOVDIV, BURGAS]  |

| **Input**  | **Output**  |
|---|---|
| Italy  |  No town names were affected. |

[/slide]

[slide hideTitle]

# Problem: Remove Villain

## Description

Create a program that receives an **ID** of a villain, **deletes him from the database** and **releases his minions** from serving him. 

As an output print the name of the villain and the number of minions released. 

Make sure all operations go as planned, **otherwise do not make any changes** to the database. 

For the output use the format given in the examples.

## Examples

| **Input**  | **Output**  |
|---|---|
| 1  | Carl has deleted |
||16 minions released  |


| **Input**  | **Output**  |
|---|---|
| 3  | Arabele has deleted |
||14 minions released  |


| **Input**  | **Output**  |
|---|---|
| 101  | No such villain was found  |

[/slide]

[slide hideTitle]

# Problem: Print All Minion Names

## Description
Create a program that **prints all of the minion** names from the minions table **in order** first record, last record, first + 1, last - 1, first + 2, last - 2... first + n, last - n.  

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

[/slide]

[slide hideTitle]

# Problem: Increase Minions Age

## Description

Create a program that receives **minion ids**, separated by a space. 

**Increment the age** of those minions **by 1** and make their **names to lower case**. 

Finally, **print** the **names** and the **age** of **all minions** that are in the database. 

See the examples below.

## Minions

| **id**  | **name**  | **age**  |
|---|---|---|
| 1  | May  | 44  |
| 2  | Brina  | 43  |
| 3  | Roslyn  | 50  |
| 4  | Virgie  |  53 |
| 5  | Nananne  | 23  |
| ...  | ...  | ...  |


## Example

| **Input**  | **Output**  |
|---|---|
| 2 1 4  | may 45  |
|   | brina 44  |
|   | Roslyn 50  |
|   | virgie 54  |
|   | Nananne 23  |
|   | ...  |


[/slide]

[slide hideTitle]

# Problem: Increase Age Stored Procedure

## Description

Create a stored procedure **usp_get_older** (**directly in the databas**e using the **MySQL Workbench IDE** or any other similar tool) that receives a **minion_id** and **increases the minion's years by 1**. 

Create a program that **uses that stored procedure to increase the age** of a minion, whose **id** will be given as an input from the console. 

After that **print the name and the age** of that minion.

[/slide]