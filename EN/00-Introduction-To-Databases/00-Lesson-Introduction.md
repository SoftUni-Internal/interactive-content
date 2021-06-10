# Test Problems

[slide hideTitle]
# Problem with Solution: Create Tables - TSA2

[code-task title="Problem: Create Tables" taskId="Create-Tables" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]

```

```
[task-description]
## Description
Description ...


[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'minions'
order by lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'minions'
    order by lower(COLUMN_NAME);

SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'towns' AND lower(COLUMN_NAME) = 'town_id'
ORDER by lower(COLUMN_NAME);
[/input]
[output]
minions
age
minions
id
minions
name
id
towns
town_id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME) as t
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'minions';
[/input]
[output]
minions
[/output]
[/test]
[test]
[input]
SELECT lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'minions'
order by lower(COLUMN_NAME);
[/input]
[output]
age
id
name
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'minions';
[/input]
[output]
id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME) as t
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'towns';
[/input]
[output]
towns
[/output]
[/test]
[test]
[input]
SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database() AND lower(TABLE_NAME) = 'towns' AND lower(COLUMN_NAME) = 'town_id';
[/input]
[output]
town_id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'towns' AND lower(COLUMN_NAME) = 'town_id';
[/input]
[output]
town_id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem with Solution: Basic Select All Fields - TSA1

[code-task title="Basic Select All Fields" taskId="Basic-Select-All-Fields" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]

```

```
[task-description]
## Description
Description ...


[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Plovdiv'); 
INSERT INTO towns (name) VALUES ('Varna');
INSERT INTO towns (name) VALUES ('Burgas');

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
1
Sofia
2
Plovdiv
3
Varna
4
Burgas
1
Engineering
2
Sales
3
Marketing
4
Software Development
5
Quality Assurance
1
Ivan
Ivanov
Ivanov
.NET Developer
4
2013-02-01 00:00:00
3500

2
Petar
Petrov
Petrov	
Senior Engineer
1
2004-03-02 00:00:00
4000

3
Maria
Petrova
Ivanova
Intern
5
2016-08-28 00:00:00
525.25

4
Georgi
Terziev
Ivanov
CEO
2
2007-12-09 00:00:00
3000

5
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns (name) VALUES ('Sofia');
INSERT INTO towns (name) VALUES ('Plovdiv'); 
INSERT INTO towns (name) VALUES ('Varna');
INSERT INTO towns (name) VALUES ('Burgas');
[/input]
[output]
1
Sofia
2
Plovdiv
3
Varna
4
Burgas
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id),
	CONSTRAINT fk_employees_deparments FOREIGN KEY (department_id) REFERENCES departments(id),
	CONSTRAINT fk_employees_addresses FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Software Development'); 
INSERT INTO departments (name) VALUES ('Quality Assurance');
[/input]
[output]
1
Engineering
2
Sales
3
Marketing
4
Software Development
5
Quality Assurance
[/output]
[/test]
[test]
[input]
CREATE TABLE IF NOT EXISTS towns
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_towns PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
	id INT NOT NULL AUTO_INCREMENT,
	address_text VARCHAR(100),
	town_id INT,
	CONSTRAINT pk_adresses PRIMARY KEY (id),
	CONSTRAINT fk_adresses_towns FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE IF NOT EXISTS departments
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	CONSTRAINT pk_departments_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employees
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	middle_name VARCHAR(50),
	last_name VARCHAR(50),
	job_title VARCHAR(20),
	department_id INT,
	hire_date DATETIME,
	salary DOUBLE(12,4),
	address_id INT,
	CONSTRAINT pk_employees PRIMARY KEY (id)
);

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00);
INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES ('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88);
[/input]
[output]
1
Ivan
Ivanov
Ivanov
.NET Developer
4
2013-02-01 00:00:00
3500

2
Petar
Petrov
Petrov	
Senior Engineer
1
2004-03-02 00:00:00
4000

3
Maria
Petrova
Ivanova
Intern
5
2016-08-28 00:00:00
525.25

4
Georgi
Terziev
Ivanov
CEO
2
2007-12-09 00:00:00
3000

5
Peter
Pan
Pan
Intern
3
2016-08-28 00:00:00
599.88
[/output]
[/test]
[/tests]
[/code-task]
[/slide]