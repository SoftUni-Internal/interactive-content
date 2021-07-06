// sectionId: "Javascript::Programming-Basics::Expressions-And-Statements::Lesson-Introduction"

# Introducere
[slide hideTitle]

# Conținutul Lecției

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-1-2-Introduction-table-of-contents-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În cadrul acestei lecții veți învăța despre:

**1. Variabile: Cum le declarăm, cum le citim și cum le modificăm**

- Crearea și utilizarea variabilelor

**2. Tipurile de date: Numere, Text, Alte tipuri**

- Diferitele tipuri de date în JavaScript

**3. Instrucțiuni (comenzi)**

- Cum să scrieți comenzi

**4. Citirea datelor de intrare ale utilizatorilor și formatarea datelor de ieșire**

- Cum să imprimați rezultatul în consolă

**2. Operatorii aritmetici: +, -, * și /**

- Cum să manipulați variabile

**6. Expresii**

- Cum să combinați valori și operatori

**7. Exerciții practice**


[/slide]

# Variabilele și Stocarea Datelor

[slide hideTitle]
# Exemplu din Viața Reală

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-4-5-6-Real-life-example-Variables-NEW-RO-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Dacă ne gândim la variabile ca la niște cutii care conțin informații, putem vedea în imaginea de mai jos cum ar arăta ele:

[image assetsSrc="expressions-and-statements-boxes.png" /]

Majoritatea aplicațiilor noastre trebuie să lucreze cu informații.

Putem folosi variabilele pentru a stoca toate tipurile de date de care avem nevoie.

[/slide]


[slide hideTitle]
# Definiția Variabilelor

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-5-6-What-are-variables-and-how-are-they-used-in-computing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În programare, fiecare **variabilă** stochează o anumită valoare de un anumit tip. 

De exemplu, tipurile de date pot fi: 

* Date numerice (stochează un număr): 1, 2, 3.14, -1, 1.5e38 

* Date sub formă de text (string): 'Hello', "Hi", "How are you?"

* Date de tip boolean: adevărat sau fals

Ne putem imagina **variabilele** ca niște containere de date sau ca niște zone specificate în memorie.  

Datele stocate de acestea pot fi citite și modificate în orice moment. 
[/slide]

[slide hideTitle]
# Crearea unei Variabile

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-7-8-8-demo-Variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Variabilele pot fi stocate în următoarele spații ale unui program:

* În memoria operațională: în **stack-ul** de execuție

* În memoria dinamică: în **heap**

În principiu, **variabilele** furnizează mijloace pentru:

* **Stocarea** datelor

* **Recuperarea** datelor stocate

* **Modificarea** datelor stocate

Ele se caracterizează prin:

* Nume (identificator)

* Tip (al informației pe care o păstrează)

* Valoare (informația stocată)

Fiecare variabilă în JavaScript are un nume, un tip și o valoare. 

Iată cum vom declara o variabilă și cum îi vom aloca, simultan, și o valoare:

```js
let name = "Bob";
let employed = true;
let age = 35;
```
[/slide]

[slide hideTitle]
# Instrucțiuni de Declarare a Variabilelor

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/01-PB-JavaScript-expressions-and-statements-9-10-Declaration-statements-let-var-const-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Instrucțiunile care declară variabilele în JavaScript sunt: `let`, `var` și `const`

* `let`: declară o variabilă, opțional o și inițializează

``` js live
let age = 25;
console.log("Age:", age); 
```

* `var`: similar enunțului `let`, cu mențiunea că acordă o arie de cuprindere mai mare

``` js live
var productID = 120491283761;
console.log(productID); 

```

* `const`: declară o constantă care poate fi doar citită (read-only)

``` js live
const name = "Peter";
console.log(name);
```
[/slide]
