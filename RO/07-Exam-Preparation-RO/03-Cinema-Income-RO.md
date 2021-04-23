
# Problem: Cinema Income
[slide hideTitle]

# Cinema Income

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/RO/interactive-programming-basics-with-java-exam-preparation-4-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cinema Income" taskId="java-basics-exam-prep-cinema-income" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Ați fost angajat de un cinematograf pentru a scrie un program care calculează dacă există numărul necesar de spectatori pentru a umple sala cinematografului și care este profitul evenimentului.

Pe prima linie veți primi numărul de locuri în sală.

Pe rândurile următoare, până la primirea comenzii "**Movie time!**", veți primi numere care reprezintă numărul de oameni care intră în sală.

Prețul pentru un bilet este de 5$.

Dacă numărul actual de persoane care intră în sală poate fi împărțit la 3 fără rest, există 5$ reducere din prețul total.

Dacă nu există suficiente locuri libere pentru persoanele care doresc să intre, înseamnă că nu mai sunt locuri și programul trebuie să oprească citirea intrărilor de pe consolă.

Dacă mai mulți oameni decât numărul locurilor disponibile încearcă să intre în sală, sala este evaluată ca fiind plină și programul trebuie să se oprească.

## Intrare
Citiți de pe consolă:
- Capacitatea sălii - un număr întreg în intervalul \[50 ... 150\]

- Pe următoarele rânduri, până la primirea comenzii "**Movie time!**" - numărul de persoane care intră în cinematograf - un număr întreg în intervalul \[1 ... 15\]

## Ieșire
Mai întâi, tipăriți pe consolă un singur rând în următorul format:
- Dacă ați primit comanda **"Movie time!"**: **"There are** \{**seats left**\} **seats left in the cinema."**

- Dacă nu mai sunt **locuri libere** în sală: **"The cinema is full."**

- Ulterior, tipăriți: **"Cinema income -** \{**income**\}**$"**

## Exemplu
| **Intrare** | **Ieșire** | 
| --- | --- |
| 60 | There are 6 seats left in the cinema. | 
| 10 | Cinema income - 255$ | 
| 6 | 
| 3 | 
| 20 | 
| 15 | 
| Movie time! | 

[hints]

[hint]
Verificați dacă există numărul de locuri libere necesare la fiecare iterație.
[/hint]

[hint]
Verificați dacă există o reducere și calculați prețul total.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
60
10
6
3
20
15
Movie time!
[/input]
[output]
There are 6 seats left in the cinema.
Cinema income - 255$
[/output]
[/test]
[test]
[input]
140
15
15
10
5
6
7
8
9
Movie time!
[/input]
[output]
There are 65 seats left in the cinema.
Cinema income - 355$
[/output]
[/test]
[test]
[input]
150
15
15
15
15
15
10
10
10
Movie time!
[/input]
[output]
There are 45 seats left in the cinema.
Cinema income - 500$
[/output]
[/test]
[test]
[input]
50
10
15
15
10
9
[/input]
[output]
The cinema is full.
Cinema income - 240$
[/output]
[/test]
[test]
[input]
100
15
15
15
15
15
15
15
[/input]
[output]
The cinema is full.
Cinema income - 420$
[/output]
[/test]
[test]
[input]
120
10
10
10
10
10
10
10
10
10
10
10
10
Movie time!
[/input]
[output]
There are 0 seats left in the cinema.
Cinema income - 600$
[/output]
[/test]
[test]
[input]
50
15
15
10
6
3
3
[/input]
[output]
The cinema is full.
Cinema income - 225$
[/output]
[/test]
[test]
[input]
100
15
3
6
9
12
15
10
Movie time!
[/input]
[output]
There are 30 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[test]
[input]
50
15
15
10
9
9
[/input]
[output]
The cinema is full.
Cinema income - 230$
[/output]
[/test]
[test]
[input]
120
10
15
3
6
9
12
15
Movie time!
[/input]
[output]
There are 50 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
