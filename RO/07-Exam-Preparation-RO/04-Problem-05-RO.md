[slide]

# Problem 5: TV Series Budget

[vimeo-video]
[stream language="EN" videoId="487118385/044812fcf3" default /]
[stream language="RO" videoId="487118385/044812fcf3"  /]
[/video-vimeo]

## Descriere
Ați fost angajat de o companie TV să scrieți un program care calculează dacă este posibil pentru clienții săi să cumpere serialele sale TV. Veți primi un număr, reprezentând bugetul clientului, numărul total de titluri de seriale pe care clientul ar vrea să le cumpere și, după aceea, prețul fiecăruia dintre seriale.Unele seriale au aplicate reduceri:

- Game of Thrones – 50\%
- Lucifer – 40\%	
- Protector – 30\%
- TotalDrama – 20\%
- Area – 10\%

## Intrare
Primiți de pe consolă:
- Buget- un număr întreg în intervalul \[10.0… 100.0\]
- Numărul de seriale - n – un număr întreg în intervalul \[1… 10\]

Pentru fiecare serial primiți 2 linii
- Numele serialului - un șir
- Prețul serialului - un număr real în intervalul \[1.0… 15.0\]

## Ieșire
Imprimați o linie pe consolă:

- Dacă bugetul dvs. este mai mare sau egal cu prețul serialelor:`You bought all the series and have {money left}$ left.`

- Dacă bugetul dvs. este mai mic decât prețul serialelor: `You need {money needed}$ more to buy the series!`

Rezultatul trebuie să fie formatat la două cifre după punctul zecimal. 
[code-task title="TV Series Budget" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
## Input
Budget - 10

Total number of TV series - 3

First title - Thrones

Price for the first one - 5

Second title - Riverdale

Price for the second one - 5

Third title - Gotham

Price for the third one - 2

## Output
You bought all the series and have 0.50$ left.

## Comments
Primiți bugetul– 10$ și numărul de seriale - 3.

Primul serial este Thrones cu prețul 5$, care are aplicată o reducere de 50\% din preț `5 - 50% = 2.50$`. 

Al doilea serial este Riverdale, care nu are nicio reducere aplicată prețului.

Al treilea serial nu are, de asemenea, nicio reducere.

Prețul serialului este `2.50 + 5 + 2 = 9.50$`. 

Bugetul este mai mare decât prețul serialelor, deci veți putea să le cumpărați.
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
You bought all the series and have 19.00$ left.
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
You bought all the series and have 0.10$ left.
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
You bought all the series and have 0.00$ left.
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
You bought all the series and have 1.10$ left.
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
You bought all the series and have 0.00$ left.
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
You bought all the series and have 51.50$ left.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
