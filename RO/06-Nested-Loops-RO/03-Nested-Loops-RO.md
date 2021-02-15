[slide hideTitle]
# Bucle Imbricate

**Obuclă imbricată** este o construcție în care **conținutul unei bucle** (cea exterioară) **se află într-o altă buclă** (cea interioară). 

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
În fiecare iterație a buclei exterioare, se execută **întreaga** buclă interioară. 

Acest lucru are loc:
* Când buclele imbricate încep să se execute, **bucla exterioară începe** mai întâi 
  * **variabila** de control este inițializată și după o verificare de terminare a buclei, codul din interiorul său este executat
* După aceea, **se execută bucla interioară**: 
  * poziția de start a variabilelor de control este inițializată, are loc o verificare pentru terminarea buclei și se execută codul din conținutul său.
* Când se ajunge la valoarea specificată drept condiție pentru **sfârșitul buclei**, programul se întoarce cu un pas și continuă executarea buclei precedente (bucla exterioară):
  * variabila de control a buclei exterioare se schimbă cu un pas, are loc o verificare pentru a se observa dacă se îndeplinește condiția pentru sfârșitul buclei și **începe o nouă execuție a buclei imbricate (cea interioară)**
* Aceste etape se repetă până când variabila buclei exterioare îndeplinește condiția de **terminare a buclei**
[/slide]

[slide hideTitle]
# Bucle Imbricate - Exemple

Aici se află un **exemplu** care ilustrează utilizarea buclelor imbricate. 

Scopul este, din nou, imprimarea unui dreptunghi format din `n` * `n` steluțe, în care, pentru fiecare linie, bucla iterează de la **1** la `n`, iar pentru fiecare coloană se execută o buclă imbricată de la **1** la * `n`:

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
 
După inițializarea **primei bucle (cea exterioară)**, **conținutul său**, care cuprinde **a doua buclă (imbricată)** începe să se execute. 

Se imprimă de la sine `n` stele pe un rând. 

După ce **bucla interioară** își **termină execuția** la prima iterație a buclei exterioare, **prima buclă va continua**, de exemplu va printa un rând gol în consolă. 

**După aceea**, variabila **primei** bucle va fi **reînnoită** și se va executa din nou întreaga buclă, anume **a doua**. 

Bucla interioară se va executa de câte ori se execută conținutul buclei exterioare, în acest caz, de `n` ori.
[/slide]

[slide hideTitle]

# Nivele multiple de bucle imbricate

Este posibil să aveți mai multe nivele de bucle imbricate.

Rețineți că variabilele buclei trebuie să utilizeze nume diferite la fiecare nivel de buclă următor.

```java
for (int hour = 0; hour <= 23; hour++) {
  for (int minute = 0; minute < 59; minute++) {
    for (int second = 0; second < 59; second++) {
      
    }
  }
}
```

[/slide]