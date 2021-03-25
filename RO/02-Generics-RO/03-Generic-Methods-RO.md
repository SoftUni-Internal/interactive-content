# Metode Generice

[slide hideTitle]
# Metode Generice

Metodele generice sunt acele metode care sunt scrise cu o declarație de **metodă unică** și pot fi apelate cu **argumente de diferite tipuri**.

**compilatorul va asigura corectitudinea** de orice tip este utilizat.

Principalele caracteristici ale metodelor generice sunt:

- Metodele generice au un **parametru de tip** (operatorul de diamant care include tipul) înainte de tipul de returnare a declarației metodei
- Parametrii de tip pot fi **delimitați** (limitele sunt explicate mai târziu în articol)
- Metodele generice pot avea parametri de tip **diferiți** separați prin virgule în semnătura metodei
- Corpul metodei pentru o metodă generică este la fel ca o metodă normală

Să vedem următorul exemplu:
```java live no-template
public class Main {

    static <T> void genericPrinter(T element) {
        System.out.println(element);
    }

    public static void main(String[] args) {

        genericPrinter(5); // Integer
        genericPrinter("SoftUni"); // String
        genericPrinter(1.5);  // Double
    }
}
```

Pentru a declara o metodă generică trebuie să definim un parametru de tip - `<T>` la semnătura metodei.

În exemplul de mai sus, avem un `genericPrinter(element T)` care are un parametru de tip generic în semnătura sa - `<T>`.

`GenericPrinter(element T)` poate fi apelat cu argumente de diferite tipuri, `Integer`, `String`, `Double` etc.

Nu este nevoie să specificăm în mod explicit tipul în timp ce apelăm metoda, **compilatorul Java** este suficient de inteligent pentru a determina tipul de variabilă care trebuie utilizată, această facilitate se numește **inferență de tip**.


[/slide]

