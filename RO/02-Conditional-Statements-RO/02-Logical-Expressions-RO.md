# Expresii Logice

[slide hideTitle]
# Operatori de Comparație

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-10-13-logical-expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În programare, putem compara valori folosind următorii operatori:

|**Operatori**|**Desemnare**|
|---|---|
| Egal cu | **==** |
| Nu este egal cu | **!=** |
| Mai mare decât | **>** |
| Mai mare sau egal cu | **>=** |
| Mai mic decât | **<** |
| Mai mic sau egal cu | **<=** |

Atunci când se face o comparație, rezultatul este o valoare booleană `true` sau `false`, în funcție de rezultatul comparației.
[/slide]

[slide hideTitle]
# Exemple de Comparare a Numerelor

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-10-13-logical-expressions-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Exemple de astfel de expresii sunt următoarele:
```java live
int a = 5;
int b = 10;
System.out.println(a < b);      // true
System.out.println(a > 100);    // false
System.out.println(a <= 5);     // true
System.out.println(b == 2 * a); // true
System.out.println(a != b);     // true
```

De asemenea, puteți compara expresii numerice. 

Expresiile pe care le comparați pot fi expresii complexe, ca în exemplul următor:

```java
x / 45 * (y +17) >= Math.sqrt(z) / (p - (x * 16))
```
Expresia complexă precedentă include literali, variabile și apeluri ale funcțiilor.

Expresiile de pe ambele părți ale operatorului de comparație sunt evaluate, iar valorile rezultate sunt apoi comparate folosind operatorul de comparație `> =`.

Dacă valoarea expresiei din partea stângă este mai mare sau egală cu valoarea expresiei din dreapta, întreaga expresie se evaluează ca fiind `true`, în caz contrar, se evaluează ca fiind `false`.
[/slide]

[slide hideTitle]

# Compararea Şirurilor

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-10-13-logical-expressions-demo-2-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Compararea textului se poate face folosind metoda `equals()`.

Doi operanzi de tip șir sunt egali atunci când ambii sunt `null` sau ambele instanțe de șir sunt de aceeași lungime și au caractere identice pe fiecare poziție de caracter:
```java live
String a = "Examplе";
String b = a;
System.out.println(a.equals(b)); // true
```

```java live
String a = "Examplе";
String b = "Examplе";
System.out.println(a == b);
```

```java live
String a = "hello";
String b = "hello";
System.out.println(a.equals(b)); // true
System.out.println(a < b); // error
```
[/slide]
