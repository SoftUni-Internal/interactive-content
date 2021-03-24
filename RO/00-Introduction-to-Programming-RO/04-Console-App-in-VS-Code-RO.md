// sectionId: "Javascript::Programming-Basics::Introduction-to-Programming::Console-App-In-VS-Code"
[slide hideTitle]
# Aplicații de Consolă în VS Code

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-30-31-Creating-a-console-application-in-VSC-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Avem deja instalat Visual Studio Code și îl putem deschide.

Creați un folder pentru proiectul dvs. și deschideți-l in VS Code:
`[File] -> [Open Folder]`

[image assetsSrc="intro-to-programming-4.png" /]

Creați un fișier **hello.js** care să conțină codul sursă al programului vostru:

[image assetsSrc="intro-to-programming-5.png" /]

[/slide]

[slide hideTitle]
# Scrierea Codului Programului

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-32-32-Demo-Writing-the-program-code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Codul sursă al programului JS ar trebui să fie scris într-o funcție, pe care o invocăm mai târziu pentru a-l rula.

Apăsați `[Enter]` dupa ce **ați deschis parantezele** `{` și  **începeți să scrieți**.

Codul programului este scris în interior, deoarece aceasta este o parte a modelării textului pentru comoditate în timpul unei revizuiri și / sau depanare.

Scrieți următoarea comandă:

```js
console.log("Hello, JavaScript!");
```

În felul următor ar trebui să arate programul dvs. în Visual Studio Code:

[image assetsSrc="intro-to-programming-9.png" /]

Comanda  `console.log("Hello JS")` în JavaScript înseamnă că tipărim ceva `log (...)` pe consolă `console` în cazul nostru pentru a imprima mesajul **Hello JS**, pe care ar trebui să îl înconjurăm cu ghilimele.

Pentru a clarifica, acesta este un text.

La sfârșitul fiecărei comenzi în JavaScript se pune simbolul `;` și se spune că comanda curentă se termină (nu continuă pe linia următoare).

Această comandă este foarte tipică în programare: deci, ar trebui să găsim un anumit **obiect** (în acest caz acesta este consola) și ar trebui executată o acțiune în acest obiect** (în acest caz este tipărirea textului în paranteze).

[/slide]

[slide hideTitle]
# Pornirea Programului

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-33-Starting-the-program-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a porni programul, apăsați `[Ctrl + F5]`

Rezultatul va apărea în tab-ul `[Debug Console]`

[image assetsSrc="intro-to-programming-6.png" /]

După cum puteți vedea, rezultatul programului este următorul mesaj:
```
Hello, JavaScript!
```
În VS Code tastele `[F5]`/`[Ctrl+F5]` execută cel mai vechi fișier creat `.js`

Dacă aveți mai multe fișiere `.js` în VS Code, vă recomandăm să porniți fișierul curent cu `[F5]`/`[Ctrl + F5]` \-\> edit the launch configuration

[image assetsSrc="intro-to-programming-7.png" /]

Alternativ, utilizați extensia "**Code Runner**"

[image assetsSrc="intro-to-programming-8.png" /]
[/slide]

