[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-30-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ai învățat:

- Ce este moștenirea?:

    - **Moștenirea** este abilitatea unei clase de a copia funcțiile de la altă clasă

    - clasa care moștenește se numește **Copil** și cea moștenită se numește **Părinte**

- Obiectele au o **proprietate internă** folosită pentru implementarea **moștenirii pe bază de prototip**

    - **metodele** și **proprietățile** sunt moștenite de referință

-  **Proprietățile** din **lanțul de prototip** formează un **lanț ierarhic**

- Există două moduri de a crea un obiect:

  - **creația literală**

```js
let Greet = {
    greet: 'Hi!',
    print: function() {
        console.log(this.greet);
    },
};
```

  - **creația Constructor**

```js 
 function Greet() {
    this.greet = 'Hi!';
    this.print = function() {
        return `${this.greet}`;
    };
}

let greet = new Greet();  
```

[/slide]
