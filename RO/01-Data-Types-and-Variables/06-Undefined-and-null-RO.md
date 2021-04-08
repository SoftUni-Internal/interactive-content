# Undefined și Null

[slide hideTitle]
# Undefined

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-30-31-undefined-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="Undefined-Null.png" /]

Când declarăm o variabilă **fără valoare**, aceasta este undefined (nedefinită).

În codul nostru putem **seta o variabilă** ca fiind nedefinită într-o etapă ulterioară.

Dacă ceva există **dar nu i se acordă o valoare, aceasta este nedefinită**.

Dacă încercăm să accesăm un parametru care nu este specificat într-o funcție, vom primi undefined.

``` js live
let car;
console.log(car);
```

O altă posibilitate de a avea undefined este atunci când **setăm manual valoarea unei variabile.**

``` js live
let car = undefined;  
console.log(car);
```

[/slide]

[slide hideTitle]

# Null

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-32-null-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Null este un **tip de obiect**, care poate fi utilizat pentru orice variabilă care deține un obiect care nu vrem să fie nedefinit.

De exemplu, acest lucru este valabil când avem o funcție care **returnează un obiect** sau o funcție care trebuie să citească ceva din **baza de date** **și să returneze un obiect**.

În cazul în care funcția **nu găsește ceea ce caută**, îi spunem să returneze "null" și apoi putem verifica dacă funcția returnează "null". 

``` js live
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50
};

person = null;
console.log(person);
console.log(typeof(person));

```
[/slide]

[slide hideTitle]

# Null și Undefined

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-33-null-and-undefined-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Null** este o valoare pe care o setăm pentru a ști că nu este **nimic** în interior, adică setăm valoarea nulă **în mod explicit**.

Undefined apare atunci când valoarea **nu există** sau este declarată, dar nu este setată la o valoare.

De asemenea, Undefined se obține la executarea programului, adică primim acest lucru implicit.

Null și Undefined sunt de diferite tipuri:

``` js live
console.log(typeof null);
console.log(typeof undefined);
```

Dar sunt egali când se aplică un operator de identitate:

``` js live
console.log(null !== undefined);
console.log(null == undefined);
```

[/slide]
