# Softuni Forum Workshop: Partea 4

[slide hideTitle]

# Cerințe

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/10-Workshop-Pipes-Interceptors-Subjects/Part-1-Authentication Interceptor-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


În acest workshop vom vedea ce sunt JWT (JSON WEB TOKEN) și conceptul de **INTERCEPTORS**.

Va trebui să interceptăm **solicitările** și **răspunsurile** între partea de front-end și cea de back-end.

## Interceptor de Autentificare

Când un utilizator se **înregistrează** sau încearcă **să se logheze**, API-ul ar trebui să returneze un **cookie** care conține un JSON WEB TOKEN (JWT).

Folosiți-l pentru a **autentifica** utilizatorul curent.

[/slide]

[slide hideTitle]

# Interceptor de Erori

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/10-Workshop-Pipes-Interceptors-Subjects/Part-2-Error Interceptor-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În unele cazuri, erorile vor surveni. Folosind un interceptor, **încercați să preveniți aceste experiențe neplăcute pentru utilizator** și să gestionați aceste erori.

Puteți folosi **404 page** pentru a **arăta informațiile referitoare la erori** sau să puneți un element **paragraph** `("<p>")` în **antet** (precum în imagine) cu **stilizarea** furnizată:

[image assetsSrc="Angular-Pipes-Workshop.png" /]

```css
.notification{
  position: fixed;
  z-index: 10;
  right: center;
  top: 10%;
  padding: 0.5rem 5 rem;
  border-radius: 0.5rem;
  color: rgb(255, 255, 255);
  font-style: italic;
  text-decoration: underline;
  box-shadow: 0 5px 10px rgb(204, 204, 204);
  background-color: rgba(238, 74, 74, 0.699);
}

.error-message {
    background-color: rgba(238, 74, 74, 0.699);
}

```

[/slide]

[slide hideTitle]

# Lazy Loading

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/10-Workshop-Pipes-Interceptors-Subjects/Part-3-Lazy Loading-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Lazy loading ne ajută **să descărcăm** pagini web pe **bucăți**. Implementați lazy loading pentru toate modulele posibile. 

[/slide]

[slide hideTitle]

# Pipes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/10-Workshop-Pipes-Interceptors-Subjects/Part-4-Pipes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Încercați să scrieți pipe-uri, după cum urmează:

- Scrieți un pipe pentru împărțirea titlurilor lungi ale temelor (maxim 25 de caractere). Puteți folosi "SlicePipe" furnizat de Angular sau să scrieți propriul vostru pipe.

[image assetsSrc="Angular-Pipes-Workshop2.png" /]

- Scrieți un pipe pentru a converti data, la fel ca în imagine:

[image assetsSrc="Angular-Pipes-Workshop3.png" /]

- Scrieți alt pipe, care calculează timpul care a trecut de la crearea postării:

[image assetsSrc="Angular-Pipes-Workshop4.png" /]

[/slide]




