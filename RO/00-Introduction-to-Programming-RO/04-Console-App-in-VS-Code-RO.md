// sectionId: "Javascript::Programming-Basics::Introduction-to-Programming::Console-App-In-VS-Code"
[slide hideTitle]
# Aplicații de Consolă în VS Code

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-30-31-Creating-a-console-application-in-VSC-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Avem deja instalat Visual Studio Code și îl putem deschide.

Creăm un folder pentru proiectul nostru și îl deschidem in VS Code:
`[File] -> [Open Folder]`

[image assetsSrc="intro-to-programming-4.png" /]

Creăm un fișier numit **hello.js** care va conține codul sursă al programului nostru:

[image assetsSrc="intro-to-programming-5.png" /]

[/slide]

[slide hideTitle]
# Scrierea Codului Programului

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-32-32-Demo-Writing-the-program-code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Codul sursă al programului JS trebuie să fie scris într-o funcție, pe care o invocăm mai târziu pentru a-l rula.

Apăsați `[Enter]` dupa ce **ați deschis parantezele** `{` și  **începeți să scrieți**.

Codul programului este scris în interior, deoarece aceasta este o parte a modelării textului pentru comoditate în timpul unei revizuiri și/sau depanări.

Scrieți următoarea comandă:

```js
console.log("Hello, JavaScript!");
```

În felul următor ar trebui să arate programul nostru în Visual Studio Code:

[image assetsSrc="intro-to-programming-9.png" /]

Comanda `console.log("Hello JS")` în JavaScript înseamnă că tipărim ceva `log (...)` pe consolă `console`. În cazul nostru, imprimăm mesajul **Hello JS**, pe care trebuie să îl încadrăm între ghilimele pentru a clarifica faptul că acesta este un text.

La sfârșitul fiecărei comenzi în JavaScript se pune simbolul `;`, ceea ce înseamnă că comanda curentă se termină (nu continuă pe linia următoare).

[/slide]

[slide hideTitle]
# Pornirea Programului

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-33-Starting-the-program-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a porni programul, apăsați `[Ctrl + F5]`.

Rezultatul va apărea în tab-ul `[Debug Console]`:

[image assetsSrc="intro-to-programming-6.png" /]

După cum puteți vedea, rezultatul programului este următorul mesaj:
```
Hello, JavaScript!
```
În VS Code, prin utilizarea tastelor `[F5]` sau `[Ctrl+F5]`, vom executa cel mai vechi fișier `.js` creat.

Dacă avem mai multe fișiere `.js` în VS Code și dorim să rulăm fișierul curent cu `[F5]` sau `[Ctrl + F5]`, trebuie să modificăm configurația de pornire.

[image assetsSrc="intro-to-programming-7.png" /]

Alternativ, utilizați extensia "**Code Runner**":

[image assetsSrc="intro-to-programming-8.png" /]
[/slide]

