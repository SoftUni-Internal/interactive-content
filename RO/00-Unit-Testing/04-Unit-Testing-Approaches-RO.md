# Tipuri de Testare Unitară

[slide hideTitle]

# Abordări de Dezvoltare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/RO/interactive-js-apps-unit-testing-16-17-18-19-20-unit-testing-approaches-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Code-First

Aceasta este o abordare clasică în care funcționalitatea este implementată și apoi sunt scrise testele.

Nu este neobișnuit să nu existe deloc teste unitare, dar aceasta este considerată o practică proastă.

Prima abordare a codului este destul de populară și larg utilizată.


[/slide]

[slide hideTitle]
# Dezvoltarea Test-Driven

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/RO/interactive-js-apps-unit-testing-20-test-driven-development-example-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cu abordarea **Test-First**, de asemenea cunoscută ca si **Test-Driven Development**, scriem testele **înainte de** codul actual. 

Tot ceea ce poate fi testat este descris mai întâi cu teste, după care codul este scris pentru a satisface condițiile acestor teste și pentru a se asigura că acestea trec.

Continuăm să reluăm testele pentru a ne asigura că codul funcționează corect.

În acest fel, vom ști **mereu** dacă codul nostru produce sau nu rezultatele scontate.

În **Test-Driven Development**, urmați acești pași:

- Creați o listă de testare
- Alegeți un test
- Compuneți-l
- Compilați și eșuați
- Scrieți suficient cod pentru a compila
- Rulați un test și eșuați
- Scrieți cod pentru a trece testul
- Eliminați duplicarea

[/slide]

[slide hideTitle]
# De ce TDD Este o Abordare mai Bună?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/RO/interactive-js-apps-unit-testing-21-why-test-driven-development-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **TDD** (Test Driven Development) ne ajută să găsim **probleme** într-o etapă **timpurie** a proiectului și să evităm să trebuiască să refacem părți din codul nostru

- Crește fiabilitatea codului nostru

- Scrierea codului pentru a **satisface** anumite condiții ne ajută să ne concentrăm mai mult la proces

- Dacă creăm testele înainte de a scrie codul, de obicei acestea vor fi mai **cuprinzătoare**

- Economisește costurile proiectului pe termen lung, mai puține bug-uri înseamnă mai puțin timp petrecut pentru a le remedia

- Reduce timpul necesar pentru dezvoltarea proiectului, întreținerea va fi de obicei mult mai ușoară pentru proiectele create folosind TDD

- În esență, creați documentație în timp ce scrieți testele

[/slide]
