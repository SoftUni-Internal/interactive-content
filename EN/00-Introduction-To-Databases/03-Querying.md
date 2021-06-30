# Section Three
[slide hideTitle]
# Querying 

And now we need to do some data extraction. 

**Note** that the **example results** from this section use a fresh database. 

It is **highly recommended** that you **clear** the **database** that has been **manipulated** by the **previous problems** from the **DML section** and **insert again** the **dataset** you have been given, to ensure **maximum consistency** with the **examples** given in this section.

[/slide]


[slide hideTitle]
# Problem: Cars
[code-task title="Cars" taskId="java-db-and-MySQL-exam-cars" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
Extract the info about all the cars. 

**Order** the results by **car's id**.

Required Columns:

- "**make**"
- "**model**"
- "**condition**"

## Example

| **make** |**model** |**condition** |
| --- | --- |--- | 
|Land Rover|	Range Rover|	A|
|GMC	|Sierra 3500	|A|
|Infiniti	|IPL G	|B|
|…|	…	|…|
|Ford	|E250	|C|
|Infiniti	|EX	|C|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
Land Rover
Range Rover
A
GMC
Sierra 3500
A
Infiniti
IPL G
B
Pontiac
Grand Prix
C
Volkswagen
Touareg
B
Pontiac
Grand Prix
B
BMW
745
C
Chevrolet
S10
C
Toyota
Yaris
B
Volkswagen
Passat
C
Ford
Crown Victoria
A
Mitsubishi
Diamante
C
Mercedes-Benz
CL-Class
B
Pontiac
Trans Sport
B
Chevrolet
Camaro
B
Nissan
Pathfinder
C
Ford
Escort
A
Infiniti
G35
A
Mercedes-Benz
CL-Class
B
Chevrolet
Aveo
C
Volkswagen
Golf
A
Hyundai
Tiburon
B
Maserati
GranTurismo
B
Chevrolet
Corvette
C
Isuzu
Rodeo Sport
A
Volkswagen
Jetta
C
Aston Martin
Vantage
C
Nissan
Altima
C
Mitsubishi
Galant
A
Suzuki
Daewoo Magnus
A
Mazda
B-Series Plus
B
Chevrolet
Astro
C
Pontiac
GTO
A
Volkswagen
Golf
C
Subaru
Forester
A
Mitsubishi
Pajero
B
Mitsubishi
Eclipse
B
Lincoln
Town Car
C
Kia
Spectra
A
Honda
Odyssey
B
Pontiac
Firebird
A
Chevrolet
Suburban 1500
B
Volkswagen
New Beetle
A
Hyundai
Tucson
C
Oldsmobile
Aurora
C
Audi
A4
B
GMC
Savana Cargo Van
A
Dodge
Viper
B
Porsche
Cayenne
B
BMW
7 Series
A
Buick
LeSabre
B
GMC
Yukon
B
Ram
C/V
C
Dodge
Viper
C
Bentley
Continental
A
Jaguar
XJ Series
B
Mercedes-Benz
E-Class
A
Pontiac
Bonneville
B
Porsche
911
C
Honda
Fit
C
Mercury
Cougar
B
Dodge
Dakota
C
Land Rover
LR2
C
Buick
Hearse
A
Subaru
Impreza
A
Pontiac
Fiero
B
Mercedes-Benz
300SL
C
Nissan
Pathfinder
C
Ford
E250
C
Chevrolet
Caprice
C
Lexus
IS-F
B
Toyota
Land Cruiser
B
Honda
Odyssey
A
Suzuki
XL-7
C
Chevrolet
APV
C
GMC
Acadia
A
Lamborghini
Diablo
A
Chevrolet
Silverado 2500
A
Toyota
TundraMax
A
Lincoln
MKT
A
Chevrolet
Silverado 1500
A
Mitsubishi
Pajero
C
Acura
Legend
A
Mitsubishi
Galant
C
Saab
9-5
B
Dodge
Challenger
C
Nissan
Altima
B
Mercedes-Benz
CLS-Class
B
Pontiac
Tempest
C
Mercedes-Benz
G-Class
A
Kia
Amanti
B
Acura
Integra
B
Toyota
Celica
B
Volkswagen
Routan
C
Land Rover
Range Rover Sport
A
Dodge
Viper
A
Ford
Escort
C
Suzuki
X-90
C
Ford
E250
C
Infiniti
EX
C
[/output]
[/test]
[test]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
Land Rover
Range Rover
A
GMC
Sierra 3500
A
Infiniti
IPL G
B
Pontiac
Grand Prix
C
Volkswagen
Touareg
B
Pontiac
Grand Prix
B
BMW
745
C
Chevrolet
S10
C
Toyota
Yaris
B
Volkswagen
Passat
C
Ford
Crown Victoria
A
Mitsubishi
Diamante
C
Mercedes-Benz
CL-Class
B
Pontiac
Trans Sport
B
Chevrolet
Camaro
B
Nissan
Pathfinder
C
Ford
Escort
A
Infiniti
G35
A
Mercedes-Benz
CL-Class
B
Chevrolet
Aveo
C
Volkswagen
Golf
A
Hyundai
Tiburon
B
Maserati
GranTurismo
B
Chevrolet
Corvette
C
Isuzu
Rodeo Sport
A
Volkswagen
Jetta
C
Aston Martin
Vantage
C
Nissan
Altima
C
Mitsubishi
Galant
A
Suzuki
Daewoo Magnus
A
Mazda
B-Series Plus
B
Chevrolet
Astro
C
Pontiac
GTO
A
Volkswagen
Golf
C
Subaru
Forester
A
Mitsubishi
Pajero
B
Mitsubishi
Eclipse
B
Lincoln
Town Car
C
Kia
Spectra
A
Honda
Odyssey
B
Pontiac
Firebird
A
Chevrolet
Suburban 1500
B
Volkswagen
New Beetle
A
Hyundai
Tucson
C
Oldsmobile
Aurora
C
Audi
A4
B
GMC
Savana Cargo Van
A
Dodge
Viper
B
Porsche
Cayenne
B
BMW
7 Series
A
Buick
LeSabre
B
GMC
Yukon
B
Ram
C/V
C
Dodge
Viper
C
Bentley
Continental
A
Jaguar
XJ Series
B
Mercedes-Benz
E-Class
A
Pontiac
Bonneville
B
Porsche
911
C
Honda
Fit
C
Mercury
Cougar
B
Dodge
Dakota
C
Land Rover
LR2
C
Buick
Hearse
A
Subaru
Impreza
A
Pontiac
Fiero
B
Mercedes-Benz
300SL
C
Nissan
Pathfinder
C
Ford
E250
C
Chevrolet
Caprice
C
Lexus
IS-F
B
Toyota
Land Cruiser
B
Honda
Odyssey
A
Suzuki
XL-7
C
Chevrolet
APV
C
GMC
Acadia
A
Lamborghini
Diablo
A
Chevrolet
Silverado 2500
A
Toyota
TundraMax
A
Lincoln
MKT
A
Chevrolet
Silverado 1500
A
Mitsubishi
Pajero
C
Acura
Legend
A
Mitsubishi
Galant
C
Saab
9-5
B
Dodge
Challenger
C
Nissan
Altima
B
Mercedes-Benz
CLS-Class
B
Pontiac
Tempest
C
Mercedes-Benz
G-Class
A
Kia
Amanti
B
Acura
Integra
B
Toyota
Celica
B
Volkswagen
Routan
C
Land Rover
Range Rover Sport
A
Dodge
Viper
A
Ford
Escort
C
Suzuki
X-90
C
Ford
E250
C
Infiniti
EX
C
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Drivers and Cars
[code-task title="Drivers and Cars" taskId="java-db-and-MySQL-exam-drivers-and-cars" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
Now, we need a more detailed information about drivers and their cars.

Select all drivers and cars that they drive. 

Extract the driver's **first** and **last** name from the drivers table and the **make**, the **model** and the **mileage** from the cars table. 

**Order** the result by the **mileage** in **descending** order, then by the **first** name alphabetically. 

**Skip** all cars that have **NULL** as a value for the **mileage**.

Required Columns

- "**first_name**"
- "**last_name**"
- "**make**"
- "**model**"
- "**mileage**"


## Example

| **first_nam** |**last_name** |**make** |**model** |**mileage** |
| --- | --- |--- | --- | --- | 
|Edna|	Heatley|	Pontiac|	Trans Sport|	967608|
|Delaney|	Stove|	Pontiac|	Fiero|	959778|
|Cristi|	Ravenshear|	Maserati|	GranTurismo	|954606|
|…|	…|	…|	…	|…|
|Ailina	|Sebyer|	Mercedes-Benz|	G-Class|	6482|
|Gerhard|	Alderson|	Mercedes-Benz	|G-Class|	6482|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
Edna
Heatley
Pontiac
Trans Sport
967608
Delaney
Stove
Pontiac
Fiero
959778
Cristi
Ravenshear
Maserati
GranTurismo
954606
Berenice
Liddiatt
Chevrolet
Astro
939056
Boyce
Briddock
Porsche
911
929285
Alexander
Jubb
Mitsubishi
Pajero
921496
Happy
Bezant
Pontiac
Tempest
890015
Carlotta
Dykas
GMC
Savana Cargo Van
845679
Kingsly
Ianiello
GMC
Savana Cargo Van
845679
Crosby
Godlee
Honda
Fit
828960
Philis
Treswell
Honda
Fit
828960
Hally
Barthelmes
Ford
E250
776506
Carina
Vanyatin
Subaru
Impreza
720375
Carina
Vanyatin
Lincoln
MKT
711184
Judye
Albrooke
Lincoln
MKT
711184
Saxon
Veldman
Toyota
Celica
707042
Neill
Woof
Hyundai
Tiburon
705696
Ilaire
Tomaszewicz
Pontiac
Grand Prix
703642
Kingsly
Ianiello
Pontiac
Grand Prix
703642
Viki
Oneal
Pontiac
Grand Prix
703642
Louie
Vogel
BMW
745
696455
Berenice
Liddiatt
Volkswagen
Golf
693120
Dick
Eton
Volkswagen
Golf
693120
Edna
Heatley
Volkswagen
Golf
693120
Joe
Waine
Pontiac
Grand Prix
676236
Louie
Vogel
Pontiac
Grand Prix
676236
Ailina
Sebyer
Lamborghini
Diablo
653733
Dell
Willoughey
Lamborghini
Diablo
653733
Janka
Loblie
Suzuki
Daewoo Magnus
648855
Louie
Vogel
Suzuki
Daewoo Magnus
648855
Berenice
Liddiatt
Isuzu
Rodeo Sport
619414
Neill
Woof
Isuzu
Rodeo Sport
619414
Adolpho
Wainscot
Nissan
Pathfinder
613247
Aurilia
McCready
GMC
Yukon
598861
Joe
Waine
Lexus
IS-F
573601
Ailina
Sebyer
Toyota
Land Cruiser
552697
Heidie
Blacksell
Toyota
Land Cruiser
552697
Saxon
Veldman
Toyota
Land Cruiser
552697
Cullan
Geram
Infiniti
EX
472668
Germana
Emburey
Infiniti
EX
472668
Germana
Emburey
Chevrolet
Aveo
443680
Lenore
Romera
Chevrolet
Aveo
443680
Leonhard
Tukely
Chevrolet
Aveo
443680
Ardith
Kienlein
Mitsubishi
Eclipse
420053
Germana
Emburey
Mitsubishi
Galant
409176
Saxon
Veldman
Mitsubishi
Galant
409176
Crosby
Godlee
Dodge
Viper
405410
Roddie
Gribben
Dodge
Viper
405410
Susy
Borrel
Dodge
Viper
405410
Roddie
Gribben
Audi
A4
386826
Enrichetta
Jeremiah
Porsche
Cayenne
384812
Enrichetta
Jeremiah
Nissan
Altima
383760
Leonhard
Tukely
Nissan
Altima
383760
Felice
Bartol
Chevrolet
Camaro
376334
Ailina
Sebyer
Volkswagen
Jetta
345452
Krystal
Cuckson
Ford
E250
310386
Genna
Jaquet
Volkswagen
Touareg
300933
Jaynell
Kidson
Volkswagen
Touareg
300933
Lexie
Salasar
Volkswagen
Touareg
300933
Roddie
Gribben
Volkswagen
Touareg
300933
Delaney
Stove
Kia
Spectra
296475
Leanna
Olensby
Mitsubishi
Pajero
289806
Crosby
Godlee
Chevrolet
Silverado 1500
271471
Jaynell
Kidson
Chevrolet
Silverado 1500
271471
Hally
Barthelmes
Nissan
Pathfinder
257726
Jaynell
Kidson
Nissan
Pathfinder
257726
Harmony
Beincken
Bentley
Continental
239846
Jaynell
Kidson
Bentley
Continental
239846
Louie
Vogel
Bentley
Continental
239846
Felice
Bartol
Chevrolet
Caprice
228425
Heidie
Blacksell
Chevrolet
Caprice
228425
Lexie
Salasar
Dodge
Challenger
206143
Dick
Eton
Pontiac
GTO
197528
Lenore
Romera
Pontiac
GTO
197528
Neill
Woof
Mercedes-Benz
E-Class
189389
Philip
Penwarden
Mercedes-Benz
E-Class
189389
Jerrie
Myles
Jaguar
XJ Series
172247
Anthe
Larne
Lincoln
Town Car
117482
Boyce
Briddock
Lincoln
Town Car
117482
Happy
Bezant
Mercedes-Benz
300SL
101920
Leanna
Olensby
Mercedes-Benz
300SL
101920
Cullan
Geram
Saab
9-5
78600
Judye
Albrooke
Saab
9-5
78600
Enrichetta
Jeremiah
Volkswagen
Passat
62139
Saxon
Veldman
Volkswagen
Passat
62139
Dominga
Cavy
Chevrolet
Suburban 1500
57014
Gerhard
Alderson
Chevrolet
Suburban 1500
57014
Saxon
Veldman
Chevrolet
Suburban 1500
57014
Janka
Loblie
Volkswagen
Routan
47414
Viki
Oneal
Volkswagen
Routan
47414
Ardith
Kienlein
Mitsubishi
Diamante
35697
Ailina
Sebyer
Mercedes-Benz
G-Class
6482
Gerhard
Alderson
Mercedes-Benz
G-Class
6482
[/output]
[/test]
[test]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
Edna
Heatley
Pontiac
Trans Sport
967608
Delaney
Stove
Pontiac
Fiero
959778
Cristi
Ravenshear
Maserati
GranTurismo
954606
Berenice
Liddiatt
Chevrolet
Astro
939056
Boyce
Briddock
Porsche
911
929285
Alexander
Jubb
Mitsubishi
Pajero
921496
Happy
Bezant
Pontiac
Tempest
890015
Carlotta
Dykas
GMC
Savana Cargo Van
845679
Kingsly
Ianiello
GMC
Savana Cargo Van
845679
Crosby
Godlee
Honda
Fit
828960
Philis
Treswell
Honda
Fit
828960
Hally
Barthelmes
Ford
E250
776506
Carina
Vanyatin
Subaru
Impreza
720375
Carina
Vanyatin
Lincoln
MKT
711184
Judye
Albrooke
Lincoln
MKT
711184
Saxon
Veldman
Toyota
Celica
707042
Neill
Woof
Hyundai
Tiburon
705696
Ilaire
Tomaszewicz
Pontiac
Grand Prix
703642
Kingsly
Ianiello
Pontiac
Grand Prix
703642
Viki
Oneal
Pontiac
Grand Prix
703642
Louie
Vogel
BMW
745
696455
Berenice
Liddiatt
Volkswagen
Golf
693120
Dick
Eton
Volkswagen
Golf
693120
Edna
Heatley
Volkswagen
Golf
693120
Joe
Waine
Pontiac
Grand Prix
676236
Louie
Vogel
Pontiac
Grand Prix
676236
Ailina
Sebyer
Lamborghini
Diablo
653733
Dell
Willoughey
Lamborghini
Diablo
653733
Janka
Loblie
Suzuki
Daewoo Magnus
648855
Louie
Vogel
Suzuki
Daewoo Magnus
648855
Berenice
Liddiatt
Isuzu
Rodeo Sport
619414
Neill
Woof
Isuzu
Rodeo Sport
619414
Adolpho
Wainscot
Nissan
Pathfinder
613247
Aurilia
McCready
GMC
Yukon
598861
Joe
Waine
Lexus
IS-F
573601
Ailina
Sebyer
Toyota
Land Cruiser
552697
Heidie
Blacksell
Toyota
Land Cruiser
552697
Saxon
Veldman
Toyota
Land Cruiser
552697
Cullan
Geram
Infiniti
EX
472668
Germana
Emburey
Infiniti
EX
472668
Germana
Emburey
Chevrolet
Aveo
443680
Lenore
Romera
Chevrolet
Aveo
443680
Leonhard
Tukely
Chevrolet
Aveo
443680
Ardith
Kienlein
Mitsubishi
Eclipse
420053
Germana
Emburey
Mitsubishi
Galant
409176
Saxon
Veldman
Mitsubishi
Galant
409176
Crosby
Godlee
Dodge
Viper
405410
Roddie
Gribben
Dodge
Viper
405410
Susy
Borrel
Dodge
Viper
405410
Roddie
Gribben
Audi
A4
386826
Enrichetta
Jeremiah
Porsche
Cayenne
384812
Enrichetta
Jeremiah
Nissan
Altima
383760
Leonhard
Tukely
Nissan
Altima
383760
Felice
Bartol
Chevrolet
Camaro
376334
Ailina
Sebyer
Volkswagen
Jetta
345452
Krystal
Cuckson
Ford
E250
310386
Genna
Jaquet
Volkswagen
Touareg
300933
Jaynell
Kidson
Volkswagen
Touareg
300933
Lexie
Salasar
Volkswagen
Touareg
300933
Roddie
Gribben
Volkswagen
Touareg
300933
Delaney
Stove
Kia
Spectra
296475
Leanna
Olensby
Mitsubishi
Pajero
289806
Crosby
Godlee
Chevrolet
Silverado 1500
271471
Jaynell
Kidson
Chevrolet
Silverado 1500
271471
Hally
Barthelmes
Nissan
Pathfinder
257726
Jaynell
Kidson
Nissan
Pathfinder
257726
Harmony
Beincken
Bentley
Continental
239846
Jaynell
Kidson
Bentley
Continental
239846
Louie
Vogel
Bentley
Continental
239846
Felice
Bartol
Chevrolet
Caprice
228425
Heidie
Blacksell
Chevrolet
Caprice
228425
Lexie
Salasar
Dodge
Challenger
206143
Dick
Eton
Pontiac
GTO
197528
Lenore
Romera
Pontiac
GTO
197528
Neill
Woof
Mercedes-Benz
E-Class
189389
Philip
Penwarden
Mercedes-Benz
E-Class
189389
Jerrie
Myles
Jaguar
XJ Series
172247
Anthe
Larne
Lincoln
Town Car
117482
Boyce
Briddock
Lincoln
Town Car
117482
Happy
Bezant
Mercedes-Benz
300SL
101920
Leanna
Olensby
Mercedes-Benz
300SL
101920
Cullan
Geram
Saab
9-5
78600
Judye
Albrooke
Saab
9-5
78600
Enrichetta
Jeremiah
Volkswagen
Passat
62139
Saxon
Veldman
Volkswagen
Passat
62139
Dominga
Cavy
Chevrolet
Suburban 1500
57014
Gerhard
Alderson
Chevrolet
Suburban 1500
57014
Saxon
Veldman
Chevrolet
Suburban 1500
57014
Janka
Loblie
Volkswagen
Routan
47414
Viki
Oneal
Volkswagen
Routan
47414
Ardith
Kienlein
Mitsubishi
Diamante
35697
Ailina
Sebyer
Mercedes-Benz
G-Class
6482
Gerhard
Alderson
Mercedes-Benz
G-Class
6482
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Number of courses for each car
[code-task title="Number of courses for each car" taskId="java-db-and-MySQL-exam-number-of-courses-for-each-car" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
Extract from the database all the **cars** and the **count** of their courses. 

Also display the **average bill** of each course by the **car**, rounded to the second digit.

**Order** the results **descending** by the **count** of **courses**, then by the car’s id. 

**Skip** the cars with **exactly 2** courses.

Required Columns
- "**car_id**"
- "**make**"
- "**mileage**"
- "**count_of_courses**"
- "**avg_bill**"


## Example

| **car_id** |**make** |**mileage** |**count_of_courses** |**avg_bill** |
| --- | --- |--- | --- | --- | 
|13|Mercedes-Benz|	846549|	4	|26.95|
|80|Lincoln|	711184|	4	|22.39|
|1|Land Rover|	550259|	3	|14.71|
|	|…|	…	|…	|…|
|89|Pontiac|	890015|	0	|NULL|
|90|Mercedes-Benz|	6482|	0	|NULL|
|95|Land Rover|	176967|	0	|NULL|



[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
13
Mercedes-Benz
846549
4
26.95
80
Lincoln
711184
4
22.39
1
Land Rover
550259
3
14.71
8
Chevrolet
529397
3
23.20
25
Isuzu
619414
3
34.63
37
Mitsubishi
420053
3
32.61
44
Hyundai
625603
3
27.67
61
Mercury
113831
3
32.36
76
GMC
127222
3
25.85
79
Toyota
649423
3
35.53
87
Nissan
359239
3
29.73
2
GMC
275538
1
31.31
4
Pontiac
703642
1
44.72
6
Pontiac
676236
1
27.03
15
Chevrolet
376334
1
18.93
20
Chevrolet
443680
1
32.51
22
Hyundai
705696
1
40.49
29
Mitsubishi
135648
1
46.92
30
Suzuki
648855
1
43.19
31
Mazda
353195
1
34.22
32
Chevrolet
939056
1
44.77
35
Subaru
115948
1
12.46
36
Mitsubishi
921496
1
30.07
38
Lincoln
117482
1
35.42
39
Kia
296475
1
31.39
43
Volkswagen
499839
1
49.88
45
Oldsmobile

1
45.97
46
Audi
386826
1
19.56
47
GMC
845679
1
30.46
48
Dodge

1
34.77
49
Porsche
384812
1
37.56
50
BMW
444510
1
30.46
52
GMC
598861
1
16.01
54
Dodge
112908
1
15.88
55
Bentley
239846
1
46.57
59
Porsche
929285
1
42.55
60
Honda
828960
1
23.86
62
Dodge
834870
1
28.72
63
Land Rover
501999
1
15.56
65
Subaru
720375
1
11.59
66
Pontiac
959778
1
17.27
69
Ford
776506
1
49.84
70
Chevrolet
228425
1
26.44
72
Toyota
552697
1
45.93
74
Suzuki
836605
1
45.83
75
Chevrolet
451469
1
36.22
78
Chevrolet
680803
1
21.93
82
Mitsubishi
289806
1
31.57
84
Mitsubishi
409176
1
21.41
85
Saab
78600
1
31.51
91
Kia
910099
1
33.81
92
Acura
767942
1
24.24
93
Toyota
707042
1
43.27
94
Volkswagen
47414
1
32.56
97
Ford
470950
1
47.43
98
Suzuki
82451
1
29.14
99
Ford
310386
1
49.12
100
Infiniti
472668
1
21.56
3
Infiniti

0

7
BMW
696455
0

9
Toyota
832895
0

10
Volkswagen
62139
0

11
Ford
892185
0

12
Mitsubishi
35697
0

16
Nissan
613247
0

17
Ford
786420
0

18
Infiniti

0

19
Mercedes-Benz
634834
0

21
Volkswagen
693120
0

23
Maserati
954606
0

24
Chevrolet
149039
0

26
Volkswagen
345452
0

27
Aston Martin
890984
0

28
Nissan
383760
0

34
Volkswagen
846697
0

40
Honda
509682
0

41
Pontiac
502448
0

42
Chevrolet
57014
0

51
Buick
415144
0

53
Ram

0

56
Jaguar
172247
0

57
Mercedes-Benz
189389
0

58
Pontiac
347829
0

68
Nissan
257726
0

71
Lexus
573601
0

73
Honda
834619
0

81
Chevrolet
271471
0

86
Dodge
206143
0

89
Pontiac
890015
0

90
Mercedes-Benz
6482
0

95
Land Rover
176967
0
[/output]
[/test]
[test]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
13
Mercedes-Benz
846549
4
26.95
80
Lincoln
711184
4
22.39
1
Land Rover
550259
3
14.71
8
Chevrolet
529397
3
23.20
25
Isuzu
619414
3
34.63
37
Mitsubishi
420053
3
32.61
44
Hyundai
625603
3
27.67
61
Mercury
113831
3
32.36
76
GMC
127222
3
25.85
79
Toyota
649423
3
35.53
87
Nissan
359239
3
29.73
2
GMC
275538
1
31.31
4
Pontiac
703642
1
44.72
6
Pontiac
676236
1
27.03
15
Chevrolet
376334
1
18.93
20
Chevrolet
443680
1
32.51
22
Hyundai
705696
1
40.49
29
Mitsubishi
135648
1
46.92
30
Suzuki
648855
1
43.19
31
Mazda
353195
1
34.22
32
Chevrolet
939056
1
44.77
35
Subaru
115948
1
12.46
36
Mitsubishi
921496
1
30.07
38
Lincoln
117482
1
35.42
39
Kia
296475
1
31.39
43
Volkswagen
499839
1
49.88
45
Oldsmobile

1
45.97
46
Audi
386826
1
19.56
47
GMC
845679
1
30.46
48
Dodge

1
34.77
49
Porsche
384812
1
37.56
50
BMW
444510
1
30.46
52
GMC
598861
1
16.01
54
Dodge
112908
1
15.88
55
Bentley
239846
1
46.57
59
Porsche
929285
1
42.55
60
Honda
828960
1
23.86
62
Dodge
834870
1
28.72
63
Land Rover
501999
1
15.56
65
Subaru
720375
1
11.59
66
Pontiac
959778
1
17.27
69
Ford
776506
1
49.84
70
Chevrolet
228425
1
26.44
72
Toyota
552697
1
45.93
74
Suzuki
836605
1
45.83
75
Chevrolet
451469
1
36.22
78
Chevrolet
680803
1
21.93
82
Mitsubishi
289806
1
31.57
84
Mitsubishi
409176
1
21.41
85
Saab
78600
1
31.51
91
Kia
910099
1
33.81
92
Acura
767942
1
24.24
93
Toyota
707042
1
43.27
94
Volkswagen
47414
1
32.56
97
Ford
470950
1
47.43
98
Suzuki
82451
1
29.14
99
Ford
310386
1
49.12
100
Infiniti
472668
1
21.56
3
Infiniti

0

7
BMW
696455
0

9
Toyota
832895
0

10
Volkswagen
62139
0

11
Ford
892185
0

12
Mitsubishi
35697
0

16
Nissan
613247
0

17
Ford
786420
0

18
Infiniti

0

19
Mercedes-Benz
634834
0

21
Volkswagen
693120
0

23
Maserati
954606
0

24
Chevrolet
149039
0

26
Volkswagen
345452
0

27
Aston Martin
890984
0

28
Nissan
383760
0

34
Volkswagen
846697
0

40
Honda
509682
0

41
Pontiac
502448
0

42
Chevrolet
57014
0

51
Buick
415144
0

53
Ram

0

56
Jaguar
172247
0

57
Mercedes-Benz
189389
0

58
Pontiac
347829
0

68
Nissan
257726
0

71
Lexus
573601
0

73
Honda
834619
0

81
Chevrolet
271471
0

86
Dodge
206143
0

89
Pontiac
890015
0

90
Mercedes-Benz
6482
0

95
Land Rover
176967
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Regular clients
[code-task title="Regular clients" taskId="java-db-and-MySQL-exam-regular-clients" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
Extract the **regular clients**, **who have ridden in more than one car**. 

The **second letter** of the customer's **full name** must be '**a**'. 

Select the **full name**, the **count** of **cars** that he ridden and total **sum** of all courses.

**Order** clients by their "**full_name**".

Required Columns

- "**full_name**"
- "**count_of_cars**"
- "**total_sum**"


## Example

| **full_name** |**count_of_cars** |**total_sum** |
| --- | --- |--- | 
|Haven Seaton	|4	|129.65|
|Jacquelynn Plackstone|	2	|64.36|
|Kaylee Coushe|	4	|135.71|
|Lanita Crockatt|	2|	84.12|
|Parker McGeorge	|2|	62.58|
|Randie Cridge|	5	|154.65|
|Raynor Dobbison|	2	|66.77|



[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
Haven Seaton
4
129.65
Jacquelynn Plackstone
2
64.36
Kaylee Coushe
4
135.71
Lanita Crockatt
2
84.12
Parker McGeorge
2
62.58
Randie Cridge
5
154.65
Raynor Dobbison
2
66.77
[/output]
[/test]
[test]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
Haven Seaton
4
129.65
Jacquelynn Plackstone
2
64.36
Kaylee Coushe
4
135.71
Lanita Crockatt
2
84.12
Parker McGeorge
2
62.58
Randie Cridge
5
154.65
Raynor Dobbison
2
66.77
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Full information of courses
[code-task title="Full information of courses" taskId="java-db-and-MySQL-exam-full-information-of-courses" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[task-description]
# Description
The headquarters want us to make a query that shows the complete information about all courses in the database. 

The information that they need is the **address**, if the course is made in the **Day** (between **6** and **20** (inclusive both)) or in the **Night** (between **21** and **5** (inclusive both)), the **bill** of the course, the **full name** of the **client**, the car **maker**, the **model** and the **name** of the **category**.

Order the results by **course id**.


Required Columns
- "**name**" (address)
- "**day_time**"
- "**bill**"
- "**full_name**" (client)
- "**make**"
- "**model**"
- "**category_name**" (category)


## Example

| **name** |**day_time** |**bill** | **full_name**| **make**|**model** | **category_name**|
| --- | --- |--- | --- |--- |--- |--- |
|2 Del Mar Park|	Night|	46.92	|Randie Cridge|	Mitsubishi|	Galant|	Hatchback|
|24402 Warner Place|	Day	|14.47|	Henrik Sivyer	|Lincoln	|MKT|	Hatchback|
|80678 Green Ridge Court|	Day|	44.01|	Randie Cridge|	Isuzu	|Rodeo Sport|	Cabrio|
|…|	…|	…	|…|	…|	…	|…|
|34 Briar Crest Crossing|	Night	|14.86|	Georges Lanston	|Isuzu	|Rodeo Sport	|Cabrio|
|86462 Buena Vista Point|	Day	|16.06|	Jefferson Montacute	|Buick|	Hearse|	Coupe|



[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
2 Del Mar Park
Night
46.92
Randie Cridge
Mitsubishi
Galant
Hatchback
24402 Warner Place
Day
14.47
Henrik Sivyer
Lincoln
MKT
Hatchback
80678 Green Ridge Court
Day
44.01
Randie Cridge
Isuzu
Rodeo Sport
Cabrio
700 Monterey Avenue
Night
24.24
Kelcy Cody
Acura
Integra
Hatchback
0 Mariners Cove Circle
Day
45.83
Alano Georgot
Suzuki
XL-7
SUV
2061 Meadow Vale Point
Night
18.23
Pieter Curphey
Land Rover
Range Rover
Cabrio
9590 Briar Crest Street
Night
21.93
Janna Kellert
Chevrolet
Silverado 2500
Hatchback
1275 Pine View Court
Night
21.56
Nicolai Seaborn
Infiniti
EX
Cabrio
17 Huxley Pass
Night
40.49
Lanita Crockatt
Hyundai
Tiburon
Hatchback
67636 Tennessee Point
Night
15.56
Jeralee Tue
Land Rover
LR2
Sedan
24402 Warner Place
Day
29.98
Kaylee Coushe
Acura
Legend
Coupe
385 Rieder Center
Day
43.27
Gibbie Liggens
Toyota
Celica
Hatchback
84320 Lotheville Way
Night
32.36
Nicolai Seaborn
Lincoln
MKT
Hatchback
9590 Briar Crest Street
Day
33.05
Findley Iacoboni
Mercedes-Benz
CL-Class
Hatchback
66 Thompson Drive
Night
37.56
Kaylee Coushe
Porsche
Cayenne
Coupe
57659 Karstens Junction
Night
17.60
Mady Viccary
Mitsubishi
Eclipse
Hatchback
84320 Lotheville Way
Night
30.46
Lorilee Kryszkiecicz
GMC
Savana Cargo Van
Coupe
385 Rieder Center
Day
21.54
Gregorius May
Volkswagen
Touareg
Sedan
48738 Thompson Lane
Night
11.36
Kimball Deem
Lamborghini
Diablo
SUV
66 Thompson Drive
Day
44.72
Kimball Deem
Pontiac
Grand Prix
Hatchback
0 Mariners Cove Circle
Day
30.46
Haven Seaton
BMW
7 Series
Cabrio
80678 Green Ridge Court
Night
16.99
Randie Cridge
Pontiac
GTO
Cabrio
6 Hanover Terrace
Day
30.07
Parker McGeorge
Mitsubishi
Pajero
Sedan
2061 Meadow Vale Point
Night
27.03
Ewen MacDearmont
Pontiac
Grand Prix
SUV
361 Caliangt Court
Night
47.11
Jeralee Tue
Pontiac
GTO
Cabrio
67636 Tennessee Point
Night
46.57
Haven Seaton
Bentley
Continental
Hatchback
32975 Hagan Street
Day
31.31
Chaunce Taffe
GMC
Sierra 3500
Sedan
2061 Meadow Vale Point
Day
23.86
Rolland Trevna
Hyundai
Tucson
Hatchback
9590 Briar Crest Street
Day
32.51
Parker McGeorge
Chevrolet
Aveo
SUV
68 Roxbury Court
Night
45.97
Raynor Dobbison
Oldsmobile
Aurora
Cabrio
93124 Comanche Way
Night
26.58
Lorilee Kryszkiecicz
Toyota
TundraMax
Coupe
57659 Karstens Junction
Night
36.22
Jacquelynn Plackstone
Chevrolet
APV
Cabrio
40 Havey Road
Night
17.93
Josi Hammelberg
GMC
Acadia
Coupe
4673 Colorado Road
Day
31.57
Randie Cridge
Mitsubishi
Pajero
SUV
700 Monterey Avenue
Day
38.32
Joyann Garrettson
Lamborghini
Diablo
SUV
24402 Warner Place
Night
35.42
Raymund Clace
Lincoln
Town Car
Hatchback
27803 Morningstar Avenue
Day
15.16
Randie Cridge
Lincoln
MKT
Hatchback
2061 Meadow Vale Point
Day
33.81
Lonny Carnachen
Kia
Amanti
Hatchback
67636 Tennessee Point
Day
14.62
Tisha Patey
Land Rover
Range Rover
Cabrio
40 Havey Road
Day
17.27
Tisha Patey
Pontiac
Fiero
Sedan
214 Esker Trail
Day
25.78
Ursulina Partner
Acura
Legend
Coupe
79 Gina Way
Day
28.72
Lois Leidl
Dodge
Dakota
Coupe
897 Pine View Park
Day
43.19
Kaylee Coushe
Suzuki
Daewoo Magnus
Hatchback
79 Gina Way
Day
29.01
Courtney Gawkes
Pontiac
Trans Sport
Sedan
2 Cascade Lane
Day
36.19
Owen Strivens
Mercury
Cougar
Sedan
385 Rieder Center
Night
31.39
Elysha Maydwell
Kia
Spectra
Hatchback
700 Monterey Avenue
Night
36.61
Haven Seaton
Mitsubishi
Eclipse
Hatchback
79 Gina Way
Day
18.93
Courtnay Devoy
Chevrolet
Camaro
SUV
6638 Thompson Point
Night
31.51
Marsha Cridge
Saab
9-5
Coupe
5 Truax Court
Day
49.12
Jefferson Montacute
Ford
E250
Sedan
67636 Tennessee Point
Day
20.80
Raynor Dobbison
Nissan
Altima
Sedan
77485 Commercial Drive
Day
41.56
Siegfried Simony
Mercedes-Benz
300SL
Sedan
24402 Warner Place
Night
23.86
Zeke Rowston
Honda
Fit
Sedan
35 Kim Road
Day
26.44
Craig Backe
Chevrolet
Caprice
Cabrio
700 Monterey Avenue
Day
27.65
Zeke Rowston
GMC
Acadia
Coupe
79 Gina Way
Night
42.21
Gaye Sillars
Dodge
Viper
Sedan
700 Monterey Avenue
Day
18.95
Jeralee Tue
Mercedes-Benz
CLS-Class
Cabrio
55759 Valley Edge Pass
Night
34.77
Gregorius May
Dodge
Viper
Cabrio
8 Warner Drive
Day
27.25
Rubin Meaddowcroft
Volkswagen
Touareg
Sedan
0 Mariners Cove Circle
Day
27.65
Pierrette Dunmuir
Chevrolet
S10
Coupe
1275 Pine View Court
Day
45.02
Alley Couch
Isuzu
Rodeo Sport
Cabrio
2 Cascade Lane
Day
11.68
Sari Chicotti
Mercedes-Benz
CL-Class
Hatchback
93124 Comanche Way
Day
47.63
Allsun O' Kelleher
Toyota
TundraMax
Coupe
80678 Green Ridge Court
Night
11.59
Lizzie Iscowitz
Subaru
Impreza
Hatchback
84320 Lotheville Way
Day
23.91
Abbey Pedri
Mercedes-Benz
300SL
Sedan
897 Pine View Park
Night
32.71
Georges Lanston
Mercury
Cougar
Sedan
0590 Lawn Hill
Night
49.84
Jens Aitken
Ford
E250
Hatchback
32975 Hagan Street
Night
28.17
Carmel Lendrem
Mercedes-Benz
CL-Class
Hatchback
6 Sachs Way
Day
42.55
Adelle Kurten
Porsche
911
Cabrio
2061 Meadow Vale Point
Day
16.01
Haven Seaton
GMC
Yukon
Coupe
59402 Kim Court
Day
28.93
Jasen Yeldham
Dodge
Viper
Sedan
27803 Morningstar Avenue
Day
47.43
Rubin Meaddowcroft
Ford
Escort
SUV
59 Atwood Alley
Night
14.85
Stanislaus Baggallay
Chevrolet
S10
Coupe
48738 Thompson Lane
Day
34.18
Georges Lanston
Hyundai
Tucson
Hatchback
5 Truax Court
Night
12.46
Jefferson Montacute
Subaru
Forester
Hatchback
6638 Thompson Point
Night
29.14
Gregorius May
Suzuki
X-90
Hatchback
52 Corben Pass
Day
27.10
Mandy Scoggin
Chevrolet
S10
Coupe
9590 Briar Crest Street
Day
32.12
Gregorius May
Pontiac
Trans Sport
Sedan
1275 Pine View Court
Day
31.98
Findley Iacoboni
GMC
Acadia
Coupe
5 Truax Court
Day
32.38
Danny Simoneau
Toyota
TundraMax
Coupe
835 Calypso Place
Day
19.56
Abbey Pedri
Audi
A4
Hatchback
66 Thompson Drive
Day
49.88
Gibbie Liggens
Volkswagen
New Beetle
Coupe
4673 Colorado Road
Day
15.88
Courtnay Devoy
Dodge
Viper
Hatchback
54 3rd Pass
Night
33.49
Gibbie Liggens
Buick
Hearse
Coupe
700 Monterey Avenue
Night
10.23
Courtney Gawkes
Mercedes-Benz
CLS-Class
Cabrio
52 Corben Pass
Night
28.19
Odele Sinncock
Mercury
Cougar
Sedan
86462 Buena Vista Point
Night
11.29
Moyna Bosnell
Land Rover
Range Rover
Cabrio
385 Rieder Center
Day
27.57
Conny Barnwille
Lincoln
MKT
Hatchback
361 Caliangt Court
Day
34.22
Joshuah Duckers
Mazda
B-Series Plus
Sedan
6 Sachs Way
Night
32.56
Lucita Robelet
Volkswagen
Routan
Sedan
4 La Follette Plaza
Day
45.93
Dante Sagerson
Toyota
Land Cruiser
Coupe
2061 Meadow Vale Point
Day
28.14
Jacquelynn Plackstone
Nissan
Altima
Sedan
77485 Commercial Drive
Night
44.77
Stanislaus Baggallay
Chevrolet
Astro
Sedan
67636 Tennessee Point
Day
34.89
Cullan Dogerty
Mercedes-Benz
CL-Class
Hatchback
385 Rieder Center
Day
24.98
Kaylee Coushe
Hyundai
Tucson
Hatchback
897 Pine View Park
Night
43.63
Lanita Crockatt
Mitsubishi
Eclipse
Hatchback
68 Roxbury Court
Night
21.41
Vincents Bould
Mitsubishi
Galant
Cabrio
02 Browning Parkway
Day
40.24
Chaunce Taffe
Nissan
Altima
Sedan
34 Briar Crest Crossing
Night
14.86
Georges Lanston
Isuzu
Rodeo Sport
Cabrio
86462 Buena Vista Point
Day
16.06
Jefferson Montacute
Buick
Hearse
Coupe
[/output]
[/test]
[test]
[input]
CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL
);

CREATE TABLE `clients` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `full_name` VARCHAR(50) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL
);

CREATE TABLE `drivers` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `rating` FLOAT DEFAULT 5.5
);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `make` VARCHAR(20) NOT NULL,
    `model` VARCHAR(20),
    `year` INT NOT NULL,
    `mileage` INT,
    `condition` CHAR(1) NOT NULL, 
    `category_id` INT NOT NULL,

    CONSTRAINT fk_cars_categories 
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)

);

CREATE TABLE `courses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
    `from_address_id` INT NOT NULL,
    `start` DATETIME NOT NULL,
    `car_id` INT NOT NULL,
    `client_id` INT NOT NULL,
    `bill` DECIMAL (10,2) DEFAULT 10,
    CONSTRAINT fk_courses_addresses_from 
    FOREIGN KEY (`from_address_id`) REFERENCES `addresses`(`id`),
    CONSTRAINT fk_courses_cars
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
    CONSTRAINT fk_courses_clients
    FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`)
);

CREATE TABLE `cars_drivers`(
	`car_id` INT NOT NULL,
    `driver_id` INT NOT NULL,
	CONSTRAINT pk_cars_drivers 
    PRIMARY KEY(`car_id`, `driver_id`),
    CONSTRAINT fk_cars_drivers_cars 
    FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`),
     CONSTRAINT fk_cars_drivers_drivers
    FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
);


insert into addresses (`name`) 
values 
('24402 Warner Place'),
('4 La Follette Plaza'),
('700 Monterey Avenue'),
('93124 Comanche Way'),
('57659 Karstens Junction'),
('361 Caliangt Court'),
('88941 Starling Drive'),
('34 Briar Crest Crossing'),
('2 Cascade Lane'),
('40 Havey Road'),
('67636 Tennessee Point'),
('385 Rieder Center'),
('32975 Hagan Street'),
('86462 Buena Vista Point'),
('1275 Pine View Court'),
('4673 Colorado Road'),
('6 Hanover Terrace'),
('66 Thompson Drive'),
('4 Haas Lane'),
('8 Warner Drive'),
('48738 Thompson Lane'),
('0590 Lawn Hill'),
('68 Roxbury Court'),
('833 Kenwood Plaza'),
('6 Sachs Way'),
('77485 Commercial Drive'),
('80678 Green Ridge Court'),
('84320 Lotheville Way'),
('2 Del Mar Park'),
('04528 Carpenter Plaza'),
('9590 Briar Crest Street'),
('02335 Vernon Avenue'),
('6638 Thompson Point'),
('0 Mariners Cove Circle'),
('897 Pine View Park'),
('835 Calypso Place'),
('904 Karstens Trail'),
('52 Corben Pass'),
('27803 Morningstar Avenue'),
('214 Esker Trail'),
('17 Huxley Pass'),
('2061 Meadow Vale Point'),
('02 Browning Parkway'),
('54 3rd Pass'),
('5 Truax Court'),
('59402 Kim Court'),
('59 Atwood Alley'),
('55759 Valley Edge Pass'),
('35 Kim Road'),
('79 Gina Way');


insert into categories (`name`) values ('Hatchback'),
('Coupe'),
('Cabrio'),
('Sedan'),
('SUV');


insert into clients (full_name, phone_number) values ('Kalindi Keningham', '(704) 2502909'),
('Lois Leidl', '(933) 4279635'),
('Casi Farens', '(933) 4275652'),
('Janna Kellert', '(353) 9465732'),
('Conny Barnwille', '(603) 3665240'),
('Pierrette Dunmuir', '(259) 2916404'),
('Jasen Yeldham', '(615) 5756557'),
('Josi Hammelberg', '(481) 7459411'),
('Ursulina Partner', '(794) 3735520'),
('Meris Shale', '(842) 4350411'),
('Colline Dann', '(698) 8299305'),
('Joyann Garrettson', '(858) 8642667'),
('Shane Arr', '(261) 2901780'),
('Owen Strivens', '(807) 1053029'),
('Moyna Bosnell', '(415) 6922926'),
('Henrik Sivyer', '(700) 2525329'),
('Cullan Dogerty', '(915) 9692328'),
('Jens Aitken', '(537) 7882908'),
('Lorilee Kryszkiecicz', '(790) 3469957'),
('Myrta Sogg', '(526) 9403665'),
('Craig Backe', '(529) 3516992'),
('Jacquelynn Plackstone', '(121) 5447246'),
('Therese Gerwood', '(398) 6493437'),
('Jefferson Montacute', '(831) 1391236'),
('Jameson Elgar', '(703) 1282215'),
('Gilberte Shalders', '(370) 1870406'),
('Siegfried Simony', '(916) 2984263'),
('Kimball Deem', '(336) 9748036'),
('Sascha Ruddom', '(940) 1681608'),
('Janelle Southern', '(805) 3987551'),
('Chaunce Taffe', '(668) 8705080'),
('Dante Sagerson', '(973) 2192708'),
('Carey Flannery', '(785) 9438304'),
('Lizzie Iscowitz', '(710) 4823991'),
('Zeke Rowston', '(928) 6001608'),
('Adelle Kurten', '(612) 4238009'),
('Rolland Trevna', '(203) 1783410'),
('Gwynne Bleakley', '(214) 9879666'),
('Darby Rothert', '(557) 6790489'),
('Meridel Straker', '(358) 6416340'),
('Raynor Dobbison', '(700) 1487068'),
('Burnaby Blackater', '(387) 3392948'),
('Yul Moseby', '(881) 8598583'),
('Miles Scruby', '(329) 7886460'),
('Jeanine Gerren', '(537) 1873169'),
('Carmel Lendrem', '(745) 5215647'),
('Allsun O'' Kelleher', '(877) 1770835'),
('Lanita Crockatt', '(743) 9614592'),
('Georges Lanston', '(395) 1729778'),
('Abbey Pedri', '(404) 7308665'),
('Micheal Newtown', '(994) 6249687'),
('Sari Chicotti', '(765) 6287494'),
('Gibbie Liggens', '(858) 2664934'),
('Odele Sinncock', '(154) 6937931'),
('Tisha Patey', '(217) 7073612'),
('Mariele Drinkhall', '(109) 4031108'),
('Raymund Clace', '(133) 4950964'),
('Joshuah Duckers', '(252) 6637771'),
('Kelcy Cody', '(381) 4339413'),
('Kaylee Ponten', '(477) 2290344'),
('Mady Viccary', '(380) 9161457'),
('Mattie Hampton', '(100) 5043476'),
('Kaylee Coushe', '(890) 6938856'),
('Lucita Robelet', '(594) 6881660'),
('Findley Iacoboni', '(443) 6898360'),
('Allan Wedge', '(916) 3801366'),
('Cordey Tremblet', '(697) 4597646'),
('Gaye Sillars', '(828) 7835306'),
('Pieter Curphey', '(150) 6914055'),
('Ewen MacDearmont', '(922) 5120547'),
('Mignon Pennell', '(145) 3388490'),
('Alano Georgot', '(687) 9387537'),
('Alley Couch', '(952) 2625195'),
('Liam Offner', '(367) 8700276'),
('Elbertina Kleinsinger', '(184) 4563380'),
('Norean Sharpless', '(613) 5171498'),
('Vincents Bould', '(918) 6855862'),
('Parker McGeorge', '(826) 5332304'),
('Gregorius May', '(519) 1982733'),
('Bev Wrigglesworth', '(746) 4069382'),
('Courtney Gawkes', '(872) 3681612'),
('Courtney Matiasek', '(592) 5339110'),
('Cori Gunda', '(377) 8637067'),
('Mandy Scoggin', '(317) 9322808'),
('Juan Gorry', '(919) 5716455'),
('Randie Cridge', '(803) 6386812'),
('Courtnay Devoy', '(560) 1656160'),
('Haven Seaton', '(892) 2465728'),
('Nicolai Seaborn', '(898) 4690765'),
('Mona Crose', '(986) 7635057'),
('Alyson Jankowski', '(841) 6231478'),
('Jeralee Tue', '(542) 2919669'),
('Lonny Carnachen', '(172) 6126123'),
('Kora Nichol', '(129) 3239339'),
('Kermy Bertot', '(992) 5466170'),
('Stanislaus Baggallay', '(873) 4129451'),
('Danny Simoneau', '(302) 6032370'),
('Rubin Meaddowcroft', '(970) 9342061'),
('Marsha Cridge', '(230) 6839868'),
('Elysha Maydwell', '(842) 4057110');



insert into drivers (first_name, last_name, age, rating) values ('Alexander', 'Jubb', 40, 3.3),
('Cullan', 'Geram', 54, 1.5),
('Germana', 'Emburey', 38, 9.2),
('Janka', 'Loblie', 48, 7.5),
('Krystal', 'Cuckson', 54, 9.0),
('Susy', 'Borrel', 42, 3.7),
('Saxon', 'Veldman', 43, 3.2),
('Lenore', 'Romera', 19, 6.9),
('Enrichetta', 'Jeremiah', 60, 4.4),
('Delaney', 'Stove', 24, 6.9),
('Ilaire', 'Tomaszewicz', 25, 7.8),
('Genna', 'Jaquet', 36, 4.0),
('Carlotta', 'Dykas', 34, 6.4),
('Viki', 'Oneal', 57, 4.9),
('Anthe', 'Larne', 43, 7.1),
('Philip', 'Penwarden', 45, 3.7),
('Cristi', 'Ravenshear', 38, 1.4),
('Louie', 'Vogel', 44, 7.4),
('Roddie', 'Gribben', 30, 8.0),
('Boyce', 'Briddock', 45, 6.7),
('Heidie', 'Blacksell', 19, 3.1),
('Lexie', 'Salasar', 22, 9.5),
('Harmony', 'Beincken', 46, 2.2),
('Dick', 'Eton', 42, 8.8),
('Philis', 'Treswell', 54, 6.8),
('Crosby', 'Godlee', 55, 9.6),
('Gerhard', 'Alderson', 44, 7.2),
('Dominga', 'Cavy', 24, 3.6),
('Judye', 'Albrooke', 28, 3.1),
('Felice', 'Bartol', 47, 2.1),
('Adolpho', 'Wainscot', 36, 4.7),
('Aurilia', 'McCready', 49, 1.4),
('Neill', 'Woof', 37, 8.5),
('Rab', 'McDarmid', 60, 2.4),
('Ardith', 'Kienlein', 46, 9.7),
('Berenice', 'Liddiatt', 56, 1.6),
('Ailina', 'Sebyer', 59, 8.7),
('Jaynell', 'Kidson', 22, 6.2),
('Carina', 'Vanyatin', 38, 4.3),
('Edna', 'Heatley', 57, 7.5),
('Hally', 'Barthelmes', 46, 8.9),
('Leanna', 'Olensby', 40, 4.8),
('Dell', 'Willoughey', 23, 6.3),
('Guinevere', 'Gras', 33, 6.3),
('Jerrie', 'Myles', 20, 1.8),
('Francoise', 'Cusack', 52, 1.1),
('Happy', 'Bezant', 41, 8.3),
('Kingsly', 'Ianiello', 58, 7.1),
('Leonhard', 'Tukely', 28, 5.1),
('Joe', 'Waine', 20, 4.4);


insert into cars (make, model, `year`, mileage, `condition`, category_id) 
values 
('Land Rover', 'Range Rover', 2021, 550259, 'A', 3),
('GMC', 'Sierra 3500', 2012, 275538, 'A', 4),
('Infiniti', 'IPL G', 2004, NULL, 'B', 1),
('Pontiac', 'Grand Prix', 2020, 703642, 'C', 1),
('Volkswagen', 'Touareg', 2016, 300933, 'B', 4),
('Pontiac', 'Grand Prix', 2006, 676236, 'B', 5),
('BMW', '745', 2001, 696455, 'C', 2),
('Chevrolet', 'S10', 2015, 529397, 'C', 2),
('Toyota', 'Yaris', 2013, 832895, 'B', 2),
('Volkswagen', 'Passat', 2002, 62139, 'C', 1),
('Ford', 'Crown Victoria', 2019, 892185, 'A', 5),
('Mitsubishi', 'Diamante', 2008, 35697, 'C', 1),
('Mercedes-Benz', 'CL-Class', 2007, 846549, 'B', 1),
('Pontiac', 'Trans Sport', 2020, 967608, 'B', 4),
('Chevrolet', 'Camaro', 2021, 376334, 'B', 5),
('Nissan', 'Pathfinder', 2007, 613247, 'C', 3),
('Ford', 'Escort', 2019, 786420, 'A', 3),
('Infiniti', 'G35', 2004, NULL, 'A', 2),
('Mercedes-Benz', 'CL-Class', 2015, 634834, 'B', 4),
('Chevrolet', 'Aveo', 2015, 443680, 'C', 5),
('Volkswagen', 'Golf', 2010, 693120, 'A', 3),
('Hyundai', 'Tiburon', 2002, 705696, 'B', 1),
('Maserati', 'GranTurismo', 2020, 954606, 'B', 1),
('Chevrolet', 'Corvette', 2008, 149039, 'C', 5),
('Isuzu', 'Rodeo Sport', 2002, 619414, 'A', 3),
('Volkswagen', 'Jetta', 2002, 345452, 'C', 3),
('Aston Martin', 'Vantage', 2010, 890984, 'C', 4),
('Nissan', 'Altima', 2013, 383760, 'C', 2),
('Mitsubishi', 'Galant', 2011, 135648, 'A', 1),
('Suzuki', 'Daewoo Magnus', 2007, 648855, 'A', 1),
('Mazda', 'B-Series Plus', 2007, 353195, 'B', 4),
('Chevrolet', 'Astro', 2000, 939056, 'C', 4),
('Pontiac', 'GTO', 2008, 197528, 'A', 3),
('Volkswagen', 'Golf', 2004, 846697, 'C', 2),
('Subaru', 'Forester', 2011, 115948, 'A', 1),
('Mitsubishi', 'Pajero', 2005, 921496, 'B', 4),
('Mitsubishi', 'Eclipse', 2020, 420053, 'B', 1),
('Lincoln', 'Town Car', 2020, 117482, 'C', 1),
('Kia', 'Spectra', 2002, 296475, 'A', 1),
('Honda', 'Odyssey', 2007, 509682, 'B', 4),
('Pontiac', 'Firebird', 2001, 502448, 'A', 1),
('Chevrolet', 'Suburban 1500', 2004, 57014, 'B', 5),
('Volkswagen', 'New Beetle', 2003, 499839, 'A', 2),
('Hyundai', 'Tucson', 2004, 625603, 'C', 1),
('Oldsmobile', 'Aurora', 2007, NULL, 'C', 3),
('Audi', 'A4', 2019, 386826, 'B', 1),
('GMC', 'Savana Cargo Van', 2009, 845679, 'A', 2),
('Dodge', 'Viper', 2021, NULL, 'B', 3),
('Porsche', 'Cayenne', 2010, 384812, 'B', 2),
('BMW', '7 Series', 2011, 444510, 'A', 3),
('Buick', 'LeSabre', 2013, 415144, 'B', 5),
('GMC', 'Yukon', 2012, 598861, 'B', 2),
('Ram', 'C/V', 2007, NULL, 'C', 4),
('Dodge', 'Viper', 2013, 112908, 'C', 1),
('Bentley', 'Continental', 2012, 239846, 'A', 1),
('Jaguar', 'XJ Series', 2010, 172247, 'B', 3),
('Mercedes-Benz', 'E-Class', 2019, 189389, 'A', 5),
('Pontiac', 'Bonneville', 2001, 347829, 'B', 4),
('Porsche', '911', 2013, 929285, 'C', 3),
('Honda', 'Fit', 2007, 828960, 'C', 4),
('Mercury', 'Cougar', 2005, 113831, 'B', 4),
('Dodge', 'Dakota', 2002, 834870, 'C', 2),
('Land Rover', 'LR2', 2020, 501999, 'C', 4),
('Buick', 'Hearse', 2010, 827494, 'A', 2),
('Subaru', 'Impreza', 2005, 720375, 'A', 1),
('Pontiac', 'Fiero', 2005, 959778, 'B', 4),
('Mercedes-Benz', '300SL', 2003, 101920, 'C', 4),
('Nissan', 'Pathfinder', 2001, 257726, 'C', 2),
('Ford', 'E250', 2006, 776506, 'C', 1),
('Chevrolet', 'Caprice', 2010, 228425, 'C', 3),
('Lexus', 'IS-F', 2011, 573601, 'B', 2),
('Toyota', 'Land Cruiser', 2002, 552697, 'B', 2),
('Honda', 'Odyssey', 2018, 834619, 'A', 3),
('Suzuki', 'XL-7', 2008, 836605, 'C', 5),
('Chevrolet', 'APV', 2016, 451469, 'C', 3),
('GMC', 'Acadia', 2003, 127222, 'A', 2),
('Lamborghini', 'Diablo', 2013, 653733, 'A', 5),
('Chevrolet', 'Silverado 2500', 2004, 680803, 'A', 1),
('Toyota', 'TundraMax', 2000, 649423, 'A', 2),
('Lincoln', 'MKT', 2015, 711184, 'A', 1),
('Chevrolet', 'Silverado 1500', 2004, 271471, 'A', 3),
('Mitsubishi', 'Pajero', 2006, 289806, 'C', 5),
('Acura', 'Legend', 2003, 568870, 'A', 2),
('Mitsubishi', 'Galant', 2003, 409176, 'C', 3),
('Saab', '9-5', 2000, 78600, 'B', 2),
('Dodge', 'Challenger', 2012, 206143, 'C', 4),
('Nissan', 'Altima', 2021, 359239, 'B', 4),
('Mercedes-Benz', 'CLS-Class', 2015, 544501, 'B', 3),
('Pontiac', 'Tempest', 2001, 890015, 'C', 3),
('Mercedes-Benz', 'G-Class', 2017, 6482, 'A', 5),
('Kia', 'Amanti', 2019, 910099, 'B', 1),
('Acura', 'Integra', 2003, 767942, 'B', 1),
('Toyota', 'Celica', 2010, 707042, 'B', 1),
('Volkswagen', 'Routan', 2014, 47414, 'C', 4),
('Land Rover', 'Range Rover Sport', 2016, 176967, 'A', 4),
('Dodge', 'Viper', 2016, 405410, 'A', 4),
('Ford', 'Escort', 2009, 470950, 'C', 5),
('Suzuki', 'X-90', 2014, 82451, 'C', 1),
('Ford', 'E250', 2010, 310386, 'C', 4),
('Infiniti', 'EX', 2019, 472668, 'C', 3);

insert into courses (from_address_id, `start`, car_id, client_id, bill) values (29, '2020-01-01 01:26:11', 29, 86, 46.92),
(1, '2020-04-26 17:51:13', 80, 16, 14.47),
(27, '2020-02-18 14:00:01', 25, 86, 44.01),
(3, '2020-03-22 04:23:48', 92, 59, 24.24),
(34, '2021-04-17 12:30:28', 74, 72, 45.83),
(42, '2020-09-21 22:50:50', 1, 69, 18.23),
(31, '2020-10-16 04:58:11', 78, 4, 21.93),
(15, '2020-01-13 05:32:42', 100, 89, 21.56),
(41, '2020-02-06 22:32:14', 22, 48, 40.49),
(11, '2020-06-06 22:44:50', 63, 92, 15.56),
(1, '2020-08-26 06:09:21', 83, 63, 29.98),
(12, '2021-04-20 09:34:41', 93, 53, 43.27),
(28, '2020-02-04 04:59:33', 80, 89, 32.36),
(31, '2021-01-19 11:05:43', 13, 65, 33.05),
(18, '2020-04-17 23:42:06', 49, 63, 37.56),
(5, '2021-02-06 01:03:30', 37, 61, 17.6),
(28, '2020-10-29 05:10:21', 47, 19, 30.46),
(12, '2021-04-18 11:35:23', 5, 79, 21.54),
(21, '2020-07-03 21:38:23', 77, 28, 11.36),
(18, '2020-02-27 06:06:45', 4, 28, 44.72),
(34, '2020-08-02 15:43:34', 50, 88, 30.46),
(27, '2020-04-10 23:14:06', 33, 86, 16.99),
(17, '2021-04-30 06:25:18', 36, 78, 30.07),
(42, '2020-03-24 21:08:22', 6, 70, 27.03),
(6, '2020-10-01 00:35:46', 33, 92, 47.11),
(11, '2021-02-02 04:44:05', 55, 88, 46.57),
(13, '2021-05-02 12:52:14', 2, 31, 31.31),
(42, '2020-11-11 11:15:42', 44, 37, 23.86),
(31, '2020-11-14 07:12:00', 20, 78, 32.51),
(23, '2021-05-25 02:55:43', 45, 41, 45.97),
(4, '2020-12-12 03:06:06', 79, 19, 26.58),
(5, '2020-09-10 01:55:19', 75, 22, 36.22),
(10, '2020-02-06 02:03:35', 76, 8, 17.93),
(16, '2020-06-13 10:53:40', 82, 86, 31.57),
(3, '2020-01-15 09:11:40', 77, 12, 38.32),
(1, '2020-03-02 21:56:45', 38, 57, 35.42),
(39, '2020-07-19 18:01:03', 80, 86, 15.16),
(42, '2020-11-28 17:58:40', 91, 93, 33.81),
(11, '2020-08-18 13:40:40', 1, 55, 14.62),
(10, '2021-02-25 08:42:39', 66, 55, 17.27),
(40, '2021-03-02 19:42:22', 83, 9, 25.78),
(50, '2020-02-11 16:31:21', 62, 2, 28.72),
(35, '2020-04-29 17:34:29', 30, 63, 43.19),
(50, '2021-02-27 15:59:23', 14, 81, 29.01),
(9, '2020-09-12 18:14:55', 61, 14, 36.19),
(12, '2020-03-27 02:42:38', 39, 100, 31.39),
(3, '2020-01-10 01:52:57', 37, 88, 36.61),
(50, '2020-02-22 20:03:36', 15, 87, 18.93),
(33, '2020-03-24 21:03:10', 85, 99, 31.51),
(45, '2020-11-07 13:41:06', 99, 24, 49.12),
(11, '2020-03-02 07:59:07', 87, 41, 20.8),
(26, '2020-08-24 06:12:57', 67, 27, 41.56),
(1, '2020-02-03 22:30:45', 60, 35, 23.86),
(49, '2021-04-10 16:03:34', 70, 21, 26.44),
(3, '2021-02-28 13:13:55', 76, 35, 27.65),
(50, '2021-02-20 21:04:53', 96, 68, 42.21),
(3, '2020-01-31 19:14:27', 88, 92, 18.95),
(48, '2020-07-04 21:44:16', 48, 79, 34.77),
(20, '2020-11-10 06:55:47', 5, 98, 27.25),
(34, '2021-02-22 09:00:28', 8, 6, 27.65),
(15, '2020-11-11 19:57:00', 25, 73, 45.02),
(9, '2020-02-16 14:49:41', 13, 52, 11.68),
(4, '2021-01-09 15:02:02', 79, 47, 47.63),
(27, '2020-04-17 21:13:50', 65, 34, 11.59),
(28, '2021-02-04 14:38:44', 67, 50, 23.91),
(35, '2020-03-11 23:29:24', 61, 49, 32.71),
(22, '2021-02-04 04:28:14', 69, 18, 49.84),
(13, '2020-08-27 21:11:18', 13, 46, 28.17),
(25, '2020-09-28 15:03:00', 59, 36, 42.55),
(42, '2020-02-12 13:11:22', 52, 88, 16.01),
(46, '2021-05-19 12:34:08', 96, 7, 28.93),
(39, '2020-08-23 14:33:46', 97, 98, 47.43),
(47, '2020-06-10 22:09:33', 8, 96, 14.85),
(21, '2020-03-23 16:22:39', 44, 49, 34.18),
(45, '2020-08-02 03:42:00', 35, 24, 12.46),
(33, '2020-11-14 01:03:51', 98, 79, 29.14),
(38, '2021-03-29 10:58:54', 8, 84, 27.1),
(31, '2020-04-29 12:02:59', 14, 79, 32.12),
(15, '2020-07-22 16:54:08', 76, 65, 31.98),
(45, '2020-03-30 10:06:29', 79, 97, 32.38),
(36, '2021-05-29 07:41:51', 46, 50, 19.56),
(18, '2020-07-23 14:01:00', 43, 53, 49.88),
(16, '2020-11-14 18:46:33', 54, 87, 15.88),
(44, '2020-05-04 04:14:31', 64, 53, 33.49),
(3, '2020-03-11 03:39:48', 88, 81, 10.23),
(38, '2020-08-19 21:31:20', 61, 54, 28.19),
(14, '2020-10-29 23:37:30', 1, 15, 11.29),
(12, '2020-09-04 09:54:34', 80, 5, 27.57),
(6, '2021-01-09 15:03:24', 31, 58, 34.22),
(25, '2020-05-11 00:07:58', 94, 64, 32.56),
(2, '2020-07-29 10:01:06', 72, 32, 45.93),
(42, '2021-04-26 16:07:55', 87, 22, 28.14),
(26, '2020-08-16 02:44:31', 32, 96, 44.77),
(11, '2020-07-02 15:27:47', 13, 17, 34.89),
(12, '2020-02-16 15:54:11', 44, 63, 24.98),
(35, '2021-01-10 01:05:48', 37, 48, 43.63),
(23, '2021-03-13 22:23:55', 84, 77, 21.41),
(43, '2021-01-14 11:37:30', 87, 31, 40.24),
(8, '2020-10-21 21:27:13', 25, 49, 14.86),
(14, '2020-03-03 18:07:00', 64, 24, 16.06);


insert into cars_drivers (car_id, driver_id) values (94, 4),
(22, 33),
(60, 26),
(5, 12),
(69, 41),
(90, 37),
(33, 24),
(20, 49),
(66, 10),
(37, 35),
(67, 42),
(96, 6),
(99, 5),
(85, 2),
(77, 37),
(100, 2),
(39, 10),
(21, 36),
(80, 39),
(4, 11),
(49, 9),
(71, 50),
(57, 16),
(16, 31),
(4, 14),
(60, 25),
(36, 1),
(81, 38),
(68, 41),
(6, 50),
(65, 39),
(48, 20),
(30, 18),
(90, 27),
(15, 30),
(57, 33),
(96, 19),
(81, 26),
(5, 22),
(56, 45),
(7, 18),
(4, 48),
(93, 7),
(20, 8),
(23, 17),
(84, 3),
(21, 40),
(33, 8),
(72, 7),
(72, 37),
(77, 43),
(30, 4),
(68, 38),
(3, 3),
(52, 32),
(70, 30),
(72, 21),
(28, 9),
(100, 3),
(32, 36),
(47, 13),
(55, 38),
(55, 18),
(21, 24),
(85, 29),
(86, 22),
(3, 11),
(28, 49),
(82, 42),
(25, 36),
(42, 28),
(59, 20),
(20, 3),
(70, 21),
(84, 7),
(96, 26),
(89, 47),
(46, 19),
(42, 7),
(10, 9),
(38, 15),
(94, 14),
(18, 4),
(5, 38),
(48, 2),
(38, 20),
(55, 23),
(25, 33),
(26, 37),
(12, 35),
(48, 26),
(42, 27),
(5, 19),
(10, 7),
(45, 47),
(80, 29),
(47, 48),
(67, 47),
(14, 40),
(6, 18);
[/input]
[output]
2 Del Mar Park
Night
46.92
Randie Cridge
Mitsubishi
Galant
Hatchback
24402 Warner Place
Day
14.47
Henrik Sivyer
Lincoln
MKT
Hatchback
80678 Green Ridge Court
Day
44.01
Randie Cridge
Isuzu
Rodeo Sport
Cabrio
700 Monterey Avenue
Night
24.24
Kelcy Cody
Acura
Integra
Hatchback
0 Mariners Cove Circle
Day
45.83
Alano Georgot
Suzuki
XL-7
SUV
2061 Meadow Vale Point
Night
18.23
Pieter Curphey
Land Rover
Range Rover
Cabrio
9590 Briar Crest Street
Night
21.93
Janna Kellert
Chevrolet
Silverado 2500
Hatchback
1275 Pine View Court
Night
21.56
Nicolai Seaborn
Infiniti
EX
Cabrio
17 Huxley Pass
Night
40.49
Lanita Crockatt
Hyundai
Tiburon
Hatchback
67636 Tennessee Point
Night
15.56
Jeralee Tue
Land Rover
LR2
Sedan
24402 Warner Place
Day
29.98
Kaylee Coushe
Acura
Legend
Coupe
385 Rieder Center
Day
43.27
Gibbie Liggens
Toyota
Celica
Hatchback
84320 Lotheville Way
Night
32.36
Nicolai Seaborn
Lincoln
MKT
Hatchback
9590 Briar Crest Street
Day
33.05
Findley Iacoboni
Mercedes-Benz
CL-Class
Hatchback
66 Thompson Drive
Night
37.56
Kaylee Coushe
Porsche
Cayenne
Coupe
57659 Karstens Junction
Night
17.60
Mady Viccary
Mitsubishi
Eclipse
Hatchback
84320 Lotheville Way
Night
30.46
Lorilee Kryszkiecicz
GMC
Savana Cargo Van
Coupe
385 Rieder Center
Day
21.54
Gregorius May
Volkswagen
Touareg
Sedan
48738 Thompson Lane
Night
11.36
Kimball Deem
Lamborghini
Diablo
SUV
66 Thompson Drive
Day
44.72
Kimball Deem
Pontiac
Grand Prix
Hatchback
0 Mariners Cove Circle
Day
30.46
Haven Seaton
BMW
7 Series
Cabrio
80678 Green Ridge Court
Night
16.99
Randie Cridge
Pontiac
GTO
Cabrio
6 Hanover Terrace
Day
30.07
Parker McGeorge
Mitsubishi
Pajero
Sedan
2061 Meadow Vale Point
Night
27.03
Ewen MacDearmont
Pontiac
Grand Prix
SUV
361 Caliangt Court
Night
47.11
Jeralee Tue
Pontiac
GTO
Cabrio
67636 Tennessee Point
Night
46.57
Haven Seaton
Bentley
Continental
Hatchback
32975 Hagan Street
Day
31.31
Chaunce Taffe
GMC
Sierra 3500
Sedan
2061 Meadow Vale Point
Day
23.86
Rolland Trevna
Hyundai
Tucson
Hatchback
9590 Briar Crest Street
Day
32.51
Parker McGeorge
Chevrolet
Aveo
SUV
68 Roxbury Court
Night
45.97
Raynor Dobbison
Oldsmobile
Aurora
Cabrio
93124 Comanche Way
Night
26.58
Lorilee Kryszkiecicz
Toyota
TundraMax
Coupe
57659 Karstens Junction
Night
36.22
Jacquelynn Plackstone
Chevrolet
APV
Cabrio
40 Havey Road
Night
17.93
Josi Hammelberg
GMC
Acadia
Coupe
4673 Colorado Road
Day
31.57
Randie Cridge
Mitsubishi
Pajero
SUV
700 Monterey Avenue
Day
38.32
Joyann Garrettson
Lamborghini
Diablo
SUV
24402 Warner Place
Night
35.42
Raymund Clace
Lincoln
Town Car
Hatchback
27803 Morningstar Avenue
Day
15.16
Randie Cridge
Lincoln
MKT
Hatchback
2061 Meadow Vale Point
Day
33.81
Lonny Carnachen
Kia
Amanti
Hatchback
67636 Tennessee Point
Day
14.62
Tisha Patey
Land Rover
Range Rover
Cabrio
40 Havey Road
Day
17.27
Tisha Patey
Pontiac
Fiero
Sedan
214 Esker Trail
Day
25.78
Ursulina Partner
Acura
Legend
Coupe
79 Gina Way
Day
28.72
Lois Leidl
Dodge
Dakota
Coupe
897 Pine View Park
Day
43.19
Kaylee Coushe
Suzuki
Daewoo Magnus
Hatchback
79 Gina Way
Day
29.01
Courtney Gawkes
Pontiac
Trans Sport
Sedan
2 Cascade Lane
Day
36.19
Owen Strivens
Mercury
Cougar
Sedan
385 Rieder Center
Night
31.39
Elysha Maydwell
Kia
Spectra
Hatchback
700 Monterey Avenue
Night
36.61
Haven Seaton
Mitsubishi
Eclipse
Hatchback
79 Gina Way
Day
18.93
Courtnay Devoy
Chevrolet
Camaro
SUV
6638 Thompson Point
Night
31.51
Marsha Cridge
Saab
9-5
Coupe
5 Truax Court
Day
49.12
Jefferson Montacute
Ford
E250
Sedan
67636 Tennessee Point
Day
20.80
Raynor Dobbison
Nissan
Altima
Sedan
77485 Commercial Drive
Day
41.56
Siegfried Simony
Mercedes-Benz
300SL
Sedan
24402 Warner Place
Night
23.86
Zeke Rowston
Honda
Fit
Sedan
35 Kim Road
Day
26.44
Craig Backe
Chevrolet
Caprice
Cabrio
700 Monterey Avenue
Day
27.65
Zeke Rowston
GMC
Acadia
Coupe
79 Gina Way
Night
42.21
Gaye Sillars
Dodge
Viper
Sedan
700 Monterey Avenue
Day
18.95
Jeralee Tue
Mercedes-Benz
CLS-Class
Cabrio
55759 Valley Edge Pass
Night
34.77
Gregorius May
Dodge
Viper
Cabrio
8 Warner Drive
Day
27.25
Rubin Meaddowcroft
Volkswagen
Touareg
Sedan
0 Mariners Cove Circle
Day
27.65
Pierrette Dunmuir
Chevrolet
S10
Coupe
1275 Pine View Court
Day
45.02
Alley Couch
Isuzu
Rodeo Sport
Cabrio
2 Cascade Lane
Day
11.68
Sari Chicotti
Mercedes-Benz
CL-Class
Hatchback
93124 Comanche Way
Day
47.63
Allsun O' Kelleher
Toyota
TundraMax
Coupe
80678 Green Ridge Court
Night
11.59
Lizzie Iscowitz
Subaru
Impreza
Hatchback
84320 Lotheville Way
Day
23.91
Abbey Pedri
Mercedes-Benz
300SL
Sedan
897 Pine View Park
Night
32.71
Georges Lanston
Mercury
Cougar
Sedan
0590 Lawn Hill
Night
49.84
Jens Aitken
Ford
E250
Hatchback
32975 Hagan Street
Night
28.17
Carmel Lendrem
Mercedes-Benz
CL-Class
Hatchback
6 Sachs Way
Day
42.55
Adelle Kurten
Porsche
911
Cabrio
2061 Meadow Vale Point
Day
16.01
Haven Seaton
GMC
Yukon
Coupe
59402 Kim Court
Day
28.93
Jasen Yeldham
Dodge
Viper
Sedan
27803 Morningstar Avenue
Day
47.43
Rubin Meaddowcroft
Ford
Escort
SUV
59 Atwood Alley
Night
14.85
Stanislaus Baggallay
Chevrolet
S10
Coupe
48738 Thompson Lane
Day
34.18
Georges Lanston
Hyundai
Tucson
Hatchback
5 Truax Court
Night
12.46
Jefferson Montacute
Subaru
Forester
Hatchback
6638 Thompson Point
Night
29.14
Gregorius May
Suzuki
X-90
Hatchback
52 Corben Pass
Day
27.10
Mandy Scoggin
Chevrolet
S10
Coupe
9590 Briar Crest Street
Day
32.12
Gregorius May
Pontiac
Trans Sport
Sedan
1275 Pine View Court
Day
31.98
Findley Iacoboni
GMC
Acadia
Coupe
5 Truax Court
Day
32.38
Danny Simoneau
Toyota
TundraMax
Coupe
835 Calypso Place
Day
19.56
Abbey Pedri
Audi
A4
Hatchback
66 Thompson Drive
Day
49.88
Gibbie Liggens
Volkswagen
New Beetle
Coupe
4673 Colorado Road
Day
15.88
Courtnay Devoy
Dodge
Viper
Hatchback
54 3rd Pass
Night
33.49
Gibbie Liggens
Buick
Hearse
Coupe
700 Monterey Avenue
Night
10.23
Courtney Gawkes
Mercedes-Benz
CLS-Class
Cabrio
52 Corben Pass
Night
28.19
Odele Sinncock
Mercury
Cougar
Sedan
86462 Buena Vista Point
Night
11.29
Moyna Bosnell
Land Rover
Range Rover
Cabrio
385 Rieder Center
Day
27.57
Conny Barnwille
Lincoln
MKT
Hatchback
361 Caliangt Court
Day
34.22
Joshuah Duckers
Mazda
B-Series Plus
Sedan
6 Sachs Way
Night
32.56
Lucita Robelet
Volkswagen
Routan
Sedan
4 La Follette Plaza
Day
45.93
Dante Sagerson
Toyota
Land Cruiser
Coupe
2061 Meadow Vale Point
Day
28.14
Jacquelynn Plackstone
Nissan
Altima
Sedan
77485 Commercial Drive
Night
44.77
Stanislaus Baggallay
Chevrolet
Astro
Sedan
67636 Tennessee Point
Day
34.89
Cullan Dogerty
Mercedes-Benz
CL-Class
Hatchback
385 Rieder Center
Day
24.98
Kaylee Coushe
Hyundai
Tucson
Hatchback
897 Pine View Park
Night
43.63
Lanita Crockatt
Mitsubishi
Eclipse
Hatchback
68 Roxbury Court
Night
21.41
Vincents Bould
Mitsubishi
Galant
Cabrio
02 Browning Parkway
Day
40.24
Chaunce Taffe
Nissan
Altima
Sedan
34 Briar Crest Crossing
Night
14.86
Georges Lanston
Isuzu
Rodeo Sport
Cabrio
86462 Buena Vista Point
Day
16.06
Jefferson Montacute
Buick
Hearse
Coupe
[/output]
[/test]
[/tests]
[/code-task]
[/slide]