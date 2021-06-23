# Observables and RxJS

[slide hideTitle]

# Functional Programming

23-24-RxJS-and-Observables-and-functional-programming

The premise of functional programming is that functions should have **no side effects**, meaning a function only **does one thing** and does not change the state.

There are some **exceptions** to this rule, especially when dealing with **IO libraries** or functions.

Functions can be treated the **same way as objects** in object-oriented programming. 

You can assign them to **variables**, you can return them from **functions**, and you can even **pass them to other functions**.
 
Everything you can do with **objects**, you can do with **functions**. 

That is often referred to as treating functions like "**first-class citizens**".

Functional programming is **declarative**, which means that it utilizes functions to perform specific operations without keeping state.

This makes it different from **imperative** programming, where the solution is described one step at a time.  

As a result, functional code tends to be **easier to predict** and **test**, while also being more **concise**.

Most modern JavaScript applications make use of functional programming ideas.

## Asynchronous Programming

JavaScript is a **single-threaded** language, meaning that the majority of code that has been **written** so far is being run as a **single process** on the computer.

The code runs from **top to bottom**, always in the same order, in kind of a **procedural** way.

Asynchronous execution starts **very similarly** at the top of the file and executes the code until it **gets to the bottom**, but during that execution, it could run into certain asynchronous functions.

The asynchronous functions that occur during the process are executed separately from the rest of the code.

This is because the function takes **longer** to return a result.

As a result of that process, we may have multiple **different threads** running the code in different sections.

During asynchronous execution, the code could be executed in a **different order**, making it harder to work with.

This means that we have to make **sure that the code will work** regardless of the execution order.

[/slide]

[slide hideTitle]

# Function Reactive Programming

26-Functional-Reactive-Programming

**Functional Reactive Programming** is a **paradigm** for software development that integrates time flow and **compositional events** into functional programming, **which often works** with asynchronous data streams.

These data streams can come from or be created by:

- **UI** events 
- **Clicks** or key presses
- **HTTP requests** file systems array-like object strings
- **Machines memory** or cache 

A stream is defined as a sequence of **ongoing events** ordered in time.

This is some of the information that we can get from streams:

- The data that they **emit which could be virtually anything** and of **any kind**
- The **errors they throw** if something goes wrong 
- A **notifying signal can be received** when they are complete 

The stream starts with some **kind of event** with a specific value like the **coordinates of a click**.

If **something goes wrong** during the streaming process, it can **throw an error**.

Our **application can react to the error** while still running and **send off a signal when it has processed it**.

Most streams like an **HTTP GET request** are eventually **completed** after passing the data.

Some streams, however, could keep on going **without completion**.

For example, you can get a stream from the **movement of the mouse**, which will **keep on going** until the mouse is still.
 
We can use observables to work with streams in Angular.

[/slide]

[slide hideTitle]

# The Observable

25-The-Observables

Observables are used to **monitor these streams** will **emit a function in one of the following cases:

- If a value is omitted
- If there is an error
- If a complete signal is returned

An observer can be used to **subscribe** to observables. Keep in mind that one observable can have multiple observers.

We can interact with a data stream as if it were just a **regular array** by using array-like methods.

Standard JavaScript ES5 or even ES6 **cannot be used to work with observables** or **streams**. 

Reactive extensions like ReactiveX (RxJS) are what **allows us to manipulate them.**

Observables can be used to deliver multiple values of **any type** like literals, messages, or events.

They can be used to:

- **Create** Streams
- **Subscribe** to Streams and **unsubscribe** from them
- **React** to new values
- **Combine** streams to build new ones

[/slide]

[slide hideTitle]

# Introducing RxJS

27-Introducing-RxJS

ReactiveX or RxJS stands for **R**eactive E**x**tensions for **J**ava**S**cript. 

It is a library for **composing asynchronous programs** by using **observable sequences** and it provides a **long list of operators** which allows us to:

- **Filter** observables
- **Select** observables
- **Transform** observables
- **Combine** and compose observables 

Reactive extensions are **not limited** to just JavaScript.

They are also **available for many of the popular programming languages** like Java, C#, Scala, Clojure, Swift, and others.

## How to install RxJS

To install RxJS, open a terminal in your **Angular project's** main directory and type `npm install rxjs`.

You can import a given functionality with CommonJS like this:

```js
const { range } = require('rxjs')
const { map, filter } = require('rxjs/operators')
```

You can also use `import/export`:

```js
import { range } from 'rxjs'
import { map, filter } from 'rxjs/operators'
```

[/slide]

[slide hideTitle]

# Observables Side Effect (Hot vs Cold)

28-Observables-Side-Effect-(Hot-vs-Cold)
29-Observable-Side-Effects

## Tap Operator Overview

The `tap` operator performs a **side effect for every emission** on the source Observable.

It returns an Observable that is **identical** to the source with a **callback function**.

```js
const obs = range(1, 5)
  .pipe(
    tap(function (i) {
      console.log(`Hello ${i}`);
    })
  );
```

The `pipe` method can take an infinite amount of **arguments**.

Еach argument is an **operator** you want to apply to the **Observable**.

## Cold Observables

Cold observables **create a data producer** for each subscriber and **start running upon subscription**.

```js
let coldObservable = Observable.create((observer : any) => {
    observer.next('Our cold observable is up and running');
    setInterval(() => {
        observer.next('Observable One');
    }, 3000);
});
```

In other words, the **observable sequence only starts pushing values** to the observers when Subscribe is called. 

```js
let firstSubscription = coldObservable.subscribe(
    i => console.log(`first subscription ${i}`)
  );
```

## Hot Observables

With Hot Observables, the producer must be **created** or **activated** outside of the **subscription**.

Using the RxJS `share` operator, we can make any cold observable hot:

```js
let hotObservable = Observable.create((observer : any) => {
    observer.next('Our hot observable is up and running');
}).pipe(share());
```

To apply the `share` operator, we must pass it as an argument to the `pipe` method.

It returns a new Observable that shares the original one.

If there are **no subscribers**, the newly-created observable will **unsubscribe** from the source Observable.

To conclude, hot observables create a **data producer** first, and each **subscriber** gets the data from **one producer**, starting from the moment of subscription.

[/slide]

[slide hideTitle]

# Commonly Used RxJS Operators

30-Commonly-Used-RxJS-Operators

These are some of the more commonly used operators in RxJS:

- `map` - Transforms each **value** in the provided **source**.

```js
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

let src = from([1, 2, 3]);

let demo = src.pipe(map(value => value * 3));

let subscribe = demo.subscribe(val => console.log(val));
```

In this example, we **multiply** the value of each element by **3**.

The following output will be displayed in the console:

```
3
6
9
```

- `filter` - **Filters** items emitted by a given Observable and emits only those that **satisfy** a given **condition**.

```js
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

let src = from([20, 5, 7, 78, 2, 31]);

let demo = src.pipe(filter(number => number >= 20));

let subscribe = demo.subscribe(value => console.log(value);
```

In this example, we filter numbers **bigger than or equal** to **20**.

This is the corresponding output:

```
20
78
31
```

- `reduce` - Sums the values from a given Observable and returns a singular value.

```js
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

let src = of(11, 52, 19);

let demo = src.pipe(reduce((accumulator, value) => accumulator + value));

let subscribe = demo.subscribe(sum => console.log(sum));
```

In this example, we sum the three elements from the **source**.

The resulting value equals **82**.

You can learn more about ReactiveX [here](http://reactivex.io).

[/slide]

[slide hideTitle]

# RxJS and FRP Overview

31-RxJS-and-FRP-Overview

**Functional Reactive Programming** uses streams to handle data coming synchronously or asynchronously.

In Angular, we use **Observables** to implement FRP.

A popular library for FRP is **RxJS**, which comes with an implementation for Observables and many other features.

[/slide]
