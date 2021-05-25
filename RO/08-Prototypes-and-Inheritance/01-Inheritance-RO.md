# Moșștenirea

[slide hideTitle]

# Ce Este Moștenirea?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-3-4-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Moștenirea este abilitatea unei clase să copieze funcțiile altei clase părinte.
În JavaScript, **moștenirea** poate fi numită și **Comportament al Delegării**.

- Deoarece funcționalitatea unui obiect este delegată altuia.

Moștenirea în JavaScript este un tip de **dependență**.

**Tipuri de moșteniri**

- Moștenire **Simplă**
- Moștenire **Pe mai multe nivele**
- Moștenire **Ierarhică**
- Moștenire **Multiplă**
- Moștenire **Hibridă**

[/slide]


[slide hideTitle]

# Moștenirea Simplă

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-5-simple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O **clasă** copil **moștenește** caracteristicile clasei **părinte**.

Se numește **Moștenire simplă**. 

Acest tip de moștenire se folosește doar pentru **extinderea** clasei părinte.

Aici avem un exemplu simplu:

```js live
class Pet {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log('wuf wuf')
    }
}

const dog = new Dog()
dog.bark()
```

În acest exemplu, am **extins** **clasa Pet** cu **clasa Dog**. 

Clasa **Dog** va **moșteni** toate caracteristicile clasei **Pet**.

[/slide]

[slide hideTitle]

# Moștenirea pe Mai Multe Nivele

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-6-multi-level-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În **Moștenirea pe mai multe nivele**, clasa **părinte** este moștenită din clasa **nepot** printr-o clasă **copil**.

Clasa **nepot** va obține caracteristicile claselor **părinte** și **copil**.

Aici avem un exemplu:

```js live
class Vehicle {
    constructor(type) {
        this.type = type;
    }
}

class Brand extends Vehicle {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }
}

class Ferrari extends Brand {
    constructor(type, brand, model) {
        super(type, brand);
        this.model = model;
    }

    print() {
        console.log(`${this.type} - ${this.brand} - ${this.model}`)
    }
}

const ferrari = new Ferrari('Supercar', 'Ferrari', '488 GTB')
ferrari.print()
```

În acest exemplu am extins clasa **Vehicle** cu o clasă **Brand**.

După, am moștenit clasa **Ferrari** cu cea **Brand**.

Clasa **Ferrari** va **obține** toate metodele pe care le au clasele **Brand** și **Vehicle**.

[/slide]

[slide hideTitle]

# Moștenirea Ierarhică

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-7-hierarchical-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În **Moștenirea ierarhică**, mai multe clase **moștenesc caracteristicile** unei **singure clase**.

Dezavantajul este că dacă schimbăm ceva în clasa **părinte**, trebuie s-o schimbăm în toți **copiii**.


Aici avem un exemplu:

```js
class Pet {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Pet {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

class Cat extends Pet {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
} 
```

În acest exemplu, clasele **Dog** și **Cat** moștenesc clasa **Pet**.

Toate vor avea proprietățile și caracteristicile clasei **Pet**.

[/slide]

[slide hideTitle]
# Moștenirea Multiplă

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-8-multiple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Moștenirea multiplă** este o caracteristică care moștenește direct din mai multe clase părinte.

Problema la acest tip de moștenire apare atunci când sunt mai multe metode cu același nume în ambele clase. 

Compilatorul nu va știi pe care s-o prioritizeze și aplicația va eșua.

**JavaScript nu susține moștenirea multiplă.**

[/slide]
