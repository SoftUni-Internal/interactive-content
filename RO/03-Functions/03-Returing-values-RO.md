# Valori Returnate

[slide hideTitle]
# Instrucțiunea Return

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-17-18-the-return-statement-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Operatorul `return` este folosit pentru a returna o valoare din interiorul unei funcții.

Odată ce un operator `return` este executat, **orice după el în interiorul unei funcții nu rulează.**

Operatorul `return` poate fi în orice loc al funcției.

``` js live
function readFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = readFullName('John', 'Smith');
console.log(fullName)
```

Puteți utiliza operatorul `return` numai în **interiorul unei funcții.**

Dacă încercați să-l utilizați în afara unei funcții, **va genera o eroare.**

[/slide]

[slide hideTitle]
# Utilizarea Valorilor Returnate

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-19-using-the-return-values-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Valoarea returnată poate fi:

- Atribuită unei variabile

```js
const max = getMax(5, 10);
```

- Folosită într-o expresie

``` js
const total = getPrice() * quantity * 1.20;
```

- Transmisă unei alte funcții
``` js
multiply(getMax(5,10), 20);
```

[/slide]

[slide hideTitle]
# Valori Returnate: Exemple

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-20-returning-values-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Verificați dacă **indexul matricei** este valid:

``` js live
function isValid(index, arr) {
  if (index < 0 || index >= arr.length) {
    return false;
  } else {
    return true;
  }
}

console.log(isValid(3, [1, 2, 3, 4, 5]));
```

Când lucrați cu matricii, este adesea folosit pentru a verifica dacă **indexul este valid.**

Rezultatul acestei funcții este **boolean**, va returna "**true**" dacă indexul se află în interiorul limitei matricei și va returna "**false**" dacă nu se află acolo.

- Elevul promovează examenul:

```js live
function pass(grade) {
  return grade >= 3;
}

console.log(pass(5.32))
```

[/slide]
[slide hideTitle]
# Instrucțiunea Return Demo

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-the-return-statement-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]




[/slide]

[slide hideTitle]
# Funcții Imbricate
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/03.JS-Fundamentals-Functions/03.JS-Fundamentals-Functions-21-22-nested-functions-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Funcția imbricată funcționează în domeniul funcției externe.

Funcția interioară **poate accesa** variabilele și argumentele funcției externe.

**DAR funcția exterioară nu are acces la variabilele funcției interioare** și nici aplicația apelantă nu are acces la funcția interioară.

[image assetsSrc="js-fundamentals-1-adv-functions-1.png" /]

## Exemplu

```js live
function swapElements(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    swap(arr, i, arr.length - 1 - i);
  }
  console.log(arr.join(' '));  

  function swap(elements, i, j) {
    let temp = elements[i];
    elements[i] = elements[j];
    elements[j] = temp;
  }
}

swapElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```

În acest exemplu, creăm o funcție `swapElements()`, care primește un argument.

În corpul funcției, facem o buclă prin matrice și invocăm o altă funcție `swap()`, căreia îi trecem trei argumente.

Această funcție face schimbul real al elementelor matricei. 

[/slide]
