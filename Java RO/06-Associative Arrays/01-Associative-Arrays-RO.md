

[slide hideTitle]
# Array-uri Asociative

Array-urile asociative sunt colecții de perechi de parametri **Key** și **Value**  și sunt indexate dea**Keys**, și nu de numere 0, 1, 2,... ca array-urile. 

**The Key** reprezintă **the index** hărții. Keys și Values sunt **objects** și fiecare pereche este numită **an entry**.

Un obiect este folosit ca **Key** (index) pentru un alt obiect (**Value**). 

Ei **can not** fi **primitive types** așa cum sunt int, double, boolean, etc. 
Ei **must be specified** cu echivalentul **wrapper class**: Integer, Double, Boolean, etc. 

**The type of Key and Value** pot fi **same or different**, în funcție de caz.

In Java array-urile asociative se numesc **Map**. O Map **can not contain duplicate Keys**; fiecare Key poate mapa cel mult o valoare. 

Dar **the values can be duplicated**. 

**For one Key only one Value** poate fi stocată **in the same Map instance**. 

Aici pot fi stocate **different values for the same Key in different Map instances**. 

De exemplu:

| *Name* | *Phone number* |
| ------- | --------- |
| **Key** | **Value** |
| John Smith | +1-555-8976 |
| Lisa Smith | +1-555-1234 |
| Amanda Doe| +1-555-5050 |
| Sam Doe | +1-555-5050 |


[/slide]

[slide hideTitle]
# Implementarea Map

Colecțiile API din Java conțin câteva Map **implementations**, care permit conținutului unei Map să fie văzut ca:

- Un set de keys

- O colecție de values

- Set de perechi key-value mappings 

Cele mai folosite **Map implementations** este `HashMap`, `LinkedHashMap` și `TreeMap`. 

Acel **order** al Map depinde de **chosen collection view**. 

Unele implementări, cum ar fi clasa **TreeMap** , oferă specific **guarantees to their order**; altele, cum ar fi clasa **HashMap**,  **do not**. 

**HashMap** și **LinkedHashMap** permite `null` Keys și Values, dar **TreeMap** nu permite nicio key sau value `null`


## HashMap < Key, Value >

`HashMap` mapează o Key și o Value, dar **does not maintain any order** pentru elementele stocate intern pe Map. 

Aceasta este cea mai **fastest** din implementările Map, deci nu este nevoie să sortăm elementele in Map, fiind recomandat să folosim `HashMap`.


## LinkedHashMap < Key, Value >

`LinkedHashMap` mapează, de asemenea,  o Key și o Value. 

Aceasta moștenește clasa **HashMap**, dar **maintains insertion order**. Păstrăm Keys **in order of addition**.


## TreeMap < Key, Value >

`TreeMap` mapează, de asemenea,  o Key și o Value. 

Aceasta **maintains ascending order**. Păstrează keys **always stored** și folosește un arbore de căutare echilibrat.
[/slide]

[slide hideTitle]
# Map Declaration and Initialization

Pentru a folosi `Map` in Java **import** pachetul `java.util.Map`.

Creați o  **instance** a uneia dintre clasele care sunt implementate de **Map interface** în Java.

```java
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Key, Value> map = new HashMap<>();
    }
}
```

Pentru a inițializa o map:

- Specificați  **generic type** de Key și Value între paranteze `<>`. Odată ce Key și Value sunt stabilite, map va accepta doar tipurile lor generice

- Urmată de **name** a map, care va fi suficient de **descriptive** pentru a ne ajuta să înțelegem ce anume **Key and the Value represent**

- După semnul egal  `=` folosiți cuvântul cheie `new` și **intended type** al Map

```java
Map <Key, Value> airplanes = new HashMap<>();
```

```java
Map <Key, Value> shoppingList = new LinkedHashMap<>();
```

```java
Map <Key, Value> phoneBook = new TreeMap<>();
```
It is important to know that once the `Key` and the `Value` are set, the map can only accept their generic types.

[/slide]


[slide hideTitle]
# Built-in methods

There are several built-in methods for a `HashMap`: 

- `put(K key, V value)` - **add items** (introduceți un entry) in map

Numai o pereche **single Key + Value pair** pentru fiecare Key poate exista în Map **at the same time**. 

Dacă `put()` este apelată mai mult  de o dată cu aceeași key, **the latest Value** pasată la `put()` pentru această Key va fi **overwrite** ceea ce este deja stocat in Map pentru acea Key. 

**The latest Value replaces the existing Value** pentru cheia dată.

```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
```

- `putIfAbsent(K key, V value)` - introduceți valoarea specificată cu Key specifică în Map doar dacă acesta **not already existing**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.putIfAbsent("Boeing 737", 100);
System.out.println(airplanes.get("Boeing 737"));
```

- `get(K key)` - **access a Value** în Map folosind Key și **return the Value** obiect

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
int peopleCount = airplanes.get("Boeing 737");
System.out.println(peopleCount);
```

- `remove(K key)` - **delete** un item (entry) **using its Key**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.remove("Boeing 737");
System.out.println(airplanes.get("Boeing 737"));
```

- `clear()` - șterfeși toate items (entries) din map the map, resetați Map
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
airplanes.clear();
System.out.println(airplanes.get("Boeing 737"));
System.out.println(airplanes.get("Airbus A320"));
```

- `size()` - returnează **number of items (entries)** in Map

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.size());
```

- `containsKey(K key)` - verifică **if there is such Key object** in Map și dacă este, returnează `true`, altfel returnează `false`

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
if (airplanes.containsKey("Airbus A320")) {
    System.out.println("Airbus A320 key exists.");
}
```

- `containsValue(V value)` - verificați **if there is such Value object** in Map și dacă este, returnează `true`, dacă nu este, returnează `false`

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.containsValue(150));
System.out.println(airplanes.containsValue(100));
```

- `isEmpty()` - returnează `true` dacă  Map este **empty** și `false` dacă aceasta conține **at least one Key**

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

# TreeMap<K, V> - Example


[/slide]

[slide hideTitle]
# Iterarea prin Map

Iterarea prin obicete de tip  `Map.Entry <K, V>`. 

**Cannot modify** colecția (read-only).

Sunt câteva moduri în care putem itera Keys stocate într-o Map.

- Iterararea prin itemii unei map folosind o buclă **for-each** 

  - `keySet()` - obținem numai keys

```java live
Map<String, Double> fruitsPrice = new LinkedHashMap<>();
fruitsPrice.put("banana", 2.20);
fruitsPrice.put("kiwi", 4.50);
for (String fruit : fruitsPrice.keySet()) {
    System.out.println(fruit);
}
```

  - `values()` - obtain numai values

```java live
Map<String, Double> fruitsPrice = new LinkedHashMap<>();
fruitsPrice.put("banana", 2.20);
fruitsPrice.put("kiwi", 4.50);
for (Double price : fruitsPrice.values()) {
    System.out.println(price);
}
```

- Iterarea prin itemii unei map folosind metoda încorporată `entrySet()`
  - `entry.getKey()` - obținem Keys
  - `entry.getValue()` - obținem Values

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
# Problem with Solution: Count Real Numbers

[code-task title="Count Real Numbers" taskId="Java-Fundamentals-part-Two-Associative-arrays-Count-real-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Enunț
Citiți o **list of real numbers** și imprimați-le în ordine **ascending order** alături de **number of occurrences**.

## Exemple
| **Input** | **Output** |
| --- | --- |
| 82282 | 2 -> 3 |
|  | 8 -> 2 |

| **Input** | **Output** |
| --- | --- |
| 1513 | 1 -> 2 |
|  | 3 -> 1 |
|  | 5 -> 1 |

| **Input** | **Output** |
| --- | --- |
| -2002 | -2 -> 1 |
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
# Problem with Solution: Word Synonyms

[code-task title="Word Synonyms" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Words-Synonyms" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Scrieți un program care păstrează o map cu sinonime.

Cheia **key** din map va fi **word**.

Valoarea **value** va fi o **list of all the synonyms of that word**.

### Input / Constraints

Veți primi un număr **n**.

Pe următoarele **2 * n** linii veți primi un **word** și un **synonym**, fiecare pe o linie separată, astfel :

- \{**word**\}

- \{**synonym**\}

Dacă primiți același cuvânt de două ori, adăugați noi sinonime acestei liste.

### Output 

Imprimați cuvintele în următorul format:

"\{**word**\} - \{**synonym1, synonym2… synonymN**\}"

## Exemple
| **Input** | **Output** |
| --- | --- |
| 3 | cute - adorable, charming |
| cute | smart - clever |
| adorable |  |
| cute |  |
| charming |  |
| smart |  |
| clever |  |

| **Input** | **Output** |
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
# Problem with Solution: Odd Occurrences
[code-task title="Odd Occurrences" taskId="Odd-Occurences" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Scrieți un program care extrage dintr-o secvență dată de cuvinte, tpate elementele care sunt prezente în aceasta **odd number of times (case-insensitive)**.

### Input / Constraints

Cuvintele sunt date pe o **single line**, **space-separated**.

### Output

Imprimați rezultatele ca elemente in **lowercase in their order of appearance separated by comma**.

## Exemple
| **Input** | **Output** |
| --- | --- |
| Java C# PHP PHP JAVA C java | java, c#, c |

| **Input** | **Output** |
| --- | --- |
| 3 5 5 hi pi HO Hi 5 ho 3 hi pi | 5, hi |

| **Input** | **Output** |
| --- | --- |
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

