# Matrice Asociative

[slide hideTitle]
# Matrice Asociative: Maps

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-16-17-Associative-Arrays-Maps-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ați învățat că matricele stochează elementele sub forma unei colecții ordonate, iar acestea pot fi accesate prin intermediul indicilor - **de tip int**.

În schimb, o matrice asociativă stochează elemente în perechi **cheie**-**valoare**, care pot fi accesate printr-un indice de alt tip (de ex. un șir).

Un obiect este folosit drept cheie (indice) către un alt obiect (valoare).

Tipurile de date ale cheii și valorii nu pot fi primitive precum `int`, `double`, `boolean` etc.

Acestea trebuie specificate cu clasa învelitoare echivalentă: `Integer`, `Double`, `Boolean` etc.

Tipul **cheii** și al **valorii** poate fi identic sau diferit, în funcție de caz.

În Java, matricele asociative se numesc **Maps**. 

Un Map **nu poate conține chei duplicate**.

Fiecare **cheie** poate asocia cel mult o valoare.

**Valorile pot fi duplicate**. 

Pentru o **cheie**, o singură **valoare** poate fi stocată în aceeași instanță Map.


**De exemplu:**

| **Products** | **Prices** |
| --- | --- |
| **Key** | **Value** |
| Tomatoes | 12.50 |
| Bananas | 6.50 |
| Apples| 6.50 |
| Cucumbers | 7.50 |


**Platforma Java conține trei implementări generale Map:**

- `HashMap<K, V>`

- `TreeMap<K, V>`

- `LinkedHashMap<K, V>`

**Principalele caracteristici ale Maps sunt:**
- Conțin un set de perechi \<key, value\>
- Conțin chei unice
- Fiecare cheie poate asocia cel mult o valoare
- Valorile pot fi duplicate

**Pe baza caracteristicilor Maps, iată câteva exemple:**
- Un map al codurilor de eroare și al descrierilor acestora
- Un map al codurilor poștale și al orașelor
- Un map al managerilor și al angajaților; fiecare manager (**cheie**) este asociat cu o listă de angajați (**valoare**)
- Un map al claselor și al studenților; fiecare clasă (**cheie**) este asociată cu o listă de studenți (**valoare**)


[/slide]


[slide hideTitle]
# HashMap

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-19-20-Hashmap-Put-HashMap-Remove-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`HashMap<Key, Value>` este implementat sub formă de **Hash Table** și nu există **nicio ordonare a perechilor cheie-valoare**.

**Hashmap** implementează toate operațiile **Map** și **admite valori nule** și **o cheie nulă**.

Luați în considerare utilizarea unui **HashMap** atunci când **ordinea nu contează și valorile nule sunt acceptate**.

- Inițializare:
```java
Map<String, Integer> hashMap = new HashMap<>();
```

- Adăugarea elementelor:

```java live
Map<String, String> hashMap = new HashMap<>();

hashMap.put("BMW", "M5");
hashMap.put("Mercedes", "AMG");
hashMap.put("Dacia", "Duster");

hashMap.forEach((k, v) -> System.out.println(k + " - " + v));
```

- Eliminarea elementelor:

```java live
Map<String, String> hashMap = new HashMap<>();

hashMap.put("Mercedes", "AMG");
hashMap.put("Dacia", "Duster");

hashMap.remove("Mercedes");

hashMap.forEach((k, v) -> System.out.println(k + " - " + v));
```
[/slide]

[slide hideTitle]
# TreeMap

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-24-TreeMap-Put-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`TreeMap<Key, Value>` este **sortat** în funcție de **ordinea naturală a cheilor sale**.

**TreeMaps** în Java **nu permit chei nule**.

Un **TreeMap** este util atunci când doriți **un Map ordonat în funcție de chei** (de ex. **ordine alfabetică** sau **ordine numerică**).

- Inițializare:

```java
Map<String, Integer> treeMap = new TreeMap<>();
```
- Adăugarea elementelor:

```java live
Map<String, Integer> treeMap = new TreeMap<>();

treeMap.put("BMW", 5);
treeMap.put("Mercedes", 3);
treeMap.put("Opel", 4);
treeMap.put("Dacia", 10);

treeMap.forEach((k, v) -> System.out.println(k + " - " + v));
```
[/slide]

[slide hideTitle]
# LinkedHashMap

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-27-HashMap-LinkedHashMap-TreeMap-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`LinkedHashMap<Key, Value>` moștenește clasa HashMap, dar **menține ordinea de inserare**. 

**Un LinkedHashMap păstrează cheile în ordinea adăugării lor.**

Un **LinkedHashMap** este util atunci când doriți **un Map în care perechile cheie-valoare sunt sortate în funcție de ordinea lor de inserare.**

- Inițializare:

```java
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();
```

- Adăugarea elementelor:
```java live
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();

linkedHashMap.put("BMW", 5);
linkedHashMap.put("Mercedes", 3);
linkedHashMap.put("Opel", 4);
linkedHashMap.put("Dacia", 10);

linkedHashMap.forEach((k, v) -> System.out.println(k + " - " + v));
```

[/slide]

[slide hideTitle]
# Metode Încorporate

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-18-Methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `put(K key, V value)` - **adaugă elementele date** în map

La un moment dat, în Map poate exista doar o singură pereche cheie-valoare pentru fiecare cheie.

Dacă metoda `put()` este apelată de mai multe ori cu aceeași cheie, **cea mai recentă valoare** transmisă metodei pentru cheia respectivă va **suprascrie** valoarea deja stocată în Map pentru cheia respectivă.

```java
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
```

- `putIfAbsent(K key, V value)` - inserează în Map perechea cheie-valoare specificată dacă aceasta **nu există deja**

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.putIfAbsent("Boeing 737", 100);
System.out.println(airplanes.get("Boeing 737"));
```

- `get(K key)` - **accesează o valoare** cu ajutorul cheii sale și returnează obiectul valorii

```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
int peopleCount = airplanes.get("Boeing 737");
System.out.println(peopleCount);
```

- `remove(K key)` - **șterge** un element (înregistrare) **folosind cheia acestuia**
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.remove("Boeing 737");
System.out.println(airplanes.get("Boeing 737"));
```

- `clear()` - elimină toate elementele (înregistrările) din Map
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
airplanes.clear();
System.out.println(airplanes.get("Boeing 737"));
System.out.println(airplanes.get("Airbus A320"));
```

- `size()` - returnează **numărul de elemente (înregistrări)** din Map
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Boeing 737", 130);
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.size());
```

- `containsKey(K key)` - verifică **dacă există o astfel de cheie** în Map, iar dacă aceasta există, returnează `true`; altfel, returnează `false`
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
if (airplanes.containsKey("Airbus A320")) {
    System.out.println("Airbus A320 key exists.");
}
```

- `containsValue(V value)` - verifică **dacă există o astfel de valoare** în Map, iar dacă aceast există, returnează `true`; altfel, returnează `false`
```java live
HashMap<String, Integer> airplanes = new HashMap<>();
airplanes.put("Airbus A320", 150);
System.out.println(airplanes.containsValue(150));
System.out.println(airplanes.containsValue(100));
```

- `isEmpty()` - returnează `true` dacă instanța Map este **goală** și `false` dacă conține **cel puțin o cheie**
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
# Iterarea Prin Maps

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-21-Looping-Through-Maps-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iterarea prin obiectele de tip `Map.Entry<K, V>` **nu poate modifica** colecția (este read-only).

Există mai multe moduri de a itera printr-un Map.

- Iterarea prin Map folosind o buclă **for-each**

- `keySet()` - returnează cheile sub forma unei **matrice**

```java live
Map<String, Integer> cars = new LinkedHashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 10);

for (String car : cars.keySet()) {
    System.out.println(car);
}
```

- `values()` - returnează valorile sub forma unei **matrice**

```java live
Map<String, Integer> cars = new LinkedHashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 10);

for (Integer number : cars.values()) {
    System.out.println(number);
}
```

- Iterarea prin elementele unui Map utilizând metoda încorporată `entrySet()`
  - `entry.getKey()` - returnează cheia din Entry
  - `entry.getValue()` - returnează valoarea din Entry

```java live
Map<String, Integer> cars = new LinkedHashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 10);

for (Map.Entry<String, Integer> entry : cars.entrySet()) {
    System.out.printf("%s -> %d%n", entry.getKey(), entry.getValue());
}
```
- Iterarea prin Map utilizând metoda încorporată `forEach()`

```java live
Map<String, Integer> cars = new TreeMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 10);

cars.forEach((key, value) -> System.out.println(key + " - " + value));
```

[/slide]

[slide hideTitle]

# Sortarea Maps

- Sortarea în ordine crescătoare în funcție de cheie

```java live no-template
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        Map<String, Integer> cars = new HashMap<>();

        cars.put("BMW", 5);
        cars.put("Mercedes", 3);
        cars.put("Opel", 2);
        cars.put("Dacia", 1);

        Map<String, Integer> sortedMap = cars
                .entrySet()
                .stream()

                // comparing the elements by its keys in ascending order
                // in case you want in descending order just swap 'a' and 'b'
                .sorted((a,b)->a.getKey().compareTo(b.getKey()))

                // saving the sorted items into new LinkedHashMap,
                // or you can print the elements directly using 'forEach()'
                .collect(Collectors
                        .toMap(Map.Entry::getKey, Map.Entry::getValue,
                                (oldValue, newValue) -> oldValue, LinkedHashMap::new));

        sortedMap.forEach((k, v) -> System.out.println(k + " - " + v));
    }
}
```


- Sortarea în ordine crescătoare în funcție de valoare

```java live
Map<String, Integer> cars = new HashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 3);
cars.put("Opel", 4);
cars.put("Dacia", 1);
        
cars.entrySet()
    .stream()
    // comparing the elements by its values in ascending order
    // in case you want in descending order just swap 'a' and 'b'
    .sorted((a,b)->a.getValue().compareTo(b.getValue()))

    // printing the elements directly using 'forEach()'
    .forEach(entry -> System.out.println(entry.getKey() + " - " + entry.getValue()));

```

- Sortarea în ordine crescătoare în funcție de valoare; dacă valorile sunt egale, sortarea se face în funcție de cheie

```java live
Map<String, Integer> cars = new HashMap<>();

cars.put("BMW", 5);
cars.put("Mercedes", 1);
cars.put("Opel", 1);
cars.put("Dacia", 1);

cars.entrySet()
    .stream()
    .sorted((a,b)->{
        // compareTo() - returns 0 if the elements are equals
        int sort = a.getValue().compareTo(b.getValue());

        // if the values are equals compare by the keys
        if (sort == 0){
            // sorting by the keys
            return a.getKey().compareTo(b.getKey());
        }
        // in case there is no equal values
        return sort;
    })
    // printing the elements directly using 'forEach()'
    .forEach(entry -> System.out.println(entry.getKey() + " - " + entry.getValue()));

```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Count Real Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-22-23-Problem-and-solution-Count-Numbers-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Count Real Numbers" taskId="java-advanced-sets-and-maps-advanced-lab-Count-Real-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care **determină** numărul de apariții ale unor **numere reale**.

Intrarea constă într-o singură **linie care conține numere reale separate prin spații**.

Imprimați numerele **în ordinea apariției**.

Toate numerele trebuie să fie formatate **cu o cifră după punctul zecimal**.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| \-2.5 4 3 \-2.5 \-5.5 4 3 3 \-2.5 3 | \-2.5 \-\> 3 |
|  | 4.0 \-\> 2 |
|  | 3.0 \-\> 4 |
|  | \-5.5 \-\> 1 |
|  |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 2.3 4.5 4.5 5.5 5.5 2.3 3.0 3.0 4.5 4.5 3.0 3.0 4.0 3.0 5.5 3.0 2.3 5.5 4.5 3.0 | 2.3 \-\> 3 |
|  | 4.5 \-\> 5 |
|  | 5.5 \-\> 4 |
|  | 3.0 \-\> 7 |
|  | 4.0 \-\> 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
-2.5 4 3 -2.5 -5.5 4 3 3 -2.5 3
[/input]
[output]
-2.5 -\> 3
4.0 -\> 2
3.0 -\> 4
-5.5 -\> 1
[/output]
[/test]
[test open]
[input]
2.3 4.5 4.5 5.5 5.5 2.3 3.0 3.0 4.5 4.5 3.0 3.0 4.0 3.0 5.5 3.0 2.3 5.5 4.5 3.0
[/input]
[output]
2.3 -\> 3
4.5 -\> 5
5.5 -\> 4
3.0 -\> 7
4.0 -\> 1
[/output]
[/test]
[test]
[input]
13 23 42 69 13 23 42 69 13 23 42 69 13 23 42 69 13 23 42 69
[/input]
[output]
13.0 -\> 5
23.0 -\> 5
42.0 -\> 5
69.0 -\> 5
[/output]
[/test]
[test]
[input]
1.111
[/input]
[output]
1.1 -\> 1
[/output]
[/test]
[test]
[input]
23 23 23 23 2 3 23 23 23 23 23 232 232 2323 23 23232
[/input]
[output]
23.0 -\> 10
2.0 -\> 1
3.0 -\> 1
232.0 -\> 2
2323.0 -\> 1
23232.0 -\> 1
[/output]
[/test]
[test]
[input]
-3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3 -3
[/input]
[output]
-3.0 -\> 14
[/output]
[/test]
[test]
[input]
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9
[/input]
[output]
0.0 -\> 10
1.0 -\> 10
2.0 -\> 10
3.0 -\> 10
4.0 -\> 10
5.0 -\> 10
6.0 -\> 10
7.0 -\> 10
8.0 -\> 10
9.0 -\> 10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Academy Graduation

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-25-26-Problem-and-solution-Academy-Graduation-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Academy Graduation" taskId="java-advanced-sets-and-maps-advanced-lab-Academy-Graduation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:
- Citește de pe consolă **un număr de studenți**
- Citește o **pereche de rânduri**:
       - prima linie conține **numele studentului**
       - a doua linie reprezintă **notele studentului** pentru cursurile la care a participat
- Imprimați pe consolă: `{name} graduated with {averageScore}`

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 | George graduated with 4.375 |
| George | Maria graduated with 5.125 |
| 3.75 5 | Peter graduated with 5.25 |
| Maria |  |
| 4.25 6 |  |
| Peter |  |
| 6 4.5 |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 5 | Alice graduated with 4.145 |
| George | George graduated with 4.351249999999999 |
| 4.36 5.50 3.30 5.63 2.57 5.75 2.81 4.89  | James graduated with 4.09375 |
| Alice | Jennifer graduated with 3.3375 |
| 3.10 5.35 3.30 3.35 5.64 4.99 2.75 4.68  | Mick graduated with 4.11875 |
| Mick |  |
| 3.45 3.23 3.03 5.42 5.46 4.15 2.26 5.95  |  |
| Jennifer |  |
| 2.08 3.48 3.36 2.73 2.96 4.54 3.70 3.85 |  |
| James |  |
| 4.75 4.92 3.78 4.79 4.82 4.75 2.81 2.13 |  |


[hints]
[hint]
Gândiți-vă la **tipul corect** de map:

```java
Map<String, Double[]> graduationList = new TreeMap<>();
```

**Valorile** pot fi sub formă de **matrice**.
[/hint] 
[hint]
O altă **variabilă** poate fi necesară pentru a calcula media:

```java
double average; // ...

DecimalFormat decimalFormat = new DecimalFormat("0.###");
```
[/hint] 
[/hints] 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
George
3.75 5
Maria
4.25 6
Peter
6 4.5
[/input]
[output]
George graduated with 4.375
Maria graduated with 5.125
Peter graduated with 5.25
[/output]
[/test]
[test open]
[input]
5
George
4.36 5.50 3.30 5.63 2.57 5.75 2.81 4.89 
Alice
3.10 5.35 3.30 3.35 5.64 4.99 2.75 4.68 
Mick
3.45 3.23 3.03 5.42 5.46 4.15 2.26 5.95 
Jennifer
2.08 3.48 3.36 2.73 2.96 4.54 3.70 3.85
James
4.75 4.92 3.78 4.79 4.82 4.75 2.81 2.13
[/input]
[output]
Alice graduated with 4.145
George graduated with 4.351249999999999
James graduated with 4.09375
Jennifer graduated with 3.3375
Mick graduated with 4.11875
[/output]
[/test]
[test]
[input]
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
5
Gruio
4.36 5.50 3.30 5.63
Trendafilka
3.10 5.35 3.30 3.35 
Mite
3.45 3.23 3.03 5.42 
Roza
2.08 3.48 3.36 2.73
Ganio
4.75 4.92 3.78 4.79
[/input]
[output]
Ganio graduated with 4.56
Gruio graduated with 4.6975
Mite graduated with 3.7824999999999998
Roza graduated with 2.9125
Trendafilka graduated with 3.775
[/output]
[/test]
[test]
[input]
5
Gruio
4.36
Trendafilka
3.10
Mite
3.45
Roza
2.08
Ganio
4.75
[/input]
[output]
Ganio graduated with 4.75
Gruio graduated with 4.36
Mite graduated with 3.45
Roza graduated with 2.08
Trendafilka graduated with 3.1
[/output]
[/test]
[test]
[input]
5
Gruio
4.36 5.50 
Trendafilka
3.10 5.35
Mite
3.45 3.23 
Roza
2.08 3.48
Ganio
4.75 4.92
[/input]
[output]
Ganio graduated with 4.835
Gruio graduated with 4.93
Mite graduated with 3.34
Roza graduated with 2.7800000000000002
Trendafilka graduated with 4.225
[/output]
[/test]
[test]
[input]
5
Gruio
4.36 5.50 3.30 5.63 2.57 5.75 
Trendafilka
3.10 5.35 3.30 3.35 5.64 4.99 
Mite
3.45 3.23 3.03 5.42 5.46 4.15 
Roza
2.08 3.48 3.36 2.73 2.96 4.54 
Ganio
4.75 4.92 3.78 4.79 4.82 4.75
[/input]
[output]
Ganio graduated with 4.635
Gruio graduated with 4.5183333333333335
Mite graduated with 4.123333333333334
Roza graduated with 3.1916666666666664
Trendafilka graduated with 4.288333333333333
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
