[slide hideTitle]
# sql-server-run-queries-and-check-database
[code-task title="Problem: Find All Information About Departments" taskId="sql-server-run-queries-and-check-database" executionType="tests-execution" executionStrategy="sql-server-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
CREATE TABLE Planets
(
 Id INT PRIMARY KEY IDENTITY CHECK(Id > 0),
 [Name] VARCHAR(30) NOT NULL
)

CREATE TABLE Spaceports
(
 Id INT PRIMARY KEY IDENTITY CHECK(Id > 0),
 [Name] VARCHAR(50) NOT NULL,
 PlanetId INT FOREIGN KEY REFERENCES Planets(Id) NOT NULL
)

CREATE TABLE Spaceships
(
 Id INT PRIMARY KEY IDENTITY,
 [Name] VARCHAR(50) NOT NULL,
 Manufacturer VARCHAR(30) NOT NULL,
LightSpeedRate INT DEFAULT 0
)

CREATE TABLE Colonists
(
 Id INT PRIMARY KEY IDENTITY CHECK(Id > 0),
 FirstName VARCHAR(20) NOT NULL,
LastName VARCHAR(20) NOT NULL,
Ucn VARCHAR(10) UNIQUE NOT NULL,
BirthDate DATE NOT NULL
)


CREATE TABLE Journeys
(
 Id INT PRIMARY KEY IDENTITY CHECK(Id > 0),
JourneyStart DateTIME NOT NULL,
JourneyEnd DateTIME NOT NULL,
Purpose VARCHAR(11) 
	CHECK(Purpose LIKE 'Medical' OR Purpose LIKE 'Technical' OR Purpose LIKE 'Educational' OR Purpose LIKE 'Military') NOT NULL,
DestinationSpaceportId INT FOREIGN KEY REFERENCES Spaceports(Id) NOT NULL,
SpaceshipId INT FOREIGN KEY REFERENCES Spaceships(Id) NOT NULL
)


CREATE TABLE TravelCards
(
 Id INT PRIMARY KEY IDENTITY CHECK(Id > 0),
CardNumber CHAR(10) UNIQUE NOT NULL,
JobDuringJourney VARCHAR(8) 
	CHECK(JobDuringJourney LIKE 'Pilot' OR JobDuringJourney LIKE 'Cleaner' OR JobDuringJourney LIKE 'Trooper' OR JobDuringJourney LIKE 'Cook' OR JobDuringJourney LIKE 'Engineer') NOT NULL,
ColonistId INT FOREIGN KEY REFERENCES Colonists(Id) NOT NULL,
JourneyId INT FOREIGN KEY REFERENCES Journeys(Id) NOT NULL
)
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
SELECT KU.TABLE_NAME,KU.COLUMN_NAME 
 FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS AS TC
INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KU
   ON TC.CONSTRAINT_TYPE = 'PRIMARY KEY' 
  AND TC.CONSTRAINT_NAME = KU.CONSTRAINT_NAME
WHERE TC.TABLE_CATALOG = DB_NAME()	
ORDER BY KU.TABLE_NAME, KU.COLUMN_NAME;
[/input]
[output]
Colonists
Id
Journeys
Id
Planets
Id
Spaceports
Id
Spaceships
Id
TravelCards
Id
[/output]
[/test]

[test]
[input]
SELECT KU.TABLE_NAME,KU.COLUMN_NAME
 FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS AS TC
INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KU
   ON TC.CONSTRAINT_TYPE = 'FOREIGN KEY'
  AND TC.CONSTRAINT_NAME = KU.CONSTRAINT_NAME
WHERE TC.TABLE_CATALOG = DB_NAME()
ORDER BY KU.TABLE_NAME, KU.COLUMN_NAME;
[/input]
[output]
Journeys
DestinationSpaceportId
Journeys
SpaceshipId
Spaceports
PlanetId
TravelCards
ColonistId
TravelCards
JourneyId
[/output]
[/test]

[test]
[input]
DECLARE @HasErrors BIT = 0
BEGIN TRY
-- Insert valid values

-- Insert Planets
SET IDENTITY_INSERT Planets ON;

EXEC sp_executesql N'INSERT INTO Planets (Id, Name) VALUES (1, ''Mars'')'

SET IDENTITY_INSERT Planets OFF;

-- Insert Spaceports
SET IDENTITY_INSERT Spaceports ON;

EXEC sp_executesql
    N'INSERT INTO Spaceports (Id, Name, PlanetId) VALUES (1, ''CrazySport'', 1)'

SET IDENTITY_INSERT Spaceports OFF;

-- Insert Colonists
SET IDENTITY_INSERT Colonists ON;

EXEC sp_executesql N'INSERT INTO Colonists(Id, FirstName, LastName, Ucn, BirthDate) VALUES (1, ''Ivan'', ''Petrov'',
      ''8827858573'', ''12-03-04'')'

SET IDENTITY_INSERT Colonists OFF;

-- Insert Spaceships
SET IDENTITY_INSERT Spaceships ON;

EXEC sp_executesql N'INSERT INTO Spaceships (Id, Name, Manufacturer, LightSpeedRate) VALUES
    (1, ''Falcon9'', ''SpaceX'', 4)'

SET IDENTITY_INSERT Spaceships OFF;

-- Insert Journeys
SET IDENTITY_INSERT Journeys ON;
EXEC sp_executesql
    N'INSERT INTO Journeys (Id, JourneyStart, JourneyEnd, Purpose,DestinationSpaceportId,SpaceshipId) VALUES (1, ''2018-06-16 08:00:00'', ''2018-06-16 16:00:00'', ''Educational'', 1,1)'

SET IDENTITY_INSERT Journeys OFF;

SET IDENTITY_INSERT TravelCards ON;

--INSERT TravelCards
EXEC sp_executesql N'INSERT INTO TravelCards (Id, CardNumber, JobDuringJourney, ColonistId, JourneyId) VALUES (1,2118029497,''Engineer'',1,1)'

SET IDENTITY_INSERT TravelCards OFF;

END TRY
BEGIN CATCH
SET @HasErrors = 1
SELECT ERROR_MESSAGE()
END CATCH

-- Success case
IF (@HasErrors = 0)
  SELECT 'Correct schema'
[/input]
[output]
Correct schema
[/output]
[/test]
[/tests]
[/code-task]
[/slide]