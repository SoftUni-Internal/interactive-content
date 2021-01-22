# Observables and RxJS

[slide hideTitle]

# Functional Programming

**Functional programming** is a paradigm in which programs are created by **composing** functions.

In functional programming, functions are **first-class citizens**, meaning that they can be:

- **Passed as arguments** to other functions
- **Returned** by a function
- **Assigned** to variables

Functional programming is **declarative** rather than imperative.

As a result, functional code tends to be **easier to predict** and **test**, while also being more **concise**.

Most modern JavaScript applications make use of functional programming ideas.

## Asynchronous Programming

At its core, JavaScript is a **single-threaded language**.

This means that it can only perform a **single task at a time**.

**Asynchronous JavaScript** aims to solve this problem.

The most common way to **handle** asynchronous operations is by using **streams**.

In **Angular**, handling streams is done by using **Observables**.

[/slide]



[slide hideTitle]

# The Observable

**Observables** are Angular's way of **passing values** between different application parts.

They are the recommended technique for **event handling** and **asynchronous programming**.

Oservables can be used to deliver multiple values of **any type** - like literals, messages, or events, for example. 

They can be used to:
- **Create** Streams
- **Subscribe** to Streams and **unsubscribe** from them
- **React** to new values
- **Combine** streams to build new ones

A common use case for **Observables** is when setting up our **HTTP requests**. 

We will learn about Angular's HTTP Client in a later video.

[/slide]

[slide hideTitle]

# Function Reactive Programming

**Function Reactive Programming** is a **paradigm** for software development which integrates time flow and **compositional events** into functional programming.

In pure **functional** programming, there are **no side-effects**.

However, for anything related to **user interaction**, side-effects are **necessary** to a degree.

The basic idea behind FRP is that there are certain **datatypes** that represent a **value** "over time". 

Computations that involve these **changing-over-time values** will themselves have values that change **over time**.

In FRP, **entire programs** can be **build** exclusively around the notion of **streams**.


[/slide]

[slide hideTitle]

# Introducing RxJS

RxJS, short for **R**eactive E**x**tensions for **J**ava**S**cript, is a **library** for composing **asynchronous** and **event-based programs** by using **observables**.

RxJS provides multiple **utility functions** for **stream manipulations** like:

- Iterating through stream values;
- Stream filtering;
- Composing multiple streams.


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

In order to apply the `share` operator, we must pass it as an argument to the `pipe` method.

The `share` operator returns a new Observable that shares the original one.

If there are **no subscribers**, the newly-created observable will **unsubscribe** from the source Observable.

To conclude, hot observables create a **data producer** first, and each **subscriber** gets the data from **one producer**, starting from the moment of subscription.

[/slide]

[slide hideTitle]

# Commonly Used RxJS Operators

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

This operator **filters** items emitted by the source Observable and emmmits only those that **satisfy** a given **condition**.

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


[/slide]

[slide hideTitle]

# RxJS and FRP Overview

Both RxJS and are **powerful concepts**, and even more so when **combined**.

Good knowledge of both will give you the ability to choose the way you **structure** your Angular application.

You can go **fully reactive** by utilising RxJS to the fullest, or structure your app via **parts**, like Forms or Http.

[/slide]