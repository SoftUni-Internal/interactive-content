# Prezentare Generală și Manipularea Listelor

[slide hideTitle]

# Definiție și Inițializare

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-3-5-lists-overview-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

La fel ca o matrice, o **listă** este o **secvență de elemente**.

[image assetsSrc="java-fund-p1-lists-01.png" /]

Principala diferență dintre ele este că **o matrice nu poate fi redimensionată**.

De exemplu, dacă doriți să adăugați sau să eliminați elemente dintr-o matrice, trebuie să creați una nouă, în timp ce elementele pot fi **adăugate** și **eliminate** din **listă** în orice moment.

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

- Listele pot stoca **obiecte** de orice tip (Integer, Double, String etc.)

- Elementele sunt numerotate de la **0** la **size-1**

- **Dimensiunea** **listei** este **extensibilă**

- **Listele** acceptă o varietate de **metode încorporate**


## Inițializarea unei Liste

- Inițializăm o **listă** goală folosind cuvântul cheie `new`, urmat de `ArrayList<>()`

```java
// Create an empty List of strings
List<String> names = new ArrayList<>(); 
```
- Putem folosi și metoda `asList()`
```java
// Create a List of strings with 3 elements
List<String> names = new ArrayList<>(Arrays.asList("Maria", "Peter", "George")); 
```
- Putem **converti** o **matrice** într-o **listă**

```java
Integer [] numbers = new Integer[] {10, 20, 30, 40, 50};

// Convert the Integer array into List
List<Integer> nums = Arrays.asList(numbers); 
```

Dacă încercați să convertiți în listă o matrice care conține un tip de date primitiv, cum ar fi `int[]`, acest proces va produce o **eroare de compilare**, deoarece **listele** acceptă numai **tipuri de date referință** (**obiecte**).

```java live
 int [] numbers = new int[] {10, 20, 30, 40, 50};

 List<Integer> nums = Arrays.asList(numbers);
```

[/slide]

[slide hideTitle]
# Metodele Listelor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-6-list-data-structure-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Listele oferă funcționalități care vă permit să **adăugați*, **eliminați** și să **găsiți** elemente. 


- `add(element)` - adaugă un element la sfârșitul listei
- `add(index, element)` - adaugă un element la indicele specificat
- `remove(element)` - elimină elementul găsit și returnează o valoare booleană
- `remove(index)` - elimină elementul corespunzător indicelui specificat
- `size()` - returnează numărul de elemente
- `contains(element)` - verifică dacă lista conține un anumit element și returnează o valoare booleană
- `set(index, item)` - înlocuiește elementul corespunzător unui indice dat

[/slide]

[slide hideTitle]
# Adăugarea și Eliminarea Elementelor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-7-9-add-remove-add-index-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Adăugarea Elementelor

Metoda `add()` este folosită pentru inserarea unor elemente noi într-o listă. 

Tipul de elemente care pot fi adăugate este stabilit în momentul creării listei.

Dacă ați specificat `List <String>` veți putea adăuga doar șiruri în lista voastră.

- **add(element)**

```java live
List<String> safetyEquipment = new ArrayList<>(); 

safetyEquipment.add("Hazmat suit");
safetyEquipment.add("Protective Gloves");

for (String equipment : safetyEquipment) {
    System.out.println(equipment);
}
```

Metoda **add** introduce elementele în listă în ordinea în care sunt adăugate.

Dacă doriți să inserați un element într-o poziție diferită, puteți face acest lucru folosind `add(index, element)`.

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

"Helmet" este tipărit mai întâi, deoarece elementul a fost inserat la indicele 0.

Încercarea de a adăuga un element la un indice care se află în afara limitelor listei va avea ca rezultat **IndexOutOfBoundsException**.

Când un element este adăugat, numărul de elemente crește cu 1.


## Eliminarea Elementelor

Metoda `remove()` șterge un element din listă.

- **remove(element)** - **elimină** **prima apariție** a **elementului specificat** (returnează **true** / **false**):

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

`System.out.println(names.remove("Maria"))` va returna **true** deoarece elementul este prezent în listă și poate fi eliminat.
`System.out.println(names.remove("John"))` va returna **false** deoarece elementul nu poate fi găsit.

- **remove(index)** - **elimină** **elementul** corespunzător **indicelui specificat**:

```java live
List<String> digimons = new ArrayList<>();

digimons.add("Agumon");
digimons.add("Ziramon");
digimons.add("Burbomon");

digimons.remove(1); // removes element at index 1

for (String digimon : digimons){
  System.out.println(digimon);
}
```
Încercarea de a elimina un element care corespunde unui indice care se află în afara limitelor listei va avea ca rezultat **IndexOutOfBoundsException**.

Când un element este șters, numărul de elemente scade cu 1.

[/slide]


[slide hideTitle]
# Alte Metode ale Listelor

## Modificarea Elementelor

- `set(index, item)` - **înlocuiește** elementul corespunzător **indicelui specificat**

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

## Accesarea Elementelor

- `get()` - **accesează** elementul de la **indicele specificat**

```java live
List<Integer> nums = Arrays.asList(10, 20, 30, 40, 50);
        
int numberAtIndex4 = nums.get(4);
        
System.out.println(numberAtIndex4);
```

## Găsirea Elementelor

- `contains(element)` - verifică dacă un **element se află în listă**

```java live
List<String> names = Arrays.asList("Maria", "Peter", "George");

if (names.contains("Maria")){ 
     System.out.println("Yes, the name is in the List.");
}
```

## Numărarea Elementelor

- `size()` - returnează **dimensiunea** listei (**numărul de elemente**) 
```java live
List<String> names = Arrays.asList("Maria", "Peter", "George");

int numberOfNames = names.size();

System.out.println(numberOfNames);
```
[/slide]
