# Workshop - NTL

[slide hideTitle]

# Project Setup

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/11-Workshop.zip) **for this workshop.**

You have been employed by **Next Level Technologies Ltd.** to complete the database layer for their project.

It needs to support the basic functionalities like importing data and exporting results from the database.

[/slide]

[slide hideTitle]

# Functionality Overview

The company has hired you as their application developer to implement the database layer.

The application should be able to easily import hard-formatted data and support functionalities for also exporting the imported data.

The application is called - **NLT**.

## Home page as an anonymous user ("/")

[image assetsSrc="nlt-workshop-01.png" /]

## Register page ("/users/register")

[image assetsSrc="nlt-workshop-02.png" /]

## Login page ("/users/login")

[image assetsSrc="nlt-workshop-03.png" /]

## Home page as a registered user ("/home")

[image assetsSrc="nlt-workshop-04.png" /]

## Import XML page before importing anything ("/import")

[image assetsSrc="nlt-workshop-05.png" /]

## Import Companies ("/import/companies")

[image assetsSrc="nlt-workshop-06.png" /]

## Import Projects ("/import/projects")

[image assetsSrc="nlt-workshop-07.png" /]

## Import Employees ("/import/employees")

[image assetsSrc="nlt-workshop-08.png" /]

## Import XML page after importing the given data ("/import")

[image assetsSrc="nlt-workshop-09.png" /]

## Home page after successful imports ("/home")

[image assetsSrc="nlt-workshop-10.png" /]

## Export Finished projects ("/export/finished-projects")

[image assetsSrc="nlt-workshop-11.png" /]

## Export Employees who are older than 25 ("/export/older-employees")

[image assetsSrc="nlt-workshop-12.png" /]

[/slide]

[slide hideTitle]

# Model Definition

The application database should contain **5** main entities:

## User

- **id** - **Integer**, a **primary identification field**
- **username** - **String** (required, unique)
- **password** - **String** (required)
- **email** - **String** (required, unique)

The User entity needs to implement the **UserDetails** interface from the Spring Security dependency.

[image assetsSrc="nlt-workshop-14.png" /]

## Role

- **id** - **Integer**, a **primary identification field**
- **authority** - **String** (required)

The Role entity needs to implement the **GrantedAuthority** interface from the Spring Security dependency.

[image assetsSrc="nlt-workshop-15.png" /]

## Company

- **id** - **Integer**, a **primary identification field**
- **name** - **String** (required)

## Project

- **id** - **Integer**, a **primary identification field**
- **name** - **String** (required)
- **description** - **String** (required)
- **is_finished** - **Boolean**
- **payment** - **Big Decimal** (required)
- **start_date** - **String**
- **company** - **Company** entity (required)

## Employee

- **id** - **Integer**, a **primary identification field**
- **first_name** - **String** (required)
- **last_name** - **String** (required)
- **age** - **Integer** (required)
- **project** - **Project** entity (required)

NOTE: Create the entities and their class members **exactly** in the **format stated** above.

[image assetsSrc="nlt-workshop-13.png" /]

## Relantionships

One **Company** can have many **Projects** but only one **Project** can be in one **Company**.

One **Project** may have many **Employees** but only one **Employee** may be appointed to one **Project**.

One **User** can have many **Roles** and one **Role** can be on many **Users**.


[/slide]

[slide hideTitle]

# Data Import

Use the provided files to populate the database with data.

Import all the information from those files into the database.

You are **not allowed** to modify the provided files.

**ANY INCORRECT** data should be **ignored** and an appropriate message should be shown.

**NOTE**: An incorrect data input is an input that is **missing required fields**.

## Import Companies

**companies.xml**

```js
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<companies>
   <company name="Vallor"/>
   <company name="Phoenix"/>
   <company name="MavenLtd"/>
   <company name="Gitbuh"/>
   <company name="MusicCo"/>
   <company name="Tech"/>
   <company name="Technologies"/>
   <company name="FutureInvests"/>
   <company name="DesignGroup"/>
   ...
</companies>
```


## Import Projects

**projects.xml**

```js
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<projects>
   <project>
      <name>HealthCare</name>
      <description>Pharmacy web app</description>
      <start-date>2017-07-12</start-date>
      <is-finished>true</is-finished>
      <payment>10000.00</payment>
      <company name="Phoenix"/>
   </project>
   <project>
      <name>MMA</name>
      <description>Mixed martial arts club web site</description>
      <start-date>2018-09-21</start-date>
      <is-finished>true</is-finished>
      <payment>7000.00</payment>
      <company name="Vallor"/>
   </project>
   ...
</projects>


```

## Import Employees

**employees.xml**

```js
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<employees>
   <employee>
      <first-name>Jimmy</first-name>
      <last-name>Couch</last-name>
      <age>45</age>
      <project>
         <name>HealthCare</name>
      </project>
   </employee>
   ...
</employees>
```

[/slide]

[slide hideTitle]

# Data Export

Here you will have some pretty complex database querying. Export the data in the formats specified below.

## Finished Projects

**Export all projects**, which have **been finished**:

- Extract the projects, which have been finished

- Order the projects by their name in descending order

## Employees Older Than 25

**Export** the **employees** who are older than 25

- Export the **full name**, **age** of the **employees** and the **name of their project**

- Order the employees by their first name

[/slide]
