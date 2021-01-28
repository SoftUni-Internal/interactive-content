[slide hideTitle]
# Console App in VS Code

[vimeo-video]
[stream language="EN" videoId="486835903/f8f0434f30" default /]
[stream language="RO" videoId="486835903/f8f0434f30"  /]
[/video-vimeo]

Avem deja instalat Visual Studio Code și îl putem starta.

Creați un folder pentru proiectul dvs. și deschideți-l in VS Code:
\[File\] -> \[Open Folder\]

[image assetsSrc="intro-to-programming-4.png" /]

Creați un fișier hello.js pentru a organiza codul sursă al programului dumneavoastră

[image assetsSrc="intro-to-programming-5.png" /]

[/slide]

[slide hideTitle]
# Writing the Program Code

[vimeo-video]
[stream language="EN" videoId="486835933/467020ce79" default /]
[stream language="RO" videoId="486835933/467020ce79"  /]
[/video-vimeo]

Codul sursă al programului JS ar trebui să fie scris într-o funcție, pe care o invocăm mai târziu
 pentru a o rula.

Apăsați `[Enter]` dupa ce **ați deschis parantezele** `{` și  **începeți să scrieți**.

Codul programului este scris în interior, deoarece aceasta este o parte a modelării textului pentru comoditate în timpul unei revizuiri și / sau depanare.

Scrieți următoarea comandă:

```js
console.log("Hello, JavaScript!");
```

In așa fel ar trebui să arate programul dvs. în Visual Studio Code:

[image assetsSrc="intro-to-programming-9.png" /]

Comanda  `console.log("Hello JS")` in JavaScript înseamnă că tipărim ceva `log (...)` pe consolă `console` în cazul nostru pentru a imprima mesajul **Hello JS**, pe care ar trebui să îl înconjurăm cu ghilimele.

Pentru a clarifica, aceasta este un text.

La sfârșitul fiecărei comenzi în JavaScript se pune simbolul `;` și se spune că comanda curentă se termină (nu continuă pe linia următoare).

Această comandă este foarte tipică în programare: deci, ar trebui să găsim un anumit ** obiect ** (în acest caz aceasta este consola) și ar trebui executată o acțiune în acest obiect** (în acest caz este tipărirea textului în paranteze).

[/slide]

[slide hideTitle]
# Starting the Program

[vimeo-video]
[stream language="EN" videoId="486836101/b0f9ba7bd8" default /]
[stream language="RO" videoId="486836101/b0f9ba7bd8"  /]
[/video-vimeo]

Pentru a porni programul, apăsați \ [Ctrl + F5 \]


Rezultatul va apărea în tabul \ [Debug Console \]

[image assetsSrc="intro-to-programming-6.png" /]

După cum puteți vedea, rezultatul programului este următorul mesaj:
```
Hello, JavaScript!
```
În tastele VS Code \ [F5 \] / \ [Ctrl + F5 \] se execută cel mai vechi fișier creat `.js`

Dacă aveți mai multe fișiere `.js` în codul VS, vă recomandăm să porniți fișierul curent cu \ [F5 \] / \ [Ctrl + F5 \] \ - \>edit the launch configuration

[image assetsSrc="intro-to-programming-7.png" /]

Alternativ, utilizați extensia „Code Runner”

[image assetsSrc="intro-to-programming-8.png" /]
[/slide]

