[slide hideTitle]

# JOIN Statements

Now as we know the different ways to connect tables and the rules and guidance connected to this practice it's time to see the real power of **Relational Databases**.

The **JOIN** statements are a great tool introduced in SQL, it gives us the chance to **connect** two tables by theirs'

 **foreign keys** and take all the information we need **simultaneously**, with only one query statement.

To achieve **JOIN** we need two tables and a **JOIN CONDITION**.

Let's have an example: 

```java
SELECT *                                                                //Here we select everything from the two tables.
FROM `table_a`                                                          //We name the first table that we want to join.
JOIN `table_b` ON table_b.common_column = table_a.common_column         //And than we create a "Join condition" using "FOREIGN KEYS".
```

We will have a closer look at **JOINS** in the next lesson.
[/slide]

[slide hideTitle]
# Problem: Trip Organization
[code-task title="Problem: Trip Organization" taskId="257097cf-6f3f-49ad-8b1e-c0cdd3e04ee1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Download resources [here](https://mega.nz/file/6cQTBSqA#tfQolRssrMqXK005D3dFmQ7uixDA6ij31vcp5FDcqgY).

Write a query to retrieve information about SoftUni camp's transportation organization. 

Get information about the drivers (**name and id**) and their **vehicle type**. 

Submit your queries using the "**MySQL prepare DB and Run Queries**" strategy.

## Examples
| **driver_id** | **vehicle_type** | **driver_name** |
| --- | --- | --- | --- |
| 1 | bus | Simo Sheytanov |
| 2 | van | Roli Dimitrova |
| 1 | van | Simo Sheytanov |
| … | … | … |
|  |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE rooms(
    id INT PRIMARY KEY,
    occupation VARCHAR(20) not null,
    beds_count int not null
);

CREATE TABLE vehicles(
    id int primary key auto_increment not null,
    driver_id int not null,
    vehicle_type varchar(30) not null,
    passengers int not null
);

CREATE TABLE campers(
    id INT PRIMARY KEY auto_increment,
    first_name varchar(20) not null,
    last_name varchar(20) not null,
    age int not null,
    room int,
    CONSTRAINT fk_room_id FOREIGN KEY(room) REFERENCES rooms(id)
);

CREATE TABLE routes(
    id INT PRIMARY KEY auto_increment,
    starting_point varchar(30) not null,
    end_point varchar(30) not null,
    leader_id int not null,
    route_time TIME NOT NULL,   
    CONSTRAINT fk_leader_id FOREIGN KEY(leader_id) REFERENCES campers(id)
);

insert into rooms(id,occupation,beds_count) values(101,"occupied",3),
(102,"free",3),
(103,"free",3),
(104,"free",2),
(105,"free",2),
(201,"free",3),
(202,"free",3),
(203,"free",2),
(204,"free",3),
(205,"free",3),
(301,"free",2),
(302,"free",2),
(303,"free",2),
(304,"free",3),
(305,"free",3);

insert into campers(first_name, last_name, age,room) values("Simo", "Sheytanov", 20,101),
("Roli", "Dimitrova", 27,102),
("RoYaL", "Yonkov", 25,301),
("Ivan", "Ivanov", 28,301),
("Alisa", "Terzieva", 25,102),
("Asya", "Ivanova", 26,102),
("Dimitar", "Verbov", 21,301),
("Iskren", "Ivanov", 28,302),
("Bojo", "Gevechanov", 28,302),
("Valentin", "Dimitrov", 28,302);

insert into vehicles(driver_id,vehicle_type,passengers) values
(1,"bus",20),
(2,"van",10),
(1,"van",10),
(4,"car",5),
(5,"car",5),
(6,"car",4),
(7,"car",3),
(8,"bus",3);

insert into routes(starting_point,end_point,leader_id,route_time) values
("Hotel Malyovitsa", "Malyovitsa Peak", 3, '02:00:00'),
("Hotel Malyovitsa", "Malyovitsa Hut", 3, '00:40:00'),
("Ribni Ezera Hut", "Rila Monastery", 3, '06:00:00'),
("Borovets", "Musala Peak", 4, '03:30:00');
[/input]
[output]
1
bus
Simo Sheytanov
2
van
Roli Dimitrova
1
van
Simo Sheytanov
4
car
Ivan Ivanov
5
car
Alisa Terzieva
6
car
Asya Ivanova
7
car
Dimitar Verbov
8
bus
Iskren Ivanov
[/output]
[/test]
[test]
[input]
CREATE TABLE rooms(
    id INT PRIMARY KEY,
    occupation VARCHAR(20) not null,
    beds_count int not null
);

CREATE TABLE vehicles(
    id int primary key auto_increment not null,
    driver_id int not null,
    vehicle_type varchar(30) not null,
    passengers int not null
);

CREATE TABLE campers(
    id INT PRIMARY KEY auto_increment,
    first_name varchar(20) not null,
    last_name varchar(20) not null,
    age int not null,
    room int,
    CONSTRAINT fk_room_id FOREIGN KEY(room) REFERENCES rooms(id)
);

CREATE TABLE routes(
    id INT PRIMARY KEY auto_increment,
    starting_point varchar(30) not null,
    end_point varchar(30) not null,
    leader_id int not null,
    route_time TIME NOT NULL,   
    CONSTRAINT fk_leader_id FOREIGN KEY(leader_id) REFERENCES campers(id)
);

insert into rooms(id,occupation,beds_count) values(101,"occupied",3),
(102,"free",3),
(103,"free",3),
(104,"free",2),
(105,"free",2),
(201,"free",3),
(202,"free",3),
(203,"free",2),
(204,"free",3),
(205,"free",3),
(301,"free",2),
(302,"free",2),
(303,"free",2),
(304,"free",3),
(305,"free",3);

insert into campers(first_name, last_name, age,room) values("Simo", "Sheytanov", 20,101),
("Roli", "Dimitrova", 27,102),
("RoYaL", "Yonkov", 25,301),
("Ivan", "Ivanov", 28,301),
("Alisa", "Terzieva", 25,102),
("Asya", "Ivanova", 26,102),
("Dimitar", "Verbov", 21,301),
("Iskren", "Ivanov", 28,302),
("Bojo", "Gevechanov", 28,302),
("Valentin", "Dimitrov", 28,302);

insert into vehicles(driver_id,vehicle_type,passengers) values
(1,"bus",20),
(2,"van",10),
(1,"van",10),
(4,"car",5),
(5,"car",5),
(6,"car",4),
(7,"car",3),
(8,"bus",3);

insert into routes(starting_point,end_point,leader_id,route_time) values
("Hotel Malyovitsa", "Malyovitsa Peak", 3, '02:00:00'),
("Hotel Malyovitsa", "Malyovitsa Hut", 3, '00:40:00'),
("Ribni Ezera Hut", "Rila Monastery", 3, '06:00:00'),
("Borovets", "Musala Peak", 4, '03:30:00');
[/input]
[output]
1
bus
Simo Sheytanov
2
van
Roli Dimitrova
1
van
Simo Sheytanov
4
car
Ivan Ivanov
5
car
Alisa Terzieva
6
car
Asya Ivanova
7
car
Dimitar Verbov
8
bus
Iskren Ivanov
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Trip Organization

[/slide]
