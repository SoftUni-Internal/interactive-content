# Stivă - Ultima în Prima Ieșire - LIFO

[slide hideTitle]
# Funcționalitatea Stivei

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-10-11-Stack-Functionality-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O stivă este o structură de date în care adăugați elemente în**partea de sus**a stivei și eliminați din nou elementele din**partea de sus**.
Aceasta este denumită și principiul ”Ultimul în primul loc” -**LIFO**.

- Stivele oferă următoarele funcționalități:
     - Împingerea unui element în partea de sus a stivei
     - Element care apare din partea de sus a stivei
     - Obținerea (**Arunca o Privire**) a elementului cel mai de sus fără eliminarea acestuia

[image assetsSrc="Java-Advanced-Stack-and-Queues-3.png" /]

[/slide]

[slide hideTitle]
# Implementarea Stivei și Metodele Încorporate

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-12-ArrayDeque-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Stack Implementation using `ArrayDeque<E>`
```java
ArrayDeque<Integer> stack = new ArrayDeque<>();
```

- `push(element)` - adding elements at the top of the stack
```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

stack.forEach(System.out::println);
```

- `pop()` - removing the topmost element
```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

// remove 
stack.pop();

stack.forEach(System.out::println);
```

- `peek()` - getting the value of the topmost element
```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

// get 
Integer element = stack.peek();

System.out.println(element);
```
[/slide]

[slide hideTitle]

# Metode de Utilitate

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-13-Stack-Utility-Methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `size()` -  returnează numărul de elemente în deque

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println("The size is: " + stackOfCars.size());
```

- `isEmpty()` - verifică dacă deque-ul este gol sau nu

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println("Is the Stack empty? " + stackOfCars.isEmpty());
```

- `contains(element)` - verifică dacă un deque conține elementul sau nu.

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println(stackOfCars.contains("BMW M3"));
```

[/slide]

[slide hideTitle]
# Overview of All Operations

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-14-Stack-Overview-of-all-operators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Problemă cu soluție: Browser History

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-15-solution-Browser-History-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Browser History" taskId="java-advanced-lab-stack-and-queue-Browser-History" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care necesită 2 tipuri de instrucțiuni pentru browser:

- Normal navigation: a **URL**, provided in **string format**

- Șirul "**back**" care setează adresa URL curentă la ultima adresă URL setată

După fiecare instrucțiune, programul trebuie să **tipărească adresa URL curentă**.

Dacă instrucțiunea **back** nu poate fi executată, tipăriți `no previous URLs`.

Introducerea **se termină** cu comanda `Home`, apoi pur și simplu trebuie să **opriți programul**.


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| `https//softuni.org/` | `https//softuni.org/` |
| `back` | `no previous URLs` |
| `https//softuni.org/trainings/courses` | `https//softuni.org/trainings/courses`|
| `back` | `https//softuni.org/` |
| `https//softuni.org/trainings/2056` | `https//softuni.org/trainings/2056` |
| `back` | `https//softuni.org/` |
| `https//softuni.org/trainings/live` | `https//softuni.org/trainings/live` |
| `https//softuni.org/trainings/live/details` | `https//softuni.org/trainings/live/details` |
| `Home` |  |

## Sugestii
- Folosiţi `ArrayDeque<>`
- Folosiţi `String` pentru a păstra pagina curentă
- Folosiţi `push()`, la trecerea la pagina următoare
- Folosiţi `pop()`, când merg înapoi



[/task-description]
[code-io /]
[tests]
[test open]
[input]
https//softuni.org/
back
https//softuni.org/trainings/courses
back
https//softuni.org/trainings/2056
back
https//softuni.org/trainings/live
https//softuni.org/trainings/live/details
Home
[/input]
[output]
https//softuni.org/
no previous URLs
https//softuni.org/trainings/courses
https//softuni.org/
https//softuni.org/trainings/2056
https//softuni.org/
https//softuni.org/trainings/live
https//softuni.org/trainings/live/details
[/output]
[/test]
[test]
[input]
a
b
c
d
e
back
back
back
back
back
back
back
back
Home
[/input]
[output]
a
b
c
d
e
d
c
b
a
no previous URLs
no previous URLs
no previous URLs
no previous URLs
[/output]
[/test]
[test]
[input]
back
back
A
b
c
d
Home
[/input]
[output]
no previous URLs
no previous URLs
A
b
c
d
[/output]
[/test]
[test]
[input]
A
A
A
A
A
A
A
back
back
back
back
Home
[/input]
[output]
A
A
A
A
A
A
A
A
A
A
A
[/output]
[/test]
[test]
[input]
back
back
A
Go
To
Somewhere
Then
Get
back
back
back
And
Finally
Go
Home
[/input]
[output]
no previous URLs
no previous URLs
A
Go
To
Somewhere
Then
Get
Then
Somewhere
To
And
Finally
Go
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu soluție: Simple Calculator 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-18-Solution-Simple-Calculator-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Simple Calculator" taskId="java-advanced-lab-stack-and-queue-Simple-Calculator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Creați un calculator simplu** care poate **evalua expresii simple** care nu vor reține niciun operator diferit de adunare și scădere.

Nu vor exista paranteze sau prioritate operator.

Rezolvați problema **using a Stack**.

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 2 + 5 + 10 - 2 - 1 | 14 |
| 2 - 2 + 5 | 5 |


## Sugestii
- Folosiți un `ArrayDeque<>`
- Luați în considerare utilizarea metodei `add()` 
- Mai Puteți
     - adăugați elementele și apoi scoateți-le afară
     - sau împingeți-le și inversați stiva


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 + 5 + 10 - 2 - 1
[/input]
[output]
14
[/output]
[/test]
[test open]
[input]
2 - 2 + 5
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
[/input]
[output]
45
[/output]
[/test]
[test]
[input]
3 - 2 + 7 + 123 - 22 - 12 - 55 + 120
[/input]
[output]
162
[/output]
[/test]
[test]
[input]
99 - 99
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
0 + 0 + 0 + 0 - 0 - 0 + 0 - 0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2123412 - 123123 + 12312 - 12312
[/input]
[output]
2000289
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu soluție: Decimal to Binary Converter

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-21-SOLUTION-Decimal-To-Binary-Converter-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Decimal to Binary Converter" taskId="java-advanced-lab-stack-and-queue-Decimal-to-Binary-Converter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creează un program simplu care **poate converti un număr zecimal în reprezentarea sa binară**

Implementați o soluție elegantă **folosind un Stack**.

**Printați reprezentarea binară** pe consolă.


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 10 | 1010 |
| 1024 | 10000000000 |



## Indicii
- Dacă numărul dat este 0, printați 0
- Altfel, cât timp numărul este mai mare decât zero, împărțiți-l la 2 și adăugați restul pe stivă


```java
while (decimal != 0) {
    stack.push(decimal % 2);
    decimal /= 2;
}
```

- Când ați terminat de împărțit, scoateți toate resturile de pe stivă. Aceasta este reprezentarea binară


[/task-description]
[code-io /]
[tests]
[test open]
[input]
10
[/input]
[output]
1010
[/output]
[/test]
[test open]
[input]
1024
[/input]
[output]
10000000000
[/output]
[/test]
[test]
[input]
500
[/input]
[output]
111110100
[/output]
[/test]
[test]
[input]
42
[/input]
[output]
101010
[/output]
[/test]
[test]
[input]
2546123
[/input]
[output]
1001101101100111001011
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
0
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
# Problemă cu soluție: Matching Brackets

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-23-problem-matching-brackets-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Matching Brackets" taskId="java-advanced-lab-stack-and-queue-Matching-Brackets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Vi se oferă o expresie **aritmetică** cu **paranteze**.

Scanați prin șir și **extrageți** fiecare **sub-expresie**.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| `1 + (2 - (2 + 3) * 4 / (3 + 1)) * 5` | `(2 + 3)` |
|  | `(3 + 1)` |
|  | `(2 - (2 + 3) * 4 / (3 + 1))` |


| **Intrare** | **Ieșire** |
| --- | --- |
| `(2 + 3) - (2 + 3)` | `(2 + 3)` |
|  | `(2 + 3)` |

 ## Sugestii
 - Folosiți o stivă, și anume un `ArrayDeque()`
 - Scanați prin expresie căutând paranteze
    - Dacă găsiți un suport de deschidere, împingeți indexul în stivă
    - Dacă găsiți un suport de închidere, scoateți elementul cel mai de sus din stivă. Acesta este indicele parantezei de deschidere.
    - Utilizați indicele curent și popped pentru a extrage sub-expresia

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 + (2 - (2 + 3) \* 4 / (3 + 1)) \* 5
[/input]
[output]
(2 + 3)
(3 + 1)
(2 - (2 + 3) \* 4 / (3 + 1))
[/output]
[/test]
[test open]
[input]
(2 + 3) - (2 + 3)
[/input]
[output]
(2 + 3)
(2 + 3)
[/output]
[/test]
[test]
[input]
(1 + 2) \* (3 - 4) / (2 \* (1 / 10) - (20 - 10))
[/input]
[output]
(1 + 2)
(3 - 4)
(1 / 10)
(20 - 10)
(2 \* (1 / 10) - (20 - 10))
[/output]
[/test]
[test]
[input]
(3 - 1)
[/input]
[output]
(3 - 1)
[/output]
[/test]
[test]
[input]
3 + 1
[/input]
[output]

[/output]
[/test]
[test]
[input]
(((1 + 2) - (2 + 3)) - ((4 - 1) \* (2 + 3)))
[/input]
[output]
(1 + 2)
(2 + 3)
((1 + 2) - (2 + 3))
(4 - 1)
(2 + 3)
((4 - 1) \* (2 + 3))
(((1 + 2) - (2 + 3)) - ((4 - 1) \* (2 + 3)))
[/output]
[/test]
[test]
[input]
(90 - 20) + 1
[/input]
[output]
(90 - 20)
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

