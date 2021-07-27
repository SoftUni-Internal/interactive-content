[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Table-Relations/interactive-java-mysql-table-relations-39-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Designing databases is done in six steps:
    * identificatiion of entities
    * defining table columns
    * defining primary keys
    * modeling relationships
    * defining constraints
    * filling test data
  
- Reading specifications and finding entities, their characteristics and relations
  
- Types of relationships:
    * **one-to-many**
    * **many-to-many**
    * **one-to-one**

    ``` java 
    CONSTRAINT `fk_peaks_mountains`
    FOREIGN KEY (`mountain_id`)      
    REFERENCES `mountains`(`mountain_id`);
    ```
    
- **Cascade** operations
  
    ```java
    CREATE TABLE `drivers`(
      `driver_id` INT PRIMARY KEY,
      `driver_name` VARCHAR(50)
    );

    CREATE TABLE cars(
      `car_id` INT PRIMARY KEY,                                  
      `driver_id` INT,
      CONSTRAINT `fk_car_driver` FOREIGN KEY(`driver_id`)
      REFERENCES `drivers`(`driver_id`) ON DELETE CASCADE);
    ```

- Visualizing databases using **E/R Diagrams**

## In the next lesson you will learn:

- **Joins** and gathering data from multiple tables
- **Subqueries**, query manipulation on multiple levels
- Clustered and Non-Clustered **Indices**

[/slide]
