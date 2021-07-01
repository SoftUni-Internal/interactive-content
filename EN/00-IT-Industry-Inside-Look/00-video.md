[slide hideTitle]
# Problem: Find the Names of All Employees by Salary in Range


[code-task title="Find the Names of All Employees by Salary in Range" taskId="java-db-and-MySQL-basic-crud-find-the-names-salary-range" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]

```
-- Write your query here

```
[/code-editor]

[task-description]
## Description

Write an SQL query to find the first name, last name, and job title of all employees whose salary is in the range [**20000**, **30000**]. 

**Sort** the information **by id**. 


## Example

| first_name | last_name | job_title | 
| --- | --- | --- |
| Rob  | Walters | Senior Tool Designer | 
| Thierry | D'Hers | Tool Designer | 
| JoLynn | Dobney | Production Supervisor |
| ... | ... | ... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE IF NOT EXISTS `employees` (
  `employee_id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `job_title` varchar(50) NOT NULL,
  `department_id` int(10) NOT NULL,
  `manager_id` int(10) DEFAULT NULL,
  `hire_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `salary` decimal(19,4) NOT NULL,
  `address_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `employees` DISABLE KEYS \*/;
INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `manager_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, 16, '1998-07-31 00:00:00.000000', 12500.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, 6, '1999-02-26 00:00:00.000000', 13500.0000, 102),
	(3, 'Roberto', 'Tamburello', NULL, 'Engineering Manager', 1, 12, '1999-12-12 00:00:00.000000', 43300.0000, 193),
	(4, 'Rob', 'Walters', NULL, 'Senior Tool Designer', 2, 3, '2000-01-05 00:00:00.000000', 29800.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, 263, '2000-01-11 00:00:00.000000', 25000.0000, 40),
	(6, 'David', 'Bradley', 'M', 'Marketing Manager', 5, 109, '2000-01-20 00:00:00.000000', 37500.0000, 199),
	(7, 'JoLynn', 'Dobney', 'M', 'Production Supervisor', 7, 21, '2000-01-26 00:00:00.000000', 25000.0000, 275),
	(8, 'Ruth', 'Ellerbrock', 'Ann', 'Production Technician', 7, 185, '2000-02-06 00:00:00.000000', 13500.0000, 108),
	(9, 'Gail', 'Erickson', 'A', 'Design Engineer', 1, 3, '2000-02-06 00:00:00.000000', 32700.0000, 22),
	(10, 'Barry', 'Johnson', 'K', 'Production Technician', 7, 185, '2000-02-07 00:00:00.000000', 13500.0000, 285),
	(11, 'Jossef', 'Goldberg', 'H', 'Design Engineer', 1, 3, '2000-02-24 00:00:00.000000', 32700.0000, 214),
	(12, 'Terri', 'Duffy', 'Lee', 'Vice President of Engineering', 1, 109, '2000-03-03 00:00:00.000000', 63500.0000, 209),
	(13, 'Sidney', 'Higa', 'M', 'Production Technician', 7, 185, '2000-03-05 00:00:00.000000', 13500.0000, 73),
	(14, 'Taylor', 'Maxwell', 'R', 'Production Supervisor', 7, 21, '2000-03-11 00:00:00.000000', 25000.0000, 82),
	(15, 'Jeffrey', 'Ford', 'L', 'Production Technician', 7, 185, '2000-03-23 00:00:00.000000', 13500.0000, 156),
	(16, 'Jo', 'Brown', 'A', 'Production Supervisor', 7, 21, '2000-03-30 00:00:00.000000', 25000.0000, 70),
	(17, 'Doris', 'Hartwig', 'M', 'Production Technician', 7, 185, '2000-04-11 00:00:00.000000', 13500.0000, 144),
	(18, 'John', 'Campbell', 'T', 'Production Supervisor', 7, 21, '2000-04-18 00:00:00.000000', 25000.0000, 245),
	(19, 'Diane', 'Glimp', 'R', 'Production Technician', 7, 185, '2000-04-29 00:00:00.000000', 13500.0000, 184),
	(20, 'Steven', 'Selikoff', 'T', 'Production Technician', 7, 173, '2001-01-02 00:00:00.000000', 9500.0000, 104),
	(21, 'Peter', 'Krebs', 'J', 'Production Control Manager', 8, 148, '2001-01-02 00:00:00.000000', 24500.0000, 11),
	(22, 'Stuart', 'Munson', 'V', 'Production Technician', 7, 197, '2001-01-03 00:00:00.000000', 10000.0000, 36),
	(23, 'Greg', 'Alderson', 'F', 'Production Technician', 7, 197, '2001-01-03 00:00:00.000000', 10000.0000, 18),
	(24, 'David', 'Johnson', '', 'Production Technician', 7, 184, '2001-01-03 00:00:00.000000', 9500.0000, 142),
	(25, 'Zheng', 'Mu', 'W', 'Production Supervisor', 7, 21, '2001-01-04 00:00:00.000000', 25000.0000, 278),
	(26, 'Ivo', 'Salmre', 'William', 'Production Technician', 7, 108, '2001-01-05 00:00:00.000000', 14000.0000, 165),
	(27, 'Paul', 'Komosinski', 'B', 'Production Technician', 7, 87, '2001-01-05 00:00:00.000000', 15000.0000, 32),
	(28, 'Ashvini', 'Sharma', 'R', 'Network Administrator', 11, 150, '2001-01-05 00:00:00.000000', 32500.0000, 133),
	(29, 'Kendall', 'Keil', 'C', 'Production Technician', 7, 14, '2001-01-06 00:00:00.000000', 11000.0000, 257),
	(30, 'Paula', 'Barreto de Mattos', 'M', 'Human Resources Manager', 9, 140, '2001-01-07 00:00:00.000000', 27100.0000, 2),
	(31, 'Alejandro', 'McGuel', 'E', 'Production Technician', 7, 210, '2001-01-07 00:00:00.000000', 15000.0000, 274),
	(32, 'Garrett', 'Young', 'R', 'Production Technician', 7, 184, '2001-01-08 00:00:00.000000', 9500.0000, 283),
	(33, 'Jian Shuo', 'Wang', NULL, 'Production Technician', 7, 135, '2001-01-08 00:00:00.000000', 9500.0000, 160),
	(34, 'Susan', 'Eaton', 'W', 'Stocker', 15, 85, '2001-01-08 00:00:00.000000', 9000.0000, 204),
	(35, 'Vamsi', 'Kuppa', '', 'Shipping and Receiving Clerk', 15, 85, '2001-01-08 00:00:00.000000', 9500.0000, 51),
	(36, 'Alice', 'Ciccu', 'O', 'Production Technician', 7, 38, '2001-01-08 00:00:00.000000', 11000.0000, 284),
	(37, 'Simon', 'Rapier', 'D', 'Production Technician', 7, 7, '2001-01-09 00:00:00.000000', 12500.0000, 64),
	(38, 'Jinghao', 'Liu', 'K', 'Production Supervisor', 7, 21, '2001-01-09 00:00:00.000000', 25000.0000, 55),
	(39, 'Michael', 'Hines', 'T', 'Production Technician', 7, 182, '2001-01-10 00:00:00.000000', 14000.0000, 168),
	(40, 'Yvonne', 'McKay', 'S', 'Production Technician', 7, 159, '2001-01-10 00:00:00.000000', 10000.0000, 107),
	(41, 'Peng', 'Wu', 'J', 'Quality Assurance Supervisor', 13, 200, '2001-01-10 00:00:00.000000', 21600.0000, 39),
	(42, 'Jean', 'Trenary', 'E', 'Information Services Manager', 11, 109, '2001-01-12 00:00:00.000000', 50500.0000, 194),
	(43, 'Russell', 'Hunter', NULL, 'Production Technician', 7, 74, '2001-01-13 00:00:00.000000', 11000.0000, 258),
	(44, 'A. Scott', 'Wright', NULL, 'Master Scheduler', 8, 148, '2001-01-13 00:00:00.000000', 23600.0000, 172),
	(45, 'Fred', 'Northup', 'T', 'Production Technician', 7, 210, '2001-01-13 00:00:00.000000', 15000.0000, 282),
	(46, 'Sariya', 'Harnpadoungsataya', 'E', 'Marketing Specialist', 4, 6, '2001-01-13 00:00:00.000000', 14400.0000, 106),
	(47, 'Willis', 'Johnson', 'T', 'Recruiter', 9, 30, '2001-01-14 00:00:00.000000', 18300.0000, 99),
	(48, 'Jun', 'Cao', 'T', 'Production Technician', 7, 38, '2001-01-15 00:00:00.000000', 11000.0000, 197),
	(49, 'Christian', 'Kleinerman', 'E', 'Maintenance Supervisor', 14, 218, '2001-01-15 00:00:00.000000', 20400.0000, 118),
	(50, 'Susan', 'Metters', 'A', 'Production Technician', 7, 184, '2001-01-15 00:00:00.000000', 9500.0000, 224),
	(51, 'Reuben', 'D''sa', 'H', 'Production Supervisor', 7, 21, '2001-01-16 00:00:00.000000', 25000.0000, 249),
	(52, 'Kirk', 'Koenigsbauer', 'J', 'Production Technician', 7, 123, '2001-01-16 00:00:00.000000', 10000.0000, 250),
	(53, 'David', 'Ortiz', 'J', 'Production Technician', 7, 18, '2001-01-16 00:00:00.000000', 12500.0000, 267),
	(54, 'Tengiz', 'Kharatishvili', '', 'Control Specialist', 12, 90, '2001-01-17 00:00:00.000000', 16800.0000, 129),
	(55, 'Hanying', 'Feng', 'P', 'Production Technician', 7, 143, '2001-01-17 00:00:00.000000', 14000.0000, 182),
	(56, 'Kevin', 'Liu', 'H', 'Production Technician', 7, 210, '2001-01-18 00:00:00.000000', 15000.0000, 259),
	(57, 'Annik', 'Stahl', 'O', 'Production Technician', 7, 16, '2001-01-18 00:00:00.000000', 12500.0000, 262),
	(58, 'Suroor', 'Fatima', 'R', 'Production Technician', 7, 38, '2001-01-18 00:00:00.000000', 11000.0000, 86),
	(59, 'Deborah', 'Poe', 'E', 'Accounts Receivable Specialist', 10, 139, '2001-01-19 00:00:00.000000', 19000.0000, 103),
	(60, 'Jim', 'Scardelis', 'H', 'Production Technician', 7, 74, '2001-01-20 00:00:00.000000', 11000.0000, 88),
	(61, 'Carole', 'Poland', 'M', 'Production Technician', 7, 173, '2001-01-20 00:00:00.000000', 9500.0000, 72),
	(62, 'George', 'Li', 'Z', 'Production Technician', 7, 184, '2001-01-22 00:00:00.000000', 9500.0000, 58),
	(63, 'Gary', 'Yukish', 'W', 'Production Technician', 7, 87, '2001-01-23 00:00:00.000000', 15000.0000, 80),
	(64, 'Cristian', 'Petculescu', 'K', 'Production Supervisor', 7, 21, '2001-01-23 00:00:00.000000', 25000.0000, 276),
	(65, 'Raymond', 'Sam', 'K', 'Production Technician', 7, 143, '2001-01-24 00:00:00.000000', 14000.0000, 75),
	(66, 'Janaina', 'Bueno', 'Barreiro Gambaro', 'Application Specialist', 11, 42, '2001-01-24 00:00:00.000000', 27400.0000, 131),
	(67, 'Bob', 'Hohman', '', 'Production Technician', 7, 14, '2001-01-25 00:00:00.000000', 11000.0000, 44),
	(68, 'Shammi', 'Mohamed', 'G', 'Production Technician', 7, 210, '2001-01-25 00:00:00.000000', 15000.0000, 4),
	(69, 'Linda', 'Moschell', 'K', 'Production Technician', 7, 38, '2001-01-26 00:00:00.000000', 11000.0000, 5),
	(70, 'Mindy', 'Martin', 'C', 'Benefits Specialist', 9, 30, '2001-01-26 00:00:00.000000', 16600.0000, 171),
	(71, 'Wendy', 'Kahn', 'Beth', 'Finance Manager', 10, 140, '2001-01-26 00:00:00.000000', 43300.0000, 232),
	(72, 'Kim', 'Ralls', 'T', 'Stocker', 15, 85, '2001-01-27 00:00:00.000000', 9000.0000, 42),
	(73, 'Sandra', 'Reategui Alayo', NULL, 'Production Technician', 7, 135, '2001-01-27 00:00:00.000000', 9500.0000, 255),
	(74, 'Kok-Ho', 'Loh', 'T', 'Production Supervisor', 7, 21, '2001-01-28 00:00:00.000000', 25000.0000, 10),
	(75, 'Douglas', 'Hite', 'B', 'Production Technician', 7, 159, '2001-01-28 00:00:00.000000', 10000.0000, 57),
	(76, 'James', 'Kramer', 'D', 'Production Technician', 7, 7, '2001-01-28 00:00:00.000000', 12500.0000, 162),
	(77, 'Sean', 'Alexander', 'P', 'Quality Assurance Technician', 13, 41, '2001-01-29 00:00:00.000000', 10600.0000, 210),
	(78, 'Nitin', 'Mirchandani', 'S', 'Production Technician', 7, 182, '2001-01-29 00:00:00.000000', 14000.0000, 231),
	(79, 'Diane', 'Margheim', 'L', 'Research and Development Engineer', 6, 158, '2001-01-30 00:00:00.000000', 40900.0000, 111),
	(80, 'Rebecca', 'Laszlo', 'A', 'Production Technician', 7, 16, '2001-01-30 00:00:00.000000', 12500.0000, 6),
	(81, 'Rajesh', 'Patel', 'M', 'Production Technician', 7, 210, '2001-02-01 00:00:00.000000', 15000.0000, 81),
	(82, 'Vidur', 'Luthra', 'X', 'Recruiter', 9, 30, '2001-02-02 00:00:00.000000', 18300.0000, 176),
	(83, 'John', 'Evans', 'P', 'Production Technician', 7, 38, '2001-02-02 00:00:00.000000', 11000.0000, 253),
	(84, 'Nancy', 'Anderson', 'A', 'Production Technician', 7, 7, '2001-02-03 00:00:00.000000', 12500.0000, 227),
	(85, 'Pilar', 'Ackerman', 'G', 'Shipping and Receiving Supervisor', 15, 21, '2001-02-03 00:00:00.000000', 19200.0000, 269),
	(86, 'David', 'Yalovsky', 'A', 'Production Technician', 7, 184, '2001-02-03 00:00:00.000000', 9500.0000, 241),
	(87, 'David', 'Hamilton', 'P', 'Production Supervisor', 7, 21, '2001-02-04 00:00:00.000000', 25000.0000, 150),
	(88, 'Laura', 'Steele', 'C', 'Production Technician', 7, 123, '2001-02-04 00:00:00.000000', 10000.0000, 62),
	(89, 'Margie', 'Shoop', 'W', 'Production Technician', 7, 16, '2001-02-05 00:00:00.000000', 12500.0000, 92),
	(90, 'Zainal', 'Arifin', 'T', 'Document Control Manager', 12, 200, '2001-02-05 00:00:00.000000', 17800.0000, 128),
	(91, 'Lorraine', 'Nay', 'O', 'Production Technician', 7, 210, '2001-02-05 00:00:00.000000', 15000.0000, 94),
	(92, 'Fadi', 'Fakhouri', 'K', 'Production Technician', 7, 143, '2001-02-05 00:00:00.000000', 14000.0000, 281),
	(93, 'Ryan', 'Cornelsen', 'L', 'Production Technician', 7, 51, '2001-02-06 00:00:00.000000', 15000.0000, 228),
	(94, 'Candy', 'Spoon', 'L', 'Accounts Receivable Specialist', 10, 139, '2001-02-07 00:00:00.000000', 19000.0000, 122),
	(95, 'Nuan', 'Yu', NULL, 'Production Technician', 7, 74, '2001-02-07 00:00:00.000000', 11000.0000, 12),
	(96, 'William', 'Vong', 'S', 'Scheduling Assistant', 8, 44, '2001-02-08 00:00:00.000000', 16000.0000, 35),
	(97, 'Bjorn', 'Rettig', 'M', 'Production Technician', 7, 173, '2001-02-08 00:00:00.000000', 9500.0000, 268),
	(98, 'Scott', 'Gode', 'R', 'Production Technician', 7, 197, '2001-02-09 00:00:00.000000', 10000.0000, 256),
	(99, 'Michael', 'Rothkugel', 'L', 'Production Technician', 7, 87, '2001-02-11 00:00:00.000000', 15000.0000, 93),
	(100, 'Lane', 'Sacksteder', 'M', 'Production Technician', 7, 143, '2001-02-12 00:00:00.000000', 14000.0000, 239),
	(101, 'Pete', 'Male', 'C', 'Production Technician', 7, 14, '2001-02-12 00:00:00.000000', 11000.0000, 273),
	(102, 'Dan', 'Bacon', 'K', 'Application Specialist', 11, 42, '2001-02-12 00:00:00.000000', 27400.0000, 126),
	(103, 'David', 'Barber', 'M', 'Assistant to the Chief Financial Officer', 10, 140, '2001-02-13 00:00:00.000000', 13500.0000, 173),
	(104, 'Lolan', 'Song', 'B', 'Production Technician', 7, 74, '2001-02-13 00:00:00.000000', 11000.0000, 77),
	(105, 'Paula', 'Nartker', 'R', 'Production Technician', 7, 210, '2001-02-13 00:00:00.000000', 15000.0000, 247),
	(106, 'Mary', 'Gibson', 'E', 'Marketing Specialist', 4, 6, '2001-02-13 00:00:00.000000', 14400.0000, 110),
	(107, 'Mindaugas', 'Krapauskas', 'J', 'Production Technician', 7, 38, '2001-02-14 00:00:00.000000', 11000.0000, 74),
	(108, 'Eric', 'Gubbels', NULL, 'Production Supervisor', 7, 21, '2001-02-15 00:00:00.000000', 25000.0000, 85),
	(109, 'Ken', 'Sanchez', 'J', 'Chief Executive Officer', 16, NULL, '2001-02-15 00:00:00.000000', 125500.0000, 177),
	(110, 'Jason', 'Watters', 'M', 'Production Technician', 7, 135, '2001-02-15 00:00:00.000000', 9500.0000, 21),
	(111, 'Mark', 'Harrington', 'L', 'Quality Assurance Technician', 13, 41, '2001-02-16 00:00:00.000000', 10600.0000, 139),
	(112, 'Janeth', 'Esteves', 'M', 'Production Technician', 7, 159, '2001-02-16 00:00:00.000000', 10000.0000, 163),
	(113, 'Marc', 'Ingle', 'J', 'Production Technician', 7, 184, '2001-02-17 00:00:00.000000', 9500.0000, 230),
	(114, 'Gigi', 'Matthew', '', 'Research and Development Engineer', 6, 158, '2001-02-17 00:00:00.000000', 40900.0000, 23),
	(115, 'Paul', 'Singh', 'R', 'Production Technician', 7, 108, '2001-02-18 00:00:00.000000', 14000.0000, 16),
	(116, 'Frank', 'Lee', 'T', 'Production Technician', 7, 210, '2001-02-18 00:00:00.000000', 15000.0000, 263),
	(117, 'Francois', 'Ajenstat', 'P', 'Database Administrator', 11, 42, '2001-02-18 00:00:00.000000', 38500.0000, 127),
	(118, 'Diane', 'Tibbott', 'H', 'Production Technician', 7, 14, '2001-02-19 00:00:00.000000', 11000.0000, 140),
	(119, 'Jill', 'Williams', 'A', 'Marketing Specialist', 4, 6, '2001-02-19 00:00:00.000000', 14400.0000, 114),
	(120, 'Angela', 'Barbariol', 'W', 'Production Technician', 7, 38, '2001-02-21 00:00:00.000000', 11000.0000, 91),
	(121, 'Matthias', 'Berndt', 'T', 'Shipping and Receiving Clerk', 15, 85, '2001-02-21 00:00:00.000000', 9500.0000, 201),
	(122, 'Bryan', 'Baker', NULL, 'Production Technician', 7, 7, '2001-02-22 00:00:00.000000', 12500.0000, 166),
	(123, 'Jeff', 'Hay', 'V', 'Production Supervisor', 7, 21, '2001-02-22 00:00:00.000000', 25000.0000, 113),
	(124, 'Eugene', 'Zabokritski', 'R', 'Production Technician', 7, 184, '2001-02-22 00:00:00.000000', 9500.0000, 226),
	(125, 'Barbara', 'Decker', 'S', 'Production Technician', 7, 182, '2001-02-23 00:00:00.000000', 14000.0000, 219),
	(126, 'Chris', 'Preston', 'T', 'Production Technician', 7, 123, '2001-02-23 00:00:00.000000', 10000.0000, 279),
	(127, 'Sean', 'Chai', '', 'Document Control Assistant', 12, 90, '2001-02-23 00:00:00.000000', 10300.0000, 138),
	(128, 'Dan', 'Wilson', 'B', 'Database Administrator', 11, 42, '2001-02-23 00:00:00.000000', 38500.0000, 30),
	(129, 'Mark', 'McArthur', 'K', 'Production Technician', 7, 16, '2001-02-24 00:00:00.000000', 12500.0000, 186),
	(130, 'Bryan', 'Walton', 'A', 'Accounts Receivable Specialist', 10, 139, '2001-02-25 00:00:00.000000', 19000.0000, 175),
	(131, 'Houman', 'Pournasseh', '', 'Production Technician', 7, 74, '2001-02-26 00:00:00.000000', 11000.0000, 185),
	(132, 'Sairaj', 'Uddin', 'L', 'Scheduling Assistant', 8, 44, '2001-02-27 00:00:00.000000', 16000.0000, 190),
	(133, 'Michiko', 'Osada', 'F', 'Production Technician', 7, 173, '2001-02-27 00:00:00.000000', 9500.0000, 229),
	(134, 'Benjamin', 'Martin', 'R', 'Production Technician', 7, 184, '2001-02-28 00:00:00.000000', 9500.0000, 286),
	(135, 'Cynthia', 'Randall', 'S', 'Production Supervisor', 7, 21, '2001-02-28 00:00:00.000000', 25000.0000, 147),
	(136, 'Kathie', 'Flood', 'E', 'Production Technician', 7, 197, '2001-02-28 00:00:00.000000', 10000.0000, 100),
	(137, 'Britta', 'Simon', 'L', 'Production Technician', 7, 16, '2001-03-02 00:00:00.000000', 12500.0000, 95),
	(138, 'Brian', 'Lloyd', 'T', 'Production Technician', 7, 210, '2001-03-02 00:00:00.000000', 15000.0000, 288),
	(139, 'David', 'Liu', 'J', 'Accounts Manager', 10, 140, '2001-03-03 00:00:00.000000', 34700.0000, 119),
	(140, 'Laura', 'Norman', 'F', 'Chief Financial Officer', 16, 109, '2001-03-04 00:00:00.000000', 60100.0000, 215),
	(141, 'Michael', 'Patten', 'W', 'Production Technician', 7, 38, '2001-03-04 00:00:00.000000', 11000.0000, 96),
	(142, 'Andy', 'Ruth', 'M', 'Production Technician', 7, 135, '2001-03-04 00:00:00.000000', 9500.0000, 1),
	(143, 'Yuhong', 'Li', 'L', 'Production Supervisor', 7, 21, '2001-03-05 00:00:00.000000', 25000.0000, 242),
	(144, 'Robert', 'Rounthwaite', 'J', 'Production Technician', 7, 159, '2001-03-06 00:00:00.000000', 10000.0000, 280),
	(145, 'Andreas', 'Berglund', 'T', 'Quality Assurance Technician', 13, 41, '2001-03-06 00:00:00.000000', 10600.0000, 208),
	(146, 'Reed', 'Koch', 'T', 'Production Technician', 7, 184, '2001-03-06 00:00:00.000000', 9500.0000, 191),
	(147, 'Linda', 'Randall', 'A', 'Production Technician', 7, 143, '2001-03-07 00:00:00.000000', 14000.0000, 260),
	(148, 'James', 'Hamilton', 'R', 'Vice President of Production', 7, 109, '2001-03-07 00:00:00.000000', 84100.0000, 158),
	(149, 'Ramesh', 'Meyyappan', 'V', 'Application Specialist', 11, 42, '2001-03-07 00:00:00.000000', 27400.0000, 130),
	(150, 'Stephanie', 'Conroy', 'A', 'Network Manager', 11, 42, '2001-03-08 00:00:00.000000', 39700.0000, 136),
	(151, 'Samantha', 'Smith', 'H', 'Production Technician', 7, 108, '2001-03-08 00:00:00.000000', 14000.0000, 14),
	(152, 'Tawana', 'Nusbaum', 'G', 'Production Technician', 7, 210, '2001-03-09 00:00:00.000000', 15000.0000, 237),
	(153, 'Denise', 'Smith', 'H', 'Production Technician', 7, 14, '2001-03-09 00:00:00.000000', 11000.0000, 143),
	(154, 'Hao', 'Chen', 'O', 'Human Resources Administrative Assistant', 9, 30, '2001-03-10 00:00:00.000000', 13900.0000, 135),
	(155, 'Alex', 'Nayberg', 'M', 'Production Technician', 7, 123, '2001-03-12 00:00:00.000000', 10000.0000, 174),
	(156, 'Eugene', 'Kogan', 'O', 'Production Technician', 7, 7, '2001-03-12 00:00:00.000000', 12500.0000, 71),
	(157, 'Brandon', 'Heidepriem', 'G', 'Production Technician', 7, 16, '2001-03-12 00:00:00.000000', 12500.0000, 189),
	(158, 'Dylan', 'Miller', 'A', 'Research and Development Manager', 6, 3, '2001-03-12 00:00:00.000000', 50500.0000, 141),
	(159, 'Shane', 'Kim', 'S', 'Production Supervisor', 7, 21, '2001-03-12 00:00:00.000000', 25000.0000, 20),
	(160, 'John', 'Chen', 'Y', 'Production Technician', 7, 182, '2001-03-13 00:00:00.000000', 14000.0000, 65),
	(161, 'Karen', 'Berge', 'R', 'Document Control Assistant', 12, 90, '2001-03-13 00:00:00.000000', 10300.0000, 123),
	(162, 'Jose', 'Lugo', 'R', 'Production Technician', 7, 16, '2001-03-14 00:00:00.000000', 12500.0000, 271),
	(163, 'Mandar', 'Samant', 'H', 'Production Technician', 7, 74, '2001-03-14 00:00:00.000000', 11000.0000, 63),
	(164, 'Mikael', 'Sandberg', 'Q', 'Buyer', 5, 274, '2001-03-14 00:00:00.000000', 18300.0000, 50),
	(165, 'Sameer', 'Tejani', 'A', 'Production Technician', 7, 74, '2001-03-15 00:00:00.000000', 11000.0000, 66),
	(166, 'Dragan', 'Tomic', 'K', 'Accounts Payable Specialist', 10, 139, '2001-03-15 00:00:00.000000', 19000.0000, 115),
	(167, 'Carol', 'Philips', 'M', 'Production Technician', 7, 173, '2001-03-16 00:00:00.000000', 9500.0000, 45),
	(168, 'Rob', 'Caron', 'T', 'Production Technician', 7, 87, '2001-03-17 00:00:00.000000', 15000.0000, 161),
	(169, 'Don', 'Hall', 'L', 'Production Technician', 7, 38, '2001-03-17 00:00:00.000000', 11000.0000, 59),
	(170, 'Alan', 'Brewer', 'J', 'Scheduling Assistant', 8, 44, '2001-03-17 00:00:00.000000', 16000.0000, 151),
	(171, 'David', 'Lawrence', 'Oliver', 'Production Technician', 7, 184, '2001-03-18 00:00:00.000000', 9500.0000, 167),
	(172, 'Baris', 'Cetinok', 'F', 'Production Technician', 7, 87, '2001-03-19 00:00:00.000000', 15000.0000, 244),
	(173, 'Michael', 'Ray', 'Sean', 'Production Supervisor', 7, 21, '2001-03-19 00:00:00.000000', 25000.0000, 277),
	(174, 'Steve', 'Masters', 'F', 'Production Technician', 7, 18, '2001-03-19 00:00:00.000000', 12500.0000, 252),
	(175, 'Suchitra', 'Mohan', 'O', 'Production Technician', 7, 16, '2001-03-20 00:00:00.000000', 12500.0000, 31),
	(176, 'Karen', 'Berg', 'A', 'Application Specialist', 11, 42, '2001-03-20 00:00:00.000000', 27400.0000, 132),
	(177, 'Terrence', 'Earls', 'W', 'Production Technician', 7, 143, '2001-03-20 00:00:00.000000', 14000.0000, 34),
	(178, 'Barbara', 'Moreland', 'C', 'Accountant', 10, 139, '2001-03-22 00:00:00.000000', 26400.0000, 254),
	(179, 'Chad', 'Niswonger', 'W', 'Production Technician', 7, 38, '2001-03-22 00:00:00.000000', 11000.0000, 46),
	(180, 'Rostislav', 'Shabalin', 'E', 'Production Technician', 7, 135, '2001-03-23 00:00:00.000000', 9500.0000, 9),
	(181, 'Belinda', 'Newman', 'M', 'Production Technician', 7, 197, '2001-03-24 00:00:00.000000', 10000.0000, 43),
	(182, 'Katie', 'McAskill-White', 'L', 'Production Supervisor', 7, 21, '2001-03-24 00:00:00.000000', 25000.0000, 240),
	(183, 'Russell', 'King', 'M', 'Production Technician', 7, 184, '2001-03-25 00:00:00.000000', 9500.0000, 3),
	(184, 'Jack', 'Richins', 'S', 'Production Supervisor', 7, 21, '2001-03-25 00:00:00.000000', 25000.0000, 169),
	(185, 'Andrew', 'Hill', 'R', 'Production Supervisor', 7, 21, '2001-03-26 00:00:00.000000', 25000.0000, 97),
	(186, 'Nicole', 'Holliday', 'B', 'Production Technician', 7, 87, '2001-03-26 00:00:00.000000', 15000.0000, 238),
	(187, 'Frank', 'Miller', 'T', 'Production Technician', 7, 14, '2001-03-27 00:00:00.000000', 11000.0000, 289),
	(188, 'Peter', 'Connelly', 'I', 'Network Administrator', 11, 150, '2001-03-27 00:00:00.000000', 32500.0000, 137),
	(189, 'Anibal', 'Sousa', 'T', 'Production Technician', 7, 108, '2001-03-27 00:00:00.000000', 14000.0000, 183),
	(190, 'Ken', 'Myer', 'L', 'Production Technician', 7, 210, '2001-03-28 00:00:00.000000', 15000.0000, 105),
	(191, 'Grant', 'Culbertson', '', 'Human Resources Administrative Assistant', 9, 30, '2001-03-29 00:00:00.000000', 13900.0000, 117),
	(192, 'Michael', 'Entin', 'T', 'Production Technician', 7, 38, '2001-03-29 00:00:00.000000', 11000.0000, 195),
	(193, 'Lionel', 'Penuchot', 'C', 'Production Technician', 7, 159, '2001-03-30 00:00:00.000000', 10000.0000, 261),
	(194, 'Thomas', 'Michaels', 'R', 'Production Technician', 7, 7, '2001-03-30 00:00:00.000000', 12500.0000, 78),
	(195, 'Jimmy', 'Bischoff', 'T', 'Stocker', 15, 85, '2001-03-30 00:00:00.000000', 9000.0000, 206),
	(196, 'Michael', 'Vanderhyde', 'T', 'Production Technician', 7, 135, '2001-03-30 00:00:00.000000', 9500.0000, 90),
	(197, 'Lori', 'Kane', 'A', 'Production Supervisor', 7, 21, '2001-03-30 00:00:00.000000', 25000.0000, 198),
	(198, 'Arvind', 'Rao', 'B', 'Buyer', 5, 274, '2001-04-01 00:00:00.000000', 18300.0000, 212),
	(199, 'Stefen', 'Hesse', 'A', 'Production Technician', 7, 182, '2001-04-01 00:00:00.000000', 14000.0000, 68),
	(200, 'Hazem', 'Abolrous', 'E', 'Quality Assurance Manager', 13, 148, '2001-04-01 00:00:00.000000', 28800.0000, 148),
	(201, 'Janet', 'Sheperdigian', 'L', 'Accounts Payable Specialist', 10, 139, '2001-04-02 00:00:00.000000', 19000.0000, 218),
	(202, 'Elizabeth', 'Keyser', 'I', 'Production Technician', 7, 74, '2001-04-03 00:00:00.000000', 11000.0000, 152),
	(203, 'Terry', 'Eminhizer', 'J', 'Marketing Specialist', 4, 6, '2001-04-03 00:00:00.000000', 14400.0000, 19),
	(204, 'John', 'Frum', '', 'Production Technician', 7, 184, '2001-04-04 00:00:00.000000', 9500.0000, 112),
	(205, 'Merav', 'Netz', 'A', 'Production Technician', 7, 173, '2001-04-04 00:00:00.000000', 9500.0000, 270),
	(206, 'Brian', 'LaMee', 'P', 'Scheduling Assistant', 8, 44, '2001-04-04 00:00:00.000000', 16000.0000, 109),
	(207, 'Kitti', 'Lertpiriyasuwat', 'H', 'Production Technician', 7, 38, '2001-04-05 00:00:00.000000', 11000.0000, 272),
	(208, 'Jay', 'Adams', 'G', 'Production Technician', 7, 18, '2001-04-06 00:00:00.000000', 12500.0000, 157),
	(209, 'Jan', 'Miksovsky', 'S', 'Production Technician', 7, 184, '2001-04-06 00:00:00.000000', 9500.0000, 101),
	(210, 'Brenda', 'Diaz', 'M', 'Production Supervisor', 7, 21, '2001-04-06 00:00:00.000000', 25000.0000, 251),
	(211, 'Andrew', 'Cencini', 'M', 'Production Technician', 7, 123, '2001-04-07 00:00:00.000000', 10000.0000, 233),
	(212, 'Chris', 'Norred', 'K', 'Control Specialist', 12, 90, '2001-04-07 00:00:00.000000', 16800.0000, 125),
	(213, 'Chris', 'Okelberry', 'O', 'Production Technician', 7, 16, '2001-04-08 00:00:00.000000', 12500.0000, 188),
	(214, 'Shelley', 'Dyck', '', 'Production Technician', 7, 143, '2001-04-08 00:00:00.000000', 14000.0000, 164),
	(215, 'Gabe', 'Mares', 'B', 'Production Technician', 7, 210, '2001-04-09 00:00:00.000000', 15000.0000, 87),
	(216, 'Mike', 'Seamans', 'K', 'Accountant', 10, 139, '2001-04-09 00:00:00.000000', 26400.0000, 120),
	(217, 'Michael', 'Raheem', NULL, 'Research and Development Manager', 6, 158, '2001-06-04 00:00:00.000000', 42500.0000, 236),
	(218, 'Gary', 'Altman', 'E.', 'Facilities Manager', 14, 148, '2002-01-03 00:00:00.000000', 24000.0000, 203),
	(219, 'Charles', 'Fitzgerald', 'B', 'Production Technician', 7, 18, '2002-01-04 00:00:00.000000', 12500.0000, 223),
	(220, 'Ebru', 'Ersan', '', 'Production Technician', 7, 25, '2002-01-07 00:00:00.000000', 13500.0000, 225),
	(221, 'Sylvester', 'Valdez', 'A', 'Production Technician', 7, 108, '2002-01-12 00:00:00.000000', 14000.0000, 25),
	(222, 'Brian', 'Goldstein', 'Richard', 'Production Technician', 7, 51, '2002-01-12 00:00:00.000000', 15000.0000, 48),
	(223, 'Linda', 'Meisner', 'P', 'Buyer', 5, 274, '2002-01-18 00:00:00.000000', 18300.0000, 28),
	(224, 'Betsy', 'Stadick', 'A', 'Production Technician', 7, 64, '2002-01-19 00:00:00.000000', 13500.0000, 47),
	(225, 'Magnus', 'Hedlund', 'E', 'Facilities Administrative Assistant', 14, 218, '2002-01-22 00:00:00.000000', 9800.0000, 211),
	(226, 'Karan', 'Khanna', 'R', 'Production Technician', 7, 18, '2002-01-23 00:00:00.000000', 12500.0000, 248),
	(227, 'Mary', 'Baker', 'R', 'Production Technician', 7, 25, '2002-01-26 00:00:00.000000', 13500.0000, 246),
	(228, 'Kevin', 'Homer', 'M', 'Production Technician', 7, 25, '2002-01-26 00:00:00.000000', 13500.0000, 29),
	(229, 'Mihail', 'Frintu', 'U', 'Production Technician', 7, 51, '2002-01-30 00:00:00.000000', 15000.0000, 89),
	(230, 'Bonnie', 'Kearney', '', 'Production Technician', 7, 185, '2002-02-02 00:00:00.000000', 13500.0000, 287),
	(231, 'Fukiko', 'Ogisu', 'J', 'Buyer', 5, 274, '2002-02-05 00:00:00.000000', 18300.0000, 17),
	(232, 'Hung-Fu', 'Ting', 'T', 'Production Technician', 7, 108, '2002-02-07 00:00:00.000000', 14000.0000, 220),
	(233, 'Gordon', 'Hee', 'L', 'Buyer', 5, 274, '2002-02-12 00:00:00.000000', 18300.0000, 15),
	(234, 'Kimberly', 'Zimmerman', 'B', 'Production Technician', 7, 64, '2002-02-13 00:00:00.000000', 13500.0000, 266),
	(235, 'Kim', 'Abercrombie', 'B', 'Production Technician', 7, 16, '2002-02-17 00:00:00.000000', 12500.0000, 56),
	(236, 'Sandeep', 'Kaliyath', 'P', 'Production Technician', 7, 51, '2002-02-18 00:00:00.000000', 15000.0000, 234),
	(237, 'Prasanna', 'Samarawickrama', 'E', 'Production Technician', 7, 108, '2002-02-23 00:00:00.000000', 14000.0000, 187),
	(238, 'Frank', 'Pellow', 'S', 'Buyer', 5, 274, '2002-02-24 00:00:00.000000', 18300.0000, 213),
	(239, 'Min', 'Su', 'G', 'Production Technician', 7, 108, '2002-02-25 00:00:00.000000', 14000.0000, 24),
	(240, 'Eric', 'Brown', 'L', 'Production Technician', 7, 51, '2002-02-25 00:00:00.000000', 15000.0000, 67),
	(241, 'Eric', 'Kurjan', 'S', 'Buyer', 5, 274, '2002-02-28 00:00:00.000000', 18300.0000, 207),
	(242, 'Pat', 'Coleman', 'H', 'Janitor', 14, 49, '2002-02-28 00:00:00.000000', 9300.0000, 116),
	(243, 'Maciej', 'Dusza', 'W', 'Production Technician', 7, 18, '2002-03-01 00:00:00.000000', 12500.0000, 83),
	(244, 'Erin', 'Hagens', 'M', 'Buyer', 5, 274, '2002-03-03 00:00:00.000000', 18300.0000, 8),
	(245, 'Patrick', 'Wedge', 'C', 'Production Technician', 7, 64, '2002-03-04 00:00:00.000000', 13500.0000, 7),
	(246, 'Frank', 'Martinez', 'R', 'Production Technician', 7, 51, '2002-03-08 00:00:00.000000', 15000.0000, 290),
	(247, 'Ed', 'Dudenhoefer', 'R', 'Production Technician', 7, 16, '2002-03-08 00:00:00.000000', 12500.0000, 243),
	(248, 'Christopher', 'Hill', 'E', 'Production Technician', 7, 25, '2002-03-11 00:00:00.000000', 13500.0000, 41),
	(249, 'Patrick', 'Cook', 'M', 'Production Technician', 7, 51, '2002-03-15 00:00:00.000000', 15000.0000, 264),
	(250, 'Krishna', 'Sunkammurali', NULL, 'Production Technician', 7, 108, '2002-03-16 00:00:00.000000', 14000.0000, 79),
	(251, 'Lori', 'Penor', 'K', 'Janitor', 14, 49, '2002-03-19 00:00:00.000000', 9300.0000, 124),
	(252, 'Danielle', 'Tiedt', 'C', 'Production Technician', 7, 64, '2002-03-23 00:00:00.000000', 13500.0000, 146),
	(253, 'Sootha', 'Charncherngkha', 'T', 'Quality Assurance Technician', 13, 41, '2002-03-26 00:00:00.000000', 10600.0000, 149),
	(254, 'Michael', 'Zwilling', 'J', 'Production Technician', 7, 18, '2002-03-26 00:00:00.000000', 12500.0000, 76),
	(255, 'Randy', 'Reeves', 'T', 'Production Technician', 7, 18, '2002-03-26 00:00:00.000000', 12500.0000, 84),
	(256, 'John', 'Kane', 'T', 'Production Technician', 7, 25, '2002-03-30 00:00:00.000000', 13500.0000, 69),
	(257, 'Jack', 'Creasey', 'T', 'Production Technician', 7, 51, '2002-04-03 00:00:00.000000', 15000.0000, 265),
	(258, 'Olinda', 'Turner', 'C', 'Production Technician', 7, 108, '2002-04-04 00:00:00.000000', 14000.0000, 33),
	(259, 'Stuart', 'Macrae', 'J', 'Janitor', 14, 49, '2002-04-05 00:00:00.000000', 9300.0000, 205),
	(260, 'Jo', 'Berry', 'L', 'Janitor', 14, 49, '2002-04-07 00:00:00.000000', 9300.0000, 121),
	(261, 'Ben', 'Miller', 'T', 'Buyer', 5, 274, '2002-04-09 00:00:00.000000', 18300.0000, 192),
	(262, 'Tom', 'Vande Velde', 'M', 'Production Technician', 7, 64, '2002-04-10 00:00:00.000000', 13500.0000, 98),
	(263, 'Ovidiu', 'Cracium', 'V', 'Senior Tool Designer', 2, 3, '2003-01-05 00:00:00.000000', 28800.0000, 145),
	(264, 'Annette', 'Hill', 'L', 'Purchasing Assistant', 5, 274, '2003-01-06 00:00:00.000000', 12800.0000, 181),
	(265, 'Janice', 'Galvin', 'M', 'Tool Designer', 2, 263, '2003-01-23 00:00:00.000000', 25000.0000, 200),
	(266, 'Reinout', 'Hillmann', '', 'Purchasing Assistant', 5, 274, '2003-01-25 00:00:00.000000', 12800.0000, 27),
	(267, 'Michael', 'Sullivan', 'I', 'Senior Design Engineer', 1, 3, '2003-01-30 00:00:00.000000', 36100.0000, 217),
	(268, 'Stephen', 'Jiang', 'Y', 'North American Sales Manager', 3, 273, '2003-02-04 00:00:00.000000', 48100.0000, 196),
	(269, 'Wanida', 'Benshoof', 'M', 'Marketing Assistant', 4, 6, '2003-02-07 00:00:00.000000', 13500.0000, 221),
	(270, 'Sharon', 'Salavaria', 'B', 'Design Engineer', 1, 3, '2003-02-18 00:00:00.000000', 32700.0000, 216),
	(271, 'John', 'Wood', 'L', 'Marketing Specialist', 4, 6, '2003-03-10 00:00:00.000000', 14400.0000, 180),
	(272, 'Mary', 'Dempsey', 'A', 'Marketing Assistant', 4, 6, '2003-03-17 00:00:00.000000', 13500.0000, 26),
	(273, 'Brian', 'Welcker', 'S', 'Vice President of Sales', 3, 109, '2003-03-18 00:00:00.000000', 72100.0000, 134),
	(274, 'Sheela', 'Word', 'H', 'Purchasing Manager', 13, 71, '2003-03-28 00:00:00.000000', 30000.0000, 222),
	(275, 'Michael', 'Blythe', 'G', 'Sales Representative', 3, 268, '2003-07-01 00:00:00.000000', 23100.0000, 60),
	(276, 'Linda', 'Mitchell', 'C', 'Sales Representative', 3, 268, '2003-07-01 00:00:00.000000', 23100.0000, 170),
	(277, 'Jillian', 'Carson', NULL, 'Sales Representative', 3, 268, '2003-07-01 00:00:00.000000', 23100.0000, 61),
	(278, 'Garrett', 'Vargas', 'R', 'Sales Representative', 3, 268, '2003-07-01 00:00:00.000000', 23100.0000, 52),
	(279, 'Tsvi', 'Reiter', 'Michael', 'Sales Representative', 3, 268, '2003-07-01 00:00:00.000000', 23100.0000, 154),
	(280, 'Pamela', 'Ansman-Wolfe', 'O', 'Sales Representative', 3, 268, '2003-07-01 00:00:00.000000', 23100.0000, 179),
	(281, 'Shu', 'Ito', 'K', 'Sales Representative', 3, 268, '2003-07-01 00:00:00.000000', 23100.0000, 235),
	(282, 'Jose', 'Saraiva', 'Edvaldo', 'Sales Representative', 3, 268, '2003-07-01 00:00:00.000000', 23100.0000, 178),
	(283, 'David', 'Campbell', 'R', 'Sales Representative', 3, 268, '2003-07-01 00:00:00.000000', 23100.0000, 13),
	(284, 'Amy', 'Alberts', 'E', 'European Sales Manager', 3, 273, '2004-05-18 00:00:00.000000', 48100.0000, 202),
	(285, 'Jae', 'Pak', 'B', 'Sales Representative', 3, 284, '2004-07-01 00:00:00.000000', 23100.0000, 54),
	(286, 'Ranjit', 'Varkey Chudukatil', 'R', 'Sales Representative', 3, 284, '2004-07-01 00:00:00.000000', 23100.0000, 38),
	(287, 'Tete', 'Mensa-Annan', 'A', 'Sales Representative', 3, 268, '2004-11-01 00:00:00.000000', 23100.0000, 53),
	(288, 'Syed', 'Abbas', 'E', 'Pacific Sales Manager', 3, 273, '2005-04-15 00:00:00.000000', 48100.0000, 49),
	(289, 'Rachel', 'Valdez', 'B', 'Sales Representative', 3, 284, '2005-07-01 00:00:00.000000', 23100.0000, 37),
	(290, 'Lynn', 'Tsoflias', '', 'Sales Representative', 3, 288, '2005-07-01 00:00:00.000000', 23100.0000, 153),
	(291, 'Svetlin', 'Nakov', 'Ivanov', 'Independent Software Development  Consultant', 6, NULL, '2005-03-01 00:00:00.000000', 48000.0000, 291),
	(292, 'Martin', 'Kulov', NULL, 'Independent .NET Consultant', 6, NULL, '2005-03-01 00:00:00.000000', 48000.0000, 291),
	(293, 'George', 'Denchev', NULL, 'Independent Java Consultant', 6, NULL, '2005-03-01 00:00:00.000000', 48000.0000, 291);
[/input]
[output]
Rob
Walters
Senior Tool Designer
Thierry
D'Hers
Tool Designer
JoLynn
Dobney
Production Supervisor
Taylor
Maxwell
Production Supervisor
Jo
Brown
Production Supervisor
John
Campbell
Production Supervisor
Peter
Krebs
Production Control Manager
Zheng
Mu
Production Supervisor
Paula
Barreto de Mattos
Human Resources Manager
Jinghao
Liu
Production Supervisor
Peng
Wu
Quality Assurance Supervisor
A. Scott
Wright
Master Scheduler
Christian
Kleinerman
Maintenance Supervisor
Reuben
D'sa
Production Supervisor
Cristian
Petculescu
Production Supervisor
Janaina
Bueno
Application Specialist
Kok-Ho
Loh
Production Supervisor
David
Hamilton
Production Supervisor
Dan
Bacon
Application Specialist
Eric
Gubbels
Production Supervisor
Jeff
Hay
Production Supervisor
Cynthia
Randall
Production Supervisor
Yuhong
Li
Production Supervisor
Ramesh
Meyyappan
Application Specialist
Shane
Kim
Production Supervisor
Michael
Ray
Production Supervisor
Karen
Berg
Application Specialist
Barbara
Moreland
Accountant
Katie
McAskill-White
Production Supervisor
Jack
Richins
Production Supervisor
Andrew
Hill
Production Supervisor
Lori
Kane
Production Supervisor
Hazem
Abolrous
Quality Assurance Manager
Brenda
Diaz
Production Supervisor
Mike
Seamans
Accountant
Gary
Altman
Facilities Manager
Ovidiu
Cracium
Senior Tool Designer
Janice
Galvin
Tool Designer
Sheela
Word
Purchasing Manager
Michael
Blythe
Sales Representative
Linda
Mitchell
Sales Representative
Jillian
Carson
Sales Representative
Garrett
Vargas
Sales Representative
Tsvi
Reiter
Sales Representative
Pamela
Ansman-Wolfe
Sales Representative
Shu
Ito
Sales Representative
Jose
Saraiva
Sales Representative
David
Campbell
Sales Representative
Jae
Pak
Sales Representative
Ranjit
Varkey Chudukatil
Sales Representative
Tete
Mensa-Annan
Sales Representative
Rachel
Valdez
Sales Representative
Lynn
Tsoflias
Sales Representative
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS `employees` (
  `employee_id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `job_title` varchar(50) NOT NULL,
  `department_id` int(10) NOT NULL,
  `manager_id` int(10) DEFAULT NULL,
  `hire_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `salary` decimal(19,4) NOT NULL,
  `address_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, '1998-07-31 00:00:00.000000', 22500.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, '1999-02-26 00:00:00.000000', 23500.0000, 102),
	(3, 'Roberto', 'Tamburello', NULL, 'Engineering Manager', 12, '1999-12-12 00:00:00.000000', 20000.0000, 193),
	(4, 'Rob', 'Walters', NULL, 'Senior Tool Designer', 2, '2000-01-05 00:00:00.000000', 30000.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, '2000-01-11 00:00:00.000000', 25000.0000, 40);
[/input]
[output]
Guy
Gilbert
Production Technician
Kevin
Brown
Marketing Assistant
Roberto
Tamburello
Engineering Manager
Rob
Walters
Senior Tool Designer
Thierry
D'Hers
Tool Designer
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS `employees` (
  `employee_id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `job_title` varchar(50) NOT NULL,
  `department_id` int(10) NOT NULL,
  `manager_id` int(10) DEFAULT NULL,
  `hire_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `salary` decimal(19,4) NOT NULL,
  `address_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, '1998-07-31 00:00:00.000000', 12500.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, '1999-02-26 00:00:00.000000', 13500.0000, 102),
	(3, 'Roberto', 'Tamburello', NULL, 'Engineering Manager', 12, '1999-12-12 00:00:00.000000', 20000.0000, 193),
	(4, 'Rob', 'Walters', NULL, 'Senior Tool Designer', 2, '2000-01-05 00:00:00.000000', 29800.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, '2000-01-11 00:00:00.000000', 25000.0000, 40);
[/input]
[output]
Roberto
Tamburello
Engineering Manager
Rob
Walters
Senior Tool Designer
Thierry
D'Hers
Tool Designer
[/output]
[/test]
[test]
[input]
drop table if exists employees;
CREATE TABLE IF NOT EXISTS `employees` (
  `employee_id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `job_title` varchar(50) NOT NULL,
  `department_id` int(10) NOT NULL,
  `manager_id` int(10) DEFAULT NULL,
  `hire_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `salary` decimal(19,4) NOT NULL,
  `address_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, '1998-07-31 00:00:00.000000', 125000.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, '1999-02-26 00:00:00.000000', 30000.0000, 102),
	(3, 'Roberto', 'Tamburello', NULL, 'Engineering Manager', 12, '1999-12-12 00:00:00.000000', 43300.0000, 193),
	(4, 'Rob', 'Walters', NULL, 'Senior Tool Designer', 2, '2000-01-05 00:00:00.000000', 29800.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, '2000-01-11 00:00:00.000000', 25000.0000, 40), 
	(6, 'David', 'Bradley', 'M', 'Marketing Manager', 5, '2000-01-20 00:00:00.000000', 23500.0000, 199),
	(7, 'Barry', 'Johnson', 'K', 'Production Technician', 185, '2000-02-07 00:00:00.000000', 27500.0000, 285);
[/input]
[output]
Kevin
Brown
Marketing Assistant
Rob
Walters
Senior Tool Designer
Thierry
D'Hers
Tool Designer
David
Bradley
Marketing Manager
Barry
Johnson
Production Technician
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
