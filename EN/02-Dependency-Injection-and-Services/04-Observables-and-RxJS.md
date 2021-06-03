# Observables and RxJS

[slide hideTitle]

# Functional Programming

23-24-RxJS-and-Observables-and-functional-programming

The premise of functional programming is that functions should have **no side effects**, meaning a function only **does one thing** and does not change the state.

There are of course some **exceptions** to this rule, especially when dealing with **IO libraries** or functions.

Functions can be treated the **same way as objects** in object-oriented programming you can assign them to **variables**, you can return them from **functions**, and you can even **pass them to functions** and use them in calculations.
 
Everything you can do with **objects** you can do with **functions** that is what is often referred to as treating functions like "**first-class citizens**".

Functional programming is **declarative**, where a parameter is given to the function as a and a **certain result** from that function is expected, rather than imperative which explains **step by step** what needs to be done to receive the expected result.

As a result, functional code tends to be **easier to predict** and **test**, while also being more **concise**.

Most modern JavaScript applications make use of functional programming ideas.

## Asynchronous Programming

JavaScript is a **single-threaded** language, the majority of JavaScript code thas is has been **written** so far is being run as a **single process** on the computer.

That means for the most part the code runs from **top to bottom**, always in the same order, in kind of a **procedural** way.

Asynchronous code starts **very similar**, at the top of the file and executes the code until it **gets to the bottom**, but during that execution could run into certain asynchronous functions.

Then the code will **split off** and execute that **asynchronous code separately** from the rest of the code and that's usually because it needs to **wait for** the result of some operation that takes a **long period**.

So the synchronous code will **execute from the top** and execute until it **hit is something asynchronous** and then it will execute that as a result, we may have multiple **different threads** running the code in different sections.

So the code may execute in a **different order** depending on how **long** a certain operation takes, thus make code harder to work with.

Potentially means that we have to make **sure that the code will work** no matter which path it takes, whether it **executes everything in order** and reverse order or any other scrambled order.

[/slide]

[slide hideTitle]

# Function Reactive Programming

26-Functional-Reactive-Programming

**Function Reactive Programming** is a **paradigm** for software development that integrates time flow and **compositional events** into functional programming, which often works with asynchronous data streams.

These data streams can come from or be created by:

- **UI** events 
- **Clicks** or key presses
- **HTTP requests** file systems array-like object strings
- **Machines memory** or cache 

These events can be **turned into** or can be **viewed** as a data stream.

Stream is defined as a sequence of **ongoing events**, ordered in time.

A few things can get from a stream:
- The data that it **emits which could be virtually anything** and **any kind**
- Any **errors could be thrown** if something goes wrong 
- A **notifies signal could be received** when it is complete 


The stream starts with some **kind of event** indicates an event with some kind of value for example **coordinates of a click**.

So stream is moving along, and if **something goes wrong** it can send off an **error which** can notify.

We can have our **application react to that**, and then it keeps going and it can **send off a signal when it is complete**.

Some streams **will not complete**, for instance, you can get a **stream from most movements** and those do not complete they are just **going to keep going** as long as you move the mouse.

Whereas something like an **HTTP GET request** you is going to get the data through the stream and it is **going to complete**.
 
The way that we work with these streams is with what's called an observable.

[/slide]

[slide hideTitle]

# The Observable

25-The-Observables

Observables are used to **watch these streams** and they will **emit a function when the value is omitted** or an error or a complete signal is returned.

Observables can be **subscribed** to by an observer and there is no **limit to how many subscriptions an observable can have**.

We can interact with these data streams as **if they were just a regular array** by using array-like methods and there are a lot of **operators that will allow us to manipulate** the data however we want.

Right standard JavaScript ES5 or even ES6 **can not be used to work with observables** and **streams** and reactive extensions like ReactiveX (RxJS) are what **allows to manipulate them.**

Observables can be used to deliver multiple values of **any type** - like literals, messages, or events, for example. 

They can be used to:
- **Create** Streams
- **Subscribe** to Streams and **unsubscribe** from them
- **React** to new values
- **Combine** streams to build new ones

[/slide]

[slide hideTitle]

# Introducing RxJS

27-Introducing-RxJS

ReactiveX or RxJS, short for **R**eactive E**x**tensions for **J**ava**S**cript it is a library for composing asynchronous programs by using observable sequences and it provides a long list of operators which allows to:

- **Filter** observables
- **Select** observables
- **Transform** observables
- **Combined** and compose observables 

Reactive extensions are not limited to just JavaScript it is also available for many of the popular programming languages like Java, C#, Scala, Clojure, Swift, and others.


## How to install RxJS

Open a terminal in your Angular project's main directory and type `npm install rxjs`.

To import a given functionality with CommonJS:

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

- **Tap Operator Overview**

The `tap` operator performs a side effect for every emission on the source Observable.

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

- **Cold Observables**

Cold observables create a data producer for each subscriber and start running upon subscription.

```js
let coldObservable = Observable.create((observer : any) => {
    observer.next('Our cold observable is up and running');
    setInterval(() => {
        observer.next('Observable One');
    }, 3000);
});
```

In other words, the observable sequence only starts pushing values to the observers when Subscribe is called. 

```js
let firstSubscription = coldObservable.subscribe(
    i => console.log(`first subscription ${i}`)
  );
```

- **Hot Observables**

For an Observable to be regarded as **hot**, the producer must be **created** or **activated** outside of the **subscription**.

Using the RxJS `share` operator, we can make any cold observable hot:

```js
let hotObservable = Observable.create((observer : any) => {
    observer.next('Our hot observable is up and running');
}).pipe(share());
```

To apply the `share` operator, we must pass it as an argument to the `pipe` method.

The `share` operator returns a new Observable that shares the original one.

If there are **no subscribers**, the newly-created observable will **unsubscribe** from the source Observable.

To conclude, hot observables create a **data producer** first, and each **subscriber** gets the data from **one producer**, starting from the moment of subscription.

[/slide]

[slide hideTitle]

# Commonly Used RxJS Operators

30-Commonly-Used-RxJS-Operators

- The map operator

The `map` operator applies a **projection** to each **value** in the provided **source**.

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

- The filter operator

This operator **filters** items emitted by the source Observable and emits only those that **satisfy** a given **condition**.

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

- The reduce operator

The `reduce` operator sums the values from the source Observable and returns a singular value, once the source completes.

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

Both RxJS and are **powerful concepts**, and even more so when **combined**.

Good knowledge of both will give you the ability to choose the way you **structure** your Angular application.

You can go **fully reactive** by utilizing RxJS to the fullest, or structure your app via **parts**, like Forms or HTTP.

[/slide]