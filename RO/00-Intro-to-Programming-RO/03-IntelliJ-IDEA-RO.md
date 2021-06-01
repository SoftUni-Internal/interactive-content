[slide hideTitle]
# Mediile Integrate de Dezvoltare (IDE)

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-16-18-IDE-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a programa avem nevoie de un mediu integrat de dezvoltare (**Integrated Development Environment**), prescurtat **IDE**.

În mediul de dezvoltare scriem cod, compilăm și executăm programele. 

Mediile de dezvoltare pot conține orice număr de componente dintre următoarele:

- Editor de text pentru cod
- Limbaj de programare
- Compilator sau interpretor
- Mediu de execuție pentru executarea programelor
- Depanator utilizat pentru identificarea erorilor
- Instrumente pentru design-ul interfeței cu utilizatorul

Pot exista și alte instrumente și addons în funcție de IDE-ul folosit.


**Mediile de dezvoltare** sunt convenabile pentru că integrează toate elementele necesare pentru dezvoltarea programului, fără a fi nevoie să ieșim din mediu. 

Dacă nu utilizăm un mediu de dezvoltare, va trebui să scriem codul într-un editor de text, să îl compilăm cu o comandă utilizând consola, să îl executăm cu o altă comandă pe consolă, să scriem mai multe comenzi suplimentare când este nevoie, toate acestea fiind lucruri care consumă foarte mult timp. 

Pentru programarea cu **limbajul Java** cel mai des utilizat IDE este **IntelliJ IDEA**, care este dezvoltat și distribuit gratuit de JetBrains și poate fi descărcat [aici](https://www.jetbrains.com/idea/download/).

Câteva alternative sunt:

- [Eclipse](https://www.eclipse.org/downloads/)

- [NetBeans](https://netbeans.org/downloads/8.0.2/)

În cadrul acestui curs, vom folosi mediul de dezvoltare **IntelliJ IDEA**. 

Acesta este un exemplu referitor la cum poate arăta un mediu de dezvoltare integrat (IntelliJ IDEA IDE pentru Java):

[image assetsSrc="intro-to-programming-hello-world.png" /]
[/slide]

[slide hideTitle]
# Instalarea IntelliJ IDEA

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-21-24-Installing-IntelliJ-IDEA-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Începem prin a instala mediul integrat **IntelliJ IDEA** (Community, version 2019.2.1, latest as of August 2019). 

Instalarea versiunilor mai recente ale IntelliJ IDEA (precum IntelliJ IDEA 2020 și IntelliJ IDEA 2021) ar trebui să fie foarte asemănătoare.

Versiunea **Community** a IntelliJ IDEA este distribuită gratuit de Jetbrains și poate fi descărcată [aici](https://www.jetbrains.com/idea/download/).

Instalarea nu este complicată și poate fi realizată prin urmărirea unor pași simpli.

Următoarele linii descriu detaliat pașii pentru instalarea IntelliJ IDEA (versiunea Community 2019.2.1). 

După ce ați descărcat fișierul de instalare și ați inițiat acest pas, va apărea următorul ecran:
[image assetsSrc="intro-to-programming-install-intelliJ-1.png" /]

Apăsați butonul `[Next]` și veți vedea ecranul de mai jos:
[image assetsSrc="intro-to-programming-install-intelliJ-2.png" /]

Un ecran cu opțiunile de instalare ale IntelliJ IDEA se va încărca.

Puneți o bifă pe `[64-bit launcher]`, `[.java]`, `[.groovy]` și `[.kt]`, apoi apăsați din noul butonul `[Next]`. 
[image assetsSrc="intro-to-programming-install-intelliJ-3.png" /]

După aceea, trebuie să selectați Start Menu Folder `[JetBrains]` și să dați click pe butonul de instalare `[Install]`. În principiu, asta e tot ce avem de făcut.
[image assetsSrc="intro-to-programming-install-intelliJ-4.png" /]

Instalarea IntelliJ IDEA începe și vă va apărea un ecran similar celui de mai jos:
[image assetsSrc="intro-to-programming-install-intelliJ-5.png" /]

După ce IntelliJ IDEA a fost instalat, veți vedea un ecran informativ. Puneți o bifă pe butonul `[Run]` pentru a începe să rulați și apoi apăsați `[Finish]`.
[image assetsSrc="intro-to-programming-install-intelliJ-6.png" /]

Pentru a continua, trebuie să alegeți dacă veți importa setări sau nu. Bifați butonul `[Do not import settings]`, în cazul în care instalați acest IDE pentru prima dată.
[image assetsSrc="intro-to-programming-install-intelliJ-7.png" /]

Următorul pas este să alegeți **tema coloristică** pentru vizualizarea IntelliJ. 

Această alegere se află la latitudinea preferințelor utilizatorului. 
[image assetsSrc="intro-to-programming-install-intelliJ-8.png" /]

La următorul pas de configurare, puteți să alegeți opțiunile implicite.

Apăsați butonul `[Start using IntelliJ IDEA]` și veți vedea display-ul principal al comunității IntelliJ IDEA:
[image assetsSrc="intro-to-programming-install-intelliJ-9.png" /]

Asta este tot. Sunteți gata să lucrați cu IntelliJ IDEA.
[/slide]

[slide hideTitle]
# Proiectarea de Soluții și Proiecte în Intellij IDEA

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-25-Project-Solutions-and-Projects-in-IntelliJ-IDEA-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Înainte de a începe să lucrăm cu IntelliJ IDEA, este necesar să ne familiarizăm cu conceptele unui **Proiect IntelliJ IDEA** și ale unui **Modul IntelliJ IDEA**, care sunt aspecte inevitabile ale acestuia.

[image assetsSrc="intro-to-programming-modules-and-projects.png" /]

**Un Proiect IntelliJ IDEA** reprezintă "**proiectul**" la care lucrăm. 

La început, vom observa câteva aplicații simple de consolă cu ajutorul cărora vom învăța conceptele de bază.

Pe măsură ce aprofundăm, aceste proiecte vor evolua spre aplicațiile de tip desktop, aplicații web și alte tipuri de dezvoltări de software. 

Un proiect în IntelliJ **grupează logic fișiere multiple**, construind o aplicație dată sau o componentă a acesteia. 

Un **proiect Java** conține unul sau mai multe **fișiere sursă Java**, configurații de fișiere și alte resurse. 

În fiecare fișier sursă Java există una sau mai multe definiții de tipuri (clase sau alte definiții). 

În clase, se află metodele, care sunt blocuri de cod utilizate pentru a separa logic funcționalitățile codului.

Pare complicat, dar în cazul proiectelor mai mari, o structură de acest tip este foarte convenabilă și permite o organizare mai bună a fișierelor de lucru.

**Un proiect IntelliJ IDEA** reprezintă un container, în care **se află câteva module legate logic**. 

În IntelliJ IDEA, un modul este o parte esențială a oricărui proiect. 

Modulele inițiale sunt create automat în funcție de necesitățile proiectului.

Proiectele pot conține mai multe module - puteți adăuga noi module, le puteți grupa, și puteți elimina modulele care nu sunt necesare la acel moment.

Modulele constă dintr-o rădăcină de conținut și un fișier de modul. 

Directorul rădăcină este un fișier unde se stochează codul. De obicei, el conține sub-foldere pentru codul sursă, teste unitare, fișiere de resurse, și așa mai departe.

Această organizare ierarhică este mai convenabilă pentru proiecte mai complicate (să zicem cu peste 50 000 de linii de cod).

Pentru **proiecte mai mici** această organizare poate chiar să **complice procesul**, în loc să fie de ajutor, dar trebuie să o folosim în ciuda acestui fapt, deoarece va fi utilă atunci când vom ajunge la nivele mai avansate.
[/slide]

[slide hideTitle]
# Medii de Dezvoltare: Desktop și Online

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-19-Development-Environments-Desktop-and-Online-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Instalați de pe JetBrains IntelliJ IDEA Community:

* [JetBrains](https://www.jetbrains.com/idea/download/)

* Încercați întotdeauna să utilizați ultima versiune software disponibilă

Alternative IDE (online):

* [Java](https://www.compilejava.net), [Repl.it](https://repl.it/languages/java)
* [C#](https://dotnetfiddle.net)
* [Python](https://repl.it)
* JavaScript: folosiți direct consola browser-ului Web (apăsând tasta \[F12\])

[image assetsSrc="intro-to-programming-rplit.png" /]
[/slide]
