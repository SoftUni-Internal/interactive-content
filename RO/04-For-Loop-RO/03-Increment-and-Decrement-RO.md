[slide hideTitle]
# Operatori de Incrementare și Decrementare
Operatorul unar de incrementare `++` își mărește operandul cu 1, în timp ce operatorul unar de decrementare `--` îl scade cu 1.

Operatorii de incrementare și decrementare sunt suportați în două forme:

* Operatorul de incrementare /decrementare  postfix, `x++` / `x--`
* Operatorul de incrementare /decrementare  a prefixului, `++x`/`--x`

## Operator de incrementare 

### Operator de incrementare sufix
Rezultatul lui `x++` este valoarea lui `x` înainte de operație, așa cum arată următorul exemplu:
```java live
int i = 3;
System.out.println(i);   // output: 3
System.out.println(i++); // output: 3
System.out.println(i);   // output: 4
```

### Operator de incrementare sufix
Rezultatul lui `++x` este valoarea lui` x` după operație, așa cum arată exemplul următor:
```java live
double a = 1.5;
System.out.println(a);   // output: 1.5
System.out.println(++a); // output: 2.5
System.out.println(a);   // output: 2.5
```

## Operator de decrementare 

### Operator de decrementare sufix
Rezultatul lui `x--` este valoarea lui `x` înainte de operație, așa cum arată următorul exemplu:
```java live
int i = 3;
System.out.println(i);   // output: 3
System.out.println(i--); // output: 3
System.out.println(i);   // output: 2
```

### Operator de decrementare prefix
Rezultatul lui `--x` este valoarea lui `x` după operație, așa cum arată exemplul următor:
```java live
double a = 1.5;
System.out.println(a);   // output: 1.5
System.out.println(--a); // output: 0.5
System.out.println(a);   // output: 0.5
```
[/slide]