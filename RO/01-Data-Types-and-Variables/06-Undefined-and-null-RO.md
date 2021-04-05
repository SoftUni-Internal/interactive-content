# Undefined și Null

[slide hideTitle]
# Undefined

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-30-31-undefined-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când declarăm o variabilă **fără valoare**, aceasta este nedefinită.

Putem **seta o varibilă** la etapa ulterioară nedefinită din codul nostru.

Dacă ceva există **dar nu i se acordă o valoare, aceasta este nedefinită**.

Dacă încercăm să accesăm un parametru care nu este specificat într-o funcție, vom ajunge la nedefiniți.

``` js live
let car;
console.log(car);
```

O altă posibilitate de a avea nedefinit este atunci când **setăm manual valoarea unei variabile.**

``` js live
let car = undefined;  
console.log(car);
```

[/slide]

[slide hideTitle]

# Null

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/01.JS-Fundamentals-Data-types-and-variables/01.JS-Fundamentals-Data-types-and-variables-32-null-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Nul este un tip de obiect, care poate fi utilizat pentru orice variabilă care deține un obiect pe care nu vrem să-l definim.

De exemplu, când avem funcția de a **returna un obiect** sau o funcție care trebuie să citească ceva din baza de date **și să returneze un obiect**.

În cazul în care funcția **nu găsește ceea ce caută**, spunem să se returneze în nul și apoi putem verifica dacă funcția se returnează în nul. 

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

**Null** este o valoare pe care o setăm și știm că nu este nimic în interior, adică setăm valoarea nulă în mod explicit.

Nedefinit apare atunci când valoarea nu există sau este declarată, dar nu este setată la o valoare.

De asemenea, Nedefinit se obține din executarea programului, adică primim implicit.

Nul și Nedefinit sunt de diferite tipuri.

``` js live
console.log(typeof null);
console.log(typeof undefined);
```

Dar sunt egali ca operator de identitate.

``` js live
console.log(null !== undefined);
console.log(null == undefined);
```

[/slide]
