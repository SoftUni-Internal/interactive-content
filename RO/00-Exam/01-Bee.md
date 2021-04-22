[slide hideTitle]
# Problemă: Bee
[code-task title="Bee" taskId="java-advanced-exam-Bee" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
# Descriere

Vi se va da un număr întreg **n** pentru **dimensiunea** teritoriului albinelor cu formă **pătrată**.

Pe următoarele **n** linii, veți primi **rândurile** teritoriului.

Albina va fi plasată într-o **poziție aleatorie**, marcată cu litera **„B”**.

Pe poziții aleatorii vor fi flori, marcate cu **'f'**.

S-ar putea să existe și un **bonus** pe teritoriu.

Întotdeauna va exista un singur bonus.

Va fi **marcat** cu **litera** - **„O”**.

**Toate pozițiile goale** vor fi marcate cu „.”.

La fiecare tura, vi se va da **comanda** pentru **mișcarea albinei**.

Comenzile vor fi: **„sus”**, **„jos”**, **„stânga”**, **„dreapta”**, **„Sfârșit”**.

Dacă albina **se mută** la o **floare**, aceasta polenizează floarea și crește florile polenizate cu una.

Dacă merge la un **bonus**, albina primește bonus o mișcare înainte și apoi bonusul **dispare**.

Dacă albina **se stinge** nu se poate întoarce înapoi și programul se încheie. Dacă albina primește comanda **„End”**, programul se termină.

Albina are nevoie de **cel puțin 5 flori polenizate**.

## Intrare

- Pe prima linie, vi se dă întregul **n** - dimensiunea matricei **pătrate**.

- **Următoarele n linii** conțin valorile pentru fiecare **rând**.

- Pe fiecare dintre următoarele rânduri până când primiți comanda **„Sfârșit”**, veți primi o comandă de mutare.

## Ieșire

- Pe prima linie:
  - Dacă albina iese din teritoriul său tipăriți: **„Albina s-a pierdut!”**
- Pe a doua linie:
  - Dacă albina nu a putut poleniza suficient de multe flori, se imprimă: **"The bee couldn't pollinate the flowers, she needed** \{**needed**\} **flowers more"**
  - Dacă albina a polenizat cu succes suficiente flori imprimă: **"Great job, the bee manage to pollinate** \{**polinationed flowers**\} **flowers!"**
- La final imprimați matricea.

## Constrângeri

- Mărimea matricei **pătrate** va fi între \[2…10\]

- Va fi **mereu** bonus **0** sau **1** , marcat cu - **„O”**

- Poziția albinei va fi marcată cu **„B”**

- Nu va exista un caz în care un bonus să scoată albina din teritoriul său

## Exemple

|**Intrare**|**Ieșire**|
|-----|------|
|5|The bee got lost!|
|Bff..|Great job, the bee manage to pollinate 6 flowers!|
|..O..|.....|
|f.f.f|.....|
|.....|....f|
|fffff|.....|
|right|..fff|
|right||
|down||
|left||
|left||
|down||
|down||
|right||
|down||

## Comentariu

Acest tabel ilustrează stadiul teritoriul după o comandă de mișcare dată.
Formatul este `row of the command) direction`:

|1) right|2) right|3) down|5) left|
|---|---|---|---|
|.Bf..|..B..|.....|.....|
|..O..|..O..|.....|.....|
|f.f.f|f.f.f|f.B.f|fB..f|
|.....|.....|.....|.....|
|fffff|fffff|fffff|fffff|


- polenizează o floare: „f” (0, 1)

- călcați pe un bonus: „O” (1, 2) și faceți încă un pas până la: „f” (2, 2)

- albina este aprinsă (4, 1), următoarea comandă pe care o primește este în jos și iese din teren și programul se încheie.

|**Intrare**|**Ieșire**|
|---|---|
|4|The bee couldn't pollinate the flowers, she needed 2 flowers more|
|....|.B..|
|.O..|....|
|ff..|....|
|f.B.|....|
|left||
|left||
|up||
|right||
|up||
|End||

[hints]
[hint]
Creați o metodă care verifică dacă o poziție se află în interiorul limitelor teritoriului.
Trebuie să returneze o valoare booleană.
[/hint] 
[hint]
Puteți scrie de asemenea și o metodă pentru localizarea albinei.
Utilizați bucle imbricate pentru a obține pozițiile orizontale și verticale din matrice.
Apoi verificați dacă poziția curentă conține 'B'.
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
Bff..
..O..
f.f.f
.....
fffff
right
right
down
left
left
down
down
right
down
[/input]
[output]
The bee got lost!
Great job, the bee manage to pollinate 6 flowers!
.....
.....
....f
.....
..fff
[/output]
[/test]
[test open]
[input]
4
....
.O..
ff..
f.B.
left
left
up
right
up
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 2 flowers more
.B..
....
....
....
[/output]
[/test]
[test]
[input]
4
....
BOff
..ff
ffff
right
right
down
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 2 flowers more
....
....
..fB
ffff
[/output]
[/test]
[test]
[input]
3
B..
fff
...
right
right
down
down
left
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 4 flowers more
...
ff.
.B.
[/output]
[/test]
[test]
[input]
4
....
Bfff
.Off
....
right
right
right
down
left
left
End
[/input]
[output]
Great job, the bee manage to pollinate 5 flowers!
....
....
B...
....
[/output]
[/test]
[test]
[input]
3
B..
...
...
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 5 flowers more
B..
...
...
[/output]
[/test]
[test]
[input]
3
...
fff
..B
right
[/input]
[output]
The bee got lost!
The bee couldn't pollinate the flowers, she needed 5 flowers more
...
fff
...
[/output]
[/test]
[test]
[input]
4
Bfff
.O..
....
ffff
right
right
down
left
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 3 flowers more
...f
B...
....
ffff
[/output]
[/test]
[test]
[input]
2
..
B.
left
[/input]
[output]
The bee got lost!
The bee couldn't pollinate the flowers, she needed 5 flowers more
..
..
[/output]
[/test]
[test]
[input]
3
B..
fff
fff
down
down
End
[/input]
[output]
The bee couldn't pollinate the flowers, she needed 3 flowers more
...
.ff
Bff
[/output]
[/test]
[test]
[input]
4
BOff
ffff
..ff
ffff
right
right
down
down
left
down
left
left
End
[/input]
[output]
Great job, the bee manage to pollinate 8 flowers!
....
fff.
....
B..f
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
