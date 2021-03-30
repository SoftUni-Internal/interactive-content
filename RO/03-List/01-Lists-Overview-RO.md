# Prezentarea Generală și Manipularea Pistelor

[slide hideTitle]

# Definiție și Inițializare

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-3-5-lists-overview-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

La fel ca o matrice  **lista** este o **secvență de elemente**.

[image assetsSrc="java-fund-p1-lists-01.png" /]

Principala diferență dintre ele este că **o matrice nu poate fi redimensionată**.

De exemplu, dacă doriți să adăugați sau să eliminați elemente dintr-o matrice, trebuie să creați unul nou, în timp ce elementele pot fi **adăugate** și **eliminate** din **listă** oricând doriți.

```java live
//Create an empty list of strings
List<String> names = new ArrayList<>(); 

names.add("Hello"); 
names.add("Meteor"); 
names.add("Lion");
        
names.remove("Hello");

for (String name : names) {
    System.out.println(name);
}

```

Principalele **caracteristici** ale **listelor** sunt:

- Listele pot stoca **obiecte** de orice tip (întreg, dublu, șir etc.)

- Elementele sunt numerotate de la **0** la **size-1**

- **dimensiunea** **listei** este **extensibilă**

- **Listele** acceptă o mulțime de **metode utile**


## Inițializarea unei liste

- Inițializați o **Listă** goală folosind cuvântul cheie `new` și `ArrayList<>()`

```java
//Creați o listă goală de șiruri
List<String> names = new ArrayList<>(); 
```
- Inițializare prin folosirea metodei `asList()`
```java
// Create a List of strings with 3 elements
List<String> names = new ArrayList<>(Arrays.asList("Maria", "Peter", "George")); 
```
- Inițializare prin **convertirea** unei **matrice** într-o **listă**

```java
Integer [] numbers = new Integer[] {10, 20, 30, 40, 50};

// Convertirea unei matrice de întregi într-o listă
List<Integer> nums = Arrays.asList(numbers); 
```

- Dacă încercați să convertiți o matrice care deține un tip de date primitiv, cum ar fi `int []` în Listă, aceasta va produce o **eroare de compilare**, deoarece **listele** acceptă numai **Tipuri de date de referință** (**obiecte**) 

```java live
 int [] numbers = new int[] {10, 20, 30, 40, 50};

 List<Integer> nums = Arrays.asList(numbers);
```

[/slide]

[slide hideTitle]
# Metoele Listelor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-6-list-data-structure-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Listele oferă funcționalități care vă permit să **adăugați*, **eliminați** și să **găsiți** elemente. 


- `add(element)` - adaugă un element la sfârșitul listei
- `add(index, element)` - adaugă un element la indexul specificat
- `remove(element)` - elimină elementul găsit și returnează o valoare booleană
- `remove(index)` - elimină un element de la indexul specificat
- `size()` - returnează numărul de elemente
- `contains(element)` - verifică dacă lista conține un anumit element și  returnează o valoare booleană
- `set(index, item)` - înlocuiește elementul de la un index dat

[/slide]

[slide hideTitle]
# Adăugarea și Eliminarea de Elemente

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-7-9-add-remove-add-index-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Adăugarea de Elemente

Metoda `add()` este folosită pentru inserarea de elemente noi într-o listă. 

Tipul de elemente cate pot adăugate este stabilit Tipul de elemente care pot fi adăugate este determinat în momentul creării listei.

Dacă ați dat `List <String>` nu veți putea adăuga altceva decât un șir în lista dvs.

- **add(element)**

```java live
List<String> safetyEquipment = new ArrayList<>(); 

safetyEquipment.add("Hazmat suit");
safetyEquipment.add("Protective Gloves");

for (String equipment : safetyEquipment) {
    System.out.println(equipment);
}
```

Articolele sunt atașate la listă în ordinea în care le adăugați.

Dacă doriți să inserați un element într-o poziție diferită, puteți face acest lucru folosind `add (index, element)`.

- **add(index, element)**

```java live
List<String> safetyEquipment = new ArrayList<>(); 

safetyEquipment.add("Hazmat suit");
safetyEquipment.add("Protective Gloves");

safetyEquipment.add(0, "Helmet");

for (String equipment : safetyEquipment) {
    System.out.println(equipment);
}
```

Acum "Casca" este tipărită mai întâi, deoarece a fost inserată la indexul 0.

Încercarea de a adăuga un element dintr-un index care se află în afara limitelor matricei va avea ca rezultat o **IndexOutOfBoundsException**.

Când se adaugă un element, numărul de elemente crește cu unul.


## Eliminarea de Elemente

Metoda `remove()` șterge un element din listă.

**remove(element)** - **elimină** **prima apariție** a **elementului specificat** (returnează **adevărat** / **fals**):

```java live
List<String> names = new ArrayList<>();

names.add("Peter");
names.add("Maria");
names.add("George");

System.out.println(names.remove("Maria")); 

System.out.println(names.remove("John")); 

for (String name : names){
    System.out.println(name);
}
```

`System.out.println(names.remove("Maria"))` returns **true** because we had the element was found and removed.
`System.out.println(names.remove("John"))` returns **false** because the element was not found.

**remove(index)** - **elimină**  **elementul** de la **indexul specificat**:

```java live
List<String> digimons = new ArrayList<>();

names.add("Agumon");
names.add("Ziramon");
names.add("Burbomon");

names.remove(1); // removes element at index 1

for (String name : names){
  System.out.println(name);
}
```
Încercarea de a elimina un element dintr-un index care se află în afara limitelor matricei va avea ca rezultat o **IndexOutOfBoundsException**.

Când un element este șters, numărul de elemente scade cu unul.

[/slide]


[slide hideTitle]
# Mai Multe Metode Pentru Liste

## Modificarea Elementelor

- `set(index, item)` - **replaces** element at a **specified index**

```java live
 Integer [] numbers = new Integer[] {10, 20, 30, 40, 50};

// convert the numbers array to a list
List<Integer> nums = Arrays.asList(numbers); 

 // replace the element at index 4 (50) with -100
nums.set(4, -100);

for (Integer num : nums) {
    System.out.print(num + " ");
}
```

## Accesarea Lementelor

- `get()` - **accesează** un element de la  **indexul specificat**

```java live
List<Integer> nums = Arrays.asList(10, 20, 30, 40, 50);
        
int numberAtIndex4 = nums.get(4);
        
System.out.println(numberAtIndex4);
```

## Găsirea Elementelor

- `contains(element)` - checks if an **element is in the list**

```java live
List<String> names = Arrays.asList("Maria", "Peter", "George");

if (names.contains("Maria")){ 
     System.out.println("Yes, the name is in the List.");
}
```

## Numărarea Elementelor

- `size()` - returnează **dimensiunea** (**numărul de elemente**) listei
```java live
List<String> names = Arrays.asList("Maria", "Peter", "George");

int numberOfNames = names.size();

System.out.println(numberOfNames);
```
[/slide]
