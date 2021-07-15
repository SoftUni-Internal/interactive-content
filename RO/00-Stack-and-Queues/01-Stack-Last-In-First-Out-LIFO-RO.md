# Stive: Ultimul Intrat, Primul Ieșit (LIFO)

[slide hideTitle]
# Funcționalitatea Stivei

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-10-11-Stack-Functionality-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Stivele** sunt structuri de date asemănătoare **listelor**.

Elementele din stivă sunt organizate pe baza principiului LIFO - **Last In First Out**.

Când adăugați un element, acesta este plasat întotdeauna **în partea de sus** a stivei.

Eliminarea unui element se face de asemenea tot din **partea de sus** a stivei.

Stivele oferă următoarele funcționalități:
- **pushing**: introducerea unui element în partea de sus a stivei
- **popping**: extragerea unui element din partea de sus a stivei
- **peeking at**: obținerea primului element din partea de sus a stivei fără a-l elimina

[image assetsSrc="Java-Advanced-Stack-and-Queues-3.png" /]

[/slide]

[slide hideTitle]
# Implementarea Stivelor și Metode Încorporate

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-12-ArrayDeque-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Implementarea stivelor cu ajutorul clasei `ArrayDeque<E>`:
```java
ArrayDeque<Integer> stack = new ArrayDeque<>();
```

- `push(element)` - adăugarea unui element în partea de sus a stivei:
```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

stack.forEach(System.out::println);
```

- `pop()` - eliminarea primului element din partea de sus a stivei:
```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

// remove 
stack.pop();

stack.forEach(System.out::println);
```

- `peek()` - returnează valoarea primului element din partea de sus a stivei:
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

# Metode Utilitare

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-13-Stack-Utility-Methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `size()` -  returnează numărul de elemente din stivă:

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println("The size is: " + stackOfCars.size());
```

- `isEmpty()` - verifică dacă stiva este goală sau nu:

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println("Is the Stack empty? " + stackOfCars.isEmpty());
```

- `contains(element)` - verifică dacă stiva conține elementul dat; returnează **true** sau **false**:

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println(stackOfCars.contains("BMW M3"));
```

[/slide]

[slide hideTitle]
# Prezentarea Generală a Tuturor Operațiilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-14-Stack-Overview-of-all-operators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Browser History

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
Scrieți un program care primește două tipuri de instrucțiuni pentru **browser**:

- Navigare normală: un **URL**, reprezentat de un **șir**

- Comanda "**back**", care setează adresa URL curentă la ultima adresă URL accesată

După fiecare instrucțiune, programul trebuie să **imprime adresa URL curentă**.

Dacă instrucțiunea **back** nu poate fi executată, tipăriți: `no previous URLs`.

Programul **se încheie** după introducerea comenzii `Home`.


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

[hints]
[hint]
Folosiţi `ArrayDeque<>`:

```java
ArrayDeque<String> browser = new ArrayDeque<>();
```
[/hint] 
[hint]
Folosiţi o variabilă de tip `String` pentru a stoca URL-ul curent:

```java
String currentURL = "";
```
[/hint] 
[hint]
Folosiţi metoda `push()` pentru a trece pe pagina următoare:

```java
browser.push(currentURL);
```
[/hint] 
[hint]
Folosiţi metoda `pop()` pentru întoarcerea la URL-ul precedent:

```java
currentURL = browser.pop();
```
[/hint] 
[/hints] 


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
# Problemă cu Soluție: Simple Calculator 

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
**Creați un calculator simplu** care poate **evalua expresii simple**. Acesta trebuie să funcționeze pe baza a două operații - adunare și scădere.

Nu vor exista operații plasate între paranteze, iar aplicarea priorităților pentru operații nu este necesară.

Rezolvați problema **folosind o stivă**.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 + 5 + 10 - 2 - 1 | 14 |
| 2 - 2 + 5 | 5 |


[hints]
[hint]
Folosiți `ArrayDeque<>`:

```java
ArrayDeque<String> stack = new ArrayDeque<>();
```
[/hint] 
[hint]
Luați în considerare utilizarea metodei `add()`:

```java
Collections.addAll(stack, tokens);
```
[/hint] 
[hint]
Puteți să **adăugați** elementele și apoi să le **eliminați**:

```java
System.out.println(stack.pop());
```
[/hint] 
[/hints] 


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
# Problemă cu Soluție: Decimal to Binary Converter

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
Creați un program simplu care **convertește un număr în sistem zecimal în reprezentarea sa binară**.

Implementați o soluție elegantă, **folosind o stivă**.

**Imprimați reprezentarea binară** pe consolă.


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 10 | 1010 |
| 1024 | 10000000000 |


[hints]
[hint]
Dacă numărul dat este 0, imprimați 0:

```java
if (decimal == 0) {
  // ...
}
```
[/hint] 
[hint]
Altfel, cât timp numărul este mai mare decât zero, împărțiți-l la 2 și adăugați restul pe stivă:

```java
while (decimal != 0) {
  stack.push(decimal % 2);
  decimal /= 2;
}
```
[/hint] 
[hint]
Când ați terminat de împărțit, scoateți toate resturile de pe stivă:

```java
while (!stack.isEmpty())) {
  System.out.println(stack.pop());
}
```

Aceasta este reprezentarea binară.
[/hint] 
[/hints] 


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
# Problemă cu Soluție: Matching Brackets

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

Parcurgeți șirul și **extrageți** fiecare **sub-expresie**.

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

[hints]
[hint]
Folosiți o **stivă** implementată cu `ArrayDeque()`:

```java
ArrayDeque<Integer> stack = new ArrayDeque<>();
```
[/hint] 
[hint]
**Parcurgeți** expresia, căutând **paranteze**.
Dacă găsiți o paranteză de deschidere, adăugați **indicele** în stivă:

```java
if (character == '(') {
  stack.push(i);
}
```
[/hint] 
[hint]
Dacă găsiți o paranteză de închidere, **scoateți** primul element din partea de sus a stivei:

```java
else if (character == ')') {
  int startIndex = stack.pop();

  // ...
}
```

Acesta este indicele parantezei de **deschidere**.
[/hint] 
[hint]
Utilizați indicele curent și indicele scos pentru a extrage **sub-expresia**:

```java
String subexpression = expression.substring(startIndex, endIndex);
``` 
[/hint] 
[/hints] 


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
