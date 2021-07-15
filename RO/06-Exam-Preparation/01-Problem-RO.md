[slide hideTitle]
# Problemă: Re-Volt

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
Vi se va da un număr întreg N pentru dimensiunea unei matrice pătratice și apoi un număr întreg pentru numărul de comenzi.

Pe următoarele **N** linii, veți primi rândurile matricei.

Jucătorul începe de pe o poziție aleatorie (el este marcat cu **"f"**), iar **toate pozițiile goale** vor fi marcate cu simbolul **"+"** (plus).

Scopul este de a ajunge la linia de sosire, care va fi marcată cu **"F"**.

Pe teren pot exista atât bonusuri, cât și capcane.

Bonusurile sunt marcate cu **"B"**, iar capcanele sunt marcate cu **"T"**.

La fiecare tură vi se vor da comenzi **care determină deplasarea jucătorului**.

Dacă jucătorul **iese** din matrice, el intră din **cealaltă parte**.

De exemplu, dacă jucătorul se află pe poziția 0, 0 și direcția următoarei comenzi este spre stânga, el merge pe ultima poziție de pe primul rând.

Dacă jucătorul primește un **bonus**, el trebuie să avanseze cu o poziție înainte, în direcția în care merge.

Dacă jucătorul calcă pe o **capcană**, el trebuie să se deplaseze cu o poziție înapoi.

Când jucătorul ajunge la **punctul de sosire** sau **numărul de comenzi este atins**, jocul se termină.

## Intrare

- Pe prima linie vi se dă numărul întreg N - dimensiunea matricei pătratice
- Pe a doua linie vi se dă numărul de comenzi
- Următoarele N linii dețin valorile pentru fiecare rând
- Pe fiecare dintre următoarele linii, veți primi comenzi pentru direcțiile de deplasare

## Ieșire

- Dacă jucătorul ajunge la linia de sosire, tipăriți:
  - `Player won!`
- Dacă jucătorul atinge numărul de comenzi și nu a ajuns la linia de sosire:
  - `Player lost!`

- La final imprimați matricea

## Constrângeri

- Dimensiunea matricei va fi între \[2 ... 20\]
- Jucătorii vor fi întotdeauna indicați prin litera **"f"**
- Dacă jucătorul ajunge la linia de sosire **atunci când primește** ultima sa comandă, el **câștigă** jocul
- Comenzile vor fi în formatul: **up**, **down**, **left** sau **right**
- Nu va exista un caz în care jucătorul va ocoli linia de sosire în timp ce se află pe o capcană sau un bonus
- O capcană nu va plasa jucătorul niciodată pe un bonus sau pe o altă capcană, iar un bonus nu plasa jucătorul niciodată pe o capcană sau alt bonus

## Exemple
| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| 5 | Player won! | Prima comandă este **down**, deci jucătorul se deplasează în jos.  |
| 5 | +++++ | În prima tură, jucătorul primește un bonus și face un pas suplimentar. |
| +++++ | +++++ | În a doua tură, jucătorul pășește pe o capcană și face un pas înapoi. După fiecare tură câmpul arată așa: |
| +f+++ | +B+++ |   1      2      3    |
| +B+++ | \++T\++ | +++++  +++++  +++++ |
| \++T\++ | +f+++ | +++++  +++++  +++++ |
| +F+++ |  | +B+++  +B+++  +B+++ |
| down |  | +fT++  +fT++  \++T\++ |
| right |  | +F+++  +F+++  +f+++ |
| down |  | După a treia tură, f ajunge la punctul 'F' și câștigă jocul. |

[hints]
[hint]
Iterați prin matrice utilizând o buclă for.
[/hint] 
[hint]
Utilizați o instrucțiune switch-case pentru a gestiona fiecare tip de deplasare - left, right, up și down.
[/hint]
[hint]
Implementați o metodă care returnează dacă jucătorul se află în limitele matricei și o a doua metodă care verifică dacă acesta se află pe o capcană.
[/hint] 
[hint]
Imprimați matricea utilizând două bucle for imbricate.
[/hint] 
[/hints] 


| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| 4 | Player lost! | Prima comandă este **up**, deci f se deplasează în sus și noua poziție a jucătorului este (0,1). |
| 3 | ++++ | Următoarea comandă este din nou **up**, deci jucătorul iese din matrice și revine din cealaltă parte la (3,1). |
| ++++ | +++ B | Apoi, comanda este **left**, deci poziția finală este (3,0), care nu este linia de sosire, deci jucătorul a pierdut. |
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
