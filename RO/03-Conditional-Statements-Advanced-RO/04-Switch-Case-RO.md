# Instrucțiunea Switch

[slide hideTitle]
# Instrucțiunea Switch

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-24-25-switch-case-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Instrucțiunea `switch` funcționează ca o secvență de blocuri **if-else**.

Ori de câte ori munca programului nostru depinde de valoarea unei variabile, în loc să facem condiții consecutive cu blocuri `if-else`, putem **folosi** instrucțiunea condițională `switch`.

Instrucțiunea switch furnizează o sintaxă mai simplă pentru construcții cu mai multe posibilități.

Instrucțiunea compară o valoare dată cu valoarea unor cazuri definite și, în funcție de rezultat, execută blocul corespunzător.

## Exemplu de instrucțiune switch

```java
switch (selector) {
  case value1:
    statements;
    break;
  case value2:
    statements;
    break;
}
```
- Punem **variabila** pe care vrem să o **comparăm** în **parantezele care urmează după operatorul** `switch`, această variabilă fiind numită **"selector"**
-  **Tipul de dată trebuie să fie comparabil** (numere, șiruri)
- **Consecutiv**, programul începe **să compare** variabila cu fiecare **valoare** care este **găsită** după **etichetele** `case`
- În caz de potrivire, executarea codului din locul respectiv începe și continuă până când ajunge la operatorul `break`

În unele limbaje de programare (cum ar fi C și C ++) `break` poate fi sărit, pentru permite executarea unui cod din altă construcție `case`.

În Java, prezența operatorului `break` este **obligatorie** pentru **fiecare** caz care conține o logică de program.

Când **nu sunt găsite** potriviri, se execută construcția `default`, dacă aceasta **există**.

## Cazul Implicit
Cazul implicit este executat **dacă selectorul nu se potrivește cu nicio altă etichetă de caz**.

Dacă un caz implicit nu este prezent și selectorul nu se potrivește cu nicio altă etichetă de caz, programul iese din instrucțiunea switch și continuă executarea codului de după aceasta.

Cazul implicit poate apărea în orice ordine în instrucțiunea de comutare, dar indiferent de ordinea acestuia în codul sursă, este întotdeauna evaluată **ultimul**, după ce au fost evaluate toate etichetele de caz.

## Exemplu de instrucțiune switch cu un caz implicit

```java
switch (selector) {
  case value1:
    statements;
    break;
  case value2:
    statements;
    break;
  default:
    statements;
    break;
}
```
[/slide]

[slide hideTitle]
# Exemplu: "Yes" or "No"

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-26-switch-case-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să scriem un program care tipărește **"Yes" sau "No"** în funcție de **o valoare dată** (`Y`, `N`) sau **"Invalid response"** dacă este dată o intrare nevalidă.

```java
Scanner scanner = new Scanner(System.in);
String choice = scanner.nextLine();
switch (choice) {
  case "Y":
    System.out.println("Yes");
    break;
  case "N":
    System.out.println("No");
    break;
  default:
    System.out.println("Invalid response");
    break;
}
```
[/slide]

[slide hideTitle]
# Etichete Multiple

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-27-29-multiple-labels-in-switch-case-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În **Java** avem posibilitatea de a utiliza etichete **multiple** de caz în construcția `switch-case`, atunci când trebuie să execute **același cod**.

În acest fel, când **programul nostru** găsește o **potrivire**, acesta va executa **următorul** bloc de cod, până când întâlnește un operator `break`:

```java
switch (selector) {
    case value1:
    case value2:
    case value3:
        construction;
        break;
    case value4:
    case value5:
        construction;
        break;
    default:
        construction;
        break;
}
```
## Exemplu: Animal Type
Scrieți un program care tipărește tipul unui animal în funcție de numele acestuia:
-  Dog -> **mammal**
-  Crocodile, tortoise, snake -> **reptile**
-  Others -> **unknown**

Putem rezolva sarcina cu ajutorul condițiilor `switch-case` cu mai multe etichete în felul următor:
```java
Scanner scanner = new Scanner(System.in);
String animal = scanner.nextLine();
switch (animal) {
    case "dog":
    case "cat":
      System.out.println("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      System.out.println("reptile");
      break;
    default:
      System.out.println("unknown");
      break;
}
```
[/slide]
