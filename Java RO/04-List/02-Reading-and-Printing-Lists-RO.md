# Citirea și Tipărirea Listelor

[slide hideTitle]
# Citirea Listelor 

- Citirea unei liste folosind bucla `for` și `scanner.nextLine()`
```java 
Scanner scanner = new Scanner(System.in);

    // reading the List size 
int n = Integer.parseInt(scanner.nextLine()); 
        
    // initializing empty List of Integers
List<Integer> list = new ArrayList<>(); 

    // creating a for loop with the size of the List
for (int i = 0; i < n; i++) { 

    // read the element from the console        
    int number = Integer.parseInt(scanner.nextLine()); 

    // add the element to the List        
    list.add(number); 
}
```
[/slide]

[slide hideTitle]
# Reading from a Single Line

You can read a list as a single line from the console.

Imagine we have an input that consists of several Integer values, separated by spaces. (10 20 30 40 50)

```java
// input: 10 20 30 40 50
String values = scanner.nextLine();   

List<Integer> items = Arrays
        .stream(values.split(" "))     // split the string by a whitespace
        .map(Integer::parseInt)        // parse string to integer
        .collect(Collectors.toList()); // convert to a list
```
[/slide]

[slide hideTitle]
# Listele de Tipărire 

**Tipărirea unei liste utilizând o buclă "for"**

```java live
List<String> months = new ArrayList<>(
    Arrays.asList("January", "February", "March"));

for (int index = 0; index < months.size(); index++) {
   System.out.print(months.get(index) + " ");
}
```

**Printing a list using "for-each" loop**

```java live
List<String> numbers = new ArrayList<>(
    Arrays.asList("one", "two", "three", "four", "five", "six"));

for (String number : numbers) {
   System.out.print(number + " ");
}
```

**Printing a list using a "String.join(…)"**

```java live
List<String> list = new ArrayList<>(
    Arrays.asList("one", "two", "three", "four", "five", "six"));

System.out.println(String.join(" ", list));
```
[/slide]

[slide hideTitle]
# Problem with Solution: Sum Adjacent Equal Numbers

[code-task title="Sum Adjacent Equal Numbers" taskId="java-fund-Lists-Sum-Adjacent-Equal-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.text.DecimalFormat;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere

Scrieți un program pentru a **însuma toate numerele egale adiacente** într-o listă de numere zecimale, începând de la **stânga la dreapta**.

- După însumarea a două numere, rezultatul obținut ar putea fi egal cu unii dintre vecinii săi și ar trebui să fie însumat și (vezi exemplele de mai jos).

- Sumați întotdeauna cei doi vecini egali din stânga (dacă sunt disponibile mai multe cupluri de vecini egali).

## Exemple
|**Intrare**|**Ieșir** |**Comentarii**|
| --- | --- | --- |
| 3 3 6 1 | 12 1 | **3 3** 6 1 -> **6 6** 1 -> 12 1 |
|  |  |  |

|**Intrare**|**Ieșir**|**Comentarii**|
| --- | --- | --- |
| 8 2 2 4 8 16 | 16 8 16 | 8 **2 2** 4 8 16 -> 8**4 4** 8 16 -> **8 8** 8 16 -> 16 8 16 |
|  |  |  |

|**Intrare**|**Ieșir**|**Comentarii**|
| --- | --- | --- |
| 0.1 0.1 5 -5 | 0.2 5 -5 | **0.1 0.1** 5 -5 -> 0.2 5 -5 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 3 6 1
[/input]
[output]
12 1
[/output]
[/test]
[test open]
[input]
8 2 2 4 8 16
[/input]
[output]
16 8 16
[/output]
[/test]
[test open]
[input]
0.1 0.1 5 -5
[/input]
[output]
0.2 5 -5
[/output]
[/test]
[test]
[input]
5 4 2 1 1 4
[/input]
[output]
5 8 4
[/output]
[/test]
[test]
[input]
0.5 0.5
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
1 1 1
[/input]
[output]
2 1
[/output]
[/test]
[test]
[input]
1 1 2
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 1 1 1
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 2 3 4 5
[/input]
[output]
1 2 3 4 5
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Gauss' Trick

[code-task title="Gauss' Trick" taskId="java-fund-Lists-Gauss'-Trick" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere

Scrieți un program care să rezume toate numerele dintr-o listă în următoarea ordine:

- **primul** + **ultimul**, **primul + 1** + **ultimul - 1**, **primul + 2** + **ultimul - 2**, ...**primul + n**, **ultimul - n**

[image assetsSrc="lists-problem-gaus-trick(1).png" /]

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 2 3 4 5 | 6 6 3 |
|  |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| 1 2 3 4 | 5 5 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5
[/input]
[output]
6 6 3
[/output]
[/test]
[test open]
[input]
1 2 3 4
[/input]
[output]
5 5
[/output]
[/test]
[test]
[input]
1 1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
4 2
[/output]
[/test]
[test]
[input]
10 20 30 40
[/input]
[output]
50 50
[/output]
[/test]
[test]
[input]
10 20 30 40 50
[/input]
[output]
60 60 30
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Merging Lists

[code-task title="Merging Lists" taskId="java-fund-Lists-Merging-Lists" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Veți primi **două liste** cu **numere**.

Creați o listă de rezultate care **conține** numerele **din** ambele liste.

**Primul element** ar trebui să fie din **prima listă**, **al doilea** din **a doua listă** și așa mai departe.

Dacă **lungimea** celor două liste **nu este egală**, doar **adăugați** elementele rămase **la sfârșitul listei**.

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 3 5 2 43 12 3 54 10 23 | 3 76 5 5 2 34 43 2 12 4 3 12 54 10 23 |
| 76 5 34 2 4 12 |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| 76 5 34 2 4 12 | 76 3 5 5 34 2 2 43 4 12 12 3 54 10 23 |
| 3 5 2 43 12 3 54 10 23 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 5 2 43 12 3 54 10 23
76 5 34 2 4 12
[/input]
[output]
3 76 5 5 2 34 43 2 12 4 3 12 54 10 23
[/output]
[/test]
[test open]
[input]
76 5 34 2 4 12
3 5 2 43 12 3 54 10 23
[/input]
[output]
76 3 5 5 34 2 2 43 4 12 12 3 54 10 23
[/output]
[/test]
[test]
[input]
1 2 3
4 5 6
[/input]
[output]
1 4 2 5 3 6
[/output]
[/test]
[test]
[input]
1 2 3
4 5
[/input]
[output]
1 4 2 5 3
[/output]
[/test]
[test]
[input]
1 2
3 4 5
[/input]
[output]
1 3 2 4 5
[/output]
[/test]
[test]
[input]
1 1 1
2 2 2
[/input]
[output]
1 2 1 2 1 2
[/output]
[/test]
[test]
[input]
1 2 3 4 5
6
[/input]
[output]
1 6 2 3 4 5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

