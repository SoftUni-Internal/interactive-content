# Table Relations


[slide hideTitle]
# Problem with Solution: SoftUni Hiking
[code-task title="SoftUni Hiking" taskId="table-relations-softUni-hiking" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]

```
-- Write your query here
```
[/code-editor]
[task-description]
## Description

Get information about hiking **routes** - **starting point** and **ending point**, and their **leaders** - **name** and **id**. 

|**route_starting_point**|**route_ending_point**|**leader_id**| **leader_name** |
|:---:|:---:|:---:| :---:|
|Four Seasons|	Mont Blanc Peak	|3|	Thomas Williams|
|Mercure	Monte Rosa	|3	|Thomas Williams|
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