# Declararea și invocarea metodelor

[slide hideTitle]
# Crearea unei metode

O metodă trebuie declarată într-o clasă.

Este definită cu numele metodei, urmată de paranteze `()`.

Java oferă niște metode predefinite, cum ar fii `System.out.println()`, dar puteți sp vă creați propriile metode pentru a face anumite acțiuni:

```Java
public class MyClass {
  public static void printHello() {
    System.out.println("Hello World!");

  }
}
```

* `public` definește modul de acces a metodei din exemplu, de unde poate fii accesată în aplicația voastră

* `void` înseamnă că această metodă nu are o valoare de returnare

* `printHello()` este numele metodei

* Rețineți că metoda trebuie mereu cuprinsă între acolade `{ }`
[/slide]

[slide hideTitle]
# Apelarea unei metode (invocarea)

Pentru a apela o metodă în Java, scriem numele metodei, urmată de cele două paranteze și apoi de punct și virgulă **;**.

În următorul exemplu, `printHello()` este folosit pentru a afișa un text (acțiunea), când este apelată:

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

A method can also be called multiple times:

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