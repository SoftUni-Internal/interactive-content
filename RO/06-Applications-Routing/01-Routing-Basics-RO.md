# Routing Basics 

[slide hideTitle]
# Multi Page Applications

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-3-4-Multi-page-applications-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Aplicațiile de mai multe pagini** reîncarcă întreaga pagină atunci când un utilizator interacționează cu aplicația.

Datele sunt schimbate atunci când este **solicitată** o nouă pagină.

După ce serverul returnează un răspuns, o nouă pagină este afișată în browser.

[/slide]

[slide hideTitle]

# Multi Page - beneficii și dezavantaje

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-5-Multi-page-applications-Pros-and-Cons-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


|**Pro**|**Contra**|
|---|---|
|Au performanțe foarte bune în **motoarele de căutare**|Sunt **complexe de dezvoltat**|
| Oferă un **map vizual** a aplicației atunci când este partajată printr-un link în social media | Front-End și Back-End sunt **cuplate** |
| Aplicația ar putea crește în **dimensiune** prin crearea mai multor **sisteme ierarhice** cu tot atâtea **pagini** de cât are nevoie site-ul dvs. | Este nevoie de mai mult efort pentru a optimiza o aplicație cu mai multe pagini |


[/slide]

[slide hideTitle]

# Single Page Application

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-6-7-Single-page-applications-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**SPA** este o abreviere pentru "**Single-Page Application**".

**Aplicația pe o singură pagină**:

- este o evoluție a **Aplicației pe mai multe pagini**

- **Actualizează dinamic** conținutul paginii, în loc să-l **reîncarce**

- **Re-randează** conținutul ca răspuns la acțiunile utilizatorului

**SPA**-urile folosesc **HTML5**, **CSS** și **AJAX** pentru a crea o interfață de utilizator fluidă și receptivă operată de utilizator.

Pentru a crea această experiență, SPA-urile folosesc starea din surse **interne** sau **externe**.

Starea internă este **limitată** la o singură intrare.

De asemenea, avem **SPA-uri** bazate pe locație, în care locația se actualizează întotdeauna.

Aceasta înseamnă că putem partaja un link și să fim siguri că oricine îl deschide va vedea pagina dorită.

**SPA-urile** bazate pe locație au nevoie de un obiect special numit "**Router**".

[/slide]

[slide hideTitle]

# SPA- beneficii și dezavantaje

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-8-Single-page-applications-Pros-and-Cons-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


|**Pro**|**Contra**|
|---|---|
|Sunt mult mai rapide.|Nu sunt bune la **Optimizarea motoarelor de căutare (SEO)**: soluția este **randarea de pe server** |
|Încarcă toate scripturile necesare **deodată** | Oferă un **singur link de partajare**|
|Cu SPA-urile, putem folosi istoricul **browserului** | Mai puțin sigur dacă sunt stocate în Front-End |
| Oferă **UX** mai bun||

[/slide]

[slide hideTitle]

# Ciclul de viață al aplicației

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-9-Multi-page-application-lifecycle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Aplicațiile pe mai multe pagini** și **Aplicațiile pe o singură pagină** au ciclurile lor de viață.

Acesta este **ciclul de viață al aplicațiilor pe mai multe pagini**: 

[image assetsSrc="JS-Applications-Routing.png" /]

Vedem că atunci când un utilizator **trimite o cerere**, serverul **răspunde cu un răspuns formatat HTML**.

După fiecare răspuns, pagina **se reîncarcă**.

Haideți să vedem ciclul de viață al **Aplicațiilor pe o singură pagină**.

[image assetsSrc="JS-Applications-Routing-1.png" /]

Vedem că la **cererea inițială**, serverul răspunde cu **un fișier HTML**.

Dar la orice altă solicitare, răspunsul este un **JSON**.

Asta pentru că am făcut solicitările cu **AJAX**.

Pagina se actualizează singură fără reîmprospătare, ceea ce dă senzația unei aplicații mult mai rapide.

[/slide]

[slide hideTitle]

# Tipuri de navigare 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-9-10-11-12-13-Multi-SPA-lifecycle-navigation-types-query-parameters-location-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există două tipuri de navigare: una **standard** și o navigație folosind **Rutare**.

Navigarea standard este utilizată în **Aplicațiile pe mai multe pagini**.

Folosește **hyperlinkuri** pentru a naviga prin aplicație.

Deoarece folosește **hyperlinkuri**, navigarea standard reîncarcă întreaga pagină.

[image assetsSrc="JS-Applications-Routing-2.png" /]

Celălalt tip este navigarea **Routing**.

O folosim în **SPA**, deoarece simulează navigarea standard fără a actualiza pagina.

[image assetsSrc="JS-Applications-Routing-3.png" /]

Navigarea **Rutare** ne permite să actualizăm adresa URL și conținutul după ce totul este randat.

**Nu va declanșa o reîncărcare** decât dacă utilizatorul reîmprospătează pagina făcând clic pe `F5`.

## Query Parameters

**Parametrii de interogare** sunt un set de parametri atașați la sfârșitul unei adrese URL.

Aceștia ne oferă posibilitatea de a **personaliza** cererea trimisă către API.

Putem folosi parametrii de interogare:

- Dacă vrem să filtrăm

- Dacă vrem să sortăm

- Dacă dorim să afișăm numărul curent de pagină într-o colecție paginată

Uitați-vă la acest exemplu:

[image assetsSrc="JS-Applications-Routing-4.png" /]

În acest exemplu, avem o adresă URL.

**Protocolul** este prima parte a adresei URL.

După protocol, avem **hostname** și **pathname**.

În acest caz, parametrii de interogare sunt la final.

Acestea sunt **cheia**, **valoarea ei** și **eticheta**, care indică faptul că elementul este în trending.

[/slide]
