[slide hideTitle]
# Problem: TV Series Budget
[code-task title="TV Series Budget" taskId="java-basics-exam-prep-tv-series-budget" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Sunteți angajat intr-o companie TV pentru a scrie un program care să calculeze dacă este posibil ca clienții să cumpere seria dorită.

Aveți un buget și un număr de serii pe care utilizatorul va dori să le achiziționeze.

Fiecare serie are un titlu și un preț.

Unele dintre serii au o reducere:
- Thrones - 50%
- Lucifer - 40%
- Protector - 30%
- TotalDrama - 20%
- Area – 10%

## Intrare
Primiți de pe consolă:
- Buget - număr real în intervalul \[10.0 ... 100.0\]
- Numărați seria - n - un număr întreg în intervalul \[1 ... 10\]

Pentru fiecare serie primiți două rânduri:
- Numele seriei - șir
- Preț pentru o serie - un număr readl în intervalul \[1.0… 15.0\]

## Ieșire
Imprimați o linie pe consolă:
- Dacă bugetul dvs. este mai mare sau egal cu prețul seriei: "You bought all the series and left with \{money left\}$"
- Dacă bugetul dvs. este mai mic decât prețul seriei: "You need \{money needed\}$ more to buy the series!"

Rezultatul trebuie formatat la două cifre după punctul zecimal.

## Exemplu
|**Intrare**|**Ieșire**|**Comentarii**|
| --- | --- | --- |
| 10 | You bought all the series and left with 0.50$ | Primești buget - 10 $ și număr de serii - 3. |
| 3 | | Prima serie este Thrones cu prețul de 5 $, care are 50% reducere din prețul 5 - 50% = 2,50 $. |
| Thrones | | A doua serie este Riverdale, care nu are reducere la preț. |
| 5 | | A treia serie, de asemenea, nu are reducere. |
| Riverdale | | Prețul seriei este de 2,50 + 5 + 2 = 9,50 $. Bugetul dvs. este mai mare decât prețul seriilor, astfel încât să le puteți.|
| 5 | | |
| Gotham | | |
| 2 | | |
[/task-description]
[code-io /]
[tests]
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