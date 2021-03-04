
[slide]
# Ce Este un Şir?

Un **Șir** este un **obiect** care reprezintă o **secvență de caractere** - `char []`.

[image assetsSrc = "Exemplu de șir (1) .png" /]

La fel ca o serie de caractere, **Șirurile sunt imuabile**.

Ori de câte ori se face o **schimbare** într-un șir, se creează un **întreg nou obiect Șir**. 
```java live
String name = "SoftUni!";
// hashCode() - returnează adresa obiectului în memorie
System.out.println(name.hashCode());

name = "Peter!";
System.out.println(name.hashCode());
```
Să explicăm ce înseamnă codul de mai sus:
- După atribuirea unei noi valori în variabila **nume** apare o nouă adresă în memorie - se creează un **obiect Şirnou**



**Șirurile folosesc Unicode** (pot folosi majoritatea alfabetelor, de ex. Arabă) 
```java 
String greeting = "مرحبا";  // Bună în Arabă
```

Principalele **caracteristici** ale **Șirurilor** sunt:
- Șirurile reprezintă o **secvență de caractere**
- Șirurile sunt folosite pentru a **stoca text**
- Clasa Java Șir are o mulțime de **metode** pentru **procesarea textului**
- Șirurile sunt imuabile (**numai citire**)


[/slide]

[slide]
# Inițializarea unui șir

- Initializarea folosind **Șir literal**
```java
String greeting = "Hello, SoftUni";
```

- Inițializarea folosind cuvântul cheie `nou`

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