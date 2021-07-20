# Inspecția Datelor

[slide hideTitle]

# Inspecția Datelor IntelliJ

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-22-intellij-data-inspection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cea mai importantă parte a depanării este **inspecția datelor**.

Acest aspect este important deoarece putem vedea **variabilele** și ce păstrează în **memorie**.

De asemenea, urmărim **fluxul de execuție a codului**.

Pentru a avea un timp de rezoluție rapid, trebuie să avem o inspecție mai bună a datelor.

[/slide]

[slide hideTitle]

# Inspecția Datelor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-20-21-data-inspections-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Depanatorul încorporat din **IntelliJ IDEA** ne oferă instrumente pentru a **inspecta datele eficient.**

Câteva instrumente de acest tip sunt:

- **Variables**

    - ne permite să inspectăm variabilele și argumentele cadrului curent

- **Watches**

    - urmărește variabile sau expresii în același timp

    - valoarea se va actualiza la fiecare pas pe care îl face programul

- **Memory**
 
    - ne permite să monitorizăm durata de viață a obiectelor care se află în heap

[image assetsSrc="debugging-techniques-example(3).png" /]

[/slide]

[slide hideTitle]

# Ferestrele Variables și Watches

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-23-variables-and-watches-tabs-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Tab-urile **Variables** și **Watches** ne oferă libertatea de a inspecta stările aplicației.

Dacă dorim să urmărim ceva care nu este afișat în tab-ul **Variables**, putem configura un **watch**.

Există mai multe tipuri diferite de ferestre watch "**predefinite**".

Putem **adăuga**, **edita** sau **elimina** watches.

De asemenea, putem crea **watches** personalizate, care pot conține doar variabilele pe care alegem să le adăugăm:

- Faceți clic dreapta pe variabilă și selectați "**Add to Watches**"

- Scrieți numele variabilei în fereastra Watches

[/slide]

[slide hideTitle]

# Fereastra de Evaluare a Expresiilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-24-evaluate-expression-window-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Depanatorul ne permite să evaluăm expresii în timpul sesiunii de depanare.

Acest aspect ne oferă informații suplimentare despre program.

Din **fereastra de evaluare** putem evalua **clase anonime**, **expresii**, etc.

Există o comandă rapidă pentru a accesa **fereastra de evaluare** - "**Alt + F**".

[image assetsSrc="debugging-techniques-example(4).png" /]

[/slide]


[slide hideTitle]

# Găsirea Unei Erori

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-25-26-finding-a-defect-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când am găsit o eroare, trebuie să facem câțiva pași pentru a remedia problema.

Primul este de a face eroarea **predictibilă**.

După aceea, putem **să colectăm date** și **să le analizăm**.

După ce datele au fost analizate, putem încerca să remediem eroarea.

După ce am terminat, trebuie să testăm dacă problema a fost soluționată.

Dacă totul funcționează conform așteptărilor, putem continua căutarea altor erori.

[/slide]

[slide hideTitle]
# Sfaturi Pentru Găsirea Erorilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-27-28-tips-for-finding-defects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iată câteva sfaturi pentru găsirea erorilor:

- Scrieți un test unitar pentru fiecare parte din cod
- Scrieți teste unitare de bună calitate
- Utilizați depanatorul și informațiile pe care le oferă
- Urmăriți codul cu atenție
- Verificați clasele care au generat erori înainte
- Verificați dacă există modificări în cod
- Dacă nu găsiți nimic, luați o pauză
- Cereți ajutor

[/slide]

[slide hideTitle]

# Remedierea Unui Defect

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-29-fixing-a-defect-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După ce am găsit eroarea, trebuie să o remediem.
 
Înainte de asta, trebuie să înțelegem de ce programul se comportă așa.

După aceea, este o idee bună să salvăm codul original, deoarece dacă se întâmplă ceva și codul pe care l-am scris nu funcționează, avem o copie de rezervă.

Când problema este rezolvată, trebuie să scriem un test unitar specific acelei caracteristici.

Dacă testul rulează fără probleme, putem continua cu remedierea altor bug-uri.

[/slide]

[slide hideTitle]
# Considerații Psihologice

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-30-psychological-considerations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cu cât scriem mai mult cod, cu atât avem mai multă încredere.

Credem că codul nostru nu are erori, dar acestea cel mai probabil există.

Atunci când apare o eroare, trebuie să verificăm foarte atent codul pe care l-am scris, pentru că încrederea pe care o avem va contribui la inabilitatea de a repera eroarea \(debugging blindness\).

Pentru a preveni acest lucru, nu trebuie să ne așteptăm ca ceva să funcționeze.

Indiferent de cât de buni credem că suntem, putem totuși să greșim, așa că trebuie să fim foarte atenți.

[/slide]
