[slide hideTitle]

# Secvența condițiilor If-Else 
Uneori trebuie să facem o secvența de condiții înainte de a decide ce acțiuni va executa programul nostru.

În astfel de cazuri, putem aplica construcția `if-else if ... -else` **in serie**.

Pentru acest scop, utilizăm următorul format:
```java
if (condition) {
  // condition body;
} else if (second condition) {
  // condition body;
} else if (third condition) {
  // condition body;
}
…
else {
  // else construction body;
}
```
[/slide]

[slide hideTitle]
# Exemplu: cifre în engleză

Printați cifrele în intervalul de la 1 la 9 (cifrele sunt citite de pe consolă) în limba engleză.

Putem citi cifra și apoi, printr-o **secvența de condiții**, imprimăm cuvântul englez relevant:
```java live
int num = 5;

if (num == 1) {
    System.out.println("one");
} else if (num == 2) {
    System.out.println("two");
} else if (num == 3) {
    System.out.println("three");
} else if (num == 4) {
    System.out.println("four");
} else if (num == 5) {
    System.out.println("five");
} else if (num == 6) {
    System.out.println("six");
} else if (num == 7) {
    System.out.println("seven");
} else if (num == 8) {
    System.out.println("eight");
} else if (num == 9) {
    System.out.println("nine");
} else {
    System.out.println("number too big");
}
```

Logica programului din exemplul de mai sus **compară secvențial** numărul de intrare de pe consolă cu cifrele de la 1 la 9, când **fiecare comparație următoare se efectuează numai în cazul în care comparația anterioară nu este adevărată**.

În cele din urmă, daca niciuna dintre declarațiile `if` nu este true, ultima **clauză** `else` este efectuată.
[/slide]