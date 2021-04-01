[slide hideTitle]

# JOIN Statements

The **JOIN** statements are a great tool introduced in SQL, it gives us the chance to **connect** two tables by their **foreign keys** and take all the information we need **simultaneously** with only one query statement.

To achieve **JOIN** we need two tables and a **JOIN CONDITION**.

Let's have an example: 

```java
SELECT *                                                                    // Here we select everything from the two tables.
FROM `table_a`                                                              // We name the first table that we want to join.
JOIN `table_b` ON `table_b`.common_column = `table_a`.common_column         // And than we create a "Join condition" using "FOREIGN KEYS".
```
[/slide]

[slide hideTitle]
# Problem with Solution: Trip Organization
[code-task title="Trip Organization" taskId="java-db-and-mysql-joins-trop-organization" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description

**A link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/05.Table-Relations-Camp-Db-Lab.zip) **for this task.**

Create a query that retrieves information about the transportation organization of the SoftUni camp . 

Get information about the drivers (**name and id**) and their **vehicle type**. 

## Examples
| **driver_id** | **vehicle_type** | **driver_name** |
| --- | --- | --- | --- |
| 1 | bus | James Smith   |
| 2 | van | Mary Williams |
| 1 | van | James Smith   |
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
insert into rooms(id, occupation, beds_count)
values (101, "occupied", 3),
       (102, "free", 3),
       (103, "free", 3),
       (104, "free", 2),
       (105, "free", 2),
       (201, "free", 3),
       (202, "free", 3),
       (203, "free", 2),
       (204, "free", 3),
       (205, "free", 3),
       (301, "free", 2),
       (302, "free", 2),
       (303, "free", 2),
       (304, "free", 3),
       (305, "free", 3);

insert into campers(first_name, last_name, age, room)
values ("James", "Smith", 20, 101),
       ("Mary", "Williams", 27, 102),
       ("William", "Davidson", 25, 301),
       ("David", "Wilson", 28, 301),
       ("Lisa", "Lopez", 25, 102),
       ("Michelle", "Anderson", 26, 102),
       ("Thomas", "Wilson", 21, 301),
       ("Taylor", "Moore", 28, 302),
       ("Harry", "Thompson", 28, 302),
       ("Lewis", "Clark", 28, 302);

insert into vehicles(driver_id, vehicle_type, passengers)
values (1, "bus", 20),
       (2, "van", 10),
       (1, "van", 10),
       (4, "car", 5),
       (5, "car", 5),
       (6, "car", 4),
       (7, "car", 3),
       (8, "bus", 3);

insert into routes(starting_point, end_point, leader_id, route_time)
values ("Hotel Highland", "Highland Peak", 3, '02:00:00'),
       ("Hotel Highland", "Highland Hut", 3, '00:40:00'),
       ("Obzen Hut", "Monastery", 3, '06:00:00'),
       ("Devils Paw", "Begich Peak", 4, '03:30:00');
[/input]
[output]
1
bus
James Smith
2
van
Mary Williams
1
van
James Smith
4
car
David Wilson
5
car
Lisa Lopez
6
car
Michelle Anderson
7
car
Thomas Wilson
8
bus
Taylor Moore
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
insert into rooms(id, occupation, beds_count)
values (101, "occupied", 3),
       (102, "free", 3),
       (103, "free", 3),
       (104, "free", 2),
       (105, "free", 2),
       (201, "free", 3),
       (202, "free", 3),
       (203, "free", 2),
       (204, "free", 3),
       (205, "free", 3),
       (301, "free", 2),
       (302, "free", 2),
       (303, "free", 2),
       (304, "free", 3),
       (305, "free", 3);

insert into campers(first_name, last_name, age, room)
values ("James", "Smith", 20, 101),
       ("Mary", "Williams", 27, 102),
       ("William", "Davidson", 25, 301),
       ("David", "Wilson", 28, 301),
       ("Lisa", "Lopez", 25, 102),
       ("Michelle", "Anderson", 26, 102),
       ("Thomas", "Wilson", 21, 301),
       ("Taylor", "Moore", 28, 302),
       ("Harry", "Thompson", 28, 302),
       ("Lewis", "Clark", 28, 302);

insert into vehicles(driver_id, vehicle_type, passengers)
values (1, "bus", 20),
       (2, "van", 10),
       (1, "van", 10),
       (4, "car", 5),
       (5, "car", 5),
       (6, "car", 4),
       (7, "car", 3),
       (8, "bus", 3);

insert into routes(starting_point, end_point, leader_id, route_time)
values ("Hotel Highland", "Highland Peak", 3, '02:00:00'),
       ("Hotel Highland", "Highland Hut", 3, '00:40:00'),
       ("Obzen Hut", "Monastery", 3, '06:00:00'),
       ("Devils Paw", "Begich Peak", 4, '03:30:00');
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
