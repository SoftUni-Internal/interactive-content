# Explicit Function Binding
[slide]
# Explicit Binding

Binding allows us to modify the context of a function, essentially changing what the ``this`` keyword points to.

**Explicit binding** is what happens when we use ``call()``, ``apply()`` or ``bind()`` on a function. This allows us to bind a function to a particular object and use it as if it was a method of that object. This essentially changes the context of ``this``. In other words, we are binding the function to a context of our choice.

Let's look at an example using ``call()``:

```js live
function speak(message) {
  console.log(`My name is ${this.name}. ${message}`);
}

let person = { name:'John' };

greet.call(person, "This is my story...");
```
Normally ``this`` would have pointed back to the **global object** or **window** and returned ``undefined`` for ``this.name``, but because we explicitly bound the object **person** to the ``speak()`` function using ``call()``, it behaves as though ``speak()`` is a method of the person object, even though we see it is an outside function.
[/slide]

[slide]
# Changing the Context: Call
Calls a function with a given value of ``this`` and optional arguments. It changes the context of the function to the given object.

```js
functionName.call(objectToBind, additionalArguments);
```

You can have 0, 1 or more arguments and when calling the object you can add them like so ``function.call(object, argument1, argument2, argumentN)``;

The ``call()`` method doesn't make a copy of the function, it simply executes it right away.

```js live
let praise = function (...praises) {
    console.log(`This is ${this.name}.`);

    let compliments = praises.reduce((acc, curr) => {
        let el = `-- ${curr}\n`;
        return acc + el;
    }, `He is:\n`).trim();
    return compliments;
}

let dog = {
    name: 'Rex',
}

console.log(praise.call(dog,
    'A good boy', 'My best friend'));


let cat = {
    name: 'Charlie'
}

console.log(praise.call(cat,
    'A good companion', 'A goofball'));

```

In the above example you can see we used the same function that did not belong to either object and bound those objects to it. Every time we used ``call()`` it had a different context for ``this``.

[/slide]

[slide]
# Changing the Context: Apply

``apply()`` and ``call()`` serve the same purpose. However, ``call()`` takes a list of arguments, while ``apply()`` takes an array.

To illustrate this with the previous example:

Using ``call()``:
```js
console.log(praise.call(dog,
    'A good boy', 'My best friend'
    ));
```

Using ``apply()``:
```js
console.log(praise.apply(dog,
    ['A good boy', 'My best friend']
    ));
```
If your arguments are in an array and you can still use ``call()`` in most situations by using the spread operator on the array.

```js
functionName.call(thisContext, ...[yourArray]);
```
[/slide]

[slide]
# Changing the Context: Bind

``bind()`` creates a **new function** and has ``this`` set to whatever value we provided. The function is not directly executed when using ``bind()``. 

It essentially allows objects to borrow methods from other objects without us having to manually make copies of that method. 

Let's imagine we have a **student** that can ``study()``:

```js
let student = {
  alias: `Motivated student`,
  subject: 'Web Development',
  study: function(hours) {
    console.log(`${this.alias} studies 
    ${this.subject} ${hours} hours a day`);
  }
};
```
We also have a professor that can ``teach()``:

```js
let professor = {
  alias: `Grumpy professor`,
  subject: 'Mathematics',
  teach: function(hours) {
    console.log(`${this.alias} teaches ${this.subject} ${hours} hours a day`)
  }
};
```

Now imagine the student has advanced so much that he is now able to ``teach()``. Use ``bind()`` to borrow the method from the **professor** object.

```js
let teach = professor.teach.bind(student, 2);
teach();
//Motivated student teaches Web Development for 2 hours a day
```

By using ``bind(student, 2)`` we passed the **student** object as a first argument, changing the context of ``this`` from **professor** to **student** and passed **2** as a second argument.

See it in action:

```js live
let student = {
  alias: `Motivated student`,
  subject: 'Web Development',
  study: function(hours) {
    console.log(`${this.alias} studies 
    ${this.subject} ${hours} hours a day`);
  }
};

let professor = {
  alias: `Grumpy professor`,
  subject: 'Mathematics',
  teach: function(hours) {
    console.log(`${this.alias} teaches ${this.subject} ${hours} hours a day`)
  }
};

let teach = professor.teach.bind(student, 2);
teach();
```
This is known as function borrowing in JavaScript. 

[/slide]


