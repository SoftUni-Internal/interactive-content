// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-05"
# Problema 5: TV Series Budget
[slide hideTitle]

# TV Series Budget

[video src="https://videos.softuni.org/hls/javascript-basics/RO/07-Exam-Preparation/JS-exam-preparation-5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="TV Series Budget" taskId="js-pb-exam-preparation-TV-Series-Budget" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function budget(input) {
	// Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere
Ați fost angajat de o companie TV să creați un program care să determine dacă este posibil pentru clienți să cumpere câteva dintre serialele TV ale acesteia.

Unele seriale au aplicate reduceri:

- **Thrones**: 50\%
- **Lucifer**: 40\%	
- **Protector**: 30\%
- **TotalDrama**: 20\%
- **Area**: 10\%

## Intrare
Primiți de pe consolă:

- Buget: un număr în virgulă mobilă în intervalul \[10.0… 100.0\]

- Numărul "**n**" de seriale: un număr întreg în intervalul \[1… 10\]

Pentru fiecare serial primiți două elemente:

- Numele serialului: un șir

- Prețul serialului: un număr în virgulă mobilă în intervalul \[1.0… 15.0\]

## Ieșire
Imprimați o linie pe consolă:

- Dacă bugetul dvs. este mai mare sau egal cu prețul serialelor:

"**You bought all the series and have** \{**money left**\}$ **left.**"

- Dacă bugetul dvs. este mai mic decât prețul serialelor: 

"**You need** \{**money needed**\}$ **more to buy the series!**"

Rezultatul trebuie să fie formatat la două cifre după punctul zecimal. 

## Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
|budget([10, 3, 'Thrones', 5, 'Riverdale', 5, 'Gotham', 2])| You bought all the series and have 0.50$ left.|
|budget([25, 6, 'Teen Wolf', 8, 'Protector', 5, 'TotalDrama', 5,'Area', 4, 'Thrones', 5, 'Lucifer', 9])|You need 2.00$ more to buy the series!|

[hints]

[hint]
După primirea bugetului și a numărului de seriale, determinați dacă serialele din intrare au o reducere.
Apoi, calculați prețul pentru fiecare serial.
[/hint]
[hint]
Calculați prețul pentru toate serialele și verificați dacă le puteți cumpăra.
[/hint]

[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
budget([10, 3, 'Thrones', 5, 'Riverdale', 5, 'Gotham', 2])
[/input]
[output]
You bought all the series and have 0.50$ left.
[/output]
[/test]
[test open]
[input]
budget([25, 6, 'Teen Wolf', 8, 'Protector', 5, 'TotalDrama', 5,'Area', 4, 'Thrones', 5, 'Lucifer', 9])
[/input]
[output]
You need 2.00$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([25, 2, 'Thrones', 6, 'Lucifer', 5])
[/input]
[output]
You bought all the series and have 19.00$ left.
[/output]
[/test]
[test]
[input]
budget([15, 3, 'Protector', 8, 'TotalDrama', 6, 'Area', 5])
[/input]
[output]
You bought all the series and have 0.10$ left.
[/output]
[/test]
[test]
[input]
budget([50, 2, 'Lord of the rings', 40, 'Gotham', 10])
[/input]
[output]
You bought all the series and have 0.00$ left.
[/output]
[/test]
[test]
[input]
budget([24, 4, 'Gotham', 11, 'Thrones', 5, 'Lucifer', 9, 'Unkown', 4])
[/input]
[output]
You bought all the series and have 1.10$ left.
[/output]
[/test]
[test]
[input]
budget([5, 2, 'Area', 12, 'Legendarie', 48])
[/input]
[output]
You need 53.80$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([10, 4, 'Thrones', 8, 'Lucifer', 5, 'Stoned', 4, 'MK', 12])
[/input]
[output]
You need 13.00$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([5, 4, 'Legends', 5, 'Gotham', 4, 'Lucifer', 12, 'Thrones', 4])
[/input]
[output]
You need 13.20$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([5, 2, 'Thrones', 5, 'Scooby-Doo', 2.50])
[/input]
[output]
You bought all the series and have 0.00$ left.
[/output]
[/test]
[test]
[input]
budget([14.67, 3, 'Golden age', 2.47, 'Rush hours series', 15, 'Unknown', 1.45])
[/input]
[output]
You need 4.25$ more to buy the series!
[/output]
[/test]
[test]
[input]
budget([100, 4, 'Area', 15, 'Legendary', 10, 'Teen wolf', 10, 'Breaking bad', 15,])
[/input]
[output]
You bought all the series and have 51.50$ left.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
