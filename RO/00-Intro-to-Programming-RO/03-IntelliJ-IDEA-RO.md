[slide hideTitle]
# Mediile integrate de dezvoltare (IDE)

Pentru a programa, avem nevoie de un mediu integrat de dezvoltare (**Integrated Development Environment**), prescurtat **IDE** (IDE). 

**Un mediu de dezvoltare** (Integrated Development Environment – **IDE**) este o combinație de instrumente tradiționale de dezvoltare a aplicațiilor software. 

În mediul de dezvoltare scriem cod, compilăm și executăm programele. Mediile de dezvoltare integrează în ele un editor de text pentru scrierea de cod, un limbaj de programare, un compilator sau un interpret și un mediu de execuție pentru rularea programelor, un depanator pentru urmărirea programului și identificarea erorilor, instrumente pentru interfața pentru utilizator și alte instrumente și accesorii.

**Mediile de dezvoltare** sunt convenabile, pentru că integrează toate acele elemente necesare pentru dezvoltarea programului fără a fi nevoie să ieșim din acestea.  

Dacă nu utilizăm un mediu de dezvoltare, va trebui să scriem codul într-un editor text, să-l compilăm cu o comandă pe consolă, să-l executăm cu o altă comandă pe consolă să scriem mai multe comenzi suplimentare când este nevoie, toate acestea fiind lucruri care consumă foarte mult timp. 

Pentru programarea cu **limbajul Java** cel mai des utilizat IDE este **IntelliJ IDEA**, care este dezvoltat și distribuit gratuit de JetBrains și poate fi descărcat de pe site-ul web: https://www.jetbrains.com/idea/download/.

Alternativele Visual Studio sunt:
- [Eclipse](https://www.eclipse.org/downloads/)
- [NetBeans](https://netbeans.org/downloads/8.0.2/)

În cadrul acestui curs, vom folosi mediul de dezvoltare **IntelliJ IDEA**. 

Acesta este un exemplu despre cum poate arăta un mediu de dezvoltare integrat IDE (IntelliJ IDEA IDE for Java):

[image assetsSrc="intro-to-programming-hello-world.png" /]
[/slide]

[slide hideTitle]
# Instalarea IntelliJ IDEA
Începem prin a instala mediul integrat **IntelliJ IDEA** (Community, version 2019.2.1, latest as of August 2019). 

Instalarea versiunilor mai recente ale IntelliJ IDEA (precum IntelliJ IDEA 2020 și IntelliJ IDEA 2021) ar trebuie să fie foarte asemănătoare.

Versiunea **Community** a IntelliJ IDEA este distribuită gratuit de Jetbrains și poate fi descărcată de pe: https://www.jetbrains.com/idea/download/.

Instalarea este tipică mediului Windows, cu comenzile `[Next]`, `[Next]` și `[Finish]`.

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

După ce s-a instalat IntelliJ IDEA, veți vedea un ecran informativ. Puneți bifă la butonul `[Run]` pentru a începe să rulați și apoi apăsați `[Finish]`.
[image assetsSrc="intro-to-programming-install-intelliJ-6.png" /]

Pentru a continua, trebuie să alegeți dacă veți importa setări sau nu. Bifați butonul `[Do not import settings]`.
[image assetsSrc="intro-to-programming-install-intelliJ-7.png" /]

Următorul pas este să alegeți **tema coloristică**, pentru vizualizarea IntelliJ. Alegerea aici este la latitudinea preferințelor utilizatorului și nu are nici o importanță care dintre opțiuni va fi aleasă. 
[image assetsSrc="intro-to-programming-install-intelliJ-8.png" /]

La următorul pas de configurare, puteți să vă alegeți opțiunile default.

Apăsați butonul `[Start using IntelliJ IDEA]` și veți vedea display-ul principal al comunității IntelliJ IDEA:
[image assetsSrc="intro-to-programming-install-intelliJ-9.png" /]

Asta este tot. Sunteți gata să lucrați cu IntelliJ IDEA.
[/slide]

[slide hideTitle]
# Proiectarea de soluții și proiecte în Intellij IDEA
Înainte de a începe să lucrăm cu IntelliJ IDEA, este necesar să ne familiarizăm cu conceptele unui **Proiect IntelliJ IDEA** și ale unui **Modul IntelliJ IDEA**, care sunt aspecte inevitabile ale acestuia.

[image assetsSrc="intro-to-programming-modules-and-projects.png" /]

**Proiectul IntelliJ IDEA** reprezintă  "acel **proiect**" la care lucrăm. La început, acestea vor fi aplicațiile noastre de pe consolă, pe care vom învăța să le scriem cu ajutorul cursului de față și lecțiilor sale.

Pe măsură ce aprofundați și învățați mai mult, alocați mai mult timp și practică, aceste proiecte vor evolua spre aplicațiile de tip desktop, aplicații web și alte tipuri de dezvoltări. 

Un proiect în IntelliJ **lgrupează logic fișiere multiple**, construind o aplicație dată sau o componentă a acesteia. 

Un **proiect Java** conține unul sau mai multe **fișiere sursă Java**, configurații de fișiere și alte resurse. În fiecare fișier sursă Java există una sau mai multe definiții de tipuri (clase sau alte definiții). 

În clase, se află metodele (acțiuni), iar acestea conțin o secvență de comenzi. Pare complicat, dar în cazul proiectelor mai mari, o structură de acest tip este foarte convenabilă și permite o organizare mai bună a fișierelor de lucru.

**Un proiect IntelliJ IDEA** reprezintă un container, în care **se află câteva module legate logic**. 

În IntelliJ IDEA, un modul este o parte esențială a oricărui proiect - este creat automat, împreună cu un proiect. 

Proiectele pot conține module multiple - puteți adăuga noi module, le puteți grupa, și puteți descărca modulele care nu va sunt necesare în acest moment.

Modulele consta dintr-o rădăcină de conținut și un fișier de modul. Directorul rădăcină este un fișier unde se stochează codul/ De obicei, el conține sub-foldere pentru codul sursă, unitățile de teste, fișierelor de resurse, și așa mai departe.

Organizarea ierarhică este mult mai convenabilă când aveți mai multe proiecte mai complicate (să zicem cu peste 50 000 de linii de cod).

Pentru **proiecte mai mici** proiectele și modulele IntelliJ mai degrabă **complică munca**, în loc să vă ajute, dar vă veți obișnui cu ele destul de rapid.
[/slide]

[slide hideTitle]
# Dezvoltarea mediilor: Desktop și Online
Instalați de pe JetBrains comunitatea  IntelliJ IDEA Community

* https://www.jetbrains.com/idea/download/
* Puteți folosi și o versiune mai veche, dar cel mai bine descărcați-o pe cea mai recentă

Alternative IDE (online)

* [Java](https://www.compilejava.net) , [Repl.it](https://repl.it/languages/java)
* [C#](https://dotnetfiddle.net)
* [Python](https://repl.it)
* JavaScript: folosiți direct consola browser-ului Web (apăsând tasta \[F12\])

[image assetsSrc="intro-to-programming-rplit.png" /]
[/slide]
