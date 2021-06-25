# Subjects

[slide hideTitle]

# What is a Subject?

js-interactive-pipes-interceptors-and-subjects-27-28-Subjects-and-what-is-a-subject

Observables are kind of **passive because we can not trigger the emission** of a new value manually, which might **not be optimal in some cases**.

In those cases, we can use **observable like an event emitter** where we can control when a new **value is emitted**.

We can do this with something called a **subject**, which inherits the observable.

A **Subject** is a special type of **Observable** that can **cast values to multiple Observers**, as opposed to a single one.

Subjects are both **Observables** and **Observers**.

This means that we can **pass a Subject** as an argument to the **subscribe()** method of an **Observable**, because it **implements** `next()`, `error()` and `complete()`.

We can have a more **active approach** by using observables with subjects.

That does not mean you should **always** use subjects. Use them in case you need something like an event emitter.

[/slide]


[slide hideTitle]

# Subjects - Example

js-interactive-pipes-interceptors-and-subjects-29-Subjects-Example

To **create a Subject**, first **import** the corresponding class from RxJS:

```js
import { Subject } from 'rxjs';

const demoSubject = new Subject<any>();

demoSubject.subscribe({
  next: (value) => console.log(`Observer One: ${value}`)
});

demoSubject.subscribe({
  next: (value) => console.log(`Observer Two: ${value}`)
});

demoSubject.next('Hello World');
demoSubject.next('Goodbye');
```

The following output will be printed on the console:

```
Observer One: Hello World
Observer Two: Hello World
Observer One: Goodbye
Observer Two: Goodbye
```

[/slide]

[slide hideTitle]

# Behavior Subject

js-interactive-pipes-interceptors-and-subjects-30-Behavior-Subject

The `BehaviorSubject` stores the "current" value, which means that the **latest emitted value** can be always retrieved.

An **initial value** is **required** as an argument when **instantiating** a Behavior Subject.

To receive the **last emitted value**, we can get that **value by accessing** the `.value` property or **subscribe to it**. 

If the **second approach is used**, the BehaviorSubject will **directly emit the current value** to the subscriber. 

[/slide]

[slide hideTitle]

# Behavior Subject - Example

js-interactive-pipes-interceptors-and-subjects-31-Behavrior-Subject-Example

In this example, we **initialize** a `BehaviorSubject` with a value of 5:

```js
let subject = new BehaviorSubject(5);

behaviorSubject.subscribe({
  next: (value) => console.log(`First Observer: ${value}`)
});

behaviorSubject.next(6);
behaviorSubject.next(7);

behaviorSubject.subscribe({
  next: (value) => console.log(`Second Observer: ${value}`)
});

behaviorSubject.next(8);

```

The expected output looks like this:

```
First Observer: 5
First Observer: 6
First Observer: 7
Second Observer: 7
First Observer: 8
Second Observer: 8
```

[/slide]

[slide hideTitle]

# Replay Subject

js-interactive-pipes-interceptors-and-subjects-32-Replay-Subject

A `ReplaySubject` can send **old values** to **new subscribers**, similarly to a `BehaviorSubject`.

While a regular `Subject` has **no memory**, a `ReplaySubject` can **record** a segment of the Observable **execution**.

It receives two arguments:

- `bufferSize` - the **number of values** to keep in memory

- `windowsTime` - optional, used to define **how long** the old **values** should be **stored** in the memory

[/slide]

[slide hideTitle]

# Replay Subject - Example

js-interactive-pipes-interceptors-and-subjects-33-Replay-Subject-Example

The following example shows a `ReplaySubject` with a `bufferSize` of 2:

```js
let replaySubject = new ReplaySubject(2);

replaySubject.subscribe({ 
  next: (value) => console.log(`Observer One: ${value}`)
});

replaySubject.next('A');
replaySubject.next('B');
replaySubject.next('C');

replaySubject.subscribe({ 
  next: (value) => console.log(`Observer Two: ${value}`)
});

replaySubject.next('D');

```

The following lines will be printed in the CLI:

```
Observer One: A
Observer One: B
Observer One: C
Observer Two: B
Observer Two: C
Observer One: D
Observer Two: D
```

[/slide]

[slide hideTitle]

# Async Subject

js-interactive-pipes-interceptors-and-subjects-34-Async-Subject

The `AsyncSubject` emits only the **last value it received** to its subscribers.

In addition, the **value** will **only** be sent once execution **completes**.

To **halt execution**, we must call the `complete()` method.

Just like you would with a normal `Subject`, you can still use an `AsyncSubject` to **multicast**.
 
[/slide]

[slide hideTitle]

# Async Subject - Example

js-interactive-pipes-interceptors-and-subjects-35-Async-Subject-Example

This is an example of an `AsyncSubject`:

```js
let asyncSubject = new AsyncSubject();

asyncSubject.next(10);
asyncSubject.next(20);

asyncSubject.subscribe({ 
  next: (value) => console.log(`Observer: ${value}`)
});

// Nothing will be printed until complete() is invoked.

asyncSubject.next(30);

asyncSubject.complete();

```
The expected output will be `Observer: 30`.

[/slide]
