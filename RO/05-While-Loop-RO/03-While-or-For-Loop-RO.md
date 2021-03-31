[slide hideTitle]
# Bucla While sau Bucla For?

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-12-13-While-or-for-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Buclele `while` și `for` **repetă** o secvență de **code**.

Dar există diverse situații în care scrierea codului necesită fie prima buclă, fie celelalte. 

Atunci când știm **de câte ori exact** vrem să repetăm bucla într-o anumită secvență de cod, folosim bucla  `for`.
```java live
for (int i = 0; i <= 5; i++) {
    System.out.println(i);
}
```

Este, de obicei, potrivit pentru buclele a căror inițializare și incrementare sunt instrucțiuni simple și înrudite ca logică. 

Este mult mai compactă decât bucla `while` și adună declarațiile care controlează bucla în același loc. 

Dar apar mai multe probleme **complexe** atunci când numărul iterațiilor  depinde de o anumită **condiție** și nu pot fi prevăzute dinainte.

Aceasta înseamnă că nu putem ști în avans **de câte ori** trebuie să repetăm bucla. 

In această situație este mai bine să folosim bucla `while`.

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

| **Input** | **Output** |
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
* Citește următoarele comenzi
* **Add** - Аdaugă 1 numărului
* **Subtract** - Scade 1 din număr
* **END** -  Imprimă numărul și oprește programul

## Exemplu

| **Input** | **Output** |
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

