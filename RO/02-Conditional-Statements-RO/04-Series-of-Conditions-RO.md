// sectionId: "Javascript::Programming-Basics::Conditional-Statements::Series-Of-Conditions"

[slide hideTitle]

# Secvența Condițiilor "if-else"

[video src="https://videos.softuni.org/hls/javascript-basics/RO/02-Conditions/02-conditional-statements-js-24-25-Sequence-of-if-else-conditions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Uneori trebuie să facem o succesiune de condiții înainte de a decide ce acțiuni va executa programul nostru.

În astfel de cazuri, putem aplica construcția `if-else if ... -else` **în serie**.

În acest scop, utilizăm următorul format:
```js
if (condition) {
  // condition body;
} else if (second condition) {
  // condition body;
} else if (third condition) {
  // condition body;
}
…
else {
  // else construction body;
}
```
[/slide]

[slide hideTitle]
# Exemplu: Digits in English
[video src="https://videos.softuni.org/hls/javascript-basics/RO/02-Conditions/02-conditional-statements-js-26-Series-of-conditions-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Imprimați cifrele în intervalul de la 1 la 9 (cifrele sunt citite de pe consolă) în limba engleză.

Putem citi cifra și apoi, printr-o **succesiune de condiții**, putem imprima cuvântul englez relevant:
```js
let num = Number(input);

if (num == 1) {
    console.log('one');
} else if (num == 2) {
    console.log('two');
} else if (num == 3) {
    console.log('three');
} else if (num == 4) {
    console.log('four');
} else if (num == 5) {
    console.log('five');
} else if (num == 6) {
    console.log('six');
} else if (num == 7) {
    console.log('seven');
} else if (num == 8) {
    console.log('eight');
} else if (num == 9) {
    console.log('nine');
} else {
    console.log('number too big');
}
```

Logica programului din exemplul de mai sus **compară secvențial** numărul de intrare de pe consolă cu cifrele de la 1 la 9, când **fiecare comparație următoare se efectuează numai în cazul în care comparația anterioară nu este adevărată**.

În cele din urmă, dacă niciuna dintre instrucțiunile `if` nu este adevărată, ultima **clauză** `else` este efectuată.

[/slide]
