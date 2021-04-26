[slide hideTitle]
# Diferența dintre Bucla While și Bucla For

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-12-13-While-or-for-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Buclele `while` și `for` **repetă** ambele un bloc de **cod**.

Alegerea buclei de care avem nevoie depinde de situație și de scopul nostru final.

Atunci când știm **exact de câte ori** vrem să repetăm un anumit bloc de cod, folosim `bucla for`.
```java live
for (int i = 0; i <= 5; i++) {
    System.out.println(i);
}
```
**Bucla for** este definită într-un mod mai detaliat în comparație cu **bucla while**. Aceasta este structurată în felul următor:

- Instrucțiunea 1 setează o variabilă înainte de începutul buclei (int `i` = 0)

- Instrucțiunea 2 definește o condiție până la care bucla este executată (`i` mai mic sau egal cu 5). Dacă condiția este **true**, corpul buclei va fi executat. Dacă este **false** - bucla se va opri.

- Instrucțiunea 3 mărește valoarea variabilei (`i`++) de fiecare dată când blocul de cod din buclă este executat

Pot exista multe probleme **complexe** în care numărul iterațiilor depinde de o anumită **condiție** și nu pot fi prevăzute.

Acest lucru înseamnă că nu putem ști în avans **de câte ori** trebuie să repetăm bucla. 

În această situație este mai bine să folosim bucla `while`.

```java
Scanner scanner = new Scanner(System.in);
String command = scanner.nextLine();
int number = Integer.parseInt(scanner.nextLine());
while (command != "End") {
    switch (command) {
        case "Add":
            number += 1;
            break;
        case "Subtract":
            number -= 1;
            break;
    }

    command = scanner.nextLine();
}

System.out.println(number);S
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Odd number

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-14-15-Problem-and-Solution-Odd-Number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Odd Number" taskId="java-basics-while-loop-odd-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește numerele din consolă până ajunge la un **număr impar**
* Imprimă numărul **impar** 

## Exemplu

| **Intrare** | **Ieșire** |
| ---- | ---- |
| 2 | 3 |
| 4 |
| 8 |
| 3 |

[/task-description]
[tests]
[test open]
[input]
2
4
8
3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
2
4
8
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Number Processor

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-16-17-Problem-and-Solution-Number-Processor-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Number Processor" taskId="java-basics-while-loop-number-processor" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește un număr de pe consolă 
* Citește următoarele comenzi și execută acțiunile specificate:
    * **Add** - Аdaugă **1** la număr
    * **Subtract** - Scade **1** din număr
    * **END** - Imprimă numărul și oprește programul

## Exemplu

| **Intrare** | **Ieșire** |
| ---- | ---- |
| 5 | 6 |
| Add |
| END |

[/task-description]
[tests]
[test open]
[input]
5
Add
END
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
4
Add
END
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
4
Subtract
END
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
4
Add
Add
Subtract
END
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

