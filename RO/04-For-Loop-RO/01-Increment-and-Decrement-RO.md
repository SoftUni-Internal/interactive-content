// sectionId: "Javascript::Programming-Basics::For-Loop::Increment-And-Decrement"

[slide hideTitle]
# Operatori de Incrementare și Decrementare

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-3-4-5-Increment-and-Decrement-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Operatorul de incrementare unitar `++` își incrementează operandul cu 1, în timp ce operatorul de decrementare unitar `--` îl decrementează cu 1.

Operatorii de incrementare și decrementare pot fi scriși astfel: 

* Operator de incrementare/decrementare ca sufix, `x++`/`x--` 
* Operator de incrementare/decrementare ca prefix, `++x`/`--x`

## Operatorul de incrementare


### Operatorul de incrementare ca sufix
Rezultatul lui `x++` este valoarea lui `x` înainte de operație, după cum ne arată acest exemplu:

```js live
let i = 3;
console.log(i);   // output: 3
console.log(i++); // output: 3
console.log(i);   // output: 4
```


### Operatorul de incrementare ca prefix
Rezultatul lui `++x` este valoarea lui `x` după operație, după cum ne arată acest exemplu:



```js live
let a = 1.5;
console.log(a);   // output: 1.5
console.log(++a); // output: 2.5
console.log(a);   // output: 2.5
```



## Operatorul de decrementare

### Operatorul de decrementare ca sufix
Rezultatul lui `x--` este valoarea lui `x` înainte de operație, după cum ne arată acest exemplu:

```js live
let i = 3;
console.log(i);   // output: 3
console.log(i--); // output: 3
console.log(i);   // output: 2
```

### Operatorul de decrementare ca prefix
Rezultatul lui  `--x` este valoarea lui `x` după operație, după cum ne arată acest exemplu:


```js live
let a = 1.5;
console.log(a);   // output: 1.5
console.log(--a); // output: 0.5
console.log(a);   // output: 0.5
```
[/slide]
