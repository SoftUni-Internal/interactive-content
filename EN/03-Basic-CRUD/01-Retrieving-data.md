[slide]
# Retrieving data

Now let's have a look over one of the most common (if not the most) operattion when we are talking about databases.


Retrieving data, is the action where we demand records from our tables, through the keyword **SELECT**, which further gives us several possibilities: 

## Retrieve all available infromation from a table

``` java
SELECT * FROM students; //Gives us back all available records, with all available columns from the table "students".
```


[image assetsSrc="Retrieving-data.png" /]

##  Make a projection of a table


``` java
SELECT full_name, course, grade FROM students; //Makes a "projection" giving us only the infromation we need (full_name, course, grade). 
```


[image assetsSrc="Retrieving-data(1).png" /]


**Keynote** - when we make a projection, we take only data that we need, which optimizes our query and makes less trafic to the database.

## Make a filtration/take a subset of desired rows


``` java
SELECT full_name, grade                   //Makes a filtration, taking a only the subset of records
FROM students                             //that meet our requirement of courseName.
WHERE courseName = "Java Advanced";
```


[image assetsSrc="Retrieving-data(2).png" /]

**Keynote** - This operation won't boost the performance, as the databse has to iterate through all the records in order to find the one that meets the requierment, but it will find you only the records that you need.

[/slide]