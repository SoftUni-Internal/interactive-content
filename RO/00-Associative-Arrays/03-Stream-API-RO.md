[slide hideTitle]
# Stream API

Java Stream  API permite o **abordare funcțională a procesării colecțiilor de obiecte/elemente**. 

Ne permite să **reducem codul**, pentru a crea **programe care pot fi citite mai ușor**, și pentru a **îmbunătățiți productivitatea**.

 De asemenea, ne permite **codificarea mai ușoară a operațiunilor paralele**. 

Java Stream  este o componentă care este capabilă de **iterația internă a elementelor sale**, ceea ce înseamnă că poate să **itereze elementele sale în sine**. 

Un stream este o **secvență de obiecte** care suportă **diverse metode**.

Stream-ul  **nu modifică structura de date originală**, dar oferă rezultate.

Stream pipeline reprezintă un **lanț de stream sursă**, ** operațiuni intermediare**, și o **operațiune terminală**.

Un stream API are multe **operațiuni terminale** care agregă un flux într-un **tip** sau o **primitivă**:
count()`

 `max()` 

`min()`

`sum()`

Aceste operații lucrează conform cu implementările predefinite. 

Se numește **operațiune terminală**, fiindcă pentru a obține valoarea minimă, de exemplu, trebuie să **traverseze valorile din interiorul fluxului** și să obținem rezultate.

 După ce obținem valoarea minimă, **nu este posibil pentru a-o converti înapoi în flux** pentru că valoarea minimă este doar o valoare.

Cele mai multe dintre metode folosesc expresii lambda în stream.

[/slide]


[slide hideTitle]
# Procesarea matricelor cu API flux

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-19-20-21-processing-arrays-with-stream-api-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosirea de **operațiuni cu o singură linie** pentru matrice în loc de bucle cu indecși sau bucle`for-each` pentru operațiuni simple, atunci când procesăm date:

- `min()` - găsește și returnează elementul **cel mai mic** dintr-o colecție:
```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers)
            .min()
            .getAsInt();
System.out.println(min);
```

Este posibil să fixăm o valoare alternativă care să fie returnată în loc de valoarea minimă, folosind `orElse()`.

```java live
int [] numbers = new int[]{15, 25, 35};
int min = Arrays.stream(numbers)
            .min()
            .orElse(2);
System.out.println(min);
```

Valoarea fixată în operațiunea `orElse()` este returnată, dacă matricea este goală.

```java live
int [] numbers = new int[]{};
int min = Arrays.stream(numbers)
            .min()
            .orElse(2);
System.out.println(min);
```

- `max()` - găsește și returnează cel mai **mare** element dintr-o colecție.
```java live
int [] numbers = new int[]{15, 25, 35};
int max = Arrays.stream(numbers)
            .max()
            .getAsInt();
System.out.println(max);
```

- `sum()` - găsește și returnează **suma** tuturor elementelor dintr-o colecție
```java live
int [] numbers = new int[]{15, 25, 35};
int sum = Arrays.stream(numbers).sum();
System.out.println(sum);
```

- `average()` - găsește și returnează **media** tuturor elementelor
```java live
int [] numbers = new int[]{15, 25, 35};
double average = Arrays.stream(numbers)
            .average()
            .getAsDouble();
System.out.println(average);
```
[/slide]


[slide hideTitle]
# Procesarea Matricilor cu Stream API

Folosește operațiile de pe o singură linie, cum ar fi lists, maps, in loc să scrie bucle cu indexuri `for-each` pentru operațiile simple, atunci când procesează date:


- `min()` - găsește și returnează **cel mai mic** element dintr-o colectie:
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int min = numbers.stream()
            .mapToInt(n -> n.intValue())
            .min()
            .getAsInt();
System.out.println(min);
```
Este posibil să setăm o valoare alternativă de returnare în loc de o valoare minimă, folosind `orElse()`.
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int min = numbers.stream()
            .min((n1, n2) -> n1.compareTo(n2))
            .get();
System.out.println(min);
```

- `max()` - Găsește și returnează  **cel mai mare** element dintr-o colecție
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int max = numbers.stream()
            .mapToInt(n -> n.intValue())
            .max()
            .getAsInt();
System.out.println(max);
```

```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int max = numbers.stream()
            .max((n1, n2) -> n1.compareTo(n2))
            .get();
System.out.println(max);
```

- `sum()` - Găsește și returnează **suma** tuturor elementelor dintr-o colecție

```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
int sum = numbers.stream()
            .mapToInt(n -> n.intValue())
            .sum();
System.out.println(sum);
```

- `average()` - Găsește și returnează **the average** tuturor elementelor
```java live
List<Integer> numbers = new ArrayList<>() {{
    add(15); add(25); add(35);
}};
double average = numbers.stream()
            .mapToInt(n -> n.intValue())
            .average()
            .getAsDouble();
System.out.println(average);
```

[/slide]



[slide hideTitle]

# Manipularea colecțiilor

Colecțiile pot fi **modificate** prin folosirea metodei `map()` .

Vedeți următorul exemplu:

```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .toArray();
```

```java live
String[] words = {"abc", "def", "geh", "yyy"};
words = Arrays.stream(words)
            .map(w -> w + "yyy")
            .toArray(String[]::new);
for (String word : words) {
    System.out.println(word);
}
```

[/slide]

[slide hideTitle]

# Convertirea colecțiilor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-26-converting-collections-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Sunt **două** moduri de a converti colecțiile în Java:

- `toArray()` - converteșye colecția într-o **matrice**

```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .toArray();
```

- `toList()` - convertește colecția într-o **listă**

```java
List<Integer> numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .map(e -> Integer.parseInt(e))
            .collect(Collectors.toList());
```
[/slide]

[slide hideTitle]

# Filtrarea colecțiilor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-27-filtering-collections-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `filter()` - trece printr-o colecție și selectează elementele după o anumită condiție dată

```java
int[] numbers = Arrays.stream(scanner.nextLine()
            .split(" "))
            .mapToInt(e -> Integer.parseInt(e))
            .filter(n -> n > 0)
            .toArray();
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Word Filter

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-28-problem-and-solution-word-filter-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Word Filter" taskId="Java-Fundamentals-2-Associative-Arrays-lab-Word-Filter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Citiți o matrice de  **șiruri**, luați în considerare doar cuvintele a căror lungime este **pară**.

## Intrare/Limitări

Citiți o matrice de șiruri.

## Ieșire

Imprimați fiecare cuvânt pe o nouă linie.

Filtrați cuvintele a căror lungime este pară.


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| kiwi orange banana apple | kiwi |
|  | orange |
|  | banana |

| **Intrare** | **Ieșire** |
| --- | --- |
| pizza cake pasta chips | cake |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
kiwi orange banana apple
[/input]
[output]
kiwi
orange
banana
[/output]
[/test]
[test open]
[input]
pizza cake pasta chips
[/input]
[output]
cake
[/output]
[/test]
[test]
[input]
deal guide counter seat hobby
[/input]
[output]
deal
seat
[/output]
[/test]
[test]
[input]
deal guide counter seat hobby acute switch car widen criticism painter unfortunate pause boat
[/input]
[output]
deal
seat
switch
boat
[/output]
[/test]
[test]
[input]
photograph architect literature wardrobe hobby locate upset explosion extension favour gravel crutch misery resort leaf
[/input]
[output]
photograph
literature
wardrobe
locate
favour
gravel
crutch
misery
resort
leaf
[/output]
[/test]
[test]
[input]
adult visible strike dialect graduate issue bracket critical rest ignorant witness contract paint
[/input]
[output]
strike
graduate
critical
rest
ignorant
contract
[/output]
[/test]
[test]
[input]
adult visible strike dialect graduate issue bracket critical rest ignorant witness contract paint guerrilla jam diagram anticipation muggy rhetoric invite parade manage aid bank smooth native snub image injury real east storm sell
[/input]
[output]
strike
graduate
critical
rest
ignorant
contract
anticipation
rhetoric
invite
parade
manage
bank
smooth
native
snub
injury
real
east
sell
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Ordonarea / Sortarea Colecțiilor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-30-sorting-collections-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are **two** ways to sort collections:

- Sortarea în ordine **ascendentă** (**Naturală**)

```java live
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>() {{
            add(4);
            add(1);
            add(3);
            add(2);
        }};
        numbers = numbers.stream()
                .sorted((n1, n2) -> n1.compareTo(n2))
                .collect(Collectors.toList());
        for (Integer number : numbers) {
            System.out.println(number);
        }
    }
}
```

- Sortarea  în ordine **descendentă**:

```java live
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>() {{
            add(4);
            add(1);
            add(3);
            add(2);
        }};
        numbers = numbers.stream()
                .sorted((n1, n2) -> n2.compareTo(n1))
                .collect(Collectors.toList());
        for (Integer number : numbers) {
            System.out.println(number);
        }
    }
}
```

[/slide]

[slide hideTitle]

# Sorting Collections by Multiple Criteria

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-31-sorting-collections-by-multiple-criteria-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


De asemenea, este posibil să sortați colecții după multe criterii.

Vedeți următorul exemplu:

```java live
Map<String, Integer> products = new HashMap<>();
products.put("bananas", 6);
products.put("peaches", 4);
products.put("apples", 4);
products.put("strawberries", 15);
products.put("watermelon", 1);
products.put("pineapple", 1);
products.entrySet()
        .stream()
        .sorted((e1, e2) -> {
            int result = e2.getValue().compareTo(e1.getValue());
            if (result == 0) {
                result = e1.getKey().compareTo(e2.getKey());
            }
            return result;
        })
        .forEach(e -> System.out.println(e.getKey() + " " + e.getValue()));
```

[/slide]

[slide hideTitle]

# Using Functional ForEach

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-32-33-using-functional-for-each-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda  `forEach()` pentru a itera prin fiecare perechie dintr-un Map.

Aruncați o privire asupra exemplului de mai jos:

```java live
Map<String, List<Integer>> courseGrades = new HashMap<>();
courseGrades.put("Mathematics", new ArrayList<>() {{
    add(5);
    add(6);
    add(6);
}});

courseGrades.put("English", new ArrayList<>() {{
    add(4);
    add(6);
}});

courseGrades.put("History", new ArrayList<>() {{
    add(4);
    add(4);
    add(5);
    add(6);
    add(5);
}});

courseGrades.put("Biology", new ArrayList<>() {{
    add(6);
    add(5);
    add(4);
    add(6);
}});

courseGrades.entrySet()
        .stream()
        .sorted((a, b) -> {
            if (a.getKey().compareTo(b.getKey()) == 0) {
                int sumFirst = a.getValue().stream().mapToInt(x -> x).sum();
                int sumSecond = b.getValue().stream().mapToInt(x -> x).sum();
                return sumFirst - sumSecond;
            }
            return b.getKey().compareTo(a.getKey());
        })
        .forEach(pair -> {
            System.out.println("Course: " + pair.getKey());
            System.out.print("Grades: ");
            pair.getValue().sort((a, b) -> a.compareTo(b));
            for (int num : pair.getValue()) {
                System.out.printf("%d ", num);
            }
            System.out.println();
        });
```

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Largest 3 Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-34-problem-largest-three-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Largest 3 Numbers" taskId="Java-Fundamentals-2-Associative-Arrays-lab-large-3-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Description
Citiți **o listă de numere întregi** și  **imprimați cele mari 3 dintre acestea**.

Dacă sunt **puținr** decât 3, le imprimați pe **toate**.

Ordonați lista folosind **Stream API**.

## Intrare/Limitări
Citiți o listă de numere îtregi.

## Ieșire 

Imprimați cele mai mari 3 numere cu o buclă  **for**.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 10 30 15 20 50 5 | 50 30 20 |
| 20 30 | 30 20 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 30 15 20 50 5
[/input]
[output]
50 30 20
[/output]
[/test]
[test open]
[input]
20 30
[/input]
[output]
30 20
[/output]
[/test]
[test]
[input]
3 3 9 5 2 3 3
[/input]
[output]
9 5 3
[/output]
[/test]
[test]
[input]
33 88 35 98 43 10 81
[/input]
[output]
98 88 81
[/output]
[/test]
[test]
[input]
91 4 7 49 83 51 73 34 45 24
[/input]
[output]
91 83 73
[/output]
[/test]
[test]
[input]
59 12
[/input]
[output]
59 12
[/output]
[/test]
[test]
[input]
53 3
[/input]
[output]
53 3
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

