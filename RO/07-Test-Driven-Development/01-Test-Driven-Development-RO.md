# Dezvoltare bazată pe testare (Test-driven development)

[slide hideTitle]

# Abordări de testare a unității

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/RO/Java-OOP-Advanced-Test-Driven-Development-3-4-Unit-Testing-Approaches-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Atunci când creăm un software complex, unul dintre lucrurile pe care ar trebui să le luăm în considerare este ce **abordare de dezvoltare** alegem.

Două dintre aceste abordări de dezvoltare sunt:

- Abordarea Code-First (creați codul, apoi testați-l)
- Abordarea Test-First (Dezvoltare bazată pe testare)

Ambele sunt bune, dar sunt potrivite pentru diferite cazuri de utilizare.

Până acum, am folosit întotdeauna **abordarea bazată pe cod** - am scris întotdeauna codul mai întâi și apoi testele.

Când scriem teste pentru un cod pe care l-am scris deja, le putem face inconștient astfel încât să treacă, ignorând unele cazuri izolate care ne pot strica codul.

Aici intervine **abordarea bazată pe testare**.

[/slide]

[slide hideTitle]

# Abordarea prin cod si testare

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/RO/Java-OOP-Advanced-Test-Driven-Development-5-The-code-and-test-approach-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cu abordarea prin cod și testare, avem **trei** pași principali:

1. Creăm o implementare a funcționalităților de care avem nevoie

2. Scriem teste unitare pentru aceste funcționalități care acoperă toate cazurile

3. Rulăm și fie reușim sau găsim erori în cod

[/slide]

[slide hideTitle]

# Abordarea dezvoltării bazate pe testare

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/RO/Java-OOP-Advanced-Test-Driven-Development-6-the-test-driven-development-approach-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există **cazuri de testare** dezvoltate pentru a specifica și valida ce va face codul.

Scopul lor este de a testa funcționalitățile noastre - dacă testele eșuează, este posibil să trebuiască să remediem unele erori și funcții.

Metoda de dezvoltare bazată pe testare ne permite să dezvoltăm teste pentru fiecare funcționalitate mică.

O putem considera ca un proces care se bazează pe repetarea unui ciclu de dezvoltare.

Dezvoltarea bazată pe testare este utilizată pentru a dezvolta teste înainte de implementarea codului.

[/slide]

[slide hideTitle]

# Dezvoltare bazată pe testare - Pași

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/RO/Java-OOP-Advanced-Test-Driven-Development-7-test-driven-development-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să aruncăm o privire asupra secvenței de pași pe care ar trebui să-i urmăm:

- Creați o listă de testare pentru a vă asigura că programul vostru rulează corect

- Alegeți un test

- Scrieți testul pentru funcționalitatea care ar trebui implementată

- Scrieți suficient cod, astfel încât programul să fie compilat (fără implementare, astfel încât testul să nu treacă)

- Scrieți o mică bucată de cod pentru a îndeplini testul (prin implementarea unui test care nu reușește, ne asigurăm că testul nostru apelează codul corect)

- Rulați toate testele (testul va trece acum)

- Refactorizați

- Repetați procesul


[/slide]

[slide hideTitle]

# De ce TDD

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/RO/Java-OOP-Advanced-Test-Driven-Development-8-Why-TDD-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să vedem câteva dintre avantajele utilizării de **Test-driven development**:

- Dezvoltarea bazată pe testare ne încurajează să dezvoltăm un cod simplu, curat și semnificativ

- Dezvoltatorii au mai mult timp pentru a rezolva cazurile izolate care trebuie acoperite de aceste teste, comparativ cu abordarea tradițională

- TDD are o acoperire mai mare a codului din cauza densității mai mare a testului 

[/slide]
