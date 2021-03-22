# Cuvântul cheie "this"

[slide hideTitle]

# Contextul funcției

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-3-4-what-is-this-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Contextul funcției** se referă la obiectul care **deține** codul, care este în curs de executare.

Contextul depinde de modul în care funcția este invocată .

Funcțiile pot fi apelate în mai multe moduri diferite:
 - Global invoke: `func()` - `this` este o funcție globală
 - `object.function()` - `this` este o metodă, eliminată în contextul unui obiect
 - `domElement.event()` - invocat pe un element DOM

 Putem schimba manual contextul unei funcții folosind `call()`, `apply()` și `bind()`.

 **Contextul funcției** și obiectul `this` sunt termeni care pot fi folosiți în mod interschimbabil.
 
[/slide]

[slide hideTitle]

# Ce este "this" 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-5-this-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Valoarea `this` este întotdeauna o referință la un obiect - obiectul de la care a fost chemat. 

Cu alte cuvinte- `this` face referire la obiectul care execută funcția curentă.

Scopul lecției curente va fi să înțelegem cum se comportă `this` în **mod non-strict**. 

Rețineți că în **modul strict** există diferențe, iar `this` poate avea orice valoare.

Obiectul la care se face referire prin `this` **se modifică** când se schimbă contextul de execuție.
[/slide]

[slide hideTitle]

# "this" prin referire la obiectul global 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-6-this-refers-to-the-global-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Dacă `this` este folosit singur, acesta returnează întotdeauna obiectul global - `Object [global]`

```js live
function testThis() {
    return this;
}
console.log(testThis() === global);
```

Când este rulat, exemplul de mai sus returnează **true**, ceea ce înseamnă că `this` este într-adevăr **egal cu obiectul global**.

[/slide]

[slide hideTitle]

# "this" în Browser

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-7-this-keyword-in-the-browser-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Obiectul global** din browser-ul este **window**. 

Rulați următoarele exemple în consola browserului dvs. pentru a le vedea în acțiune!

```js
function thisInBrowser() {
    console.log('Simple function call');
    console.log(this === window);
}
thisInBrowser();
 ```

[image assetsSrc="function-context-01.png" /]

Exemplul de mai sus ilustrează că `this` este egal cu obiectul **window**.

```js
let name = 'Arthur';
console.log('My name is', this.name);
```

Rularea codului de mai sus apare un rezultat **undefined** pe consolă

Acest lucru se datorează faptului că variabilele declarate cu `let`, au un domeniu limitat și nu sunt atașate la obiectul global.

[image assetsSrc="function-context-02.png" /]

```js
var anotherName = 'Chris';
console.log('My name is ', this.anotherName);
```

`this.anotherName` returnează valoare de **anotherName**, deoarece variabilele, declarate cu `var`, au un domeniu mai larg și sunt atașate la obiectul global (în acest caz la **window**).

[image assetsSrc="function-context-03.png" /]

**Notă: Declararea unei variabile cu "let" sau "var" returnează "undefined" in NodeJS.**

[/slide]

