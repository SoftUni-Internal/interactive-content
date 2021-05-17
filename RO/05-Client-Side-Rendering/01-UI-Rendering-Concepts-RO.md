# Concepte de Randare UI

[slide hideTitle]

# Concepte de Randare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-3-4-UI-Rendering-Rendering-Concepts-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Procesul de **generare dinamică de conținut** se numește **randare**.

Randarea poate fi **efectuată** în **browser-ul** clientului sau pe **server**.

Până recent, paginile web **erau randate doar în cadrul serverelor**.

Chiar dacă această metodă funcționează bine pentru paginile web **statice**, **interactivitatea este încetinită**.

**Randarea pe partea clientului** are ca scop rezolvarea acestei probleme cu ajutorul **JavaScript** și **AJAX**, pentru a face aplicațiile moderne **interactive, rapide și intuitive**.


[/slide]

[slide hideTitle]

# Randarea pe Partea de Server vs. Randarea pe Partea de Client

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-5-Server-Side-Vs-Client-Side-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Randarea pe partea de server** randează cod JavaScript în HTML și CSS static **pe server**, trimițând HTML **pregătit pentru utilizarea de către client**.

Când un utilizator încearcă sa **acceseze** un website, **serverul** pregătește șabloanele **HTML** și le **compilează**.

Apoi, HTMl-ul **generat** este **trimis** către **client**.

Browser-ul **interpretează** codul HTML, **vizualizând** pagina.

Pentru a facilita **interacțiunea**, browser-ul **descarcă** **script-urile** necesare de pe server și **le rulează**.

**Randarea pe partea clientului** efectuează majoritatea acestui proces prin intermediul mașinii clientului.

Când browser-ul trimite o **solicitare** GET către website, o **Rețea de Distribuție de Conținut (Content Delivery Network sau CDN)** servește **fișierele statice** și **script-urile**.

Apoi, **JavaScript** face **mai multe solicitări** către un Serviciu REST, **preluând date** în continuu.

Odată ce conținutul necesar este **descărcat**, JavaScript **generează** **elemente DOM**, permițând **vizualizarea**.

[/slide]

[slide hideTitle]

# Avantajele și Dezavantajele Randării pe Partea de Client

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-6-Pros-And-Cons-Of-Client-Side-Rendering-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Randarea pe partea de client** are multe **beneficii**, dar vine și cu câteva **dezavantaje**.

|**Avantaje**|**Dezavantaje**|
|---|---|
|**Interacțiunea cu utilizatorul** este aproape **instantă**.|**Optimizarea motorului de căutare** poate să **funcționeze mai lent** dacă rutarea **nu** este implementată **corespunzător**.|
|Datele pot fi **distribuite** mai multor **view-uri**.|Website-urile necesită **mai mult timp pentru a se încărca inițial**.|
|**Economisește lățime de bandă** prin preluarea doar a **conținutului dinamic**.|Necesită **hardware mai performant** din **partea clientului**, deoarece **majoritatea procesării este efectuată acolo**.|
|Furnizează o varietate mare de **librării JavaScript** pentru programatori.|Necesită o **librărie** pentru a fi **implementată**.|

[/slide]


[slide hideTitle]

# Ce Este Șablonarea?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-7-What-Is-Templating-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șablonarea** este procesul de separare a **structurii unui document HTML** de **conținutul propriu-zis**.

**Șabloanele** facilitează **replicarea conținutului similar** pe o pagină web, **fără a necesita repetarea markup-ului corespunzător**.

**Distincția** clară dintre **logică și date** face codul **mai ușor de citit și de utilizat**.

Până acum, când am adăugat elementele DOM în mod dinamic, am folosit bucle pentru a le manipula. 

Acest lucru activează așa-numitul "**reflow**" sau procesul de **recalculare** a pozițiilor și a geometriilor **elementelor** din document pentru a **re-randa** o parte sau tot conținutul documentului. 

Prin **reducerea reflow-ului**, îmbunătățim **performanța** aplicației.
[/slide]

[slide hideTitle]

# Concepte de Șablonare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-8-Templating-Concepts-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Părțile **statice** ale paginii noastre web sunt stocate sub formă de **șabloane**, în timp ce conținutul **dinamic**, precum datele utilizatorului, este stocat **separat**, de cele mai multe ori într-o bază de date.

Un **motor de șablonare** este utilizat pentru **a combina cele două aspecte**.

În cazul randării pe partea de server, șabloanele sunt folosite pentru a genera HTML care este randat înainte de a fi trimis clientului.

Atunci când folosim randarea pe partea clientului, **nu creăm elemente HTML** - șabloanele sunt folosite pentru a crea **elemente DOM** pe partea clientului, care pot fi atașate arborelui DOM.

Șabloanele definesc **structura** fiecărui view - poziția imaginilor, butoanelor și a tuturor celorlalte elemente.

Pentru a crea șabloane avem nevoie de conținut **dinamic**, care poate fi preluat de la un serviciu REST.

Structura este **randată**, iar datele sunt **plasate** înăuntrul șablonului. 

În locul executării acestor pași **unul câte unul**, este folosit un motor de șablonare, care face ca acest proces să fie mai abstract. 

[/slide]


[slide hideTitle]

# Avantajele Șablonării

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-9-Templating-Benefits-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Șabloanele au câteva **avantaje**:


- **Productivitate**
    * șablonarea are ca rezultat **cod mai puțin repetitiv**
    * fac ca markup-ul nostru să fie **mai ușor de citit** și interpretat

- **Economisirea Lățimii de Bandă**
    * codul **HTML** este trimis doar **o dată**
    * **motorul de șablonare** gestionează elementele similare
    * se trimit doar **datele** pentru o entitate dată

- **Compozabilitate**
    * permite utilizarea unui **singur element pe mai multe pagini**
    * **Headers**, **Footers** și **Sidebars** sunt câteva exemple în acest sens

- **Separarea preocupărilor**
    * izolează **componentele HTML** de **conținutul** asociat

- **Interactivitate**
    * deoarece doar **datele dinamice** sunt preluate, view-urile pot fi randate **mai rapid**, proces care are ca rezultat un timp de încărcare **mai redus** 

[/slide]


[slide hideTitle]

# Cele mai Bune Practici de Șablonare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-10-Templating-Best-Practices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Câteva practici de șablonare recomandate:

- Un șablon trebuie să fie cât mai **simplu** posibil
    * **separați codul în unități mai mici** pentru o organizare mai bună
    * stocați **fiecare** șablon în **propriul fișier**

- Șabloanele sunt comparabile cu **funcțiile pure**
    * principiile **programării funcținale** pot fi aplicate și pentru șabloane


[/slide]
