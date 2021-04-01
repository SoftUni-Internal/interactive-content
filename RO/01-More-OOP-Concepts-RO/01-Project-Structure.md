# Structura Proiectului

[slide hideTitle]

# Împărțirea Codului în Metode

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-3-4-5-6-Projects-structure-Methods-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosim **metode** pentru a împărți codul în blocuri funcționale.

Acest lucru îmbunătățește **lizibilitatea codului** și permite **depanarea mai ușoară**.

Să aruncăm o privire la acest **exemplu**.

Putem converti aceste bucle imbricate:
```java
for (char move : moves){
  for (int r = 0; r < room.length; r++)
    for (int c = 0; c < room[r].length; c++)
      if (room[row][col] == 'b')
        …
}
```

Într-o combinație mai lizibilă de **metode**:
```java
for (char move : moves) {
    moveEnemies();
    killerCheck();
    movePlayer(move);
 }
```

Metodele ne permit **să reutilizăm cu ușurință codul** fără a fi nevoie să-l retipăm în diferite locuri.

**Schimbarea metodei** o dată va schimba comportamentul metodei oriunde este numită.

**Exemplu:**

```java
BankAccount bankAcc = new BankAccount();
bankAcc.setId(1);
bankAcc.deposit(20);
System.out.printf("Account %d, balance %d",
		bankAcc.getId(),bankAcc.getBalance());
bankAcc.withdraw(10);
// ...
System.out.println(bankAcc.toString());
//Override .toString() to set a global printing format

```
Putem înlocui metoda `toString ()` din clasa **BankAccount** pentru a returna detaliile contului în format String.

Deși această modificare se face într-un singur loc, aceasta va afecta codul la nivel global de fiecare dată când apelăm metoda pe orice obiect de tip **BankAccount**.



[/slide]

[slide hideTitle]

# Problemă cu Soluție: Rhombus of Stars

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-7-rhombus-of-stars-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Rhombus of Stars" taskId="oop-basics-java-more-oop-concepts-lab-Rhombus-of-Stars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care citește un **întreg pozitiv n** ca intrare și imprimă un **romb** cu dimensiunea **n** în consolă.

[image assetsSrc="more-oop-concepts-example(1).png" /]

## Indiciu

Creați o metodă `printRow ()` pentru a reutiliza cu ușurință codul.


## Exemplu 1

[image assetsSrc="java-oop-basics-rhombus1.png" /]


## Exemplu 2

[image assetsSrc="java-oop-basics-rhombus2.png" /]

## Exemplu 3

[image assetsSrc="java-oop-basics-rhombus3.png" /]


## Exemplu 4

[image assetsSrc="java-oop-basics-rhombus4.png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
[/input]
[output]
   \*
  \* \*
 \* \* \*
\* \* \* \*
 \* \* \*
  \* \*
   \*
[/output]
[/test]
[test]
[input]
48
[/input]
[output]
                                               \*
                                              \* \*
                                             \* \* \*
                                            \* \* \* \*
                                           \* \* \* \* \*
                                          \* \* \* \* \* \*
                                         \* \* \* \* \* \* \*
                                        \* \* \* \* \* \* \* \*
                                       \* \* \* \* \* \* \* \* \*
                                      \* \* \* \* \* \* \* \* \* \*
                                     \* \* \* \* \* \* \* \* \* \* \*
                                    \* \* \* \* \* \* \* \* \* \* \* \*
                                   \* \* \* \* \* \* \* \* \* \* \* \* \*
                                  \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                  \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                   \* \* \* \* \* \* \* \* \* \* \* \* \*
                                    \* \* \* \* \* \* \* \* \* \* \* \*
                                     \* \* \* \* \* \* \* \* \* \* \*
                                      \* \* \* \* \* \* \* \* \* \*
                                       \* \* \* \* \* \* \* \* \*
                                        \* \* \* \* \* \* \* \*
                                         \* \* \* \* \* \* \*
                                          \* \* \* \* \* \*
                                           \* \* \* \* \*
                                            \* \* \* \*
                                             \* \* \*
                                              \* \*
                                               \*
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
              \*
             \* \*
            \* \* \*
           \* \* \* \*
          \* \* \* \* \*
         \* \* \* \* \* \*
        \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \*
\* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \*
         \* \* \* \* \* \*
          \* \* \* \* \*
           \* \* \* \*
            \* \* \*
             \* \*
              \*
[/output]
[/test]
[test open]
[input]
1
[/input]
[output]
\*
[/output]
[/test]
[test open]
[input]
2
[/input]
[output]
 \*
\* \*
 \*
[/output]
[/test]
[test open]
[input]
3
[/input]
[output]
  \*
 \* \*
\* \* \*
 \* \*
  \*
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Împărțirea Codului în Clase

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-10-11-12-Splitting-code-into-classes-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

La fel ca metodele, clasele **nu ar trebui să „știe” sau să facă prea multe**.

**Exemplu:**

```java
GodMode master = new GodMode();
int[] numbers = master.parseAny(input);
// ...
int[] numbers2 = master.copyAny(numbers);
master.printToConsole(master.getDate());
master.printToConsole(numbers);
```

Cele de mai sus sunt un exemplu de clasă care face prea mult.

Ar trebui să împărțim codul nostru logic în clase care:

- **Ascund implementările**
- Ne permite să **schimbăm destinația de ieșire**
- Ne ajută să evităm **repetarea codului**

**Exemplu:** Același bloc de cod înainte și după utilizarea claselor.

**Inainte de:**

```java
List<Integer> input = Arrays.stream(
	sc.nextLine().split(" "))
	  .map(Integer::parseInt)
	  .collect(Collectors.toList()); 
...
String result = input.stream()
		      .map(String::valueOf)
		      .collect(Collectors.joining(", "));
System.out.println(result);
```

**După:**

```java
ArrayParser parser = new ArrayParser();
OuputWriter printer = new OuputWriter();
int[] numbers = parser.integersParse(args);
int[] coordinates = parser.integerParse(args1);
printer.printToConsole(numbers);
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Point in Rectangle

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-13-point-in-rectangle-problem-and-solution-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Point in Rectangle" taskId="oop-basics-java-more-oop-concepts-lab-Point-in-Rectangle" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere
Creați o clasă **Punct** și o clasă **Dreptunghi**.

Clasa **Punct** trebuie să conțină **coordonatele X** și **Y**.

Clasa **Dreptunghi** ar trebui să conțină 2 **Puncte** - colțurile sale **din stânga jos** și **din dreapta sus**.

În clasa **Dreptunghi**, ar trebui să implementați o metodă `conține(punct punct)` care returnează **adevărat** sau **fals**, bazat pe **dacă** argumentul **Punct** a trecut la metoda este **în interiorul** sau **în afara** obiectului **Dreptunghi**.

Punctele **de pe partea** unui pătrat sunt considerate **în interior**.

## Intrare

- Pe prima linie, citiți coordonatele din colțul din stânga jos și din dreapta sus al dreptunghiului în format:

"\<**bottomLeftX**\>" "\<**bottomLeftY**\>" "\<**topRightX**\>" "\<**topRightY**\>"
     
- Pe a doua linie, citiți un număr întreg **n** și pe următoarele **n** linii, citiți coordonatele punctelor

## Ieșire

- Pentru fiecare punct, imprimați rezultatul metodei `Contains()`


## Exemplu


| **Intrare** | **Ieșire** |
| --- | --- |
| 0 0 3 3 | true |
| 5 | true |
| 0 0 | false |
| 0 1 | false |
| 4 4 | true |
| 5 3 |  |
| 1 2 |  |


| **Intrare** | **Ieșire** |
| --- | --- |
| 2 -3 12 3 | true |
| 4 | true |
| 8 -1 | false |
| 11 3 | false |
| 1 1 |  |
| 2 4 |  |


| **Intrare** | **Ieșire** |
| --- | --- |
| 5 8 12 15 | false |
| 6 | true |
| 0 0 | true |
| 5 8 | true |
| 12 15 | true |
| 8 15 | true |
| 7 15 |  |
| 8 12 |  |

[/task-description]
[code-upload allowedMemory="30" /] 
[tests]
[test open]
[input]
2 -3 12 3
4
8 -1
11 3
1 1
2 4
[/input]
[output]
true
true
false
false
[/output]
[/test]
[test open]
[input]
0 0 3 3
5
0 0
0 1
4 4
5 3
1 2
[/input]
[output]
true
true
false
false
true
[/output]
[/test]
[test open]
[input]
5 8 12 15
6
0 0
5 8
12 15
8 15
7 15
8 12
[/input]
[output]
false
true
true
true
true
true
[/output]
[/test]
[test]
[input]
2 -3 12 3
6
8 -1
11 3
1 1
2 4
1 1
2 4
1 1
2 4
[/input]
[output]
true
true
false
false
false
false
[/output]
[/test]
[test]
[input]
0 0 3 3
10
0 0
0 1
4 4
5 3
1 2
-1 5
0 2
3 0
4 3
1 2
3 3
[/input]
[output]
true
true
false
false
true
false
true
true
false
true
[/output]
[/test]
[test]
[input]
5 8 12 15
9
0 0
5 8
12 15
8 15
7 15
8 12
15 8
15 7
12 8
[/input]
[output]
false
true
true
true
true
true
false
false
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
