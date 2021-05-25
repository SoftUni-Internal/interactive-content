[slide hideTitle]

# Evenimente DOM 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-38-39-dom-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Evenimentele DOM sunt **acțiuni specifice** care se întâmplă la un moment dat.

Ele ar putea fi la fel de simple ca:

- **Apăsarea unei taste**

- **A da clic cu mouse-ul**

- **Derulare în sus și în jos**

- **Glisarea unui articol pe pagină**

Aceste evenimente sunt utile deoarece pot fi **urmărite** și **tratate** ori de câte ori se întâmplă.

Evenimentele DOM sunt de obicei utilizate împreună **cu o funcţie de gestionare**, care este executată **după** eveniment, ca reacție la acesta.

Iatâ un exemplu despre cum să atașați un handler pentru un eveniment:

```js
h1Ref.addEventListener('click', handlerFunction);
```

În exemplul de mai sus, `handlerFunction` este atașați la `h1Ref` și urmează să fie executată **după ce** a fost **făcut clic** pe element.

Metoda `.addEventListener()` acceptă următorii parametri:

- **Tipul evenimentului**

- **Funcţia de gestionare a evenimentului**

Există un alt oparametru pțional la această metodâ, care va fi discutat mai târziu.

[/slide]
