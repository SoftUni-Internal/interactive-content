[slide hideTitle]

# Homework

[/slide]

[slide hideTitle]
# Problem: Find All Information About Departments
[code-task title="Problem: Find All Information About Departments" taskId="ff777793-c543-4504-8b1d-461a3a1351b2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/03.MySQL-Basic-CRUD-Databases-Homework.zip) **for this task.**

Download and get familiar with the **soft_uni, diablo and geography** database schemas and tables. 

You will use them in this and the following exercises to write queries. 

**Queries for SoftUni Database**

Write a SQL query to find **all available information about the departments.**

**Sort the information by id.**

 Submit your query statements as **Prepare DB & run queries.** 

## Examples
| **department_id** | **name** | **manager_id** |
| --- | --- | --- |
| 1  | Engineering  | 12  |
| 2  | Tool Design  | 4  |
| 3  | Sales  | 273  |
| …  | …  | …  |
|  |  | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
Engineering
12
2
Tool Design
4
3
Sales
273
4
Marketing
46
5
Purchasing
6
6
Research and Development
42
7
Production
148
8
Production Control
21
9
Human Resources
30
10
Finance
3
11
Information Services
42
12
Document Control
90
13
Quality Assurance
274
14
Facilities and Maintenance
218
15
Shipping and Receiving
85
16
Executive
109
[/input]
[output]
1
Engineering
12
2
Tool Design
4
3
Sales
273
4
Marketing
46
5
Purchasing
6
6
Research and Development
42
7
Production
148
8
Production Control
21
9
Human Resources
30
10
Finance
3
11
Information Services
42
12
Document Control
90
13
Quality Assurance
274
14
Facilities and Maintenance
218
15
Shipping and Receiving
85
16
Executive
109
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find all Department Names
[code-task title="Problem: Find all Department Names" taskId="610b170d-07b3-4941-8821-873c0a66cde3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write SQL query to find **all department names**.

Sort the information by id. Submit your query statements as **Prepare DB & run queries**.

## Examples
| **name** |
| --- |
| Engineering  |
| Tool Design  |
| Sales  |
| …  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Engineering
Tool Design
Sales
Marketing
Purchasing
Research and Development
Production
Production Control
Human Resources
Finance
Information Services
Document Control
Quality Assurance
Facilities and Maintenance
Shipping and Receiving
Executive
[/input]
[output]
Engineering
Tool Design
Sales
Marketing
Purchasing
Research and Development
Production
Production Control
Human Resources
Finance
Information Services
Document Control
Quality Assurance
Facilities and Maintenance
Shipping and Receiving
Executive
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find salary of Each Employee 
[code-task title="Problem: Find salary of Each Employee " taskId="80b92db0-60bf-46a0-b0a8-d38b6cfc8b75" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write SQL query to find the **first name, last name and salary** of each employee.

**Sort the information by id**.

Submit your query statements as **Prepare DB & run queries**.

## Examples
| **first_name** | **last_name** | **salary** |
| --- | --- | --- |
| Guy  | Gilbert  | 12500.00  |
| Kevin  | Brown  | 13500.00  |
| Roberto  | Tamburello  | 43300.00  |
| …  | …  | …  |
|  |  | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Guy
Gilbert
12500.0000
Kevin
Brown
13500.0000
Roberto
Tamburello
43300.0000
Rob
Walters
29800.0000
Thierry
D'Hers
25000.0000
David
Bradley
37500.0000
JoLynn
Dobney
25000.0000
Ruth
Ellerbrock
13500.0000
Gail
Erickson
32700.0000
Barry
Johnson
13500.0000
Jossef
Goldberg
32700.0000
Terri
Duffy
63500.0000
Sidney
Higa
13500.0000
Taylor
Maxwell
25000.0000
Jeffrey
Ford
13500.0000
Jo
Brown
25000.0000
Doris
Hartwig
13500.0000
John
Campbell
25000.0000
Diane
Glimp
13500.0000
Steven
Selikoff
9500.0000
Peter
Krebs
24500.0000
Stuart
Munson
10000.0000
Greg
Alderson
10000.0000
David
Johnson
9500.0000
Zheng
Mu
25000.0000
Ivo
Salmre
14000.0000
Paul
Komosinski
15000.0000
Ashvini
Sharma
32500.0000
Kendall
Keil
11000.0000
Paula
Barreto de Mattos
27100.0000
Alejandro
McGuel
15000.0000
Garrett
Young
9500.0000
Jian Shuo
Wang
9500.0000
Susan
Eaton
9000.0000
Vamsi
Kuppa
9500.0000
Alice
Ciccu
11000.0000
Simon
Rapier
12500.0000
Jinghao
Liu
25000.0000
Michael
Hines
14000.0000
Yvonne
McKay
10000.0000
Peng
Wu
21600.0000
Jean
Trenary
50500.0000
Russell
Hunter
11000.0000
A. Scott
Wright
23600.0000
Fred
Northup
15000.0000
Sariya
Harnpadoungsataya
14400.0000
Willis
Johnson
18300.0000
Jun
Cao
11000.0000
Christian
Kleinerman
20400.0000
Susan
Metters
9500.0000
Reuben
D'sa
25000.0000
Kirk
Koenigsbauer
10000.0000
David
Ortiz
12500.0000
Tengiz
Kharatishvili
16800.0000
Hanying
Feng
14000.0000
Kevin
Liu
15000.0000
Annik
Stahl
12500.0000
Suroor
Fatima
11000.0000
Deborah
Poe
19000.0000
Jim
Scardelis
11000.0000
Carole
Poland
9500.0000
George
Li
9500.0000
Gary
Yukish
15000.0000
Cristian
Petculescu
25000.0000
Raymond
Sam
14000.0000
Janaina
Bueno
27400.0000
Bob
Hohman
11000.0000
Shammi
Mohamed
15000.0000
Linda
Moschell
11000.0000
Mindy
Martin
16600.0000
Wendy
Kahn
43300.0000
Kim
Ralls
9000.0000
Sandra
Reategui Alayo
9500.0000
Kok-Ho
Loh
25000.0000
Douglas
Hite
10000.0000
James
Kramer
12500.0000
Sean
Alexander
10600.0000
Nitin
Mirchandani
14000.0000
Diane
Margheim
40900.0000
Rebecca
Laszlo
12500.0000
Rajesh
Patel
15000.0000
Vidur
Luthra
18300.0000
John
Evans
11000.0000
Nancy
Anderson
12500.0000
Pilar
Ackerman
19200.0000
David
Yalovsky
9500.0000
David
Hamilton
25000.0000
Laura
Steele
10000.0000
Margie
Shoop
12500.0000
Zainal
Arifin
17800.0000
Lorraine
Nay
15000.0000
Fadi
Fakhouri
14000.0000
Ryan
Cornelsen
15000.0000
Candy
Spoon
19000.0000
Nuan
Yu
11000.0000
William
Vong
16000.0000
Bjorn
Rettig
9500.0000
Scott
Gode
10000.0000
Michael
Rothkugel
15000.0000
Lane
Sacksteder
14000.0000
Pete
Male
11000.0000
Dan
Bacon
27400.0000
David
Barber
13500.0000
Lolan
Song
11000.0000
Paula
Nartker
15000.0000
Mary
Gibson
14400.0000
Mindaugas
Krapauskas
11000.0000
Eric
Gubbels
25000.0000
Ken
Sanchez
125500.0000
Jason
Watters
9500.0000
Mark
Harrington
10600.0000
Janeth
Esteves
10000.0000
Marc
Ingle
9500.0000
Gigi
Matthew
40900.0000
Paul
Singh
14000.0000
Frank
Lee
15000.0000
Francois
Ajenstat
38500.0000
Diane
Tibbott
11000.0000
Jill
Williams
14400.0000
Angela
Barbariol
11000.0000
Matthias
Berndt
9500.0000
Bryan
Baker
12500.0000
Jeff
Hay
25000.0000
Eugene
Zabokritski
9500.0000
Barbara
Decker
14000.0000
Chris
Preston
10000.0000
Sean
Chai
10300.0000
Dan
Wilson
38500.0000
Mark
McArthur
12500.0000
Bryan
Walton
19000.0000
Houman
Pournasseh
11000.0000
Sairaj
Uddin
16000.0000
Michiko
Osada
9500.0000
Benjamin
Martin
9500.0000
Cynthia
Randall
25000.0000
Kathie
Flood
10000.0000
Britta
Simon
12500.0000
Brian
Lloyd
15000.0000
David
Liu
34700.0000
Laura
Norman
60100.0000
Michael
Patten
11000.0000
Andy
Ruth
9500.0000
Yuhong
Li
25000.0000
Robert
Rounthwaite
10000.0000
Andreas
Berglund
10600.0000
Reed
Koch
9500.0000
Linda
Randall
14000.0000
James
Hamilton
84100.0000
Ramesh
Meyyappan
27400.0000
Stephanie
Conroy
39700.0000
Samantha
Smith
14000.0000
Tawana
Nusbaum
15000.0000
Denise
Smith
11000.0000
Hao
Chen
13900.0000
Alex
Nayberg
10000.0000
Eugene
Kogan
12500.0000
Brandon
Heidepriem
12500.0000
Dylan
Miller
50500.0000
Shane
Kim
25000.0000
John
Chen
14000.0000
Karen
Berge
10300.0000
Jose
Lugo
12500.0000
Mandar
Samant
11000.0000
Mikael
Sandberg
18300.0000
Sameer
Tejani
11000.0000
Dragan
Tomic
19000.0000
Carol
Philips
9500.0000
Rob
Caron
15000.0000
Don
Hall
11000.0000
Alan
Brewer
16000.0000
David
Lawrence
9500.0000
Baris
Cetinok
15000.0000
Michael
Ray
25000.0000
Steve
Masters
12500.0000
Suchitra
Mohan
12500.0000
Karen
Berg
27400.0000
Terrence
Earls
14000.0000
Barbara
Moreland
26400.0000
Chad
Niswonger
11000.0000
Rostislav
Shabalin
9500.0000
Belinda
Newman
10000.0000
Katie
McAskill-White
25000.0000
Russell
King
9500.0000
Jack
Richins
25000.0000
Andrew
Hill
25000.0000
Nicole
Holliday
15000.0000
Frank
Miller
11000.0000
Peter
Connelly
32500.0000
Anibal
Sousa
14000.0000
Ken
Myer
15000.0000
Grant
Culbertson
13900.0000
Michael
Entin
11000.0000
Lionel
Penuchot
10000.0000
Thomas
Michaels
12500.0000
Jimmy
Bischoff
9000.0000
Michael
Vanderhyde
9500.0000
Lori
Kane
25000.0000
Arvind
Rao
18300.0000
Stefen
Hesse
14000.0000
Hazem
Abolrous
28800.0000
Janet
Sheperdigian
19000.0000
Elizabeth
Keyser
11000.0000
Terry
Eminhizer
14400.0000
John
Frum
9500.0000
Merav
Netz
9500.0000
Brian
LaMee
16000.0000
Kitti
Lertpiriyasuwat
11000.0000
Jay
Adams
12500.0000
Jan
Miksovsky
9500.0000
Brenda
Diaz
25000.0000
Andrew
Cencini
10000.0000
Chris
Norred
16800.0000
Chris
Okelberry
12500.0000
Shelley
Dyck
14000.0000
Gabe
Mares
15000.0000
Mike
Seamans
26400.0000
Michael
Raheem
42500.0000
Gary
Altman
24000.0000
Charles
Fitzgerald
12500.0000
Ebru
Ersan
13500.0000
Sylvester
Valdez
14000.0000
Brian
Goldstein
15000.0000
Linda
Meisner
18300.0000
Betsy
Stadick
13500.0000
Magnus
Hedlund
9800.0000
Karan
Khanna
12500.0000
Mary
Baker
13500.0000
Kevin
Homer
13500.0000
Mihail
Frintu
15000.0000
Bonnie
Kearney
13500.0000
Fukiko
Ogisu
18300.0000
Hung-Fu
Ting
14000.0000
Gordon
Hee
18300.0000
Kimberly
Zimmerman
13500.0000
Kim
Abercrombie
12500.0000
Sandeep
Kaliyath
15000.0000
Prasanna
Samarawickrama
14000.0000
Frank
Pellow
18300.0000
Min
Su
14000.0000
Eric
Brown
15000.0000
Eric
Kurjan
18300.0000
Pat
Coleman
9300.0000
Maciej
Dusza
12500.0000
Erin
Hagens
18300.0000
Patrick
Wedge
13500.0000
Frank
Martinez
15000.0000
Ed
Dudenhoefer
12500.0000
Christopher
Hill
13500.0000
Patrick
Cook
15000.0000
Krishna
Sunkammurali
14000.0000
Lori
Penor
9300.0000
Danielle
Tiedt
13500.0000
Sootha
Charncherngkha
10600.0000
Michael
Zwilling
12500.0000
Randy
Reeves
12500.0000
John
Kane
13500.0000
Jack
Creasey
15000.0000
Olinda
Turner
14000.0000
Stuart
Macrae
9300.0000
Jo
Berry
9300.0000
Ben
Miller
18300.0000
Tom
Vande Velde
13500.0000
Ovidiu
Cracium
28800.0000
Annette
Hill
12800.0000
Janice
Galvin
25000.0000
Reinout
Hillmann
12800.0000
Michael
Sullivan
36100.0000
Stephen
Jiang
48100.0000
Wanida
Benshoof
13500.0000
Sharon
Salavaria
32700.0000
John
Wood
14400.0000
Mary
Dempsey
13500.0000
Brian
Welcker
72100.0000
Sheela
Word
30000.0000
Michael
Blythe
23100.0000
Linda
Mitchell
23100.0000
Jillian
Carson
23100.0000
Garrett
Vargas
23100.0000
Tsvi
Reiter
23100.0000
Pamela
Ansman-Wolfe
23100.0000
Shu
Ito
23100.0000
Jose
Saraiva
23100.0000
David
Campbell
23100.0000
Amy
Alberts
48100.0000
Jae
Pak
23100.0000
Ranjit
Varkey Chudukatil
23100.0000
Tete
Mensa-Annan
23100.0000
Syed
Abbas
48100.0000
Rachel
Valdez
23100.0000
Lynn
Tsoflias
23100.0000
Svetlin
Nakov
48000.0000
Martin
Kulov
48000.0000
George
Denchev
48000.0000
[/input]
[output]
Guy
Gilbert
12500.0000
Kevin
Brown
13500.0000
Roberto
Tamburello
43300.0000
Rob
Walters
29800.0000
Thierry
D'Hers
25000.0000
David
Bradley
37500.0000
JoLynn
Dobney
25000.0000
Ruth
Ellerbrock
13500.0000
Gail
Erickson
32700.0000
Barry
Johnson
13500.0000
Jossef
Goldberg
32700.0000
Terri
Duffy
63500.0000
Sidney
Higa
13500.0000
Taylor
Maxwell
25000.0000
Jeffrey
Ford
13500.0000
Jo
Brown
25000.0000
Doris
Hartwig
13500.0000
John
Campbell
25000.0000
Diane
Glimp
13500.0000
Steven
Selikoff
9500.0000
Peter
Krebs
24500.0000
Stuart
Munson
10000.0000
Greg
Alderson
10000.0000
David
Johnson
9500.0000
Zheng
Mu
25000.0000
Ivo
Salmre
14000.0000
Paul
Komosinski
15000.0000
Ashvini
Sharma
32500.0000
Kendall
Keil
11000.0000
Paula
Barreto de Mattos
27100.0000
Alejandro
McGuel
15000.0000
Garrett
Young
9500.0000
Jian Shuo
Wang
9500.0000
Susan
Eaton
9000.0000
Vamsi
Kuppa
9500.0000
Alice
Ciccu
11000.0000
Simon
Rapier
12500.0000
Jinghao
Liu
25000.0000
Michael
Hines
14000.0000
Yvonne
McKay
10000.0000
Peng
Wu
21600.0000
Jean
Trenary
50500.0000
Russell
Hunter
11000.0000
A. Scott
Wright
23600.0000
Fred
Northup
15000.0000
Sariya
Harnpadoungsataya
14400.0000
Willis
Johnson
18300.0000
Jun
Cao
11000.0000
Christian
Kleinerman
20400.0000
Susan
Metters
9500.0000
Reuben
D'sa
25000.0000
Kirk
Koenigsbauer
10000.0000
David
Ortiz
12500.0000
Tengiz
Kharatishvili
16800.0000
Hanying
Feng
14000.0000
Kevin
Liu
15000.0000
Annik
Stahl
12500.0000
Suroor
Fatima
11000.0000
Deborah
Poe
19000.0000
Jim
Scardelis
11000.0000
Carole
Poland
9500.0000
George
Li
9500.0000
Gary
Yukish
15000.0000
Cristian
Petculescu
25000.0000
Raymond
Sam
14000.0000
Janaina
Bueno
27400.0000
Bob
Hohman
11000.0000
Shammi
Mohamed
15000.0000
Linda
Moschell
11000.0000
Mindy
Martin
16600.0000
Wendy
Kahn
43300.0000
Kim
Ralls
9000.0000
Sandra
Reategui Alayo
9500.0000
Kok-Ho
Loh
25000.0000
Douglas
Hite
10000.0000
James
Kramer
12500.0000
Sean
Alexander
10600.0000
Nitin
Mirchandani
14000.0000
Diane
Margheim
40900.0000
Rebecca
Laszlo
12500.0000
Rajesh
Patel
15000.0000
Vidur
Luthra
18300.0000
John
Evans
11000.0000
Nancy
Anderson
12500.0000
Pilar
Ackerman
19200.0000
David
Yalovsky
9500.0000
David
Hamilton
25000.0000
Laura
Steele
10000.0000
Margie
Shoop
12500.0000
Zainal
Arifin
17800.0000
Lorraine
Nay
15000.0000
Fadi
Fakhouri
14000.0000
Ryan
Cornelsen
15000.0000
Candy
Spoon
19000.0000
Nuan
Yu
11000.0000
William
Vong
16000.0000
Bjorn
Rettig
9500.0000
Scott
Gode
10000.0000
Michael
Rothkugel
15000.0000
Lane
Sacksteder
14000.0000
Pete
Male
11000.0000
Dan
Bacon
27400.0000
David
Barber
13500.0000
Lolan
Song
11000.0000
Paula
Nartker
15000.0000
Mary
Gibson
14400.0000
Mindaugas
Krapauskas
11000.0000
Eric
Gubbels
25000.0000
Ken
Sanchez
125500.0000
Jason
Watters
9500.0000
Mark
Harrington
10600.0000
Janeth
Esteves
10000.0000
Marc
Ingle
9500.0000
Gigi
Matthew
40900.0000
Paul
Singh
14000.0000
Frank
Lee
15000.0000
Francois
Ajenstat
38500.0000
Diane
Tibbott
11000.0000
Jill
Williams
14400.0000
Angela
Barbariol
11000.0000
Matthias
Berndt
9500.0000
Bryan
Baker
12500.0000
Jeff
Hay
25000.0000
Eugene
Zabokritski
9500.0000
Barbara
Decker
14000.0000
Chris
Preston
10000.0000
Sean
Chai
10300.0000
Dan
Wilson
38500.0000
Mark
McArthur
12500.0000
Bryan
Walton
19000.0000
Houman
Pournasseh
11000.0000
Sairaj
Uddin
16000.0000
Michiko
Osada
9500.0000
Benjamin
Martin
9500.0000
Cynthia
Randall
25000.0000
Kathie
Flood
10000.0000
Britta
Simon
12500.0000
Brian
Lloyd
15000.0000
David
Liu
34700.0000
Laura
Norman
60100.0000
Michael
Patten
11000.0000
Andy
Ruth
9500.0000
Yuhong
Li
25000.0000
Robert
Rounthwaite
10000.0000
Andreas
Berglund
10600.0000
Reed
Koch
9500.0000
Linda
Randall
14000.0000
James
Hamilton
84100.0000
Ramesh
Meyyappan
27400.0000
Stephanie
Conroy
39700.0000
Samantha
Smith
14000.0000
Tawana
Nusbaum
15000.0000
Denise
Smith
11000.0000
Hao
Chen
13900.0000
Alex
Nayberg
10000.0000
Eugene
Kogan
12500.0000
Brandon
Heidepriem
12500.0000
Dylan
Miller
50500.0000
Shane
Kim
25000.0000
John
Chen
14000.0000
Karen
Berge
10300.0000
Jose
Lugo
12500.0000
Mandar
Samant
11000.0000
Mikael
Sandberg
18300.0000
Sameer
Tejani
11000.0000
Dragan
Tomic
19000.0000
Carol
Philips
9500.0000
Rob
Caron
15000.0000
Don
Hall
11000.0000
Alan
Brewer
16000.0000
David
Lawrence
9500.0000
Baris
Cetinok
15000.0000
Michael
Ray
25000.0000
Steve
Masters
12500.0000
Suchitra
Mohan
12500.0000
Karen
Berg
27400.0000
Terrence
Earls
14000.0000
Barbara
Moreland
26400.0000
Chad
Niswonger
11000.0000
Rostislav
Shabalin
9500.0000
Belinda
Newman
10000.0000
Katie
McAskill-White
25000.0000
Russell
King
9500.0000
Jack
Richins
25000.0000
Andrew
Hill
25000.0000
Nicole
Holliday
15000.0000
Frank
Miller
11000.0000
Peter
Connelly
32500.0000
Anibal
Sousa
14000.0000
Ken
Myer
15000.0000
Grant
Culbertson
13900.0000
Michael
Entin
11000.0000
Lionel
Penuchot
10000.0000
Thomas
Michaels
12500.0000
Jimmy
Bischoff
9000.0000
Michael
Vanderhyde
9500.0000
Lori
Kane
25000.0000
Arvind
Rao
18300.0000
Stefen
Hesse
14000.0000
Hazem
Abolrous
28800.0000
Janet
Sheperdigian
19000.0000
Elizabeth
Keyser
11000.0000
Terry
Eminhizer
14400.0000
John
Frum
9500.0000
Merav
Netz
9500.0000
Brian
LaMee
16000.0000
Kitti
Lertpiriyasuwat
11000.0000
Jay
Adams
12500.0000
Jan
Miksovsky
9500.0000
Brenda
Diaz
25000.0000
Andrew
Cencini
10000.0000
Chris
Norred
16800.0000
Chris
Okelberry
12500.0000
Shelley
Dyck
14000.0000
Gabe
Mares
15000.0000
Mike
Seamans
26400.0000
Michael
Raheem
42500.0000
Gary
Altman
24000.0000
Charles
Fitzgerald
12500.0000
Ebru
Ersan
13500.0000
Sylvester
Valdez
14000.0000
Brian
Goldstein
15000.0000
Linda
Meisner
18300.0000
Betsy
Stadick
13500.0000
Magnus
Hedlund
9800.0000
Karan
Khanna
12500.0000
Mary
Baker
13500.0000
Kevin
Homer
13500.0000
Mihail
Frintu
15000.0000
Bonnie
Kearney
13500.0000
Fukiko
Ogisu
18300.0000
Hung-Fu
Ting
14000.0000
Gordon
Hee
18300.0000
Kimberly
Zimmerman
13500.0000
Kim
Abercrombie
12500.0000
Sandeep
Kaliyath
15000.0000
Prasanna
Samarawickrama
14000.0000
Frank
Pellow
18300.0000
Min
Su
14000.0000
Eric
Brown
15000.0000
Eric
Kurjan
18300.0000
Pat
Coleman
9300.0000
Maciej
Dusza
12500.0000
Erin
Hagens
18300.0000
Patrick
Wedge
13500.0000
Frank
Martinez
15000.0000
Ed
Dudenhoefer
12500.0000
Christopher
Hill
13500.0000
Patrick
Cook
15000.0000
Krishna
Sunkammurali
14000.0000
Lori
Penor
9300.0000
Danielle
Tiedt
13500.0000
Sootha
Charncherngkha
10600.0000
Michael
Zwilling
12500.0000
Randy
Reeves
12500.0000
John
Kane
13500.0000
Jack
Creasey
15000.0000
Olinda
Turner
14000.0000
Stuart
Macrae
9300.0000
Jo
Berry
9300.0000
Ben
Miller
18300.0000
Tom
Vande Velde
13500.0000
Ovidiu
Cracium
28800.0000
Annette
Hill
12800.0000
Janice
Galvin
25000.0000
Reinout
Hillmann
12800.0000
Michael
Sullivan
36100.0000
Stephen
Jiang
48100.0000
Wanida
Benshoof
13500.0000
Sharon
Salavaria
32700.0000
John
Wood
14400.0000
Mary
Dempsey
13500.0000
Brian
Welcker
72100.0000
Sheela
Word
30000.0000
Michael
Blythe
23100.0000
Linda
Mitchell
23100.0000
Jillian
Carson
23100.0000
Garrett
Vargas
23100.0000
Tsvi
Reiter
23100.0000
Pamela
Ansman-Wolfe
23100.0000
Shu
Ito
23100.0000
Jose
Saraiva
23100.0000
David
Campbell
23100.0000
Amy
Alberts
48100.0000
Jae
Pak
23100.0000
Ranjit
Varkey Chudukatil
23100.0000
Tete
Mensa-Annan
23100.0000
Syed
Abbas
48100.0000
Rachel
Valdez
23100.0000
Lynn
Tsoflias
23100.0000
Svetlin
Nakov
48000.0000
Martin
Kulov
48000.0000
George
Denchev
48000.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find Full Name of Each Employee 
[code-task title="Problem: Find Full Name of Each Employee " taskId="d76818e6-809f-4692-a512-dccf4f47a57b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write SQL query to find the **first, middle and last name** of each employee. 

**Sort the information by id.** 

Submit your query statements as **Prepare DB & run queries**.

## Examples
| **first_name** | **middle_name** | **last_name** |
| --- | --- | --- |
| Guy  | R  | Gilbert  |
| Kevin  | F  | Brown  |
| Roberto  | NULL  | Tamburello  |
| …  | …  | …  |
|  |  | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Guy
R
Gilbert
Kevin
F
Brown
Roberto

Tamburello
Rob

Walters
Thierry
B
D'Hers
David
M
Bradley
JoLynn
M
Dobney
Ruth
Ann
Ellerbrock
Gail
A
Erickson
Barry
K
Johnson
Jossef
H
Goldberg
Terri
Lee
Duffy
Sidney
M
Higa
Taylor
R
Maxwell
Jeffrey
L
Ford
Jo
A
Brown
Doris
M
Hartwig
John
T
Campbell
Diane
R
Glimp
Steven
T
Selikoff
Peter
J
Krebs
Stuart
V
Munson
Greg
F
Alderson
David

Johnson
Zheng
W
Mu
Ivo
William
Salmre
Paul
B
Komosinski
Ashvini
R
Sharma
Kendall
C
Keil
Paula
M
Barreto de Mattos
Alejandro
E
McGuel
Garrett
R
Young
Jian Shuo

Wang
Susan
W
Eaton
Vamsi

Kuppa
Alice
O
Ciccu
Simon
D
Rapier
Jinghao
K
Liu
Michael
T
Hines
Yvonne
S
McKay
Peng
J
Wu
Jean
E
Trenary
Russell

Hunter
A. Scott

Wright
Fred
T
Northup
Sariya
E
Harnpadoungsataya
Willis
T
Johnson
Jun
T
Cao
Christian
E
Kleinerman
Susan
A
Metters
Reuben
H
D'sa
Kirk
J
Koenigsbauer
David
J
Ortiz
Tengiz

Kharatishvili
Hanying
P
Feng
Kevin
H
Liu
Annik
O
Stahl
Suroor
R
Fatima
Deborah
E
Poe
Jim
H
Scardelis
Carole
M
Poland
George
Z
Li
Gary
W
Yukish
Cristian
K
Petculescu
Raymond
K
Sam
Janaina
Barreiro Gambaro
Bueno
Bob

Hohman
Shammi
G
Mohamed
Linda
K
Moschell
Mindy
C
Martin
Wendy
Beth
Kahn
Kim
T
Ralls
Sandra

Reategui Alayo
Kok-Ho
T
Loh
Douglas
B
Hite
James
D
Kramer
Sean
P
Alexander
Nitin
S
Mirchandani
Diane
L
Margheim
Rebecca
A
Laszlo
Rajesh
M
Patel
Vidur
X
Luthra
John
P
Evans
Nancy
A
Anderson
Pilar
G
Ackerman
David
A
Yalovsky
David
P
Hamilton
Laura
C
Steele
Margie
W
Shoop
Zainal
T
Arifin
Lorraine
O
Nay
Fadi
K
Fakhouri
Ryan
L
Cornelsen
Candy
L
Spoon
Nuan

Yu
William
S
Vong
Bjorn
M
Rettig
Scott
R
Gode
Michael
L
Rothkugel
Lane
M
Sacksteder
Pete
C
Male
Dan
K
Bacon
David
M
Barber
Lolan
B
Song
Paula
R
Nartker
Mary
E
Gibson
Mindaugas
J
Krapauskas
Eric

Gubbels
Ken
J
Sanchez
Jason
M
Watters
Mark
L
Harrington
Janeth
M
Esteves
Marc
J
Ingle
Gigi

Matthew
Paul
R
Singh
Frank
T
Lee
Francois
P
Ajenstat
Diane
H
Tibbott
Jill
A
Williams
Angela
W
Barbariol
Matthias
T
Berndt
Bryan

Baker
Jeff
V
Hay
Eugene
R
Zabokritski
Barbara
S
Decker
Chris
T
Preston
Sean

Chai
Dan
B
Wilson
Mark
K
McArthur
Bryan
A
Walton
Houman

Pournasseh
Sairaj
L
Uddin
Michiko
F
Osada
Benjamin
R
Martin
Cynthia
S
Randall
Kathie
E
Flood
Britta
L
Simon
Brian
T
Lloyd
David
J
Liu
Laura
F
Norman
Michael
W
Patten
Andy
M
Ruth
Yuhong
L
Li
Robert
J
Rounthwaite
Andreas
T
Berglund
Reed
T
Koch
Linda
A
Randall
James
R
Hamilton
Ramesh
V
Meyyappan
Stephanie
A
Conroy
Samantha
H
Smith
Tawana
G
Nusbaum
Denise
H
Smith
Hao
O
Chen
Alex
M
Nayberg
Eugene
O
Kogan
Brandon
G
Heidepriem
Dylan
A
Miller
Shane
S
Kim
John
Y
Chen
Karen
R
Berge
Jose
R
Lugo
Mandar
H
Samant
Mikael
Q
Sandberg
Sameer
A
Tejani
Dragan
K
Tomic
Carol
M
Philips
Rob
T
Caron
Don
L
Hall
Alan
J
Brewer
David
Oliver
Lawrence
Baris
F
Cetinok
Michael
Sean
Ray
Steve
F
Masters
Suchitra
O
Mohan
Karen
A
Berg
Terrence
W
Earls
Barbara
C
Moreland
Chad
W
Niswonger
Rostislav
E
Shabalin
Belinda
M
Newman
Katie
L
McAskill-White
Russell
M
King
Jack
S
Richins
Andrew
R
Hill
Nicole
B
Holliday
Frank
T
Miller
Peter
I
Connelly
Anibal
T
Sousa
Ken
L
Myer
Grant

Culbertson
Michael
T
Entin
Lionel
C
Penuchot
Thomas
R
Michaels
Jimmy
T
Bischoff
Michael
T
Vanderhyde
Lori
A
Kane
Arvind
B
Rao
Stefen
A
Hesse
Hazem
E
Abolrous
Janet
L
Sheperdigian
Elizabeth
I
Keyser
Terry
J
Eminhizer
John

Frum
Merav
A
Netz
Brian
P
LaMee
Kitti
H
Lertpiriyasuwat
Jay
G
Adams
Jan
S
Miksovsky
Brenda
M
Diaz
Andrew
M
Cencini
Chris
K
Norred
Chris
O
Okelberry
Shelley

Dyck
Gabe
B
Mares
Mike
K
Seamans
Michael

Raheem
Gary
E.
Altman
Charles
B
Fitzgerald
Ebru

Ersan
Sylvester
A
Valdez
Brian
Richard
Goldstein
Linda
P
Meisner
Betsy
A
Stadick
Magnus
E
Hedlund
Karan
R
Khanna
Mary
R
Baker
Kevin
M
Homer
Mihail
U
Frintu
Bonnie

Kearney
Fukiko
J
Ogisu
Hung-Fu
T
Ting
Gordon
L
Hee
Kimberly
B
Zimmerman
Kim
B
Abercrombie
Sandeep
P
Kaliyath
Prasanna
E
Samarawickrama
Frank
S
Pellow
Min
G
Su
Eric
L
Brown
Eric
S
Kurjan
Pat
H
Coleman
Maciej
W
Dusza
Erin
M
Hagens
Patrick
C
Wedge
Frank
R
Martinez
Ed
R
Dudenhoefer
Christopher
E
Hill
Patrick
M
Cook
Krishna

Sunkammurali
Lori
K
Penor
Danielle
C
Tiedt
Sootha
T
Charncherngkha
Michael
J
Zwilling
Randy
T
Reeves
John
T
Kane
Jack
T
Creasey
Olinda
C
Turner
Stuart
J
Macrae
Jo
L
Berry
Ben
T
Miller
Tom
M
Vande Velde
Ovidiu
V
Cracium
Annette
L
Hill
Janice
M
Galvin
Reinout

Hillmann
Michael
I
Sullivan
Stephen
Y
Jiang
Wanida
M
Benshoof
Sharon
B
Salavaria
John
L
Wood
Mary
A
Dempsey
Brian
S
Welcker
Sheela
H
Word
Michael
G
Blythe
Linda
C
Mitchell
Jillian

Carson
Garrett
R
Vargas
Tsvi
Michael
Reiter
Pamela
O
Ansman-Wolfe
Shu
K
Ito
Jose
Edvaldo
Saraiva
David
R
Campbell
Amy
E
Alberts
Jae
B
Pak
Ranjit
R
Varkey Chudukatil
Tete
A
Mensa-Annan
Syed
E
Abbas
Rachel
B
Valdez
Lynn

Tsoflias
Svetlin
Ivanov
Nakov
Martin

Kulov
George

Denchev
[/input]
[output]
Guy
R
Gilbert
Kevin
F
Brown
Roberto

Tamburello
Rob

Walters
Thierry
B
D'Hers
David
M
Bradley
JoLynn
M
Dobney
Ruth
Ann
Ellerbrock
Gail
A
Erickson
Barry
K
Johnson
Jossef
H
Goldberg
Terri
Lee
Duffy
Sidney
M
Higa
Taylor
R
Maxwell
Jeffrey
L
Ford
Jo
A
Brown
Doris
M
Hartwig
John
T
Campbell
Diane
R
Glimp
Steven
T
Selikoff
Peter
J
Krebs
Stuart
V
Munson
Greg
F
Alderson
David

Johnson
Zheng
W
Mu
Ivo
William
Salmre
Paul
B
Komosinski
Ashvini
R
Sharma
Kendall
C
Keil
Paula
M
Barreto de Mattos
Alejandro
E
McGuel
Garrett
R
Young
Jian Shuo

Wang
Susan
W
Eaton
Vamsi

Kuppa
Alice
O
Ciccu
Simon
D
Rapier
Jinghao
K
Liu
Michael
T
Hines
Yvonne
S
McKay
Peng
J
Wu
Jean
E
Trenary
Russell

Hunter
A. Scott

Wright
Fred
T
Northup
Sariya
E
Harnpadoungsataya
Willis
T
Johnson
Jun
T
Cao
Christian
E
Kleinerman
Susan
A
Metters
Reuben
H
D'sa
Kirk
J
Koenigsbauer
David
J
Ortiz
Tengiz

Kharatishvili
Hanying
P
Feng
Kevin
H
Liu
Annik
O
Stahl
Suroor
R
Fatima
Deborah
E
Poe
Jim
H
Scardelis
Carole
M
Poland
George
Z
Li
Gary
W
Yukish
Cristian
K
Petculescu
Raymond
K
Sam
Janaina
Barreiro Gambaro
Bueno
Bob

Hohman
Shammi
G
Mohamed
Linda
K
Moschell
Mindy
C
Martin
Wendy
Beth
Kahn
Kim
T
Ralls
Sandra

Reategui Alayo
Kok-Ho
T
Loh
Douglas
B
Hite
James
D
Kramer
Sean
P
Alexander
Nitin
S
Mirchandani
Diane
L
Margheim
Rebecca
A
Laszlo
Rajesh
M
Patel
Vidur
X
Luthra
John
P
Evans
Nancy
A
Anderson
Pilar
G
Ackerman
David
A
Yalovsky
David
P
Hamilton
Laura
C
Steele
Margie
W
Shoop
Zainal
T
Arifin
Lorraine
O
Nay
Fadi
K
Fakhouri
Ryan
L
Cornelsen
Candy
L
Spoon
Nuan

Yu
William
S
Vong
Bjorn
M
Rettig
Scott
R
Gode
Michael
L
Rothkugel
Lane
M
Sacksteder
Pete
C
Male
Dan
K
Bacon
David
M
Barber
Lolan
B
Song
Paula
R
Nartker
Mary
E
Gibson
Mindaugas
J
Krapauskas
Eric

Gubbels
Ken
J
Sanchez
Jason
M
Watters
Mark
L
Harrington
Janeth
M
Esteves
Marc
J
Ingle
Gigi

Matthew
Paul
R
Singh
Frank
T
Lee
Francois
P
Ajenstat
Diane
H
Tibbott
Jill
A
Williams
Angela
W
Barbariol
Matthias
T
Berndt
Bryan

Baker
Jeff
V
Hay
Eugene
R
Zabokritski
Barbara
S
Decker
Chris
T
Preston
Sean

Chai
Dan
B
Wilson
Mark
K
McArthur
Bryan
A
Walton
Houman

Pournasseh
Sairaj
L
Uddin
Michiko
F
Osada
Benjamin
R
Martin
Cynthia
S
Randall
Kathie
E
Flood
Britta
L
Simon
Brian
T
Lloyd
David
J
Liu
Laura
F
Norman
Michael
W
Patten
Andy
M
Ruth
Yuhong
L
Li
Robert
J
Rounthwaite
Andreas
T
Berglund
Reed
T
Koch
Linda
A
Randall
James
R
Hamilton
Ramesh
V
Meyyappan
Stephanie
A
Conroy
Samantha
H
Smith
Tawana
G
Nusbaum
Denise
H
Smith
Hao
O
Chen
Alex
M
Nayberg
Eugene
O
Kogan
Brandon
G
Heidepriem
Dylan
A
Miller
Shane
S
Kim
John
Y
Chen
Karen
R
Berge
Jose
R
Lugo
Mandar
H
Samant
Mikael
Q
Sandberg
Sameer
A
Tejani
Dragan
K
Tomic
Carol
M
Philips
Rob
T
Caron
Don
L
Hall
Alan
J
Brewer
David
Oliver
Lawrence
Baris
F
Cetinok
Michael
Sean
Ray
Steve
F
Masters
Suchitra
O
Mohan
Karen
A
Berg
Terrence
W
Earls
Barbara
C
Moreland
Chad
W
Niswonger
Rostislav
E
Shabalin
Belinda
M
Newman
Katie
L
McAskill-White
Russell
M
King
Jack
S
Richins
Andrew
R
Hill
Nicole
B
Holliday
Frank
T
Miller
Peter
I
Connelly
Anibal
T
Sousa
Ken
L
Myer
Grant

Culbertson
Michael
T
Entin
Lionel
C
Penuchot
Thomas
R
Michaels
Jimmy
T
Bischoff
Michael
T
Vanderhyde
Lori
A
Kane
Arvind
B
Rao
Stefen
A
Hesse
Hazem
E
Abolrous
Janet
L
Sheperdigian
Elizabeth
I
Keyser
Terry
J
Eminhizer
John

Frum
Merav
A
Netz
Brian
P
LaMee
Kitti
H
Lertpiriyasuwat
Jay
G
Adams
Jan
S
Miksovsky
Brenda
M
Diaz
Andrew
M
Cencini
Chris
K
Norred
Chris
O
Okelberry
Shelley

Dyck
Gabe
B
Mares
Mike
K
Seamans
Michael

Raheem
Gary
E.
Altman
Charles
B
Fitzgerald
Ebru

Ersan
Sylvester
A
Valdez
Brian
Richard
Goldstein
Linda
P
Meisner
Betsy
A
Stadick
Magnus
E
Hedlund
Karan
R
Khanna
Mary
R
Baker
Kevin
M
Homer
Mihail
U
Frintu
Bonnie

Kearney
Fukiko
J
Ogisu
Hung-Fu
T
Ting
Gordon
L
Hee
Kimberly
B
Zimmerman
Kim
B
Abercrombie
Sandeep
P
Kaliyath
Prasanna
E
Samarawickrama
Frank
S
Pellow
Min
G
Su
Eric
L
Brown
Eric
S
Kurjan
Pat
H
Coleman
Maciej
W
Dusza
Erin
M
Hagens
Patrick
C
Wedge
Frank
R
Martinez
Ed
R
Dudenhoefer
Christopher
E
Hill
Patrick
M
Cook
Krishna

Sunkammurali
Lori
K
Penor
Danielle
C
Tiedt
Sootha
T
Charncherngkha
Michael
J
Zwilling
Randy
T
Reeves
John
T
Kane
Jack
T
Creasey
Olinda
C
Turner
Stuart
J
Macrae
Jo
L
Berry
Ben
T
Miller
Tom
M
Vande Velde
Ovidiu
V
Cracium
Annette
L
Hill
Janice
M
Galvin
Reinout

Hillmann
Michael
I
Sullivan
Stephen
Y
Jiang
Wanida
M
Benshoof
Sharon
B
Salavaria
John
L
Wood
Mary
A
Dempsey
Brian
S
Welcker
Sheela
H
Word
Michael
G
Blythe
Linda
C
Mitchell
Jillian

Carson
Garrett
R
Vargas
Tsvi
Michael
Reiter
Pamela
O
Ansman-Wolfe
Shu
K
Ito
Jose
Edvaldo
Saraiva
David
R
Campbell
Amy
E
Alberts
Jae
B
Pak
Ranjit
R
Varkey Chudukatil
Tete
A
Mensa-Annan
Syed
E
Abbas
Rachel
B
Valdez
Lynn

Tsoflias
Svetlin
Ivanov
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
# Problem: Find Email Address of Each Employee 
[code-task title="Problem: Find Email Address of Each Employee " taskId="6a07acad-20fa-4518-9679-d4b23423d687" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to find the **email address** of each employee (by his **first and last name**).

Consider that the email domain is **softuni.bg**.
 
Emails should look like "John.Doe@softuni.bg".
  
The **produced column** should be named "**full_ email_address**".
   
Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **full_email_adress** |
| --- |
| Guy.Gilbert@softuni.bg  |
| Kevin.Brown@softuni.bg  |
| Roberto.Tamburello@softuni.bg  |
| …  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Guy.Gilbert@softuni.bg
Kevin.Brown@softuni.bg
Roberto.Tamburello@softuni.bg
Rob.Walters@softuni.bg
Thierry.D'Hers@softuni.bg
David.Bradley@softuni.bg
JoLynn.Dobney@softuni.bg
Ruth.Ellerbrock@softuni.bg
Gail.Erickson@softuni.bg
Barry.Johnson@softuni.bg
Jossef.Goldberg@softuni.bg
Terri.Duffy@softuni.bg
Sidney.Higa@softuni.bg
Taylor.Maxwell@softuni.bg
Jeffrey.Ford@softuni.bg
Jo.Brown@softuni.bg
Doris.Hartwig@softuni.bg
John.Campbell@softuni.bg
Diane.Glimp@softuni.bg
Steven.Selikoff@softuni.bg
Peter.Krebs@softuni.bg
Stuart.Munson@softuni.bg
Greg.Alderson@softuni.bg
David.Johnson@softuni.bg
Zheng.Mu@softuni.bg
Ivo.Salmre@softuni.bg
Paul.Komosinski@softuni.bg
Ashvini.Sharma@softuni.bg
Kendall.Keil@softuni.bg
Paula.Barreto de Mattos@softuni.bg
Alejandro.McGuel@softuni.bg
Garrett.Young@softuni.bg
Jian Shuo.Wang@softuni.bg
Susan.Eaton@softuni.bg
Vamsi.Kuppa@softuni.bg
Alice.Ciccu@softuni.bg
Simon.Rapier@softuni.bg
Jinghao.Liu@softuni.bg
Michael.Hines@softuni.bg
Yvonne.McKay@softuni.bg
Peng.Wu@softuni.bg
Jean.Trenary@softuni.bg
Russell.Hunter@softuni.bg
A. Scott.Wright@softuni.bg
Fred.Northup@softuni.bg
Sariya.Harnpadoungsataya@softuni.bg
Willis.Johnson@softuni.bg
Jun.Cao@softuni.bg
Christian.Kleinerman@softuni.bg
Susan.Metters@softuni.bg
Reuben.D'sa@softuni.bg
Kirk.Koenigsbauer@softuni.bg
David.Ortiz@softuni.bg
Tengiz.Kharatishvili@softuni.bg
Hanying.Feng@softuni.bg
Kevin.Liu@softuni.bg
Annik.Stahl@softuni.bg
Suroor.Fatima@softuni.bg
Deborah.Poe@softuni.bg
Jim.Scardelis@softuni.bg
Carole.Poland@softuni.bg
George.Li@softuni.bg
Gary.Yukish@softuni.bg
Cristian.Petculescu@softuni.bg
Raymond.Sam@softuni.bg
Janaina.Bueno@softuni.bg
Bob.Hohman@softuni.bg
Shammi.Mohamed@softuni.bg
Linda.Moschell@softuni.bg
Mindy.Martin@softuni.bg
Wendy.Kahn@softuni.bg
Kim.Ralls@softuni.bg
Sandra.Reategui Alayo@softuni.bg
Kok-Ho.Loh@softuni.bg
Douglas.Hite@softuni.bg
James.Kramer@softuni.bg
Sean.Alexander@softuni.bg
Nitin.Mirchandani@softuni.bg
Diane.Margheim@softuni.bg
Rebecca.Laszlo@softuni.bg
Rajesh.Patel@softuni.bg
Vidur.Luthra@softuni.bg
John.Evans@softuni.bg
Nancy.Anderson@softuni.bg
Pilar.Ackerman@softuni.bg
David.Yalovsky@softuni.bg
David.Hamilton@softuni.bg
Laura.Steele@softuni.bg
Margie.Shoop@softuni.bg
Zainal.Arifin@softuni.bg
Lorraine.Nay@softuni.bg
Fadi.Fakhouri@softuni.bg
Ryan.Cornelsen@softuni.bg
Candy.Spoon@softuni.bg
Nuan.Yu@softuni.bg
William.Vong@softuni.bg
Bjorn.Rettig@softuni.bg
Scott.Gode@softuni.bg
Michael.Rothkugel@softuni.bg
Lane.Sacksteder@softuni.bg
Pete.Male@softuni.bg
Dan.Bacon@softuni.bg
David.Barber@softuni.bg
Lolan.Song@softuni.bg
Paula.Nartker@softuni.bg
Mary.Gibson@softuni.bg
Mindaugas.Krapauskas@softuni.bg
Eric.Gubbels@softuni.bg
Ken.Sanchez@softuni.bg
Jason.Watters@softuni.bg
Mark.Harrington@softuni.bg
Janeth.Esteves@softuni.bg
Marc.Ingle@softuni.bg
Gigi.Matthew@softuni.bg
Paul.Singh@softuni.bg
Frank.Lee@softuni.bg
Francois.Ajenstat@softuni.bg
Diane.Tibbott@softuni.bg
Jill.Williams@softuni.bg
Angela.Barbariol@softuni.bg
Matthias.Berndt@softuni.bg
Bryan.Baker@softuni.bg
Jeff.Hay@softuni.bg
Eugene.Zabokritski@softuni.bg
Barbara.Decker@softuni.bg
Chris.Preston@softuni.bg
Sean.Chai@softuni.bg
Dan.Wilson@softuni.bg
Mark.McArthur@softuni.bg
Bryan.Walton@softuni.bg
Houman.Pournasseh@softuni.bg
Sairaj.Uddin@softuni.bg
Michiko.Osada@softuni.bg
Benjamin.Martin@softuni.bg
Cynthia.Randall@softuni.bg
Kathie.Flood@softuni.bg
Britta.Simon@softuni.bg
Brian.Lloyd@softuni.bg
David.Liu@softuni.bg
Laura.Norman@softuni.bg
Michael.Patten@softuni.bg
Andy.Ruth@softuni.bg
Yuhong.Li@softuni.bg
Robert.Rounthwaite@softuni.bg
Andreas.Berglund@softuni.bg
Reed.Koch@softuni.bg
Linda.Randall@softuni.bg
James.Hamilton@softuni.bg
Ramesh.Meyyappan@softuni.bg
Stephanie.Conroy@softuni.bg
Samantha.Smith@softuni.bg
Tawana.Nusbaum@softuni.bg
Denise.Smith@softuni.bg
Hao.Chen@softuni.bg
Alex.Nayberg@softuni.bg
Eugene.Kogan@softuni.bg
Brandon.Heidepriem@softuni.bg
Dylan.Miller@softuni.bg
Shane.Kim@softuni.bg
John.Chen@softuni.bg
Karen.Berge@softuni.bg
Jose.Lugo@softuni.bg
Mandar.Samant@softuni.bg
Mikael.Sandberg@softuni.bg
Sameer.Tejani@softuni.bg
Dragan.Tomic@softuni.bg
Carol.Philips@softuni.bg
Rob.Caron@softuni.bg
Don.Hall@softuni.bg
Alan.Brewer@softuni.bg
David.Lawrence@softuni.bg
Baris.Cetinok@softuni.bg
Michael.Ray@softuni.bg
Steve.Masters@softuni.bg
Suchitra.Mohan@softuni.bg
Karen.Berg@softuni.bg
Terrence.Earls@softuni.bg
Barbara.Moreland@softuni.bg
Chad.Niswonger@softuni.bg
Rostislav.Shabalin@softuni.bg
Belinda.Newman@softuni.bg
Katie.McAskill-White@softuni.bg
Russell.King@softuni.bg
Jack.Richins@softuni.bg
Andrew.Hill@softuni.bg
Nicole.Holliday@softuni.bg
Frank.Miller@softuni.bg
Peter.Connelly@softuni.bg
Anibal.Sousa@softuni.bg
Ken.Myer@softuni.bg
Grant.Culbertson@softuni.bg
Michael.Entin@softuni.bg
Lionel.Penuchot@softuni.bg
Thomas.Michaels@softuni.bg
Jimmy.Bischoff@softuni.bg
Michael.Vanderhyde@softuni.bg
Lori.Kane@softuni.bg
Arvind.Rao@softuni.bg
Stefen.Hesse@softuni.bg
Hazem.Abolrous@softuni.bg
Janet.Sheperdigian@softuni.bg
Elizabeth.Keyser@softuni.bg
Terry.Eminhizer@softuni.bg
John.Frum@softuni.bg
Merav.Netz@softuni.bg
Brian.LaMee@softuni.bg
Kitti.Lertpiriyasuwat@softuni.bg
Jay.Adams@softuni.bg
Jan.Miksovsky@softuni.bg
Brenda.Diaz@softuni.bg
Andrew.Cencini@softuni.bg
Chris.Norred@softuni.bg
Chris.Okelberry@softuni.bg
Shelley.Dyck@softuni.bg
Gabe.Mares@softuni.bg
Mike.Seamans@softuni.bg
Michael.Raheem@softuni.bg
Gary.Altman@softuni.bg
Charles.Fitzgerald@softuni.bg
Ebru.Ersan@softuni.bg
Sylvester.Valdez@softuni.bg
Brian.Goldstein@softuni.bg
Linda.Meisner@softuni.bg
Betsy.Stadick@softuni.bg
Magnus.Hedlund@softuni.bg
Karan.Khanna@softuni.bg
Mary.Baker@softuni.bg
Kevin.Homer@softuni.bg
Mihail.Frintu@softuni.bg
Bonnie.Kearney@softuni.bg
Fukiko.Ogisu@softuni.bg
Hung-Fu.Ting@softuni.bg
Gordon.Hee@softuni.bg
Kimberly.Zimmerman@softuni.bg
Kim.Abercrombie@softuni.bg
Sandeep.Kaliyath@softuni.bg
Prasanna.Samarawickrama@softuni.bg
Frank.Pellow@softuni.bg
Min.Su@softuni.bg
Eric.Brown@softuni.bg
Eric.Kurjan@softuni.bg
Pat.Coleman@softuni.bg
Maciej.Dusza@softuni.bg
Erin.Hagens@softuni.bg
Patrick.Wedge@softuni.bg
Frank.Martinez@softuni.bg
Ed.Dudenhoefer@softuni.bg
Christopher.Hill@softuni.bg
Patrick.Cook@softuni.bg
Krishna.Sunkammurali@softuni.bg
Lori.Penor@softuni.bg
Danielle.Tiedt@softuni.bg
Sootha.Charncherngkha@softuni.bg
Michael.Zwilling@softuni.bg
Randy.Reeves@softuni.bg
John.Kane@softuni.bg
Jack.Creasey@softuni.bg
Olinda.Turner@softuni.bg
Stuart.Macrae@softuni.bg
Jo.Berry@softuni.bg
Ben.Miller@softuni.bg
Tom.Vande Velde@softuni.bg
Ovidiu.Cracium@softuni.bg
Annette.Hill@softuni.bg
Janice.Galvin@softuni.bg
Reinout.Hillmann@softuni.bg
Michael.Sullivan@softuni.bg
Stephen.Jiang@softuni.bg
Wanida.Benshoof@softuni.bg
Sharon.Salavaria@softuni.bg
John.Wood@softuni.bg
Mary.Dempsey@softuni.bg
Brian.Welcker@softuni.bg
Sheela.Word@softuni.bg
Michael.Blythe@softuni.bg
Linda.Mitchell@softuni.bg
Jillian.Carson@softuni.bg
Garrett.Vargas@softuni.bg
Tsvi.Reiter@softuni.bg
Pamela.Ansman-Wolfe@softuni.bg
Shu.Ito@softuni.bg
Jose.Saraiva@softuni.bg
David.Campbell@softuni.bg
Amy.Alberts@softuni.bg
Jae.Pak@softuni.bg
Ranjit.Varkey Chudukatil@softuni.bg
Tete.Mensa-Annan@softuni.bg
Syed.Abbas@softuni.bg
Rachel.Valdez@softuni.bg
Lynn.Tsoflias@softuni.bg
Svetlin.Nakov@softuni.bg
Martin.Kulov@softuni.bg
George.Denchev@softuni.bg
[/input]
[output]
Guy.Gilbert@softuni.bg
Kevin.Brown@softuni.bg
Roberto.Tamburello@softuni.bg
Rob.Walters@softuni.bg
Thierry.D'Hers@softuni.bg
David.Bradley@softuni.bg
JoLynn.Dobney@softuni.bg
Ruth.Ellerbrock@softuni.bg
Gail.Erickson@softuni.bg
Barry.Johnson@softuni.bg
Jossef.Goldberg@softuni.bg
Terri.Duffy@softuni.bg
Sidney.Higa@softuni.bg
Taylor.Maxwell@softuni.bg
Jeffrey.Ford@softuni.bg
Jo.Brown@softuni.bg
Doris.Hartwig@softuni.bg
John.Campbell@softuni.bg
Diane.Glimp@softuni.bg
Steven.Selikoff@softuni.bg
Peter.Krebs@softuni.bg
Stuart.Munson@softuni.bg
Greg.Alderson@softuni.bg
David.Johnson@softuni.bg
Zheng.Mu@softuni.bg
Ivo.Salmre@softuni.bg
Paul.Komosinski@softuni.bg
Ashvini.Sharma@softuni.bg
Kendall.Keil@softuni.bg
Paula.Barreto de Mattos@softuni.bg
Alejandro.McGuel@softuni.bg
Garrett.Young@softuni.bg
Jian Shuo.Wang@softuni.bg
Susan.Eaton@softuni.bg
Vamsi.Kuppa@softuni.bg
Alice.Ciccu@softuni.bg
Simon.Rapier@softuni.bg
Jinghao.Liu@softuni.bg
Michael.Hines@softuni.bg
Yvonne.McKay@softuni.bg
Peng.Wu@softuni.bg
Jean.Trenary@softuni.bg
Russell.Hunter@softuni.bg
A. Scott.Wright@softuni.bg
Fred.Northup@softuni.bg
Sariya.Harnpadoungsataya@softuni.bg
Willis.Johnson@softuni.bg
Jun.Cao@softuni.bg
Christian.Kleinerman@softuni.bg
Susan.Metters@softuni.bg
Reuben.D'sa@softuni.bg
Kirk.Koenigsbauer@softuni.bg
David.Ortiz@softuni.bg
Tengiz.Kharatishvili@softuni.bg
Hanying.Feng@softuni.bg
Kevin.Liu@softuni.bg
Annik.Stahl@softuni.bg
Suroor.Fatima@softuni.bg
Deborah.Poe@softuni.bg
Jim.Scardelis@softuni.bg
Carole.Poland@softuni.bg
George.Li@softuni.bg
Gary.Yukish@softuni.bg
Cristian.Petculescu@softuni.bg
Raymond.Sam@softuni.bg
Janaina.Bueno@softuni.bg
Bob.Hohman@softuni.bg
Shammi.Mohamed@softuni.bg
Linda.Moschell@softuni.bg
Mindy.Martin@softuni.bg
Wendy.Kahn@softuni.bg
Kim.Ralls@softuni.bg
Sandra.Reategui Alayo@softuni.bg
Kok-Ho.Loh@softuni.bg
Douglas.Hite@softuni.bg
James.Kramer@softuni.bg
Sean.Alexander@softuni.bg
Nitin.Mirchandani@softuni.bg
Diane.Margheim@softuni.bg
Rebecca.Laszlo@softuni.bg
Rajesh.Patel@softuni.bg
Vidur.Luthra@softuni.bg
John.Evans@softuni.bg
Nancy.Anderson@softuni.bg
Pilar.Ackerman@softuni.bg
David.Yalovsky@softuni.bg
David.Hamilton@softuni.bg
Laura.Steele@softuni.bg
Margie.Shoop@softuni.bg
Zainal.Arifin@softuni.bg
Lorraine.Nay@softuni.bg
Fadi.Fakhouri@softuni.bg
Ryan.Cornelsen@softuni.bg
Candy.Spoon@softuni.bg
Nuan.Yu@softuni.bg
William.Vong@softuni.bg
Bjorn.Rettig@softuni.bg
Scott.Gode@softuni.bg
Michael.Rothkugel@softuni.bg
Lane.Sacksteder@softuni.bg
Pete.Male@softuni.bg
Dan.Bacon@softuni.bg
David.Barber@softuni.bg
Lolan.Song@softuni.bg
Paula.Nartker@softuni.bg
Mary.Gibson@softuni.bg
Mindaugas.Krapauskas@softuni.bg
Eric.Gubbels@softuni.bg
Ken.Sanchez@softuni.bg
Jason.Watters@softuni.bg
Mark.Harrington@softuni.bg
Janeth.Esteves@softuni.bg
Marc.Ingle@softuni.bg
Gigi.Matthew@softuni.bg
Paul.Singh@softuni.bg
Frank.Lee@softuni.bg
Francois.Ajenstat@softuni.bg
Diane.Tibbott@softuni.bg
Jill.Williams@softuni.bg
Angela.Barbariol@softuni.bg
Matthias.Berndt@softuni.bg
Bryan.Baker@softuni.bg
Jeff.Hay@softuni.bg
Eugene.Zabokritski@softuni.bg
Barbara.Decker@softuni.bg
Chris.Preston@softuni.bg
Sean.Chai@softuni.bg
Dan.Wilson@softuni.bg
Mark.McArthur@softuni.bg
Bryan.Walton@softuni.bg
Houman.Pournasseh@softuni.bg
Sairaj.Uddin@softuni.bg
Michiko.Osada@softuni.bg
Benjamin.Martin@softuni.bg
Cynthia.Randall@softuni.bg
Kathie.Flood@softuni.bg
Britta.Simon@softuni.bg
Brian.Lloyd@softuni.bg
David.Liu@softuni.bg
Laura.Norman@softuni.bg
Michael.Patten@softuni.bg
Andy.Ruth@softuni.bg
Yuhong.Li@softuni.bg
Robert.Rounthwaite@softuni.bg
Andreas.Berglund@softuni.bg
Reed.Koch@softuni.bg
Linda.Randall@softuni.bg
James.Hamilton@softuni.bg
Ramesh.Meyyappan@softuni.bg
Stephanie.Conroy@softuni.bg
Samantha.Smith@softuni.bg
Tawana.Nusbaum@softuni.bg
Denise.Smith@softuni.bg
Hao.Chen@softuni.bg
Alex.Nayberg@softuni.bg
Eugene.Kogan@softuni.bg
Brandon.Heidepriem@softuni.bg
Dylan.Miller@softuni.bg
Shane.Kim@softuni.bg
John.Chen@softuni.bg
Karen.Berge@softuni.bg
Jose.Lugo@softuni.bg
Mandar.Samant@softuni.bg
Mikael.Sandberg@softuni.bg
Sameer.Tejani@softuni.bg
Dragan.Tomic@softuni.bg
Carol.Philips@softuni.bg
Rob.Caron@softuni.bg
Don.Hall@softuni.bg
Alan.Brewer@softuni.bg
David.Lawrence@softuni.bg
Baris.Cetinok@softuni.bg
Michael.Ray@softuni.bg
Steve.Masters@softuni.bg
Suchitra.Mohan@softuni.bg
Karen.Berg@softuni.bg
Terrence.Earls@softuni.bg
Barbara.Moreland@softuni.bg
Chad.Niswonger@softuni.bg
Rostislav.Shabalin@softuni.bg
Belinda.Newman@softuni.bg
Katie.McAskill-White@softuni.bg
Russell.King@softuni.bg
Jack.Richins@softuni.bg
Andrew.Hill@softuni.bg
Nicole.Holliday@softuni.bg
Frank.Miller@softuni.bg
Peter.Connelly@softuni.bg
Anibal.Sousa@softuni.bg
Ken.Myer@softuni.bg
Grant.Culbertson@softuni.bg
Michael.Entin@softuni.bg
Lionel.Penuchot@softuni.bg
Thomas.Michaels@softuni.bg
Jimmy.Bischoff@softuni.bg
Michael.Vanderhyde@softuni.bg
Lori.Kane@softuni.bg
Arvind.Rao@softuni.bg
Stefen.Hesse@softuni.bg
Hazem.Abolrous@softuni.bg
Janet.Sheperdigian@softuni.bg
Elizabeth.Keyser@softuni.bg
Terry.Eminhizer@softuni.bg
John.Frum@softuni.bg
Merav.Netz@softuni.bg
Brian.LaMee@softuni.bg
Kitti.Lertpiriyasuwat@softuni.bg
Jay.Adams@softuni.bg
Jan.Miksovsky@softuni.bg
Brenda.Diaz@softuni.bg
Andrew.Cencini@softuni.bg
Chris.Norred@softuni.bg
Chris.Okelberry@softuni.bg
Shelley.Dyck@softuni.bg
Gabe.Mares@softuni.bg
Mike.Seamans@softuni.bg
Michael.Raheem@softuni.bg
Gary.Altman@softuni.bg
Charles.Fitzgerald@softuni.bg
Ebru.Ersan@softuni.bg
Sylvester.Valdez@softuni.bg
Brian.Goldstein@softuni.bg
Linda.Meisner@softuni.bg
Betsy.Stadick@softuni.bg
Magnus.Hedlund@softuni.bg
Karan.Khanna@softuni.bg
Mary.Baker@softuni.bg
Kevin.Homer@softuni.bg
Mihail.Frintu@softuni.bg
Bonnie.Kearney@softuni.bg
Fukiko.Ogisu@softuni.bg
Hung-Fu.Ting@softuni.bg
Gordon.Hee@softuni.bg
Kimberly.Zimmerman@softuni.bg
Kim.Abercrombie@softuni.bg
Sandeep.Kaliyath@softuni.bg
Prasanna.Samarawickrama@softuni.bg
Frank.Pellow@softuni.bg
Min.Su@softuni.bg
Eric.Brown@softuni.bg
Eric.Kurjan@softuni.bg
Pat.Coleman@softuni.bg
Maciej.Dusza@softuni.bg
Erin.Hagens@softuni.bg
Patrick.Wedge@softuni.bg
Frank.Martinez@softuni.bg
Ed.Dudenhoefer@softuni.bg
Christopher.Hill@softuni.bg
Patrick.Cook@softuni.bg
Krishna.Sunkammurali@softuni.bg
Lori.Penor@softuni.bg
Danielle.Tiedt@softuni.bg
Sootha.Charncherngkha@softuni.bg
Michael.Zwilling@softuni.bg
Randy.Reeves@softuni.bg
John.Kane@softuni.bg
Jack.Creasey@softuni.bg
Olinda.Turner@softuni.bg
Stuart.Macrae@softuni.bg
Jo.Berry@softuni.bg
Ben.Miller@softuni.bg
Tom.Vande Velde@softuni.bg
Ovidiu.Cracium@softuni.bg
Annette.Hill@softuni.bg
Janice.Galvin@softuni.bg
Reinout.Hillmann@softuni.bg
Michael.Sullivan@softuni.bg
Stephen.Jiang@softuni.bg
Wanida.Benshoof@softuni.bg
Sharon.Salavaria@softuni.bg
John.Wood@softuni.bg
Mary.Dempsey@softuni.bg
Brian.Welcker@softuni.bg
Sheela.Word@softuni.bg
Michael.Blythe@softuni.bg
Linda.Mitchell@softuni.bg
Jillian.Carson@softuni.bg
Garrett.Vargas@softuni.bg
Tsvi.Reiter@softuni.bg
Pamela.Ansman-Wolfe@softuni.bg
Shu.Ito@softuni.bg
Jose.Saraiva@softuni.bg
David.Campbell@softuni.bg
Amy.Alberts@softuni.bg
Jae.Pak@softuni.bg
Ranjit.Varkey Chudukatil@softuni.bg
Tete.Mensa-Annan@softuni.bg
Syed.Abbas@softuni.bg
Rachel.Valdez@softuni.bg
Lynn.Tsoflias@softuni.bg
Svetlin.Nakov@softuni.bg
Martin.Kulov@softuni.bg
George.Denchev@softuni.bg
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find All Different Employee's Salaries 
[code-task title="Problem: Find All Different Employee's Salaries " taskId="a99a4fbc-1857-471c-90e8-06b8eb7cbf83" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to find **all different employee's salaries**. 

Show only the salaries. **Sort the information by id**.  

Submit your query statements as **Prepare DB & run queries**.  

## Examples
| **Salary** | 
| --- | --- |
| 12500.00  |
| 13500.00  |
| 43300.00  |
| …  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
9000.0000
9300.0000
9500.0000
9800.0000
10000.0000
10300.0000
10600.0000
11000.0000
12500.0000
12800.0000
13500.0000
13900.0000
14000.0000
14400.0000
15000.0000
16000.0000
16600.0000
16800.0000
17800.0000
18300.0000
19000.0000
19200.0000
20400.0000
21600.0000
23100.0000
23600.0000
24000.0000
24500.0000
25000.0000
26400.0000
27100.0000
27400.0000
28800.0000
29800.0000
30000.0000
32500.0000
32700.0000
34700.0000
36100.0000
37500.0000
38500.0000
39700.0000
40900.0000
42500.0000
43300.0000
48000.0000
48100.0000
50500.0000
60100.0000
63500.0000
72100.0000
84100.0000
125500.0000
[/input]
[output]
9000.0000
9300.0000
9500.0000
9800.0000
10000.0000
10300.0000
10600.0000
11000.0000
12500.0000
12800.0000
13500.0000
13900.0000
14000.0000
14400.0000
15000.0000
16000.0000
16600.0000
16800.0000
17800.0000
18300.0000
19000.0000
19200.0000
20400.0000
21600.0000
23100.0000
23600.0000
24000.0000
24500.0000
25000.0000
26400.0000
27100.0000
27400.0000
28800.0000
29800.0000
30000.0000
32500.0000
32700.0000
34700.0000
36100.0000
37500.0000
38500.0000
39700.0000
40900.0000
42500.0000
43300.0000
48000.0000
48100.0000
50500.0000
60100.0000
63500.0000
72100.0000
84100.0000
125500.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find Names of All Employees  
[code-task title="Problem: Find Names of All Employees  " taskId="38f274db-2cd0-4447-baa2-fc8bfe63db38" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to find the **full name** of all employees whose **salary is 25000, 14000, 12500 or 23600**. 

Full Name is combination of **first, middle and last name** (separated with **single space**) and they should be in one column called **"Full Name"**. 

Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **Full Name** |
| --- |
| Guy R Gilbert  |
| Thierry B D'Hers  |
| JoLynn M Dobney  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Guy R Gilbert
Thierry B D'Hers
JoLynn M Dobney
Taylor R Maxwell
Jo A Brown
John T Campbell
Zheng W Mu
Ivo William Salmre
Simon D Rapier
Jinghao K Liu
Michael T Hines

Reuben H D'sa
David J Ortiz
Hanying P Feng
Annik O Stahl
Cristian K Petculescu
Raymond K Sam
Kok-Ho T Loh
James D Kramer
Nitin S Mirchandani
Rebecca A Laszlo
Nancy A Anderson
David P Hamilton
Margie W Shoop
Fadi K Fakhouri
Lane M Sacksteder

Paul R Singh

Jeff V Hay
Barbara S Decker
Mark K McArthur
Cynthia S Randall
Britta L Simon
Yuhong L Li
Linda A Randall
Samantha H Smith
Eugene O Kogan
Brandon G Heidepriem
Shane S Kim
John Y Chen
Jose R Lugo
Michael Sean Ray
Steve F Masters
Suchitra O Mohan
Terrence W Earls
Katie L McAskill-White
Jack S Richins
Andrew R Hill
Anibal T Sousa
Thomas R Michaels
Lori A Kane
Stefen A Hesse
Jay G Adams
Brenda M Diaz
Chris O Okelberry
Shelley  Dyck
Charles B Fitzgerald
Sylvester A Valdez
Karan R Khanna
Hung-Fu T Ting
Kim B Abercrombie
Prasanna E Samarawickrama
Min G Su
Maciej W Dusza
Ed R Dudenhoefer

Michael J Zwilling
Randy T Reeves
Olinda C Turner
Janice M Galvin
[/input]
[output]
Guy R Gilbert
Thierry B D'Hers
JoLynn M Dobney
Taylor R Maxwell
Jo A Brown
John T Campbell
Zheng W Mu
Ivo William Salmre
Simon D Rapier
Jinghao K Liu
Michael T Hines

Reuben H D'sa
David J Ortiz
Hanying P Feng
Annik O Stahl
Cristian K Petculescu
Raymond K Sam
Kok-Ho T Loh
James D Kramer
Nitin S Mirchandani
Rebecca A Laszlo
Nancy A Anderson
David P Hamilton
Margie W Shoop
Fadi K Fakhouri
Lane M Sacksteder

Paul R Singh

Jeff V Hay
Barbara S Decker
Mark K McArthur
Cynthia S Randall
Britta L Simon
Yuhong L Li
Linda A Randall
Samantha H Smith
Eugene O Kogan
Brandon G Heidepriem
Shane S Kim
John Y Chen
Jose R Lugo
Michael Sean Ray
Steve F Masters
Suchitra O Mohan
Terrence W Earls
Katie L McAskill-White
Jack S Richins
Andrew R Hill
Anibal T Sousa
Thomas R Michaels
Lori A Kane
Stefen A Hesse
Jay G Adams
Brenda M Diaz
Chris O Okelberry
Shelley  Dyck
Charles B Fitzgerald
Sylvester A Valdez
Karan R Khanna
Hung-Fu T Ting
Kim B Abercrombie
Prasanna E Samarawickrama
Min G Su
Maciej W Dusza
Ed R Dudenhoefer

Michael J Zwilling
Randy T Reeves
Olinda C Turner
Janice M Galvin
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find All Employees with salary More Than 50000 
[code-task title="Problem: Find All Employees with salary More Than 50000 " taskId="6b088b55-ed5a-4298-a343-28e177b58158" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to find **first name, last name and salary** of those employees who has salary more than 50000. 

Order them in decreasing order by salary.

Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **first_name** | **last_name** | **salary** |
| --- | --- | --- |
| Ken  | Sanchez  | 125500.00  |
| James  | Hamilton  | 84100.00  |
| …  | …  | …  |
|  |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Daniel
Steel
167000.8000
Roberto
Tamburello
65000.8000
[/input]
[output]
Daniel
Steel
167000.8000
Roberto
Tamburello
65000.8000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find 5 Best Paid Employees 
[code-task title="Problem: Find 5 Best Paid Employees " taskId="b00c8060-2907-47dd-b7e4-29c175a73b85" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write SQL query to find **first and last names** about **5 best paid Employees** ordered **descending by their salary**. 

Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **first_name** | **last_name** |
| --- | --- |
| Ken  | Sanchez  |
| James  | Hamilton  |
| …  | …  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Ken
Sanchez
James
Hamilton
Brian
Welcker
Terri
Duffy
Laura
Norman
[/input]
[output]
Ken
Sanchez
James
Hamilton
Brian
Welcker
Terri
Duffy
Laura
Norman
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find All Employees Except Marketing 
[code-task title="Problem: Find All Employees Except Marketing " taskId="e8af04eb-92dd-4f3b-a8d6-8cae9fcde38b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to find the **first and last names** of all employees whose **department ID is different from 4**. 

Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **first_name** | **last_name** |
| --- | --- |
| Guy  | Gilbert  |
| Roberto  | Tamburello  |
| Rob  | Walters  |
| … | … |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Guy
Gilbert
Roberto
Tamburello
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
Gail
Erickson
Barry
Johnson
Jossef
Goldberg
Terri
Duffy
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
Sharon
Salavaria
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
Roberto
Tamburello
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
Gail
Erickson
Barry
Johnson
Jossef
Goldberg
Terri
Duffy
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
Sharon
Salavaria
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
# Problem: Sort Employees Table 
[code-task title="Problem: Sort Employees Table " taskId="7c3cb606-35ad-44a3-a34e-9f2314808b9f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to sort all records in the **еmployees** table by the following criteria:  

-	First by **salary** in **decreasing** order 

-	Then by **first name alphabetically**

-	Then by **last name descending** 

-	Then by **middle name alphabetically** 

**Sort the information by id**.

Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **id** | **First Name** | **Last Name** | **Middle Name** | **job_title** | **Dept id** | **Mngr ID** | **Hire Date** | **salary** | **address_id** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | -- |
| 109  | Ken  | Sanchez  | J  | Chief Executive Officer  | 16  | NULL  | ... | 125500.00  | 177  |
| 148  | James  | Hamilton  | R  | Vice President of Production  | 7  | 109  | ... | 84100.00  | 158  |
| 273  | Brian  | Welcker  | S  | Vice President of Sales  | 3  | 109  | ... | 72100.00  | 134  |
| …  | …  | …  | …  | …  | …   | …  |  …  | …  | …  |
|  |  |  |  |  |  |  |  |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Roberto
Tamburello

Engineering Manager
1
12
1999-12-12 00:00:00
300.8000
193
2
Kevin
Brown
F
Marketing Assistant
4
6
1999-02-26 00:00:00
200.3000
102
11
Aleks
Zellman
B
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
9
Aleks
Zellman
J
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
10
Aleks
Zellman
M
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
8
Aleks
Zellman
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
7
Aleks
Hillton
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
5
Aleks
Gilbert
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
6
Aleks
Brian
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
4
Bob
Gilbert
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
1
Guy
Gilbert
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
[/input]
[output]
3
Roberto
Tamburello

Engineering Manager
1
12
1999-12-12 00:00:00
300.8000
193
2
Kevin
Brown
F
Marketing Assistant
4
6
1999-02-26 00:00:00
200.3000
102
11
Aleks
Zellman
B
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
9
Aleks
Zellman
J
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
10
Aleks
Zellman
M
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
8
Aleks
Zellman
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
7
Aleks
Hillton
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
5
Aleks
Gilbert
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
6
Aleks
Brian
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
4
Bob
Gilbert
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
1
Guy
Gilbert
R
Production Technician
7
16
1998-07-31 00:00:00
100.0000
166
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Create View Employees with Salaries 
[code-task title="Problem: Create View Employees with Salaries " taskId="e3bef01f-fba8-4586-8d3c-c9fcfda20d18" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to create a view **v_employees_salaries** with **first name, last name and salary** for each employee. 

Submit your query statements as **Run skeleton, run queries & check DB**. 

## Examples
| **first_name** | **last_name** | **salary** |
| --- | --- | --- |
| Guy  | Gilbert  | 12500.00  |
| Kevin  | Brown  | 13500.00  |
| …  | …  | …  |
|  |  | |

 **Input** |
 --- |
 12500.00  |
 13500.00  |
 …  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Guy
Gilbert
12500.0000
Kevin
Brown
13500.0000
Roberto
Tamburello
43300.0000
Rob
Walters
29800.0000
Thierry
D'Hers
25000.0000
David
Bradley
37500.0000
JoLynn
Dobney
25000.0000
Ruth
Ellerbrock
13500.0000
Gail
Erickson
32700.0000
Barry
Johnson
13500.0000
Jossef
Goldberg
32700.0000
Terri
Duffy
63500.0000
Sidney
Higa
13500.0000
Taylor
Maxwell
25000.0000
Jeffrey
Ford
13500.0000
Jo
Brown
25000.0000
Doris
Hartwig
13500.0000
John
Campbell
25000.0000
Diane
Glimp
13500.0000
Steven
Selikoff
9500.0000
Peter
Krebs
24500.0000
Stuart
Munson
10000.0000
Greg
Alderson
10000.0000
David
Johnson
9500.0000
Zheng
Mu
25000.0000
Ivo
Salmre
14000.0000
Paul
Komosinski
15000.0000
Ashvini
Sharma
32500.0000
Kendall
Keil
11000.0000
Paula
Barreto de Mattos
27100.0000
Alejandro
McGuel
15000.0000
Garrett
Young
9500.0000
Jian Shuo
Wang
9500.0000
Susan
Eaton
9000.0000
Vamsi
Kuppa
9500.0000
Alice
Ciccu
11000.0000
Simon
Rapier
12500.0000
Jinghao
Liu
25000.0000
Michael
Hines
14000.0000
Yvonne
McKay
10000.0000
Peng
Wu
21600.0000
Jean
Trenary
50500.0000
Russell
Hunter
11000.0000
A. Scott
Wright
23600.0000
Fred
Northup
15000.0000
Sariya
Harnpadoungsataya
14400.0000
Willis
Johnson
18300.0000
Jun
Cao
11000.0000
Christian
Kleinerman
20400.0000
Susan
Metters
9500.0000
Reuben
D'sa
25000.0000
Kirk
Koenigsbauer
10000.0000
David
Ortiz
12500.0000
Tengiz
Kharatishvili
16800.0000
Hanying
Feng
14000.0000
Kevin
Liu
15000.0000
Annik
Stahl
12500.0000
Suroor
Fatima
11000.0000
Deborah
Poe
19000.0000
Jim
Scardelis
11000.0000
Carole
Poland
9500.0000
George
Li
9500.0000
Gary
Yukish
15000.0000
Cristian
Petculescu
25000.0000
Raymond
Sam
14000.0000
Janaina
Bueno
27400.0000
Bob
Hohman
11000.0000
Shammi
Mohamed
15000.0000
Linda
Moschell
11000.0000
Mindy
Martin
16600.0000
Wendy
Kahn
43300.0000
Kim
Ralls
9000.0000
Sandra
Reategui Alayo
9500.0000
Kok-Ho
Loh
25000.0000
Douglas
Hite
10000.0000
James
Kramer
12500.0000
Sean
Alexander
10600.0000
Nitin
Mirchandani
14000.0000
Diane
Margheim
40900.0000
Rebecca
Laszlo
12500.0000
Rajesh
Patel
15000.0000
Vidur
Luthra
18300.0000
John
Evans
11000.0000
Nancy
Anderson
12500.0000
Pilar
Ackerman
19200.0000
David
Yalovsky
9500.0000
David
Hamilton
25000.0000
Laura
Steele
10000.0000
Margie
Shoop
12500.0000
Zainal
Arifin
17800.0000
Lorraine
Nay
15000.0000
Fadi
Fakhouri
14000.0000
Ryan
Cornelsen
15000.0000
Candy
Spoon
19000.0000
Nuan
Yu
11000.0000
William
Vong
16000.0000
Bjorn
Rettig
9500.0000
Scott
Gode
10000.0000
Michael
Rothkugel
15000.0000
Lane
Sacksteder
14000.0000
Pete
Male
11000.0000
Dan
Bacon
27400.0000
David
Barber
13500.0000
Lolan
Song
11000.0000
Paula
Nartker
15000.0000
Mary
Gibson
14400.0000
Mindaugas
Krapauskas
11000.0000
Eric
Gubbels
25000.0000
Ken
Sanchez
125500.0000
Jason
Watters
9500.0000
Mark
Harrington
10600.0000
Janeth
Esteves
10000.0000
Marc
Ingle
9500.0000
Gigi
Matthew
40900.0000
Paul
Singh
14000.0000
Frank
Lee
15000.0000
Francois
Ajenstat
38500.0000
Diane
Tibbott
11000.0000
Jill
Williams
14400.0000
Angela
Barbariol
11000.0000
Matthias
Berndt
9500.0000
Bryan
Baker
12500.0000
Jeff
Hay
25000.0000
Eugene
Zabokritski
9500.0000
Barbara
Decker
14000.0000
Chris
Preston
10000.0000
Sean
Chai
10300.0000
Dan
Wilson
38500.0000
Mark
McArthur
12500.0000
Bryan
Walton
19000.0000
Houman
Pournasseh
11000.0000
Sairaj
Uddin
16000.0000
Michiko
Osada
9500.0000
Benjamin
Martin
9500.0000
Cynthia
Randall
25000.0000
Kathie
Flood
10000.0000
Britta
Simon
12500.0000
Brian
Lloyd
15000.0000
David
Liu
34700.0000
Laura
Norman
60100.0000
Michael
Patten
11000.0000
Andy
Ruth
9500.0000
Yuhong
Li
25000.0000
Robert
Rounthwaite
10000.0000
Andreas
Berglund
10600.0000
Reed
Koch
9500.0000
Linda
Randall
14000.0000
James
Hamilton
84100.0000
Ramesh
Meyyappan
27400.0000
Stephanie
Conroy
39700.0000
Samantha
Smith
14000.0000
Tawana
Nusbaum
15000.0000
Denise
Smith
11000.0000
Hao
Chen
13900.0000
Alex
Nayberg
10000.0000
Eugene
Kogan
12500.0000
Brandon
Heidepriem
12500.0000
Dylan
Miller
50500.0000
Shane
Kim
25000.0000
John
Chen
14000.0000
Karen
Berge
10300.0000
Jose
Lugo
12500.0000
Mandar
Samant
11000.0000
Mikael
Sandberg
18300.0000
Sameer
Tejani
11000.0000
Dragan
Tomic
19000.0000
Carol
Philips
9500.0000
Rob
Caron
15000.0000
Don
Hall
11000.0000
Alan
Brewer
16000.0000
David
Lawrence
9500.0000
Baris
Cetinok
15000.0000
Michael
Ray
25000.0000
Steve
Masters
12500.0000
Suchitra
Mohan
12500.0000
Karen
Berg
27400.0000
Terrence
Earls
14000.0000
Barbara
Moreland
26400.0000
Chad
Niswonger
11000.0000
Rostislav
Shabalin
9500.0000
Belinda
Newman
10000.0000
Katie
McAskill-White
25000.0000
Russell
King
9500.0000
Jack
Richins
25000.0000
Andrew
Hill
25000.0000
Nicole
Holliday
15000.0000
Frank
Miller
11000.0000
Peter
Connelly
32500.0000
Anibal
Sousa
14000.0000
Ken
Myer
15000.0000
Grant
Culbertson
13900.0000
Michael
Entin
11000.0000
Lionel
Penuchot
10000.0000
Thomas
Michaels
12500.0000
Jimmy
Bischoff
9000.0000
Michael
Vanderhyde
9500.0000
Lori
Kane
25000.0000
Arvind
Rao
18300.0000
Stefen
Hesse
14000.0000
Hazem
Abolrous
28800.0000
Janet
Sheperdigian
19000.0000
Elizabeth
Keyser
11000.0000
Terry
Eminhizer
14400.0000
John
Frum
9500.0000
Merav
Netz
9500.0000
Brian
LaMee
16000.0000
Kitti
Lertpiriyasuwat
11000.0000
Jay
Adams
12500.0000
Jan
Miksovsky
9500.0000
Brenda
Diaz
25000.0000
Andrew
Cencini
10000.0000
Chris
Norred
16800.0000
Chris
Okelberry
12500.0000
Shelley
Dyck
14000.0000
Gabe
Mares
15000.0000
Mike
Seamans
26400.0000
Michael
Raheem
42500.0000
Gary
Altman
24000.0000
Charles
Fitzgerald
12500.0000
Ebru
Ersan
13500.0000
Sylvester
Valdez
14000.0000
Brian
Goldstein
15000.0000
Linda
Meisner
18300.0000
Betsy
Stadick
13500.0000
Magnus
Hedlund
9800.0000
Karan
Khanna
12500.0000
Mary
Baker
13500.0000
Kevin
Homer
13500.0000
Mihail
Frintu
15000.0000
Bonnie
Kearney
13500.0000
Fukiko
Ogisu
18300.0000
Hung-Fu
Ting
14000.0000
Gordon
Hee
18300.0000
Kimberly
Zimmerman
13500.0000
Kim
Abercrombie
12500.0000
Sandeep
Kaliyath
15000.0000
Prasanna
Samarawickrama
14000.0000
Frank
Pellow
18300.0000
Min
Su
14000.0000
Eric
Brown
15000.0000
Eric
Kurjan
18300.0000
Pat
Coleman
9300.0000
Maciej
Dusza
12500.0000
Erin
Hagens
18300.0000
Patrick
Wedge
13500.0000
Frank
Martinez
15000.0000
Ed
Dudenhoefer
12500.0000
Christopher
Hill
13500.0000
Patrick
Cook
15000.0000
Krishna
Sunkammurali
14000.0000
Lori
Penor
9300.0000
Danielle
Tiedt
13500.0000
Sootha
Charncherngkha
10600.0000
Michael
Zwilling
12500.0000
Randy
Reeves
12500.0000
John
Kane
13500.0000
Jack
Creasey
15000.0000
Olinda
Turner
14000.0000
Stuart
Macrae
9300.0000
Jo
Berry
9300.0000
Ben
Miller
18300.0000
Tom
Vande Velde
13500.0000
Ovidiu
Cracium
28800.0000
Annette
Hill
12800.0000
Janice
Galvin
25000.0000
Reinout
Hillmann
12800.0000
Michael
Sullivan
36100.0000
Stephen
Jiang
48100.0000
Wanida
Benshoof
13500.0000
Sharon
Salavaria
32700.0000
John
Wood
14400.0000
Mary
Dempsey
13500.0000
Brian
Welcker
72100.0000
Sheela
Word
30000.0000
Michael
Blythe
23100.0000
Linda
Mitchell
23100.0000
Jillian
Carson
23100.0000
Garrett
Vargas
23100.0000
Tsvi
Reiter
23100.0000
Pamela
Ansman-Wolfe
23100.0000
Shu
Ito
23100.0000
Jose
Saraiva
23100.0000
David
Campbell
23100.0000
Amy
Alberts
48100.0000
Jae
Pak
23100.0000
Ranjit
Varkey Chudukatil
23100.0000
Tete
Mensa-Annan
23100.0000
Syed
Abbas
48100.0000
Rachel
Valdez
23100.0000
Lynn
Tsoflias
23100.0000
Svetlin
Nakov
48000.0000
Martin
Kulov
48000.0000
George
Denchev
48000.0000
[/input]
[output]
Guy
Gilbert
12500.0000
Kevin
Brown
13500.0000
Roberto
Tamburello
43300.0000
Rob
Walters
29800.0000
Thierry
D'Hers
25000.0000
David
Bradley
37500.0000
JoLynn
Dobney
25000.0000
Ruth
Ellerbrock
13500.0000
Gail
Erickson
32700.0000
Barry
Johnson
13500.0000
Jossef
Goldberg
32700.0000
Terri
Duffy
63500.0000
Sidney
Higa
13500.0000
Taylor
Maxwell
25000.0000
Jeffrey
Ford
13500.0000
Jo
Brown
25000.0000
Doris
Hartwig
13500.0000
John
Campbell
25000.0000
Diane
Glimp
13500.0000
Steven
Selikoff
9500.0000
Peter
Krebs
24500.0000
Stuart
Munson
10000.0000
Greg
Alderson
10000.0000
David
Johnson
9500.0000
Zheng
Mu
25000.0000
Ivo
Salmre
14000.0000
Paul
Komosinski
15000.0000
Ashvini
Sharma
32500.0000
Kendall
Keil
11000.0000
Paula
Barreto de Mattos
27100.0000
Alejandro
McGuel
15000.0000
Garrett
Young
9500.0000
Jian Shuo
Wang
9500.0000
Susan
Eaton
9000.0000
Vamsi
Kuppa
9500.0000
Alice
Ciccu
11000.0000
Simon
Rapier
12500.0000
Jinghao
Liu
25000.0000
Michael
Hines
14000.0000
Yvonne
McKay
10000.0000
Peng
Wu
21600.0000
Jean
Trenary
50500.0000
Russell
Hunter
11000.0000
A. Scott
Wright
23600.0000
Fred
Northup
15000.0000
Sariya
Harnpadoungsataya
14400.0000
Willis
Johnson
18300.0000
Jun
Cao
11000.0000
Christian
Kleinerman
20400.0000
Susan
Metters
9500.0000
Reuben
D'sa
25000.0000
Kirk
Koenigsbauer
10000.0000
David
Ortiz
12500.0000
Tengiz
Kharatishvili
16800.0000
Hanying
Feng
14000.0000
Kevin
Liu
15000.0000
Annik
Stahl
12500.0000
Suroor
Fatima
11000.0000
Deborah
Poe
19000.0000
Jim
Scardelis
11000.0000
Carole
Poland
9500.0000
George
Li
9500.0000
Gary
Yukish
15000.0000
Cristian
Petculescu
25000.0000
Raymond
Sam
14000.0000
Janaina
Bueno
27400.0000
Bob
Hohman
11000.0000
Shammi
Mohamed
15000.0000
Linda
Moschell
11000.0000
Mindy
Martin
16600.0000
Wendy
Kahn
43300.0000
Kim
Ralls
9000.0000
Sandra
Reategui Alayo
9500.0000
Kok-Ho
Loh
25000.0000
Douglas
Hite
10000.0000
James
Kramer
12500.0000
Sean
Alexander
10600.0000
Nitin
Mirchandani
14000.0000
Diane
Margheim
40900.0000
Rebecca
Laszlo
12500.0000
Rajesh
Patel
15000.0000
Vidur
Luthra
18300.0000
John
Evans
11000.0000
Nancy
Anderson
12500.0000
Pilar
Ackerman
19200.0000
David
Yalovsky
9500.0000
David
Hamilton
25000.0000
Laura
Steele
10000.0000
Margie
Shoop
12500.0000
Zainal
Arifin
17800.0000
Lorraine
Nay
15000.0000
Fadi
Fakhouri
14000.0000
Ryan
Cornelsen
15000.0000
Candy
Spoon
19000.0000
Nuan
Yu
11000.0000
William
Vong
16000.0000
Bjorn
Rettig
9500.0000
Scott
Gode
10000.0000
Michael
Rothkugel
15000.0000
Lane
Sacksteder
14000.0000
Pete
Male
11000.0000
Dan
Bacon
27400.0000
David
Barber
13500.0000
Lolan
Song
11000.0000
Paula
Nartker
15000.0000
Mary
Gibson
14400.0000
Mindaugas
Krapauskas
11000.0000
Eric
Gubbels
25000.0000
Ken
Sanchez
125500.0000
Jason
Watters
9500.0000
Mark
Harrington
10600.0000
Janeth
Esteves
10000.0000
Marc
Ingle
9500.0000
Gigi
Matthew
40900.0000
Paul
Singh
14000.0000
Frank
Lee
15000.0000
Francois
Ajenstat
38500.0000
Diane
Tibbott
11000.0000
Jill
Williams
14400.0000
Angela
Barbariol
11000.0000
Matthias
Berndt
9500.0000
Bryan
Baker
12500.0000
Jeff
Hay
25000.0000
Eugene
Zabokritski
9500.0000
Barbara
Decker
14000.0000
Chris
Preston
10000.0000
Sean
Chai
10300.0000
Dan
Wilson
38500.0000
Mark
McArthur
12500.0000
Bryan
Walton
19000.0000
Houman
Pournasseh
11000.0000
Sairaj
Uddin
16000.0000
Michiko
Osada
9500.0000
Benjamin
Martin
9500.0000
Cynthia
Randall
25000.0000
Kathie
Flood
10000.0000
Britta
Simon
12500.0000
Brian
Lloyd
15000.0000
David
Liu
34700.0000
Laura
Norman
60100.0000
Michael
Patten
11000.0000
Andy
Ruth
9500.0000
Yuhong
Li
25000.0000
Robert
Rounthwaite
10000.0000
Andreas
Berglund
10600.0000
Reed
Koch
9500.0000
Linda
Randall
14000.0000
James
Hamilton
84100.0000
Ramesh
Meyyappan
27400.0000
Stephanie
Conroy
39700.0000
Samantha
Smith
14000.0000
Tawana
Nusbaum
15000.0000
Denise
Smith
11000.0000
Hao
Chen
13900.0000
Alex
Nayberg
10000.0000
Eugene
Kogan
12500.0000
Brandon
Heidepriem
12500.0000
Dylan
Miller
50500.0000
Shane
Kim
25000.0000
John
Chen
14000.0000
Karen
Berge
10300.0000
Jose
Lugo
12500.0000
Mandar
Samant
11000.0000
Mikael
Sandberg
18300.0000
Sameer
Tejani
11000.0000
Dragan
Tomic
19000.0000
Carol
Philips
9500.0000
Rob
Caron
15000.0000
Don
Hall
11000.0000
Alan
Brewer
16000.0000
David
Lawrence
9500.0000
Baris
Cetinok
15000.0000
Michael
Ray
25000.0000
Steve
Masters
12500.0000
Suchitra
Mohan
12500.0000
Karen
Berg
27400.0000
Terrence
Earls
14000.0000
Barbara
Moreland
26400.0000
Chad
Niswonger
11000.0000
Rostislav
Shabalin
9500.0000
Belinda
Newman
10000.0000
Katie
McAskill-White
25000.0000
Russell
King
9500.0000
Jack
Richins
25000.0000
Andrew
Hill
25000.0000
Nicole
Holliday
15000.0000
Frank
Miller
11000.0000
Peter
Connelly
32500.0000
Anibal
Sousa
14000.0000
Ken
Myer
15000.0000
Grant
Culbertson
13900.0000
Michael
Entin
11000.0000
Lionel
Penuchot
10000.0000
Thomas
Michaels
12500.0000
Jimmy
Bischoff
9000.0000
Michael
Vanderhyde
9500.0000
Lori
Kane
25000.0000
Arvind
Rao
18300.0000
Stefen
Hesse
14000.0000
Hazem
Abolrous
28800.0000
Janet
Sheperdigian
19000.0000
Elizabeth
Keyser
11000.0000
Terry
Eminhizer
14400.0000
John
Frum
9500.0000
Merav
Netz
9500.0000
Brian
LaMee
16000.0000
Kitti
Lertpiriyasuwat
11000.0000
Jay
Adams
12500.0000
Jan
Miksovsky
9500.0000
Brenda
Diaz
25000.0000
Andrew
Cencini
10000.0000
Chris
Norred
16800.0000
Chris
Okelberry
12500.0000
Shelley
Dyck
14000.0000
Gabe
Mares
15000.0000
Mike
Seamans
26400.0000
Michael
Raheem
42500.0000
Gary
Altman
24000.0000
Charles
Fitzgerald
12500.0000
Ebru
Ersan
13500.0000
Sylvester
Valdez
14000.0000
Brian
Goldstein
15000.0000
Linda
Meisner
18300.0000
Betsy
Stadick
13500.0000
Magnus
Hedlund
9800.0000
Karan
Khanna
12500.0000
Mary
Baker
13500.0000
Kevin
Homer
13500.0000
Mihail
Frintu
15000.0000
Bonnie
Kearney
13500.0000
Fukiko
Ogisu
18300.0000
Hung-Fu
Ting
14000.0000
Gordon
Hee
18300.0000
Kimberly
Zimmerman
13500.0000
Kim
Abercrombie
12500.0000
Sandeep
Kaliyath
15000.0000
Prasanna
Samarawickrama
14000.0000
Frank
Pellow
18300.0000
Min
Su
14000.0000
Eric
Brown
15000.0000
Eric
Kurjan
18300.0000
Pat
Coleman
9300.0000
Maciej
Dusza
12500.0000
Erin
Hagens
18300.0000
Patrick
Wedge
13500.0000
Frank
Martinez
15000.0000
Ed
Dudenhoefer
12500.0000
Christopher
Hill
13500.0000
Patrick
Cook
15000.0000
Krishna
Sunkammurali
14000.0000
Lori
Penor
9300.0000
Danielle
Tiedt
13500.0000
Sootha
Charncherngkha
10600.0000
Michael
Zwilling
12500.0000
Randy
Reeves
12500.0000
John
Kane
13500.0000
Jack
Creasey
15000.0000
Olinda
Turner
14000.0000
Stuart
Macrae
9300.0000
Jo
Berry
9300.0000
Ben
Miller
18300.0000
Tom
Vande Velde
13500.0000
Ovidiu
Cracium
28800.0000
Annette
Hill
12800.0000
Janice
Galvin
25000.0000
Reinout
Hillmann
12800.0000
Michael
Sullivan
36100.0000
Stephen
Jiang
48100.0000
Wanida
Benshoof
13500.0000
Sharon
Salavaria
32700.0000
John
Wood
14400.0000
Mary
Dempsey
13500.0000
Brian
Welcker
72100.0000
Sheela
Word
30000.0000
Michael
Blythe
23100.0000
Linda
Mitchell
23100.0000
Jillian
Carson
23100.0000
Garrett
Vargas
23100.0000
Tsvi
Reiter
23100.0000
Pamela
Ansman-Wolfe
23100.0000
Shu
Ito
23100.0000
Jose
Saraiva
23100.0000
David
Campbell
23100.0000
Amy
Alberts
48100.0000
Jae
Pak
23100.0000
Ranjit
Varkey Chudukatil
23100.0000
Tete
Mensa-Annan
23100.0000
Syed
Abbas
48100.0000
Rachel
Valdez
23100.0000
Lynn
Tsoflias
23100.0000
Svetlin
Nakov
48000.0000
Martin
Kulov
48000.0000
George
Denchev
48000.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Create View Employees with Job Titles
[code-task title="Problem: Create View Employees with Job Titles" taskId="e543f464-76ac-469a-8cc2-c8c76b1456b0" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to create view **v_employees_job_titles** with **full employee name and job title**.

 When middle name is **NULL** replace it with **empty string ('')**. 
 
 Submit your query statements as **Run skeleton, run queries & check DB**. 

## Examples
| **full_name** | **job_title** |
| --- | --- |
| Guy R Gilbert  | Production Technician  |
| Kevin F Brown  | Marketing Assistant  |
| Roberto Tamburello  | Engineering Manager  |
| …  | … |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Guy R Gilbert
Production Technician
Kevin F Brown
Marketing Assistant
Roberto Tamburello
Engineering Manager
Rob Walters
Senior Tool Designer
Thierry B D'Hers
Tool Designer
David M Bradley
Marketing Manager
JoLynn M Dobney
Production Supervisor
Ruth Ann Ellerbrock
Production Technician
Gail A Erickson
Design Engineer
Barry K Johnson
Production Technician
Jossef H Goldberg
Design Engineer
Terri Lee Duffy
Vice President of Engineering
Sidney M Higa
Production Technician
Taylor R Maxwell
Production Supervisor
Jeffrey L Ford
Production Technician
Jo A Brown
Production Supervisor
Doris M Hartwig
Production Technician
John T Campbell
Production Supervisor
Diane R Glimp
Production Technician
Steven T Selikoff
Production Technician
Peter J Krebs
Production Control Manager
Stuart V Munson
Production Technician
Greg F Alderson
Production Technician
David  Johnson
Production Technician
Zheng W Mu
Production Supervisor
Ivo William Salmre
Production Technician
Paul B Komosinski
Production Technician
Ashvini R Sharma
Network Administrator
Kendall C Keil
Production Technician
Paula M Barreto de Mattos
Human Resources Manager
Alejandro E McGuel
Production Technician
Garrett R Young
Production Technician
Jian Shuo Wang
Production Technician
Susan W Eaton
Stocker
Vamsi  Kuppa
Shipping and Receiving Clerk
Alice O Ciccu
Production Technician
Simon D Rapier
Production Technician
Jinghao K Liu
Production Supervisor
Michael T Hines
Production Technician
Yvonne S McKay
Production Technician
Peng J Wu
Quality Assurance Supervisor
Jean E Trenary
Information Services Manager
Russell Hunter
Production Technician
A. Scott Wright
Master Scheduler
Fred T Northup
Production Technician
Sariya E Harnpadoungsataya
Marketing Specialist
Willis T Johnson
Recruiter
Jun T Cao
Production Technician
Christian E Kleinerman
Maintenance Supervisor
Susan A Metters
Production Technician
Reuben H D'sa
Production Supervisor
Kirk J Koenigsbauer
Production Technician
David J Ortiz
Production Technician
Tengiz  Kharatishvili
Control Specialist
Hanying P Feng
Production Technician
Kevin H Liu
Production Technician
Annik O Stahl
Production Technician
Suroor R Fatima
Production Technician
Deborah E Poe
Accounts Receivable Specialist
Jim H Scardelis
Production Technician
Carole M Poland
Production Technician
George Z Li
Production Technician
Gary W Yukish
Production Technician
Cristian K Petculescu
Production Supervisor
Raymond K Sam
Production Technician
Janaina Barreiro Gambaro Bueno
Application Specialist
Bob  Hohman
Production Technician
Shammi G Mohamed
Production Technician
Linda K Moschell
Production Technician
Mindy C Martin
Benefits Specialist
Wendy Beth Kahn
Finance Manager
Kim T Ralls
Stocker
Sandra Reategui Alayo
Production Technician
Kok-Ho T Loh
Production Supervisor
Douglas B Hite
Production Technician
James D Kramer
Production Technician
Sean P Alexander
Quality Assurance Technician
Nitin S Mirchandani
Production Technician
Diane L Margheim
Research and Development Engineer
Rebecca A Laszlo
Production Technician
Rajesh M Patel
Production Technician
Vidur X Luthra
Recruiter
John P Evans
Production Technician
Nancy A Anderson
Production Technician
Pilar G Ackerman
Shipping and Receiving Supervisor
David A Yalovsky
Production Technician
David P Hamilton
Production Supervisor
Laura C Steele
Production Technician
Margie W Shoop
Production Technician
Zainal T Arifin
Document Control Manager
Lorraine O Nay
Production Technician
Fadi K Fakhouri
Production Technician
Ryan L Cornelsen
Production Technician
Candy L Spoon
Accounts Receivable Specialist
Nuan Yu
Production Technician
William S Vong
Scheduling Assistant
Bjorn M Rettig
Production Technician
Scott R Gode
Production Technician
Michael L Rothkugel
Production Technician
Lane M Sacksteder
Production Technician
Pete C Male
Production Technician
Dan K Bacon
Application Specialist
David M Barber
Assistant to the Chief Financial Officer
Lolan B Song
Production Technician
Paula R Nartker
Production Technician
Mary E Gibson
Marketing Specialist
Mindaugas J Krapauskas
Production Technician
Eric Gubbels
Production Supervisor
Ken J Sanchez
Chief Executive Officer
Jason M Watters
Production Technician
Mark L Harrington
Quality Assurance Technician
Janeth M Esteves
Production Technician
Marc J Ingle
Production Technician
Gigi  Matthew
Research and Development Engineer
Paul R Singh
Production Technician
Frank T Lee
Production Technician
Francois P Ajenstat
Database Administrator
Diane H Tibbott
Production Technician
Jill A Williams
Marketing Specialist
Angela W Barbariol
Production Technician
Matthias T Berndt
Shipping and Receiving Clerk
Bryan Baker
Production Technician
Jeff V Hay
Production Supervisor
Eugene R Zabokritski
Production Technician
Barbara S Decker
Production Technician
Chris T Preston
Production Technician
Sean  Chai
Document Control Assistant
Dan B Wilson
Database Administrator
Mark K McArthur
Production Technician
Bryan A Walton
Accounts Receivable Specialist
Houman  Pournasseh
Production Technician
Sairaj L Uddin
Scheduling Assistant
Michiko F Osada
Production Technician
Benjamin R Martin
Production Technician
Cynthia S Randall
Production Supervisor
Kathie E Flood
Production Technician
Britta L Simon
Production Technician
Brian T Lloyd
Production Technician
David J Liu
Accounts Manager
Laura F Norman
Chief Financial Officer
Michael W Patten
Production Technician
Andy M Ruth
Production Technician
Yuhong L Li
Production Supervisor
Robert J Rounthwaite
Production Technician
Andreas T Berglund
Quality Assurance Technician
Reed T Koch
Production Technician
Linda A Randall
Production Technician
James R Hamilton
Vice President of Production
Ramesh V Meyyappan
Application Specialist
Stephanie A Conroy
Network Manager
Samantha H Smith
Production Technician
Tawana G Nusbaum
Production Technician
Denise H Smith
Production Technician
Hao O Chen
Human Resources Administrative Assistant
Alex M Nayberg
Production Technician
Eugene O Kogan
Production Technician
Brandon G Heidepriem
Production Technician
Dylan A Miller
Research and Development Manager
Shane S Kim
Production Supervisor
John Y Chen
Production Technician
Karen R Berge
Document Control Assistant
Jose R Lugo
Production Technician
Mandar H Samant
Production Technician
Mikael Q Sandberg
Buyer
Sameer A Tejani
Production Technician
Dragan K Tomic
Accounts Payable Specialist
Carol M Philips
Production Technician
Rob T Caron
Production Technician
Don L Hall
Production Technician
Alan J Brewer
Scheduling Assistant
David Oliver Lawrence
Production Technician
Baris F Cetinok
Production Technician
Michael Sean Ray
Production Supervisor
Steve F Masters
Production Technician
Suchitra O Mohan
Production Technician
Karen A Berg
Application Specialist
Terrence W Earls
Production Technician
Barbara C Moreland
Accountant
Chad W Niswonger
Production Technician
Rostislav E Shabalin
Production Technician
Belinda M Newman
Production Technician
Katie L McAskill-White
Production Supervisor
Russell M King
Production Technician
Jack S Richins
Production Supervisor
Andrew R Hill
Production Supervisor
Nicole B Holliday
Production Technician
Frank T Miller
Production Technician
Peter I Connelly
Network Administrator
Anibal T Sousa
Production Technician
Ken L Myer
Production Technician
Grant  Culbertson
Human Resources Administrative Assistant
Michael T Entin
Production Technician
Lionel C Penuchot
Production Technician
Thomas R Michaels
Production Technician
Jimmy T Bischoff
Stocker
Michael T Vanderhyde
Production Technician
Lori A Kane
Production Supervisor
Arvind B Rao
Buyer
Stefen A Hesse
Production Technician
Hazem E Abolrous
Quality Assurance Manager
Janet L Sheperdigian
Accounts Payable Specialist
Elizabeth I Keyser
Production Technician
Terry J Eminhizer
Marketing Specialist
John  Frum
Production Technician
Merav A Netz
Production Technician
Brian P LaMee
Scheduling Assistant
Kitti H Lertpiriyasuwat
Production Technician
Jay G Adams
Production Technician
Jan S Miksovsky
Production Technician
Brenda M Diaz
Production Supervisor
Andrew M Cencini
Production Technician
Chris K Norred
Control Specialist
Chris O Okelberry
Production Technician
Shelley  Dyck
Production Technician
Gabe B Mares
Production Technician
Mike K Seamans
Accountant
Michael Raheem
Research and Development Manager
Gary E. Altman
Facilities Manager
Charles B Fitzgerald
Production Technician
Ebru  Ersan
Production Technician
Sylvester A Valdez
Production Technician
Brian Richard Goldstein
Production Technician
Linda P Meisner
Buyer
Betsy A Stadick
Production Technician
Magnus E Hedlund
Facilities Administrative Assistant
Karan R Khanna
Production Technician
Mary R Baker
Production Technician
Kevin M Homer
Production Technician
Mihail U Frintu
Production Technician
Bonnie  Kearney
Production Technician
Fukiko J Ogisu
Buyer
Hung-Fu T Ting
Production Technician
Gordon L Hee
Buyer
Kimberly B Zimmerman
Production Technician
Kim B Abercrombie
Production Technician
Sandeep P Kaliyath
Production Technician
Prasanna E Samarawickrama
Production Technician
Frank S Pellow
Buyer
Min G Su
Production Technician
Eric L Brown
Production Technician
Eric S Kurjan
Buyer
Pat H Coleman
Janitor
Maciej W Dusza
Production Technician
Erin M Hagens
Buyer
Patrick C Wedge
Production Technician
Frank R Martinez
Production Technician
Ed R Dudenhoefer
Production Technician
Christopher E Hill
Production Technician
Patrick M Cook
Production Technician
Krishna Sunkammurali
Production Technician
Lori K Penor
Janitor
Danielle C Tiedt
Production Technician
Sootha T Charncherngkha
Quality Assurance Technician
Michael J Zwilling
Production Technician
Randy T Reeves
Production Technician
John T Kane
Production Technician
Jack T Creasey
Production Technician
Olinda C Turner
Production Technician
Stuart J Macrae
Janitor
Jo L Berry
Janitor
Ben T Miller
Buyer
Tom M Vande Velde
Production Technician
Ovidiu V Cracium
Senior Tool Designer
Annette L Hill
Purchasing Assistant
Janice M Galvin
Tool Designer
Reinout  Hillmann
Purchasing Assistant
Michael I Sullivan
Senior Design Engineer
Stephen Y Jiang
North American Sales Manager
Wanida M Benshoof
Marketing Assistant
Sharon B Salavaria
Design Engineer
John L Wood
Marketing Specialist
Mary A Dempsey
Marketing Assistant
Brian S Welcker
Vice President of Sales
Sheela H Word
Purchasing Manager
Michael G Blythe
Sales Representative
Linda C Mitchell
Sales Representative
Jillian Carson
Sales Representative
Garrett R Vargas
Sales Representative
Tsvi Michael Reiter
Sales Representative
Pamela O Ansman-Wolfe
Sales Representative
Shu K Ito
Sales Representative
Jose Edvaldo Saraiva
Sales Representative
David R Campbell
Sales Representative
Amy E Alberts
European Sales Manager
Jae B Pak
Sales Representative
Ranjit R Varkey Chudukatil
Sales Representative
Tete A Mensa-Annan
Sales Representative
Syed E Abbas
Pacific Sales Manager
Rachel B Valdez
Sales Representative
Lynn  Tsoflias
Sales Representative
Svetlin Ivanov Nakov
Independent Software Development  Consultant
Martin Kulov
Independent .NET Consultant
George Denchev
Independent Java Consultant
[/input]
[output]
Guy R Gilbert
Production Technician
Kevin F Brown
Marketing Assistant
Roberto Tamburello
Engineering Manager
Rob Walters
Senior Tool Designer
Thierry B D'Hers
Tool Designer
David M Bradley
Marketing Manager
JoLynn M Dobney
Production Supervisor
Ruth Ann Ellerbrock
Production Technician
Gail A Erickson
Design Engineer
Barry K Johnson
Production Technician
Jossef H Goldberg
Design Engineer
Terri Lee Duffy
Vice President of Engineering
Sidney M Higa
Production Technician
Taylor R Maxwell
Production Supervisor
Jeffrey L Ford
Production Technician
Jo A Brown
Production Supervisor
Doris M Hartwig
Production Technician
John T Campbell
Production Supervisor
Diane R Glimp
Production Technician
Steven T Selikoff
Production Technician
Peter J Krebs
Production Control Manager
Stuart V Munson
Production Technician
Greg F Alderson
Production Technician
David  Johnson
Production Technician
Zheng W Mu
Production Supervisor
Ivo William Salmre
Production Technician
Paul B Komosinski
Production Technician
Ashvini R Sharma
Network Administrator
Kendall C Keil
Production Technician
Paula M Barreto de Mattos
Human Resources Manager
Alejandro E McGuel
Production Technician
Garrett R Young
Production Technician
Jian Shuo Wang
Production Technician
Susan W Eaton
Stocker
Vamsi  Kuppa
Shipping and Receiving Clerk
Alice O Ciccu
Production Technician
Simon D Rapier
Production Technician
Jinghao K Liu
Production Supervisor
Michael T Hines
Production Technician
Yvonne S McKay
Production Technician
Peng J Wu
Quality Assurance Supervisor
Jean E Trenary
Information Services Manager
Russell Hunter
Production Technician
A. Scott Wright
Master Scheduler
Fred T Northup
Production Technician
Sariya E Harnpadoungsataya
Marketing Specialist
Willis T Johnson
Recruiter
Jun T Cao
Production Technician
Christian E Kleinerman
Maintenance Supervisor
Susan A Metters
Production Technician
Reuben H D'sa
Production Supervisor
Kirk J Koenigsbauer
Production Technician
David J Ortiz
Production Technician
Tengiz  Kharatishvili
Control Specialist
Hanying P Feng
Production Technician
Kevin H Liu
Production Technician
Annik O Stahl
Production Technician
Suroor R Fatima
Production Technician
Deborah E Poe
Accounts Receivable Specialist
Jim H Scardelis
Production Technician
Carole M Poland
Production Technician
George Z Li
Production Technician
Gary W Yukish
Production Technician
Cristian K Petculescu
Production Supervisor
Raymond K Sam
Production Technician
Janaina Barreiro Gambaro Bueno
Application Specialist
Bob  Hohman
Production Technician
Shammi G Mohamed
Production Technician
Linda K Moschell
Production Technician
Mindy C Martin
Benefits Specialist
Wendy Beth Kahn
Finance Manager
Kim T Ralls
Stocker
Sandra Reategui Alayo
Production Technician
Kok-Ho T Loh
Production Supervisor
Douglas B Hite
Production Technician
James D Kramer
Production Technician
Sean P Alexander
Quality Assurance Technician
Nitin S Mirchandani
Production Technician
Diane L Margheim
Research and Development Engineer
Rebecca A Laszlo
Production Technician
Rajesh M Patel
Production Technician
Vidur X Luthra
Recruiter
John P Evans
Production Technician
Nancy A Anderson
Production Technician
Pilar G Ackerman
Shipping and Receiving Supervisor
David A Yalovsky
Production Technician
David P Hamilton
Production Supervisor
Laura C Steele
Production Technician
Margie W Shoop
Production Technician
Zainal T Arifin
Document Control Manager
Lorraine O Nay
Production Technician
Fadi K Fakhouri
Production Technician
Ryan L Cornelsen
Production Technician
Candy L Spoon
Accounts Receivable Specialist
Nuan Yu
Production Technician
William S Vong
Scheduling Assistant
Bjorn M Rettig
Production Technician
Scott R Gode
Production Technician
Michael L Rothkugel
Production Technician
Lane M Sacksteder
Production Technician
Pete C Male
Production Technician
Dan K Bacon
Application Specialist
David M Barber
Assistant to the Chief Financial Officer
Lolan B Song
Production Technician
Paula R Nartker
Production Technician
Mary E Gibson
Marketing Specialist
Mindaugas J Krapauskas
Production Technician
Eric Gubbels
Production Supervisor
Ken J Sanchez
Chief Executive Officer
Jason M Watters
Production Technician
Mark L Harrington
Quality Assurance Technician
Janeth M Esteves
Production Technician
Marc J Ingle
Production Technician
Gigi  Matthew
Research and Development Engineer
Paul R Singh
Production Technician
Frank T Lee
Production Technician
Francois P Ajenstat
Database Administrator
Diane H Tibbott
Production Technician
Jill A Williams
Marketing Specialist
Angela W Barbariol
Production Technician
Matthias T Berndt
Shipping and Receiving Clerk
Bryan Baker
Production Technician
Jeff V Hay
Production Supervisor
Eugene R Zabokritski
Production Technician
Barbara S Decker
Production Technician
Chris T Preston
Production Technician
Sean  Chai
Document Control Assistant
Dan B Wilson
Database Administrator
Mark K McArthur
Production Technician
Bryan A Walton
Accounts Receivable Specialist
Houman  Pournasseh
Production Technician
Sairaj L Uddin
Scheduling Assistant
Michiko F Osada
Production Technician
Benjamin R Martin
Production Technician
Cynthia S Randall
Production Supervisor
Kathie E Flood
Production Technician
Britta L Simon
Production Technician
Brian T Lloyd
Production Technician
David J Liu
Accounts Manager
Laura F Norman
Chief Financial Officer
Michael W Patten
Production Technician
Andy M Ruth
Production Technician
Yuhong L Li
Production Supervisor
Robert J Rounthwaite
Production Technician
Andreas T Berglund
Quality Assurance Technician
Reed T Koch
Production Technician
Linda A Randall
Production Technician
James R Hamilton
Vice President of Production
Ramesh V Meyyappan
Application Specialist
Stephanie A Conroy
Network Manager
Samantha H Smith
Production Technician
Tawana G Nusbaum
Production Technician
Denise H Smith
Production Technician
Hao O Chen
Human Resources Administrative Assistant
Alex M Nayberg
Production Technician
Eugene O Kogan
Production Technician
Brandon G Heidepriem
Production Technician
Dylan A Miller
Research and Development Manager
Shane S Kim
Production Supervisor
John Y Chen
Production Technician
Karen R Berge
Document Control Assistant
Jose R Lugo
Production Technician
Mandar H Samant
Production Technician
Mikael Q Sandberg
Buyer
Sameer A Tejani
Production Technician
Dragan K Tomic
Accounts Payable Specialist
Carol M Philips
Production Technician
Rob T Caron
Production Technician
Don L Hall
Production Technician
Alan J Brewer
Scheduling Assistant
David Oliver Lawrence
Production Technician
Baris F Cetinok
Production Technician
Michael Sean Ray
Production Supervisor
Steve F Masters
Production Technician
Suchitra O Mohan
Production Technician
Karen A Berg
Application Specialist
Terrence W Earls
Production Technician
Barbara C Moreland
Accountant
Chad W Niswonger
Production Technician
Rostislav E Shabalin
Production Technician
Belinda M Newman
Production Technician
Katie L McAskill-White
Production Supervisor
Russell M King
Production Technician
Jack S Richins
Production Supervisor
Andrew R Hill
Production Supervisor
Nicole B Holliday
Production Technician
Frank T Miller
Production Technician
Peter I Connelly
Network Administrator
Anibal T Sousa
Production Technician
Ken L Myer
Production Technician
Grant  Culbertson
Human Resources Administrative Assistant
Michael T Entin
Production Technician
Lionel C Penuchot
Production Technician
Thomas R Michaels
Production Technician
Jimmy T Bischoff
Stocker
Michael T Vanderhyde
Production Technician
Lori A Kane
Production Supervisor
Arvind B Rao
Buyer
Stefen A Hesse
Production Technician
Hazem E Abolrous
Quality Assurance Manager
Janet L Sheperdigian
Accounts Payable Specialist
Elizabeth I Keyser
Production Technician
Terry J Eminhizer
Marketing Specialist
John  Frum
Production Technician
Merav A Netz
Production Technician
Brian P LaMee
Scheduling Assistant
Kitti H Lertpiriyasuwat
Production Technician
Jay G Adams
Production Technician
Jan S Miksovsky
Production Technician
Brenda M Diaz
Production Supervisor
Andrew M Cencini
Production Technician
Chris K Norred
Control Specialist
Chris O Okelberry
Production Technician
Shelley  Dyck
Production Technician
Gabe B Mares
Production Technician
Mike K Seamans
Accountant
Michael Raheem
Research and Development Manager
Gary E. Altman
Facilities Manager
Charles B Fitzgerald
Production Technician
Ebru  Ersan
Production Technician
Sylvester A Valdez
Production Technician
Brian Richard Goldstein
Production Technician
Linda P Meisner
Buyer
Betsy A Stadick
Production Technician
Magnus E Hedlund
Facilities Administrative Assistant
Karan R Khanna
Production Technician
Mary R Baker
Production Technician
Kevin M Homer
Production Technician
Mihail U Frintu
Production Technician
Bonnie  Kearney
Production Technician
Fukiko J Ogisu
Buyer
Hung-Fu T Ting
Production Technician
Gordon L Hee
Buyer
Kimberly B Zimmerman
Production Technician
Kim B Abercrombie
Production Technician
Sandeep P Kaliyath
Production Technician
Prasanna E Samarawickrama
Production Technician
Frank S Pellow
Buyer
Min G Su
Production Technician
Eric L Brown
Production Technician
Eric S Kurjan
Buyer
Pat H Coleman
Janitor
Maciej W Dusza
Production Technician
Erin M Hagens
Buyer
Patrick C Wedge
Production Technician
Frank R Martinez
Production Technician
Ed R Dudenhoefer
Production Technician
Christopher E Hill
Production Technician
Patrick M Cook
Production Technician
Krishna Sunkammurali
Production Technician
Lori K Penor
Janitor
Danielle C Tiedt
Production Technician
Sootha T Charncherngkha
Quality Assurance Technician
Michael J Zwilling
Production Technician
Randy T Reeves
Production Technician
John T Kane
Production Technician
Jack T Creasey
Production Technician
Olinda C Turner
Production Technician
Stuart J Macrae
Janitor
Jo L Berry
Janitor
Ben T Miller
Buyer
Tom M Vande Velde
Production Technician
Ovidiu V Cracium
Senior Tool Designer
Annette L Hill
Purchasing Assistant
Janice M Galvin
Tool Designer
Reinout  Hillmann
Purchasing Assistant
Michael I Sullivan
Senior Design Engineer
Stephen Y Jiang
North American Sales Manager
Wanida M Benshoof
Marketing Assistant
Sharon B Salavaria
Design Engineer
John L Wood
Marketing Specialist
Mary A Dempsey
Marketing Assistant
Brian S Welcker
Vice President of Sales
Sheela H Word
Purchasing Manager
Michael G Blythe
Sales Representative
Linda C Mitchell
Sales Representative
Jillian Carson
Sales Representative
Garrett R Vargas
Sales Representative
Tsvi Michael Reiter
Sales Representative
Pamela O Ansman-Wolfe
Sales Representative
Shu K Ito
Sales Representative
Jose Edvaldo Saraiva
Sales Representative
David R Campbell
Sales Representative
Amy E Alberts
European Sales Manager
Jae B Pak
Sales Representative
Ranjit R Varkey Chudukatil
Sales Representative
Tete A Mensa-Annan
Sales Representative
Syed E Abbas
Pacific Sales Manager
Rachel B Valdez
Sales Representative
Lynn  Tsoflias
Sales Representative
Svetlin Ivanov Nakov
Independent Software Development  Consultant
Martin Kulov
Independent .NET Consultant
George Denchev
Independent Java Consultant
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Distinct Job Titles 
[code-task title="Problem: Distinct Job Titles " taskId="09e27d93-86c0-4082-b770-6b9ff959ce9b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to find **all distinct job titles**. 

**Sort the result by job title alphabetically**. 

Submit your query statements as **Prepare DB & run queries**.

## Examples
| **Job_title** |
| --- |
| Accountant |
| Accounts Manager  |
| Accounts Payable Specialist |
| …  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Accountant
Accounts Manager
Accounts Payable Specialist
Accounts Receivable Specialist
Application Specialist
Assistant to the Chief Financial Officer
Benefits Specialist
Buyer
Chief Executive Officer
Chief Financial Officer
Control Specialist
Database Administrator
Design Engineer
Document Control Assistant
Document Control Manager
Engineering Manager
European Sales Manager
Facilities Administrative Assistant
Facilities Manager
Finance Manager
Human Resources Administrative Assistant
Human Resources Manager
Independent .NET Consultant
Independent Java Consultant
Independent Software Development  Consultant
Information Services Manager
Janitor
Maintenance Supervisor
Marketing Assistant
Marketing Manager
Marketing Specialist
Master Scheduler
Network Administrator
Network Manager
North American Sales Manager
Pacific Sales Manager
Production Control Manager
Production Supervisor
Production Technician
Purchasing Assistant
Purchasing Manager
Quality Assurance Manager
Quality Assurance Supervisor
Quality Assurance Technician
Recruiter
Research and Development Engineer
Research and Development Manager
Sales Representative
Scheduling Assistant
Senior Design Engineer
Senior Tool Designer
Shipping and Receiving Clerk
Shipping and Receiving Supervisor
Stocker
Tool Designer
Vice President of Engineering
Vice President of Production
Vice President of Sales
[/input]
[output]
Accountant
Accounts Manager
Accounts Payable Specialist
Accounts Receivable Specialist
Application Specialist
Assistant to the Chief Financial Officer
Benefits Specialist
Buyer
Chief Executive Officer
Chief Financial Officer
Control Specialist
Database Administrator
Design Engineer
Document Control Assistant
Document Control Manager
Engineering Manager
European Sales Manager
Facilities Administrative Assistant
Facilities Manager
Finance Manager
Human Resources Administrative Assistant
Human Resources Manager
Independent .NET Consultant
Independent Java Consultant
Independent Software Development  Consultant
Information Services Manager
Janitor
Maintenance Supervisor
Marketing Assistant
Marketing Manager
Marketing Specialist
Master Scheduler
Network Administrator
Network Manager
North American Sales Manager
Pacific Sales Manager
Production Control Manager
Production Supervisor
Production Technician
Purchasing Assistant
Purchasing Manager
Quality Assurance Manager
Quality Assurance Supervisor
Quality Assurance Technician
Recruiter
Research and Development Engineer
Research and Development Manager
Sales Representative
Scheduling Assistant
Senior Design Engineer
Senior Tool Designer
Shipping and Receiving Clerk
Shipping and Receiving Supervisor
Stocker
Tool Designer
Vice President of Engineering
Vice President of Production
Vice President of Sales
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find First 10 Started Projects
[code-task title="Problem: Find First 10 Started Projects" taskId="ffe9b131-02dd-43e8-b8ba-b56b88a9e8c0" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given a **working project** for a small **Student Syste**m, but the code is very poorly organized.

Break up the code **logically** into **smaller functional units – methods** and **classes** and don’t break the functionality.

## Examples
| **id** | **Name** | **Description** | **start_date** | **end_date** |
| --- | --- | --- | --- | --- |
| 6  | HL Road Frame  | Research, design and development of HL Road …  | 1998-05-02 00:00:00   | 2003-06-01 00:00:00  |
| 2  | Cycling Cap  | Research, design and development of C…  | 2001-06-01 00:00:00  | 2003-06-01 00:00:00  |
| 15 | HL Mountain Frame  | Research, design and development of HL M…  | 2001-06-01 00:00:00  | 2003-06-01 00:00:00  |
| …  | …  | …  | …  | …  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
6
HL Road Frame
Research, design and development of HL Road Frame. Our lightest and best quality aluminum frame made from the newest alloy; it is welded and heat-treated for strength. Our innovative design results in maximum comfort and performance.
1998-05-02 00:00:00
2003-06-01 00:00:00
2
Cycling Cap
Research, design and development of Cycling Cap. Traditional style with a flip-up brim; one-size fits all.
2001-06-01 00:00:00
2003-06-01 00:00:00
5
HL Mountain Frame
Research, design and development of HL Mountain Frame. Each frame is hand-crafted in our Bothell facility to the optimum diameter and wall-thickness required of a premium mountain frame. The heat-treated welded aluminum frame has a larger diameter tube that absorbs the bumps.
2001-06-01 00:00:00
2003-06-01 00:00:00
9
LL Road Frame
Research, design and development of LL Road Frame. The LL Frame provides a safe comfortable ride, while offering superior bump absorption in a value-priced aluminum frame.
2001-06-01 00:00:00
2003-06-01 00:00:00
11
Long-Sleeve Logo Jersey
Research, design and development of Long-Sleeve Logo Jersey. Unisex long-sleeve AWC logo microfiber cycling jersey
2001-06-01 00:00:00
2003-06-01 00:00:00
19
Mountain-100
Research, design and development of Mountain-100. Top-of-the-line competition mountain bike. Performance-enhancing options include the innovative HL Frame, super-smooth front suspension, and traction for all terrain.
2001-06-01 00:00:00
2003-06-01 00:00:00
39
Mountain-400
Research, design and development of Mountain-400. Suitable for any type of off-road trip. Fits any budget.
2001-06-01 00:00:00
2003-06-01 00:00:00
25
Road-150
Research, design and development of Road-150. This bike is ridden by race winners. Developed with the Adventure Works Cycles professional race team, it has a extremely light heat-treated aluminum frame, and steering that allows precision control.
2001-06-01 00:00:00
2003-06-01 00:00:00
28
Road-450
Research, design and development of Road-450. A true multi-sport bike that offers streamlined riding and a revolutionary design. Aerodynamic design lets you ride with the pros, and the gearing will conquer hilly roads.
2001-06-01 00:00:00
2003-06-01 00:00:00
30
Road-650
Research, design and development of Road-650. Value-priced bike with many features of our top-of-the-line models. Has the same light, stiff frame, and the quick acceleration we're famous for.
2001-06-01 00:00:00
2003-06-01 00:00:00
[/input]
[output]
6
HL Road Frame
Research, design and development of HL Road Frame. Our lightest and best quality aluminum frame made from the newest alloy; it is welded and heat-treated for strength. Our innovative design results in maximum comfort and performance.
1998-05-02 00:00:00
2003-06-01 00:00:00
2
Cycling Cap
Research, design and development of Cycling Cap. Traditional style with a flip-up brim; one-size fits all.
2001-06-01 00:00:00
2003-06-01 00:00:00
5
HL Mountain Frame
Research, design and development of HL Mountain Frame. Each frame is hand-crafted in our Bothell facility to the optimum diameter and wall-thickness required of a premium mountain frame. The heat-treated welded aluminum frame has a larger diameter tube that absorbs the bumps.
2001-06-01 00:00:00
2003-06-01 00:00:00
9
LL Road Frame
Research, design and development of LL Road Frame. The LL Frame provides a safe comfortable ride, while offering superior bump absorption in a value-priced aluminum frame.
2001-06-01 00:00:00
2003-06-01 00:00:00
11
Long-Sleeve Logo Jersey
Research, design and development of Long-Sleeve Logo Jersey. Unisex long-sleeve AWC logo microfiber cycling jersey
2001-06-01 00:00:00
2003-06-01 00:00:00
19
Mountain-100
Research, design and development of Mountain-100. Top-of-the-line competition mountain bike. Performance-enhancing options include the innovative HL Frame, super-smooth front suspension, and traction for all terrain.
2001-06-01 00:00:00
2003-06-01 00:00:00
39
Mountain-400
Research, design and development of Mountain-400. Suitable for any type of off-road trip. Fits any budget.
2001-06-01 00:00:00
2003-06-01 00:00:00
25
Road-150
Research, design and development of Road-150. This bike is ridden by race winners. Developed with the Adventure Works Cycles professional race team, it has a extremely light heat-treated aluminum frame, and steering that allows precision control.
2001-06-01 00:00:00
2003-06-01 00:00:00
28
Road-450
Research, design and development of Road-450. A true multi-sport bike that offers streamlined riding and a revolutionary design. Aerodynamic design lets you ride with the pros, and the gearing will conquer hilly roads.
2001-06-01 00:00:00
2003-06-01 00:00:00
30
Road-650
Research, design and development of Road-650. Value-priced bike with many features of our top-of-the-line models. Has the same light, stiff frame, and the quick acceleration we're famous for.
2001-06-01 00:00:00
2003-06-01 00:00:00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Last 7 Hired Employees 
[code-task title="Problem: Last 7 Hired Employees " taskId="5216da07-a1d6-41fa-87e4-90fdfd09ae14" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to find **last 7 hired employees**. Select **their first, last name and their hire date**. 

Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **first_name** | **last_name** | **hire_date** |
| --- | --- | --- |
| Rachel  | Valdez  | 2005-07-01 00:00:00  |
| Lynn  | Tsoflias  | 2005-07-01 00:00:00  |
| Syed  | Abbas  | 2005-04-15 00:00:00  |
| …  | …  | …  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Rachel
Valdez
2005-07-01 00:00:00
Lynn
Tsoflias
2005-07-01 00:00:00
Syed
Abbas
2005-04-15 00:00:00
Svetlin
Nakov
2005-03-01 00:00:00
Martin
Kulov
2005-03-01 00:00:00
George
Denchev
2005-03-01 00:00:00
Tete
Mensa-Annan
2004-11-01 00:00:00
[/input]
[output]
Rachel
Valdez
2005-07-01 00:00:00
Lynn
Tsoflias
2005-07-01 00:00:00
Syed
Abbas
2005-04-15 00:00:00
Svetlin
Nakov
2005-03-01 00:00:00
Martin
Kulov
2005-03-01 00:00:00
George
Denchev
2005-03-01 00:00:00
Tete
Mensa-Annan
2004-11-01 00:00:00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Increase Salaries
[code-task title="Problem: Increase Salaries" taskId="a749a77a-46ca-446c-851d-d68fd9ade52c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a SQL query to increase salaries of all employees that are in the **Engineering, Tool Design, Marketing or Information Services** department **by 12%**.

Then **select Salaries column** from the **Employees** table. 

Submit your query statements as **Prepare DB & run queries**. 

# Example

## Examples

| **Salary** |
| --- |
| 12500.00  |
| 15120.00  |
| 48496.00  |
| 33376.00  |
| …  

[/task-description]
[code-io /]
[tests]
[test open]
[input]
12500.0000
15120.0000
48496.0000
33376.0000
28000.0000
37500.0000
25000.0000
13500.0000
36624.0000
13500.0000
36624.0000
71120.0000
13500.0000
25000.0000
13500.0000
25000.0000
13500.0000
25000.0000
13500.0000
9500.0000
24500.0000
10000.0000
10000.0000
9500.0000
25000.0000
14000.0000
15000.0000
36400.0000
11000.0000
27100.0000
15000.0000
9500.0000
9500.0000
9000.0000
9500.0000
11000.0000
12500.0000
25000.0000
14000.0000
10000.0000
21600.0000
56560.0000
11000.0000
23600.0000
15000.0000
16128.0000
18300.0000
11000.0000
20400.0000
9500.0000
25000.0000
10000.0000
12500.0000
16800.0000
14000.0000
15000.0000
12500.0000
11000.0000
19000.0000
11000.0000
9500.0000
9500.0000
15000.0000
25000.0000
14000.0000
30688.0000
11000.0000
15000.0000
11000.0000
16600.0000
43300.0000
9000.0000
9500.0000
25000.0000
10000.0000
12500.0000
10600.0000
14000.0000
40900.0000
12500.0000
15000.0000
18300.0000
11000.0000
12500.0000
19200.0000
9500.0000
25000.0000
10000.0000
12500.0000
17800.0000
15000.0000
14000.0000
15000.0000
19000.0000
11000.0000
16000.0000
9500.0000
10000.0000
15000.0000
14000.0000
11000.0000
30688.0000
13500.0000
11000.0000
15000.0000
16128.0000
11000.0000
25000.0000
125500.0000
9500.0000
10600.0000
10000.0000
9500.0000
40900.0000
14000.0000
15000.0000
43120.0000
11000.0000
16128.0000
11000.0000
9500.0000
12500.0000
25000.0000
9500.0000
14000.0000
10000.0000
10300.0000
43120.0000
12500.0000
19000.0000
11000.0000
16000.0000
9500.0000
9500.0000
25000.0000
10000.0000
12500.0000
15000.0000
34700.0000
60100.0000
11000.0000
9500.0000
25000.0000
10000.0000
10600.0000
9500.0000
14000.0000
84100.0000
30688.0000
44464.0000
14000.0000
15000.0000
11000.0000
13900.0000
10000.0000
12500.0000
12500.0000
50500.0000
25000.0000
14000.0000
10300.0000
12500.0000
11000.0000
18300.0000
11000.0000
19000.0000
9500.0000
15000.0000
11000.0000
16000.0000
9500.0000
15000.0000
25000.0000
12500.0000
12500.0000
30688.0000
14000.0000
26400.0000
11000.0000
9500.0000
10000.0000
25000.0000
9500.0000
25000.0000
25000.0000
15000.0000
11000.0000
36400.0000
14000.0000
15000.0000
13900.0000
11000.0000
10000.0000
12500.0000
9000.0000
9500.0000
25000.0000
18300.0000
14000.0000
28800.0000
19000.0000
11000.0000
16128.0000
9500.0000
9500.0000
16000.0000
11000.0000
12500.0000
9500.0000
25000.0000
10000.0000
16800.0000
12500.0000
14000.0000
15000.0000
26400.0000
42500.0000
24000.0000
12500.0000
13500.0000
14000.0000
15000.0000
18300.0000
13500.0000
9800.0000
12500.0000
13500.0000
13500.0000
15000.0000
13500.0000
18300.0000
14000.0000
18300.0000
13500.0000
12500.0000
15000.0000
14000.0000
18300.0000
14000.0000
15000.0000
18300.0000
9300.0000
12500.0000
18300.0000
13500.0000
15000.0000
12500.0000
13500.0000
15000.0000
14000.0000
9300.0000
13500.0000
10600.0000
12500.0000
12500.0000
13500.0000
15000.0000
14000.0000
9300.0000
9300.0000
18300.0000
13500.0000
32256.0000
12800.0000
28000.0000
12800.0000
40432.0000
48100.0000
15120.0000
36624.0000
16128.0000
15120.0000
72100.0000
30000.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
48100.0000
23100.0000
23100.0000
23100.0000
48100.0000
23100.0000
23100.0000
48000.0000
48000.0000
48000.0000
[/input]
[output]
12500.0000
15120.0000
48496.0000
33376.0000
28000.0000
37500.0000
25000.0000
13500.0000
36624.0000
13500.0000
36624.0000
71120.0000
13500.0000
25000.0000
13500.0000
25000.0000
13500.0000
25000.0000
13500.0000
9500.0000
24500.0000
10000.0000
10000.0000
9500.0000
25000.0000
14000.0000
15000.0000
36400.0000
11000.0000
27100.0000
15000.0000
9500.0000
9500.0000
9000.0000
9500.0000
11000.0000
12500.0000
25000.0000
14000.0000
10000.0000
21600.0000
56560.0000
11000.0000
23600.0000
15000.0000
16128.0000
18300.0000
11000.0000
20400.0000
9500.0000
25000.0000
10000.0000
12500.0000
16800.0000
14000.0000
15000.0000
12500.0000
11000.0000
19000.0000
11000.0000
9500.0000
9500.0000
15000.0000
25000.0000
14000.0000
30688.0000
11000.0000
15000.0000
11000.0000
16600.0000
43300.0000
9000.0000
9500.0000
25000.0000
10000.0000
12500.0000
10600.0000
14000.0000
40900.0000
12500.0000
15000.0000
18300.0000
11000.0000
12500.0000
19200.0000
9500.0000
25000.0000
10000.0000
12500.0000
17800.0000
15000.0000
14000.0000
15000.0000
19000.0000
11000.0000
16000.0000
9500.0000
10000.0000
15000.0000
14000.0000
11000.0000
30688.0000
13500.0000
11000.0000
15000.0000
16128.0000
11000.0000
25000.0000
125500.0000
9500.0000
10600.0000
10000.0000
9500.0000
40900.0000
14000.0000
15000.0000
43120.0000
11000.0000
16128.0000
11000.0000
9500.0000
12500.0000
25000.0000
9500.0000
14000.0000
10000.0000
10300.0000
43120.0000
12500.0000
19000.0000
11000.0000
16000.0000
9500.0000
9500.0000
25000.0000
10000.0000
12500.0000
15000.0000
34700.0000
60100.0000
11000.0000
9500.0000
25000.0000
10000.0000
10600.0000
9500.0000
14000.0000
84100.0000
30688.0000
44464.0000
14000.0000
15000.0000
11000.0000
13900.0000
10000.0000
12500.0000
12500.0000
50500.0000
25000.0000
14000.0000
10300.0000
12500.0000
11000.0000
18300.0000
11000.0000
19000.0000
9500.0000
15000.0000
11000.0000
16000.0000
9500.0000
15000.0000
25000.0000
12500.0000
12500.0000
30688.0000
14000.0000
26400.0000
11000.0000
9500.0000
10000.0000
25000.0000
9500.0000
25000.0000
25000.0000
15000.0000
11000.0000
36400.0000
14000.0000
15000.0000
13900.0000
11000.0000
10000.0000
12500.0000
9000.0000
9500.0000
25000.0000
18300.0000
14000.0000
28800.0000
19000.0000
11000.0000
16128.0000
9500.0000
9500.0000
16000.0000
11000.0000
12500.0000
9500.0000
25000.0000
10000.0000
16800.0000
12500.0000
14000.0000
15000.0000
26400.0000
42500.0000
24000.0000
12500.0000
13500.0000
14000.0000
15000.0000
18300.0000
13500.0000
9800.0000
12500.0000
13500.0000
13500.0000
15000.0000
13500.0000
18300.0000
14000.0000
18300.0000
13500.0000
12500.0000
15000.0000
14000.0000
18300.0000
14000.0000
15000.0000
18300.0000
9300.0000
12500.0000
18300.0000
13500.0000
15000.0000
12500.0000
13500.0000
15000.0000
14000.0000
9300.0000
13500.0000
10600.0000
12500.0000
12500.0000
13500.0000
15000.0000
14000.0000
9300.0000
9300.0000
18300.0000
13500.0000
32256.0000
12800.0000
28000.0000
12800.0000
40432.0000
48100.0000
15120.0000
36624.0000
16128.0000
15120.0000
72100.0000
30000.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
23100.0000
48100.0000
23100.0000
23100.0000
23100.0000
48100.0000
23100.0000
23100.0000
48000.0000
48000.0000
48000.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: All Mountain Peaks 
[code-task title="Problem: All Mountain Peaks " taskId="db3282e7-9a37-4a5b-856a-088f9123895c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**QUERIES FOR GEOGRAPHY DATABASE!**

Display all **mountain peaks** in alphabetical order. Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **peak_name** |
| --- |
| Aconcagua  |
| Banski Suhodol  |
| Batashki Snezhnik  |
| …  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Banski Suhodol
Batashki Snezhnik
Botev
Carstensz Pyramid
Cerro Bonete
Cho Oyu
Damavand
Dykh-Tau
Elbrus
Everest
Galán
Golyam Perelik
Golyam Persenk
Golyam Polezhan
Julianatop
K2
Kamenitsa
Kangchenjunga
Kilimanjaro
Kom
Kutelo
Lhotse
Makalu
Malak Polezhan
Malka Musala
Malyovitsa
Mawenzi
Mercedario
Monte Pissis
Mount Giluwe
Mount Kenya
Mount Logan
Mount McKinley
Mount Shinn
Mount Sidley
Mount Tyree
Musala
Ojos del Salado
Orlovets
Pico de Orizaba
Pissis
Puncak Trikora
Shirokolashki Snezhnik
Shkhara
Vezhen
Vihren
Vinson Massif
[/input]
[output]
Aconcagua
Banski Suhodol
Batashki Snezhnik
Botev
Carstensz Pyramid
Cerro Bonete
Cho Oyu
Damavand
Dykh-Tau
Elbrus
Everest
Galán
Golyam Perelik
Golyam Persenk
Golyam Polezhan
Julianatop
K2
Kamenitsa
Kangchenjunga
Kilimanjaro
Kom
Kutelo
Lhotse
Makalu
Malak Polezhan
Malka Musala
Malyovitsa
Mawenzi
Mercedario
Monte Pissis
Mount Giluwe
Mount Kenya
Mount Logan
Mount McKinley
Mount Shinn
Mount Sidley
Mount Tyree
Musala
Ojos del Salado
Orlovets
Pico de Orizaba
Pissis
Puncak Trikora
Shirokolashki Snezhnik
Shkhara
Vezhen
Vihren
Vinson Massif
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Countries and Currency (Euro / Not Euro) 
[code-task title="Problem: Countries and Currency (Euro / Not Euro) " taskId="d93c5761-8dc3-4225-85ff-85d05961bfe9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Find all countries along with information about their currency. 

Display the **country name, country code** and information about its **currency**: either "**Euro**" or "**Not Euro**". 

Sort the results by **country name alphabetically**. 

Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **country_name** | **country_code** | **currency** |
| --- | --- | --- |
| Afghanistan  | AF  | Not Euro  |
| Åland  | AX  | Euro  |
| Albania  | AL  | Not Euro  |
| …  | …  | …  |
|  |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Afghanistan
AF
Not Euro
Åland
AX
Euro
Albania
AL
Not Euro
Algeria
DZ
Not Euro
American Samoa
AS
Not Euro
Andorra
AD
Euro
Angola
AO
Not Euro
Anguilla
AI
Not Euro
Antarctica
AQ
Not Euro
Antigua and Barbuda
AG
Not Euro
Argentina
AR
Not Euro
Armenia
AM
Not Euro
Aruba
AW
Not Euro
Australia
AU
Not Euro
Austria
AT
Euro
Azerbaijan
AZ
Not Euro
Bahamas
BS
Not Euro
Bahrain
BH
Not Euro
Bangladesh
BD
Not Euro
Barbados
BB
Not Euro
Belarus
BY
Not Euro
Belgium
BE
Euro
Belize
BZ
Not Euro
Benin
BJ
Not Euro
Bermuda
BM
Not Euro
Bhutan
BT
Not Euro
Bolivia
BO
Not Euro
Bonaire
BQ
Not Euro
Bosnia and Herzegovina
BA
Not Euro
Botswana
BW
Not Euro
Bouvet Island
BV
Not Euro
Brazil
BR
Not Euro
British Indian Ocean Territory
IO
Not Euro
British Virgin Islands
VG
Not Euro
Brunei
BN
Not Euro
Bulgaria
BG
Not Euro
Burkina Faso
BF
Not Euro
Burundi
BI
Not Euro
Cambodia
KH
Not Euro
Cameroon
CM
Not Euro
Canada
CA
Not Euro
Cape Verde
CV
Not Euro
Cayman Islands
KY
Not Euro
Central African Republic
CF
Not Euro
Chad
TD
Not Euro
Chile
CL
Not Euro
China
CN
Not Euro
Christmas Island
CX
Not Euro
Cocos Islands
CC
Not Euro
Colombia
CO
Not Euro
Comoros
KM
Not Euro
Cook Islands
CK
Not Euro
Costa Rica
CR
Not Euro
Croatia
HR
Not Euro
Cuba
CU
Not Euro
Curacao
CW
Not Euro
Cyprus
CY
Euro
Czech Republic
CZ
Not Euro
Democratic Republic of the Congo
CD
Not Euro
Denmark
DK
Not Euro
Djibouti
DJ
Not Euro
Dominica
DM
Not Euro
Dominican Republic
DO
Not Euro
East Timor
TL
Not Euro
Ecuador
EC
Not Euro
Egypt
EG
Not Euro
El Salvador
SV
Not Euro
Equatorial Guinea
GQ
Not Euro
Eritrea
ER
Not Euro
Estonia
EE
Euro
Ethiopia
ET
Not Euro
Falkland Islands
FK
Not Euro
Faroe Islands
FO
Not Euro
Fiji
FJ
Not Euro
Finland
FI
Euro
France
FR
Euro
French Guiana
GF
Euro
French Polynesia
PF
Not Euro
French Southern Territories
TF
Euro
Gabon
GA
Not Euro
Gambia
GM
Not Euro
Georgia
GE
Not Euro
Germany
DE
Euro
Ghana
GH
Not Euro
Gibraltar
GI
Not Euro
Greece
GR
Euro
Greenland
GL
Not Euro
Grenada
GD
Not Euro
Guadeloupe
GP
Euro
Guam
GU
Not Euro
Guatemala
GT
Not Euro
Guernsey
GG
Not Euro
Guinea
GN
Not Euro
Guinea-Bissau
GW
Not Euro
Guyana
GY
Not Euro
Haiti
HT
Not Euro
Heard Island and McDonald Islands
HM
Not Euro
Honduras
HN
Not Euro
Hong Kong
HK
Not Euro
Hungary
HU
Not Euro
Iceland
IS
Not Euro
India
IN
Not Euro
Indonesia
ID
Not Euro
Iran
IR
Not Euro
Iraq
IQ
Not Euro
Ireland
IE
Euro
Isle of Man
IM
Not Euro
Israel
IL
Not Euro
Italy
IT
Euro
Ivory Coast
CI
Not Euro
Jamaica
JM
Not Euro
Japan
JP
Not Euro
Jersey
JE
Not Euro
Jordan
JO
Not Euro
Kazakhstan
KZ
Not Euro
Kenya
KE
Not Euro
Kiribati
KI
Not Euro
Kosovo
XK
Euro
Kuwait
KW
Not Euro
Kyrgyzstan
KG
Not Euro
Laos
LA
Not Euro
Latvia
LV
Euro
Lebanon
LB
Not Euro
Lesotho
LS
Not Euro
Liberia
LR
Not Euro
Libya
LY
Not Euro
Liechtenstein
LI
Not Euro
Lithuania
LT
Euro
Luxembourg
LU
Euro
Macao
MO
Not Euro
Macedonia
MK
Not Euro
Madagascar
MG
Not Euro
Malawi
MW
Not Euro
Malaysia
MY
Not Euro
Maldives
MV
Not Euro
Mali
ML
Not Euro
Malta
MT
Euro
Marshall Islands
MH
Not Euro
Martinique
MQ
Euro
Mauritania
MR
Not Euro
Mauritius
MU
Not Euro
Mayotte
YT
Euro
Mexico
MX
Not Euro
Micronesia
FM
Not Euro
Moldova
MD
Not Euro
Monaco
MC
Euro
Mongolia
MN
Not Euro
Montenegro
ME
Euro
Montserrat
MS
Not Euro
Morocco
MA
Not Euro
Mozambique
MZ
Not Euro
Myanmar
MM
Not Euro
Namibia
NA
Not Euro
Nauru
NR
Not Euro
Nepal
NP
Not Euro
Netherlands
NL
Euro
New Caledonia
NC
Not Euro
New Zealand
NZ
Not Euro
Nicaragua
NI
Not Euro
Niger
NE
Not Euro
Nigeria
NG
Not Euro
Niue
NU
Not Euro
Norfolk Island
NF
Not Euro
North Korea
KP
Not Euro
Northern Mariana Islands
MP
Not Euro
Norway
NO
Not Euro
Oman
OM
Not Euro
Pakistan
PK
Not Euro
Palau
PW
Not Euro
Palestine
PS
Not Euro
Panama
PA
Not Euro
Papua New Guinea
PG
Not Euro
Paraguay
PY
Not Euro
Peru
PE
Not Euro
Philippines
PH
Not Euro
Pitcairn Islands
PN
Not Euro
Poland
PL
Not Euro
Portugal
PT
Euro
Puerto Rico
PR
Not Euro
Qatar
QA
Not Euro
Republic of the Congo
CG
Not Euro
Réunion
RE
Euro
Romania
RO
Not Euro
Russia
RU
Not Euro
Rwanda
RW
Not Euro
Saint Barthélemy
BL
Euro
Saint Helena
SH
Not Euro
Saint Kitts and Nevis
KN
Not Euro
Saint Lucia
LC
Not Euro
Saint Martin
MF
Euro
Saint Pierre and Miquelon
PM
Euro
Saint Vincent and the Grenadines
VC
Not Euro
Samoa
WS
Not Euro
San Marino
SM
Euro
São Tomé and Príncipe
ST
Not Euro
Saudi Arabia
SA
Not Euro
Senegal
SN
Not Euro
Serbia
RS
Not Euro
Seychelles
SC
Not Euro
Sierra Leone
SL
Not Euro
Singapore
SG
Not Euro
Sint Maarten
SX
Not Euro
Slovakia
SK
Euro
Slovenia
SI
Euro
Solomon Islands
SB
Not Euro
Somalia
SO
Not Euro
South Africa
ZA
Not Euro
South Georgia and the South Sandwich Islands
GS
Not Euro
South Korea
KR
Not Euro
South Sudan
SS
Not Euro
Spain
ES
Euro
Sri Lanka
LK
Not Euro
Sudan
SD
Not Euro
Suriname
SR
Not Euro
Svalbard and Jan Mayen
SJ
Not Euro
Swaziland
SZ
Not Euro
Sweden
SE
Not Euro
Switzerland
CH
Not Euro
Syria
SY
Not Euro
Taiwan
TW
Not Euro
Tajikistan
TJ
Not Euro
Tanzania
TZ
Not Euro
Thailand
TH
Not Euro
Togo
TG
Not Euro
Tokelau
TK
Not Euro
Tonga
TO
Not Euro
Trinidad and Tobago
TT
Not Euro
Tunisia
TN
Not Euro
Turkey
TR
Not Euro
Turkmenistan
TM
Not Euro
Turks and Caicos Islands
TC
Not Euro
Tuvalu
TV
Not Euro
U.S. Minor Outlying Islands
UM
Not Euro
U.S. Virgin Islands
VI
Not Euro
Uganda
UG
Not Euro
Ukraine
UA
Not Euro
United Arab Emirates
AE
Not Euro
United Kingdom
GB
Not Euro
United States
US
Not Euro
Uruguay
UY
Not Euro
Uzbekistan
UZ
Not Euro
Vanuatu
VU
Not Euro
Vatican City
VA
Euro
Venezuela
VE
Not Euro
Vietnam
VN
Not Euro
Wallis and Futuna
WF
Not Euro
Western Sahara
EH
Not Euro
Yemen
YE
Not Euro
Zambia
ZM
Not Euro
Zimbabwe
ZW
Not Euro
[/input]
[output]
Afghanistan
AF
Not Euro
Åland
AX
Euro
Albania
AL
Not Euro
Algeria
DZ
Not Euro
American Samoa
AS
Not Euro
Andorra
AD
Euro
Angola
AO
Not Euro
Anguilla
AI
Not Euro
Antarctica
AQ
Not Euro
Antigua and Barbuda
AG
Not Euro
Argentina
AR
Not Euro
Armenia
AM
Not Euro
Aruba
AW
Not Euro
Australia
AU
Not Euro
Austria
AT
Euro
Azerbaijan
AZ
Not Euro
Bahamas
BS
Not Euro
Bahrain
BH
Not Euro
Bangladesh
BD
Not Euro
Barbados
BB
Not Euro
Belarus
BY
Not Euro
Belgium
BE
Euro
Belize
BZ
Not Euro
Benin
BJ
Not Euro
Bermuda
BM
Not Euro
Bhutan
BT
Not Euro
Bolivia
BO
Not Euro
Bonaire
BQ
Not Euro
Bosnia and Herzegovina
BA
Not Euro
Botswana
BW
Not Euro
Bouvet Island
BV
Not Euro
Brazil
BR
Not Euro
British Indian Ocean Territory
IO
Not Euro
British Virgin Islands
VG
Not Euro
Brunei
BN
Not Euro
Bulgaria
BG
Not Euro
Burkina Faso
BF
Not Euro
Burundi
BI
Not Euro
Cambodia
KH
Not Euro
Cameroon
CM
Not Euro
Canada
CA
Not Euro
Cape Verde
CV
Not Euro
Cayman Islands
KY
Not Euro
Central African Republic
CF
Not Euro
Chad
TD
Not Euro
Chile
CL
Not Euro
China
CN
Not Euro
Christmas Island
CX
Not Euro
Cocos Islands
CC
Not Euro
Colombia
CO
Not Euro
Comoros
KM
Not Euro
Cook Islands
CK
Not Euro
Costa Rica
CR
Not Euro
Croatia
HR
Not Euro
Cuba
CU
Not Euro
Curacao
CW
Not Euro
Cyprus
CY
Euro
Czech Republic
CZ
Not Euro
Democratic Republic of the Congo
CD
Not Euro
Denmark
DK
Not Euro
Djibouti
DJ
Not Euro
Dominica
DM
Not Euro
Dominican Republic
DO
Not Euro
East Timor
TL
Not Euro
Ecuador
EC
Not Euro
Egypt
EG
Not Euro
El Salvador
SV
Not Euro
Equatorial Guinea
GQ
Not Euro
Eritrea
ER
Not Euro
Estonia
EE
Euro
Ethiopia
ET
Not Euro
Falkland Islands
FK
Not Euro
Faroe Islands
FO
Not Euro
Fiji
FJ
Not Euro
Finland
FI
Euro
France
FR
Euro
French Guiana
GF
Euro
French Polynesia
PF
Not Euro
French Southern Territories
TF
Euro
Gabon
GA
Not Euro
Gambia
GM
Not Euro
Georgia
GE
Not Euro
Germany
DE
Euro
Ghana
GH
Not Euro
Gibraltar
GI
Not Euro
Greece
GR
Euro
Greenland
GL
Not Euro
Grenada
GD
Not Euro
Guadeloupe
GP
Euro
Guam
GU
Not Euro
Guatemala
GT
Not Euro
Guernsey
GG
Not Euro
Guinea
GN
Not Euro
Guinea-Bissau
GW
Not Euro
Guyana
GY
Not Euro
Haiti
HT
Not Euro
Heard Island and McDonald Islands
HM
Not Euro
Honduras
HN
Not Euro
Hong Kong
HK
Not Euro
Hungary
HU
Not Euro
Iceland
IS
Not Euro
India
IN
Not Euro
Indonesia
ID
Not Euro
Iran
IR
Not Euro
Iraq
IQ
Not Euro
Ireland
IE
Euro
Isle of Man
IM
Not Euro
Israel
IL
Not Euro
Italy
IT
Euro
Ivory Coast
CI
Not Euro
Jamaica
JM
Not Euro
Japan
JP
Not Euro
Jersey
JE
Not Euro
Jordan
JO
Not Euro
Kazakhstan
KZ
Not Euro
Kenya
KE
Not Euro
Kiribati
KI
Not Euro
Kosovo
XK
Euro
Kuwait
KW
Not Euro
Kyrgyzstan
KG
Not Euro
Laos
LA
Not Euro
Latvia
LV
Euro
Lebanon
LB
Not Euro
Lesotho
LS
Not Euro
Liberia
LR
Not Euro
Libya
LY
Not Euro
Liechtenstein
LI
Not Euro
Lithuania
LT
Euro
Luxembourg
LU
Euro
Macao
MO
Not Euro
Macedonia
MK
Not Euro
Madagascar
MG
Not Euro
Malawi
MW
Not Euro
Malaysia
MY
Not Euro
Maldives
MV
Not Euro
Mali
ML
Not Euro
Malta
MT
Euro
Marshall Islands
MH
Not Euro
Martinique
MQ
Euro
Mauritania
MR
Not Euro
Mauritius
MU
Not Euro
Mayotte
YT
Euro
Mexico
MX
Not Euro
Micronesia
FM
Not Euro
Moldova
MD
Not Euro
Monaco
MC
Euro
Mongolia
MN
Not Euro
Montenegro
ME
Euro
Montserrat
MS
Not Euro
Morocco
MA
Not Euro
Mozambique
MZ
Not Euro
Myanmar
MM
Not Euro
Namibia
NA
Not Euro
Nauru
NR
Not Euro
Nepal
NP
Not Euro
Netherlands
NL
Euro
New Caledonia
NC
Not Euro
New Zealand
NZ
Not Euro
Nicaragua
NI
Not Euro
Niger
NE
Not Euro
Nigeria
NG
Not Euro
Niue
NU
Not Euro
Norfolk Island
NF
Not Euro
North Korea
KP
Not Euro
Northern Mariana Islands
MP
Not Euro
Norway
NO
Not Euro
Oman
OM
Not Euro
Pakistan
PK
Not Euro
Palau
PW
Not Euro
Palestine
PS
Not Euro
Panama
PA
Not Euro
Papua New Guinea
PG
Not Euro
Paraguay
PY
Not Euro
Peru
PE
Not Euro
Philippines
PH
Not Euro
Pitcairn Islands
PN
Not Euro
Poland
PL
Not Euro
Portugal
PT
Euro
Puerto Rico
PR
Not Euro
Qatar
QA
Not Euro
Republic of the Congo
CG
Not Euro
Réunion
RE
Euro
Romania
RO
Not Euro
Russia
RU
Not Euro
Rwanda
RW
Not Euro
Saint Barthélemy
BL
Euro
Saint Helena
SH
Not Euro
Saint Kitts and Nevis
KN
Not Euro
Saint Lucia
LC
Not Euro
Saint Martin
MF
Euro
Saint Pierre and Miquelon
PM
Euro
Saint Vincent and the Grenadines
VC
Not Euro
Samoa
WS
Not Euro
San Marino
SM
Euro
São Tomé and Príncipe
ST
Not Euro
Saudi Arabia
SA
Not Euro
Senegal
SN
Not Euro
Serbia
RS
Not Euro
Seychelles
SC
Not Euro
Sierra Leone
SL
Not Euro
Singapore
SG
Not Euro
Sint Maarten
SX
Not Euro
Slovakia
SK
Euro
Slovenia
SI
Euro
Solomon Islands
SB
Not Euro
Somalia
SO
Not Euro
South Africa
ZA
Not Euro
South Georgia and the South Sandwich Islands
GS
Not Euro
South Korea
KR
Not Euro
South Sudan
SS
Not Euro
Spain
ES
Euro
Sri Lanka
LK
Not Euro
Sudan
SD
Not Euro
Suriname
SR
Not Euro
Svalbard and Jan Mayen
SJ
Not Euro
Swaziland
SZ
Not Euro
Sweden
SE
Not Euro
Switzerland
CH
Not Euro
Syria
SY
Not Euro
Taiwan
TW
Not Euro
Tajikistan
TJ
Not Euro
Tanzania
TZ
Not Euro
Thailand
TH
Not Euro
Togo
TG
Not Euro
Tokelau
TK
Not Euro
Tonga
TO
Not Euro
Trinidad and Tobago
TT
Not Euro
Tunisia
TN
Not Euro
Turkey
TR
Not Euro
Turkmenistan
TM
Not Euro
Turks and Caicos Islands
TC
Not Euro
Tuvalu
TV
Not Euro
U.S. Minor Outlying Islands
UM
Not Euro
U.S. Virgin Islands
VI
Not Euro
Uganda
UG
Not Euro
Ukraine
UA
Not Euro
United Arab Emirates
AE
Not Euro
United Kingdom
GB
Not Euro
United States
US
Not Euro
Uruguay
UY
Not Euro
Uzbekistan
UZ
Not Euro
Vanuatu
VU
Not Euro
Vatican City
VA
Euro
Venezuela
VE
Not Euro
Vietnam
VN
Not Euro
Wallis and Futuna
WF
Not Euro
Western Sahara
EH
Not Euro
Yemen
YE
Not Euro
Zambia
ZM
Not Euro
Zimbabwe
ZW
Not Euro
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: All Diablo Characters 
[code-task title="Problem: All Diablo Characters " taskId="6823fbe2-a3dd-4aed-acb9-6ffeec54e035" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**QUERIES FOR DIABLO DATABASE!**

Display the **name** of all **characters** in alphabetical order. 

Submit your query statements as **Prepare DB & run queries**. 

## Examples
| **name** |
| --- |
| Amazon  |
| Assassin  |
| Barbarian  |
| …  |
|  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Amazon
Assassin
Barbarian
Crusader
Demon Hunter
Druid
Monk
Necromancer
Paladin
Sorceress
Witch Doctor
Wizard
[/input]
[output]
Amazon
Assassin
Barbarian
Crusader
Demon Hunter
Druid
Monk
Necromancer
Paladin
Sorceress
Witch Doctor
Wizard
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Homework Results
[tasks-results/]

[/slide]
