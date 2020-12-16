[slide] / [diapozitiv]
# Ce este codarea?
[vimeo-video]
[stream language / fluxul de limbaj = "EN" videoId = "486831827 / 419d467fd3" implicit /]
[stream language / fluxul de limbaj = "RO" videoId = "486831827 / 419d467fd3" /]
[/video-vimeo]
**A programa**, exprimat în termeni simpli, înseamnă a **da comenzi** computerului.
Câteva exemple de bază sunt:
- `a crea un sunet`
- `a lista ceva de pe ecran`
- `a multiplica două numere`
Când avem o succesiune de comenzi,urmându-se unul pe celalalt- aceasta ar putea fi numită un **program de computer**
Textul, care este folosit pentru realizarea unui program de computer, se numește **cod de program** sau **cod sursă**, sau adesea doar **cod**.
Exemplu de comandă al unui computer:
```js live
console.log ("Bine ati venit la codare");
```

[/slide]
[slide]
# Programe de calculator
[vimeo-video]
[stream language / fluxul de limbaj = "EN" videoId = "486832336 / e4188d5010" implicit /]
[stream language / fluxul de limbaj = "RO" videoId = "486832336 / e4188d5010" /]
[/video-vimeo]
Programele de computer reprezintă **o secvență de comenzi** care sunt scrise într-un anumit **limbaj de programare**, cum ar fi: C #, Java, JavaScript, Python, C ++, PHP, C, Ruby, Swift, Go sau altul.
Exemplu de **program de computer** în JS:
```js live
lasam dimensiunea = 5;

console.log ("Size = " + size);
console.log ("Area = " + size * size);
```
Programul de mai sus definește o funcție care deține o secvență de **3 comenzi** și o numește după aceea:
- Declară și atribuie o **variabilă**: `let size = 5`
- Calculează și **imprimă** o **expresie**: `console.log ("Size = " + size)`
- Calculează și **imprimă** o **expresie**: `console.log (" Area = "+ size * size)`
- Rezultatul (output) executării programului de mai sus este după cum urmează:
""
Size = 5
Area = 25
**Vom explica în detaliu cum să scriem programe în JavaScript**, de ce trebuie să definim o **funcție** și apoi aplicam funcția - puțin mai târziu.
Deocamdată, să spunem doar că **limbajul de programare JavaScript** necesită tot codul de mai sus pentru a executa o secvență de comenzi.
Pentru a **forma corect comenzile**, ar trebui să cunoaștem **sintaxa** și **semantica** a limbii cu care lucrăm, în cazul nostru - JavaScript.
De aceea, vom învăța **principiile** de a scrie computer **cod pas cu pas**, cu sintaxa și logica utilizate în JavaScript.
[/slide]
[slide]
# Algorithms
[vimeo-video]
[stream language="EN" videoId="486832885/b0c2ee91e7" default /]
[stream language="RO" videoId="486832885/b0c2ee91e7"  /]
[/video-vimeo]
Programele de calculator execută de obicei algoritmi.
**Algoritmii ** sunt**secvențe de pași**, necesari pentru finalizarea unei anumite sarcini, ceva de genul "recipes".
De exemplu, dacă vrem să fierbem un ou, vom urma **câțiva pași** (un algoritm):
- porniți aragazul
- luați o oală și turnați apă în ea
- puneți oala pe aragaz și puneți oul înăuntru
- așteptați să fiarbă apa și scoateți ouăle după 5 minute
În mod similar, în programarea **programul de calculator execută algoritmi**: o succesiune de comenzi, necesare pentru finalizarea unei anumite sarcini.
De exemplu, pentru a aranja o secvență de numere într-o **ordine crescătoare**, este necesar un algoritm pentru a găsi **cel mai mic număr** și a-l plasa la **începutul secvenței**.
Apoi găsiți **cel mai mic numar** din numerele rămase și puneți-l în **locul doi** și **repetați acești pași** până când algoritmul trece prin el și ordona/aranjeaza toate numerele.
Un instrument foarte convenabil la scrierea **codului de programare**, utilizat pentru executarea programelor și a multor operații legate de programare, este un** mediu de dezvoltare integrat**.
Acesta este un exemplu foarte simplu de algoritm care găsește cel mai mic număr dintr-o matrice.
Noi vom discuta referitor la matricele mai târziu.
``` js live
let arr = [15, 2, 42, 55, 123, 8, 52, 67, 75, 4]
let min = Math.min(...arr)

console.log(min)
```
[/slide]

[slide]
Program JavaScript bazat pe console – Exemplu
[vimeo-video]
[stream language="EN" videoId="486834408/4266dce8e6" default /]
[stream language="RO" videoId="486834408/4266dce8e6"  /]
[/video-vimeo]

Să vedem un program simplu care ia **o sumă de bani în dolari SUA (USD)** - un număr întreg, îl convertește în **Euro (EUR)** înmulțindu-l cu cursul de schimb și imprimă rezultatul obținut.
Acesta este un program de 3 comenzi consecutive:
```js
functia convertUsdToEur(input) {
  let dollars = Number.parseFloat(input);
  let euro = dollars * 0.883795087;
  console.log("Euro: " + euro);
}
convertUsdToEur("5");
```
[/slide]
[slide]
# Browser-Based JavaScript Program – Example
[vimeo-video]
[stream language="EN" videoId="486834720/d1ce0ef921" default /]
[stream language="RO" videoId="486834720/d1ce0ef921"  /]
[/video-vimeo]
În acest exemplu, putem importa și utiliza o funcție în pagina noastră de web.
Folosind blocul de cod din exemplu, creăm o casetă de text ca în diapozitiv.
``` html
<html><body>
  <script src="converter.js"></script>
  Dollars: <input type="text" id="dollarsBox" />
  <button onclick="convertUsdToEur()">Convert</button>
  Euro: <input type="text" id="eurosBox" readonly />
</body></html>
```
Este important să introduceti funcția `convertUsdToEur() în scriptul nostrum de html.
De asemenea, avem două casete de text - **Dollars:** and **Euro:**.

[/slide]



