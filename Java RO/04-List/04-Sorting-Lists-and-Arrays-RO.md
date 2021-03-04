# Sortarea Listelor și a Matricelor

[slide]
# Sortarea Listelor

[vimeo-video startTimeInSeconds="8035" endTimeInSeconds="10485"]
[stream language="EN" videoId="421781852" default /]
[stream language="RO" videoId="431758884"  /]
[/video-vimeo]

- Sortarea listelor de șiruri în ordine crescătoare folosind `Collections.sort()`
```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names); // sort in ascending (alphabetical) order

System.out.println(String.join(", ", names));
```
- Sortarea Listelor de Șiruri în ordine descrescătoare folosind `Collections.sort()` si `Collections.reverse()`

```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.sort(names);     // sort in ascending order

Collections.reverse(names);  // reverse the List 

System.out.println(String.join(", ", names));
```
[/slide]

[slide]
# Sortarea Matricelor
- Sortarea `int []` în ordine crescătoare folosind `Arrays.sort()`

```java live
int[] numbers = new int[]{4, 3, 6, 5, 1, 2};

Arrays.sort(numbers); // sort in ascending order

for (int number : numbers) {
    System.out.print(number + " ");
}
```
- Sortarea `Integer []` în ordine descrescătoare folosind `Arrays.sort ()` și `Collections.reverse()`
```java live
Integer[] numbers = new Integer[]{4, 3, 6, 5, 1, 2};

Arrays.sort(numbers);

Collections.reverse(Arrays.asList(numbers)); 

for (int number : numbers) {
    System.out.print(number + " ");
}
```
Să explicăm ce înseamnă codul de mai sus:

- Inițializarea `Integer []` cu 6 articole, acordați atenție faptului că articolele **sunt întregi**, nu ints (tipuri primitive)

- Folosim `Arrays.sort()` pentru a sorta matricea în ordine **crescătoare**

- Nu există nicio metodă directă pentru a inversa matricea, deci convertim matricea în listă folosind metoda `Arrays.asList()` - atenție la faptul că această metodă **nu funcționează** cu **tipuri de date primitive precum int , dublu, char, boolean etc.**
[/slide]


[slide hideTitle]
# Problem: List of products
[code-task title="List of products" taskId="java-fund-Lists-List-of-products" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Citiți un număr **n** și **n linii de produse**.

Imprimați o **listă numerotată** a tuturor produselor **comandate după nume**.

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 4 | 1.Apples |
| Potatoes | 2.Onions |
| Tomatoes | 3.Potatoes |
| Onions | 4.Tomatoes |
| Apples |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Potatoes
Tomatoes
Onions
Apples
[/input]
[output]
1.Apples
2.Onions
3.Potatoes
4.Tomatoes
[/output]
[/test]
[test]
[input]
3
a
b
c
[/input]
[output]
1.a
2.b
3.c
[/output]
[/test]
[test]
[input]
3
c
b
a
[/input]
[output]
1.a
2.b
3.c
[/output]
[/test]
[test]
[input]
1
a
[/input]
[output]
1.a
[/output]
[/test]
[test]
[input]
2
A
a
[/input]
[output]
1.A
2.a
[/output]
[/test]
[test]
[input]
5
a
c
b
e
d
[/input]
[output]
1.a
2.b
3.c
4.d
5.e
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Solution: List of products
[code-task title="List of products"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your solution here
}
```
[/code-editor]
[task-description]
## Descriere
Citiți un număr **n** și **n linii de produse**.

Imprimați o **listă numerotată** a tuturor produselor **comandate după nume**.

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 4 | 1.Apples |
| Potatoes | 2.Onions |
| Tomatoes | 3.Potatoes |
| Onions | 4.Tomatoes |
| Apples |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Potatoes
Tomatoes
Onions
Apples
[/input]
[output]
1.Apples
2.Onions
3.Potatoes
4.Tomatoes
[/output]
[/test]
[test]
[input]
3
a
b
c
[/input]
[output]
1.a
2.b
3.c
[/output]
[/test]
[test]
[input]
3
c
b
a
[/input]
[output]
1.a
2.b
3.c
[/output]
[/test]
[test]
[input]
1
a
[/input]
[output]
1.a
[/output]
[/test]
[test]
[input]
2
A
a
[/input]
[output]
1.A
2.a
[/output]
[/test]
[test]
[input]
5
a
c
b
e
d
[/input]
[output]
1.a
2.b
3.c
4.d
5.e
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Remove Negatives and Reverse
[code-task title="Remove Negatives and Reverse" taskId="java-fund-Lists-Remove-Negatives-and-Reverse" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Citiți o**listă de numere întregi**, **eliminați toate numerele negative** din ea și tipăriți elementele rămase în **ordine inversă**.

În cazul în care nu există elemente rămase în listă, tipăriți "**empty**".

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 10 -5 7 9 -33 50 | 50 9 7 10 |
|  |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| 7 -2 -10 1 | 1 7 |
|  |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| -1 -2 -3 | empty |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 -5 7 9 -33 50
[/input]
[output]
50 9 7 10
[/output]
[/test]
[test open]
[input]
7 -2 -10 1
[/input]
[output]
1 7
[/output]
[/test]
[test open]
[input]
1 2 3
[/input]
[output]
3 2 1
[/output]
[/test]
[test open]
[input]
-1 -2 -3 -4
[/input]
[output]
empty
[/output]
[/test]
[test]
[input]
10 -5 7 9 -33 54
[/input]
[output]
54 9 7 10
[/output]
[/test]
[test]
[input]
8 -2 -10 1
[/input]
[output]
1 8
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
3 2 1
[/output]
[/test]
[test]
[input]
-1 -2 -3
[/input]
[output]
empty
[/output]
[/test]
[test]
[input]
-1 37 5 5 3 3 49 -2 4 4 83 -7 3 4 8 -33
[/input]
[output]
8 4 3 83 4 4 49 3 3 5 5 37
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Solution: Remove Negatives and Reverse
[code-task title="Remove Negatives and Reverse"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
       // Write your solution here
}
```
[/code-editor]
[task-description]
## Descriere
Citiți o**listă de numere întregi**, **eliminați toate numerele negative** din ea și tipăriți elementele rămase în **ordine inversă**.

În cazul în care nu există elemente rămase în listă, tipăriți "**empty**".

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 10 -5 7 9 -33 50 | 50 9 7 10 |
|  |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| 7 -2 -10 1 | 1 7 |
|  |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| -1 -2 -3 | empty |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 -5 7 9 -33 50
[/input]
[output]
50 9 7 10
[/output]
[/test]
[test open]
[input]
7 -2 -10 1
[/input]
[output]
1 7
[/output]
[/test]
[test open]
[input]
1 2 3
[/input]
[output]
3 2 1
[/output]
[/test]
[test open]
[input]
-1 -2 -3 -4
[/input]
[output]
empty
[/output]
[/test]
[test]
[input]
10 -5 7 9 -33 54
[/input]
[output]
54 9 7 10
[/output]
[/test]
[test]
[input]
8 -2 -10 1
[/input]
[output]
1 8
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
3 2 1
[/output]
[/test]
[test]
[input]
-1 -2 -3
[/input]
[output]
empty
[/output]
[/test]
[test]
[input]
-1 37 5 5 3 3 49 -2 4 4 83 -7 3 4 8 -33
[/input]
[output]
8 4 3 83 4 4 49 3 3 5 5 37
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
