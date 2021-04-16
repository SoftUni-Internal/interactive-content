# Local vs. Global

[slide hideTitle]

# Var și Let

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-3-4-let-vs-var-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Tipurile diferite de date au **mărimi** diferite în memoria calculatorului.

Totul în calculatoare este reprezentat prin **unități și zerouri**, cum este de exemplu `int`, care are 32 de biți, ceea ce înseamnă că pentru a scrie `int` în memoria computerului, **este nevoie de treizeci și două de unități și zerouri.**

Astfel, noi îi spunem calculatorului că trebuie să pună deoparte treizeci și doi de biți pentru a citi numărul introdus de noi.

Pentru **numerele zecimale**, precum 3.17, calculatorul trebuie să pună deoparte 64 de biți pentru a le stoca în memorie.

Acesta este motivul pentru care avem nevoie de **tipuri de date**, pentru ca mărimea acestora să fie cunoscută programului, pentru ca acesta să funcționeze corect.

Când declarăm o variabilă și îi alocăm o **valoare**, această valoare se numește literal. 

Un literal în programare înseamnă să scriem o variabilă cu o valoare în așa fel încât un interpretor să poată **înțelege** tipul variabilei respective. 

[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) sau ES6 a introdus două noi moduri de a crea variabile - `let` și `const`. Înainte de acestea, exista și era folosită doar `var`.

`Var` este o variabilă care operează într-un domeniu numit funcțional. 

``` js live
{
  var x = 2;
}
console.log(x); // 2
```

Folosind `var`, putem accesa o variabilă înainte de a o declara:

``` js live
console.log(myVar);

var myVar = 'Peter';
```

În acest caz am obținut "**undefined**", pentru că nu știm valoarea variabilei și nici nu o putem accesa.  

Dar important este că nu a fost indicată nicio eroare și că programul funcționează. 

Acest lucru ar putea să conducă la rezultate neașteptate în program.

Dimpotrivă, când declarăm o variabilă cu `let`, aceasta este disponibilă în **domeniul blocului (block scope)**.

Tot ceea ce este inclus între **acolade** `{}` este un bloc unde sunt stocate variabilele. 

El poate fi corpul unei construcții `if`, al unei bucle, sau corpul unei funcții.

```js live
{
  let x = 2;
}
console.log(x)
```

Când declarăm o variabilă cu `let`, nu o putem accesa; dacă încercăm să o accesăm, obținem o eroare.

``` js live
console.log(myVar);

let myVar = 'Peter';
```

Vă încurajăm să folosiți `let` când **declarați variabile**, pentru că astfel vă puteți proteja de comportamente nedorite ale programului. 

[/slide]

[slide hideTitle]

# Domeniul Variabilei  

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-5-6-variable-scope-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Domeniul înseamnă **viața** variabilei sau locul unde variabila este **vizibilă**. 

În afara acestui domeniu, variabila nu poate fi accesată.

Avem **patru tipuri de domenii**, și le vom analiza pe fiecare mai în detaliu în cursul avansat de JavaScript.

## Domeniul Global

Toate variabilele pe care le-am definit în cadrul nivelului superior. 

Acestea sunt, de obicei, funcțiile pe care le folosim.

``` js
var carName = 'Volvo';
// Code here can use carName

function myFunction() {
  // Code here can also use carName
 }
```

În acest exemplu, definim variabila `carName` în domeniul global, în afara funcției. 

Drept urmare, putem s-o accesăm în toate funcțiile. .

## Domeniul Funcțional

Domeniul funcțional este **corpul funcției**, și fiecare variabilă definită în funcție există doar în corpul acelei funcții. 

``` js
function myFunction() {
   var carName = 'Volvo';
   // Only here, the code can use carName
 }
 ```

## Domeniul Blocului

Avem, de asemenea, al treilea tip de domeniu - **domeniul blocului (block scope)**. Acesta reprezintă orice corp definit între acolade `{}`.

``` js
{
  let x = 2;
} 
```

Observați că funcția este de asemenea definită cu **acolade** și este un bloc, dar aceasta este o clasă specială. 

Din cursul de bază în domeniul programării știm că putem încorpora o construcție `if-else`, dar și bucle. 

Deci putem să punem un bloc de cod în alt bloc de cod. 

## Domeniul Obiectului

Al patrulea tip de domeniu este **domeniul obiectului**, care este înrudit cu **implementarea funcțiilor**.

Vom vorbi despre acest subiect mai în detaliu în cursul avansat.

[/slide]

[slide hideTitle]

# Numirea Variabilelor

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-7-naming-variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Când creăm o variabilă folosim `cammelCase`, ceea ce înseamnă că variabila începe cu o **literă mică** și fiecare cuvânt următor începe cu o **literă mare**.

Numele țin, de asemenea, cont de scrierea cu majuscule.

Pentru a fi validă, variabila trebuie să înceapă fie cu o **literă** sau cu un simbol **underscore**, dar nu poate începe cu un număr.

`firstName, report, config, fontSize, maxSpeed`

Există cuvinte cheie în JavaScript pe care **nu le putem folosi** pentru numele variabilelor noastre:

`break, const, interface, typeof, true` etc.

Numirea variabilelor este foarte **importantă** și de asemenea și foarte dificilă.
 
Trebuie să știm pentru ce vor fi folosite variabilele în viitor, ca să știm cum le denumim.

Această regulă devine și mai importantă atunci când denumim o **funcție** sau o **clasă**, pentru că în viitor putem să adăugăm **funcționalități** funcției și trebuie să furnizăm această posibilitate în momentul denumirii funcției.  

Această regulă se aplică mai puțin funcțiilor pentru că **nu este o bună practică să schimbăm** funcționalitatea unei funcții. 

Dar această regulă se aplică integral **claselor**, pentru că o clasă poate să **crească foarte mult în timp** și numele pe care i l-am dat inițial nu i se mai potrivește. 
[/slide]
