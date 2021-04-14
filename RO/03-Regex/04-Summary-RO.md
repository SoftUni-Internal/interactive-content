[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-29-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Expresia regulată este o secvență de caractere care formează un șablon de căutare

`[A-Z][a-z]+ [A-Z][a-z]+ // Se potrivește cu "Ben Williams"`

- Definim caractere speciale, operatori și construcții pentru construirea unor șabloane complexe

`[abc]+ // Se potrivește cu orice caracter care este "a", "b", sau "c"`

- Putem folosi clase de caractere, grupruri, cuantificatori și altele

```js live
let str = 'Hellooo World! Hello Again!';
let pattern = /lo*/g;
let result = str.match(pattern);
console.log(result);
```

## În lecția următoare veți învăța:

- Cum să rezolvați un examen practic
[/slide]
