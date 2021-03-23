# Forme de Compoziție a Obiectelor

[slide hideTitle]

# Agregare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-13-14-aggregation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Avem agregare atunci când un obiect este format dintr-o colecție **enumerabilă** de subobiecte.

Acesta este un obiect care **conține** alte obiecte.

Fiecare subobiect își păstrează propria identitate de **referință**, astfel încât ar putea fi distrus din agregare fără să pierde informații.

Când să îl utilizați:

Când există colecții de obiecte care trebuie să partajeze **operațiuni comune**, cum ar fi tabele, stive, cozi, copaci, grafice, mașini de stare sau modelul compozit (atunci când doriți ca un singur element să partajeze aceeași interfață ca multe elemente).


[/slide]

[slide hideTitle]

# Exemple de Agregare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-15-aggregation-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
let dataArray = [{
    id: 'a',
    score: 1
}, {
    id: 'b',
    score: 2
}, {
    id: 'c',
    score: 5
}, {
    id: 'a',
    score: 3
}, {
    id: 'c',
    score: 2
}, ];

let result = dataArray.reduce((acc, curr, index, array) => {
    let same = acc.find(e => e.id === curr.id);
    if (!same) {
        acc.push(curr);
    } else {
        same.score += curr.score;
    }

    return acc;
}, []);

console.log(result);
```

În exemplul de mai jos, avem o matrice de obiecte. 

Pentru a aplica agregarea vom folosi metoda `.reduce()`.

Metoda `.reduce()` acceptă 4 parametri. 

Primul este "**acc**", care va fi o matrice goală înainte de prima iterați 

La fiecare iterație, vom împinge un obiect din "**dataArray**" spre "**acc**" sau vom actualiza obiectul dacă acesta există deja in "**acc**".

Al doilea est "**curr**", care este elementul curent al "**dataArray**" la un index dat.

Al treilea parametru este "**index**", care este indexul a "**dataArray**".

Și ultimul parametru este matricea în sine - "**dataArray**".

Cu expresia `let same = acc.find(e => e.id === curr.id);` verificăm dacă avem un obiect în "**acc**" cu "**id**" egal cu obiectul `curr.id`.

Dacă declarația est **false** împingem elementul curent la "**acc**", altfel actualizăm proprietatea obiectului "**score**" și returnăm "**acc**" la fiecare iterație.

[/slide]

[slide hideTitle]

# Concatenare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-16-concatenation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Concatenarea este utilizata atunci când un obiect este format prin adăugarea de proprietăți noi unui obiect existent.

**Când se utilizeaza:**

Ar fi util să asamblați progresiv structuri de date în timpul rulării, cum ar fi fuzionarea obiectelor JSON, hidratarea stării aplicației din mai multe surse, crearea actualizărilor stării imuabile prin fuziunea stării anterioare cu date noi.


```js live
const obj = [{
        name: 'Peter',
        age: 35
    },
    {
        age: 22
    },
    {
        name: 'Steven'
    },
    {
        height: 190
    },
    {
        age: 30
    },
    {
        name: 'Marcus'
    },
    {
        height: 180
    },
    {
        hairColor: 'brown'
    }
];
const concatenate = (acc, curr) => ({
    ...acc,
    ...curr
});
const result = obj.reduce(concatenate, {});
console.log(result);
```

Vom folosi din nou metoda `.reduce()`. 

Puteți vedea din rezultatul exemplului că minunea contează aici.

Folosim sintaxa spread pentru a obține elementele matricei `obj`.

Dacă nu folosim sintaxa răspândirii în fața variabilei `curr` vom primi doar ultimul element `{ hairColor: "brown" }`.

[/slide]

[slide hideTitle]

# Exemple de Concatenare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-17-concatenation-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
const objs = [{
        name: 'Peter',
        age: 35
    },
    {
        age: 22
    },
    {
        name: 'Steven'
    },
    {
        height: 180
    }
];
const concatenate = (a, o) => ({
    ...a,
    ...o
});
const c = objs.reduce(concatenate, {});
console.log(c);
```

[/slide]

[slide hideTitle]

# Delegare
[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-18-delegation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Delegarea este atunci când un obiect transmite sau delegează altui obiect.

Delegarea este frecvent utilizată pentru a imita moștenirea clasei în JavaScript.

Tipurile încorporate JavaScript folosesc delegarea pentru a redirecționa metoda încorporată către metoda calls up the prototype chain.

- `[].map()` delegează la `Array.prototype.map()`

- `obj.hasOwnProperty()` delegează la `Object.prototype.hasOwnProperty()` și așa mai departe

[/slide]

[slide hideTitle]

# Exemple de Delegare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-19-delegation-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
const obj = [{
        name: 'Peter',
        age: 35
    },
    {
        age: 22
    },
    {
        name: 'Steven'
    },
    {
        height: 180
    }
];
const delegate = (acc, curr) => Object.assign(Object.create(acc), curr);
const result = obj.reduceRight(delegate, {});
console.log(result);
console.log(result.height);
```

În exemplul de mai jos, folosim metoda `.reduceRight()`.

Mai întâi creați o funcție "**delegate**", care va avea doi parametri

"**acc**" va fi rezultatul nostru după executarea metodei `reduceRight()`.

"**Curr**" va fi primul element din matriceae "**obj**".

Deci creăm mai întâi un obiect gol folosind expresia `Object.create (acc)`.

După aceea, atribuim "**curr**", care este elementul curent din matricea noastră "**obj**" variabilei "**acc**" folosind metoda `Object.assign()`.

Apoi folosind `.reduceRight()` începem de la ultimul element din matricea "**obj**".

[/slide]
