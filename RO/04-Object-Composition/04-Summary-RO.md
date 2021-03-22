[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-20-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați aflat despre:

- Compoziția obiectului: combină date și funcții în obiecte JavaScript

```js
let student = {
    firstName: 'Maria',
    lastName: 'Green',
    age: 22,
    location: {
        lat: 52.520,
        lng: 13.404
    }
}
```

- Agregare: formarea unui obiect dintr-o colecție enumerabilă

```js live
let data = [{
    id: 'a',
    score: 12
}, {
    id: 'b',
    score: 84
}, {
    id: 'c',
    score: 59
}];

let result = data.reduce((acc, curr, index, array) => {
    let same = acc.find(e => e.id === curr.id);
    if (!same) {
        acc.push(curr);
    } else {
        same.score += curr.score;
    }

    return acc;
}, []);
```

- Concatenare: adăugarea de proprietăți noi

```js live
const obj = [{
        name: 'Ethan',
        age: 35
    },
    {
        age: 52
    },
    {
        name: 'James'
    },
    {
        height: 170
    }
];

const concatenate = (acc, curr) => ({
    ...acc,
    ...curr
});

const result = obj.reduce(concatenate, {});
```

- Delegare: imitarea moștenirii a clasei

```js live
const obj = [{
        name: 'Mark',
        age: 65
    },
    {
        age: 32
    },
    {
        name: 'Lynda'
    },
    {
        height: 150
    }
];

const delegate = (acc, curr) => Object.assign(Object.create(acc), curr);
const result = obj.reduceRight(delegate, {});
```

## În lecția următoare veți învăța:

- Moștenire

- Moștenirea clasică

- Prototype Chain

[/slide]
