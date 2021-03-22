[slide hideTitle]

# Metodele DOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-6-7-dom-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Elementele HTML din structura de DOM au propriile lor **metode** și **proprietăți**.

Acestea sunt un **instrument suplimentar**, care este foarte util în munca unui inginer software.

Metodele DOM sunt **acțiuni care pot fi efectuate pe elemente HTML și le pot modifica**.

Proprietățile DOM sunt **informații care pot fi primite și modificate**.

[/slide]


[slide hideTitle]

# Exemple de Metode DOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-8-9-example-dom-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După ce rulați acest exemplu în browser-ul:

```js
<html>
  <head>
    <title>Intro to DOM</title>
  </head>
  <body>
    <h1>Intoduction to DOM</h1>
    <ul>
      <li>DOM Methods example</li>
      <li>DOM Properties example</li>
    </ul>
  </body>
</html>
```

Acesta este modul de a obține titlul `h1`, folosind JavaScript:

```js
let h1Element = document.getElementsByTagName('h1')[0];
// getElementsByTagName returns an array of all HTML elements with a given tag
// [0] specifies the first h1 element of that array

console.log(h1Element);
```

JavaScript poate fi, de asemenea, **direct** inserat în documentul HTML:

```js
<html>
  <head>
    <title>Intro to DOM</title>
  </head>
  <body>
    <h1>Introduction to DOM</h1>
    <ul>
      <li> DOM Methods example</li>
      <li>DOM Properties example</li>
    </ul>
    <script>
      let h1Element = document.getElementsByTagName('h1')[0];
      console.log(h1Element);
    </script>
  </body>
</html>
```

În acest exemplu, un script este inserat în documentul HTML utilizând tag-ul `<script>`.

În acest fel, primul element de titlu, care este "**Introducere în DOM**", poate fi tipărit în consola browserului.
[/slide]

[slide hideTitle]

# Un alt Exemple a Metodelor DOM 

Proprietățile DOM HTML sunt valori pe care le puteți "**obține**" sau "**seta**":

```js
<html>
  <head>
    <title>Intro to DOM</title>
  </head>
  <body>
    <h1>Intoduction to DOM</h1>
    <ul>
      <li> DOM Methods example</li>
      <li>DOM Properties example</li>
    </ul>
    <script>
      let secondLi = document.getElementsByTagName('li')[1];
      secondLi.innerHTML+= " - DONE"
    </script>
  </body>
</html>
```

Codul dat produce următorul rezultat:

[image assetsSrc="JS-Advanced-Intro-DOM.JPG" /]

Cu acest exemplu, "**- DONE**" se adaugă la sfârșitul "**DOM Properties example**"  "**DOM Properties example - DONE**".

Acesta este modul în care puteți schimba conținutul unei pagini web **dinamic**.

[/slide]
