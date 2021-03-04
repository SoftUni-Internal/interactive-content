# Prezentare Generală a Listelor

[slide]
# Ce sunt Listele?

[vimeo-video startTimeInSeconds="9" endTimeInSeconds="2583"]
[stream language="EN" videoId="421781852" default /]
[stream language="RO" videoId="431758884"  /]
[/video-vimeo]

La fel ca o matrice o **Listă** este o **secvență de elemente**.

[image assetsSrc="list-example(1).png" /]

Principala diferență dintre ele este că o matrice nu poate fi redimensionată.

De exemplu, dacă doriți să adăugați sau să eliminați elemente din/dintr-o matrice, trebuie să creați unul nou, în timp ce elementele pot fi **adăugate** și **eliminate** din **Listă** oricând doriți.

```java live
List<String> names = new ArrayList<>(); //Create an empty List of strings

names.add("Peter"); // Add Peter to the List
names.add("Maria"); // Add Maria to the List
names.add("George");// Add George to the List
        
names.remove("Maria"); // Remove Maria from the List

for (String name : names) {
    System.out.println(name);  // Print the List using For-Each Loop
}

```

Principalele **caracteristici** ale **listelor** sunt:

- Listele pot stoca **obiecte** de orice tip (întreg, dublu, șir etc.)

- Elementele sunt numerotate de la **0** la **mărimea-1**

- **dimensiunea** din **lista** este **extensibilă**

- **Listele** acceptă o mulțime de **metode utile**

[/slide]

[slide]

# Inițializarea unei liste

- Inițializați o **Listă** goală folosind cuvântul cheie `new` și `ArrayList<>()`

```java
//Create an empty List of strings
List<String> names = new ArrayList<>(); 
```
- Initialization using `asList()` - method 
```java
// Create a List of strings with 3 elements
List<String> names = new ArrayList<>(Arrays.asList("Maria", "Peter", "George")); 
```
- Initialization by **converting** an **array** to **List**

```java
Integer [] numbers = new Integer[] {10, 20, 30, 40, 50};

// Convert the Integer array into List
List<Integer> nums = Arrays.asList(numbers); 
```

- Dacă încercați să convertiți o matrice care deține un tip de date primitiv, cum ar fi `int []` în Listă, aceasta va produce o **eroare de compilare**,

    deoarece **Listele** acceptă numai **Tipuri de date de referință** (**obiecte**) 

```java live
 int [] numbers = new int[] {10, 20, 30, 40, 50};

 List<Integer> nums = Arrays.asList(numbers);
```

[/slide]