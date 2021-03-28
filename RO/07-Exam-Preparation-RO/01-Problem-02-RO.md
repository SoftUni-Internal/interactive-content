// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-02"
# Problema 2: Time for Lunch
[slide hideTitle]
# Time for Lunch

[video src="https://videos.softuni.org/hls/javascript-basics/RO/07-Exam-Preparation/JS-exam-preparation-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Time for Lunch" taskId="js-pb-exam-preparation-Time-for-Lunch" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function timeForLunch(input) {
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
În timpul pauzei de prânz vreți să vedeți un episod din serialul TV preferat. 

Ceea ce trebuie să faceți este să scrieți un program care să vă ajute să aflați dacă aveți timp suficient să vedeți un episod complet. 

În pauza de masă trebuie să aveți timp **să mâncați** și **să vă odihniți**. 

Știți că timpul de care aveți nevoie pentru a vă mânca prânzul este exact 1\/8 (**o optime**) din timpul de pauză și că timpul de care aveți nevoie pentru vă odihni este exact 1\/4 (**un sfert**) din întreaga pauză de masă.


## Intrare
Ca intrare veți primi 3 elemente de pe consolă:
- Numele serialului: un șir
- Durata unui episod: un număr întreg în intervalul \[10… 90\]
- Durata pauzei: un număr întreg în intervalul \[10… 120\]

## Ieșire
Rezultatul trebuie să fie format dintr-o singură linie:

- În cazul în care este timp suficient pentru a viziona un episod complet: 

"**You have enough time to watch** \{**name of the series**\} **and would be left with** \{**time left**\} **minutes of free time.**"

- În cazul în care nu este timp suficient: 

"**You don't have enough time to watch** \{**name of the series**\}**, you need** \{**time needed**\} **more minutes.**"

Rotunjiți timpul în sus la cel mai apropiat număr întreg.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
|timeForLunch(['Game of Thrones', 60, 96])| You have enough time to watch Game of Thrones and would be left with 0 minutes of free time.|
|timeForLunch(['Riverdale', 57, 90])| You don't have enough time to watch Riverdale, you need 1 more minutes.|

[hints]

[hint]
Stabiliți timpul necesar pentru prânz.
[/hint]

[hint]
Calculați timpul pentru relaxare.
[/hint]

[hint]
Calculați cât timp a rămas.

Asigurați-vă că ieșirea corectă a fost imprimată pe consolă.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
timeForLunch(['Game of Thrones', 60, 96])
[/input]
[output]
You have enough time to watch Game of Thrones and would be left with 0 minutes of free time.
[/output]
[/test]
[test open]
[input]
timeForLunch(['Riverdale', 57, 90])
[/input]
[output]
You don't have enough time to watch Riverdale, you need 1 more minutes.
[/output]
[/test]
[test]
[input]
timeForLunch(['Gotham', 45, 120])
[/input]
[output]
You have enough time to watch Gotham and would be left with 30 minutes of free time.
[/output]
[/test]
[test]
[input]
timeForLunch(['Arrow', 45, 60])
[/input]
[output]
You don't have enough time to watch Arrow, you need 8 more minutes.
[/output]
[/test]
[test]
[input]
timeForLunch(['CW', 45, 51])
[/input]
[output]
You don't have enough time to watch CW, you need 14 more minutes.
[/output]
[/test]
[test]
[input]
timeForLunch(['Lucifer', 50, 75])
[/input]
[output]
You don't have enough time to watch Lucifer, you need 4 more minutes.
[/output]
[/test]
[test]
[input]
timeForLunch(['Riverdale', 45, 80])
[/input]
[output]
You have enough time to watch Riverdale and would be left with 5 minutes of free time.
[/output]
[/test]
[test]
[input]
timeForLunch(['Game of thrones', 56, 90])
[/input]
[output]
You have enough time to watch Game of thrones and would be left with 1 minutes of free time.
[/output]
[/test]
[test]
[input]
timeForLunch(['Lucifer', 45, 80])
[/input]
[output]
You have enough time to watch Lucifer and would be left with 5 minutes of free time.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
