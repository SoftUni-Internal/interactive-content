# Problemă: TV Series Budget
[slide hideTitle]
# TV Series Budget

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/RO/interactive-programming-basics-with-java-exam-preparation-5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="TV Series Budget" taskId="java-basics-exam-prep-tv-series-budget" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
# Descriere
Sunteți angajat de o companie TV pentru a scrie un program care să calculeze dacă este posibil ca clienții să cumpere accesul la un serial pe care aceștia doresc să îl urmărească.

Aveți un buget și un număr de seriale pe care utilizatorul va dori să le achiziționeze.

Fiecare serial are un **titlu** și un **preț**.

Unele dintre seriale au o reducere:
- Thrones - 50%
- Lucifer - 40%
- Protector - 30%
- TotalDrama - 20%
- Area – 10%

## Intrare
Primiți de pe consolă:
- Buget - număr **real** în intervalul \[10.0 ... 100.0\]
- Numărul de seriale - n - un **număr întreg** în intervalul \[1 ... 10\]

Pentru fiecare serial primiți două rânduri:
- Titlul serialului - un **șir**
- Prețul serialului - un număr **real** în intervalul \[1.0… 15.0\]

## Ieșire
Ieșirea constă într-un singur rând în formatul următor:
- Dacă bugetul este mai mare sau egal cu prețul serialului: **"You bought all the series and left with** \{**money left**\}**$"**
- Dacă bugetul este mai mic decât prețul serialului: **"You need** \{**money needed**\}**$ more to buy the series!"**

Rezultatul trebuie formatat la două cifre după punctul zecimal.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 10 | You bought all the series and left with 0.50$ |
| 3 | |
| Thrones | |
| 5 | |
| Riverdale | |
| 5 | |
| Gotham | |
| 2 | |

[hints]

[hint]
După ce ați primit bugetul și numărul serialelor, stabiliți dacă serialele din intrare au o reducere. 
Apoi, calculați prețul pentru fiecare serial.
[/hint]
[hint]
Calculați prețul tuturor serialelor și verificați dacă le puteți cumpăra.
[/hint]

[/hints]
[/task-description]
[code-io /]
[tests]
[test open]
[input]
10
3
Thrones
5
Riverdale
5
Gotham
2
[/input]
[output]
You bought all the series and left with 0.50$
[/test]
[test]
[input]
25
2
Thrones
6
Lucifer
5
[/input]
[output]
You bought all the series and left with 19.00$
[/output]
[/test]
[test]
[input]
15
3
Protector
8
TotalDrama
6
Area
5
[/input]
[output]
You bought all the series and left with 0.10$
[/output]
[/test]
[test]
[input]
50
2
Lord of the rings
40
Gotham
10
[/input]
[output]
You bought all the series and left with 0.00$
[/output]
[/test]
[test]
[input]
24
4
Gotham
11
Thrones
5
Lucifer
9
Unkown
4
[/input]
[output]
You bought all the series and left with 1.10$
[/output]
[/test]
[test]
[input]
5
2
Area
12
Legendarie
48
[/input]
[output]
You need 53.80$ more to buy the series!
[/output]
[/test]
[test]
[input]
10
4
Thrones
8
Lucifer
5
Stoned
4
MK
12
[/input]
[output]
You need 13.00$ more to buy the series!
[/output]
[/test]
[test]
[input]
5
4
Legends
5
Gotham
4
Lucifer
12
Thrones
4
[/input]
[output]
You need 13.20$ more to buy the series!
[/output]
[/test]
[test]
[input]
5
2
Thrones
5
Scooby-Doo
2.50
[/input]
[output]
You bought all the series and left with 0.00$
[/output]
[/test]
[test]
[input]
14.67
3
Golden age
2.47
Rush hours series
15
Unknown
1.45
[/input]
[output]
You need 4.25$ more to buy the series!
[/output]
[/test]
[test]
[input]
100
4
Area
15
Legendary
10
Teen wolf
10
Breaking bad
15
[/input]
[output]
You bought all the series and left with 51.50$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
