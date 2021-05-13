# Protocolul HTTP

[slide hideTitle]

# Noțiuni de Bază HTTP

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-3-4-http-basics-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Protocol de transfer hipertext** (HTTP) este un protocol stratificat de aplicație pentru transmiterea documentelor hipermedia, cum ar fi HTML

**HTTP** asigură comunicarea între browserul web și server.

HTTP urmează un clasic **model client-server** unde numai clientul, care cel mai adesea este un **navigator web**, poate trimite o cerere și, atunci când serverul primește cererea, este obligatoriu să trimită un **răspuns** înapoi.

Dar serverul reacționează numai **la cerere**, ceea ce înseamnă că nu poate trimite date înainte **de a primi astfel de date**.

Prin urmare, serverul nu păstrează date între două cereri, făcând HTTP un **protocol Stateless**.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX.png" /]

După cum puteți vedea, **clientul** trimite o **cerere**, și **serverul** trimite un **răspuns**.

[/slide]

[slide hideTitle]

# Metode de Solicitare HTTP

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-5-http-request-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**HTTP** folosește **metode** pentru a indica acțiunea efectuată a resursei identificate.

Cele mai utilizate metode sunt:

- **GET** - preia sau încarcă o resursă
- **POST** - creează sau stochează o resursă
- **PUT** - actualizează o resursă
- **DELETE** - elimină o resursă
- **PATCH** - actualizează parțial o resursă
- **HEAD** - preia anteturile unei resurse
- **OPTIONS** - returnează metodele HTTP acceptate de server pentru adresa URL specificată

Toate metodele HTTP sunt **sensibile la majuscule**.

Dacă le scriem cu litere mici, ele nu vor funcționa.

Trebuie să fie cu **majuscule**.

[/slide]

[slide hideTitle]

# Exemple de Solicitări HTTP GET

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-6-http-get-request-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Trimitem o solicitare **GET** când vrem să obținem date de pe server.

Solicitarea **GET** este utilizată cel mai des.

Iată un exemplu:

```
GET /users/softuni/repos HTTP/1.1
Host: api.github.com
Accept: */*
Accept-Language: en
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36
Connection: Keep-Alive
Cache-Control: no-cache
<CRLF>
```

Prima linie, `GET /users/softuni/repos HTTP/1.1`, se numește **linie de solicitare**.

Următoarele linii sunt **antetele** și **corpul** - `<CRLF>`.

Folosim secvența `<CRLF>` pentru a separa antetul de corp.

Deoarece aceasta este o cerere **GET**, corpul este **gol**.

[/slide]

[slide hideTitle]

# Exemple de Solicitări HTTP Post

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-7-http-post-request-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Trimitem solicitări **POST** când vrem să stocăm date pe server.

Iată un exemplu de solicitare **POST**:

```
POST /repos/softuni/js-apps/issues HTTP/1.1
Host: api.github.com
Accept: */*
Accept-Language: en
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0 (compatible;MSIE 6.0; Windows NT 5.0)
Connection: Keep-Alive
Cache-Control: no-cache
<CRLF>
{"title":"Found a bug",
 "body":"I'm having a problem with this.",
 "labels":["bug","minor"]}
<CRLF>
```

Aici avem **linia de solicitare**, **antetele** și **corpul**.

De această dată, **corpul** deține datele trimise.

[/slide]

[slide hideTitle]

# Exemplu de Răspuns HTTP

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-8-http-response-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Odată ce a fost trimisă o cerere, serverul trebuie să returneze un **răspuns**.

Răspunsul va arăta astfel:

```
HTTP/1.1 200 OK
Date: Fri, 11 Nov 2016 16:09:18 GMT+2
Server: Apache/2.2.14 (Linux)
Accept-Ranges: bytes
Content-Length: 84
Content-Type: text/html
<CRLF>
<html>
  <head><title>Example</title></head>
  <body>Example HTML page.</body>
</html>
```

Prima linie, `HTTP/1.1 200 OK`, se numește **linie de stare a răspunsului**.

Aceasta deține **codul de stare** a răspunsului serverului, care ne spune dacă cererea a fost finalizată.

După **linia de răspuns** urmează **antetul**, care deține informații despre server.

Apoi avem **corpul**, care deține datele pe care le-am solicitat.

[/slide]

[slide hideTitle]

# Coduri de Stare a Răspunsului HTTP

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-9-http-response-status-codes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare răspuns are un **cod de stare**, din care înțelegem dacă cererea are succes sau nu.

Acestea sunt câteva dintre coduri:

| Cod de stare   | Acțiune | Descriere   |
| :---:   |    :----: |   :---:     |
|`200`| **OK**| Resursa este recuperată cu succes. |
|`201`| **Create**| Noua resursă este creată. |
|`204`| **No Content**| Nu este nimic de returnat. |
|`301` or `302`|**Moved**| Resursa este mutată sau redirecționată către o altă locație. |
|`400`| **Bad Request**| Cererea este nevalidă sau există o eroare de sintaxă. |
|`401` or `403`| **Unauthorized**| Autentificarea a eșuat sau accesul a fost refuzat. |
|`404`| **Not Found**| Resursa nu este validă sau nu a fost găsită. |
|`409`| **Conflict**| Există un conflict în cerere, de exemplu, e-mail duplicat. |
|`500` or `503`| **Server Error** | Există o eroare de server intern sau serviciul nu este disponibil. |
[/slide]

[slide hideTitle]

# Tipul Conținutului și Dispunerea

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-10-content-type-and-disposition-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare solicitare trebuie să aibă un câmp pentru **Content-Type** (tipul conținutului) sau **Content-Disposition** (dispunerea conținutului).

Aceste câmpuri specifică formatul cererii.

Putem seta **Content-Type** să fie **JSON-encoded**.

Va arăta așa: `Content-Type: application/json`.

De asemenea, putem seta **Content-Type** să fie: `Content-Type: text/html`

Dacă vrem să descărcăm un fișier **PDF**, trebuie să-l configurăm după cum urmează:

```
Content-Type: application/pdf
Content-Disposition: attachment;
filename="Example.pdf"
```

[/slide]
