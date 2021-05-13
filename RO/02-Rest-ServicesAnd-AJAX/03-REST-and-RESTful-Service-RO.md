# REST

[slide hideTitle]

# Servicii RESTful

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-14-15-rest-and-restful-services-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**REST** este o prescurtare pentru "**Re**prezentativ **S**tate **T**ransfer".

Este un stil de arhitectură bazat pe **cereri-răspunsuri** folosit pentru **comunicarea client-server** prin HTTP.

Fiecare cerere se face către **Uniform Resource Identifier** (**URI**).

Putem folosi operațiuni **CRUD** pentru a prelua sau modifica aceste resurse.

Prescurtarea **CRUD** înseamnă "**C**reate, **R**ead, **U**pdate and **D**elete".

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-4.png" /]

Serviciile **RESTful** oferă acces la resursele de pe server.

[/slide]

[slide hideTitle]

# Constrângeri Arhitecturale REST

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-16-rest-architectural-constraints-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există **șase constrângeri arhitecturale** pe care le setează **REST**:

- **Arhitectura client-server**
  * clientul și serverul trebuie să fie **independenți** unul de celălalt
  * doar **URI-urile resursei** trebuie să fie vizibile pentru client
  * aceasta permite **separarea preocupărilor** și este o practică standard

- **Statelessness**
  * serverul nu păstrează **nici un istoric** al solicitărilor
  * fiecare cerere este tratată ca **nouă**, chiar dacă vine de la **același client**
  * dacă este necesară o **stare** (pentru **personalizare** etc.), **clientul** însuși trebuie să o furnizeze
  
- **Raspunsuri Cache-abile**
  * memorarea în cache permite **încărcarea** mai rapidă pe partea clientului
  * încărcarea serverului este redusă, făcându-l mai **scalabil**
  * trebuie aplicat **tuturor** resurselor compatibile
  
- **Arhitectură de sistem stratificat**
  * folosind mai multe servere în scopuri diferite
  * reduce timpul de încărcare separând operațiunile (de exemplu, folosind un server pentru autentificarea solicitărilor și un al doilea pentru stocarea datelor)
  * acest lucru este complet invizibil pentru client
  
- **Cod la cerere** - aceasta este o variantă **opțională**
  * în afară de trimiterea resurselor folosind **XML** sau **JSON**, este permisă și trimiterea **codului executabil** atunci când aplicația o solicită

- **Interfață uniformă**
  * fundamental pentru orice sistem **REST** complet proiectat
  * fiecare resursă trebuie să fie **identificată** în cerere
  * **reprezentările** resursei trebuie să aibă **suficiente date** pentru a permite **modificarea**
  * mesajele trebuie să fie **autodescriptive**

Dacă doriți să aflați mai multe, puteți vedea [dissertation](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf?fbclid=IwAR0vzDHFwDYLG_uarrsMbxwhgvnmgE6s-7jk37y0agkxxgqvXM7y-wCiZXQ) by **Roy Thomas Fielding**, University of California, Irvine.

[/slide]

[slide hideTitle]
# Servicii REST and RESTfull: Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-17-rest-and-restful-services-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să luăm în considerare câteva exemple teoretice.

Dacă dorim să creăm o postare nouă, vom trimite o solicitare **POST** către `http://some-service.org/api/posts`.

Pentru a obține toate postările, vom trimite o cerere **GET** către același punct final.

Dar dacă vrem să **obținem** o postare specifică, trebuie să adăugăm **ID-ul** postării respective, iar punctul final va arăta astfel: `http://some-service.org/api/posts/17`.

De asemenea, avem nevoie de **ID-ul** postării respective dacă dorim să trimitem o solicitare **DELETE**, **PUT** sau **PATCH**

Punctul final va arăta astfel: `http://some-service.org/api/posts/17`.

[/slide]

