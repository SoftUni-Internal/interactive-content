# Football Information

[slide]

# 1. Functionality Overview

You have been employed by the Next Level Technologies Ltd. to finish the database layer, which supports basic functionality like importing data and exporting some results.

## Description

The firm has hired you as their application developer, to implement the **database layer**. The application should be able to easily **import** hard-formatted data and **support functionality** for also **exporting** the imported data. The application is called – **Football info**.

Look at the pictures below to see what must happen:

 - Home page before importing anything:

 [image assetsSrc="Exam-Preparation.png" /]

- Import XML page before importing anything:

 [image assetsSrc="Exam-Preparation(1).png" /]

- Import Pictures first:

 [image assetsSrc="Exam-Preparation(2).png" /]

- Import Teams second:

 [image assetsSrc="Exam-Preparation(3).png" /]

- Import XML page after importing both files:

 [image assetsSrc="Exam-Preparation(4).png" /]


- Import JSON page before importing the given data:

 [image assetsSrc="Exam-Preparation(5).png" /]


- Import JSON page after importing the data:

 [image assetsSrc="Exam-Preparation(6).png" /]

- Import JSON page after importing the data

 [image assetsSrc="Exam-Preparation(7).png" /]

- Home page after the data is imported:

 [image assetsSrc="Exam-Preparation(8).png" /]

- Export all players in North Hub:

 [image assetsSrc="Exam-Preparation(9).png" /]

- Export players with salary bigger than 100000:

[image assetsSrc="Exam-Preparation(10).png" /]

[/slide]

[slide]

# 2. Project Skeleton Overview

## Description

You will be given a **Skeleton**, containing a **certain architecture(MVC)** with **several classes**, some of which – completely empty. 

The **Skeleton** will include the **files** with which you will **seed** the **database**.

[/slide]

[slide]

# 3. Model Definition

## Description

There are 3 main models that the **Football info** database application should contain in its functionality.

Design them in the **most appropriate** way, considering the following **data constraints**:


### Picture

- **id** – **integer** number, **primary identification field**.
- **url** – a **string (required)**.


### Team

- **id** – **integer** number, **primary identification field**. 
- **name** – a **string (required)** between 3 and 20 characters.
- **picture** – a **Picture entity (required)**.

### Player

- **id** – **integer** number, **primary identification field**.
- **first_name** – a **string (required)**.
- **last_name** – a **string (required)** between 3 and 15 characters.
- **number** – a Integer **(required)** between 1 and 99.
- **salary** – a **BigDecimal (required)** min 0.
- **position** – an **ENUM (required)**.
    - **GK, CD, RB, LB, CM, DM, CDM, LM, RM, ST, CF, RW, LW**.
- **picture** – a **Picture entity (required)**.
- **team** – a **Team entity (required)**.

**NOTE:** Name the entities and their class members, **exactly** in the **format stated** above. Do not name them in snake case with the dashes, of course. 

But if a field is specified as **first_name**, you are to name it **firstName**.

### Relationships

- The Football info decided to give you a little hint about the more complex relationships in the database, so that you can implement it correctly.

- One **Team** may have only one **Picture**, and one **Picture** may have many **Teams**.

- One **Team** may have many **Players**, and one **Player** may be appointed to only one **Team**.

- One **Player** may have only one **Picture**, and one **Picture** may have many **Players**.

[image assetsSrc="Exam-Preparation(11).png" /]

[/slide]

[slide]

# 4. Data Import

Use the provided files to populate the database with data. 

Import all the information from those files into the database.

**You are** not allowed **to modify the provided files**.

**ANY INCORRECT** data should be **ignored** and a message **"Invalid {picture/team/player}"** should be printed.

- **NOTE:** An incorrect data input is an input which is **missing required fields**. 

When the import is finished

**"Successfully imported {picture/team/player}- {url/name/firstName lastName}"**

## XML Import

The **Football info** have prepared some XML data for you to import.

### Picture (pictures.xml)

```java
// File Name: pictures.xml

// XML Example:
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

// Result:
Successfully imported picture - google.pictures#1
Invalid picture
Successfully imported picture - google.pictures#2
```

### Team (teams.xml)

```java
// File Name: teams.xml

// XML Example:
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


// Result:
Successfully imported - West Valley
Invalid team
Invalid team
```

## JSON Import

### Player (players.json)

```java
//File name: players.json

//JSON Example:
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

//Result:
Invalid player
Invalid player
Invalid player
Successfully imported player: Rubin Star
Successfully imported player: Serj Smokey
```
[/slide]