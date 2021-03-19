# Șiruri

[slide hideTitle]
# Ce Este un Şir?

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

# Șirurile sunt imuabile

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-5-strings-are-immutable-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Inițializarea unui Șir

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