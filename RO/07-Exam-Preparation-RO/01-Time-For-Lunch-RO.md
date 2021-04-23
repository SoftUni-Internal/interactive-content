# Problemă: Time For Lunch
[slide hideTitle]
# Time For Lunch

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/RO/interactive-programming-basics-with-java-exam-preparation-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Time For Lunch" taskId="java-exam-prep-Time-For-Lunch" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
În pauza de masă doriți să urmăriți un episod din serialul preferat.

Sarcina dvs. este să scrieți un program care vă va ajuta să determinați dacă aveți suficient timp pentru a viziona episodul.

În pauza de masă petreceți timpul pentru a lua masa și pentru a vă relaxa.

Timpul pentru prânz va fi **1/8** din pauză, iar timpul pentru relaxare va fi **1/4** din pauză.

## Intrare
Primiți 3 linii de pe consolă:
- Numele serialului - un **șir**
- Durata unui episod - un **număr întreg** în intervalul [10… 90]
- Durata pauzei - un număr întreg în intervalul [10 ... 120]

## Ieșire
Imprimați pe consolă o singură linie în formatul următor:
- Dacă timpul este suficient pentru a viziona episodul: **"You have enough time to watch** \{**name of the series**\} **and left with** \{**time left**\} **minutes free time."**
- Dacă timpul nu este suficient: **"You don't have enough time to watch** \{**name of the series**\}**, you need** \{**time needed**\} **more minutes."**

Rotunjiți **timpul** în sus la cel mai apropiat număr întreg.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- | 
| Game of Thrones | You have enough time to watch Game of Thrones and left with 0 minutes free time. |
| 60 | 
| 96 | 

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
Game of Thrones
60
96
[/input]
[output]
You have enough time to watch Game of Thrones and left with 0 minutes free time.
[/output]
[/test]
[test]
[input]
Riverdale
57
90
[/input]
[output]
You don't have enough time to watch Riverdale, you need 1 more minutes.
[/output]
[/test]
[test]
[input]
Gotham
45
120
[/input]
[output]
You have enough time to watch Gotham and left with 30 minutes free time.
[/output]
[/test]
[test]
[input]
Arrow
45
60
[/input]
[output]
You don't have enough time to watch Arrow, you need 8 more minutes.
[/output]
[/test]
[test]
[input]
CW
45
51
[/input]
[output]
You don't have enough time to watch CW, you need 14 more minutes.
[/output]
[/test]
[test]
[input]
Lucifer
50
75
[/input]
[output]
You don't have enough time to watch Lucifer, you need 4 more minutes.
[/output]
[/test]
[test]
[input]
Riverdale
45
80
[/input]
[output]
You have enough time to watch Riverdale and left with 5 minutes free time.
[/output]
[/test]
[test]
[input]
Game of thrones
56
90
[/input]
[output]
You have enough time to watch Game of thrones and left with 1 minutes free time.
[/output]
[/test]
[test]
[input]
Lucifer
45
80
[/input]
[output]
You have enough time to watch Lucifer and left with 5 minutes free time.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
