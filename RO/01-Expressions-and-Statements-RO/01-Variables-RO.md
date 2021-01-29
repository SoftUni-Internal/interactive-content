# Variabilele și stocarea datelor

[slide hideTitle]
# Exemplu din viața reală

[vimeo-video]
[stream language="EN" videoId="486854871/0266769f7d" default /]
[stream language="RO" videoId="486854871/0266769f7d"  /]
[/video-vimeo]

Dacă ne gândim la variabile ca la niște cutii care conțin informații, putem vedea în imaginea de mai jos cum ar arăta ele:

[image assetsSrc="expressions-and-statements-boxes.png" /]

Majoritatea aplicațiilor noastre trebuie să lucreze cu informații.

Putem folosi variabilele pentru a stoca toate tipurile de date de care avem nevoie.

[/slide]


[slide hideTitle]
# Definiția variabilelor

[vimeo-video]
[stream language="EN" videoId="486854872/71ae21e1d5" default /]
[stream language="RO" videoId="486854872/71ae21e1d5"  /]
[/video-vimeo]

În programare, fiecare **variabilă** stochează o anumită valoare de un anumit tip. 

De exemplu, tipurile de date pot fi: 

* date numerice (stochează un număr): 1, 2, 3.14, -1, 1.5e38 etc.

* date sub formă de text (string): 'Hello', "Hi", "How are you?" etc.

* date de tip boolean: adevărat sau fals

Ne putem imagina **variabilele** ca niște containere de date sau ca niște zone specificate în memorie.  

Datele stocate de acestea pot fi citite și modificate în orice moment. 
[/slide]

[slide hideTitle]
# Crearea unei variabile

[vimeo-video]
[stream language="EN" videoId="486854948/925f8eaf2d" default /]
[stream language="RO" videoId="486854948/925f8eaf2d"  /]
[/video-vimeo]

Variabilele pot fi stocate în următoarele spații ale unui program:

* În memoria operațională: în **stack-ul** de execuție

* În memoria dinamică: în **heap**

În principiu, **variabilele** furnizează mijloace pentru:

* **Stocarea** datelor

* **Recuperarea** datelor stocate

* **Modificarea** datelor stocate

Ele se caracterizează prin:

* nume / denumire (identificator)

* tip (al informației pe care o păstrează)

* valoare (informația stocată)

Fiecare variabilă în JavaScript are un nume, un tip și o valoare. 

Iată cum vom declara o variabilă și cum îi vom aloca, simultan, și o valoare:

```js
let name = "Bob";
let employed = true;
let age = 35;
```
[/slide]

[slide hideTitle]
# Instrucțiuni de declarare a variabilelor

[vimeo-video]
[stream language="EN" videoId="486855151/43dc67876d" default /]
[stream language="RO" videoId="486855151/43dc67876d"  /]
[/video-vimeo]

Enunțurile care declară variabilele în JavaScript sunt: `let`, `var` și `const`

* `let`: declară o variabilă, opțional o și inițializează

``` js live
let age = 25;
console.log("Age:", age); 
```

* `var`: similar enunțului `let`, cu mențiunea că acordă o arie de cuprindere mai mare

``` js live
function example() {
  var productID = 120491283761;
  console.log(productID); 
}
example();

```

* `const`: declară o constantă care poate fi doar citită (read-only)

``` js live
const name = "Peter";
console.log(name);
```
[/slide]
