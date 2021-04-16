# Problemă 2: Pet House
[slide hideTitle]
# Pet House

[code-task title="Pet House" taskId="js-advanced-exam-pet-house" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function solveClasses(){
  // Scrieți codul dvs. aici

   return {
      Pet,
      Cat,
      Dog
   }
}
```
[/code-editor]
[task-description]
# Cerința voastră

Implementați următoarele clase: `Pet`, `Cat`, `Dog`.

## Clasa Pet

- `constructor(owner, name)`

Trebuie să aibă aceste **3 proprietăți:**

* **owner** - șir de caractere
* **name** - șir de caractere
* **comments** - vector

- `addComment(comment)`

Această funcție ar trebui să primească un **comentariu** unic sub formă de șir de caractere, să îl adauge la vectorul de **comentarii** și să returneze un mesaj:

"**Comment is added.**"

Dacă același comentariu a **fost deja adăugat** la vectorul cu comentarii, generați o eroare:

"**This comment is already added!**"

- `feed()`:

Această **funcție** trebuie să **returneze** un mesaj simplu:

"\{**name**\} **is fed**`

- `toString()`:

Această **funcție** trebuie să **returneze** un șir de caractere:

"**Here is** \{**owner**\}'**s pet** \{**name**\}."

Dacă există **comentarii**, adaugați-le pe o nouă linie:

"**Special requirements:** \{**comment1**\}, \{**comment2**\}, \{**comment3 ...**\}"


## Clasa Cat

Clasa `Cat` este moștenită din clasa `Pet`.

Aceasta trebuie să aibă următoarele **4 proprietăți:**

* **owner** - șir de caractere
* **name** - șir de caractere
* **insideHabits** - șir de caractere
* **scratching** - variabilă booleană

- `feed()`:

Această funcție moștenește metoda `feed()` din clasa `Pet` și extinde mesajul **returnat**, adaugându-l la finalul aceleiași linii:

"**, happy and purring.**"

- `toString()`:

Această funcție trebuie să extindă metoda `toString()` din clasa `Pet`, returnând **mesajul** cu mai multe linii la final, linii care sunt următoarele:

"**Main information:**
\{**name**\} **is a cat with** \{**insideHabits**\}"


Iar dacă valoarea variabilei **scratching** este **true**, trebuie să adăugați acest lucru la final: 

"**, but beware of scratches.**"  

**Notă: Pentru mai multe informații, vedeți exemplele de mai jos!**

## Clasa Dog

Clasa `Dog` e moștenită din clasa `Pet`.

- `constructor(owner, name, runningNeeds, trainability)`

Aceasta trebuie să aibă următoarele **4 proprietăți:**

- **owner** - șir de caractere
- **name** - șir de caractere
- **runningNeeds** - șir de caractere
- **trainability** - șir de caractere 

- `feed()`:

Această **funcție** trebuie să fie moștenită din metoda `feed()` a clasei `Pet` și să extindă mesajul returnat, adaugând acest lucru la final:

"**, happy and wagging tail.**"

- `toString()`:

Această **funcție** trebuie să extindă metoda `toString()` a clasei `Pet`, returnând mesajul cu câteva linii în plus la final, linii care sunt:

"**Main information:**
\{**name**\} **is a dog with need of** \{**runningNeeds**\}**km running every day and** \{**trainability**\} **trainability.**"

**Notă: Pentru mai multe informații, vedeți exemplele de mai jos!**

## Predare
Predați versiunea voastră a funcției `solveClasses`.

```js
function solveClasses(){
  // Write your code here

   return {
      Pet,
      Cat,
      Dog
   }
}

```

# Exemple
Acesta este un exemplu de mod în care se **intenționează utilizarea codului:**

**Exemplu de folosire a codului** 
```js
let classes = solveClasses();
let pet = new classes.Pet('Ann', 'Merry');
console.log(pet.addComment('likes bananas'));
console.log(pet.addComment('likes sweets'));
console.log(pet.feed());
console.log(pet.toString());

let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);
console.log(cat.addComment('likes to be brushed'));
console.log(cat.addComment('sleeps a lot'));
console.log(cat.feed());
console.log(cat.toString());

let dog = new classes.Dog('Susan', 'Max', 5, 'good');        
console.log(dog.addComment('likes to be brushed'));
console.log(dog.addComment('sleeps a lot'));
console.log(dog.feed());
console.log(dog.toString());
```

**Datele de ieșire corespunzătoare**

```
Comment is added.
Comment is added.
Merry is fed
Here is Ann's pet Merry.
Special requirements: likes bananas, likes sweets

Comment is added.
Comment is added.
Sherry is fed, happy and purring.
Here is Jim's pet Sherry.
Special requirements: likes to be brushed, sleeps a lot
Main information:
Sherry is a cat with very good habits, but beware of scratches.

Comment is added.
Comment is added.
Max is fed, happy and wagging tail.
Here is Susan's pet Max.
Special requirements: likes to be brushed, sleeps a lot
Main information:
Max is a dog with need of 5km running every day and good trainability.
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
// Zero test 1 Pet
let classes = result();
        let pet = new classes.Pet('Ann', 'Merry');

        expect(pet.addComment('likes bananas')).to.be.equal('Comment is added.');
        expect(pet.addComment('likes sweets')).to.be.equal('Comment is added.');
        expect(pet.feed()).to.be.equal('Merry is fed');
        expect(pet.toString()).to.be.equal(`Here is Ann's pet Merry.
Special requirements: likes bananas, likes sweets`);
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
// Zero test 2 Cat
let classes = result();
        let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);

        expect(cat.addComment('likes to be brushed')).to.be.equal('Comment is added.');
        expect(cat.addComment('sleeps a lot')).to.be.equal('Comment is added.');
        expect(cat.feed()).to.be.equal('Sherry is fed, happy and purring.');
        expect(cat.toString()).to.be.equal(`Here is Jim's pet Sherry.
Special requirements: likes to be brushed, sleeps a lot
Main information:
Sherry is a cat with very good habits, but beware of scratches.`);
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
//Zero test 3 Dog
let classes = result();
        let dog = new classes.Dog('Susan', 'Max', 5, 'good');
        
        expect(dog.addComment('likes to be brushed')).to.be.equal('Comment is added.');
        expect(dog.addComment('sleeps a lot')).to.be.equal('Comment is added.');
        expect(dog.feed()).to.be.equal('Max is fed, happy and wagging tail.');
        expect(dog.toString()).to.be.equal(`Here is Susan's pet Max.
Special requirements: likes to be brushed, sleeps a lot
Main information:
Max is a dog with need of 5km running every day and good trainability.`);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//  Dog shoud inherit Pet
let classes = result();
        expect(Object.getPrototypeOf(classes.Dog)).to.be.equal(classes.Pet,
            "Dog does not inherit Pet class");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Cat shoud inherit Pet
   let classes = result();
        expect(Object.getPrototypeOf(classes.Cat)).to.be.equal(classes.Pet,
            "Cat does not inherit Pet class");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Pet constructor
let classes = result();
        let pet = new classes.Pet('Ann', 'Merry');
        expect(pet.owner).to.be.equal('Ann');
        expect(pet.name).to.be.equal('Merry');
        expect(pet.comments.length).to.be.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Cat constructor'
let classes = result();
        let cat = new classes.Cat('Jim', 'Sherry', 'very good', true);
        expect(cat.owner).to.be.equal('Jim');
        expect(cat.name).to.be.equal('Sherry');
        expect(cat.insideHabits).to.be.equal('very good');
        expect(cat.scratching).to.be.equal(true);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Dog constructor
 let classes = result();
        let dog = new classes.Dog('Susan', 'Max', 5, 'good');
        expect(dog.owner).to.be.equal('Susan');
        expect(dog.name).to.be.equal('Max');
        expect(dog.runningNeeds).to.be.equal(5);
        expect(dog.trainability).to.be.equal('good');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// add comment method
let classes = result();
        let pet = new classes.Pet('Ann', 'Merry');
        let cat = new classes.Cat('Jim', 'Sherry', 'very good', true);
        let dog = new classes.Dog('Susan', 'Max', 5, 'good');
        expect(pet.addComment('likes bananas')).to.be.equal('Comment is added.');
        expect(cat.addComment('sleeps a lot')).to.be.equal('Comment is added.');
        expect(dog.addComment('sleeps a lot')).to.be.equal('Comment is added.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// add comment method - error

   let classes = result();
        let pet = new classes.Pet('Ann', 'Merry');
        let cat = new classes.Cat('Jim', 'Sherry', 'very good', true);
        let dog = new classes.Dog('Susan', 'Max', 5, 'good');
        pet.addComment('likes bananas');
        cat.addComment('likes bananas');
        dog.addComment('likes bananas');

        expect(function() \{ pet.addComment('likes bananas'); \}).to.throw('This comment is already added!');
        expect(function() \{ cat.addComment('likes bananas'); \}).to.throw('This comment is already added!');
        expect(function() \{ dog.addComment('likes bananas'); \}).to.throw('This comment is already added!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// toString method with no comments

let classes = result();
        let pet = new classes.Pet('Ann', 'Merry');
        let cat = new classes.Cat('Jim', 'Sherry', 'very good', true);
        let dog = new classes.Dog('Susan', 'Max', 5, 'good');
            
        expect(pet.toString()).to.be.equal(`Here is Ann's pet Merry.`);  
        expect(cat.toString()).to.be.equal(`Here is Jim's pet Sherry.
Main information:
Sherry is a cat with very good, but beware of scratches.`);  
        expect(dog.toString()).to.be.equal(`Here is Susan's pet Max.
Main information:
Max is a dog with need of 5km running every day and good trainability.`);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// feed  method

  let classes = result(); 
        let pet = new classes.Pet('Ann', 'Merry');
        let cat = new classes.Cat('Jim', 'Sherry', 'very good', true);
        let dog = new classes.Dog('Susan', 'Max', 5, 'good');
        
         
        expect(pet.feed()).to.eq('Merry is fed');
        expect(cat.feed()).to.eq('Sherry is fed, happy and purring.');
        expect(dog.feed()).to.eq('Max is fed, happy and wagging tail.');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
