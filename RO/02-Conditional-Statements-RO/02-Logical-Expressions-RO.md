# Expresii logice

[slide hideTitle]
# Operatori de comparație
În programare, putem compara valorile folosind următorii operatori:

|Operatori|Desemnare|
|---------|-----------|
| Egal cu | **==** |
| Nu este egal cu | **!=** |
| Mai mare decât | **>** |
| Mai mare sau egal cu | **>=** |
| Mai puțin de | **<** |
| Mai mic sau egal cu | **<=** |

Atunci când se compara, rezultatul este valoare Boolean `true` sau `false`, în funcție de rezultatul comparației este `true` sau `false`.
[/slide]

[slide hideTitle]
# Exemple de compararea numerelor
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
Expresia complexă precedentă include literali, variabile și apeluri funcțiilor.

Expresiile de pe ambele părți ale operatorului de comparație sunt evaluate, iar rezultatele valorilor sunt apoi comparate folosind operatorul de  comparație `> =`.

Dacă valoarea expresiei din partea stângă este mai mare sau egală cu valoarea expresiei din dreapta, întreaga expresie se evaluează ca `true`, în caz contrar, se evaluează ca `false`.
[/slide]

[slide hideTitle]

# Comparație de șiruri
Compararea textului folosind metoda `equals ()`.

Doi operanzi de șir sunt egali atunci când ambii sunt `null` sau ambele instanțe de șir sunt de aceeași lungime și au caractere identice în fiecare poziție de caracter:
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
Un șir este un obiect și fiecare obiect are o instanta, dar vom ajunge la aceasta tema mai târziu pe parcursul cursului.
[/slide]