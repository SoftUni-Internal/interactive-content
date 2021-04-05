[slide hideTitle]
# Operatori de Incrementare și Decrementare

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/RO/interactive-programming-basics-with-java-for-loops-7-9-increment-and-decrement-oprator-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Operatorul unar de incrementare `++` își mărește operandul cu 1, în timp ce operatorul unar de decrementare `--` îl scade cu 1.

Operatorii de incrementare și decrementare sunt suportați în două forme:

* Operatorul de incrementare /decrementare  postfix, `x++` / `x--`
* Operatorul de incrementare /decrementare  a prefixului, `++x`/`--x`

## Operator de incrementare 

### Operator de incrementare sufix
Rezultatul lui `x++` este valoarea lui `x` înainte de operație, așa cum arată următorul exemplu:
```java live
int i = 3;
System.out.println(x);   // output: 3
System.out.println(x++); // output: 3
System.out.println(x);   // output: 4
```

### Operator de incrementare sufix
Rezultatul lui `++x` este valoarea lui `x` după operație, așa cum arată exemplul următor:
```java live
double a = 1.5;
System.out.println(x);   // output: 1.5
System.out.println(++x); // output: 2.5
System.out.println(x);   // output: 2.5
```

## Operator de decrementare 

### Operator de decrementare sufix
Rezultatul lui `x--` este valoarea lui `x` înainte de operație, așa cum arată următorul exemplu:
```java live
int i = 3;
System.out.println(x);   // output: 3
System.out.println(x--); // output: 3
System.out.println(x);   // output: 2
```

### Operator de decrementare prefix
Rezultatul lui `--x` este valoarea lui `x` după operație, așa cum arată exemplul următor:
```java live
double a = 1.5;
System.out.println(x);   // output: 1.5
System.out.println(--x); // output: 0.5
System.out.println(x);   // output: 0.5
```
[/slide]