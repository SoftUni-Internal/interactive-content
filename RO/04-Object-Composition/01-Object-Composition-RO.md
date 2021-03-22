# Compoziția Obiectului

[slide hideTitle]

# Ce este Compoziția Obiectului?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-3-4-object-composition-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un tip de date compozite este orice tip de date care poate fi construit într-un program folosind tipurile de date primitive ale limbajului de programare și alte tipuri compozite.

Actul de a construire un tip compozit este cunoscut sub numele de "composition".

Aici aveți un exemplu de combinare a obiectelor simple în obiecte mai complexe.

Obiectul student este compus din tipuri primitive precum "**firstName**", "**lastName**", "**age**" precum și tipuri mai complexe precum locație, care este un alt obiect.

Pentru a accesa obiectele din "**location**" oa proprietații "**lat**" folosim următoarele: `student.location.lat`.

```js live
let student = {
  firstName: 'Maria',
  lastName: 'Green',
  age: 22,
  location: {
    lat: 52.52,
    lng: 13.404,
  },
};
console.log(student);
console.log(student.location.lat);
```

[/slide]

[slide hideTitle]

# Compunerea Unui Obiect

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-5-composing-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aici aveți un exemplu cum putem compune un obiect.

În primul rând, declarăm și inițializăm tipurile de date primitive "**name**", "**population**" și "**country**".

După aceea, atribuim variabilile obiectului "**town**".

Și, în cele din urmă, atribuim obiectului "**location**" objiectul "**town**".


```js live
let name = 'Berlin';
let population = 3769495;
let country = 'Germany';
let town = {
  name,
  population,
  country,
};
console.log(town);
town.location = {
  lat: 52.52,
  lng: 13.404,
};
console.log(town);
```

[/slide]

[slide hideTitle]

# Combinarea Datelor cu Funcțiile

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-6-combining-data-with-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

De asemenea, putem combina datele folosind funcții, pentru că funcțiile sunt și obiecte în JavaScript.

Modul în care **adăugăm o funcție obiectului**:

- În primul rând, avem numele funcției "grow"
- Urmat de ":" 
- Apoi cuvântul cheie "funcţie"
- Parametrii (dacă există) în paranteze ale funcției
- În cele din urmă, bucle, care conțin domeniul funcției

```js live
let rect = {
  width: 10,
  height: 4,
  grow: function (w, h) {
    this.width += w;
    this.height += h;
  },
  print: function () {
    console.log(`[${this.width} x ${this.height}]`);
  },
};
rect.grow(2, 3);
rect.print();
```

[/slide]

[slide hideTitle]

# Imprimarea Obiectelor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-7-printing-objects-tostring-function-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Imprimarea obiectelor utilizând funcția `toString()`:

```js live
let rect = {
  width: 10,
  height: 4,
  toString: function () {
    return `rect[${this.width} x ${this.height}]`;
  },
};
console.log(rect);
console.log(rect.toString());
console.log('' + rect);
```

[/slide]
