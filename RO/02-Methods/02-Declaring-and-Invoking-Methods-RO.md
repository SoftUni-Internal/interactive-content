# Declararea și Invocarea Metodelor

[slide hideTitle]
# Crearea Metodelor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-7-8-Declaring-methods-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O metodă trebuie declarată ]n cadrul unei clase.

Este definită prin intermediulunui nume, urmat de paranteze **()**.

Java oferă câteva metode predefinite, cum ar fi `System.out.println()`, dar putem să creăm propriile noastre metode:

```Java
public class MyClass {
  public static void printHello() {
    System.out.println("Hello World!");

  }
}
```

* `public` definește tipul de acces al metodei, adică de unde poate fi accesată în aplicație

* `void` înseamnă că această metodă nu returnează o valoare

* `printHello()` numele metodei 

* Corpul metodei trebuie mereu cuprins între acolade `{ }`
[/slide]

[slide hideTitle]

# Apelarea Metodelor
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-9-10-Invoking-a-method-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a apela sau a invoca o metodă în Java, scriem numele metodei urmat de paranteze **()** și de punct și virgulă **;**.

În următorul exemplu, metoda `printHello()` este folosită pentru a afișa textul `Hello World!`, atunci când este apelată:

```java live no-template
public class MyClass {
  public static void main(String[] args) {
    printHello();
  }

  public static void printHello() {
    System.out.println("Hello World!");
  }
}
```

O metodă poate fi apelată de mai multe ori:

```java live no-template
public class MyClass {
  public static void main(String[] args) {
    printHello();
    printHello();
    printHello();
  }

  public static void printHello() {
    System.out.println("Hello World!");
  }
}
```
[/slide]
