# Problem 2: Pet House

[slide]
# Description

[code-task title="Task Manager" taskId="js-advanced-exam-pet-house" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solveClasses(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

## Your task

Implement the following classes: `Pet`, `Cat`, `Dog`.

## Class Pet 

- `constructor(owner, name)`

Should have these **3 properties:**

owner – string; 
name – string;
comments – array;

- `addComment(comment)`

This function should receive single **comment** like string, add it to the **comments** array and return a message:

`Comment is added.`

If comment is **already added** to the comments array throw an error with:

`This comment is already added!`

- `feed()`
This **function** should **return** a simple message:

`{ name } is fed`

- `toString()`

This **function** should **return** string:

`Here is { owner }'s pet { name }.`

If there are any **comments** then add on a new line:

`Special requirements: { comment1 }, { comment2 }, { comment3 ...}`


## Class Cat

Class `Cat` inherits class `Pet`.

Should have these **4 properties:**

owner – string,  
name – string, 
insideHabits – string,
scratching – boolean,

- `feed()`

This function should inherit the `feed()` method of class `Pet` and extend the **returned** message adding this at the same line at the end:

`, happy and purring.`

- `toString()`

This function should extend the `toString()` method of class `Pet`, returning the **message** with some more lines at the end which are:


`Main information:`
`{ name } is a cat with { insideHabits }`


And if **scrathing** prоperty is **true** you should add this at the end: 

`, but beware of scratches.`  

**Note: For more information see the examples below!**

## Class Dog

Class `Dog` inherits class `Pet`.

- `constructor(owner, name, runningNeeds, trainability)`

Should have these **4 properties:**

owner – string,  
name – string, 
runningNeeds – string
trainability – string 

- `feed()`
This **function** should inherit the `feed()` method of class `Pet` and extend the returned message adding this at the end:
`, happy and wagging tail.`

- `toString()`
This **function** should extend the `toString()` method of class `Pet` returning the message with some more lines at the end which are:

`Main information:`
`{ name } is a dog with need of { runningNeeds }km running every day and { trainability } trainability.`

**Note:  For more information see the examples below!**

## Submission
Submit your `solveClasses` function.

[image assetsSrc="exam-pic9.png" /]

# Examples
This is an example how the code is **intended to be used:**

**Sample code usage** 
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

**Corresponding output**

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