[slide hideTitle]
# Problem: Re-Volt

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/09-Exam-Preparation/RO/interactive-java-advanced-exam-preparation-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Re-Volt" taskId="Java-Advanced-Exam-Preparation-Re-Volt" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Vi se va da un număr întreg N pentru dimensiunea matricei pătrate și apoi un număr întreg pentru numărul de comenzi.

Pe următoarele **n** linii, veți primi rândurile matricei.

Jucătorul începe într-o poziție aleatorie (jucătorul este marcat cu **"f"**) și **toate sloturile goale** vor fi umplute cu **"+"** (plus).

Scopul este de a atinge punctul de sosire care va fi marcat cu **”F”**.

Pe teren pot exista și bonusuri și capcane.

Bonusurile sunt marcate cu **”B”**, iar capcanele sunt marcate cu **”T”**.

La fiecare tura vi se vor da comenzi pentru **mișcarea jucătorului**.

Dacă jucătorul **iese** din matrice, el intră din **cealaltă parte**.

De exemplu, dacă jucătorul este la 0, 0 și următoarea comandă este lăsată, el merge la ultimul loc din primul rând.

Dacă jucătorul pășește un **bonus**, el ar trebui să avanseze un alt pas înainte în direcția în care merge.

Dacă jucătorul calcă pe o **capcană**, el ar trebui să facă un pas înapoi.

Când jucătorul atinge **punctul de finalizare** sau **numărul de comenzi este atins**, jocul se termină.

## Intrare

- Pe prima linie, vi se dă numărul întreg N - dimensiunea matricei pătrate.
- În a doua vi se dă numărul de comenzi.
- Următoarele N linii dețin valorile pentru fiecare rând.
- Pe fiecare dintre următoarele linii, veți primi comenzi pentru direcțiile de mișcare.

## Ieșire

- Dacă jucătorul atinge nota de finalizare, tipăriți:
  - `Player won!`
- Dacă jucătorul atinge numărul de comenzi și nu a atins punctul de imprimare:
  - `Player lost!`

- La final imprimați matricea.

## Constrângeri

- Dimensiunea matricei va fi între [2 ... 20].
- Jucătorii vor fi întotdeauna indicați cu **"f"**.
- Dacă jucătorul pășește marca de sosire **în același timp** cu ultima sa comandă, el **câștigă** jocul.
- Comenzile vor fi în format de **sus**, **jos**, **stânga** sau **dreapta**.
- Nu va exista un caz în care să ocoliți finalizarea în timp ce vă aflați într-o capcană sau un bonus.
- O capcană nu te va plasa niciodată într-un bonus sau într-o altă capcană, iar un bonus nu te va plasa niciodată într-o capcană sau într-un alt bonus.

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 5 | Player won! | Prima comandă este în jos, astfel încât f se deplasează în jos  |
| 5 | +++++ | La rândul 1, jucătorul calcă un bonus și face un pas suplimentar. |
| +++++ | +++++ | La rândul 2, jucătorul pășește pe o capcană și face un pas înapoi. După fiecare întoarcere a câmpului este: |
| +f+++ | +B+++ |   1      2      3    |
| +B+++ | \++T\++ | +++++  +++++  +++++ |
| \++T\++ | +f+++ | +++++  +++++  +++++ |
| +F+++ |  | +B+++  +B+++  +B+++ |
| down |  | +fT++  +fT++  \++T\++ |
| right |  | +F+++  +F+++  +f+++ |
| down |  | La rândul, 3 f ajunge la punctul 'F' și câștigă jocul. |


| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 4 | Player lost! | Prima comandă este sus, astfel încât f se deplasează în sus și noua poziție a jucătorului este (0,1). |
| 3 | ++++ | Următoarea comandă este din nou activată, astfel încât jucătorul iese din matrice și revine din cealaltă parte la (3,1). |
| ++++ | +++ B | Apoi comanda este lăsată, deci poziția finală este (3,0), care nu este marca finală, astfel încât jucătorul a pierdut. |
| +f+B | ++T+ |  |
| ++T+ | f++F |  |
| +++F |  |  |
| up |  |  |
| up |  |  |
| left |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
5
+++++
+f+++
+B+++
\++T\++
+F+++
down
right
down
[/input]
[output]
Player won!
+++++
+++++
+B+++
\++T\++
+f+++
[/output]
[/test]
[test open]
[input]
4
3
++++
+f+B
++T+
+++F
up
up
left
[/input]
[output]
Player lost!
++++
+++B
\++T+
f\++F
[/output]
[/test]
[test open]
[input]
5
5
+++++
Bf+++
+++++
+++++
++++F
left
up
up
[/input]
[output]
Player won!
+++++
B++++
+++++
+++++
++++f
[/output]
[/test]
[test]
[input]
3
1
+++
+f+
++F
up
[/input]
[output]
Player lost!
+f+
+++
++F
[/output]
[/test]
[test]
[input]
3
1
+++
+f+
++F
down
[/input]
[output]
Player lost!
+++
+++
+fF
[/output]
[/test]
[test]
[input]
3
1
+++
+f+
++F
left
[/input]
[output]
Player lost!
+++
f++
++F
[/output]
[/test]
[test]
[input]
3
1
+++
+f+
++F
right
[/input]
[output]
Player lost!
+++
++f
++F
[/output]
[/test]
[test]
[input]
3
2
+++
+f+
++F
up
up
[/input]
[output]
Player lost!
+++
+++
+fF
[/output]
[/test]
[test]
[input]
3
2
+++
+f+
++F
down
down
[/input]
[output]
Player lost!
+f+
+++
++F
[/output]
[/test]
[test]
[input]
3
2
+++
+f+
++F
right
right
[/input]
[output]
Player lost!
+++
f++
++F
[/output]
[/test]
[test]
[input]
3
2
+++
+f+
++F
left
left
[/input]
[output]
Player lost!
+++
++f
++F
[/output]
[/test]
[test]
[input]
3
2
+++
Bf+
++F
left
down
[/input]
[output]
Player won!
+++
B++
++f
[/output]
[/test]
[test]
[input]
3
2
+++
Tf+
+F+
left
down
[/input]
[output]
Player won!
+++
T++
+f+
[/output]
[/test]
[test]
[input]
3
2
+++
BfF
+++
left
[/input]
[output]
Player won!
+++
B+f
+++
[/output]
[/test]
[/tests]
[/code-task]
[/slide]