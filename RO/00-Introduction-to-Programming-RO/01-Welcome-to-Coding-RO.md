// sectionId: "Javascript::Programming-Basics::Introduction-to-Programming::Welcome-To-Coding"

[slide hideTitle]
# Ce Este Codarea?

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-3-4-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**A programa**, exprimat în termeni simpli, înseamnă a **da comenzi** computerului.
Câteva exemple de bază sunt:

- A crea un sunet
- A lista ceva de pe ecran
- A multiplica două numere

Un program de computer este o secvență de instrucțiuni pe care un computer le poate interpreta și executa.

Textul care este folosit pentru realizarea unui program de computer se numește **cod de program** sau **cod sursă**, sau adesea doar **cod**.

Exemplu de comandă a unui computer:

```js live
console.log ("Bine ați venit la codare");
```

[/slide]

[slide hideTitle]
# Programe de Calculator

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-5-6-Running-JavaScript-Commands-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Programele de computer reprezintă **o secvență de comenzi** care sunt scrise într-un anumit **limbaj de programare**, cum ar fi: C #, Java, JavaScript, Python, C ++, PHP, C, Ruby, Swift, Go sau altul.

Exemplu de **program de computer** în JS:

```js live
let size = 5;

console.log("Size = " + size);
console.log("Area = " + size * size);
```
Programul de mai sus definește o funcție care deține o secvență de **3 comenzi** și o apelează după aceea:

- Declară și atribuie o **variabilă**: `let size = 5`

- Calculează și **imprimă** o **expresie**: `console.log ("Size = " + size)`

- Calculează și **imprimă** o **expresie**: `console.log (" Area = "+ size * size)`

- Rezultatul (output) executării programului de mai sus este după cum urmează:

```
Size = 5
Area = 25
```

**Vom explica în detaliu cum să scriem programe în JavaScript**, de ce trebuie să definim o **funcție** și apoi cum să apelăm funcția - puțin mai târziu.

Deocamdată, să spunem doar că **limbajul de programare JavaScript** necesită tot codul de mai sus pentru a executa o secvență de comenzi.

Pentru a **forma corect comenzile**, trebuie să cunoaștem **sintaxa** și **semantica** limbajului cu care lucrăm, în cazul nostru - JavaScript.

De aceea, vom învăța **principiile** de a scrie la computer **cod pas cu pas**, cu sintaxa și logica utilizate în JavaScript.

[/slide]

[slide hideTitle]
# Algoritmi

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-7-8-9-Programming-and-Algorithms-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Programele de calculator execută de obicei algoritmi.

**Algoritmii** sunt **secvențe de pași**, necesari pentru finalizarea unei anumite sarcini, de genul unei "rețete".

De exemplu, dacă vrem să fierbem un ou, vom urma **câțiva pași** (un algoritm):

- Porniți aragazul

- Luați o oală și turnați apă în ea

- Puneți oala pe aragaz și puneți oul înăuntru

- Așteptați să fiarbă apa și scoateți ouăle după 5 minute

De exemplu, pentru a aranja o secvență de numere într-o **ordine crescătoare**, este necesar un algoritm pentru a găsi **cel mai mic număr** și a-l plasa la **începutul secvenței**.

Apoi, pentru a găsi **cel mai mic număr** din numerele rămase, puneți-l pe **locul doi** și **repetați acești pași** până când algoritmul parcurge tot și aranjează toate numerele.

Un instrument foarte convenabil pentru scrierea **codului de programare**, utilizat pentru executarea programelor și a multor operații legate de programare, este un **mediu de dezvoltare integrat**.

Acesta este un exemplu foarte simplu de algoritm care găsește cel mai mic număr dintr-o matrice.

Vom discuta despre matrice mai târziu.

``` js live
let arr = [15, 2, 42, 55, 123, 8, 52, 67, 75, 4];
let min = Math.min(...arr);

console.log(min)
```

[/slide]

[slide hideTitle]
# Program JavaScript Bazat pe Consolă - Exemplu

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-10-Console-Based-JavaScript-Program-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să vedem un program simplu care ia **o sumă de bani în dolari (USD)** , o convertește în **Euro (EUR)** înmulțindu-o cu cursul de schimb și imprimă rezultatul obținut.

Acesta este un program de 3 comenzi consecutive:

```js live
function convertUsdToEur(input) {
  let dollars = Number.parseFloat(input);
  let euro = dollars * 0.883795087;
  console.log("Euro: " + euro);
}
convertUsdToEur("5");
```
[/slide]
[slide hideTitle]
# Program JavaScript Bazat pe Browser - Exemplu

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-11-12-Console-Based-JavaScript-Program-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În acest exemplu, putem importa și utiliza o funcție în pagina noastră web.

Folosind blocul de cod din exemplu, creăm o casetă de text ca în diapozitiv.

```js
<html><body>
  <script src="converter.js"></script>
  Dollars: <input type="text" id="dollarsBox" />
  <button onclick="convertUsdToEur()">Convert</button>
  Euro: <input type="text" id="eurosBox" readonly />
</body></html>
```

Este important să introduceti funcția `convertUsdToEur()` în scriptul nostru de html.

[/slide]



