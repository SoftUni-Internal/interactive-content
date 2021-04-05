[slide hideTitle]     
# Condiții Imbricate

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-9-10-11-nested-conditional-statements-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Destul de des, logica programului necesită utilizarea instrucțiunilor  `if` sau `if-else`, care sunt conținute una în alta.
Se numesc instrucțiuni **imbricate** `if` sau `if-else`.

După cum sugerează titlul "**imbricat**", acestea sunt instrucțiuni `if` sau `if-else` care sunt plasate în alte instrucțiuni `if` sau `else`.

```java
if (condition1) {
    if (condition2) {
        // body; 
    } else {
        // body;
    }
}
```

# Exemplu: titluri personale
În funcție de **vârstă**(număr zecimal și **sex**(**m**/**f**), tipăriți un titlu personal:
- "Mr." - un bărbat (sex "m") - 16 ani sau mai mult
- "Master" - un băiat (sex "m") sub 16 ani
- "Ms." - o femeie (sex "f") - 16 ani sau mai mult
- "Miss" - o fată (sex "f") sub 16 ani

## Soluție: Titluri de persoană
Ar trebui să observăm că **rezultatul** programului **depinde de câteva lucruri**.

**Mai întâi**, trebuie să verificăm care este **genul** introdus și **apoi** să verificăm **vârsta**.

Respectiv, vom folosi **câteva** blocuri `if-else`.

Aceste blocuri vor fi **imbricate**, adică din **rezultatul** primului, urmează să **definim** care dintre **celelalte** să executăm.


După citirea datelor de intrare de pe consolă, ar trebui executată următoarea logică a programului:
```java
Scanner scanner = new Scanner(System.in);
int age = Integer.parseInt(scanner.nextLine());
String gender = scanner.nextLine();

if (age < 16) {
    if (gender == "m") {
        System.out.println("Master");
    } else if (gender == "f") {
        System.out.println("Miss");
    }
} else {
    if (gender == "m") {
        System.out.println("Mr.");
    } else if (gender == "f") {
        System.out.println("Ms.");
    }
}
```

## Imbricare adânca
Imbricarea a **mai mult de trei instrucțiuni condiționale** în interiorul unei alte intrucțiuni nu este considerată o bună practică.

**Trebuie evitată**, mai ales prin optimizarea structurii / algoritmului codului și / sau prin utilizarea unui alt tip de instruțiune condițională.
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Marketplace

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-12-problem-and-solution-marketplace-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Marketplace" taskId="java-basics-nested-conditions-marketplace" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main
{
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:
* Citește un **produs** și **o zi** de pe consolă
* Tipărește **prețul**, formatat la a doua cifră după virgula zecimală pe baza tabelului de prețuri de mai jos

|**Product**|**Weekday**|**Weekend**| 
|---|---|---|
|Banana|2.50|2.70|
|Apple|1.30|1.60|
|Kiwi|2.20|3.00|

## Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| Banana | 2.50 |
| Weekday |

[/task-description]
[tests]
[test open]
[input]
Banana
Weekday
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
Apple
Weekend
[/input]
[output]
1.60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]



[slide hideTitle]
#  Problemă cu Soluție: Biggest Number of Three

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-14-problem-and-solution-greatest-number-of-three-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Biggest Number of Three" taskId="java-basics-nested-conditions-biggest-number-of-three" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:

   * Citește **3 numere** de pe consolă
   * Tipărește **cel mai mare** număr
## Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| 1 | 3 |
| 2 |
| 3 |

[/task-description]
[tests]
[test open]
[input]
1
2
3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
-1
-5
-9
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
1
5
3
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

