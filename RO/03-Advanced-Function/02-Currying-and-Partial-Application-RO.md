# Currying și Aplicarea Parțială

[slide hideTitle]

# Currying

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-13-15-currying-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosim **currying** pentru a evalua o funcție cu **multiple arguments**, într-o **sequence** de funcții cu un **single argument**.

```js live
function sumOfThreeNums(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}
console.log(sumOfThreeNums(5)(6)(8));
```

Câteva example de folosire a **currying** sunt:

- **Template functions**

- **Code reuse**

- **Partial implementation**

- **Retaining scope**

[/slide]

[slide hideTitle]
# Aplicarea Parțială

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-16-partial-application-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Reducing** numărul de **parameters** ai funcției prin convertirea acesteia într-o **funcție nouă cu mai puțini parametri**, se numește **Partial Application**.

Să urmărim acest exemplu: 

```js live 
function add(a, b) {
    return a + b;
}

function partial(func, a) {
    return (b) => func(a, b);
}

const newAdd = partial(add, 2);
console.log(newAdd(5));
```

Funcția originală `add()` primește doi parametri. 

Funcția `partial()` ia un parametru **function** și **un parametru suplimentar**. 

După aceea, aceasta **creează și returnează o nouă funcție** care primește un **another argument**, și îl **appends** argumentului pe care l-am **already passed in**.

Funcția care rezultă ia un număr de **unu** parametri, în loc de **două** parametri.

[/slide]

[slide hideTitle]
# Comparație între Currying și Aplicare Parțială 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-17-currying-vs-partial-application-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Diferențele dintre **currying** și **partial application** sunt:

- **Currying** este procesul de transformare a unei funcții cu **multiple arguments** într-un **chain of single-argument functions**

- Pentru a **partially apply** înseamnă să pasăm **mai puține argumente unei funcții decât are aceasta în declararea ei**

Currying este **not** același lucru cu aplicarea parțială. 

În orice caz, currying **poate fi implementat** prin utilizarea aplicării parțiale. 

[/slide]
