[slide hideTitle]
# Recapitulare

# În această lecție ați învățat: 

- Ce reprezintă instrucțiunile condiționale imbricate

  * if-else în interiorul unei alte instrucțiiuni if-else

```java
if (condition1) {
    if (condition2) {
        // body; 
    } else {
        // body;
    }
}
```

- Operatorii logici  

  *  operatorii && , || , ! 

  
``` java
  if ((animal == "horse" || animal == "donkey") && (speed > 40)) {
    System.out.println("Run fast");
} else if ((animal == "shark" || animal == "dolphin") && (speed > 45)) {
    System.out.println("Swim fast");
} else if (!(speed > 30 || animal == "turtle")) {
    System.out.println("Move slow");
}
```

- Instrucțiunea condițională - **Switch-Case**

  * Etichetele de clauză **Switch-Case**

```java
switch (selector) {
  case value1:
    statements;
    break;
  case value2:
    statements;
    break;
}
```

## În lecția următoare veți învăța:

- Operatorii de  **incrementare** și **decrementare** 

- Repetarea blocurilor de cod

  *  Buclele for

- Buclele for cu un **pas**

- Iterația peste caractere prin utilizarea buclelor 

-  Buclele **infinite** 

  * Cum să le evitați


[/slide]