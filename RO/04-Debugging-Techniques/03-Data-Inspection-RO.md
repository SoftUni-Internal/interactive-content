# Inspecția datelor

[slide hideTitle]

# Inspecția datelor IntelliJ

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-22-intellij-data-inspection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cea mai importantă parte a depanării este **inspecția datelor**.

Este grav deoarece putem vedea **variabilele** și ceea ce păstrează în **memorie**.

De asemenea, urmărim **fluxul de execuție a codului**.

Pentru a avea un timp de rezoluție rapid, trebuie să avem o inspecție mai bună a datelor.

[/slide]

[slide hideTitle]

# Inspecția datelor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-20-21-data-inspections-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Depanatorul încorporat din **IntelliJ IDEA** ne oferă instrumente pentru verificarea fără efort a **inspecției datelor.**

Unii dintre ei sunt:

- **Variabile**

    - ne permite să inspectăm variabilele și argumentele cadrului curent

- **Watches**

    - urmăriți variabile sau expresii în același timp

    - valoarea se va actualiza la fiecare pas pe care îl face programul

- **Memorie**
 
    - să monitorizăm durata de viață a obiectelor care se află pe grămadă

[image assetsSrc="debugging-techniques-example(3).png" /]

[/slide]

[slide hideTitle]

# Variabile și ferestre Watches

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-23-variables-and-watches-tabs-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Tab-urile Variabile și Watches ne oferă libertatea de a inspecta stările aplicației.

Dacă dorim să urmărim ceva care nu este afișat în tab-ul **Variabil**, putem configura un **Watch**.

Există mai multe tipuri diferite de ferestre Watches „**predefinite**”.

Putem **adăuga**, **edita** sau **elimina** Watches.

De asemenea, putem crea **Watches** personalizate, care pot conține doar variabile pe care alegem să le adăugăm:

- Faceți clic dreapta pe variabilă și selectați „**Adăugați**”

- Scrieți numele variabilei în fereastra Watches

[/slide]

[slide hideTitle]

# Evaluați fereastra de expresie

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-24-evaluate-expression-window-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Depanatorul ne permite să evaluăm expresiile din timpul sesiunii de depanare.

Aceasta ne oferă informații suplimentare despre program.

Din **fereastra de evaluare** putem evalua **clase anonime**, **expresii** și etc.

Există o comandă rapidă pentru a accesa **fereastra de evaluare** - "**Alt + F**".

[image assetsSrc="debugging-techniques-example(4).png" /]

[/slide]


[slide hideTitle]

# Găsirea unui defect

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-25-26-finding-a-defect-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când am găsit o eroare, trebuie să facem câțiva pași pentru a remedia problema.

Primul este de a face eroarea **predictibilă**.

După aceea, putem **să colectăm date** și **să le analizăm**.

Când datele sunt analizate, putem încerca să remediem eroarea.

După ce am terminat, trebuie să testăm dacă este corect.

Dacă totul funcționează conform așteptărilor, putem continua căutarea altor erori.

[/slide]

[slide hideTitle]
# Sfaturi pentru găsirea defectelor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-27-28-tips-for-finding-defects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iată câteva sfaturi pentru găsirea erorilor:

- Pentru fiecare bucată de cod, scrieți un test unitar
- Scrieți teste unitare de bună calitate
- Utilizați depanatorul și informațiile pe care le oferă
- Uită-te cu atenție la cod
- Verificați clasele care au avut erori înainte
- Verificați dacă există modificări în cod
- Fă o pauză, dacă nu găsești nimic
- Cere ajutor

[/slide]

[slide hideTitle]

# Remedierea unui defect

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-29-fixing-a-defect-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când se găsește eroarea, trebuie să o remediem.
 
Dar înainte de asta, trebuie să înțelegem de ce programul se comportă așa.

După aceea, este o idee bună să salvăm codul original.

Pentru că dacă se întâmplă ceva și codul pe care l-am scris nu funcționează, avem o copie de rezervă.

Când problema este rezolvată, trebuie să scriem un test de unitate specific acelei caracteristici.

Dacă testul rulează fără probleme, putem continua cu remedierea altor bug-uri.

[/slide]

[slide hideTitle]
# Considerații psihologice

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-30-psychological-considerations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cu cât scriem mai multe coduri, cu atât avem mai multă încredere.

Credem că codul nostru nu are erori, dar probabil că are.

Deci, atunci când apare o eroare, trebuie să ne uităm foarte atent la codul pe care l-am scris.

Pentru că încrederea pe care o avem va contribui la **orbirirea depanării**.

Pentru a preveni acest lucru, nu ar trebui să ne așteptăm ca nimic să nu funcționeze.

Indiferent de cât de bine credem că suntem, putem totuși să greșim, așa că trebuie să fim foarte atenți.

[/slide]