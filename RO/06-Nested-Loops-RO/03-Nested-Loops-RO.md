// sectionId: "Javascript::Programming-Basics::Nested-Loops::Nested-Loops"

[slide hideTitle]

# Bucle Imbricate

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-15-16-nested-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O buclă imbricată este o construcție prin care o buclă este plasată în interiorul \(interior\) corpului celeilalte \(exterior\).

Pot exista atât bucle imbricate "**for**", cât și bucle imbricate "**while**".

Puteți imbrica **bucle for** în **bucle for**, **bucle while** în **bucle while**, dar și **bucle for** în **bucle while** și vice versa: 

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

* Atunci când buclele imbricate încep să fie executate, bucla exterioară începe mai întâi:

     * variabila de control este inițializată și după verificarea condiției buclei, codul din corpul său este executat

* După aceea, bucla interioară este executată:

     * se inițializează poziția de pornire a variabilelor de control, se verifică condiția buclei, se execută codul din corpul său

* Când valoarea specificată pentru **încheierea buclei este atinsă**, programul revine cu un pas înapoi și continuă să execute bucla anterioară (exterioară):

     * variabila de control a buclei externe se schimbă cu un pas, se efectuează o verificare pentru a vedea dacă este îndeplinită condiția finală; dacă nu - se repetă bucla (interioară)

* Aceasta se repetă până când variabila buclei exterioare îndeplinește condiția, încheind bucla


[/slide]

[slide hideTitle]

# Bucle imbricate - Exemple

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-13-14-nested-loops-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iată un **exemplu** care ilustrează buclele imbricate.

Scopul este din nou de a imprima un dreptunghi format din `n * n` stele, în care pentru fiecare linie o buclă iterează de la **1** la `n`, iar pentru fiecare coloană se execută o buclă imbricată de la **1** până la `* n`:

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

După aceea, variabila **primei** bucle va fi incrementată și **a doua** buclă va fi executată din nou.

Bucla interioară va fi repetată de câte ori este executat corpul buclei externe, în acest caz de n ori.

[/slide]
