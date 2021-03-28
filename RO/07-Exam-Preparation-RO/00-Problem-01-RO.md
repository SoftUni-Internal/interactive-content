// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-01"
# Problema 1: Calculator for TV series
[slide hideTitle]
# Calculator for TV series

[video src="https://videos.softuni.org/hls/javascript-basics/RO/07-Exam-Preparation/JS-exam-preparation-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Calculator for TV series" taskId="js-pb-exam-preparation-Calculator-for-TV-series" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function tvSeries(input) {
   // Write your  code here
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
Scrieți un program care calculează cât timp vă va lua să vedeți toate episoadele unui serial TV, în minute.

Ca date de intrare, veți primi un număr de sezoane, numărul de episoade din fiecare sezon și durata fiecărui episod. 

În fiecare episod este inclusă o reclamă, ceea ce mărește durata episodului cu 20\%.

Trebuie să rețineți și faptul că fiecare sezon se încheie cu un episod special care este mai lung cu 10 minute decât celelalte.

## Intrare

Ca intrare veți primi 4 elemente de consolă:

- Numele serialului: un șir

- Numărul sezoanelor: un număr întreg în intervalul \[1...10\]

- Numărul episoadelor: un număr întreg în intervalul \[10... 80\]

- Durata unui episod standard fără reclame: număr în virgulă mobilă în intervalul \[40.0...65.0 \]

## Ieșire

Imprimați pe consolă timpul necesar pentru a viziona toate episoadele, rotunjit în jos la cel mai apropiat număr întreg în următorul format:

"**Total time needed to watch the** \{**name of the series**\} **series is** \{**time**\} **minutes.**"

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
|tvSeries(['Lucifer', 3, 18, 55])| Total time needed to watch the Lucifer series is 3594 minutes.|
|tvSeries(['Flash', 5, 20, 51])| Total time needed to watch the Flash series is 6170 minutes.|

[hints]

[hint]
Calculați durata reclamelor dintr-un episod.
[/hint]
[hint]

Stabiliți durata unui episod cu reclame.
[/hint]
[hint]

Adăugați timp suplimentar pentru episoadele speciale.
[/hint]
[hint]

Calculați timpul total necesar pentru a vedea tot serialul.
[/hint]

[/hints]


[/task-description]
[code-io /]
[tests]
[test open]
[input]
tvSeries(['Lucifer', 3, 18, 55])
[/input]
[output]
Total time needed to watch the Lucifer series is 3594 minutes.
[/output]
[/test]
[test open]
[input]
tvSeries(['Flash', 5, 20, 51])
[/input]
[output]
Total time needed to watch the Flash series is 6170 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Origin', 10, 19, 50])
[/input]
[output]
Total time needed to watch the Origin series is 11500 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Arrow', 5, 24, 60])
[/input]
[output]
Total time needed to watch the Arrow series is 8690 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Vampires', 8, 25, 50])
[/input]
[output]
Total time needed to watch the Vampires series is 12080 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Tom & Jerry', 15, 25, 30])
[/input]
[output]
Total time needed to watch the Tom & Jerry series is 13650 minutes.
[/output]
[/test]
[test]
[input]
tvSeries(['Teen wolf', 5, 20, 55])
[/input]
[output]
Total time needed to watch the Teen wolf series is 6650 minutes.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
