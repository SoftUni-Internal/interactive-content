# Routing Concepts

[slide hideTitle]

# Ce Este Rutarea?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/05-Modules-and-Routing/Angular-Modules-and-routing-8-9-What-is-Routing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Rutarea** este navigația pe **partea de client**. 

Aceasta reprezintă principalul element al **Aplicațiilor de tip Pagină Unică** (**SPA**).

Acest tip de navigație descarcă întreaga aplicație odată cu prima încărcare, iar dacă există o schimbare la nivel de URL, se actualizează pagina fără a avea loc o **reîncărcare**.

Există și navigație **pe partea de server**, care funcționează în mod diferit de navigația **pe partea de client**.

Navigația **pe partea de server** se reîncarcă odată cu fiecare **schimbare** din URL.

În exemplul următor, puteți observa **diferența dintre** cele două tipuri:

## Partea de Server

[image assetsSrc="Angular-Modules-And-Routing.png" /]

În primul rând, utilizatorul apasă pe elementul **ancoră**, iar browserul detectează faptul că a avut loc un eveniment.

Ulterior, browserul realizează o solicitare de tip **GET** spre rută, în cadrul etichetei `href`.

Pe partea de **server**, solicitarea este procesată și se returnează un răspuns (sub formă de HTML, JSON, imagine, etc.).

În final, browserul încarcă o **pagină web** complet nouă, ștergând-o pe cea precedentă.

## Partea de Client

[image assetsSrc="Angular-Introduction-2.gif" /]

Încă o dată, browserul detectează un eveniment de clic, dar o **bibliotecă de rutare a clientului** o gestionează.

Detectează că adresa URL este sub forma unei **căi** (e.g. `'/users/jane.michaels`) și **nu** efectuează o solicitare GET.

Biblioteca modifică apoi adresa URL curentă, utilizând fișierul [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API), și modifică **starea** componentei date.

Un cadru frontal precum Angular **procesează** starea și modifică componentele **necesare**.

Dacă sunt necesare date noi, **le preia** în bucăți mici.

În loc să descarce o pagină web întreagă, Angular va descărca **numai** noile active și va **genera** codul HTML pregătit pentru client **local**.

[/slide]

[slide hideTitle]

# Aplicații cu o Singură Pagină

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/05-Modules-and-Routing/Angular-Modules-and-routing-10-Single-page-applications-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aplicațiile cu o singură pagină funcționează prin **valorificarea puterii** JavaScript-ului și a cadrelor precum Angular.

În SPA-uri, browserul **trimite o cerere inițială** și primește un fișier HTML aproape gol.

Cu toate acestea, el conține **referințe la fișiere JavaScript** - motorul principal al unei aplicații cu o singură pagină.

În contextul aplicațiilor web tradiționale (cu pagini multiple), atunci când se schimbă ruta, serverul răspunde cu o pagină web total diferită.

În cadrul unui SPA, atunci când **locația este schimbată**, **router-ul** va încărca acea componentă corespunzătoare, care e deja stocată pe partea de client.

De asemenea, pe de altă parte, o **diferență de conținut va** fi reprezentată în cadrul URL-ului.

Acest tip de rutare generează numeroase beneficii, inclusiv:

- Resursele aplicației sunt încărcate **doar o singură dată**

- Starea este mentenabilă pe toate paginile

- Putem utiliza **istoricul browserului**

- Interfața utilizatorului are un interval de transmitere a răspunsului mai mare

Totuși, există un dezavantaj minor - SPA-urile nu sunt **optimizate pentru search engine discovery**.

Acest lucru implică faptul că **aplicația noastră ar putea fi clasificată mai jos** în rezultatele căutării sau există posibilitatea ca aceasta să apară ca rezultat al unor interogări greșite.

Acest lucru poate deveni **mai puțin problematic** dacă aplicăm meta-etichetele corespunzătoare și utilizăm SEO (Optimizarea Motorului de Căutare) URL-uri prietenoase.

[/slide]
