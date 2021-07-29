# Football Information

[slide hideTitle]

# Functionality Overview

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/exam-preparation-skeleton.zip) **for the exam preparation.**

A company has hired you as their application developer to implement the **database layer**. 

The application should be able to easily import hard-formatted data and **support functionality** for also **exporting** the imported data. 

The application is called - **Football info**.

Look at the pictures below to see what must happen:

 - Home page before importing anything:

 [image assetsSrc="Exam-Preparation.png" /]

- The Import XML page before the data is imported:

 [image assetsSrc="Exam-Preparation(1).png" /]

- Import the pictures first:

 [image assetsSrc="Exam-Preparation(2).png" /]

- Import the teams secondly:

 [image assetsSrc="Exam-Preparation(3).png" /]

- The Import XML page after importing the provided information:

 [image assetsSrc="Exam-Preparation(4).png" /]


- The Import JSON page before importing the information provided:

 [image assetsSrc="Exam-Preparation(5).png" /]


- Import the information about the players:

 [image assetsSrc="Exam-Preparation(6).png" /]

- The Import JSON page after importing the provided information:

 [image assetsSrc="Exam-Preparation(7).png" /]

- The Home page after the data is imported:

 [image assetsSrc="Exam-Preparation(8).png" /]

- Export all North Hub players:

 [image assetsSrc="Exam-Preparation(9).png" /]

- Export players with a salary larger than 100,000:

 [image assetsSrc="Exam-Preparation(10).png" /]

[/slide]


[slide hideTitle]

# Project Skeleton Overview

You will be provided with a **Skeleton** with **several classes**, some of which - completely empty. 

The **Skeleton** will include the **files**, with which you will **seed** the **database**.

[/slide]

[slide hideTitle]

# Model Definition

There are 3 main models that the **Football info** database application should contain in its functionality.

Design them in the **most appropriate** way, considering the following **data constraints**:

## Picture
- **id** - Accepts **integer** values, the **primary identification field**
- **url** - Accepts **string** values, a value is ((required))

## Team
- **id** - Accepts **integer** values, the **primary identification field**
- **name** - Accepts **string** values, which are between **3 and 20** characters long, a value is **required**
- **picture** - A **Picture entity**

## Player
- **id** - Accepts **integer** values, the **primary identification field**
- **first_name** - Accepts **string** values
- **last_name** - Accepts **string** values, which are between **3 and 15** characters long, a value is **required**
- **number** - Accepts **integer** values, which are between **3 and 99** characters long, a value is **required**
- **position** - Accepts **Enum** values, a value is **require**, the values must be one of the following:
   - **GK**, **CD**, **RB**, **LB**, **CM**, **DM**, **CDM**, **LM**, **RM**, **ST**, **CF**, **RW**, **LW**
- **salary** - Accepts **Bigdecimal** values, which should be larger than or equal to **0**, a value is **required**
- **picture** - A **Picture** entity
- **team** - A **Team** entity


NOTE: Name the entities and their class members **exactly** in the **format stated** above. 

A field should use the **snake_case** convention in the database, while keeping the **camelCase** convention in the **Java application**.

## Relationships

One **Team** can have only one **Picture** and one **Picture** can have many **Teams**.

One **Team** can have many **Players**, and one **Player** can be appointed to only one **Team**.

One **Player** can have only one **Picture**, and one **Picture** can have many **Players**.

[image assetsSrc="Exam-Preparation(11).png" /]

[/slide]

[slide hideTitle]

# Data Import

Use the provided files to populate the database with data. Import all the information from those files into the database.

**You are** not allowed **to modify the provided files**.

**ANY INCORRECT** data should be **ignored** and the "**Invalid** \{**picture/team/player**\}" message should be printed.

- **NOTE**: An incorrect data input is an input, which is **missing required fields**

When the import is finished: "**Successfully imported** \{**picture/team/player**\}- \{**url/name/firstName lastName**\}"

## XML Import

The **Football info** have prepared some XML data for you to import.

## Example
```js
//File name: pictures.xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<pictures>
    <picture>
        <url>google.pictures#1</url>
    </picture>
    <picture>

    </picture>
    <picture>
        <url>google.pictures#2</url>
    </picture>
    . . .
<pictures/>
```

## Result
Successfully imported picture - google.pictures#1
Invalid picture
Successfully imported picture - google.pictures#2

## Example

```js
//File name: teams.xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<teams>
    <team>
        <name>West Valley</name>
        <picture>
            <url>fc_pictures_1</url>
        </picture>
    </team>
    <team>
        <name>VeeeeeeeeeeeeryLoooooooooooooooongName</name>
        <picture>
            <url>noPicture</url>
        </picture>
    </team>
    <team>
        <name>Samurai</name>
        <picture>
            <url>invalidURL</url>
        </picture>
    </team>
    . . .
<teams>
```
## Result
Successfully imported - West Valley
Invalid team
Invalid team


## Example: JSON Import

```java
//File name: players.json

[
  {
    "firstName": "Kiril",
    "lastName": "Despodov",
    "number": 32,
    "salary": 150000.00,
    "position": "Invalid",
    "picture": {
      "url": "google.pictures#1"
    },
    "team": {
      "name": "West Valley",
      "picture": {
        "url": "fc_pictures_1"
      }
    }
  },
  {
    "firstName": "Christian",
    "lastName": "Rodrigues",
    "number": 121,
    "salary": 100000.00,
    "position": "RB",
    "picture": {
      "url": "google.pictures#2"
    }
    . . .
```

## Result

Invalid player
Invalid player
Invalid player
Successfully imported player: Rubin Star
Successfully imported player: Serj Smokey
[/slide]


[slide hideTitle]
# Data Export

## Export all North Hub players 
Extract the name of the **team** and information about the **players ordered by their id** from the database.

"**Team:** \{**Name**\}
**Player name:** \{**playerOne firstName**\} \{**playerOne lastName**\} - \{**playerOne position**\}
**Number:** \{**playerOne number**\}
**Player name:** \{**playerTwo firstName**\} \{**playerTwo lastName**\} - \{**playerTwo position**\}
**Number:**\{**playerTwo number**\} 
. . . "


## Export players with a salary larger than 100000

Export a player's full name, number, salary and team name ordered by their salary in descending order.

"**Player name:** \{**firstName**\} \{**lastName**\} 
**Number:** \{**player number**\}
**Salary:** \{**player salary**\}
**Team:** \{**team name**\}
. . ."
[slide]
