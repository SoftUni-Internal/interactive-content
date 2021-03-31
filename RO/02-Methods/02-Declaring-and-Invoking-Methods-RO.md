# Declararea și Invocarea Metodelor

[slide hideTitle]
# Crearea Unei Metode

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-7-8-Declaring-methods-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O metodă trebuie declarată într-o clasă.

Este definită cu numele metodei, urmată de paranteze **()**.

Java oferă niște metode predefinite, cum ar fi `System.out.println()`, dar puteți să vă creați propriile metode pentru a face anumite acțiuni:

```Java
public class MyClass {
  public static void printHello() {
    System.out.println("Hello World!");

  }
}
```

* `public` definește modul de acces a metodei din exemplu, de unde poate fi accesată în aplicația voastră

* `void` înseamnă că această metodă nu are o valoare de returnare

* `printHello()` este numele metodei

* Rețineți că metoda trebuie mereu cuprinsă între acolade `{ }`
[/slide]

[slide hideTitle]

# Apelarea Unei Metode (Invocarea)
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-9-10-Invoking-a-method-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a apela sau a invoca o metodă în Java, scriem numele metodei, urmat de cele două paranteze **()** și de un punct și virgulă **;**.

În următorul exemplu, `printHello()` este folosit pentru a afișa textul `Hello World!`, atunci când este apelat:

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
