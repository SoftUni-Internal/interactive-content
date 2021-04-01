[slide hideTitle]

# Homework

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/04.Built-In-Functions-And-Data-Aggregation-Exercise.zip) **for this homework.**

*You will need the databases from "built-in-functions-data-aggregation" for the first 16 problems and the "built-in-functions-data-aggregation" resources for the rest of the problems.*

# Part 1 - Queries from SoftUni Database

[/slide]

[slide hideTitle]

# Problem: Find Names of All Employees by First Name
[code-task title="Find Names of All Employees by First Name" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-find-names-of-all-employees-by-first-name" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
# Description

Create an SQL query that finds **first** and **last** names of all employees whose first name **starts with "Sa" (case insensitively).**

**Order the information by id.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| first_name | last_name |
| --- | --- |
| Sariya | Harnpadoungsataya |
| Sandra | Reategui Alayo |
| ..... | ..... |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
Sariya
Harnpadoungsataya
Sandra
Reategui Alayo
Sairaj
Uddin
Samantha
Smith
Sameer
Tejani
Sandeep
Kaliyath
[/input]
[output]
Sariya
Harnpadoungsataya
Sandra
Reategui Alayo
Sairaj
Uddin
Samantha
Smith
Sameer
Tejani
Sandeep
Kaliyath
[/output]
[/test]
[test]
[input]
SA
Gilbert
SA
Brown
SA
Tamburello
SA
Walters
SA
D'Hers
[/input]
[output]
SA
Gilbert
SA
Brown
SA
Tamburello
SA
Walters
SA
D'Hers
[/output]
[/test]
[test]
[input]
Samuel
Gilbert
Sara
Walters
SAMANTA
D'Hers
[/input]
[output]
Samuel
Gilbert
Sara
Walters
SAMANTA
D'Hers
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Find Names of All Employees by Last Name
[code-task title="Find Names of All Employees by Last Name" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-find-names-of-all-employees-by-last-name" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description

Create an SQL query that finds **first** and **last** names of all employees whose **last name contains "ei" (case insensitively).**

**Order the information by id.**

**Run your query statements & submit the output from the queries as plain text.**


## Example:

| first_name | last_name |
| --- | --- |
| Kendall | Keil |
| Christian | Kleinerman |
| ..... | ..... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Kendall
Keil
Christian
Kleinerman
Diane
Margheim
Brandon
Heidepriem
Brian
Goldstein
Linda
Meisner
Tsvi
Reiter
[/input]
[output]
Kendall
Keil
Christian
Kleinerman
Diane
Margheim
Brandon
Heidepriem
Brian
Goldstein
Linda
Meisner
Tsvi
Reiter
[/output]
[/test]
[test]
[input]
John
ei
Sara
ei
Michel
ei
Kevin
ei
Steven
ei
[/input]
[output]
John
ei
Sara
ei
Michel
ei
Kevin
ei
Steven
ei
[/output]
[/test]
[test]
[input]
John
Eimi
Sara
Eimily
Michel
Eibraham
[/input]
[output]
John
Eimi
Sara
Eimily
Michel
Eibraham
[/output]
[/test]
[test]
[input]
John
Goremei
Sara
Bonei
Michel
BANADEI
[/input]
[output]
John
Goremei
Sara
Bonei
Michel
BANADEI
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Find First Names of All Employees
[code-task title="Find First Names of All Employees" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-find-first-name-of-all-employees" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
# Description

Create an SQL query that finds the **first names** of all employees in the departments with ID **3** or **10** and whose **hire year** is **between 1995 and 2005 inclusively.**

**Order the information by id.**

**Run your query statements & submit the output from the queries as plain text.**


## Example:

| first_name |
| --- |
| Deborah |
| Wendey |
| Candy |
| ..... |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
Deborah
Wendy
Candy
David
Bryan
David
Dragan
Barbara
Janet
Mike
Stephen
Brian
Michael
Linda
Pamela
Shu
Jose
Amy
Jae
Ranjit
Tete
Syed
Rachel
Lynn
[/input]
[output]
Deborah
Wendy
Candy
David
Bryan
David
Dragan
Barbara
Janet
Mike
Stephen
Brian
Michael
Linda
Pamela
Shu
Jose
Amy
Jae
Ranjit
Tete
Syed
Rachel
Lynn
[/output]
[/test]
[test]
[input]
John
Michel
Steven
[/input]
[output]
John
Michel
Steven
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Find All Employees Except Engineers
[code-task title="Find All Employees Except Engineers" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-find-all-employees-except-engineers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Create an SQL query that finds the **first** and **last names** of all employees whose **job titles does not contain "engineer".**

**Order the information by id.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| first_name | last_name |
| --- | --- |
| Guy | Gilbert |
| Kevin | Brown |
| Rob | Walters |
| ..... | ..... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Guy
Gilbert
Kevin
Brown
Rob
Walters
Thierry
D'Hers
David
Bradley
JoLynn
Dobney
Ruth
Ellerbrock
Barry
Johnson
Sidney
Higa
Taylor
Maxwell
Jeffrey
Ford
Jo
Brown
Doris
Hartwig
John
Campbell
Diane
Glimp
Steven
Selikoff
Peter
Krebs
Stuart
Munson
Greg
Alderson
David
Johnson
Zheng
Mu
Ivo
Salmre
Paul
Komosinski
Ashvini
Sharma
Kendall
Keil
Paula
Barreto de Mattos
Alejandro
McGuel
Garrett
Young
Jian Shuo
Wang
Susan
Eaton
Vamsi
Kuppa
Alice
Ciccu
Simon
Rapier
Jinghao
Liu
Michael
Hines
Yvonne
McKay
Peng
Wu
Jean
Trenary
Russell
Hunter
A. Scott
Wright
Fred
Northup
Sariya
Harnpadoungsataya
Willis
Johnson
Jun
Cao
Christian
Kleinerman
Susan
Metters
Reuben
D'sa
Kirk
Koenigsbauer
David
Ortiz
Tengiz
Kharatishvili
Hanying
Feng
Kevin
Liu
Annik
Stahl
Suroor
Fatima
Deborah
Poe
Jim
Scardelis
Carole
Poland
George
Li
Gary
Yukish
Cristian
Petculescu
Raymond
Sam
Janaina
Bueno
Bob
Hohman
Shammi
Mohamed
Linda
Moschell
Mindy
Martin
Wendy
Kahn
Kim
Ralls
Sandra
Reategui Alayo
Kok-Ho
Loh
Douglas
Hite
James
Kramer
Sean
Alexander
Nitin
Mirchandani
Rebecca
Laszlo
Rajesh
Patel
Vidur
Luthra
John
Evans
Nancy
Anderson
Pilar
Ackerman
David
Yalovsky
David
Hamilton
Laura
Steele
Margie
Shoop
Zainal
Arifin
Lorraine
Nay
Fadi
Fakhouri
Ryan
Cornelsen
Candy
Spoon
Nuan
Yu
William
Vong
Bjorn
Rettig
Scott
Gode
Michael
Rothkugel
Lane
Sacksteder
Pete
Male
Dan
Bacon
David
Barber
Lolan
Song
Paula
Nartker
Mary
Gibson
Mindaugas
Krapauskas
Eric
Gubbels
Ken
Sanchez
Jason
Watters
Mark
Harrington
Janeth
Esteves
Marc
Ingle
Paul
Singh
Frank
Lee
Francois
Ajenstat
Diane
Tibbott
Jill
Williams
Angela
Barbariol
Matthias
Berndt
Bryan
Baker
Jeff
Hay
Eugene
Zabokritski
Barbara
Decker
Chris
Preston
Sean
Chai
Dan
Wilson
Mark
McArthur
Bryan
Walton
Houman
Pournasseh
Sairaj
Uddin
Michiko
Osada
Benjamin
Martin
Cynthia
Randall
Kathie
Flood
Britta
Simon
Brian
Lloyd
David
Liu
Laura
Norman
Michael
Patten
Andy
Ruth
Yuhong
Li
Robert
Rounthwaite
Andreas
Berglund
Reed
Koch
Linda
Randall
James
Hamilton
Ramesh
Meyyappan
Stephanie
Conroy
Samantha
Smith
Tawana
Nusbaum
Denise
Smith
Hao
Chen
Alex
Nayberg
Eugene
Kogan
Brandon
Heidepriem
Dylan
Miller
Shane
Kim
John
Chen
Karen
Berge
Jose
Lugo
Mandar
Samant
Mikael
Sandberg
Sameer
Tejani
Dragan
Tomic
Carol
Philips
Rob
Caron
Don
Hall
Alan
Brewer
David
Lawrence
Baris
Cetinok
Michael
Ray
Steve
Masters
Suchitra
Mohan
Karen
Berg
Terrence
Earls
Barbara
Moreland
Chad
Niswonger
Rostislav
Shabalin
Belinda
Newman
Katie
McAskill-White
Russell
King
Jack
Richins
Andrew
Hill
Nicole
Holliday
Frank
Miller
Peter
Connelly
Anibal
Sousa
Ken
Myer
Grant
Culbertson
Michael
Entin
Lionel
Penuchot
Thomas
Michaels
Jimmy
Bischoff
Michael
Vanderhyde
Lori
Kane
Arvind
Rao
Stefen
Hesse
Hazem
Abolrous
Janet
Sheperdigian
Elizabeth
Keyser
Terry
Eminhizer
John
Frum
Merav
Netz
Brian
LaMee
Kitti
Lertpiriyasuwat
Jay
Adams
Jan
Miksovsky
Brenda
Diaz
Andrew
Cencini
Chris
Norred
Chris
Okelberry
Shelley
Dyck
Gabe
Mares
Mike
Seamans
Michael
Raheem
Gary
Altman
Charles
Fitzgerald
Ebru
Ersan
Sylvester
Valdez
Brian
Goldstein
Linda
Meisner
Betsy
Stadick
Magnus
Hedlund
Karan
Khanna
Mary
Baker
Kevin
Homer
Mihail
Frintu
Bonnie
Kearney
Fukiko
Ogisu
Hung-Fu
Ting
Gordon
Hee
Kimberly
Zimmerman
Kim
Abercrombie
Sandeep
Kaliyath
Prasanna
Samarawickrama
Frank
Pellow
Min
Su
Eric
Brown
Eric
Kurjan
Pat
Coleman
Maciej
Dusza
Erin
Hagens
Patrick
Wedge
Frank
Martinez
Ed
Dudenhoefer
Christopher
Hill
Patrick
Cook
Krishna
Sunkammurali
Lori
Penor
Danielle
Tiedt
Sootha
Charncherngkha
Michael
Zwilling
Randy
Reeves
John
Kane
Jack
Creasey
Olinda
Turner
Stuart
Macrae
Jo
Berry
Ben
Miller
Tom
Vande Velde
Ovidiu
Cracium
Annette
Hill
Janice
Galvin
Reinout
Hillmann
Stephen
Jiang
Wanida
Benshoof
John
Wood
Mary
Dempsey
Brian
Welcker
Sheela
Word
Michael
Blythe
Linda
Mitchell
Jillian
Carson
Garrett
Vargas
Tsvi
Reiter
Pamela
Ansman-Wolfe
Shu
Ito
Jose
Saraiva
David
Campbell
Amy
Alberts
Jae
Pak
Ranjit
Varkey Chudukatil
Tete
Mensa-Annan
Syed
Abbas
Rachel
Valdez
Lynn
Tsoflias
Svetlin
Nakov
Martin
Kulov
George
Denchev
[/input]
[output]
Guy
Gilbert
Kevin
Brown
Rob
Walters
Thierry
D'Hers
David
Bradley
JoLynn
Dobney
Ruth
Ellerbrock
Barry
Johnson
Sidney
Higa
Taylor
Maxwell
Jeffrey
Ford
Jo
Brown
Doris
Hartwig
John
Campbell
Diane
Glimp
Steven
Selikoff
Peter
Krebs
Stuart
Munson
Greg
Alderson
David
Johnson
Zheng
Mu
Ivo
Salmre
Paul
Komosinski
Ashvini
Sharma
Kendall
Keil
Paula
Barreto de Mattos
Alejandro
McGuel
Garrett
Young
Jian Shuo
Wang
Susan
Eaton
Vamsi
Kuppa
Alice
Ciccu
Simon
Rapier
Jinghao
Liu
Michael
Hines
Yvonne
McKay
Peng
Wu
Jean
Trenary
Russell
Hunter
A. Scott
Wright
Fred
Northup
Sariya
Harnpadoungsataya
Willis
Johnson
Jun
Cao
Christian
Kleinerman
Susan
Metters
Reuben
D'sa
Kirk
Koenigsbauer
David
Ortiz
Tengiz
Kharatishvili
Hanying
Feng
Kevin
Liu
Annik
Stahl
Suroor
Fatima
Deborah
Poe
Jim
Scardelis
Carole
Poland
George
Li
Gary
Yukish
Cristian
Petculescu
Raymond
Sam
Janaina
Bueno
Bob
Hohman
Shammi
Mohamed
Linda
Moschell
Mindy
Martin
Wendy
Kahn
Kim
Ralls
Sandra
Reategui Alayo
Kok-Ho
Loh
Douglas
Hite
James
Kramer
Sean
Alexander
Nitin
Mirchandani
Rebecca
Laszlo
Rajesh
Patel
Vidur
Luthra
John
Evans
Nancy
Anderson
Pilar
Ackerman
David
Yalovsky
David
Hamilton
Laura
Steele
Margie
Shoop
Zainal
Arifin
Lorraine
Nay
Fadi
Fakhouri
Ryan
Cornelsen
Candy
Spoon
Nuan
Yu
William
Vong
Bjorn
Rettig
Scott
Gode
Michael
Rothkugel
Lane
Sacksteder
Pete
Male
Dan
Bacon
David
Barber
Lolan
Song
Paula
Nartker
Mary
Gibson
Mindaugas
Krapauskas
Eric
Gubbels
Ken
Sanchez
Jason
Watters
Mark
Harrington
Janeth
Esteves
Marc
Ingle
Paul
Singh
Frank
Lee
Francois
Ajenstat
Diane
Tibbott
Jill
Williams
Angela
Barbariol
Matthias
Berndt
Bryan
Baker
Jeff
Hay
Eugene
Zabokritski
Barbara
Decker
Chris
Preston
Sean
Chai
Dan
Wilson
Mark
McArthur
Bryan
Walton
Houman
Pournasseh
Sairaj
Uddin
Michiko
Osada
Benjamin
Martin
Cynthia
Randall
Kathie
Flood
Britta
Simon
Brian
Lloyd
David
Liu
Laura
Norman
Michael
Patten
Andy
Ruth
Yuhong
Li
Robert
Rounthwaite
Andreas
Berglund
Reed
Koch
Linda
Randall
James
Hamilton
Ramesh
Meyyappan
Stephanie
Conroy
Samantha
Smith
Tawana
Nusbaum
Denise
Smith
Hao
Chen
Alex
Nayberg
Eugene
Kogan
Brandon
Heidepriem
Dylan
Miller
Shane
Kim
John
Chen
Karen
Berge
Jose
Lugo
Mandar
Samant
Mikael
Sandberg
Sameer
Tejani
Dragan
Tomic
Carol
Philips
Rob
Caron
Don
Hall
Alan
Brewer
David
Lawrence
Baris
Cetinok
Michael
Ray
Steve
Masters
Suchitra
Mohan
Karen
Berg
Terrence
Earls
Barbara
Moreland
Chad
Niswonger
Rostislav
Shabalin
Belinda
Newman
Katie
McAskill-White
Russell
King
Jack
Richins
Andrew
Hill
Nicole
Holliday
Frank
Miller
Peter
Connelly
Anibal
Sousa
Ken
Myer
Grant
Culbertson
Michael
Entin
Lionel
Penuchot
Thomas
Michaels
Jimmy
Bischoff
Michael
Vanderhyde
Lori
Kane
Arvind
Rao
Stefen
Hesse
Hazem
Abolrous
Janet
Sheperdigian
Elizabeth
Keyser
Terry
Eminhizer
John
Frum
Merav
Netz
Brian
LaMee
Kitti
Lertpiriyasuwat
Jay
Adams
Jan
Miksovsky
Brenda
Diaz
Andrew
Cencini
Chris
Norred
Chris
Okelberry
Shelley
Dyck
Gabe
Mares
Mike
Seamans
Michael
Raheem
Gary
Altman
Charles
Fitzgerald
Ebru
Ersan
Sylvester
Valdez
Brian
Goldstein
Linda
Meisner
Betsy
Stadick
Magnus
Hedlund
Karan
Khanna
Mary
Baker
Kevin
Homer
Mihail
Frintu
Bonnie
Kearney
Fukiko
Ogisu
Hung-Fu
Ting
Gordon
Hee
Kimberly
Zimmerman
Kim
Abercrombie
Sandeep
Kaliyath
Prasanna
Samarawickrama
Frank
Pellow
Min
Su
Eric
Brown
Eric
Kurjan
Pat
Coleman
Maciej
Dusza
Erin
Hagens
Patrick
Wedge
Frank
Martinez
Ed
Dudenhoefer
Christopher
Hill
Patrick
Cook
Krishna
Sunkammurali
Lori
Penor
Danielle
Tiedt
Sootha
Charncherngkha
Michael
Zwilling
Randy
Reeves
John
Kane
Jack
Creasey
Olinda
Turner
Stuart
Macrae
Jo
Berry
Ben
Miller
Tom
Vande Velde
Ovidiu
Cracium
Annette
Hill
Janice
Galvin
Reinout
Hillmann
Stephen
Jiang
Wanida
Benshoof
John
Wood
Mary
Dempsey
Brian
Welcker
Sheela
Word
Michael
Blythe
Linda
Mitchell
Jillian
Carson
Garrett
Vargas
Tsvi
Reiter
Pamela
Ansman-Wolfe
Shu
Ito
Jose
Saraiva
David
Campbell
Amy
Alberts
Jae
Pak
Ranjit
Varkey Chudukatil
Tete
Mensa-Annan
Syed
Abbas
Rachel
Valdez
Lynn
Tsoflias
Svetlin
Nakov
Martin
Kulov
George
Denchev
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find Towns with Name Length
[code-task title="Find Towns with Name Length" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-Towns-with-Name-Length" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description

Create an SQL query that finds **town names** that are **5** or **6** symbols long and **order them alphabetically by town name.** 

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| name |
| --- |
| Berlin |
| Duluth |
| Duvall |
| ..... |




[/task-description]
[code-io /]
[tests]
[test open]
[input]
Berlin
Duluth
Duvall
Index
Monroe
Nevada
Ottawa
Renton
Sofia
[/input]
[output]
Berlin
Duluth
Duvall
Index
Monroe
Nevada
Ottawa
Renton
Sofia
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find Towns Starting With
[code-task title="Find Towns Starting With" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-find-towns-starting-with" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Create an SQL query that finds all towns that **start with** letters **M**, **K**, **B** or **E** **(case insensitively).**

**Order them alphabetically by town name.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| town_id | name |
| --- | --- |
| 5 | Bellevue |
| 31 | Berlin |
| 30 | Bordeaux |
| ..... | ..... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Berlin
Duluth
Duvall
Index
Monroe
Nevada
Ottawa
Renton
Sofia
[/input]
[output]
Berlin
Duluth
Duvall
Index
Monroe
Nevada
Ottawa
Renton
Sofia
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Find Towns Not Starting With
[code-task title="Find Towns Not Starting With" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-find-towns-not-starting-with" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Create an SQL query that finds all towns that **do not start** with letters **R**, **B** or **D** **(case insensitively).**

**Order them alphabetically by name.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| town_id | name |
| --- | --- |
| 2 | Calgary |
| 23 | Cambridge |
| 15 | Carnation |
| ..... | ..... |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
Calgary
23
Cambridge
15
Carnation
3
Edmonds
7
Everett
18
Gold Bar
10
Index
6
Issaquah
20
Kenmore
22
Kent
21
Melbourne
28
Memphis
24
Minneapolis
12
Monroe
19
Nevada
14
Newport Hills
29
Ottawa
25
Portland
16
Sammamish
9
San Francisco
4
Seattle
11
Snohomish
32
Sofia
[/input]
[output]
2
Calgary
23
Cambridge
15
Carnation
3
Edmonds
7
Everett
18
Gold Bar
10
Index
6
Issaquah
20
Kenmore
22
Kent
21
Melbourne
28
Memphis
24
Minneapolis
12
Monroe
19
Nevada
14
Newport Hills
29
Ottawa
25
Portland
16
Sammamish
9
San Francisco
4
Seattle
11
Snohomish
32
Sofia
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Create View Employees Hired After 2000 Year
[code-task title="Create View Employees Hired After 2000 Year" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-create-view-employees-hired-after-2000-year" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Create an SQL query that creates a view named **v_employees_hired_after_2000** with **the first and the last name** of all employees **hired after 2000 year.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| first_name | last_name |
| --- | --- |
| Steven | Selikoff |
| Peter | Krebs |
| Stuart | Munson |
| ..... | ..... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Steven
Selikoff
Peter
Krebs
Stuart
Munson
Greg
Alderson
David
Johnson
Zheng
Mu
Ivo
Salmre
Paul
Komosinski
Ashvini
Sharma
Kendall
Keil
Paula
Barreto de Mattos
Alejandro
McGuel
Garrett
Young
Jian Shuo
Wang
Susan
Eaton
Vamsi
Kuppa
Alice
Ciccu
Simon
Rapier
Jinghao
Liu
Michael
Hines
Yvonne
McKay
Peng
Wu
Jean
Trenary
Russell
Hunter
A. Scott
Wright
Fred
Northup
Sariya
Harnpadoungsataya
Willis
Johnson
Jun
Cao
Christian
Kleinerman
Susan
Metters
Reuben
D'sa
Kirk
Koenigsbauer
David
Ortiz
Tengiz
Kharatishvili
Hanying
Feng
Kevin
Liu
Annik
Stahl
Suroor
Fatima
Deborah
Poe
Jim
Scardelis
Carole
Poland
George
Li
Gary
Yukish
Cristian
Petculescu
Raymond
Sam
Janaina
Bueno
Bob
Hohman
Shammi
Mohamed
Linda
Moschell
Mindy
Martin
Wendy
Kahn
Kim
Ralls
Sandra
Reategui Alayo
Kok-Ho
Loh
Douglas
Hite
James
Kramer
Sean
Alexander
Nitin
Mirchandani
Diane
Margheim
Rebecca
Laszlo
Rajesh
Patel
Vidur
Luthra
John
Evans
Nancy
Anderson
Pilar
Ackerman
David
Yalovsky
David
Hamilton
Laura
Steele
Margie
Shoop
Zainal
Arifin
Lorraine
Nay
Fadi
Fakhouri
Ryan
Cornelsen
Candy
Spoon
Nuan
Yu
William
Vong
Bjorn
Rettig
Scott
Gode
Michael
Rothkugel
Lane
Sacksteder
Pete
Male
Dan
Bacon
David
Barber
Lolan
Song
Paula
Nartker
Mary
Gibson
Mindaugas
Krapauskas
Eric
Gubbels
Ken
Sanchez
Jason
Watters
Mark
Harrington
Janeth
Esteves
Marc
Ingle
Gigi
Matthew
Paul
Singh
Frank
Lee
Francois
Ajenstat
Diane
Tibbott
Jill
Williams
Angela
Barbariol
Matthias
Berndt
Bryan
Baker
Jeff
Hay
Eugene
Zabokritski
Barbara
Decker
Chris
Preston
Sean
Chai
Dan
Wilson
Mark
McArthur
Bryan
Walton
Houman
Pournasseh
Sairaj
Uddin
Michiko
Osada
Benjamin
Martin
Cynthia
Randall
Kathie
Flood
Britta
Simon
Brian
Lloyd
David
Liu
Laura
Norman
Michael
Patten
Andy
Ruth
Yuhong
Li
Robert
Rounthwaite
Andreas
Berglund
Reed
Koch
Linda
Randall
James
Hamilton
Ramesh
Meyyappan
Stephanie
Conroy
Samantha
Smith
Tawana
Nusbaum
Denise
Smith
Hao
Chen
Alex
Nayberg
Eugene
Kogan
Brandon
Heidepriem
Dylan
Miller
Shane
Kim
John
Chen
Karen
Berge
Jose
Lugo
Mandar
Samant
Mikael
Sandberg
Sameer
Tejani
Dragan
Tomic
Carol
Philips
Rob
Caron
Don
Hall
Alan
Brewer
David
Lawrence
Baris
Cetinok
Michael
Ray
Steve
Masters
Suchitra
Mohan
Karen
Berg
Terrence
Earls
Barbara
Moreland
Chad
Niswonger
Rostislav
Shabalin
Belinda
Newman
Katie
McAskill-White
Russell
King
Jack
Richins
Andrew
Hill
Nicole
Holliday
Frank
Miller
Peter
Connelly
Anibal
Sousa
Ken
Myer
Grant
Culbertson
Michael
Entin
Lionel
Penuchot
Thomas
Michaels
Jimmy
Bischoff
Michael
Vanderhyde
Lori
Kane
Arvind
Rao
Stefen
Hesse
Hazem
Abolrous
Janet
Sheperdigian
Elizabeth
Keyser
Terry
Eminhizer
John
Frum
Merav
Netz
Brian
LaMee
Kitti
Lertpiriyasuwat
Jay
Adams
Jan
Miksovsky
Brenda
Diaz
Andrew
Cencini
Chris
Norred
Chris
Okelberry
Shelley
Dyck
Gabe
Mares
Mike
Seamans
Michael
Raheem
Gary
Altman
Charles
Fitzgerald
Ebru
Ersan
Sylvester
Valdez
Brian
Goldstein
Linda
Meisner
Betsy
Stadick
Magnus
Hedlund
Karan
Khanna
Mary
Baker
Kevin
Homer
Mihail
Frintu
Bonnie
Kearney
Fukiko
Ogisu
Hung-Fu
Ting
Gordon
Hee
Kimberly
Zimmerman
Kim
Abercrombie
Sandeep
Kaliyath
Prasanna
Samarawickrama
Frank
Pellow
Min
Su
Eric
Brown
Eric
Kurjan
Pat
Coleman
Maciej
Dusza
Erin
Hagens
Patrick
Wedge
Frank
Martinez
Ed
Dudenhoefer
Christopher
Hill
Patrick
Cook
Krishna
Sunkammurali
Lori
Penor
Danielle
Tiedt
Sootha
Charncherngkha
Michael
Zwilling
Randy
Reeves
John
Kane
Jack
Creasey
Olinda
Turner
Stuart
Macrae
Jo
Berry
Ben
Miller
Tom
Vande Velde
Ovidiu
Cracium
Annette
Hill
Janice
Galvin
Reinout
Hillmann
Michael
Sullivan
Stephen
Jiang
Wanida
Benshoof
Sharon
Salavaria
John
Wood
Mary
Dempsey
Brian
Welcker
Sheela
Word
Michael
Blythe
Linda
Mitchell
Jillian
Carson
Garrett
Vargas
Tsvi
Reiter
Pamela
Ansman-Wolfe
Shu
Ito
Jose
Saraiva
David
Campbell
Amy
Alberts
Jae
Pak
Ranjit
Varkey Chudukatil
Tete
Mensa-Annan
Syed
Abbas
Rachel
Valdez
Lynn
Tsoflias
Svetlin
Nakov
Martin
Kulov
George
Denchev
[/input]
[output]
Steven
Selikoff
Peter
Krebs
Stuart
Munson
Greg
Alderson
David
Johnson
Zheng
Mu
Ivo
Salmre
Paul
Komosinski
Ashvini
Sharma
Kendall
Keil
Paula
Barreto de Mattos
Alejandro
McGuel
Garrett
Young
Jian Shuo
Wang
Susan
Eaton
Vamsi
Kuppa
Alice
Ciccu
Simon
Rapier
Jinghao
Liu
Michael
Hines
Yvonne
McKay
Peng
Wu
Jean
Trenary
Russell
Hunter
A. Scott
Wright
Fred
Northup
Sariya
Harnpadoungsataya
Willis
Johnson
Jun
Cao
Christian
Kleinerman
Susan
Metters
Reuben
D'sa
Kirk
Koenigsbauer
David
Ortiz
Tengiz
Kharatishvili
Hanying
Feng
Kevin
Liu
Annik
Stahl
Suroor
Fatima
Deborah
Poe
Jim
Scardelis
Carole
Poland
George
Li
Gary
Yukish
Cristian
Petculescu
Raymond
Sam
Janaina
Bueno
Bob
Hohman
Shammi
Mohamed
Linda
Moschell
Mindy
Martin
Wendy
Kahn
Kim
Ralls
Sandra
Reategui Alayo
Kok-Ho
Loh
Douglas
Hite
James
Kramer
Sean
Alexander
Nitin
Mirchandani
Diane
Margheim
Rebecca
Laszlo
Rajesh
Patel
Vidur
Luthra
John
Evans
Nancy
Anderson
Pilar
Ackerman
David
Yalovsky
David
Hamilton
Laura
Steele
Margie
Shoop
Zainal
Arifin
Lorraine
Nay
Fadi
Fakhouri
Ryan
Cornelsen
Candy
Spoon
Nuan
Yu
William
Vong
Bjorn
Rettig
Scott
Gode
Michael
Rothkugel
Lane
Sacksteder
Pete
Male
Dan
Bacon
David
Barber
Lolan
Song
Paula
Nartker
Mary
Gibson
Mindaugas
Krapauskas
Eric
Gubbels
Ken
Sanchez
Jason
Watters
Mark
Harrington
Janeth
Esteves
Marc
Ingle
Gigi
Matthew
Paul
Singh
Frank
Lee
Francois
Ajenstat
Diane
Tibbott
Jill
Williams
Angela
Barbariol
Matthias
Berndt
Bryan
Baker
Jeff
Hay
Eugene
Zabokritski
Barbara
Decker
Chris
Preston
Sean
Chai
Dan
Wilson
Mark
McArthur
Bryan
Walton
Houman
Pournasseh
Sairaj
Uddin
Michiko
Osada
Benjamin
Martin
Cynthia
Randall
Kathie
Flood
Britta
Simon
Brian
Lloyd
David
Liu
Laura
Norman
Michael
Patten
Andy
Ruth
Yuhong
Li
Robert
Rounthwaite
Andreas
Berglund
Reed
Koch
Linda
Randall
James
Hamilton
Ramesh
Meyyappan
Stephanie
Conroy
Samantha
Smith
Tawana
Nusbaum
Denise
Smith
Hao
Chen
Alex
Nayberg
Eugene
Kogan
Brandon
Heidepriem
Dylan
Miller
Shane
Kim
John
Chen
Karen
Berge
Jose
Lugo
Mandar
Samant
Mikael
Sandberg
Sameer
Tejani
Dragan
Tomic
Carol
Philips
Rob
Caron
Don
Hall
Alan
Brewer
David
Lawrence
Baris
Cetinok
Michael
Ray
Steve
Masters
Suchitra
Mohan
Karen
Berg
Terrence
Earls
Barbara
Moreland
Chad
Niswonger
Rostislav
Shabalin
Belinda
Newman
Katie
McAskill-White
Russell
King
Jack
Richins
Andrew
Hill
Nicole
Holliday
Frank
Miller
Peter
Connelly
Anibal
Sousa
Ken
Myer
Grant
Culbertson
Michael
Entin
Lionel
Penuchot
Thomas
Michaels
Jimmy
Bischoff
Michael
Vanderhyde
Lori
Kane
Arvind
Rao
Stefen
Hesse
Hazem
Abolrous
Janet
Sheperdigian
Elizabeth
Keyser
Terry
Eminhizer
John
Frum
Merav
Netz
Brian
LaMee
Kitti
Lertpiriyasuwat
Jay
Adams
Jan
Miksovsky
Brenda
Diaz
Andrew
Cencini
Chris
Norred
Chris
Okelberry
Shelley
Dyck
Gabe
Mares
Mike
Seamans
Michael
Raheem
Gary
Altman
Charles
Fitzgerald
Ebru
Ersan
Sylvester
Valdez
Brian
Goldstein
Linda
Meisner
Betsy
Stadick
Magnus
Hedlund
Karan
Khanna
Mary
Baker
Kevin
Homer
Mihail
Frintu
Bonnie
Kearney
Fukiko
Ogisu
Hung-Fu
Ting
Gordon
Hee
Kimberly
Zimmerman
Kim
Abercrombie
Sandeep
Kaliyath
Prasanna
Samarawickrama
Frank
Pellow
Min
Su
Eric
Brown
Eric
Kurjan
Pat
Coleman
Maciej
Dusza
Erin
Hagens
Patrick
Wedge
Frank
Martinez
Ed
Dudenhoefer
Christopher
Hill
Patrick
Cook
Krishna
Sunkammurali
Lori
Penor
Danielle
Tiedt
Sootha
Charncherngkha
Michael
Zwilling
Randy
Reeves
John
Kane
Jack
Creasey
Olinda
Turner
Stuart
Macrae
Jo
Berry
Ben
Miller
Tom
Vande Velde
Ovidiu
Cracium
Annette
Hill
Janice
Galvin
Reinout
Hillmann
Michael
Sullivan
Stephen
Jiang
Wanida
Benshoof
Sharon
Salavaria
John
Wood
Mary
Dempsey
Brian
Welcker
Sheela
Word
Michael
Blythe
Linda
Mitchell
Jillian
Carson
Garrett
Vargas
Tsvi
Reiter
Pamela
Ansman-Wolfe
Shu
Ito
Jose
Saraiva
David
Campbell
Amy
Alberts
Jae
Pak
Ranjit
Varkey Chudukatil
Tete
Mensa-Annan
Syed
Abbas
Rachel
Valdez
Lynn
Tsoflias
Svetlin
Nakov
Martin
Kulov
George
Denchev
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Length of Last Name
[code-task title="Length of Last Name" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-length-of-last-name" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Create an SQL query that finds the names of all employees whose last name is **exactly 5 characters long.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| first_name | last_name |
| --- | --- |
| Kevin | Brown |
| Terri | Duffy |
| Jo | Brown |
| Diane | Glimp |
| ..... | ..... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Kevin
Brown
Terri
Duffy
Jo
Brown
Diane
Glimp
Peter
Krebs
Garrett
Young
Susan
Eaton
Vamsi
Kuppa
Alice
Ciccu
Michael
Hines
Yvonne
McKay
David
Ortiz
Annik
Stahl
Janaina
Bueno
Kim
Ralls
Rajesh
Patel
John
Evans
Margie
Shoop
Candy
Spoon
Dan
Bacon
Marc
Ingle
Paul
Singh
Bryan
Baker
Sairaj
Uddin
Michiko
Osada
Kathie
Flood
Britta
Simon
Brian
Lloyd
Samantha
Smith
Denise
Smith
Eugene
Kogan
Karen
Berge
Dragan
Tomic
Rob
Caron
Suchitra
Mohan
Terrence
Earls
Anibal
Sousa
Michael
Entin
Stefen
Hesse
Brian
LaMee
Jay
Adams
Gabe
Mares
Ebru
Ersan
Mary
Baker
Kevin
Homer
Fukiko
Ogisu
Eric
Brown
Maciej
Dusza
Patrick
Wedge
Lori
Penor
Danielle
Tiedt
Jo
Berry
Stephen
Jiang
Syed
Abbas
Svetlin
Nakov
Martin
Kulov
[/input]
[output]
Kevin
Brown
Terri
Duffy
Jo
Brown
Diane
Glimp
Peter
Krebs
Garrett
Young
Susan
Eaton
Vamsi
Kuppa
Alice
Ciccu
Michael
Hines
Yvonne
McKay
David
Ortiz
Annik
Stahl
Janaina
Bueno
Kim
Ralls
Rajesh
Patel
John
Evans
Margie
Shoop
Candy
Spoon
Dan
Bacon
Marc
Ingle
Paul
Singh
Bryan
Baker
Sairaj
Uddin
Michiko
Osada
Kathie
Flood
Britta
Simon
Brian
Lloyd
Samantha
Smith
Denise
Smith
Eugene
Kogan
Karen
Berge
Dragan
Tomic
Rob
Caron
Suchitra
Mohan
Terrence
Earls
Anibal
Sousa
Michael
Entin
Stefen
Hesse
Brian
LaMee
Jay
Adams
Gabe
Mares
Ebru
Ersan
Mary
Baker
Kevin
Homer
Fukiko
Ogisu
Eric
Brown
Maciej
Dusza
Patrick
Wedge
Lori
Penor
Danielle
Tiedt
Jo
Berry
Stephen
Jiang
Syed
Abbas
Svetlin
Nakov
Martin
Kulov
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Part 2 - Queries for Geography Database

[/slide]

[slide hideTitle]
# Problem: Countries Holding 'A' 3 or More Times
[code-task title="Countries Holding 'A' 3 or More Times" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-countries-holding-a-3-or-more-times" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description

Find all countries that hold the **letter 'A' in their name at least 3 times (case insensitively) sorted by the ISO code.**

**Display** the **country name** and the **ISO code.**

**Run your query statements & submit the output from the queries as plain text.**


## Example:

| contry_name | iso_code |
| --- | --- |
| Afghanistan | AFG |
| Albania | ALB |
| ..... | ..... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Afghanistan
AFG
Albania
ALB
United Arab Emirates
ARE
American Samoa
ASM
Antarctica
ATA
Antigua and Barbuda
ATG
Australia
AUS
Azerbaijan
AZE
Bahamas
BHS
Bosnia and Herzegovina
BIH
Central African Republic
CAF
Canada
CAN
Cayman Islands
CYM
Western Sahara
ESH
Falkland Islands
FLK
Equatorial Guinea
GNQ
Guatemala
GTM
Heard Island and McDonald Islands
HMD
Jamaica
JAM
Kazakhstan
KAZ
Madagascar
MDG
Marshall Islands
MHL
Northern Mariana Islands
MNP
Mauritania
MRT
Malaysia
MYS
Nicaragua
NIC
Panama
PAN
Papua New Guinea
PNG
Paraguay
PRY
Saudi Arabia
SAU
South Georgia and the South Sandwich Islands
SGS
Svalbard and Jan Mayen
SJM
Turks and Caicos Islands
TCA
Trinidad and Tobago
TTO
Tanzania
TZA
Saint Vincent and the Grenadines
VCT
Wallis and Futuna
WLF
[/input]
[output]
Afghanistan
AFG
Albania
ALB
United Arab Emirates
ARE
American Samoa
ASM
Antarctica
ATA
Antigua and Barbuda
ATG
Australia
AUS
Azerbaijan
AZE
Bahamas
BHS
Bosnia and Herzegovina
BIH
Central African Republic
CAF
Canada
CAN
Cayman Islands
CYM
Western Sahara
ESH
Falkland Islands
FLK
Equatorial Guinea
GNQ
Guatemala
GTM
Heard Island and McDonald Islands
HMD
Jamaica
JAM
Kazakhstan
KAZ
Madagascar
MDG
Marshall Islands
MHL
Northern Mariana Islands
MNP
Mauritania
MRT
Malaysia
MYS
Nicaragua
NIC
Panama
PAN
Papua New Guinea
PNG
Paraguay
PRY
Saudi Arabia
SAU
South Georgia and the South Sandwich Islands
SGS
Svalbard and Jan Mayen
SJM
Turks and Caicos Islands
TCA
Trinidad and Tobago
TTO
Tanzania
TZA
Saint Vincent and the Grenadines
VCT
Wallis and Futuna
WLF
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Mix of Peak and River Names
[code-task title="Mix of Peak and River Names" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-mix-of-peak-and-river-names" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

**Combine all peak names with all river names**, so that the last letter of each peak name is the same as the first letter of its corresponding river name. 

**Display** the **peak name**, the **river name**, and the **obtained mix(converted to lower case).** 

**Sort the results by the obtained mix alphabetically.** 

**Run your query statements & submit the output from the queries as plain text.**



## Example:

| peak_name | river_name | mix |
| --- | --- | --- |
| Aconcagua | Amazon | aconcaguamazon |
| Banski Suhodol | Lena | banski suhodolena |
| ..... | ..... | ..... |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
Aconcagua
Amazon
aconcaguamazon
Aconcagua
Amur
aconcaguamur
Banski Suhodol
Lena
banski suhodolena
Banski Suhodol
Lower Tunguska
banski suhodolower tunguska
Botev
Volga
botevolga
Carstensz Pyramid
Danube
carstensz pyramidanube
Damavand
Danube
damavandanube
Elbrus
Saint Lawrence
elbrusaint lawrence
Elbrus
Salween
elbrusalween
Elbrus
São Francisco
elbrusão francisco
Elbrus
Shatt al-Arab
elbrushatt al-arab
Elbrus
Syr Darya
elbrusyr darya
Everest
Tocantins
everestocantins
Galán
Niger
galániger
Galán
Nile
galánile
Golyam Polezhan
Niger
golyam polezhaniger
Golyam Polezhan
Nile
golyam polezhanile
Julianatop
Paraná
julianatoparaná
Julianatop
Purús
julianatopurús
Kamenitsa
Amazon
kamenitsamazon
Kamenitsa
Amur
kamenitsamur
Kangchenjunga
Amazon
kangchenjungamazon
Kangchenjunga
Amur
kangchenjungamur
Kilimanjaro
Ob
kilimanjarob
Kom
Mackenzie
komackenzie
Kom
Madeira
komadeira
Kom
Mekong
komekong
Kom
Mississippi
komississippi
Kom
Murray
komurray
Kutelo
Ob
kutelob
Malak Polezhan
Niger
malak polezhaniger
Malak Polezhan
Nile
malak polezhanile
Malka Musala
Amazon
malka musalamazon
Malka Musala
Amur
malka musalamur
Malyovitsa
Amazon
malyovitsamazon
Malyovitsa
Amur
malyovitsamur
Mawenzi
Indus
mawenzindus
Mercedario
Ob
mercedariob
Monte Pissis
Saint Lawrence
monte pissisaint lawrence
Monte Pissis
Salween
monte pissisalween
Monte Pissis
São Francisco
monte pissisão francisco
Monte Pissis
Shatt al-Arab
monte pissishatt al-arab
Monte Pissis
Syr Darya
monte pissisyr darya
Mount Kenya
Amazon
mount kenyamazon
Mount Kenya
Amur
mount kenyamur
Mount Logan
Niger
mount loganiger
Mount Logan
Nile
mount loganile
Mount McKinley
Yangtze
mount mckinleyangtze
Mount McKinley
Yellow River
mount mckinleyellow river
Mount McKinley
Yenisei
mount mckinleyenisei
Mount McKinley
Yukon
mount mckinleyukon
Mount Shinn
Niger
mount shinniger
Mount Shinn
Nile
mount shinnile
Mount Sidley
Yangtze
mount sidleyangtze
Mount Sidley
Yellow River
mount sidleyellow river
Mount Sidley
Yenisei
mount sidleyenisei
Mount Sidley
Yukon
mount sidleyukon
Musala
Amazon
musalamazon
Musala
Amur
musalamur
Ojos del Salado
Ob
ojos del saladob
Orlovets
Saint Lawrence
orlovetsaint lawrence
Orlovets
Salween
orlovetsalween
Orlovets
São Francisco
orlovetsão francisco
Orlovets
Shatt al-Arab
orlovetshatt al-arab
Orlovets
Syr Darya
orlovetsyr darya
Pico de Orizaba
Amazon
pico de orizabamazon
Pico de Orizaba
Amur
pico de orizabamur
Pissis
Saint Lawrence
pissisaint lawrence
Pissis
Salween
pissisalween
Pissis
São Francisco
pissisão francisco
Pissis
Shatt al-Arab
pissishatt al-arab
Pissis
Syr Darya
pissisyr darya
Puncak Trikora
Amazon
puncak trikoramazon
Puncak Trikora
Amur
puncak trikoramur
Shkhara
Amazon
shkharamazon
Shkhara
Amur
shkharamur
Vezhen
Niger
vezheniger
Vezhen
Nile
vezhenile
Vihren
Niger
vihreniger
Vihren
Nile
vihrenile
[/input]
[output]
Aconcagua
Amazon
aconcaguamazon
Aconcagua
Amur
aconcaguamur
Banski Suhodol
Lena
banski suhodolena
Banski Suhodol
Lower Tunguska
banski suhodolower tunguska
Botev
Volga
botevolga
Carstensz Pyramid
Danube
carstensz pyramidanube
Damavand
Danube
damavandanube
Elbrus
Saint Lawrence
elbrusaint lawrence
Elbrus
Salween
elbrusalween
Elbrus
São Francisco
elbrusão francisco
Elbrus
Shatt al-Arab
elbrushatt al-arab
Elbrus
Syr Darya
elbrusyr darya
Everest
Tocantins
everestocantins
Galán
Niger
galániger
Galán
Nile
galánile
Golyam Polezhan
Niger
golyam polezhaniger
Golyam Polezhan
Nile
golyam polezhanile
Julianatop
Paraná
julianatoparaná
Julianatop
Purús
julianatopurús
Kamenitsa
Amazon
kamenitsamazon
Kamenitsa
Amur
kamenitsamur
Kangchenjunga
Amazon
kangchenjungamazon
Kangchenjunga
Amur
kangchenjungamur
Kilimanjaro
Ob
kilimanjarob
Kom
Mackenzie
komackenzie
Kom
Madeira
komadeira
Kom
Mekong
komekong
Kom
Mississippi
komississippi
Kom
Murray
komurray
Kutelo
Ob
kutelob
Malak Polezhan
Niger
malak polezhaniger
Malak Polezhan
Nile
malak polezhanile
Malka Musala
Amazon
malka musalamazon
Malka Musala
Amur
malka musalamur
Malyovitsa
Amazon
malyovitsamazon
Malyovitsa
Amur
malyovitsamur
Mawenzi
Indus
mawenzindus
Mercedario
Ob
mercedariob
Monte Pissis
Saint Lawrence
monte pissisaint lawrence
Monte Pissis
Salween
monte pissisalween
Monte Pissis
São Francisco
monte pissisão francisco
Monte Pissis
Shatt al-Arab
monte pissishatt al-arab
Monte Pissis
Syr Darya
monte pissisyr darya
Mount Kenya
Amazon
mount kenyamazon
Mount Kenya
Amur
mount kenyamur
Mount Logan
Niger
mount loganiger
Mount Logan
Nile
mount loganile
Mount McKinley
Yangtze
mount mckinleyangtze
Mount McKinley
Yellow River
mount mckinleyellow river
Mount McKinley
Yenisei
mount mckinleyenisei
Mount McKinley
Yukon
mount mckinleyukon
Mount Shinn
Niger
mount shinniger
Mount Shinn
Nile
mount shinnile
Mount Sidley
Yangtze
mount sidleyangtze
Mount Sidley
Yellow River
mount sidleyellow river
Mount Sidley
Yenisei
mount sidleyenisei
Mount Sidley
Yukon
mount sidleyukon
Musala
Amazon
musalamazon
Musala
Amur
musalamur
Ojos del Salado
Ob
ojos del saladob
Orlovets
Saint Lawrence
orlovetsaint lawrence
Orlovets
Salween
orlovetsalween
Orlovets
São Francisco
orlovetsão francisco
Orlovets
Shatt al-Arab
orlovetshatt al-arab
Orlovets
Syr Darya
orlovetsyr darya
Pico de Orizaba
Amazon
pico de orizabamazon
Pico de Orizaba
Amur
pico de orizabamur
Pissis
Saint Lawrence
pissisaint lawrence
Pissis
Salween
pissisalween
Pissis
São Francisco
pissisão francisco
Pissis
Shatt al-Arab
pissishatt al-arab
Pissis
Syr Darya
pissisyr darya
Puncak Trikora
Amazon
puncak trikoramazon
Puncak Trikora
Amur
puncak trikoramur
Shkhara
Amazon
shkharamazon
Shkhara
Amur
shkharamur
Vezhen
Niger
vezheniger
Vezhen
Nile
vezhenile
Vihren
Niger
vihreniger
Vihren
Nile
vihrenile
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Part 3 - Queries from Diablo Database

[/slide]

[slide hideTitle]

# Problem: Games from 2011 and 2012 Year
[code-task title="Games from 2011 and 2012 Year" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-games-from-2011-and-2012-year" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
# Description

Find the **top 50 games ordered by start date, then by name.**

Display only the **games from the years 2011 and 2012.**

Display the start date in the format **"YYYY-MM-DD".**

**Run your query statements & submit the output from the queries as plain text.**



## Example:

| name | start |
| --- | --- |
| Rose Royalty | 2011-01-05 |
| London | 2011-01-13 |
| Broadway | 2011-01-16 |
| ..... | ..... |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
Rose Royalty
2011-01-05
London
2011-01-13
Broadway
2011-01-16
Phuket
2011-01-25
Fulvous
2011-02-14
Milan
2011-02-18
Tokyo
2011-02-24
Washington D.C.
2011-03-03
Lily Casa Blanca
2011-03-15
Orlando
2011-03-24
Ablajeck
2011-03-29
Bangkok
2011-04-04
Bogotá
2011-04-28
Delhi
2011-05-09
Budapest
2011-05-12
Chicago
2011-06-05
Allied Tion
2011-06-08
Safflower
2011-06-26
Strawflower
2011-07-01
Mexico City
2011-07-23
San Diego
2011-08-06
Snapdragon apple blossom
2011-08-12
Stephanotis
2011-08-19
Alderaan
2011-08-21
New York
2011-09-06
Melaleuca
2011-09-08
Delphinium Pacific Giant
2011-09-10
Flax New Zealand
2011-09-16
Freesia
2011-09-24
Auckland
2011-10-14
Eucalyptus silver dollar
2011-10-17
Lily Elite
2011-10-18
Petra
2011-11-09
Macau
2011-11-09
Japhette orchid
2011-11-09
Sweet William
2011-11-10
Stonehenge
2011-11-17
Seattle
2011-12-14
Wellington
2011-12-20
Zürich
2012-01-17
Yosemite
2012-01-24
Tulip pink
2012-01-27
Dallas
2012-01-31
Paris
2012-02-01
Stock lavender
2012-02-02
Foxtail fern
2012-02-03
Honolulu
2012-02-05
Florence
2012-04-02
Stockholm
2012-04-18
Machu Picchu
2012-04-30
[/input]
[output]
Rose Royalty
2011-01-05
London
2011-01-13
Broadway
2011-01-16
Phuket
2011-01-25
Fulvous
2011-02-14
Milan
2011-02-18
Tokyo
2011-02-24
Washington D.C.
2011-03-03
Lily Casa Blanca
2011-03-15
Orlando
2011-03-24
Ablajeck
2011-03-29
Bangkok
2011-04-04
Bogotá
2011-04-28
Delhi
2011-05-09
Budapest
2011-05-12
Chicago
2011-06-05
Allied Tion
2011-06-08
Safflower
2011-06-26
Strawflower
2011-07-01
Mexico City
2011-07-23
San Diego
2011-08-06
Snapdragon apple blossom
2011-08-12
Stephanotis
2011-08-19
Alderaan
2011-08-21
New York
2011-09-06
Melaleuca
2011-09-08
Delphinium Pacific Giant
2011-09-10
Flax New Zealand
2011-09-16
Freesia
2011-09-24
Auckland
2011-10-14
Eucalyptus silver dollar
2011-10-17
Lily Elite
2011-10-18
Petra
2011-11-09
Macau
2011-11-09
Japhette orchid
2011-11-09
Sweet William
2011-11-10
Stonehenge
2011-11-17
Seattle
2011-12-14
Wellington
2011-12-20
Zürich
2012-01-17
Yosemite
2012-01-24
Tulip pink
2012-01-27
Dallas
2012-01-31
Paris
2012-02-01
Stock lavender
2012-02-02
Foxtail fern
2012-02-03
Honolulu
2012-02-05
Florence
2012-04-02
Stockholm
2012-04-18
Machu Picchu
2012-04-30
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: User Email Providers
[code-task title="User Email Providers" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-user-email-providers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Find information about the email providers of all users. 

Display the **user_name** and the **email provider.**
Sort the results by **email provider alphabetically**, then by **username**. 

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| user_name | Email Provider |
| --- | --- |
| Pesho | abv.bg |
| monoxidecos | astonrasuna.com |
| bashsassafras | balibless.com |
| ..... | ..... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Pesho
abv.bg
monoxidecos
astonrasuna.com
bashsassafras
balibless.com
corruptpizz
balimandira.com
bullockssip
bonansatours.com
intpox
cbn.net.id
obliquepoof
csdwholiday.com
cagedegyptian
denpasar.wasantara.net.id
fixedbucking
dps.centrin.net.id
hinneybiggest
dps.centrin.net.id
leakingpity
dps.centrin.net.id
nangindragon
dps.centrin.net.id
ofliving
dps.centrin.net.id
Minka
gmail.com
Stamat
gmail.com
electfarty
hotelpadma.com
rotoriginally
hotmail.com
shodepee
hotmail.com
sinceregrand
houseofbali.com
bindbawdy
idn.xerox.com
buildingdeltoid
ifc.org
hamtemple
indo.net.id
inguinalself
indo.net.id
darwinquotient
indosat.net.id
rateweed
indosat.net.id
unchinmole
indosat.net.id
unfriendlyfurther
indosat.net.id
warmbloodproclaim
interconti.com
whiningdelay
interconti.com
slushyinflate
jayakartahotelsresorts.com
virtuecoxcomb
jayakartahotelsresorts.com
posteriorflowery
kbatur.com
Siyka
mail.bg
skirltremendous
mailcity.com
karateperihelion
mas-travel.com
denyofficial
mataram.wasantara.net.id
irritatingdeter
meekness.com
premiumseal
ncsecurities.biz
studentdroopy
novotelbali.com
countrydecay
nusaduahotel.com
yikeshydrostatic
posindonesia.co.id
brooklyndecent
ramayanahotel.com
filknotation
ramayanahotel.com
Alex
softuni.bg
nakov
softuni.bg
Petya
softuni.bg
VGeorgiev
softuni.bg
vladislav.karamfilov
softuni.bg
advisersspry
stpbali.ac.id
chewyway
telkomsel.co.id
skippingside
telkomsel.co.id
baroquegainful
thebale.com
swingbark
toureast.net
sweethorseman
tuguhotels.com
crowncrackers
yahoo.co.id
potterssnarky
yahoo.co.id
admincuttle
yahoo.com
baleremuda
yahoo.com
citiesgrill
yahoo.com
diagramsadagio
yahoo.com
evolvingimportant
yahoo.com
gluttonousraspberry
yahoo.com
halleycurved
yahoo.com
hurdlesurmise
yahoo.com
ionoriole
yahoo.com
neutralgazump
yahoo.com
presidentsbasal
yahoo.com
printerstencils
yahoo.com
terrifymarzipan
yahoo.com
wagtailspicy
yahoo.com
loosenoise
yahoo.com.sg
[/input]
[output]
Pesho
abv.bg
monoxidecos
astonrasuna.com
bashsassafras
balibless.com
corruptpizz
balimandira.com
bullockssip
bonansatours.com
intpox
cbn.net.id
obliquepoof
csdwholiday.com
cagedegyptian
denpasar.wasantara.net.id
fixedbucking
dps.centrin.net.id
hinneybiggest
dps.centrin.net.id
leakingpity
dps.centrin.net.id
nangindragon
dps.centrin.net.id
ofliving
dps.centrin.net.id
Minka
gmail.com
Stamat
gmail.com
electfarty
hotelpadma.com
rotoriginally
hotmail.com
shodepee
hotmail.com
sinceregrand
houseofbali.com
bindbawdy
idn.xerox.com
buildingdeltoid
ifc.org
hamtemple
indo.net.id
inguinalself
indo.net.id
darwinquotient
indosat.net.id
rateweed
indosat.net.id
unchinmole
indosat.net.id
unfriendlyfurther
indosat.net.id
warmbloodproclaim
interconti.com
whiningdelay
interconti.com
slushyinflate
jayakartahotelsresorts.com
virtuecoxcomb
jayakartahotelsresorts.com
posteriorflowery
kbatur.com
Siyka
mail.bg
skirltremendous
mailcity.com
karateperihelion
mas-travel.com
denyofficial
mataram.wasantara.net.id
irritatingdeter
meekness.com
premiumseal
ncsecurities.biz
studentdroopy
novotelbali.com
countrydecay
nusaduahotel.com
yikeshydrostatic
posindonesia.co.id
brooklyndecent
ramayanahotel.com
filknotation
ramayanahotel.com
Alex
softuni.bg
nakov
softuni.bg
Petya
softuni.bg
VGeorgiev
softuni.bg
vladislav.karamfilov
softuni.bg
advisersspry
stpbali.ac.id
chewyway
telkomsel.co.id
skippingside
telkomsel.co.id
baroquegainful
thebale.com
swingbark
toureast.net
sweethorseman
tuguhotels.com
crowncrackers
yahoo.co.id
potterssnarky
yahoo.co.id
admincuttle
yahoo.com
baleremuda
yahoo.com
citiesgrill
yahoo.com
diagramsadagio
yahoo.com
evolvingimportant
yahoo.com
gluttonousraspberry
yahoo.com
halleycurved
yahoo.com
hurdlesurmise
yahoo.com
ionoriole
yahoo.com
neutralgazump
yahoo.com
presidentsbasal
yahoo.com
printerstencils
yahoo.com
terrifymarzipan
yahoo.com
wagtailspicy
yahoo.com
loosenoise
yahoo.com.sg
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Get Users with IP Address Like Pattern
[code-task title="Get Users with IP Address Like Pattern" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-get-users-with-ip-address-like-pattern" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Find the **user_name** and the **ip_address** for each user, sorted by **user_name alphabetically.**

Display only the rows, where the **ip_address** matches the pattern: "\_\_\_.1%.%.\_\_\_". 

Run your query statements & submit the output from the queries as plain text.



## Example:

| user_name | ip_address |
| --- | --- |
| bindbawdy | 192.157.20.222 |
| evolvingimportant | 223.175.227.173 |
| inguinalself | 255.111.250.207 |
| ..... | ..... |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
bindbawdy
192.157.20.222
evolvingimportant
223.175.227.173
inguinalself
255.111.250.207
irritatingdeter
193.120.9.208
loosenoise
215.129.178.110
neutralgazump
142.119.249.171
Petya
134.108.213.164
rotoriginally
146.141.16.116
slushyinflate
156.197.106.224
Stamat
180.166.72.243
sweethorseman
174.165.203.176
[/input]
[output]
bindbawdy
192.157.20.222
evolvingimportant
223.175.227.173
inguinalself
255.111.250.207
irritatingdeter
193.120.9.208
loosenoise
215.129.178.110
neutralgazump
142.119.249.171
Petya
134.108.213.164
rotoriginally
146.141.16.116
slushyinflate
156.197.106.224
Stamat
180.166.72.243
sweethorseman
174.165.203.176
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Show All Games with Duration and Part of the Day
[code-task title="Show All Games with Duration and Part of the Day" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-show-all-games-with-duration-and-part-of-the-day" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

// ToDo: The tests do not cover the output in the example. To investigate this in the future.

[/slide]

[slide hideTitle]

# Part 4 - Date Functions Queries

[/slide]

[slide hideTitle]
# Problem: Orders Table
[code-task title="Problem: Orders Table" taskId="bcff865f-d6be-42df-9707-86042bde4549" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

You are given a table **orders (id, product_name, order_date)** filled with data.

Consider that the **payment** for an order must be accomplished **within 3 days after the order date.** 

Also **the delivery date is up to 1 month.** Write a query to show each product's **name, order date, pay and deliver due dates.**

**Run your query statements & submit the output from the queries as plain text.**


## Original Table:

| id | product_name | order_date |
| --- | --- | --- |
| 1 | Butter | 2016-09-19 00:00:00 |
| 2 | Milk | 2016-09-30 00:00:00 |
| 3 | Cheese | 2016-09-04 00:00:00 |
| 4 | Bread | 2015-12-20 00:00:00 |
| 5 | Tomatoes | 2015-12-30 00:00:00 |
| ..... | ..... | ..... |


## Example:

| product_name | order_date | pay_due | deliver_due |
| --- | --- | --- | --- |
| Butter | 2016-09-19 00:00:00 | 2016-09-22 00:00:00 | 2016-10-19 00:00:00 |
| Milk | 2016-09-30 00:00:00 | 2016-10-03 00:00:00 | 2016-10-30 00:00:00 |
| Cheese | 2016-09-04 00:00:00 | 2016-09-07 00:00:00 | 2016-10-04 00:00:00 |
| Bread | 2015-12-20 00:00:00 | 2015-12-23 00:00:00 | 2016-01-20 00:00:00 |
| Tomatoes | 2015-12-30 00:00:00 | 2016-01-02 00:00:00 | 2016-01-30 00:00:00 |
| ..... | ..... | ..... | ..... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Butter
2016-09-19 00:00:00
2016-09-22 00:00:00
2016-10-19 00:00:00
Milk
2016-09-30 00:00:00
2016-10-03 00:00:00
2016-10-30 00:00:00
Cheese
2016-09-04 00:00:00
2016-09-07 00:00:00
2016-10-04 00:00:00
Bread
2015-12-20 00:00:00
2015-12-23 00:00:00
2016-01-20 00:00:00
Tomatoes
2015-01-01 00:00:00
2015-01-04 00:00:00
2015-02-01 00:00:00
Tomatoe2
2015-02-01 00:00:00
2015-02-04 00:00:00
2015-03-01 00:00:00
Tomatoess
2015-04-01 00:00:00
2015-04-04 00:00:00
2015-05-01 00:00:00
Tomatoe3
2015-01-28 00:00:00
2015-01-31 00:00:00
2015-02-28 00:00:00
Tomatoe4
2015-06-28 00:00:00
2015-07-01 00:00:00
2015-07-28 00:00:00
Tomatoe44s
2015-06-30 00:00:00
2015-07-03 00:00:00
2015-07-30 00:00:00
Tomatoefggs
2015-02-28 00:00:00
2015-03-03 00:00:00
2015-03-28 00:00:00
Tomatoesytu
2016-02-28 00:00:00
2016-03-02 00:00:00
2016-03-28 00:00:00
Toyymatddoehys
2015-12-31 00:00:00
2016-01-03 00:00:00
2016-01-31 00:00:00
Tom443atoes
2015-12-15 00:00:00
2015-12-18 00:00:00
2016-01-15 00:00:00
Tomat65434foe23gfhgsPep
2015-10-04 00:00:00
2015-10-07 00:00:00
2015-11-04 00:00:00
[/input]
[output]
Butter
2016-09-19 00:00:00
2016-09-22 00:00:00
2016-10-19 00:00:00
Milk
2016-09-30 00:00:00
2016-10-03 00:00:00
2016-10-30 00:00:00
Cheese
2016-09-04 00:00:00
2016-09-07 00:00:00
2016-10-04 00:00:00
Bread
2015-12-20 00:00:00
2015-12-23 00:00:00
2016-01-20 00:00:00
Tomatoes
2015-01-01 00:00:00
2015-01-04 00:00:00
2015-02-01 00:00:00
Tomatoe2
2015-02-01 00:00:00
2015-02-04 00:00:00
2015-03-01 00:00:00
Tomatoess
2015-04-01 00:00:00
2015-04-04 00:00:00
2015-05-01 00:00:00
Tomatoe3
2015-01-28 00:00:00
2015-01-31 00:00:00
2015-02-28 00:00:00
Tomatoe4
2015-06-28 00:00:00
2015-07-01 00:00:00
2015-07-28 00:00:00
Tomatoe44s
2015-06-30 00:00:00
2015-07-03 00:00:00
2015-07-30 00:00:00
Tomatoefggs
2015-02-28 00:00:00
2015-03-03 00:00:00
2015-03-28 00:00:00
Tomatoesytu
2016-02-28 00:00:00
2016-03-02 00:00:00
2016-03-28 00:00:00
Toyymatddoehys
2015-12-31 00:00:00
2016-01-03 00:00:00
2016-01-31 00:00:00
Tom443atoes
2015-12-15 00:00:00
2015-12-18 00:00:00
2016-01-15 00:00:00
Tomat65434foe23gfhgsPep
2015-10-04 00:00:00
2015-10-07 00:00:00
2015-11-04 00:00:00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Part 5 - Use the "gringotts" database.

Mr. Bodrog is a greedy small goblin. His most precious possession is a small database of the deposits in 
the wizard world. 

Mr. Bodrog wants you to send him some reports.

[/slide]

[slide hideTitle]
# Problem: Records' Count
[code-task title="Records' Count" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-records-count" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Import the database and send the **total count of records** to Mr.Bodrog.

Make sure nothing got lost.

**Run your query statements & submit the output from the queries as plain text.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
162
[/input]
[output]
162
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Longest Magic Wand
[code-task title="Longest Magic Wand" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-longest-magic-wand" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description

Select the size of the **longest magic wand.** Rename the new column appropriately.

**Run your query statements & submit the output from the queries as plain text.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
31
[/input]
[output]
31
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Longest Magic Wand Per Deposit Groups
[code-task title="Longest Magic Wand Per Deposit Groups" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-longest-magic-wand-per-deposit-groups" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description

For wizards in each deposit group show the longest magic wand. 

**Sort result by longest magic wand** for each deposit group **in increasing order**, then by **deposit_group** alphabetically. 

Rename the new column appropriately.

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| deposit_group | longest_magic_wand |
| Human Pride | 30 |
| ..... | ..... |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
Human Pride
30
Blue Phoenix
31
Troll Chest
31
Venomous Tongue
31
[/input]
[output]
Human Pride
30
Blue Phoenix
31
Troll Chest
31
Venomous Tongue
31
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Smallest Deposit Group Per Magic Wand Size *
[code-task title="Smallest Deposit Group Per Magic Wand Size" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-smallest-deposit-group-per-magic-wand-size" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Select the deposit group with the **lowest** average wand size.

**Run your query statements & submit the output from the queries as plain text.**


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Troll Chest
[/input]
[output]
Troll Chest
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Deposits Sum
[code-task title="Deposits Sum" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-deposit-sum" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Select all deposit groups and its **total deposit sum**. Sort result by **total_sum** in **increasing order.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| deposit_group | total_sum |
| --- | --- |
| Blue Phoenix | 819598.73 |
| ..... | ..... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Blue Phoenix
819598.73
Troll Chest
955346.09
Human Pride
1041291.52
Venomous Tongue
1054128.94
[/input]
[output]
Blue Phoenix
819598.73
Troll Chest
955346.09
Human Pride
1041291.52
Venomous Tongue
1054128.94
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Deposits Sum for Ollivander Family
[code-task title="Deposits Sum for Ollivander Family" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-deposits-sum-for-ollivander-family" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description

Select all deposit groups and its total deposit sum but **only for the wizards who has their magic wand crafted by Ollivander family.** 

Sort result by **deposit_group alphabetically.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| deposit_group | total_sum |
| --- | --- |
| Blue Phoenix | 52968.96 |
| Human Pride | 188366.86 |
| ..... | ..... |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
Blue Phoenix
52968.96
Human Pride
188366.86
Troll Chest
126585.18
Venomous Tongue
257056.04
[/input]
[output]
Blue Phoenix
52968.96
Human Pride
188366.86
Troll Chest
126585.18
Venomous Tongue
257056.04
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Deposits Filter
[code-task title="Deposits Filter" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-deposits-filter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Select all deposit groups and its total deposit sum but **only for the wizards who has their magic wand crafted by Ollivander family.** 

After this, **filter** total deposit sums **lower than 150000.** Order by total deposit sum in **descending order.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| deposit_group | total_sum |
| --- | --- |
| Troll Chest | 126585.18 |
| ..... | ..... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Troll Chest
126585.18
Blue Phoenix
52968.96
[/input]
[output]
Troll Chest
126585.18
Blue Phoenix
52968.96
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Deposit Charge
[code-task title="Deposit Charge" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-deposit-charge" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Create a query that selects:

- **Deposit group**
- **Magic wand creator**
- **Minimum deposit charge for each group**

Group by deposit_group and magic_wand_creator.

Select the data in **ascending order** by **magic_wand_creator** and **deposit_group.**

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| deposit_group | magic_wand_creator | min_deposit_charge |
| --- | --- | --- |
| Blue Phoenix | Antioch Peverell | 30.00 |
| ..... | ..... | ..... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Blue Phoenix
Antioch Peverell
30.00
Human Pride
Antioch Peverell
23.00
Troll Chest
Antioch Peverell
46.00
Venomous Tongue
Antioch Peverell
27.00
Blue Phoenix
Arturo Cephalopos
17.00
Human Pride
Arturo Cephalopos
6.00
Troll Chest
Arturo Cephalopos
11.00
Venomous Tongue
Arturo Cephalopos
22.00
Blue Phoenix
Death
36.00
Human Pride
Death
3.00
Troll Chest
Death
16.00
Venomous Tongue
Death
1.00
Blue Phoenix
Jimmy Kiddell
4.00
Human Pride
Jimmy Kiddell
15.00
Troll Chest
Jimmy Kiddell
1.00
Venomous Tongue
Jimmy Kiddell
35.00
Blue Phoenix
Mykew Gregorovitch
7.00
Human Pride
Mykew Gregorovitch
42.00
Troll Chest
Mykew Gregorovitch
17.00
Venomous Tongue
Mykew Gregorovitch
5.00
Blue Phoenix
Ollivander family
21.00
Human Pride
Ollivander family
7.00
Troll Chest
Ollivander family
21.00
Venomous Tongue
Ollivander family
23.00
[/input]
[output]
Blue Phoenix
Antioch Peverell
30.00
Human Pride
Antioch Peverell
23.00
Troll Chest
Antioch Peverell
46.00
Venomous Tongue
Antioch Peverell
27.00
Blue Phoenix
Arturo Cephalopos
17.00
Human Pride
Arturo Cephalopos
6.00
Troll Chest
Arturo Cephalopos
11.00
Venomous Tongue
Arturo Cephalopos
22.00
Blue Phoenix
Death
36.00
Human Pride
Death
3.00
Troll Chest
Death
16.00
Venomous Tongue
Death
1.00
Blue Phoenix
Jimmy Kiddell
4.00
Human Pride
Jimmy Kiddell
15.00
Troll Chest
Jimmy Kiddell
1.00
Venomous Tongue
Jimmy Kiddell
35.00
Blue Phoenix
Mykew Gregorovitch
7.00
Human Pride
Mykew Gregorovitch
42.00
Troll Chest
Mykew Gregorovitch
17.00
Venomous Tongue
Mykew Gregorovitch
5.00
Blue Phoenix
Ollivander family
21.00
Human Pride
Ollivander family
7.00
Troll Chest
Ollivander family
21.00
Venomous Tongue
Ollivander family
23.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Age Groups
[code-task title="Age Groups" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-age-groups" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Create a query that creates 7 different groups **based on their age.**

Age groups should be as follows:

- \[0-10\]
- \[11-20\]
- \[21-30\]
- \[31-40\]
- \[41-50\]
- \[51-60\]
- \[61+\]

The query should return:

- **Age groups**

- **Count of wizards in it**

Sort result by **increasing size** of age groups.

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| age_group | wizard_count |
| --- | --- |
| \[11-20\] | Antioch Peverell |
| ..... | ..... | 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
\[11-20\]
21
\[21-30\]
32
\[31-40\]
28
\[41-50\]
24
\[51-60\]
26
\[61+\]
31
[/input]
[output]
\[11-20\]
21
\[21-30\]
32
\[31-40\]
28
\[41-50\]
24
\[51-60\]
26
\[61+\]
31
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: First Letter
[code-task title="First Letter" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-first-letter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Create a query that returns all **unique** wizard **first letters of their first names only if they have deposit of type Troll Chest.** 

Order them **alphabetically**. Use **GROUP BY** for uniqueness.

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| first_letter |
| --- |
| A |
| ... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
A
B
C
D
E
F
G
H
K
L
M
N
P
R
S
V
W
Y
[/input]
[output]
A
B
C
D
E
F
G
H
K
L
M
N
P
R
S
V
W
Y
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Average Interest
[code-task title="Average Interest" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-average-interest" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Mr. Bodrog is highly interested in profitability. 

He wants to know the average interest of all deposits groups split by whether the deposit **has expired** or **not.** 

But that is not all. He wants you to select deposits with **start date after 01/01/1985.** 

Order the data **descending** by Deposit Group and **ascending** by Expiration Flag.

**Run your query statements & submit the output from the queries as plain text.**

## Examples:

| deposit_group | is_deposit_expired | average_interest |
| --- | --- | --- |
| Venomous Tongue | 0 | 16.698947 |
| Venomous Tongue | 1 | 13.147500 |
| Troll Chest | 0 | 21.623571 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Venomous Tongue
0
16.698947
Venomous Tongue
1
13.147500
Troll Chest
0
21.623571
Troll Chest
1
15.212500
Human Pride
0
13.745556
Human Pride
1
19.244615
Blue Phoenix
0
15.739048
Blue Phoenix
1
21.785000
[/input]
[output]
Venomous Tongue
0
16.698947
Venomous Tongue
1
13.147500
Troll Chest
0
21.623571
Troll Chest
1
15.212500
Human Pride
0
13.745556
Human Pride
1
19.244615
Blue Phoenix
0
15.739048
Blue Phoenix
1
21.785000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Employees Minimum Salaries
[code-task title="Employees Minimum Salaries" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-employees-minimum-salaries" executionType="tests-execution" executionStrategy="java-code" requiresInput]

[/code-editor]
[task-description]
## Description

**Use soft_uni database.**

You have decided to find a proper job as an analyst in **SoftUni**.

It is not a surprise that you will use the **soft_uni database.**

Select the minimum salary from the employees for departments with **ID (2,5,7)** but only for those who are **hired after 01/01/2000.** 

Sort result by **department_id** in **ascending** order.

Your query should return:

- department_id

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| department_id | minimum_salary |
| --- | --- |
| 2 | 25000.00 |
| ... | ... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
25000.0000
5
12800.0000
7
9500.0000
[/input]
[output]
2
25000.0000
5
12800.0000
7
9500.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Employees Average Salaries
[code-task title="Employees Average Salaries" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-employees-average-salaries" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Select all high paid employees who earn **more than 30000** into a new table. 

Then **delete** all high paid employees who have **manager_id = 42** from the new table. 

Then **increase** the salaries of all high paid **employees with department_id = 1 with 5000** in the new table. 

Finally, select the **average** salaries in each department from the new table. 

Sort result by **department_id in increasing order.**

**Run your query statements & submit the output from the queries as plain text.**


## Example:

| department_id | avg_salary |
| --- | --- |
| 1 | 45166.6666 |
| ... | ... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
45166.66666667
3
54100.00000000
5
37500.00000000
6
45542.85714286
7
84100.00000000
10
39000.00000000
11
38500.00000000
16
92800.00000000
[/input]
[output]
1
45166.66666667
3
54100.00000000
5
37500.00000000
6
45542.85714286
7
84100.00000000
10
39000.00000000
11
38500.00000000
16
92800.00000000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Employees Maximum Salaries
[code-task title="Employees Maximum Salaries" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-employees-maximum-salaries" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Find the max salary for each department. 

Filter those which have max salaries not in the range 30000 and 70000. 

Sort result by department_id in increasing order.

**Run your query statements & submit the output from the queries as plain text.**


## Example:

| department_id | max_salary |
| --- | --- |
| 2 | 29800.00 |
| ... | ... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
29800.0000
3
72100.0000
4
14400.0000
7
84100.0000
8
24500.0000
9
27100.0000
12
17800.0000
14
24000.0000
15
19200.0000
16
125500.0000
[/input]
[output]
2
29800.0000
3
72100.0000
4
14400.0000
7
84100.0000
8
24500.0000
9
27100.0000
12
17800.0000
14
24000.0000
15
19200.0000
16
125500.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Employees Count Salaries
[code-task title="Employees Count Salaries" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-employees-count-salaries" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description
Count the salaries of all employees who **do not have a manager.**

**Run your query statements & submit the output from the queries as plain text.**


[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
[/input]
[output]
4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: 3rd Highest Salary
[code-task title="Problem: 3rd Highest Salary" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-3rd-highest-salary" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Find the **third highest salary** in each **department** if there is such. 

Sort result by **department_id** in **increasing order.**

**Run your query statements & submit the output from the queries as plain text.**

## Examples:

| department_id | third_highest_salary |
| --- | --- |
| 1 | 36100.00 |
| 2 | 25000.00 |
| ..... | ..... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
36100.0000
2
25000.0000
3
23100.0000
5
12800.0000
6
42500.0000
7
15000.0000
8
16000.0000
9
16600.0000
10
26400.0000
11
38500.0000
12
10300.0000
13
21600.0000
14
9800.0000
15
9000.0000
[/input]
[output]
1
36100.0000
2
25000.0000
3
23100.0000
5
12800.0000
6
42500.0000
7
15000.0000
8
16000.0000
9
16600.0000
10
26400.0000
11
38500.0000
12
10300.0000
13
21600.0000
14
9800.0000
15
9000.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Departments Total Salaries
[code-task title="Departments Total Salaries" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-departments-total-salaries" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Create a query ,which shows the **total sum of salaries** for each department.

**Order by department_id.**

Your query should return:	

- department_id

**Run your query statements & submit the output from the queries as plain text.**

## Examples:

| department_id | total_salary |
| --- | --- |
| 1 | 241000.00 |
| ..... | ..... |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
241000.0000
2
108600.0000
3
539800.0000
4
112500.0000
5
227800.0000
6
318800.0000
7
2535100.0000
8
112100.0000
9
108100.0000
10
239300.0000
11
341800.0000
12
72000.0000
13
122800.0000
14
91400.0000
15
65200.0000
16
185600.0000
[/input]
[output]
1
241000.0000
2
108600.0000
3
539800.0000
4
112500.0000
5
227800.0000
6
318800.0000
7
2535100.0000
8
112100.0000
9
108100.0000
10
239300.0000
11
341800.0000
12
72000.0000
13
122800.0000
14
91400.0000
15
65200.0000
16
185600.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Homework Results

[tasks-results/]

[/slide]
