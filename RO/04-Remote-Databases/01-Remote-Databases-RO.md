# Baze de Date Remote

[slide hideTitle]

# Baze de Date Relaționale

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-3-relational-databases-FIX-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Bazele de date relaționale** mențin datele în **tabele**, furnizând un mod **eficient și flexibil** de a stoca și accesa informație structurată. 

Tabelele constă din **coloane** care conțin una sau mai multe categorii de date, și rânduri.

**Rândurile**, cunoscute ca înregistrări, sunt **seturi de date** definite de **categorie**.

Fiecare tabel are un identificator **unic** numit **cheie primară**, care identifică informația din tabel.

Conexiunea logică dintre diferite tabele este stabilită prin intermediul **cheii străine** - un câmp din tabel care se conectează cu **cheia primară** a altui tabel.

**SQL** sau **Structured Query Language** este interfața principală utilizată pentru comunicarea cu baze de date relaționale.

[/slide]

[slide hideTitle]

# Baze de Date Nerelaționale

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-4-non-relational-databases-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Principala diferență între bazele de date **relaționale** și cele **nerelaționale** este modul în care acestea **stochează informația.**

Bazele de date **nerelaționale**, deseori numite **NoSQL**, sunt diferite față de bazele de date relaționale tradiționale prin faptul că își stochează datele într-o  **formă non-tabelară.** 

Bazele de date nerelaționale sunt bazate pe structuri de date **precum documente.** 

Un document poate fi **foarte detaliat**, conținând o varietate de **tipuri** distincte de informație în diferite **formate**. 

Această abilitate de organiza variate tipuri de informație **unul lângă altul** face bazele de date nerelaționale mult mai **flexibile** decât bazele de date relaționale.

Bazele de date **nerelaționale** funcționează deseori **mai repede** deoarece o interogare nu trebuie **să parcurgă mai multe tabele** pentru a formula un răspuns, cum este cazul bazelor de date relaționale. 

Bazele de date **nerelaționale** sunt ideale pentru a stoca informații care vor fi **modificate frecvent** sau pentru aplicații care gestionează multe tipuri de date diferite.

[/slide]

[slide hideTitle]

# Avantajele Bazelor de Date Relaționale și Nerelaționale 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-5-relational-and-non-relational-pros-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Avantajele Bazelor de Date Relaționale:**
- Datele sunt structurate pe categorii
- Admit consistența tranzacțională **ACID** și "**JOINs**"
  * **ACID** asigură transferul corespunzător al datelor în toate circumstanțele
  * Clauzele **JOIN** permit combinarea rândurilor din tabele diferite pe baza unei coloane asociate
- Integritatea încorporată a datelor și un ecosistem vast
- Relațiile din acest sistem au constrângeri
- Indexare nelimitată

Unul dintre **beneficiile** utilizării bazelor de date relaționale este faptul că acestea îi permit utilizatorului să **clasifice datele în diferite categorii** și să le stocheze eficient. 

În programare, **ACID** (atomicitate, consistență, izolare, durabilitate) este un set de proprietăți ale tranzacțiilor bazelor de date, al cărui scop este de a  **garanta** validitatea datelor în ciuda erorilor, intreruperilor de curent, etc.

Constrăngerea de cheie specifică că în orice relație, toate valorile ale unei chei primare trebuie să fie unice.

Valoare unei chei primare nu trebuie să fie **nulă**.

Bazele de date relaționale utilizează indecși pentru a localiza date fără a parcurge fiecare rând din tabel.

**Avantajele Bazelor de Date Nerelaționale:**
- Datele nu sunt constrânse la un grup structurat
- Puteți efectua funcții care permit o flexibilitate mai mare
- Scalare orizontală
- Disponibilitate mare
- Multe baze de date NoSQL sunt **open source**

Bazele de date NoSQL au devenit populare deoarece **stochează** datele sub forme **simple** care pot fi mai ușor de **înțeles** decât tipurile de modele de date folosite în baze de date SQL.

Bazele de date NoSQL le permit deseori programatorilor să schimbe **structura datelor**.

Acestea sunt caracterizate de scalare "**orizontală**", ceea ce înseamnă că pot să ruleze pe mai multe **servere** care lucrează împreună, fiecare fiind responsabil pentru o parte din încărcătură.

Bazele de date NoSQL cu disponibilitate mare sunt sisteme construite să ruleze **fără întreruperi ale serviciului.**

Multe întreprinderi web-based necesită servicii de date care sunt disponibile fără întrerupere.

[/slide]

[slide hideTitle]

# Ce este BaaS?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-6-backend-as-a-service-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Backend-as-a-Service** sau **BaaS** este un model de serviciu cloud în care programatorii externalizează toate aspectele behind-the-scenes ale unei aplicații web sau mobile, astfel încât ei trebuie doar să scrie și să mențină partea de front-end. 

Furnizorii de **BaaS** pun la dispoziție software predefinit pentru activități care au loc pe servere, precum **autentificarea utilizatorului**, **gestionarea bazelor de date**, **actualizarea de la distanță**, notificări push (pentru aplicații mobile), cât și **stocare cloud** și **hosting**.

Folosirea **BaaS** îmbunătățește drastic viteza de dezvoltare, menținând în același timp un preț scăzut.

Faptul că este **lipsit de server** este un alt avantaj, deoarece nu necesită gestionarea infrastructurii.

Există două tipuri de BaaS: **Cloud BaaS** și **Open-source BaaS**.

[/slide]
