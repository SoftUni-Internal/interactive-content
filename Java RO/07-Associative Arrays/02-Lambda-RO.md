

[slide hideTitle]
# Expresiile Lambda

O expresie lambda este o **anonymous function** care conține **expressions and statements**. 

Ea **replaces an entire function** și **improves** scrierea de cod. Este folosită mai mult cu **with Stream API**, care va fi explicat în capitolul următor.

Funcția Lambda este o **shorter-expression** care oferă un rezultat, dar nu este întotdeauna necesară.

Folosiți operatorul lambda `->`, care este citit ca "goes to".

Partea din **left**  a operatorului specifică parametrii de **input**.

Partea din **right** conține corpul metodei funcției lambda - **expression** sau **statement**.

Funcțiile Lambda sunt **inline methods** (funcții) care primesc parametri de input și returnează valori:

In loc să scriem o funcție care acceptă, de exemplu, un parametru integer `int a` și apoi returnează dacă `a` este mai mare decât 5 sau nu. 

Este posibil să scriem la fel, folosind expresia lambda:

```java
(a -> a > 5)
```
Exemple:

- Această funcție lambda `x -> x / 2` este echivalentul metodei care acceptă un parametru integer ca un singur parametru și returnează un integer împărțit în 2:

```java
static int function(int x) { 
    return x / 2; 
}
```

- Această funcție lambda `x -> x != 0` este echivalentul metodei care acceptă un integer ca un singur parametru și returnează un boolean:

```java
static boolean function(int x) { 
    return x != 0; 
}
```

- Această funcție lambda `() -> 42` este echivalentă cu metoda care returnează întotdeauna `42`:

```java
static int function() { 
    return 42; 
}
```

Când nu avem niciun parametru, imprimăm doar paranteze goale `()`. 

Dacă avem mai mulți parametru, îi imprimăm între paranteze `()`, separați prin virgule.

[/slide]
