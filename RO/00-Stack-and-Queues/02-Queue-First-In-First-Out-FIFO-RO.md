# Coadă:primul Intrat Iese Primul (FIFO)

[slide hideTitle]

# Cozi

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-26-27-Queue-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Cozile** sunt structuri de date similare cu **stivele**. 

Își păstreză elementele în ordine. Elementele cozii sunt ordonate pe baza principiului **FIFO** - **primul intrat iese primul**. 

Când se adaugă un element este plasat mereu la **finalul** cozii. 

Prin eleminare se elemină un element de la **începutul** cozii.

Această structură de date este modelată după cozile din viața reală, unde persoana care ajunge prima este servită înaintea celorlalți.

[/slide]

[slide hideTitle]

# Coadă: Tip de Dată Abstract

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-28-Queue-Abstract-Data-Type-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


- Adăugând un element la finalul unei cozi

[image assetsSrc="Java-Advanced-Stack-and-Queues-4.png" /]

- Eliminarea primului element din coadă (primul element este cel de la începutul cozii)

[image assetsSrc="Java-Advanced-Stack-and-Queues-5.png" /]

- Obținerea primului element al cozii fără a-l elimina

[image assetsSrc="Java-Advanced-Stack-and-Queues-6.png" /]


[/slide]

[slide hideTitle]

# Implementarea Cozii cu ArrayDeque

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-29-30-34-ArrayDeque-Java-Implementation-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Implementarea cozii folosind `ArrayDeque<E>`

```java
ArrayDeque<Integer> queue = new ArrayDeque<>();
```

- `offer(element)` și `add(element)` - ambele metode adaugă elemente la sfârșitul cozii. Diferența dintre ele este că:

    - `add()` - generează o **excepție** dacă coada este plină

    - `offer()` - returnează **fals** dacă coada este plină


- `poll()` și `remove()` - ambele metode elimină primul element din coadă:

    - `remove()` - generează o **excepție** dacă coada este goală

    - `poll()` - **returnează null** dacă coada este goală, altfel returnează elementul eliminat


- `peek()` - primește valoarea primului element

[/slide]

[slide hideTitle]

# Operațiile Cozii

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-31-33-Add-Remove-Peak-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Add() / Offer()

Ambele funcții sunt folosite pentru adăugarea de elemente la începutul cozii
```java live 
ArrayDeque<Integer> queue = new ArrayDeque<>();

queue.offer(2);
queue.add(5);
queue.offer(10);
        
System.out.println(queue);
```

Sunt folosite în scenarii diferite:

- Dacă coada nu are limită de spațiu (coadă cu capacitate nelimitată) - atunci puteți folosi oricare funcție

- Dacă coada are restrcție de capacitate, este mai bine să folosiți `offer()` deoarece dacă funcția eșuează, va returna  **false**. Dacă folosiți `add()` cu o coadă cu restricție de capacitate și eșuează, asta va rezulta într-un **IllegalStateException** care trebuie procesat

[image assetsSrc="Java-Advanced-Stack-and-Queues-7.gif" /]


## Remove() / Poll()

Ambele funcții elimină primul element din coadă, ștergându-l.

Diferența dintre cele două este că atunci când sunt folosite pe o coadă goală `poll()` returnează **null**, în timp ce `remove()` generează un **NoSuchElementException**.


Aici este un exemplu cu `poll()`:

```java live
ArrayDeque<Integer> queue = new ArrayDeque<>();

queue.offer(2);
queue.add(5);
queue.offer(10);

// remove
System.out.println("The removed element is: " + queue.poll());
queue.forEach(element -> System.out.print(element + " "));
```
Nu contează dacă folosim **remove** sau **poll** aici. Ambele vor face același lucru, deoarece coada conține niște elemente.

Lucrurile sunt diferite când lucrăm cu o coadă goală:

```java live
ArrayDeque<Integer> queue = new ArrayDeque<>();
System.out.println("The removed element is: " + queue.poll());
```

Rezultatele de mai sus sunt **nule**, dar dacă folosiți `remove()` veți avea o eroare:
```java live
ArrayDeque<Integer> queue = new ArrayDeque<>();
System.out.println(queue.remove());
```

Rularea ultimei părți de cod ar trebui să rezulte un **NoSuchElementException**.


[image assetsSrc="Java-Advanced-Stack-and-Queues-8.gif" /]


## Peek()

Această funcție returnează primul element al cozii fără să-l elimine.

```java live
ArrayDeque<Integer> queue = new ArrayDeque<>();

queue.offer(2);
queue.add(5);
queue.offer(10);

System.out.println("The first element is: " + queue.peek());
queue.forEach(element -> System.out.print(element + " "));
```

[image assetsSrc="Java-Advanced-Stack-and-Queues-9.gif" /]

[/slide]


[slide hideTitle]
# Metode de Utilizare

- `size()` - returnează numărul de elemente dintr-o coadă

```java live
ArrayDeque<String> queueOfBooks = new ArrayDeque<>();
queueOfBooks.add("Of Mice and Men");
queueOfBooks.add("The Great Escape");
queueOfBooks.add("A Guide in Lucid Dreaming");

System.out.println("The size of this queue is: " + queueOfBooks.size());
```

- `toArray()` - transformă coada într-o mulțime

```java live
ArrayDeque<String> queueOfWords = new ArrayDeque<>();
queueOfWords.add("Rocket");
queueOfWords.add("Paper");
queueOfWords.add("Tank");

Object[] arr = queueOfWords.toArray();

for (int j = 0; j < arr.length; j++) {
    System.out.println(arr[j]); 
}
```

- `contains(element)` - verifică dacă coada conține elementul. Returnează **adevărat** dacă elementul este găsit și **fals** dacă nu este găsit.

```java live
ArrayDeque<String> queueOfWords = new ArrayDeque<>();
queueOfWords.push("Plush Bear");
queueOfWords.push("Ridiculous Rabbit");
queueOfWords.push("Boiler");

System.out.println(queueOfWords.contains("BMW 7"));
```

[/slide]

[slide hideTitle]
# Privire în ansamblu asupra tuturor operațiilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-35-Queue-Overview-of-all-operations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Problem with Solution: Hot Potato

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-36-problem-hot-potato-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Hot Potato" taskId="java-advanced-lab-stack-and-queue-Hot-Potato" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Cartoful fierbinte este un joc în care **copiii formează un cerc și încep să paseze un cartof fierbinte**.

Numărătoarea începe cu primul copil. 

**La fiecare n aruncare, copilul care ține cartoful părăsește jocul**.

Când un copil părăsește jocul, pasează cartoful înainte.

Procesul continuă să se repete **până când rămâne doar un singur copil**.

Creați un program care simulează jocul Cartoful Fierbinte.

**Tipăriți numele fiecărui copil care părăsește cercul**.

La final, **tipăriți numele ultimului copil**.

## Examples
| **Input** | **Output** |
| --- | --- |
| Maria Peter Johny | Removed Peter |
| 2 | Removed Maria |
|  | Last is Johny |


| **Input** | **Output** |
| --- | --- |
| George Peter Michael Steven Christian | Removed Christian |
| 10 | Removed Peter |
|  | Removed Michael |
|  | Removed George |
|  | Last is Steven |


| **Input** | **Output** |
| --- | --- |
| George Peter Michael Steven Christian | Removed George |
| 1 | Removed Peter |
|  | Removed Michael |
|  | Removed Steven |
|  | Last is Christian |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Maria Peter Johny
2
[/input]
[output]
Removed Peter
Removed Maria
Last is Johny
[/output]
[/test]
[test open]
[input]
George Peter Michael Steven Christian
10
[/input]
[output]
Removed Christian
Removed Peter
Removed Michael
Removed George
Last is Steven
[/output]
[/test]
[test open]
[input]
George Peter Michael Steven Christian
1
[/input]
[output]
Removed George
Removed Peter
Removed Michael
Removed Steven
Last is Christian
[/output]
[/test]
[test]
[input]
A B C D E
100
[/input]
[output]
Removed E
Removed D
Removed A
Removed C
Last is B
[/output]
[/test]
[test]
[input]
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
26
[/input]
[output]
Removed Z
Removed A
Removed C
Removed F
Removed J
Removed O
Removed U
Removed E
Removed P
Removed B
Removed R
Removed K
Removed G
Removed D
Removed I
Removed Q
Removed Y
Removed W
Removed H
Removed T
Removed X
Removed L
Removed N
Removed V
Removed S
Last is M
[/output]
[/test]
[test]
[input]
A
1
[/input]
[output]
Last is A
[/output]
[/test]
[test]
[input]
A B
1
[/input]
[output]
Removed A
Last is B
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
999
[/input]
[output]
Removed 3
Removed 1
Removed 5
Removed 4
Removed 6
Last is 2
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Math Potato

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-39-math-potato-problem-and-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Math Potato" taskId="java-advanced-lab-stack-and-queue-Math-Potato" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Refaceți problema anterioară astfel încât un **copil este eliminat doar la un ciclu compus (nu prim)** (ciclurile încep de la 1)

Dacă un **ciclu este prim**, doar **tipăriți numele copilului**.

Ca înainte, tipăriți numele ultimului copil rămas. 
 
## Examples
| **Input** | **Output** |
| --- | --- |
| Maria Peter Tom | Removed Peter |
| 2 | Prime Maria |
|  | Prime Tom |
|  | Removed Maria |
|  | Last is Tom |


| **Input** | **Output** |
| --- | --- |
| George Peter Michael Steven Christian | Removed Christian |
| 10 | Prime Peter |
|  | Prime Michael |
|  | Removed Steven |
|  | Prime George |
|  | Removed George |
|  | Prime Michael |
|  | Removed Peter |
|  | Last is Michael |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Maria Peter Tom
2
[/input]
[output]
Removed Peter
Prime Maria
Prime Tom
Removed Maria
Last is Tom
[/output]
[/test]
[test open]
[input]
George Peter Michael Steven Christian
10
[/input]
[output]
Removed Christian
Prime Peter
Prime Michael
Removed Steven
Prime George
Removed George
Prime Michael
Removed Peter
Last is Michael
[/output]
[/test]
[test]
[input]
A B C D E
100
[/input]
[output]
Removed E
Prime D
Prime C
Removed B
Prime C
Removed C
Prime A
Removed D
Last is A
[/output]
[/test]
[test]
[input]
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
26
[/input]
[output]
Removed Z
Prime A
Prime A
Removed A
Prime C
Removed D
Prime G
Removed I
Removed M
Removed R
Prime X
Removed F
Prime O
Removed V
Removed H
Removed T
Prime K
Removed X
Prime P
Removed J
Removed C
Removed B
Prime G
Removed K
Removed P
Removed E
Removed W
Removed G
Prime S
Removed N
Prime Q
Removed S
Removed U
Removed L
Removed Q
Removed O
Last is Y
[/output]
[/test]
[test]
[input]
A
1
[/input]
[output]
Last is A
[/output]
[/test]
[test]
[input]
A B
1
[/input]
[output]
Removed A
Last is B
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
999
[/input]
[output]
Removed 3
Prime 1
Prime 5
Removed 2
Prime 6
Removed 4
Prime 1
Removed 6
Removed 1
Last is 5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

