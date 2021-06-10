[slide hideTitle]
# mysql-run-queries-and-check-database
[code-task title="Problem: Find All Information About Departments" taskId="mysql-run-queries-and-check-database1" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```

CREATE TABLE  countries(
id INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(45) NOT NULL
);

CREATE TABLE towns(
id INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(45) NOT NULL,
country_id INT NOT NULL,

CONSTRAINT fk_towns_countries
FOREIGN KEY (country_id)
REFERENCES countries(id)
);

CREATE TABLE stadiums(
id INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(45) NOT NULL,
capacity INT NOT NULL,
town_id INT NOT NULL,

CONSTRAINT fk_stadiums_towns
FOREIGN KEY (town_id)
REFERENCES towns(id)
);

CREATE TABLE teams(
id INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(45) NOT NULL,
established DATE NOT NULL,
fan_base BIGINT NOT NULL DEFAULT 0,
stadium_id INT NOT NULL,

CONSTRAINT fk_teams_stadiums
FOREIGN KEY (stadium_id)
REFERENCES stadiums(id)
);
#sent in judge ^ ima 1 greshka v gornite 

CREATE TABLE skills_data(
id INT PRIMARY KEY AUTO_INCREMENT,
dribbling INT DEFAULT 0,
pace INT DEFAULT 0,
passing INT DEFAULT 0,
shooting INT DEFAULT 0,
speed INT DEFAULT 0,
strength INT DEFAULT 0
);

CREATE TABLE coaches (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(10) NOT NULL,
last_name VARCHAR(20) NOT NULL,
salary DECIMAL(10,2) NOT NULL DEFAULT 0,
coach_level INT NOT NULL DEFAULT 0
);

CREATE TABLE players(
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(10) NOT NULL,
last_name VARCHAR(20) NOT NULL,
age INT NOT NULL DEFAULT 0,
position CHAR(1) NOT NULL,
salary DECIMAL(10,2) NOT NULL DEFAULT 0,
hire_date DATETIME,
skills_data_id INT NOT NULL,
team_id INT,

CONSTRAINT fk_players_skills_data
FOREIGN KEY (skills_data_id)
REFERENCES skills_data(id),

CONSTRAINT fk_players_teams
FOREIGN KEY (team_id)
REFERENCES teams(id)
);

CREATE TABLE players_coaches(
player_id INT,
coach_id INT,

CONSTRAINT pk_players_coaches
PRIMARY KEY (player_id, coach_id),

CONSTRAINT fk_players_coaches_players
FOREIGN KEY (player_id)
REFERENCES players(id),

CONSTRAINT fk_players_coaches_coaches
FOREIGN KEY (coach_id)
REFERENCES coaches(id)
);
```
[/code-editor]
[task-description]
## Description
Description ...

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
ORDER BY TABLE_NAME, COLUMN_NAME;
[/input]
[output]
coach_level
first_name
id
last_name
salary
id
name
age
first_name
hire_date
id
last_name
position
salary
skills_data_id
team_id
coach_id
player_id
dribbling
id
pace
passing
shooting
speed
strength
capacity
id
name
town_id
established
fan_base
id
name
stadium_id
country_id
id
name
[/output]
[/test]

[test]
[input]
SELECT COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE()
ORDER BY TABLE_NAME,COLUMN_TYPE;
[/input]
[output]
decimal(10,2)
int
int
varchar(10)
varchar(20)
int
varchar(45)
char(1)
datetime
decimal(10,2)
int
int
int
int
varchar(10)
varchar(20)
int
int
int
int
int
int
int
int
int
int
int
int
varchar(45)
bigint
date
int
int
varchar(45)
int
int
varchar(45)
[/output]
[/test]
[/tests]
[/code-task]
[/slide]