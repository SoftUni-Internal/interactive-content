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