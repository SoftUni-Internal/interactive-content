# Tratarea Excepțiilor

[slide hideTitle]

# Instrucțiunea "try-catch"

În Java, excepțiile pot fi tratate cu ajutorul instrucțiunii **try-catch**.

```java 
try {
    // Specify a piece of code logic that could raise an exception 
} catch (SomeException) {
    // Handle the caught exception
}
```

Blocurile **catch** pot fi utilizate de mai multe ori pentru a procesa **diferite tipuri de excepții**.

**Exemplu:**

```java 
String s = sc.nextLine();
try {
    Integer.parseInt(s);
    System.out.printf("You entered a valid integer number %s.", s);
} catch (NumberFormatException ex) {
    System.out.println("Invalid integer number!");
} catch (NullPointerException ex) {
    System.out.println("The input is null!");
}
```

[/slide]


[slide hideTitle]

# Tratarea Excepțiilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-9-10-11-12-13-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Găsirea unei excepții dintr-o anumită clasă include găsirea automată a excepțiilor care fac parte din clasele care moștenesc clasa inițială (dacă acestea există).**

Observați următorul exemplu:

```java 
try {
    // Specify a piece of code logic that could raise an exception 
} catch (IndexOutOfBoundsException ae) {
    // Handle the caught arithmetic exception
}
```
Codul din exemplu tratează clasa **IndexOutOfBoundsException** și descendenții săi: 
- **ArrayIndexOutOfBoundsException**
- **StringIndexOutOfBoundsException**


Încercați să găsiți greșeala în exemplul de mai jos:

```java live
String str = "Peter";

try {
    Integer.parseInt(str);
} catch (Exception ex) {
    System.out.println("Cannot parse the number!");

} catch (NumberFormatException ex) {
    System.out.println("Invalid integer number!");
}
```
Ați reușit să o găsiți? 

Nu puteți avea mai multe instrucțiuni catch aici deoarece prin tratarea clasei **Exception** găsim toate excepțiile care o moștenesc, inclusiv clasa **NumberFormatException**.

Dacă eliminați acea parte din cod, ar trebui să ruleze fără probleme.

[/slide]

[slide hideTitle]

# Tratarea tuturor Excepțiilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-14-handling-all-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un cod care nu a fost gestionat poate să arunce **alte excepții**.

Pentru a **trata toate excepțiile** (chiar și cele negestionate) folosiți instrucțiunea **try-catch**.

Specificați un fragment de cod care ar putea genera o excepție. 

```java
try {
    // Specify a piece of code logic that could raise an exception 
} catch (Exception ex) {
    // Handle the caught exception
}
``` 

**Sugestie**: Urmăriți ierarhia excepțiilor. Fiți atent care excepție este părintele și care este copilul.

[/slide]

[slide hideTitle]

# Instrucțiunea "try-finally" 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-15-16-the-try-finally-statement-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Instrucțiunea **try-finally** asigură **execuția** unui bloc dat, indiferent de potențialele excepții care ar putea fi generate în codul care precede blocul **finally**.

```java 
try {
   // Specify a piece of code logic that could raise an exception 
} finally {
   // This block will always execute
}
```

**Exemplu:**

```java 
static void testTryFinally() {
    System.out.println("Code executed before try-finally.");
    try {
        String str = sc.nextLine();
        Integer.parseInt(str);
        System.out.println("Parsing was successful.");
        return; // Exit from the current method
    } catch (NumberFormatException ex) {
        System.out.println("Parsing failed!");
    } finally {
        System.out.println("This cleanup code is always executed.");
    }
    System.out.println("This code is after the try-finally block.");
}
```

[/slide]

[slide hideTitle]

# Cum Funcționează Excepțiile?

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-17-how-do-exceptions-work-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În **blocul try** rulăm codul pe care dorim să îl verificăm.

**Blocul catch** este utilizat pentru tratarea **excepțiilor verificate** generate de **blocul try**, precum și pentru tratarea oricăror posibile **excepții neverificate**.

**Blocul finally** ne oferă șansa de a rula codul pe care vrem să îl executăm de fiecare dată.  

[image assetsSrc="exception-handling-example(2).png" /]

[/slide]



