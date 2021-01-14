[slide]
# Problema 2: Time for Lunch

[vimeo-video]
[stream language="EN" videoId="487118102/c7f6a5713f" default /]
[stream language="RO" videoId="487118102/c7f6a5713f"  /]
[/video-vimeo]

## Descriere
În timpul pauzei de prânz vreți să vedeți un episod din serialul TV preferat. 

Ceea ce trebuie să faceți este să scrieți un program care să vă ajute să aflați dacă aveți timp suficient să vedeți un întreg episod. 

În pauza de masă trebuie să aveți timp să mâncați și să vă odihniți. 

Știți că timpul de care aveți nevoie pentru a vă mânca prânzul este exact `1/8`(o optime) din timpul de pauză și că timpul de care aveți nevoie pentru vă odihni este exact `1/4` (un sfert) din întreaga pauză de masă.


## Intrare
Veți primi 3 linii de pe consolă:
- Numele serialului - un șir
- Durata unui episod - un număr întreg în intervalul \[10… 90\]
- Durata pauzei - un număr întreg în intervalul \[10… 120\]

## Ieșire
Rezultatul ar trebui să fie format dintr-o singură linie:

- În cazul în care este timp suficient pentru a viziona un întreg episod: 

`You have enough time to watch {name of the series} and would be left with {time left} minutes of free time.`

- În cazul în care nu este timp suficient: 

`You don't have enough time to watch {name of the series}, you need {time needed} more minutes.`
Round the time up to the nearest whole number.

[code-task title="Time for Lunch" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
## Intrare
Numele serialului - Game of Thrones

Durata unui episod - 60

Durata pauzei - 96

## Ieșire
Aveți timp suficient pentru a viziona Game of Thrones și vă vor rămâne 0 minute de timp.
## Comments
Timp pentru masă: `96 * 1/8 = 12.0`

Timp pentru odihnă: `96 * 1/4 = 24.0`

Timp rămas: `96 - 12 - 24 = 60`

In acest caz, timpul care vă rămâne este mai mare sau egal cu durata unui episod.

Asigurați-vă că este imprimat rezultatul corect.
[/task-description]
[code-io /]
[tests]
[test]
[input]
Riverdale
57
90
[/input]
[output]
Nu aveți timp suficient pentru a viziona Riverdale, mai aveți nevoie de1 minut.
[/output]
[/test]
[test]
[input]
Gotham
45
120
[/input]
[output]
Aveți timp suficient pentru a viziona Gotham și vă vor rămâne 30 de minute de timp liber.
[/output]
[/test]
[test]
[input]
Arrow
45
60
[/input]
[output]
Nu aveți timp suficient pentru a vizona Arrow, mai aveți nevoide de 8 minute.
[/output]
[/test]
[test]
[input]
CW
45
51
[/input]
[output]
Nu aveți timp suficient pentru a vizona CW, mai aveți nevoide de 14 minute.
[/output]
[/test]
[test]
[input]
Lucifer
50
75
[/input]
[output]
Nu aveți timp suficient pentru a vizona Lucifer, mai aveți nevoide de 4 minute.
[/output]
[/test]
[test]
[input]
Riverdale
45
80
[/input]
[output]
Aveți timp suficient pentru a viziona Riverdale și  vă vor rămâne 5 minute de timp liber.
[/output]
[/test]
[test]
[input]
Game of thrones
56
90
[/input]
[output]
Aveți timp suficient pentru a viziona Game of thrones și  vă va rămâne 1 minut de timp liber.
[/output]
[/test]
[test]
[input]
Lucifer
45
80
[/input]
[output]
Aveți timp suficient pentru a viziona Lucifer și vă vor rămâne 5 minute de timp liber.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]