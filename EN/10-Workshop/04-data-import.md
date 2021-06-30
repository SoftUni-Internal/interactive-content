[slide]
# Data Import

Use the provided files to populate the database with data. Import all the information from those files into the database.

**You are **not allowed** to modify the provided files.**

**ANY INCORRECT** data should be **ignored** and a message appropriate should be printed.

- **NOTE**: An incorrect data input is an input that is **missing required fields**.
[/slide]

[slide]
# Import Companies

**compamies.xml**

```xml
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
</companies>
```
[/slide]

[slide]
# Import Projects

**projects.xml**
```xml
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
```
[/slide]

[slide]
# Import Employees


**employees.xml**
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<employees>
    <employee>
        <first-name>Stamat</first-name>
        <last-name>Petrov</last-name>
        <age>45</age>
        <project>
            <name>HealthCare</name>
            <description>Pharmacy web app</description>
            <start-date>2017-07-12</start-date>
            <is-finished>true</is-finished>
            <payment>10000.00</payment>
            <company name="Phoenix"/>
        </project>
    </employee>

```
[/slide]