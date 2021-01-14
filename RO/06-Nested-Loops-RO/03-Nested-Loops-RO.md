[slide]

# Bucle imbricate

[vimeo-video]
[stream language="EN" videoId="488090283/21d2c907ca" default /]
[stream language="RO" videoId="488090283/21d2c907ca"  /]
[/video-vimeo]

O buclă imbricată este o construcție cu care o buclă este plasată în interiorul \(interior\) corpului celeilalte \(exterior\).

Pot exista atât bucle imbricate `for`, cât și bucle imbircate `while`.

Nu numai că puteți imbrica `for` în `for` și `while` în `while`, ci și 'for' în `while` și vice versa: 

```js
// Outer Loop
while (condition) {
   // Inner Loop 
   for (variable initialization; condition; increment) {   
       // Statements
   }
}
```

Acest lucru se întâmplă în felul următor:

* Atunci când buclele imbricate încep să se execute, bucla exterioară începe mai întâi:

     * variabila de control este inițializată și după verificarea stării buclei, codul din corpul său este executat

* După aceea, bucla interioară este executată:

     * se inițializează poziția de pornire a variabilelor de control, se verifică starea buclei, se execută codul din corpul său.

* Când valoarea specificată pentru **încheierea buclei este atinsă**, programul revine cu un pas în sus și continuă să execute bucla anterioară (exterioară):

     * variabila de control a buclei externe se schimbă cu un pas, se efectuează o verificare pentru a vedea dacă este îndeplinită condiția finală, dacă nu- se repetă bucla (interioară)

* Aceasta se repetă până când variabila buclei exterioare îndeplinește condiția, încheind bucla


[/slide]

[slide]

# Bucle imbricate - Exemple

[vimeo-video]
[stream language="EN" videoId="488090192/65c460bd1a" default /]
[stream language="RO" videoId="488090192/65c460bd1a"  /]
[/video-vimeo]

Iată un **exemplu** care ilustrează buclele imbricate.

Scopul este din nou de a imprima un dreptunghi format din stele `n` * ` n`, în care pentru fiecare linie o buclă iterează de la **1** la `n`, iar pentru fiecare coloană se execută o buclă imbricată din **1** până la*`n`:

```js live
let n = 3;
let rowLine = '';
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    rowLine += ' *';
  }
  rowLine += '\n';
}
console.log(rowLine);
```


Să vedem exemplul de mai sus.

După inițializarea **primei bucle (exterioare)**, **corpul său**, care conține **a doua buclă (imbricată)** începe să ruleze.

Tipărește un număr de stele pe o linie.

După ce **bucla interioară** se termină la prima iterație a celei exterioare, bucla exterioară va continua, adică va fi tipărită o linie goală.

După aceea, variabila de **prima** buclă va fi incrementată și **a doua** buclă va fi executată din nou.

Bucla interioară va fi repetată de câte ori execută corpul buclei externe, în acest caz de n ori.

[/slide]
