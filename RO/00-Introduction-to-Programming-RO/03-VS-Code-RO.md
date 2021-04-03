// sectionId: "Javascript::Programming-Basics::Introduction-to-Programming::VS-Code"

[slide hideTitle]
# Medii de Dezvoltare (IDE) 

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-17-18-19-Integrated-Development-Environments-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a programa, avem nevoie de un **mediu de dezvoltare integrat** (IDE).

Un **mediu de dezvoltare integrat** (sau IDE) este o combinație de instrumente tradiționale pentru crearea de aplicații software.

În mediul de dezvoltare putem **scrie cod**, **compila** și **executa programe**.

Mediile de dezvoltare integrează de obicei un **editor de text**, un **limbaj de programare**, un **compilator** sau un **interpretor** și un mediu de rulare pentru **executarea programelor**.

De asemenea, pot conține un **depanator** pentru urmărirea programului și căutarea erorilor, și instrumente pentru **proiectarea interfeței cu utilizatorul** sau alte utilități și programe suplimentare.

Mediile de dezvoltare sunt convenabile, deoarece integrează **tot ce este necesar pentru dezvoltarea** unui program, în unele cazuri chiar și fără a fi nevoie de instrumente externe.

Dacă nu folosim un IDE, ar trebui să scriem codul într-un **editor de text**, să-l compilăm cu o comandă de pe consolă, să-l rulăm cu o altă comandă de consolă și, eventual, să includem comenzi suplimentare ori de câte ori este nevoie, ceea ce este un consum foarte mare de timp.

Pentru programarea cu **JavaScript**, IDE-ul cel mai frecvent utilizat este [Visual Studio Code](https://code.visualstudio.com), care este dezvoltat și distribuit în mod liber de Microsoft.

Unele dintre alternativele **populare** pentru Visual Studio Code sunt:

- [WebStorm](https://www.jetbrains.com/webstorm/download)

- [Atom](https://atom.io)

- [NetBeans](https://netbeans.org/downloads/)

- [Visual Studio](https://visualstudio.microsoft.com/downloads/)

- [Eclipse](https://www.eclipse.org/downloads/)

În acest curs, vom folosi **Visual Studio Code.**

Acesta este un exemplu al modului în care arată Visual Studio Code:

[image assetsSrc = "intro-to-programming-6.png" /]

[/slide]
[slide hideTitle]
# Instalarea Node.js și Visual Studio Code

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-20-21-22-Installing-NodeJS-and-Visual-Studio-Code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Avem nevoie de **Node.js**, astfel încât să putem executa cod JavaScript în afara unui browser.

* Rularea JS pe partea de server

[image assetsSrc="intro-to-programming-3.png" /]

Puteți descărca [Node.js](https://nodejs.org/en/download/).

[image assetsSrc="intro-to-programming-install-nodejs-1.png" /]

Selectați OS-ul vostru și continuați cu instalarea.

[image assetsSrc="intro-to-programming-install-nodejs-2.png" /]

Să continuăm cu instalarea mediului integrat **Microsoft Visual Studio Code**.

Instalarea versiunilor ulterioare ale Visual Studio Code ar trebui să fie foarte asemănătoare.

[Visual Studio Code](https://code.visualstudio.com/download) (VS Code) este distribuit gratuit de Microsoft.

Instalarea este tipică pentru Windows cu `[Next]`, `[Next]` și `[Finish]`.

Următoarele linii descriu în detaliu pașii pentru instalarea Visual Studio Code.

După ce descărcăm fișierul de instalare și îl pornim, apare următorul ecran:

[image assetsSrc="intro-to-programming-install-vscode-1.png" /]

Apăsăm butonul `[Next]` și vom vedea ecranul de mai jos:

[image assetsSrc="intro-to-programming-install-vscode-2.png" /]

Putem alege o locație de destinație sau să o lăsăm pe cea implicită. Apoi apăsăm din nou butonul `[Next]`.

[image assetsSrc="intro-to-programming-install-vscode-3.png" /]

Acum trebuie să specificăm un nume pentru folderul programului care va fi creat în meniul Start.

Următorul pas este să punem bife pentru următoarele sarcini:

[image assetsSrc="intro-to-programming-install-vscode-4.png" /]

VS este acum gata pentru instalare. Apăsați butonul `[Install]`. Practic asta este totul.

[image assetsSrc="intro-to-programming-install-vscode-5.png" /]

Instalarea Visual Studio începe și va apărea un ecran ca cel de mai jos:

[image assetsSrc="intro-to-programming-install-vscode-6.png" /]

După instalarea Visual Studio, va apărea un ecran informativ. Apăsați butonul `[Launch]` pentru a-l porni.

[image assetsSrc="intro-to-programming-install-vscode-7.png" /]

La **pornirea VS Code** se afișează vizualizarea principală a Visual Studio Code.

[image assetsSrc="intro-to-programming-install-vscode-8.png" /]

Suntem pregătiți să lucrăm cu Visual Studio Code.
[/slide]

[slide hideTitle]
# Medii de Dezvoltare: Desktop și Online

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-23-Development-Environments-Desktop-And-Online-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Dacă nu avem Visual Studio Code instalat, putem folosi un IDE alternativ (online)

* JavaScript: utilizați direct consola browserului (apăsați tasta `[F12]`)

* [C#](https://dotnetfiddle.net)

* [Java](https://compilejava.net)

* [Python](https://repl.it)

[image assetsSrc="intro-to-programming-1.png" /]

[/slide]

[slide hideTitle]
# Ce Este Visual Studio Code

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-25-What-is-Visual-Studio-Code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Visual Studio Code este un editor de cod cu sursă deschisă.

Poate fi folosit cu limbaje de programare precum: **Java**, **JavaScript**, **Go**, **Node.js** și multe altele.

Visual Studio Code permite utilizatorilor să deschidă unul sau mai multe directoare.

Acest lucru îi permite să funcționeze ca un editor **cross-language** pentru orice limbaj de programare.

Putem să căutăm și să instalăm extensii în cadrul Visual Studio Code.

[/slide]

[slide hideTitle]
# Rularea VSC și a Extensiilor Recomandate

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-27-28-Running-VSC-and-recommended-extensions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Visual Studio Code are multe extensii care ne pot face fluxul de lucru mai plăcut.

- **Beautify**: Beautify formatează fișiere precum HTML. Codul neformatat din aceste fișiere este convertit în cod formatat

Trebuie să activăm această setare în tab-ul de preferințe VS Code și va formata automat tot codul.

- **ESLint**: ESLint analizează codul nostru JavaScript și ne ajută să remediem erorile

- **JSHint**: JSHint impune dezvoltatorilor să folosească convențiile de codare JavaScript

Ajută la detectarea potențialelor erori în codul JavaScript.

Folosim diferite extensii în funcție de tipul de proiect la care lucrăm.

[/slide]

[slide hideTitle]
# Proiecte în VSC

[video src="https://videos.softuni.org/hls/javascript-basics/RO/00-Intro-to-Programming/interactive-JS-PB-intorduction-to-programming-29-30-Projects-in-VSC-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Videoclipul de mai sus arată cum putem configura un proiect de bază.

În primul rând, avem nevoie de un folder gol. 

Apoi, tragem folderul în Visual Studio Code.

VSC va crea un proiect gol pentru noi.

Apoi, trebuie să creăm un fișier nou și să-l denumim.

**Extensia** `.js` este importantă, deoarece Visual Studio Code trebuie să știe ce tip de limbaj să folosească.

După ce am terminat de scris programul nostru, trebuie să executăm codul cu **Note.js**.

[/slide]
