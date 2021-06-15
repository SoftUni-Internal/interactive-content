# Serverul web Node.js

[slide hideTitle]

# Serverele Web

Deși împărtășesc același cuvând, **serverele web sunt foarte diferite de serverele fizice tipice**.

Serverele fizice tipice sunt acele **bucăți mari de infrastructură hardware**, controlate de un sistem de operare și depozitate în locuri largi și răcoroase.

Serverele web, pe de altă parte, sunt **doar programe software, care operează cu cereri web** folosind un sistem de operare.

Aveți aici o imagine care reprezintă modul de funcționare a serverelor web:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-3.png" /]

Așa cum puteți vedea din diagramă, **clientul** trimite o cerere către **server**, pe care acesta o preia și **se ocupă de ea**.

Pentru a face acest lucru, serverul se conectează la **baza de date**, unde sunt depozitate toate informațiile.

În funcție de răspunsul bazei de date, el trimite un status adecvat al **codului**, împreună cu **datele** (de obicei în forma **JSON**), atunci când este cazul. 

[/slide]

[slide hideTitle]

# Serverul web Node.js

53-node.js-web-server
creating-a-web-server

Node.js permite crearea într-un mod **simplu** și **facil** a unui server web.

Întregul proces poate fi realizat cu câteva linii de cod:

```js
const http = require("http");

http.createServer((req, res) => {
    res.write("This text will be sent to the client.");
    res.end();
}).listen(3000);

console.log("Node.js server running on port 3000");
```

Codul de mai sus reprezintă **minimul de bază** necesar inițializării unui server web utilizând Node.js.

Metoda `createServer` creează un server HTTP.

Acest server este un obiect cu metode multiple, precum:

- `listen(port)` - folosită pentru a face ca serverul să asculte un **port** local specific
- `close()` - închide conexiunea, împiedicând serverul să accepte noi legături
- `setTimeout()` - setează valoarea de odihnă (timeout) a serverului
  * are valoarea de bază **2000** (2 minute)

Serverul este acum pregătit să **preia și să rezolve cerințe primite** și **să trimită date clientului**.

[/slide]