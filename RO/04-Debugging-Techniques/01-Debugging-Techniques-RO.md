# Introducere în Depanare

[slide hideTitle]

# Ce Este Depanarea?

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-3-4-what-is-debugging-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Procesul de localizare a unei **erori** (**erori**) și, după aceea, remedierea acesteia, apelăm **Depanare**.

Există câțiva pași pe care trebuie să-i urmăm atunci când **depanăm** un program:

- Trebuie să identificăm **problema**

- Apoi, putem izola **sursa** problemei

- Dupa ce l-am găsit și izolat, următorul pas este să **rezolvăm** problema

Din fericire, există **instrumente de depanare** care ne ajută să localizăm erorile.

**Instrumentele de depanare** se mai numesc **depanatoare**.

[/slide]

[slide hideTitle]

# Depanare vs. Testare

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-5-debugging-vs-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există o diferență între **Testare** și **Depanare**.

**Testarea** este procesul de confirmare dacă software-ul are erori.

Testăm aplicația pentru a ne asigura că funcționează așa cum ar trebui să funcționeze.

Depanăm aplicația după ce a eșuat.

**Depanarea** se face pentru a remedia eroarea găsită în timpul testării.

**Depanarea** nu poate fi **automatizată**, spre deosebire de **testare** care poate fi **automatizată** sau **manuală**.

**Depanarea** poate fi doar **manuală**.

**Testarea** este realizată de un tester, în timp ce **depanarea** poate fi făcută de un programator.

[/slide]

[slide hideTitle]

# Importanța Depanării

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-6-Importance-of-debugging-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Depanarea** este unul dintre cei mai importanți pași în dezvoltarea unei aplicații.

Pentru că există factori care nu sunt previzibili sau pe care nu îi putem controla.

Cu alte cuvinte, nu există un cod perfect.

Există multe proiecte vechi scrise înainte de mulți ani.

În scenarii ca acesta, trebuie să ne orientăm rapid.

Depanarea va ajuta la înțelegerea proiectului în profunzime.

**Un fapt interesant** este că bugurile cauzează pierderi economice de aproximativ 60 de miliarde de dolari pe an.

Un exemplu este [Cluster Spacecraft Failure](https://en.wikipedia.org/wiki/Cluster_(spacecraft)#Launch_failure).

[/slide]

[slide hideTitle]

# Filosofia Ddepanării

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-7-debugging-philosophy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ne putem imagina că **depanarea** este un copac.

Diferitele ramuri reprezintă **teorii** independente.

Fiecare dintre aceste ramuri reprezintă o potențială eroare.

Frunzele de pe ramuri sunt cauzele potențiale ale bug-ului.

Când traversăm arborele, procesăm informațiile pe care le stochează.

Fiecare acțiune consumă timp, dar există o modalitate de a reduce timpul consumat, de exemplu:

- Vizualizarea

- Parcurgerea codului cu atenție

- Folosind [recognition pattern](https://en.wikipedia.org/wiki/Pattern_recognition)

[/slide]
