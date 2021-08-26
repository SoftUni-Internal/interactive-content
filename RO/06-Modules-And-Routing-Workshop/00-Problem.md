# Softuni Forum Workshop: Partea 2

[slide hideTitle]

# Cerințe Privind Sarcini

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-0-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Aici aveți un link** [resources](https://videos.softuni.org/resources/javascript/javascript-angular/Modules-and-routing-resources.zip) **pentru această cerință.**

Până acum, am creat **o pagină dinamică** care **listează toate temele** sortate în ordine descrescătoare în funcție de numărul de abonați.

Următorul pas să implementăm **încă câteva pagini** și **rute între ele.**

Vi se va furniza un schelet **HTML** și **CSS** pentru toate celelalte pagini suplimentare pe care trebuie să le creați.

Există o singură captură, jumătate din aceste pagini necesită **autentificare**.

Trebuie să creați câteva **proprietăți** sau **servicii** pentru a **falsifica** această **autentificare**, deoarece nu știm cum să manipulăm **formularele** corect încă sau procesul de autentificare reală și autorizație.

O vom remedia mai târziu atunci când dobândim cunoștințele necesare pentru a face acest lucru.

[/slide]

[slide hideTitle]

# Bara de Navigare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-1-2-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Bara de Navigare Pentru Utilizatori Logați

Utilizatorii **“Logged in”** și **“not logged in”** pot vedea 3 opțiuni în centrul navigării:

- **butonul** \[**Home**\], ar trebui să se refere la pagina principală `localhost:4200/home`

- **butonul** \[**Themes**\], ar trebui să se refere la "page with all themes" `localhost:4200/themes`

- **butonul** \[**New Theme**\], ar trebui să se refere la "create theme" `localhost:4200/add-theme`

Când un  "**user**" nu este "**logged in**" ar trebui să vadă următoarea navigație: 

- **eticheta** \[**My Profile**\], ar trebui să se refere la pagina de profil `localhost:4200/profile`

- **eticheta** \[**Logout**\], ar trebui să se refere la `localhost:4200/logout` 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New.png" /]

## Bara de Navigare Pentru Utilizatori Nelogați

Când utilizatorul este "**not logged in**" ar trebui să vadă următoarea navigație:  

- **eticheta** \[**Login**\], ar trebui să se refere la pagina principală `localhost:4200/login`

- **eticheta** \[**Register**\], ar trebui să se refere la `localhost:4200/register` 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-2.png" /]

[/slide]

[slide hideTitle]

# Pagina Principală

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-3-4-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Nelogat

Aceasta este pagina principală `localhost:4200/home`, o pagină de bun venit.

Componenta "welcome" pe care le avem deja pot fi refolosite aici. 

Toți "users" pot accesa această pagină indiferent de autentificarea lor. 

Vizualizarea utilizatorului care nu este conectat:  

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-3.png" /]

## Logat

Vizualizarea utilizatorului conectat: 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-4.png" /]

[/slide]

[slide hideTitle]

# Pagina de Înregistrare (Nelogat)

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aceasta este pagina de înregistrare `localhost:4200/register`. 

Acesta va fi **punctul** aplicației dvs. în care proprietatea falsă **isLoggedIn** poate fi schimbată în **true**.

Deocamdată nu avem o bază de date cu înregistrarea utilizatorului.

Deci, asigurați-vă că **fiecare utilizator** înregistrat este stocat în **userService** sau într-un alt loc adecvat.

Deci, fiecare dintre ei se poate conecta cu succes.

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-5.png" /]

[/slide]

[slide hideTitle]

# Login (Not Logged in)

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-6-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aceasta este pagina de аutentificare (**log in**) `localhost:4200/login`. 

Acesta va fi un alt **punct** al aplicației în care proprietatea falsă **isLoggedIn** poate fi schimbată în **true**.

Deocamdată nu avem o bază de date care să dețină înregistrările utilizatorilor.

Deci, asigurați-vă că fiecare utilizator înregistrat este stocat în **userService** sau într-un alt loc adecvat.

Fiecare dintre ei ar trebui să se conecteze cu succes.

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-6.png" /]

[/slide]

[slide hideTitle]

# Log Out Page

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-7-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Eticheta** \[**Logout**\], ar trebui să se refere la `localhost:4200/logout` pagina:

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-14.png" /]

[/slide]

[slide hideTitle]

# Pagina Pentru Teme 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-8-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Nelogat

Aceasta este pagina temelor `localhost:4200/themes`.

Este o pagină pe care o avem deja. 

Toți "users" pot accesa această pagină indiferent de autentificarea lor. 

Făcând clic pe titlul unei teme, veți fi redirecționat către vizualizarea conținutului temei. Este descris mai jos.

Există mai multe diferențe între un utilizator conectat și un utilizator anonim.

Utilizatorul anonim ar trebui să vadă următoarele: 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-7.png" /]

## Logat

Aceasta este pagina temelor `localhost:4200/themes` pentru utilizatorii autentificați.

**Notă**: Deoarece încă nu sunteți autentificat, puteți codifica acest **userId** `5fa64b162183ce1728ff371d` în serviciul dvs., pentru a plasa logica utilizatorilor abonați (butoanele **roșu** și **verde**). 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-8.png" /]

[/slide]

[slide hideTitle]

# Comentariile Temelor 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-9-10-Themes-comments-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Nelogat

Aceasta este pagina de comentarii tematice `localhost:4200/themes/:themeId`, unde utilizatorul poate vedea toate postările pentru tema selectată. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-9.png" /]


## Logat

Utilizatorul conectat poate **adăuga noi comentarii** sau **să aprecieze** postările celorlalți utilizatori. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-10.png" /]

[/slide]

[slide hideTitle]

# Pagina Pentru Crearea unei Noi Teme (Doar Utilizatori Logați)

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-11-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aceasta este pagina de creare a unei teme noi `localhost:4200/themes` unde fiecare **utilizator** (conectat) își poate crea propria temă.  

- Când butonul **"Post"** este apăsat, poți încerca să creezi o **"POST request"** la `localhost:4200/themes` cu informațiile temei date. 

După crearea cu succes a temei, **redirecționați** utilizatorul curent către **pagina de comentarii a temei** a noii teme.

- Când butonul **"Cancel"** este apăsat, **redirecționați** utilizatorul către **pagina de pornire**. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-11.png" /]

[/slide]

[slide hideTitle]

# Profil - Logat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-12-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Aceasta este pagina de profil `localhost:4200/profile`. 

Această pagină va afișa informații despre utilizatorul conectat în prezent.

Deocamdată, datele de pe această pagină vor fi **statice**, cu excepția cazului în care creăm mai mult decât proprietățile false **isLoggedIn**.

Butonul "Edit" va înlocui câmpurile de informații cu câmpuri de intrare, dar acest lucru se va face în următorul atelier, pe măsură ce vom afla mai multe despre gestionarea formularelor. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-12.png" /]

[/slide]

[slide hideTitle]

# Rutele Nevalide

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-13-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aceasta este pagina pentru toate **rutele nevalide** `localhost:4200/??????`. 

Folosiți-l dacă este dată o cale nevalidă.

[image assetsSrc="Angular-Modules-And-Routing-Workshop-New-13.png" /]

[/slide]

[slide hideTitle]

# Rute Protejate

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/06-Workshop-Modules-and-Routing/06.Workshop-Modules-and-Routing-Part-14-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Asigurați-vă că toate paginile **utilizatorilor**(conectați) sunt **protejate**. 

Asta înseamnă că dacă **proprietatea** **"isLoggedIn"** este setat la **fals** paginile **nu pot fi accesate**. 

Creați gărzi de autentificare. 

[/slide]

