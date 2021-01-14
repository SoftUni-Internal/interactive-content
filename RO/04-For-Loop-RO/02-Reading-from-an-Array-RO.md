# Citirea unei matrice

[slide]
# Ce este o matrice? 

[vimeo-video]
[stream language="EN" videoId="487119167/37fe7bf771" default /]
[stream language="RO" videoId="487119167/37fe7bf771"  /]
[/video-vimeo]


Știm deja cum să memoram o singură valoare într-o variabilă. Matricele ne permit să memorăm mai multe valori într-o singură variabilă. 

Matricea este o **colecție** care este **ordonată** și **poate fi schimbată**.

Matricea este folositoare pentru a **păstra** o secvență de **date**.

Sunt scrise între **paranteze pătrate** și valorile din interior sunt **separate prin virgulă**.

```js
let fruit = ["apple", "pear", "cherry"];
```

Valorile unei matrice se numesc elemente. 

Imaginați-vă un tren, care are vagoane și fiecare vagon are pasageri. 

Acum imaginați-vi-l  o matrice cu numere întregi, în care elementele reprezintă vagoanele și valorile lor reprezintă pasagerii.
Uitați-vă la această imagine:

[image assetsSrc="list-example.png" /]

Sunt **7 vagoane** (**elemente**). Fiecare are **pasageri** (**o valoare**). `[3, 4, 10, 7, 5, 0, 6]`

Primul element din matrice se află pe poziția `0`, și ultimul se află pe poziția `length-1`. 

În acest curs **nu vom** inițializa o matrice, doar vom accepta vectorul ca un parametru al funcției.
# Citirea dintr-un vector

Fiecare element dintr-o matrice are un **index** (**poziție**) după care poate fi **accesat**.

**Indecși** dintr-o matrice **încep mereu de la 0** și **ultimul index** este **egal** cu **numărul de elemente minus 1**.

Pentru a accesa un element al matricei, folosim **parantezele pătrate și indexul acestuia.**

În acest exemplu fiecare simbol se află pe un index diferit: 

```js live
let train = [3, 4, 10, 7, 5, 0, 6];

console.log(`First element is ${train[0]}`);
console.log(`Second element is ${train[1]}`);
console.log(`Third element is ${train[2]}`);
console.log(`Last element is ${train[train.length-1]}`);
```

În acest exemplu fiecare element se află pe o poziție diferită:

- **primul** element al matricei se afla pe **poziția zero** `train[0]`

- **al doilea** element al matricei  se află pe **poziția unu** `train[1]`

- **al treilea** element al matricei se află pe **poziția 2** `train[2]`

- **ultimul** element al matricei se află pe poziția `train[train.length-1]`

[/slide]
