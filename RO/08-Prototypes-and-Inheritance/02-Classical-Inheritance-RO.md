# Moștenirea Clasică

[slide hideTitle]

# Clasele Tradiționale

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-9-10-classical-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasele sunt **planuri** pentru crearea obiectelor.

Când sunt **instanțiate**, o **copie** a clasei este creată și devine instanța curentă. 

Clasele se pot **moșteni** una pe alta. 

Clasa părinte este **copiată** către clasa copil.

Ele au proprietăți și metode care pot fi **publice**, **private**, sau **protejate**.

Când proprietățile sunt **publice**, sunt vizibile de oriunde din cod.

Dacă sunt **private**, sunt vizibile doar în scopul clasei.

Proprietățile **protejate** pot fi folosite în scopul clasei și în copiii săi.

[/slide]

[slide hideTitle]

# Clasa Moștenire

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-11-12-13-class-inheritance-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cuvântul cheie **extinde** este folosit pentru a crea o clasă copil din una părinte.

Când o clasă **extinde** un părinte, ei **moștenesc** datele și metodele sale.

Clasele copil pot:

- Adăuga **proprietăți**
- Adăuga sau înlocui **metode**
- Adăuga sau înlocui proprietăți **accesorii**

Aici avem un exemplu:

```js live
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
}

let person = new Person('John', 'john@gmail.com');
console.log(`Person: ${person.name} (${person.email})`);

let teacher = new Teacher('Joe', 'joe@yahoo.com', 'JavaScript');
console.log(`Teacher: ${teacher.name} (${teacher.email}), teaches ${teacher.subject}`);
```

În acest exemplu creăm două clase. 

Clasa **Person** este clasa **părinte**,iar clasa **Teacher** este clasa **copil**.

Clasa **Person** primește un **nume** și un **email** ca parametrii.

În clasa **Teacher**, moștenim parametrii din clasa **Person**. 

De asemenea adăugăm încă un parametru clasei **Teacher**, numit **subject**. 

În primul `console.log()`, afișăm **Person** cu parametrii săi: **name** și **email**.

În al doilea, afișăm pe consolă obiectul **Teacher** cu parametrii săi.

[/slide]

[slide hideTitle]

# Clasele în JavaScript

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-14-15-classes-in-javascript-class-syntax-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În JavaScript, clasele sunt **bazate** pe **moștenirea prototipului**.

- Ele **nu** introduc un nou model de moștenire în JavaScript.

Clasele în JavaScript **delegă** **planuri** mai degrabă decât să creeze **planuri**.

Nu toate metodele vor fi copiate când se moștenește o clasă.

Clasele părinte **delegă** metodele copiilor, iar **cheile** și **valorile** lor sunt distribuite de **referințe**.

Dacă o metodă nu este **declarată** în instanța copil, o vom apela din instanța **părintelui**. 

Aici avem un exemplu în care se folosesc clase:


```js live
class Person {
    constructor(who) {
        this.me = who;
    }
    identify() {
        return 'I am ' + this.me;
    }
}

class Man extends Person {
    constructor(who) {
        super(who);
    }
    speak() {
        console.log('Hello, ' + this.identify() + '.');
    }
}

let John = new Man('John');
let Joe = new Man('Joe');
John.speak();
Joe.speak();
```

În acest exemplu, clasa "**Man**" moștenește toate proprietățile și metodele de la clasa **Person**.

De la "**Man**", putem accesa parametrii și metodele clasei **Person**. 

În metoda `speak()`, folosim metoda **identify**, moștenită de la clasa **Person**.

[/slide]


[slide hideTitle]

# Moștenirea Prototipului

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-16-prototype-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Șă vedem cum va arata cu funcții:

```js live
function Person(who) {
    this.me = who;
}
Person.prototype.identify = function() {
    return 'I am ' + this.me;
};

function Man(who) {
    Person.call(this, who);
}

Man.prototype = Object.create(Person.prototype);

Man.prototype.speak = function() {
    console.log('Hello, ' + this.identify() + '.');
};

let john = new Man('John');
let joe = new Man('Joe');
john.speak();
joe.speak();
```

În acest exemplu am creat un **Person** cu parametru **who**. 

Atașăm încă o funcție numită **identify** prototipului **Person**.

Apoi creăm funcția **Man** și **moștenim** prototipul **Person** de la funcția "**Man**". 

Atașăm o funcție numită **speak** prototipului lui "**Man**".

La final rezultatul este identic cu exemplul cu clase și moșteniri de dinainte.

[/slide]
