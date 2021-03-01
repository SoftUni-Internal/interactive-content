# Valori Returnate

[slide hideTitle]
# Declarația de Returnare


Operatorul `return` este folosit pentru a returna o valoare din interiorul unei funcții.

Odată ce un operator `return` este executat, **orice după el în interiorul unei funcții nu rulează.**

Directiva `return` poate fi în orice loc al funcției.

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


- Verificați dacă **indexul matricei** este valid:

``` js live
function isValid(index, arr) {
  if (index < 0 || index >= arr.length) {
    return false;
  } else {
    return true;
  }
}

console.log(isValid(3, [1,2,3,4,5]));
```

Când lucrați cu matricii, este adesea folosit pentru a verifica dacă **indexul este valid.**

Rezultatul acestei funcții este **boolean**, va returna "true" dacă indexul se află în interiorul limitei matricei și va returna `false` dacă nu se află acolo.

- Elevul promovează examenul:

```js live
function pass(grade) {
  return grade >= 3;
}

console.log(pass(5.32))
```

[/slide]
[slide hideTitle]
# Declarație de Returnare Demo

[vimeo-video]
[stream language="EN" videoId="489373875/3db9f493f6" default /]
[stream language="RO" videoId="489373875/3db9f493f6"  /]
[/video-vimeo]


[/slide]

[slide hideTitle]
# Funcții Imbricate

Funcția imbricată funcționează în domeniul funcției externe.

Funcția interioară **poate accesa** variabilele și argumentele funcției externe.

**DAR funcția exterioară nu are acces la variabilele funcției interioare** și nici aplicația apelantă nu are acces la funcția interioară.

[image assetsSrc="Nested-Functions.png" /]

## Exemplu

```js live
function swapElements(arr) {
  for (let i = 0; i < arr.length/2; i++) {
    swap(arr, i, arr.length - 1 - i);
  }
  console.log(arr.join(' '));

  function swap(elements, i, j) {
    let temp = elements[i];
    elements[i] = elements[j];
    elements[j] = temp;
  }
}

swapElements([1,2,3,4,5,6,7,8,9,10]);
```
În acest exemplu, creăm o funcție `swapElements()`, care primește un argument.

În corpul funcției, facem o buclă prin matrice și invocăm o altă funcție `swap()`, căreia îi trecem trei argumente.

Această funcție face schimbul real al elementelor matricei. 

[/slide]
