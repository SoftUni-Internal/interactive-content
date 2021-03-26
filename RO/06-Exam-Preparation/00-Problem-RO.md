[slide hideTitle]
# Problem: Loot Box
[video src="https://videos.softuni.org/hls/Java/Java-Advanced/09-Exam-Preparation/RO/interactive-java-advanced-exam-preparation-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Loot Box" taskId="Java-Advanced-Exam-Preparation-Loot-Box" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Descriere
_V-ați săturat să fiți singurii din echipa voastră fără articole grozave, așa că ați decis să cumpărați niște "loot boxes" care să aibă șansa să renunțe la unele obiecte interesante._


Fiecare achiziție vă oferă două "loot boxes" și sunt reprezentate ca o succesiune de numere întregi.

În primul rând, vi se va oferi **o secvență de numere întregi, reprezentând prima casetă de elemente virtuale consumabile**. Ulterior, vi se va oferi o altă **secvență de numere întregi care reprezintă a doua casetă de pradă**.

Trebuie să începeți de la **primul articol** din prima casetă și **să-l sumați** cu ultimul articol din a doua casetă.

Dacă **suma** valorilor lor este **un număr par,** adăugați elementul **însumat** **în colecția dvs. de articole revendicate** și **eliminați-le** **pe amândouă** din cutii.

În caz contrar, scoateți ultimul element din a doua casetă și adăugați-l la ultima poziție din prima casetă.

Trebuie să **opriți** însumarea articolelor când una dintre casete devine goală.

Dacă prima casetă de elemente virtuale consumabile devine goală, tipăriți:

`First lootbox is empty`

Dacă a doua casetă de elemente virtuale consumabile devine goală, imprimați:

`Second lootbox is empty`

În cele din urmă, trebuie să determinați calitatea articolelor revendicate.

Dacă suma articolelor revendicate este egală sau mai mare de 100, tipăriți:

`Your loot was epic! Value: {sum of claimed items}`

Print altele:

`Your loot was poor... Value: {sum of claimed items}`

## Intrare

- Pe **prima linie**, veți primi numerele întregi care reprezintă **prima casetă loot**, **separată** printr-un **spațiu unic**.
- Pe **a doua linie**, veți primi numerele întregi care reprezintă **a doua casetă loot, separată** de un **spațiu unic**.

## Ieșire

- Pe **prima** linie de ieșire - tipăriți care casetă s-a golit în formatul descris mai sus.
- Pe linia **a doua** - calitatea dvs. a casetei loot în formatul descris mai sus.

## Constrângeri

- Toate numerele date vor fi numere întregi valide în intervalul [0 ... 100].
- Nu va exista un caz în care ambele casete loot devin goale în același timp.


## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 10 11 8 13 5 6 | Second lootbox is empty | Mai întâi însumăm 10 și 3. Obținem 13, care nu este un număr par, așa că luăm ultimul element din a doua casetă și îl mutăm în ultima poziție în prima casetă. Starea actuală a casetelor:  |
| 0 4 7 3 6 23 3 | Your loot was poor... Value: 42 | 10 11 8 13 5 6 3 |
|  |  | 0 4 7 3 6 23 |
|  |  | Următoarea sumă este 33, deci facem același lucru din nou. La a treia iterație suma este 16, care este un număr par, așa că eliminăm ambele casete și adăugăm valoarea elementelor revendicate. Sumăm elementele până când una dintre cutii devine goală. |


| **Input** | **Output** |
| --- | --- |
| 20 40 60 80 100 | First lootbox is empty |
| 10 20 30 40 50 60 | Your loot was epic! Value: 500 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 11 8 13 5 6
0 4 7 3 6 23 3
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 42
[/output]
[/test]
[test open]
[input]
20 40 60 80 100
10 20 30 40 50 60
[/input]
[output]
First lootbox is empty
Your loot was epic! Value: 500
[/output]
[/test]
[test]
[input]
2 2 2 2
2 2 2
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 12
[/output]
[/test]
[test]
[input]
50 50 50
50 50
[/input]
[output]
Second lootbox is empty
Your loot was epic! Value: 200
[/output]
[/test]
[test]
[input]
2 2 2
2 2 2 2
[/input]
[output]
First lootbox is empty
Your loot was poor... Value: 12
[/output]
[/test]
[test]
[input]
50 50
50 50 50
[/input]
[output]
First lootbox is empty
Your loot was epic! Value: 200
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 8 9
1 2 3
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 12
[/output]
[/test]
[test]
[input]
3 3 3 3
2 2
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 0
[/output]
[/test]
[test]
[input]
2 2
3 3 3 3
[/input]
[output]
Second lootbox is empty
Your loot was poor... Value: 0
[/output]
[/test]
[test]
[input]
0 0
10 0 0 0
[/input]
[output]
First lootbox is empty
Your loot was poor... Value: 0
[/output]
[/test]
[test]
[input]
-10 10 -10 10
-10 10 -10 10 10
[/input]
[output]
First lootbox is empty
Your loot was poor... Value: 20
[/output]
[/test]
[test]
[input]
-3
1 2 3
[/input]
[output]
First lootbox is empty
Your loot was poor... Value: 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]