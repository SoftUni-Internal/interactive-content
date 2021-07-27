[slide hideTitle]

# JOIN Statements

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Table-Relations/interactive-java-mysql-table-relations-22-23-joins-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `JOIN` statements enable us to **connect** two tables by their **foreign keys** and take all the information we need **simultaneously** with only one query statement.

To perform a join, we need two tables and a valid `JOIN` condition.

Take a look at this example:

```java
SELECT * 
FROM `table_a` 
JOIN `table_b` ON `table_b`.common_column = `table_a`.common_column 
```

Here, we select **everything** from the two tables.

We **name** the first table that we want to **join**.

Then, we create a "**Join condition**" using "**FOREIGN KEYS**".

[/slide]

[slide hideTitle]
# Problem with Solution: Trip Organization

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Table-Relations/problem-and-solution-trip-organization-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Trip Organization" taskId="java-db-and-MySQL-table-relations-trip-organization" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
# Description

Use the database that is called "**Camp Database**".

Write a query that retrieves information about SoftUni Camp's transport organization. 

It should get information about the **drivers** (**name** and **id**) and their **vehicle_type**. 

|**driver_id**|**vehicle_type**|**driver_name**|
|:---:|:---:|:---:|
|1|bus|Oliver Smith|
|2|van|Emma Johnson|
|1|van|Oliver Smith|
|...|...|...|

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
	vehicle_id int,
	CONSTRAINT fk_room_id FOREIGN KEY(room) REFERENCES rooms(id),
  	CONSTRAINT fk_vehicle_id FOREIGN KEY(vehicle_id) REFERENCES vehicles(id) on delete cascade
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

insert into campers(first_name, last_name, age,room) values("Oliver", "Smith", 20,101),
("Emma", "Johnson", 27,102),
("Thomas", "Williams", 25,301),
("William", "Jones", 28,301),
("Florence", "Brown", 25,102),
("Chloe", "Davis", 26,102),
("Charlotte", "Miller", 21,301),
("Henry", "Wilson", 28,302),
("Edward", "Young", 28,302);

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
("Four Seasons", "Mont Blanc Peak", 3, '02:00:00'),
("Mercure", "Monte Rosa", 3, '00:40:00'),
("Fish Lake Hut", "Rila Monastery", 3, '06:00:00'),
("Borovets", "Musala Peak", 4, '03:30:00');
[/input]
[output]
1
bus	
Oliver Smith
2
van
Emma Johnson
1
van
Oliver Smith
4
car
William Jones
5
car
Florence Brown
6
car
Chloe Davis
7
car
Charlotte Miller
8
bus
Henry Wilson
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
	vehicle_id int,
	CONSTRAINT fk_room_id FOREIGN KEY(room) REFERENCES rooms(id),
  	CONSTRAINT fk_vehicle_id FOREIGN KEY(vehicle_id) REFERENCES vehicles(id) on delete cascade
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

insert into campers(first_name, last_name, age,room) values("Oliver", "Smith", 20,101),
("Emma", "Johnson", 27,102),
("Thomas", "Williams", 25,301),
("William", "Jones", 28,301),
("Florence", "Brown", 25,102),
("Chloe", "Davis", 26,102),
("Charlotte", "Miller", 21,301),
("Henry", "Wilson", 28,302),
("Edward", "Young", 28,302);

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
("Four Seasons", "Mont Blanc Peak", 3, '02:00:00'),
("Mercure", "Monte Rosa", 3, '00:40:00'),
("Fish Lake Hut", "Rila Monastery", 3, '06:00:00'),
("Borovets", "Musala Peak", 4, '03:30:00');
[/input]
[output]
1
bus	
Oliver Smith
2
van
Emma Johnson
1
van
Oliver Smith
4
car
William Jones
5
car
Florence Brown
6
car
Chloe Davis
7
car
Charlotte Miller
8
bus
Henry Wilson
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: SoftUni Hiking

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Table-Relations/problem-and-solution-softuni-hiking-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="SoftUni Hiking" taskId="java-db-and-MySQL-table-relations-softUni-hiking" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
# Description

Use the database that is called "**Camp Database**".

Get information about hiking **routes** - **starting point** and **ending point**, and their **leaders** - **name** and **id**. 

|**route_starting_point**|**route_ending_point**|**leader_id**| **leader_name** |
|:---:|:---:|:---:| :---:|
|Four Seasons|	Mont Blanc Peak	|3|	Thomas Williams|
|Mercure|	Monte Rosa	|3	|Thomas Williams|
|Fish Lake Hut	|Rila Monastery|	3	|Thomas Williams|
|Borovets	|Musala Peak|	4	|William Jones|

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
	vehicle_id int,
	CONSTRAINT fk_room_id FOREIGN KEY(room) REFERENCES rooms(id),
  	CONSTRAINT fk_vehicle_id FOREIGN KEY(vehicle_id) REFERENCES vehicles(id) on delete cascade
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

insert into campers(first_name, last_name, age,room) values("Oliver", "Smith", 20,101),
("Emma", "Johnson", 27,102),
("Thomas", "Williams", 25,301),
("William", "Jones", 28,301),
("Florence", "Brown", 25,102),
("Chloe", "Davis", 26,102),
("Charlotte", "Miller", 21,301),
("Henry", "Wilson", 28,302),
("Edward", "Young", 28,302);

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
("Four Seasons", "Mont Blanc Peak", 3, '02:00:00'),
("Mercure", "Monte Rosa", 3, '00:40:00'),
("Fish Lake Hut", "Rila Monastery", 3, '06:00:00'),
("Borovets", "Musala Peak", 4, '03:30:00');
[/input]
[output]
Four Seasons
Mont Blanc Peak	
3	
Thomas Williams
Mercure
Monte Rosa
3	
Thomas Williams
Fish Lake Hut
Rila Monastery
3	
Thomas Williams
Borovets	
Musala Peak	
4	
William Jones
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
	vehicle_id int,
	CONSTRAINT fk_room_id FOREIGN KEY(room) REFERENCES rooms(id),
  	CONSTRAINT fk_vehicle_id FOREIGN KEY(vehicle_id) REFERENCES vehicles(id) on delete cascade
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

insert into campers(first_name, last_name, age,room) values("Oliver", "Smith", 20,101),
("Emma", "Johnson", 27,102),
("Thomas", "Williams", 25,301),
("William", "Jones", 28,301),
("Florence", "Brown", 25,102),
("Chloe", "Davis", 26,102),
("Charlotte", "Miller", 21,301),
("Henry", "Wilson", 28,302),
("Edward", "Young", 28,302);

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
("Four Seasons", "Mont Blanc Peak", 3, '02:00:00'),
("Mercure", "Monte Rosa", 3, '00:40:00'),
("Fish Lake Hut", "Rila Monastery", 3, '06:00:00'),
("Borovets", "Musala Peak", 4, '03:30:00');
[/input]
[output]
Four Seasons
Mont Blanc Peak	
3	
Thomas Williams
Mercure
Monte Rosa
3	
Thomas Williams
Fish Lake Hut
Rila Monastery
3	
Thomas Williams
Borovets	
Musala Peak	
4	
William Jones
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
