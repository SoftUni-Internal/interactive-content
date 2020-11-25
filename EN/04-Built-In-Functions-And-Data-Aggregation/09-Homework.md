[slide]

# Homework

*U will need the databases from "built-in-functions-data-aggregation part one from 1 to 16 problem, and the built-in-functions-data-aggregation part two for the rest problems*

[Download Link Part One](https://mega.nz/file/LAZXDaqa#9Ka2J-5VPzTCQvigBwmNem8lxP-bqCtGuTytoe3SBjk)

[Download Link Part Two](https://mega.nz/file/rMZHDSyR#qTU1_wWO9IU6mXd9CnistjB7WHcHVQvJMJvvR9taxik)

# Part 1 - Queries from SoftUni Database

[/slide]

[slide hideTitle]

# Problem: Find Names of All Employees by First Name
[code-task title="Problem: Find Names of All Employees by First Name" taskId="d08df54f-f0cd-4502-a7d0-0129773cea76" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description

Write a SQL query to find **first** and **last** names of all employees whose first name **starts with "Sa" (case insensitively).**

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
[code-task title="Problem: Find Names of All Employees by Last Name" taskId="b8c44917-9454-4a86-9322-9fe351bd0dbc" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a SQL query to find **first** and **last** names of all employees whose **last name contains "ei" (case insensitively).**

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
[code-task title="Problem: Find First Names of All Employees" taskId="3360a3c2-0150-4f70-92d0-0661a019e0f2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description

Write a SQL query to find the **first names** of all employees in the departments with ID **3** or **10** and whose **hire year** is **between 1995 and 2005 inclusively.**

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
[code-task title="Problem: Find All Employees Except Engineers" taskId="9b6d6391-92a9-4743-a94d-6bccc0ee7562" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a SQL query to find the **first** and **last names** of all employees whose **job titles does not contain "engineer".**

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
[code-task title="Problem: Find Towns with Name Length" taskId="1bf3d24b-5245-4ed9-a8df-3fa74aae4178" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a SQL query to find **town names** that are **5** or **6** symbols long and **order them alphabetically by town name.** 

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
[code-task title="Problem: Find Towns Starting With" taskId="21ad63db-656c-4546-a81d-9221b55a90dd" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a SQL query to find all towns that **start with** letters **M**, **K**, **B** or **E** **(case insensitively).**

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
[code-task title="Problem: Find Towns Not Starting With" taskId="1bb92d30-90fe-40b3-915d-b42440ada2f9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a SQL query to find all towns that **do not start** with letters **R**, **B** or **D** **(case insensitively).**

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
[code-task title="Problem: Create View Employees Hired After 2000 Year" taskId="f3fc5234-5958-4363-83ab-2137c60378ef" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a SQL query to create view **v_employees_hired_after_2000** with **the first and the last name** of all employees **hired after 2000 year.**

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
[code-task title="Problem: Length of Last Name" taskId="b66a4a9a-2ba5-44c1-a27a-6c41a734f7c2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a SQL query to find the names of all employees whose last name is **exactly 5 characters long.**

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

[slide]

# Part 2 - Queries for Geography Database

[/slide]

[slide hideTitle]
# Problem: Countries Holding 'A' 3 or More Times
[code-task title="Problem: Countries Holding 'A' 3 or More Times" taskId="86a01d00-87b7-48d0-9f82-c5ced9654609" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Find all countries that hold the **letter 'A' in their name at least 3 times (case insensitively), sorted by ISO code.**

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
[code-task title="Problem: Mix of Peak and River Names" taskId="e897d6af-59fd-4952-b32c-ae87d6564568" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

[slide]

# Part 3 - Queries from Diablo Database

[/slide]

