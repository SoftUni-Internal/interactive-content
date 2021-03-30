[slide hideTitle]
# Predicate Party

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/06-Java-OOP-Basics-Exam-Preparation/RO/02-Predicate-Party-Problem-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Predicate Party" taskId="Java-OOP-Basics-Exam-Preparation-Predicate-Party" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java-code]
```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    // Write code here
  }
}
```
[/code-editor]
[task-description]
## Description

Părinții lui George sunt în vacanță pentru sărbători și el planifică o petrecere epică acasă.

Din păcate, abilitățile sale organizatorice sunt aproape inexistente, așa că vi se oferă sarcina de a-l ajuta cu rezervările.

Pe prima linie, veți obține o **listă** cu toți **oamenii** care vin.

În rândurile următoare, până când veți obține "**Party**!" comanda, vi se poate cere să **dublați** sau **să eliminați** toate persoanele care se aplică **criteriilor date**.

Există trei opțiuni diferite:

- Toți cei care au un nume **începând** cu un șir dat
- Toți cei care au un nume **care se termină** cu un șir dat
- Toți cei care au un nume cu o anumită **lungime**

Când tipăriți invitații care vin la petrecere, trebuie să le imprimați în ordine **crescătoare**.

Dacă nu merge nimeni, tipăriți "**Nobody is going to the party!**".

Vezi exemplele de mai jos.

## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| Peter Michael Stefanos | Michael, Stefanos are going to the party! |
| Remove StartWith P | |
| Double Length 5 | | 
| Party! | |



| **Intrare**|**Ieșire**|
| --- | --- |
| Peter | Peter, Peter, Peter, Peter are going to the party! |
| Double StartsWith Pete | |
| Double EndsWith eter | |
| Party! | |



| **Intrare**|**Ieșire**|
| --- | --- |
| Peter | Nobody is going to the party! |
| Remove StartsWith P | |
| Party! | | 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Peter Michael Stefanos
Remove StartsWith P
Double Length 5
Party!
[/input]
[output]
Michael, Stefanos are going to the party!
[/output]
[/test]
[test open]
[input]
Peter
Double StartsWith Pete
Double EndsWith eter
Party!
[/input]
[output]
Peter, Peter, Peter, Peter are going to the party!
[/output]
[/test]
[test open]
[input]
Peter
Remove StartsWith P
Party!
[/input]
[output]
Nobody is going to the party!
[/output]
[/test]
[test]
[input]
Pesho Misho Stefan Gosho Hari Meri pepi stavri loshomie
Remove StartsWith P
Double StartsWith p
Remove Length 4
Party!
[/input]
[output]
Gosho, Misho, Stefan, loshomie, stavri are going to the party!
[/output]
[/test]
[test]
[input]
G
Party!
[/input]
[output]
G are going to the party!
[/output]
[/test]
[test]
[input]
Pesho
Double StartsWith P
Double Length 5
Double EndsWith o
Party!
[/input]
[output]
Pesho, Pesho, Pesho, Pesho, Pesho, Pesho, Pesho, Pesho are going to the party!
[/output]
[/test]
[test]
[input]
Stavri
Double StartsWith P
Double Length 5
Double EndsWith o
Remove Length 5
Double StartsWith Pesho
Double StartsWith S
Party!
[/input]
[output]
Stavri, Stavri are going to the party!
[/output]
[/test]
[test]
[input]
Pesho
Double StartsWith P
Double Length 5
Double EndsWith o
Remove Length 5
Double StartsWith Pesho
Party!
[/input]
[output]
Nobody is going to the party!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
