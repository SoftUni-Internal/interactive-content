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

[slide hideTitle]

# Problem: Games from 2011 and 2012 Year
[code-task title="Problem: Games from 2011 and 2012 Year" taskId="a0194ae0-e8cf-4e41-ad8a-d665c92c2616" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: User Email Providers" taskId="7c32b83e-06eb-4077-a7dd-1632f2cb637a" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Find information about the email providers of all users. 

Display the **user_name** and the **email provider.** Sort the results by **email provider alphabetically**, then by **username**. 

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
[code-task title="Problem: Get Users with IP Address Like Pattern" taskId="95b2a4c8-4de2-431f-bbc6-fa29a41df0e2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

// ToDo: The test's do not cover the output in the example. To investigate this in the future.

[/slide]

[slide]

# Part 4 - Date Functions Queries

[/slide]

[slide hideTitle]
# Problem: Orders Table
[code-task title="Problem: Orders Table" taskId="bcff865f-d6be-42df-9707-86042bde4549" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

[slide]

# Part 5 - Use "gringotts" database.

Mr. Bodrog is a greedy small goblin. His most precious possession is a small database of the deposits in 
the wizard's world. 

Mr. Bodrog wants you to send him some reports.

[/slide]

[slide hideTitle]
# Problem: Records' Count
[code-task title="Problem: Records' Count" taskId="7e289fb3-32e0-4b8f-8be6-7302236db670" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Longest Magic Wand" taskId="d6ec3d44-95d5-44fd-a1d9-aa012f6e48a1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Longest Magic Wand Per Deposit Groups" taskId="1063fe4b-e375-4115-bae9-3fde8918fd19" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Smallest Deposit Group Per Magic Wand Size" taskId="85bb7753-4a33-4ca2-baf9-479e0710ba19" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Deposits Sum" taskId="99a09706-5c5c-47a8-bc8f-ae310cfc5d48" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Deposits Sum for Ollivander Family" taskId="f4308167-f60b-4a89-8861-b0f7fb8c738b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Deposits Filter" taskId="34c1a441-85ee-48ba-a6d2-df4a41fe0e1d" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Deposit Charge" taskId="34eb0b18-bdc6-43ac-b7f7-9e713bb0e57d" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Age Groups" taskId="9786a2bf-d53f-4ad0-9e5b-e5269368c36c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write down a query that creates 7 different groups **based on their age.**

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
[code-task title="Problem: First Letter" taskId="133fd22e-d835-4145-a239-f2202423ebbe" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a query that returns all **unique** wizard **first letters of their first names only if they have deposit of type Troll Chest.** 

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
[code-task title="Problem: Average Interest" taskId="e942a851-7a76-40c3-a780-5b042a1023a9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Mr. Bodrog is highly interested in profitability. 

He wants to know the average interest of all deposits groups split by whether the deposit **has expired** or **not.** 

But that's not all. He wants you to select deposits with **start date after 01/01/1985.** 

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
# Problem: Employees Minimum Salaries
[code-task title="Problem: Employees Minimum Salaries" taskId="54c38ca0-1075-42e1-bf37-fea1cf35087c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Use soft_uni database.**

That's it! You no longer work for Mr. Bodrog. 

You have decided to find a proper job as an analyst in **SoftUni.**

It's not a surprise that you will use the **soft_uni database.**

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
[code-task title="Problem: Employees Average Salaries" taskId="be55c6d7-27be-4bc8-ad9d-c8b8aefffd5e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Employees Maximum Salaries" taskId="3591d89c-872f-4b04-b75b-e90fda3b376e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Employees Count Salaries" taskId="fb69e954-68ee-49b2-a07e-071ee5d447ff" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Count the salaries of all employees who **don't have a manager.**

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
# Problem: 3rd Highest Salary *
[code-task title="Problem: 3rd Highest Salary *" taskId="5fba5b46-c227-464c-886f-74cf2c4f66a8" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[code-task title="Problem: Departments Total Salaries" taskId="2cab45d6-9515-4fdd-8c6d-694143343dc9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a query which shows the **total sum of salaries** for each department.

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
