# Manevrarea Excepțiilor

[slide hideTitle]

# Construcție "try-catch"

În Java, excepțiile pot fi gestionate prin construcția **încearcă-să-prinzi**.

```java 
try {
    // Specify a piece of code logic that could raise an exception 
} catch (SomeException) {
    // Handle the caught exception
}
```

- **Captura** blocurile pot fi utilizate de mai multe ori pentru a procesa diferite tipuri de excepții

**Example:**

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

# Handling Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-9-10-11-12-13-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Atunci când prindeți o excepție dintr-o anumită clasă, toți moștenitorii săi (excepțiile copilului) sunt prinși și ei.**
Vezi următorul exemplu:

```java 
try {
    // Specify a piece of code logic that could raise an exception 
} catch (IndexOutOfBoundsException ae) {
    // Handle the caught arithmetic exception
}
```
- Codul din exemplu tratează **IndexOutOfBoundsException** și descendenții săi: 
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
Ați înțeles? 

Nu puteți avea multiple instrucțiuni catch aici deoarece prin tratarea clasei **Exception** deja prindem toate excepțiile care o moștenesc, inclusiv NumberFormatException.

Dacă eliminați acea parte din cod, ar trebui să ruleze fără probleme.

[/slide]

[slide hideTitle]

# Handling All Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-14-handling-all-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Codul negestionat poate să arunce **alte excepții**.

Pentru a **trata toate excepțiile** (chiar dacă sunt negestionate) folosiți instrucțiunea **try-catch**.

Specificați un fragment de logică a codului care ar putea ridica o excepție. 

```java
try {
    // Specify a piece of code logic that could raise an exception 
} catch (Exception ex) {
    // Handle the caught exception
}
``` 

Sugestie: Urmăriți ierarhia excepțiilor. Fiți atent care excepție este părintele și care este copilul.

[/slide]

[slide hideTitle]

# "Try-finally" Statement

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-15-16-the-try-finally-statement-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Instrucțiunea **try-finalmente** asigură **execuția** unui bloc dat, indiferent de potențialele excepții care ar putea fi aruncate în codul anterior blocului de cod în cele din urmă.

```java 
try {
   // Specify a piece of code logic that could raise an exception 
} finally {
   // This block will always execute
}
```

**Example:**

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

# How Do Exceptions Work?

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-17-how-do-exceptions-work-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În **blocul try**, rulăm codul pe care dorim să îl verificăm.

**Blocul catch** e utilizat pentru gestionarea **excepțiilor verificate** generate de **blocul try**, precum și pentru gestionarea oricăror posibile **excepții neverificate**.

**Blocul finally** ne oferă șansa de a rula codul pe care vrem să îl executăm de fiecare dată.  

[image assetsSrc="exception-handling-example(2).png" /]

[/slide]



