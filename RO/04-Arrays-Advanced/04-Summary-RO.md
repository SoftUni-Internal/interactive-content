[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-33-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Matricele în JavaScript au multe metode încorporate

```js live
let numbers = [3, 8, 15, 22];

numbers.push(30); // Adaugă 30 în matrice

console.log(numbers);
```

- Putem adăuga, elimina sau să inserăm elemente în timpul rulării
  
```js live
let people = ['Paul', 'Mary', 'John'];

let firstEl = people.shift(); // Elimină elementul cu indicele 0

console.log(people);
console.log(firstEl);
```

- Unele metode modifică matricea

```js live
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(days.join(', '));

let weekend = days.splice(5); // Creează o nouă matrice și o modifică pe cea originală

console.log(days.join(', '));
console.log(weekend.join(', '));
```

- Putem sorta o matrice printr-o funcție de comparare 

```js live
let ages = [25, 15, 82, 39];
ages.sort((a, b) => a - b);

console.log(ages.join(', '));
```

[/slide]
