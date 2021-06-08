# Introducere în JavaScript

[slide hideTitle]

# Limbaj de programare dinamic

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-3-4-Introduction-to-java-script-dynamic-programming-language-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JavaScript este ceea ce este cunoscut ca  **un limbaj de programare dinamic**.

Acest tip de limbaj este mai flexibil în comparație cu  **limbajele de programare statice** deoarece programatorul poate transmite parametri în timpul rulării programului și nu trebuie să definească în avans tipul variabilei.

Acesta este motivul pentru care JavaScript este numit și un limbaj **tastat dinamic**.

Putem utiliza, în esență, o singură variabilă pentru a stoca mai multe tipuri diferite de valori. 

În comparație, în **limbajele tastate static**, cum sunt Java sau C#, sunteți de obicei obligați să declarați tipurile de variabile în avans.

Când lucrați cu **limbaje de programare statice** și utilizați o variabilă pentru a stoca text, nu veți putea înlocui aceeași variabilă cu date numerice, iar încercarea va duce la o eroare.

```js
string lastPlaceVisited = "Jeffrey's Bar";

//Rezultatul de mai jos este o eroare în limbajele tastate static 

lastPlaceVisited = 777;
```

În JavaScript, puteți modifica  **tipul** unei variabile și, de asemenea, puteți adăuga unui obiect  **noi proprietăți** sau **metode** în mod dinamic (în timpul rulării programului).

```js live
var lastPlaceVisited = "Mr. Magoo's Emporium";

console.log(lastPlaceVisited);

lastPlaceVisited = 13;

console.log(lastPlaceVisited);
```

Dacă rulați codul din exemplul de mai sus, veți vedea că JavaScript acceptă atribuirea unei valori numerice, chiar dacă variabila **lastPlaceVisited** a fost folosită pentru prima dată pentru stocarea textului.

În cele din urmă, este responsabilitatea programatorului să se asigure că intrarea utilizatorului nu provoacă erori în aplicație și este tratată corect, indiferent de tip.

[/slide]

[slide hideTitle]
# Tipuri de date

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-5-data-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem împărți tipurile de date disponibile în JavaScript în două grupuri - **primitive** și **tipuri de referință**.

O variabilă căreia i se atribuie valoarea unui tip de date primitiv, deține direct valoarea datelor și nu conține proprietăți sau metode suplimentare.

Variabilele care conțin date **de referință**, cum ar fi **obiectele**, conțin de fapt referințe la locațiile de memorie ale datelor stocate în ele.

Iată un tabel care conține cele șapte tipuri de date primitive în JavaScript.

| **Tip** | **Descriere** |
| --- | --- |
| String | Reprezintă un text |
| Number | Reprezintă o valoare numerică |
| Boolean | Tip de date logic care conține `true` sau `false` |
| undefined | Atribuit automat variabilelor în momentul declarării lor |
| null | Reprezintă absența intenționată a oricărei valori a obiectului  |
| BigInt | Folosit pentru lucrul cu numere întregi foarte mari și este limitat de cantitatea de memorie disponibilă în sistem|
| Symbol | Reprezintă un identificator unic. De fiecare dată când se creează o valoare simbol, se creează o valoare unică anonimă |

[/slide]

[slide hideTitle]
# Instalarea Node.js și  Visual Studio Code

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-20-21-22-Installing-NodeJS-and-Visual-Studio-Code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Avem nevoie de **Node.js** pentru a putea executa codul JavaScript în afara browserului.

* Server-side JS runtime

[image assetsSrc="intro-to-programming-3.png" /]

Puteți descărca [Node.js](https://nodejs.org/en/download/).

[image assetsSrc="intro-to-programming-install-nodejs-1.png" /]

Selectați sistemul  de operare și procedați cu instalarea.
[image assetsSrc="intro-to-programming-install-nodejs-2.png" /]

Haideți să continuăm cu instalarea mediului integrat **Microsoft Visual Studio Code**.

Instalarea versiunilor ulterioare ale Visual Studio Code ar trebui să fie foarte asemănătoare.

[Visual Studio Code](https://code.visualstudio.com/download) (VS Code) este distribuit gratuit de către Microsoft.

Liniile următoare descriu în detalii pașii pentru instalarea  Visual Studio Code. 

După ce descărcăm fișierul de instalare și îl pornim, va apărea următorul ecran:
[image assetsSrc="intro-to-programming-install-vscode-1.png" /]

Apasăm butonul `[Next]` și vom vedea ecranul de mai jos:
[image assetsSrc="intro-to-programming-install-vscode-2.png" /]

Putem alege o locație de destinație sau o putem lăsa pe cea implicită. Apoi apăsăm din nou butonul `[Next]`.
[image assetsSrc="intro-to-programming-install-vscode-3.png" /]

Apoi, trebuie să specificăm un nume pentru folderul programului care va fi creat în meniul Start. 

Pasul următor este să punem o bifă pe aceste task-uri:
[image assetsSrc="intro-to-programming-install-vscode-4.png" /]

VS este acum pregătit pentru instalare. Apăsăm butonul `[Install]`. Asta este totul.
[image assetsSrc="intro-to-programming-install-vscode-5.png" /]

Instalarea Visual Studio începe și va apărea următorul ecran:
[image assetsSrc="intro-to-programming-install-vscode-6.png" /]

După ce a fost instalat After Visual Studio, va apărea următorul ecran. Apăsați butonul `[Launch]` pentru a porni VS.
[image assetsSrc="intro-to-programming-install-vscode-7.png" /]

La  **pornirea Visual Studio Code**, se afișează vizualizarea principală. 

[image assetsSrc="intro-to-programming-install-vscode-8.png" /]

Suntem gata să începem să folosim Visual Studio Code.
[/slide]

[slide hideTitle]

# Identificatori

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-6-Identifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Identificatorii sunt secvențe de caractere din cod utilizate pentru a identifica o anumită variabilă, funcție sau proprietate.

Când dați un nume unei variabile, îi atribuiți un identificator unic.

Iată câteva reguli care se aplică identificatorilor:

- Identificatorii sunt sensibili la **majuscule și minuscule** 
- Pot conține caractere unicode precum **literele**, **$**, **_** și **cifrele între 0-9**
- Identifiers **cannot start with a digit**

Identificatori valizi:
- `var _month = "January"`
- `function $doSomething()`
- `let moneyAmount = 131`


Identificatori nevalizi:
- `var 2price`

Identificatorii nu sunt același lucru ca șirurile, deoarece șirurile reprezintă date, în timp ce indentificatorii sunt considerați ca fiind o parte a codului 

[/slide]

[slide hideTitle]

# Valorile variabilelor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-7-8-variable-values-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare variabilă stochează o valoare în interiorul său. 

Valorile primitive sunt stochate direct în variabilă, în timp ce variabilele cărora li se atribuie valori neprimitive, păstrează referințe la acele valori.

O variabilă care a fost declarată fără nicio valoare atribuită va conține în mod implicit o valoare `undefined`.

Putem demonstra acest lucru cu un anumit cod:

```js live
let weight;
console.log(weight);
```

Imprimarea valorii  **weight** pe consolă afișează **undefined**.

JavaScript are, de asemenea, o valoare pentru variabilele care nu au fost declarate niciodată:

```js live
console.log(topScore);
```

Varabilele care nu sunt definite deloc sunt considerate `Undeclared` și încercarea de a le accesa va rezulta în **Reference Error**.

În rezumat, variabilele pot conține:
- valori de date primitive
- valori de date neprimitive (referințe în memorie)
- undeclared
- undefined 

## Declararea variabilelor

Putem utiliza `let`, `const`, sau `var` pentru a declara variabile.

Fiecare dintre acestea are un scop diferit.

**let** se folosește pentru declararea variabilelor **reatribuibile** și este  **în domeniul de aplicare a blocului**. 

Reatribuirea înseamnă că puteți schimba valoarea variabilei după atribuire. 

În domeniul de aplicare a blocului înseamnp că variabila poate fi accesatp doar în interiorul blocului în care a fost declarată. 

```js live
{
  let profession = "Lawyer";
  console.log(profession);
}

console.log(profession)
```

Exemplul de mai sus rată conceptul de **domeniul de aplicare a blocului**, deoarece variabila **profession** nu este accesibilă în afară blocului de cod; încercarea de a o log pe consolă va rezulta într-o eroare.

**const** se utilizează pentru variabile care conțin valori constante și care este puțin probabil să se schimbe în timp. 

Variabilelor Const **nu li se pot atribui valori noi** și, odată setate, încercarea de a modifica valoarea rezultă în **TypeError**.

```js live
const daysInWeek = 7;
daysInWeek = 2; //Type Error
```

**Var** este similară cu **let**, dar nu este **blocată**, ceea ce înseamnă că variabila va fi disponibilă în întreaga funcție în care este declarată.

```js live
{
  var profession = "Lawyer";
  console.log(profession);
}

console.log(profession)
```

Ultima dată când am încercat acest lucru, nu am putut loga  valoarea variabilei **profession**, dar din moment ce am folosit **var** care are un domeniu de aplicare mai mare, acest lucru funcționează bine.

Aveți grijă la utilizarea **var**, deoarece ar putea duce la un comportament neașteptat.

Declararea variabilelor cu **let** este în general considerată mai sigură, deoarece domeniul lor de aplicare este mult mai limitat.

**Var** este **în domeniul de aplicare a funcției** și va fi disponibilă numai în cadrul funcției în care a fost definită.

```js live
function announceProfession() {
  var profession = "Software Architect";
  console.log(profession);
}

console.log(profession)
```

Codul de mai sus rezultă în **ReferenceError** pentru că **var** este **function-scoped**.

[/slide]

[slide hideTitle]

# Domeniile de aplicare a variabilelor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-9-variable-scopes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există câteva diferite tipuri de domenii de aplicare a variabilelor în JavaScript.

Haideți să vedem trei dintre acestea: 

- **Global scope** - aceasta este zona din afara oricărei funcții sau blocuri de cod; există un singur domeniu global în program

```js live
var subject = 'Applied Physics'
console.log(subject); //Applied Physics

function getSubject() {
  console.log(subject); //still accessible
}

getSubject();   
```

- **Function scope** - aceasta este zona de cod dintr-o declarație de funcție; variabilele domeniului funcției sunt disponibile numai în cadrul funcției declarate

```js live
function displayName() {
  var name = 'Leon';
  console.log('functions-scoped: ', leon);
}

displayName(); 
console.log(name); //error
```

În exemplul de mai sus, logarea variabilei **name** din interiorul funcției funționează, dar încercarea de a o accesa din afara domeniului funcției va rezulta într-o eroare.


- **Block scope** - zona de cod într-un bloc de cod semnificat printr-o pereche de acolade `{ }`

```js live
function checkStatus() {
  if (true) {
    let status1 = 'DISCONNECTED'; 
    var status2 = 'OK'; 
    const status3 = 'DENIED'; 

  }
  //console.log(status1);
  console.log(status2);
  //console.log(status3);
}

checkStatus();
```

Rulați codul de mai sus și veți vedea valoarea  **status2** imprimată pe consolă.

Acest cod funcționează, deoarece  **var** este în domeniul de aplicare a funcției.

Acum ștergeți comentariile pentru  **status1** sau **status3** ( ``//`` din fața funcției ``console.log()`` ) și rulați codul încă o dată.

Acest lucru provoacă imediat o eroare deoarece **let** și **const** sunt ambele în domeniul blocului și pot fi utilizate numai în blocul de cod if. 

[/slide]

[slide hideTitle]

# Tastarea dinamică

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/00-Syntax-Statements-Functions/js-advanved-syntax-functions-and-statements-10-dynamic-typing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Din cauză că JavaScript este un limbaj tastat dinamic, variabilele declarate nu sunt **asociate direct** cu un anumit tip de valoare.

Atâta timp cât nu ați declarat o variabilă cu cuvântul cheie **const**, oricărei variabile i se pot atribui și reatribui
diferite valori de orice tip.

```js live
let myVariable = "Gone with the wind"; //String
console.log(myVariable);

myVariable = 15; //Turns into a number
console.log(myVariable);

myVariable = false; //And now a boolean value
console.log(myVariable);
```

Doar pentru că puteți stoca orice tip de valoare într-o singură variabilă, aceasta nu înseamnă că ar trebui.

De cele mai multe ori, aceasta este considerată o practică proastă și trebuie evitată, deoarece fiecare variabilă ar trebui să îndeplinească un scop.


[/slide]
