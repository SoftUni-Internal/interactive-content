# Expresiile Funcțiilor cu Invocare Imediată

[slide hideTitle]

# Definiție

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-18-19-iife-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O **Immediately-Invoked Function Expression** este în limbajul JavaScript o **function** care **rulează instantaneu după ce este definit**.

**Immediately-Invoked Function Expressions** sunt:

- Definite **anonymously**

- Invocate **immediately** după ce sunt declarate

Pentru a crea o **IIFE**, punem declararea funcției între **round brackets**, după care o invocăm **immediately**:

```js live
let result = (function () {
    let name = 'Harper'; 
    return name; 
})(); 

console.log(result);
```

Valoarea **return value** a unei **Immediately-Invoked Function Expression** trebuie să fie salvată într-o variabilă, altfel, ea va fi **eliminate din memorie imediat după executare**:

```js live
(function () { let name = 'Nick'; });
console.log(name); 
```
După cum puteți vedea în acest exemplu, o variabilă a IIFE este **accesibil numai în interiorul domeniului funcției**.

[/slide]
