# Generice în Java

[slide hideTitle]

# Problema Înainte de Java 5.0

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/RO/interactive-java-advanced-generics-4-5-Generics-The-Problem-before-Java-5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Java Generics au fost introduse în Java 5.0 pentru a oferi verificarea tipului de compilare și eliminarea riscului de `ClassCastException` care era obișnuit în timpul lucrului cu clasele de colectare.

Face codul stabil prin detectarea erorilor de tip în timpul compilării.

Înainte de introducerea genericelor, am putea stoca orice tip de obiect într-o colecție, adică non-generic.

Genericele forțează programatorul Java să specifice tipul de obiect care va fi stocat în orice colecție.

Să vedem următorul exemplu:

```java live
List strings = new ArrayList();
strings.add("SoftUni");
strings.add(5);

System.out.println((String)strings.get(0));
// ClassCastException la rulare
System.out.println((String) strings.get(1));
```

Codul de mai sus se compilează bine, dar aruncă `ClassCastException` la **timpul de execuție**, deoarece încercăm să aruncăm obiectul în listă la String, în timp ce unul dintre elemente este de tip Integer.

Niciun contract nu poate garanta că **tipul de returnare** al listei este un **șir**.

Lista definită ar putea **să conțină orice obiect**.

Știm doar că recuperăm o listă inspectând contextul.

Când ne uităm la tipuri, poate garanta doar că este un obiect și avem nevoie de o distribuție explicită pentru a ne asigura că tipul este sigur.

Distribuția poate provoca **erori de runtime** legate de tip dacă un programator face o greșeală cu distribuirea explicită.

[/slide]

[slide hideTitle]

# Generice - Tipuri de Siguranță 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/RO/interactive-java-advanced-generics-6-Type-Safety-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ideea de bază din spatele genericelor este că programatorii își pot exprima intenția de a utiliza **tipuri specifice** și **compilatorul poate asigura corectitudinea unui astfel de tip.**

Următorul exemplu ilustrează Generics folosind „**ArrayList**”, dar puteți utiliza orice colecție de clasă , cum ar fi „**LinkedList**”, „**HashSet**”, „**TreeSet**”, „**HashMap** "," **Comparator** "etc:

```java
List<String> strings = new ArrayList<String>();
strings.add("SoftUni");

// Eroare în timpul compilării
strings.add(3); 
```

Să explicăm ce face codul de mai sus:

Prin adăugarea operatorului de diamant `<>` care conține tipul, restrângem specializarea acestei liste doar la tipul String, adică specificăm tipul care va fi păstrat în listă.

Compilatorul poate aplica tipul în timpul compilării.

În programele mici, acest lucru ar putea părea o adăugare banală, cu toate acestea, în programele mai mari, acest lucru poate adăuga o rezistență semnificativă și face programul mai ușor de citit.

Principalele caracteristici ale Generics sunt:

- **Type safety** - putem păstra doar un singur tip de obiecte în generice
- **Type casting is not required** - nu este necesar să fie tipografiat obiectul
- **Compile-Time Checking** - tipul este verificat la timp de compilare

Este întotdeauna mai bine ca o problemă să fie descoperită în timpul compilării, mai degrabă decât în ​​timpul rulării.

[/slide]
