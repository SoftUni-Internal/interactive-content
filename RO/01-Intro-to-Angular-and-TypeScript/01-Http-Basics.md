# Noțiuni de bază HTTP 

[slide hideTitle]

# Ce este HTTP?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/01-Intro-To-Angular-And-Typescript/Intro-to-Angular-and-Typescript-3-4-HTTP-Basics-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Hypertext Transfer Protocol** sau **HTTP** este un protocol la nivel de aplicație pentru sisteme de informații distribuite, colaborative, hipermedia între un client web și un server web.

**HTTP** este un protocol **client-server** bazat pe text, care poate fi folosit pentru **transferul** resurselor web, cum ar fi fișierele **HTML**, **imaginile**, **rezultatele interogării** și multe altele, utilizând un mod de comunicare **standardizat**.

Ceea ce face din HTTP un protocol puternic sunt **următoarele caracteristici**:

- **Fără conexiune**: browserul web și serverul nu sunt **conectate**, când browserul web trimite o cerere către server o **conexiune este stabilită**

Serverul este **solicitat** să răspundă și după ce răspunsul a fost **trimis**, conexiunea dintre acestea este **terminată**.

Singura dată când un client web și un server web **se pot adresa reciproc** este în timpul unui schimb de tipul "solicitare-răspuns".

- **Independență media**: nu există o **restricție** cu privire la tipul de date care poate fi trimis folosind HTTP


Browserul web specifică **tipul de conținut** (tip MIME) și dacă **serverul web** poate gestiona date de acest tip, cererea HTTP va fi gestionată.

- **Fără stare**: **serverul web** și **clientul web** nu sunt conștienți unul de celălalt tot timpul, ceea ce înseamnă că **conexiunea** este creată numai atunci când se face o **cerere** 

În acest fel, nici clientul, nici browserul **nu păstrează informații între solicitări** cookie-urile pot fi utilizate pentru a **rezolva** această problemă.

[/slide]

[slide hideTitle]

# Modelul Solicitare-Răspuns

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/01-Intro-To-Angular-And-Typescript/Intro-to-Angular-and-Typescript-5-6-HTTP-Request-Response-Protocol-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Atunci când se utilizează protocolul HTTP în **majoritatea** cazurilor, avem o **comunicare** între un **client** și un **server**:

- Un program client este de obicei un **browser web** (Google Chrome, Mozilla Firefox, Safari etc.). Poate **începe** conexiunea
- Un program de server este un **server web**, care **rulează constant** și așteaptă **cereri**

**Serverul web** poate fi modificat folosind diferite **limbaje de programare**, unele opțiuni posibile fiind:
- [ASP.Net Core](https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core) - CSharp
- [Spring](https://spring.io/) - Java
- [Node.js](https://nodejs.org/en/about/) - JavaScript
- [Django](https://www.djangoproject.com/) - Python

Exemplu:

[image assetsSrc="Angular-Introduction.png" /]

În acest exemplu, un server web trimite o **cerere** "**GET**" referitoare la un fișier **numit** "index.html", **folosind** protocolul HTTP/1.1, unde "1.1" este **versiunea actuală** a protocolului HTTP.

Serverul **returnează** un răspuns, în acest caz serverul **confirmă** utilizarea protocolului HTTP / 1.1.

**Răspunsul real al serverului** este "200 OK" și, de asemenea, textul: "Welcome to our Web site!".

Puteți citi mai multe despre statusurile codurilor în [MDN Web Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

[/slide]

[slide hideTitle]

# Exemple de solicitări HTTP

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/01-Intro-To-Angular-And-Typescript/Intro-to-Angular-and-Typescript-7-Example - Hyper-Text-Transfer-Protocol-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Trimitem solicitări **GET** atunci când dorim să **obținem date** de la server.

Iată un exemplu:

```html
GET /courses/about.aspx HTTP/1.1
Host: www.softuni.com
User-Agent: Mozilla/5.0
<CRLF>
```

Prima linie conține **tipul de solicitare**, **resursa solicitată** și **versiunea protocolului**.

**Host**, **User-Agent** și **body** sunt plasate pe rândurile următoare.

## Răspuns HTTP 

Acest răspuns va arăta astfel:

```html
HTTP/1.1 200 OK
Date: Mon, 5 Jul 2019 13:09:03 GMT
Server: Microsoft-HTTPAPI/2.0
Last-Modified: Mon, 12 Jul 2010 15:33:23 GMT
Content-Length: 54
<CRLF>
<html><title>Hello</title>Welcome to our site</html>
```

Pe prima linie, putem vedea **versiunea protocolului** și **starea codului**.

Următoarele linii conțin:

- Data **răspunsului**

- **Tipul de server**

- **data** când resursa a fost **modificată**

- **lungimea** **conținutului**

**Corpul** este plasat după **anteturi**.
[/slide]
