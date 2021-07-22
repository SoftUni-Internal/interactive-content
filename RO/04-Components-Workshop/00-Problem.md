# Softuni Forum Workshop: Partea 1

[slide hideTitle]

# Cerințe Privind Sarcini

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/04-Workshop-Components/04.Workshop-Components-Part-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Iată un link către** [resources](https://videos.softuni.org/resources/javascript/javascript-angular/new-resources-workshop-Components.zip) **pentru această sarcină.**

Această sarcină conține un schelet de program care constă din coduri **HTML** și **CSS**, vă rugăm să nu modificați structura acestuia. 

După ce deschideți `index.html`, veți vedea următoarea pagină:

[image assetsSrc="Angular-Components-Workshop-New.png" /]

Aplicația este un forum în care fiecare utilizator înregistrat poate crea o temă sau poate posta un comentariu.

Prima parte a sarcinii este de a împărți codul HTML și CSS din schelet **în componente**, astfel încât fiecare parte să poată fi **reutilizabilă**. 

[/slide]

[slide hideTitle]

# MongoDB

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/04-Workshop-Components/04.Workshop-Components-Part-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Înainte de a începe un nou proiect în Angular, trebuie să instalați MongoDB.

Puteți găsi un ghid de instalare în următorul document:  

[MongoDB-Installation-Guide.docx](https://videos.softuni.org/resources/javascript/javascript-angular/MongoDB-Installation-Guide.zip).

După instalare, baza de date va fi goală, astfel încât să puteți încărca datele inițiale furnizate.

Asigurați-vă că urmați acești pași:

- Descărcați folderul numit „forum”

- Porniți MongoDB pe o linie de comandă a sistemului

- Deschideți un nou prompt de comandă și, în consolă, tastați următoarea comandă: 

`mongorestore -d forum C:\Users\Name\Desktop\forum`

**Notă**: **Ar trebui să înlocuiți** `C:\Users\Name\Desktop\forum` **cu calea folderului** `forum` **de pe calculatorul dumneavoastră!**

Dacă funcționează corect, ieșirea de pe consolă ar trebui să aibă un aspect similar cu acesta:

[image assetsSrc="Angular-Components-Workshop(1).png" /]

Asta este! Acum puteți verifica dacă aveți db cu comanda "show dbs": 

[image assetsSrc="Angular-Components-Workshop(2).png" /]

[/slide]

[slide hideTitle]

# REST API

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/04-Workshop-Components/04.Workshop-Components-Part-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Puteți găsi **REST API** în [resources](https://videos.softuni.org/resources/javascript/javascript-angular/Rest-api-resources.zip).

Pentru a face uz de acesta, ar trebui să instalați dependențele necesare introducând comanda `npm install`. 

După aceea, tastați `npm start`.

Pentru a prelua temele, faceți o solicitare GET către `localhost:3000/api/themes`.

Iată specificațiile pentru punctele finale REST API:

**Adresa URL de bază:** `https://localhost:3000/api`

| **Metoda HTTP** | **Descriere** | **Punct final** | **Așteptări** | **Autentificare necesară** |
|:---:|:---:|:---:|:---:|:---:|
| `POST`   | Signing up            | `/users/register`                 | `username`, `email`, `password`, `rePassword`, `tel` - optional     | No  |
| `POST`   | Signing in            | `/users/login`                  | `username`, `password`  | No  |
| `POST`   | Logging out           | `/users/logout`                  |             | Yes |
| `GET`    | Get all themes        | `/themes`                        |             | No  |
| `POST`   | Post new Theme        | `/themes`                        | `themeName`, `postText`   | Yes |
| `POST`   | Post comment in Theme  | `/themes/:themeId`                | `postText`    | Yes |
| `PUT`    | Subscribe to theme    | `/themes/:themeId`               |             | Yes |
| `GET`    | Get latest posts      | `/posts?limit=5`                 |             | No  |
| `PUT`    | Edit post (possible only for the creator of this post)             | `/themes/:themeId/posts/:postId`  | `postText`    | Yes |
| `DELETE` | Delete post (possible only for the creator of this post)            | `/themes/:themeId/posts/:postId` |             | Yes |
| `PUT`    | Like a post           |`/likes/:postId`                |             | Yes |
| `GET`    | Get user info / **Verify if user is logged in** | `/users/profile`                  |             | Yes |
| `PUT`    | Update user info      | `/users/profile`                 | `username`, `email`, `tel` - optional  | Yes |

## Utilizator înregistrat/neînregistrat

**NOTĂ: Deoarece nu am acoperit încă autentificarea (conectarea și înregistrarea), o puteți codifica utilizând o variabilă.**

Utilizatorii **neînregistrați** ar trebui să vadă butoanele / linkurile **Login** și **Register**. 

[/slide]

[slide hideTitle]

# Inițializarea Angular

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/04-Workshop-Components/04.Workshop-Components-Part-4-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Structura Aplicației

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/04-Workshop-Components/04.Workshop-Components-Part-5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Implementarea Componentelor Theme și Post

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/04-Workshop-Components/04.Workshop-Components-Part-6-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Separarea Stilurilor CSS 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/04-Workshop-Components/04.Workshop-Components-Part-7-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Redarea Temei

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/04-Workshop-Components/04.Workshop-Components-Part-8-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După ce backend-ul este gata de utilizare, trebuie să **preluați toate temele** și **să le listați** pe pagina de pornire în formatul furnizat în schelet.  

**Temele din secțiunea principală** ar trebui să fie **sortate în ordine descrescătoare în funcție de abonați.**

Fiecare temă ar trebui să aibă un **title** (titlu), o **date**, **username** al creatorului său și un **count of the subscribers**  la tema respectivă. 

[image assetsSrc="Angular-Components-Workshop-New-2.png" /]

[/slide]

[slide hideTitle]

# Redarea Postări

În secțiunea **Postări recente, trebuie redate doar cele mai recente 5 postări**.

`https://localhost:3000/api/posts?limit=5` 

Postările vor fi returnate din REST-API **sortate după ora de creare**.

Fiecare componentă trebuie să conțină **theme title**, **username** al ultimului utilizator care a postat un comentariu în firul temei, și **time** la care postarea a fost creată. 

[image assetsSrc="Angular-Components-Workshop-New-3.png" /]

[/slide]

[slide hideTitle]

# Bonus: Optimizarea Codului 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/04-Workshop-Components/04.Workshop-Components-Bonus-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]
