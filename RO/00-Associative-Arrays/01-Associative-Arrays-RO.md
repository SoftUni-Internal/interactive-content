

[slide hideTitle]
# Matrice Asociative
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-3-4-associative-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Matricele asociative sunt colecții care conțin parametri sub forma unor perechi Cheie (Key)/Valoare (Value) și sunt indexate prin intermediul **cheilor**. 

**Cheia** reprezintă **indexul** instanței map. **Cheile** și **valorile** sunt **obiecte**, iar fiecare pereche este numită **înregistrare**.

Un obiect este folosit drept **cheie** (index) pentru un alt obiect (**valoare**). 

Acestea **nu pot** fi **tipuri primitive** precum **int**, **double**, **boolean**, etc. 

Acestea **trebuie specificate** împreună cu **clasa învelitoare** echivalentă: **Integer**, **Double**, **Boolean**, etc. 

**Tipul cheii și tipul valorii** pot fi **la fel sau diferite**, în funcție de caz.

În Java, matricele asociative se numesc **Maps**. 

O instanță Map **nu poate conține chei dublicate**. Fiecare **cheie** poate fi asociată doar cu o singură **valoare**.

**Valorile unor chei diferite pot fi dublicate**. 

**O cheie** poate stoca doar **o valoare** în aceeași instanță Map. 


De exemplu:

| ***Name*** | ***Phone number*** |
| ------- | --------- |
| **Cheie** | **Valoare** |
| John Smith | +1-555-8976 |
| Lisa Smith | +1-555-1234 |
| Amanda Doe| +1-555-5050 |
| Sam Doe | +1-555-5050 |


[/slide]

[slide hideTitle]
# Colecții de Perechi Cheie-Valoare

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-5-collections-of-key-and-value-pairs-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Colecțiile API din Java conțin câteva **implementări** Map care îi permit conținutului unei instanțe Map să fie văzut ca:

- Un set de chei

- O colecție de valori

- Un set de perechi cheie-valoare

Cele mai folosite **implementări Map** sunt **HashMap**, **LinkedHashMap** și **TreeMap**. 

**Ordinea** intrărilor dintr-o instanță Map depinde de **implementarea aleasă a colecției**.

Unele implementări, cum ar fi clasa **TreeMap**, **garantează o ordine specifică**. 

Altele, cum ar fi clasa **HashMap**, **nu oferă acest lucru**. 

Clasele **HashMap** și **LinkedHashMap** admit o valoare `null` pentru **cheie** și mai multe valori `null` pentru **valori**.

Clasa **TreeMap** nu admite nicio valoare `null`.

## HashMap < Key, Value >

Elementele care sunt stocate în interiorul clasei `HashMap` **nu sunt ordonate**. 

De obicei, folosim această clasă atunci când nu vom executa operații bazate pe indexurile datelor stocate.

## LinkedHashMap < Key, Value >

Clasa **LinkedHashMap** extinde clasa **HashMap**, dar **menține o ordine specifică**. 

Cheile sunt stocate **în ordinea în care au fost adăugate**.

## TreeMap < Key, Value >

Clasa **TreeMap** sortează toate înregistrările conform ordinii lor naturale.

Pentru numere întregi, acest lucru înseamnă sortare în ordine crescătoare, iar pentru șiruri, sortare în ordine alfabetică.

[/slide]

[slide hideTitle]
# Declararea și Inițializarea Map

Pentru a folosi `Map` în Java, **importați** pachetul `java.util.Map`.

Creați o **instanță** a uneia dintre clasele care implementează **interfața Map**.

```java
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Key, Value> map = new HashMap<>();
    }
}
```

Pentru a inițializa o instanță Map:

- Specificați **tipul generic** al cheii și al valorii între paranteze unghiulare `<>`, separate printr-o virgulă și un spațiu (", ")

- Setați **numele** instanței Map, care trebuie să fie suficient de **descriptiv** pentru a ne ajuta să înțelegem ce anume **reprezintă cheia și valoarea**

- După semnul egal (`=`), folosiți cuvântul cheie `new` și **tipul dorit** al instanței Map

```java
Map <Key, Value> airplanes = new HashMap<>();
```

```java
Map <Key, Value> shoppingList = new LinkedHashMap<>();
```

```java
Map <Key, Value> phoneBook = new TreeMap<>();
```

Este important să știți că odată setate, tipurile aferente **cheii** și **valorii** nu mai pot fi modificate.

[/slide]




[slide hideTitle]
# Metode Încorporate

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-6-7-8-9-built-in-methods-demo-hashmap-put-and-remove-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasa `HashMap` conține câteva metode încorporate: 

- `put(K key, V value)` - Se folosește pentru **adăugarea elementelor** (inserarea înregistrărilor) în Map 

Daca metoda `put()` este apelată cu aceeași cheie de mai multe ori, **ultima valoare înlocuiește valoarea existentă** pentru cheia dată.

```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);

airplanes.put("Boeing 737", 180);
System.out.println(airplanes.get("Boeing 737"));
```

- `putIfAbsent(K key, V value)` - Se folosește pentru **adăugarea elementelor** (inserarea înregistrărilor), în cazul în care **cheia** specificată **nu se află în colecție**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.putIfAbsent("Boeing 737", 100);
System.out.println(airplanes.get("Boeing 737"));
```

- `get(K key)` - Se folosește pentru **a accesa o valoare** din Map, utilizănd cheia acesteia

**Returnează** **valoarea** obiectului specificat.

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
int peopleCount = airplanes.get("Boeing 737");
System.out.println(peopleCount);
```

- `remove(K key)` - Se folosește pentru **a șterge** un element (înregistrare), **utilizând cheia acestuia**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.remove("Boeing 737");
System.out.println(airplanes.get("Boeing 737"));
```

- `clear()` - Se folosește pentru eliminarea **tuturor elementelor (înregistrărilor)** din Map

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
airplanes.clear();
System.out.println(airplanes.get("Boeing 737"));
System.out.println(airplanes.get("Airbus A320"));
```

- `size()` - Se folosește pentru **a returna numărul de elemente (înregistrări)** din Map

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.size());
```

- `containsKey(K key)` - Verifică dacă instanța Map **conține obiectul cheie specificat**; returnează o valoare booleană

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
if (airplanes.containsKey("Airbus A320")) {
    System.out.println("Airbus A320 key exists.");
}
```

- `containsValue(V value)` - Verifică dacă instanța Map **conține obiectul valoare specificat**; returnează o valoare booleană

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.containsValue(150));
System.out.println(airplanes.containsValue(100));
```

- `isEmpty()` - Returnează `true` dacă instanța Map este **goală** și `false` dacă conține **măcar o pereche**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
System.out.println(airplanes.isEmpty());
```

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
System.out.println(airplanes.isEmpty());
```

[/slide]

[slide hideTitle]

# TreeMap<K, V> - Exemplu

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-10-treemap-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]


[slide hideTitle]
# Iterarea Prin Map

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-11-iterating-through-map-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Atunci când iterăm prin obiecte de tipul `Map.Entry <K, V>`, modificarea colecției este **imposibilă** (este read-only).

Există câteva moduri prin care putem itera prin datele stocate într-o instanță Map.

- Iterarea prin elementele unei instanțe Map folosind o buclă **for-each**:

  - `keySet()` - obține numai cheile

```java live
Map<String, Double> fruitsPrice = new LinkedHashMap<>();
fruitsPrice.put("banana", 2.20);
fruitsPrice.put("kiwi", 4.50);
for (String fruit : fruitsPrice.keySet()) {
    System.out.println(fruit);
}
```

  - `values()` - obține numai valorile

```java live
Map<String, Double> fruitsPrice = new LinkedHashMap<>();
fruitsPrice.put("banana", 2.20);
fruitsPrice.put("kiwi", 4.50);
for (Double price : fruitsPrice.values()) {
    System.out.println(price);
}
```

- Iterarea prin elementele unei instanțe Map folosind metoda încorporată `entrySet()`
  - `entry.getKey()` - obține chei
  - `entry.getValue()` - obține valori

```java live
Map<String, Double> fruitsPrice = new LinkedHashMap<>();
fruitsPrice.put("banana", 2.20);
fruitsPrice.put("kiwi", 4.50);
for (Map.Entry<String, Double> entry : fruitsPrice.entrySet()) {
    System.out.printf("%s -> %.2f%n", entry.getKey(), entry.getValue());
}
```

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Count Real Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/java-fundamentals-associative-arrays-12-problem-and-solut-count-real-numbers-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Count Real Numbers" taskId="Java-Fundamentals-2-Associative-arrays-lab-Count-real-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere 
Citiți o **listă de numere reale** și imprimați-le în ordine **crescătoare**, împreună cu **numărul lor de apariții**.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 8 2 2 8 2 | 2 -> 3 |
|  | 8 -> 2 |

| **Intrare** | **Ieșire** |
| --- | --- |
| 1 5 1 3 | 1 -> 2 |
|  | 3 -> 1 |
|  | 5 -> 1 |

| **Intrare** | **Ieșire** |
| --- | --- |
| -2 0 0 2 | -2 -> 1 |
|  | 0 -> 2 |
|  | 2 -> 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
8 2 2 8 2
[/input]
[output]
2 -\> 3
8 -\> 2
[/output]
[/test]
[test open]
[input]
1 5 1 3
[/input]
[output]
1 -\> 2
3 -\> 1
5 -\> 1
[/output]
[/test]
[test open]
[input]
-2 0 0 2
[/input]
[output]
-2 -\> 1
0 -\> 2
2 -\> 1
[/output]
[/test]
[test]
[input]
6 5 6 8 7 3 2 9 7 8
[/input]
[output]
2 -\> 1
3 -\> 1
5 -\> 1
6 -\> 2
7 -\> 2
8 -\> 2
9 -\> 1
[/output]
[/test]
[test]
[input]
8 5 1 7 8
[/input]
[output]
1 -\> 1
5 -\> 1
7 -\> 1
8 -\> 2
[/output]
[/test]
[test]
[input]
8 6 9 1 1 6 8
[/input]
[output]
1 -\> 2
6 -\> 2
8 -\> 2
9 -\> 1
[/output]
[/test]
[test]
[input]
3 3 8 3 6 5 8
[/input]
[output]
3 -\> 3
5 -\> 1
6 -\> 1
8 -\> 2
[/output]
[/test]
[test]
[input]
1 9 2 1 8 2 9
[/input]
[output]
1 -\> 2
2 -\> 2
8 -\> 1
9 -\> 2
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Word Synonyms

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/java-fundamentals-associative-arrays-14-problem-and-solution-word-synonyms-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Word Synonyms" taskId="Java-Fundamentals-2-Associative-Arrays-lab-Words-Synonyms" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Descriere 
Creați un program care stochează cuvinte și sinonimele acestora într-o instanță Map.

**Cheia** instanței Map va fi reprezentată de un singur **cuvânt**.

**Valoarea** va fi o **listă a tuturor sinonimelor acelui cuvânt**.

## Intrare / Constrângeri

Veți primi un număr întreg **n**.

Pe următoarele **2 * n** linii veți primi un **cuvânt** și **un sinonim**, fiecare pe o linie separată:

- \{**word**\}

- \{**synonym**\}

Dacă primiți același cuvânt de două ori, adăugați sinonimul acestuia în lista deja existentă pentru acel cuvânt.

## Ieșire 

Imprimați cuvintele în următorul format:

"\{**word**\} - \{**synonym1, synonym2… synonymN**\}"

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 | cute - adorable, charming |
| cute | smart - clever |
| adorable |  |
| cute |  |
| charming |  |
| smart |  |
| clever |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | task – problem, assignment |
| task |  |
| problem |  |
| task |  |
| assignment |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
cute
adorable
cute
charming
smart
clever
[/input]
[output]
cute - adorable, charming
smart - clever
[/output]
[/test]
[test open]
[input]
2
task
problem
task
assignment
[/input]
[output]
task - problem, assignment
[/output]
[/test]
[test]
[input]
4
fashion
trend
fashion
model
fashion
look
cute
adorable
[/input]
[output]
fashion - trend, model, look
cute - adorable
[/output]
[/test]
[test]
[input]
7
fashion
trend
fashion
model
fashion
look
elegant
grand
elegant
fancy
elegant
classic
cute
adorable
[/input]
[output]
fashion - trend, model, look
elegant - grand, fancy, classic
cute - adorable
[/output]
[/test]
[test]
[input]
9
addicted
obsessed
addicted
hooked
addicted
attached
fashion
model
fashion
look
elegant
grand
elegant
fancy
elegant
classic
cute
adorable
[/input]
[output]
addicted - obsessed, hooked, attached
fashion - model, look
elegant - grand, fancy, classic
cute - adorable
[/output]
[/test]
[test]
[input]
8
fat
big
feedback
assessment
fat
plump
develop
advance
develop
establish
feedback
comment
feedback
criticism
fat
bulky
[/input]
[output]
fat - big, plump, bulky
feedback - assessment, comment, criticism
develop - advance, establish
[/output]
[/test]
[test]
[input]
8
condition
action
condition
case
condition
position
greet
accost
hello
greetings
hell
inferno
customer
client
customer
purchaser
[/input]
[output]
condition - action, case, position
greet - accost
hello - greetings
hell - inferno
customer - client, purchaser
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Odd Occurrences

[code-task title="Odd Occurrences" taskId="Java-Fundamentals-2-Associative-Arrays-lab-Odd-Occurrences" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Veți primi un **șir** care conține cuvinte separate **print-un singur spațiu**. 

Creați un program care găsește toate cuvintele din șir care se repetă de **un număr impar de ori** (nu se ține cont de scrierea cu majuscule).

## Intrare/ Constrângeri

Cuvintele sunt date pe o **singură linie**, **separate printr-un spațiu**.

## Ieșire

Imprimați elementele care îndeplinesc condiția specificată. Acestea trebuie scrise cu **minuscule, în ordinea în care apar, și trebuie separate prin virgulă**.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| Java C# PHP PHP JAVA C java | java, c#, c |
| 3 5 5 hi pi HO Hi 5 ho 3 hi pi | 5, hi |
| a a A SQL xx a xx a A a XX c | a, sql, xx, c |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Java C\# PHP PHP JAVA C java
[/input]
[output]
java, c\#, c
[/output]
[/test]
[test open]
[input]
3 5 5 hi pi HO Hi 5 ho 3 hi pi
[/input]
[output]
5, hi
[/output]
[/test]
[test open]
[input]
a a A SQL xx a xx a A a XX c
[/input]
[output]
a, sql, xx, c
[/output]
[/test]
[test]
[input]
snail delivery tread transition extension transition extension delivery tread snail snail
[/input]
[output]
snail
[/output]
[/test]
[test]
[input]
censorship lawyer future embox lawyer embox censorship censorship
[/input]
[output]
censorship, future
[/output]
[/test]
[test]
[input]
confidence secular wage secular confidence confidence
[/input]
[output]
confidence, wage
[/output]
[/test]
[test]
[input]
scramble subway provoke crown multimedia reputation agreement crown multimedia scramble subway multimedia reputation crown
[/input]
[output]
provoke, crown, multimedia, agreement
[/output]
[/test]
[test]
[input]
mill boat bush absolute attachment confrontation campaign boat bush absolute attachment campaign campaign attachment mill mill
[/input]
[output]
mill, attachment, confrontation, campaign
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

