# Prezentare generală a rutării

[slide hideTitle]

#  Ce este rutarea?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/01-Intro-To-Angular-And-Typescript/Intro-to-Angular-and-Typescript-8-9-Routing-Overview-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Rutarea** este o parte a **navigării pe site-ul web**, este responsabilă pentru **comutarea** între diferite vizualizări (pagini).

Rutarea poate fi **efectuată** atât pe **partea de server**, cât și pe **partea de client** (în browser).

## Rutarea pe partea de client

**Rutarea pe partea de client** este un element principal al unei **aplicații cu o singură pagină** (**SPA**), care este centrul acestui curs.

Atunci când o cerere "**GET**" este trimisă către un SPA, **răspunsul serverului** este în mod normal o singură pagină "index", însoțită de cod **JavaScript** (**Angular**). 

Acest cod va rula în **browser** și va **dicta** ce părți din SPA-ul nostru vor fi **randate**, în funcție de acțiunile **utilizatorilor**.

Exemplu: 

[image assetsSrc="Angular-Introduction-2.gif" /]

Aici **JavaScript** (**Angular**) **controlează** ce pagină va fi afișată, pe baza **locațiilor URL**.

## Partea de server

Când o cerere "**GET**" este trimisă către o **Aplicație cu mai multe pagini**, serverul răspunde cu o pagină web care a fost **randată** pe **server** și apoi **vizualizată** în browser.

Când un utilizator încearcă să acceseze **altă pagină**, navigarea **pe partea de server** **reîncarcă** întreaga aplicație și apoi **returnează un răspuns**, cu noua pagină care a fost **redată** pe server și afișat în browser.

O **Aplicație multi-pagină** poate fi recunoscută prin faptul că declanșează pictograma de **reîncărcare**.

Exemplu:

[image assetsSrc="Angular-Introduction-1.png" /]

Iată **câteva pagini**, care așteaptă să fie **randate** pe server odată ce un utilizator **le accesează**, indiferent de locul în care **vă aflați** în aplicație.

[/slide]

[slide hideTitle]

# Aplicație cu o singură pagină

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/01-Intro-To-Angular-And-Typescript/Intro-to-Angular-and-Typescript-10-Single-Page-Applications-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Router navigation** va încărca resursa corespunzătoare atunci când se modifică **locația**.

Acest tip de rutare oferă câteva **avantaje**:

- Resursele sunt încărcate **o singură dată**, ceea ce crește performanța aplicației

- Starea poate fi menținută pe toate paginile

- Putem folosi **istoricul browserului**

- **UX** devine mai rapid mai receptiv

- Tranziții ușoare între pagini 

[/slide]
