# Problemă cu Soluție: Blog

[slide hideTitle]

# Preluarea Datelor din Firebase

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/04-JS-Applications-Asynchronous-Programming-lab-videos-step-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Descărcați resursele de aici [here](https://videos.softuni.org/resources/javascript/javascript-applications/06_Blog.zip).

Creați un program pentru citirea conținutului blogului.

Trebuie să facă **cereri** către **server** și să afișeze **toate postările de blog** și **comentariile** lor.

Va trebui să faceți cereri la următoarea adresă URL `https://blog-apps-c12bf.firebaseio.com/`

Butonul cu ID  `btnLoadPosts` ar trebui să facă o cerere **GET** către `/posts`. 

**Răspunsul** de pe **server** va fi un **Obiect care conține alte obiecte**.

```
{-LhdbZ31ND3Rhw41UGMN: {..}, -Lhdc-Ttz9-KiWSuvh6W: {...}, -LhdcLmyARLEBibsSvjZ: {..}, -LhdccRyWr_7UCPtclmM: {..}}
-LhdbZ31ND3Rhw41UGmN: {body: "An asynchronous model allows multiple things to ha...he result (for example, the data read from disk).", id: "rrt87...
-Lhdc-Ttz9-KiW9uvh6W: {body: "In a synchronous programming model, things happen ...stops your program for the time the action takes.", id: "rrt87...
-LhdcLmyARLEB1bsSvjZ: {body: "One approach to asynchronous programming is to mak... the callback function is called with the result.", id: "rrt87...
-LhdccRyWr_7UCPtclmM: {body: "Working with abstract concepts is often easier whe...turn an object that represents this future event.", id: "rrté87...
__proto__: Object
```

Fiecare obiect va avea următorul format:

```js
{
    body: {
        postBody
    },
    id: {
        postId
    },
    title: {
        postTitle
    }
}
```
[/slide]

[slide hideTitle]

# Redarea Тitlurilor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/04-JS-Applications-Asynchronous-Programming-lab-videos-step-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creați un element `<option>` pentru fiecare postare folosind **obiectul cheie** ca valoare și **obiectul curent de proprietate a titlului** ca text în interiorul nodului cu ID "**posts**".

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-2.jpg" /]

```js
<select id="posts">
   <option value="-LhdbZ31ND3Rhw41UGmN">ASYNCHRONOUS PROGRAMMING</option>
   <option value="-Lhdc-Ttz9-KiW9uvh6W">SYNCHRONOUS PROGRAMMING</option>
   <option value="-LhdcLmyARLEB1bsSvjZ">CALLBACKS</option>
   <option value="-LhdcecRyWr_7UCPtclmM">PROMISES</option>
</select>
```
[/slide]

[slide hideTitle]

# Afișarea Detaliilor Postării

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/04-JS-Applications-Asynchronous-Programming-lab-videos-step-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când se face clic pe butonul cu ID-ul "**btnViewPost**" trebuie făcută o cerere **GET** către:

- `/posts/{postId}` pentru a obține postarea selectată (din meniul derulant cu ID-ul "**posts**")

Următoarea **cerere** va returna un **singur obiect** așa cum este descris mai sus

- `/comments`: pentru a obține toate comentariile

Cererea va **returna** un **obiect cu obiecte**.

```
{-LhdewtO2LIrzuThWlMj: f..}, -LhdfHFg8dNxK-qUaukL: {..}, -LhdfVg4IDKa@Cft-dQZ: {..}, -LhdfuAXoimPycgRRFf-3: {..}, -Lhdg@x8QG-j2vnNUALS: {..}, .}
-LhdewtO21IrzuThW1IMj: {id: "rrt8713kjxljda5r", postId: "rrt875tgjxlimgqb", text: "So good article. Nice!"}
-LhdfHFg8dNxK-qUaukL: {id: "rrt878p@jxljdgze", postId: "rrt87Stgjxlimgqb", text: "Rly helpful. Thanks!"}
-LhdfVg43IDKa@Cft-dQZ: {id: "rrt879ccjx1jd0@3", postId: "rrt879rkjxlimol2", text: "Now I understand it... Thanks!"}
-LhdfuAXoimPycgRRf-3: {id: "rrz123cjxhhfdoti443", postId: "rrt87twjxlimswr", text: "Amazing article! Good job!"}
-Lhdg@x8QG-j2vnNUh1S5: {id: "rrzi23smshhfdoti543", postId: "rrt87twjxlimswr", text: "You are the best! +1 For this Article!"}
-LhdgPKifSsYTJYN61SQ: {id: "rrz35smshhfdfti543", postId: "rrt87btcjxlimxui", text: "Good job my man! You are the best!"}
-LhdgZwm5UCF6eoSvU6g: {id: "rrz35sshshfdftid44", postId: "rrt87btcjxlimxui", text: "AMAZING ARTICLE! It's was pleasure to read it! Thanks bro!"}
-LhdghH3EHO1FrBesCcCp: {id: "rrz404smshshfdfti4e4", postId: “rrt87btcjxlimxui", text: "It was ok, next time you will crush them!"}
__proto__: Object

```

Fiecare obiect va avea următorul format:

```js
{
    id: {
        commentId
    },
    postId: {
        postId
    },
    text: {
        commentText
    }
}
```

Trebuie să găsiți comentariile pentru postarea curentă (verificați **postId property**).

Afișați titlul postării în interiorul `h1` cu ID-ul "post-title" și conținutul postării în interiorul ul cu ID-ul "post-body".

Afișați **fiecare comentariu** ca un element `<li>` în interiorul unui element `<ul>` cu ID "post-comments".

Nu uitați să ștergeți conținutul acestuia în prealabil.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-5.jpg" /]

```js
<h1 id="post-title">ASYNCHRONOUS PROGRAMMING</h1>
<p id="post-body">
   "An asynchronous model allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result (for example, the
   data read from disk)."
</p>
<h2>Comments</h2>
<ul id="post-comments">
   <li id="rrt8713kjxljda5r">So good article. Nice!</li>
   <li id="rrt878pe@jxijdgze">Rly helpful. Thanks!</li>
</ul>
```

[/slide]

