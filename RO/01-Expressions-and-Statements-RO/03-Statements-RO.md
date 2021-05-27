[slide hideTitle]
# Instrucțiuni

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-11-12-statements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Acțiunile** pe care le execută un program sunt exprimate ca **instrucțiuni**. 

Java admite diferite de instrucțiuni și aici sunt câteva dintre ele:
  * **Declaration** - declară constante și variabile locale
  * **Expression** - evaluează expresii
  * **Selection** - selectează o intrucțiune dint-o serie de instrucțiuni posibile
  * **Iteration** - executa în mod repetat o instrucțiune încorporată
  * **Jump** - transferă controlul
  
Cele mai utilizate instrucțiuni includ:
- **Declararea** unei variabile

Declararea unei variabile înseamnă **definirea** tipului său.

  ```java
  int counter;
  ```

- **Atribuirea** unei valori (inițializare)

După ce declarați o variabilă, puteți să îi atribuiți o valoare.

Atribuirea unei valori unei variabilei înseamnă **stocarea** unei **valori** într-o variabilă.

```java
counter = 1;
```

- Declarare + **inițializare**

```java
int counter = 1;
```

- **Tipărirea** unei valori

```java
System.out.println(counter);
```

- **Modificarea** unei valori
```java
counter++;
```
  
```java
sum = a + b;
```

## Comentarii

**Comentariile** sunt **instrucțiuni** speciale care **nu** sunt executate în timpul rulării.

Acestea sunt un mod pentru programatori de a scrie **notițe** pentru ei înșiși sau pentru alți programatori.

Putem folosi comentariile pentru **a clarifica** care este scopul pe care vrem să îl atingem cu codul nostru.

Există **mai multe moduri** de a le declara.

- Comentarii pe un singur rând

**Comentariile pe un singur rând** au cea mai simplă sintaxă.

Pentru a declara unul, folosim **două bare oblice** `//`, urmate de comentariu:

```java
// Acesta este un comentariu pe un singur rând 💬
```

Putem să le utilizăm pentru **a explica** codul nostru:

```java
System.out.println("Java e super! 😎"); // Această linie tipărește un șir pe consolă
```

Sau pentru **opri** o linie de cod din **a rula**:

```java
System.out.println("Vremea afară este însorită. 🌞"); 
// System.out.println("Afară plouă. 🌧");
```

Orice se află pe o linie de comentariu **va fi ignorat de compilator**.

- Comentarii pe linii multiple

După cum sugerează numele, **comentariile pe linii multiple** pot ocupa **mai multe** linii.

Acest lucru poate fi util atunci când un comentariu este **prea lung** pentru o singură linie și ar necesita derulare orizontală.

Le deschidem folosind o **bară oblică**, urmată de un **asterisc**:

```java
System.out.println("Hello World! 🙋");

/*Acest comentariu
  ocupă mai multe 
  linii*/
```

Și să le închidem folosind **un asterisc și o bară oblică**.

Putem să scriem comentarii pe o singură linie folosind sintaxa:

```java
/*Acesta este un comentariu pe un singur rând 👨🏼‍💻*/
```

- Comentarii de documentare

**Comentariile de documentare** sunt utilizate în scrierea de cod pentru pachete software.

Acestea pot genera o **pagină de documentare** pentru referință.

Orice proiect bun trebuie să aibă de asemenea o pagină de documentare bună.

```java
/**Acest tip de comentariu este folosit în documentații
*
*etichetele sunt folosite pentru a specifica parametri
*@author James Williams
*această etichetă author specifică un nume
*@version 1.0
*putem specifica un număr de versiune
*există și multe alte tipuri de etichete*/
```

Puteți învăța mai multe despre ele [aici](https://www.oracle.com/java/technologies/javase/codeconventions-comments.html).
  
[/slide]
