[slide hideTitle]
# Bucle Imbricate

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-21-nested-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**O buclă imbricată** este o construcție în care **conținutul unei bucle** (cea interioară) **se află într-o altă buclă** (cea exterioară). 

Există bucle imbricate de tip `for` și de tip `while`.

Nu puteți imbrica doar `for` în `for` și `while` în `while`, ci și `for` în `while` și vice versa:
```java
// Outer Loop
while (condition) {
   // Inner Loop 
   for (variable initialization; condition; increment) {   
       // Statements
   }
}
```
La fiecare iterație a buclei exterioare, se execută **întreaga** buclă interioară. 

Acest lucru are în felul următor:
* **Bucla exterioară este executată** mai întâi 
  * **variabila** de control este inițializată și după o verificare a condițiilor de terminare a buclei, codul din interiorul său este executat
  
* După aceea, **se execută bucla interioară**: 
  *  variabila de control a buclei interioare este inițializată, are loc o verificare a condițiilor de terminare a buclei și este executat codul din corpul său
  
* Când se ajunge la valoarea specificată drept condiție pentru **sfârșitul buclei**, programul se întoarce cu un pas și continuă executarea buclei precedente (bucla exterioară):
  * variabila de control a buclei exterioare se schimbă cu un pas, are loc o verificare pentru a se observa dacă se îndeplinește condiția pentru sfârșitul buclei și **începe o nouă execuție a buclei imbricate (cea interioară)**
  
* Aceste etape se repetă până când variabila buclei exterioare îndeplinește condiția de **terminare a buclei**
[/slide]

[slide hideTitle]
# Exemplu: Rectangle of Stars

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-19-20-Nested-loops-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aici se află un **exemplu** care ilustrează utilizarea buclelor imbricate. 

Scopul este imprimarea unui dreptunghi format din `n` \* `n` steluțe, în care, pentru fiecare linie, bucla iterează de la **1** la `n`, iar pentru fiecare coloană se execută o buclă imbricată de la **1** la \* `n`:

```java live
int n = 5;
for (int r = 1; r <= n; r++) {
    for (int c = 1; c <= n; c++) {
        System.out.print("*");
    }

    System.out.println();
}
```

Să ne uităm puțin la exemplul de mai sus.
 
După inițializarea **primei bucle (cea exterioară)**, **corpul său**, care cuprinde **a doua buclă (imbricată)**, este executat. 

Acest lucru imprimă `n` steluțe pe un rând. 

După ce **bucla interioară** își **termină execuția** la prima iterație a buclei exterioare, **controlul este transferat buclei exterioare**, de exemplu va imprima un rând gol pe consolă. 

**După aceea**, variabila **primei** bucle va fi **actualizată** și se va executa din nou a doua buclă.

Bucla interioară se va executa de câte ori se execută conținutul buclei exterioare, în acest caz, de `n` ori.
[/slide]

[slide hideTitle]

# Nivele Multiple de Bucle Imbricate

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-22-multiple-levels-of-nested-loops-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Este posibil să aveți mai multe nivele de bucle imbricate.

Rețineți că variabilele buclei trebuie să utilizeze nume diferite la fiecare nivel următor de buclă.

```java
for (int hour = 0; hour <= 23; hour++) {
  for (int minute = 0; minute < 59; minute++) {
    for (int second = 0; second < 59; second++) {
      
    }
  }
}
```

[/slide]
