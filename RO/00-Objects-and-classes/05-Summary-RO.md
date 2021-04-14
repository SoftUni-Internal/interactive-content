[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-33-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

 - Obiecte - definție, proprietăți și metode
```js
let person = {
    name: 'Peter',
    age: 20,
    sayHello() {
        console.log('Hi, guys');
    }
};
```
- Metodele de obiecte

```js live
let person = {
    name: 'John',
    age: 43,
    sayHello() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.sayHello();
```

- Iterarea obiectelor

``` js live
let person = {
    name: 'Peter',
    age: '18',
    grade: '5.50'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

```
- Diferența dintre tipurile de valoare și tipurile de referință

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

- `Parse` și `stringify` sunt metode JavaScript încorporate
    - sunt folosite pentru convertirea JSON într-un obiect și invers
  
```js live
let car = '{"Car":"Nio","Model": "EP9","Colour":"Blue"}';  

var data = JSON.parse(car);  

console.log(data);
```

- Clase în JavaScript

``` js
class Student {
    constructor(name) {
        this.name = name;
    }
}
```

## În lecția următoare veți învăța:

- Maps

- Metode Map

- Expresii Lambda
 
- Stream API

[/slide]
