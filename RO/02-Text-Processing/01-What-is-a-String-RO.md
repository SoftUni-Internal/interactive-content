# Șiruri

[slide hideTitle]
# Ce Este un Şir?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-3-4-what-is-a-string-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un **șir** este un **obiect** care reprezintă o **secvență de caractere** - `char []`.

[image assetsSrc="String-example(1).png" /]

La fel ca o matrice de caractere, **șirurile sunt imuabile**.

Ori de câte ori se face o **schimbare** într-un șir, se creează un **obiect nou de tip șir**. 

```java live
String name = "SoftUni!";
// hashCode() - returnează adresa obiectului în memorie
System.out.println(name.hashCode());

name = "Peter!";
System.out.println(name.hashCode());
```

După atribuirea unei noi valori variabilei **name** în exemplul precedent, apare ca o nouă adresă în memorie - un **obiect newString este creat**



**Șirurile folosesc Unicode** (pot folosi majoritatea alfabetelor, de ex. Arabă) 

```java 
String greeting = "مرحبا";  // Bună în Arabă
```

Principalele **caracteristici** ale **șirurilor** sunt:

- Șirurile reprezintă o **secvență de caractere**

- Șirurile sunt folosite pentru a **stoca text**

- Clasa Java String are o mulțime de **metode** pentru **procesarea textului**

- Șirurile sunt imuabile (**numai citire**)


[/slide]

[slide hideTitle]

# Șirurile Sunt imuabile

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-5-strings-are-immutable-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un obiect este considerat **imuabil (immutable)** dacă starea acestuia nu poate fi alterată după ce acesta este creat.

Acest lucru este valabil și pentru Șiruri în Java, care sunt **imuabile**, dar asta nu înseamnă că nu putem să atribuim valori noi variabilelor String:

```java live
String movieTitle = "101 Dalmatians";

System.out.println(movieTitle);

movieTitle = "The Last Samurai";

System.out.println(movieTitle);
```

Am reușit să schimbăm titlul filmului în exemplul de mai sus, deci de ce spunem că String-urile sunt imuabile?

Șirurile sunt tipuri de date referință, prin urmare variabila **movieTitle** va conține o referință spre o locație de memorie, nu va deține datele propriu-zise.

Când inițializați o nouă variabilă String și îi atribuiți o valoare, Java va crea un obiect String și îl va stoca într-o locație de memorie, și doar referința pentru acea locație va fi stocată în variabila voastră.

Atunci când atribuiți o nouă valoare aceleiași variabile String, un nou obiect String va fi creat și locația memoriei sale va fi atribuită ca valoare variabilei voastre.

Pentru a recapitula:
- Obiectul String care este creat este imuabil (read-only)
- Variabila String va deține doar o referință către obiectul String curent atribuit acesteia



[/slide]

[slide hideTitle]
# Inițializarea Unui Șir

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-6-initializing-a-string-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Inițializarea folosind **șir literal**

```java
String greeting = "Hello, SoftUni";
```

- Inițializarea folosind cuvântul cheie `new`

```java 
String greeting = new String ("Hello, SoftUni");
```

- Inițializarea folosind `char []`

```java live
char [] charArr = new char[]{'H','e','l','l','o'};
String greeting = new String (charArr);

System.out.println(greeting);
```

[/slide]
