[slide hideTitle]
# Operatori de Incrementare și Decrementare

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/RO/interactive-programming-basics-with-java-for-loops-7-9-increment-and-decrement-oprator-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Operatorul unar de incrementare `++` își mărește operandul cu 1, în timp ce operatorul unar de decrementare `--` îl micșorează cu 1.

Operatorii de incrementare și decrementare au două forme posibile:

* Operatorul de incrementare/decrementare de tip sufix: `x++` / `x--`
* Operatorul de incrementare/decrementare de tip prefix: `++x`/`--x`

## Operatorul de incrementare 

### Operatorul de incrementare de tip sufix
Rezultatul expresiei `x++` este valoarea lui `x` înainte de operația `++`, așa cum arată următorul exemplu:
```java live
int i = 3;
System.out.println(x);   // output: 3
System.out.println(x++); // output: 3
System.out.println(x);   // output: 4
```

### Operatorul de incrementare de tip prefix
Incrementarea de tip prefix `++x` este aplicată înainte de punerea în efect a instrucțiunii `println`:
```java live
double a = 1.5;
System.out.println(x);   // output: 1.5
System.out.println(++x); // output: 2.5
System.out.println(x);   // output: 2.5
```

## Operatorul de decrementare 

### Operatorul de decrementare de tip sufix
Rezultatul lui `x--` este valoarea lui `x` înainte de operație, așa cum arată următorul exemplu:
```java live
int i = 3;
System.out.println(x);   // output: 3
System.out.println(x--); // output: 3
System.out.println(x);   // output: 2
```

### Operatorul de decrementare de tip prefix
Rezultatul lui `--x` este valoarea lui `x` după operație, așa cum arată exemplul următor:
```java live
double a = 1.5;
System.out.println(x);   // output: 1.5
System.out.println(--x); // output: 0.5
System.out.println(x);   // output: 0.5
```
[/slide]
