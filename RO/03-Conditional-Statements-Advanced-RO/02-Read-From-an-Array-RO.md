# Citiți dintr-o matrice

[slide hideTitle]
# Ce este o matrice?

[vimeo-video]
[stream language="EN" videoId="486869174/dcb7c31b0d" default /]
[stream language="RO" videoId="486869174/dcb7c31b0d"  /]
[/video-vimeo]

Știm deja cum să stocăm o singură bucată de date într-o singură variabilă. Matricea ne permite să stocăm date de piese multiple, din nou, într-o singură variabilă.

O matrice este o **colecție** care este **ordonată** și **modificabilă**.
O matrice este utilă pentru **păstrarea** unei secvențe de **date**.

Acestea sunt cuprinse între **paranteze pătrate** și valorile din interiorul său sunt **separate printr-o virgulă**.

```js
let fruit = ["apple", "pear", "cherry"];
```

Valorile într-o matrice sunt numite elemente.

Imaginați-vă un tren care are vagoane și fiecare vagon are pasageri.

Acum imaginați-vă ca o serie de numere întregi în care fiecare element reprezintă un vagon, iar valoarea lui sunt pasagerii.

Aruncați o privire la această imagine:

[image assetsSrc="list-example.png" /]

Avem **7 vagoane** (**elemente**). Fiecare are **pasageri** (**o valoare**). `[3, 4, 10, 7, 5, 0, 6]`

Primul element al matricei este situat la indexul `0`, iar ultimul element al matricei este situat la indexul`lungime-1`.

În acest curs **nu vom** inițializa o matrice, dar vom accepta matricile ca parametri pentru funcția noastră.

[/slide]

[slide hideTitle]
# Citirea dintr-o matrice

[vimeo-video]
[stream language="EN" videoId="486869498/f3292af295" default /]
[stream language="RO" videoId="486869498/f3292af295"  /]
[/video-vimeo]

Fiecare element dintr-o matrice are propriul său **index** (**poziție**) prin care poate fi **accesat**.

**Indecșii** într-o matrice **încep întotdeauna cu 0** și **ultimul index** este **egal** cu **numărul de elemente minus 1**.

Pentru a accesa elementul unei matrice, folosim **paranteze pătrate și indexul acestuia.**

În acest exemplu, fiecare simbol este situat la un index diferit:

```js live
let train = [3, 4, 10, 7, 5, 0, 6];

console.log(`Primul element este ${train[0]}`);
console.log(`Al doilea element este ${train[1]}`);
console.log(`Al treilea element este ${train[2]}`);
console.log(`Ultimul element este ${train[train.length-1]}`);
```

În acest exemplu, fiecare simbol este situat la un index diferit:

- **Primul** element al matricei este situat la **index zero** `train[0]`

- **Cel de-al doilea** element al matricei este situat la **indexul unu** `train[1]`

- **Al treilea** element al matricei este situat la **indexul doi** `train[2]`

- **Ultimul** element al matricei este situat la `train [train.length-1]`

[/slide]
