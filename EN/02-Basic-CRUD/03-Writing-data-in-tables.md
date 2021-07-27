[slide hideTitle]

# Writing Data into Tables

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/java-database-and-mysql-basic-crud-25-27-writing-data-in-tables-inserting-data-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use the `INSERT` keyword to create new records.

``` java
INSERT INTO `students`
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications');
```

This query works just fine, but it is better to specify the columns that we want to **insert into**:

```java
INSERT INTO `students`(`first_name`, `last_name`, `age`, `course_name`)     
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications');         
```

We can also add data in bulk.

This is done by listing all of the data we want to include with a **","** separator between each one.

```java
INSERT INTO students(`first_name`, `last_name`, `age`, `course_name`) 
VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications'),
       ('Jane', 'Doe', '12', 'JavaScript Basics'),
       ('John', 'Doe', '16', 'Java Advanced'), ...
```

[/slide]

[slide hideTitle]

# Reusing Existing Data

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Databases-Introduction/java-databases-and-mysql-databases-introduction-27-28-programmability-indices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In MySQL, we can create a new table using data from an existing table.

```java
CREATE TABLE `courses`     
AS SELECT `course_name` 
FROM `students`            
```

This query will create a new table with a `course_name` column, which it will populate using the records from the `students` table.

We can also take records and write them into an already existing table.

```java
INSERT INTO `courses_records`
SELECT CONCAT(`course_name`, ' ', `course_id`)
FROM `courses`;
```

[/slide]
