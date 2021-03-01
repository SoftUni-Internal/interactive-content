[slide]

# Rezumat

[vimeo-video]
[stream language="EN" videoId="489795216/a021fdff71" default /]
[stream language="RO" videoId="489795216/a021fdff71"  /]
[/video-vimeo]
## În această lecție ați învățat:

- Obiecte - Definiție, proprietăți și metode
```js
let person = { name:'Peter', 
age: 20,
sayHello() {
     console.log('Hi, guys');
  }
};
```
- Metode de obiecte

- Iterații de obiecte
``` js live
let person = { name:'Peter', age:'18', grade:'5.50' };

for (let key in person) {
   console.log(`${key}: ${person[key]}`);
}

```
- Diferența dintre tipul de referință și valoarea

- Prezentare generală a fișierelor JSON
``` js
{
  }
  "name": "George",
  "age": 25,
  "grades": {
    "Math": [2.50, 3.50],
    "Chemistry": [4.50]
  }
}
```
  - Analizați și Stringificați

- Cursuri în Javascript
``` js
class Student {
  constructor(name) {
    this.name = name;
  }
}
```
[/slide]