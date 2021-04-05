// sectionId: "Javascript::Programming-Basics::For-Loop::Reading-From-An-Array"

# Citirea Unei Matrice

[slide hideTitle]

# Ce Este o Matrice? 

[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-9-10-What-is-an-Array-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Știm deja cum să memorăm o singură valoare într-o variabilă. 

Matricele ne permit să memorăm mai multe valori într-o singură variabilă. 

Matricea este o **colecție** care este **ordonată** și **poate fi schimbată**.

Matricea este folositoare pentru a **păstra** o secvență de **date**.

Acestea sunt scrise între **paranteze drepte** și valorile din interior sunt **separate prin virgulă**.

```js
let fruit = ['apple', 'pear', 'cherry'];
```

Valorile unei matrice se numesc elemente. 

Imaginați-vă un tren, care are vagoane și fiecare vagon are pasageri. 

Acum imaginați-vi-l ca o matrice cu numere întregi, în care elementele reprezintă vagoanele și valorile lor reprezintă pasagerii.

Uitați-vă la această imagine:

[image assetsSrc="list-example.png" /]

Există **7 vagoane** (**elemente**). Fiecare are **pasageri** (**o valoare**). `[3, 4, 10, 7, 5, 0, 6]`

Primul element din matrice se află pe poziția `0`, și ultimul se află pe poziția `length-1`. 

În acest curs **nu vom** inițializa o matrice, doar vom accepta matrice ca un parametru al unei funcții.

[/slide]

[slide hideTitle]

# Citirea dintr-o Matrice

[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-11-Reading-from-Arrays-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare element dintr-o matrice are un **indice** (**poziție**) după care poate fi **accesat**.

**Indicii** dintr-o matrice **încep mereu de la 0** și **ultimul indice** este **egal** cu **numărul de elemente minus 1**.

Pentru a accesa un element al matricei, folosim **parantezele drepte și indicele acestuia.**

În acest exemplu fiecare simbol se află pe un indice diferit: 

```js live
let train = [3, 4, 10, 7, 5, 0, 6];

console.log(`First element is ${train[0]}`);
console.log(`Second element is ${train[1]}`);
console.log(`Third element is ${train[2]}`);
console.log(`Last element is ${train[train.length-1]}`);
```

În acest exemplu fiecare element se află pe o poziție diferită:

- **Primul** element al matricei se afla pe **poziția zero** `train[0]`

- **Al doilea** element al matricei  se află pe **poziția unu** `train[1]`

- **Al treilea** element al matricei se află pe **poziția 2** `train[2]`

- **Ultimul** element al matricei se află pe poziția `train[train.length-1]`

[/slide]
