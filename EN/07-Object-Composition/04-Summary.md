[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-20-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- **Object composition** combines data and functions into JavaScript objects

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

- **Aggregation** - forming an object from an enumerable collection

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
}, {
  id: 'b',
  score: 79
}, {
  id: 'c',
  score: 26
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

for (const data of result) {
  console.log(`id: ${data.id}, score: ${data.score}`);
}
```

- **Concatenation** - adding new properties

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

console.log(result);
```
- **Delegation** - imitates class inheritance

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

console.log(result);
console.log(result.height);
```


## In the next lesson you will learn:

- Inheritance

- Classical Inheritance

- Prototype Chain

[/slide]
