[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-51-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat: 

- Ce reprezintă instrucțiunile condiționale imbricate

  * if-else în interiorul unei alte instrucțiuni if-else

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

  * `&&` , `||` , `!` 

  
``` java
  if ((animal == "horse" || animal == "donkey") && (speed > 40)) {
    System.out.println("Run fast");
} else if ((animal == "shark" || animal == "dolphin") && (speed > 45)) {
    System.out.println("Swim fast");
} else if (!(speed > 30 || animal == "turtle")) {
    System.out.println("Move slow");
}
```

- Instrucțiunea condițională - **switch-case**

 
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
 * Etichetele multiple de caz în **switch-case**

## În lecția următoare veți învăța:

- Operatorii de **incrementare** și **decrementare** 

- Repetarea blocurilor de cod

  * buclele for

- Buclele for cu un **pas** special

- Iterația peste caractere cu ajutorul buclelor 

- Buclele **infinite** 

  * cum să le folosiți corespunzător


[/slide]
