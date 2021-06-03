# Subjects

[slide hideTitle]

# What is a Subject?

js-interactive-pipes-interceptors-and-subjects-27-28-Subjects-and-what-is-a-subject

A **Subject** is a special type of **Observable** that can **cast values to multiple Observers**, as opposed to a single one.

Subjects are both **Observables** and **Observers**.

This means that we can **pass a Subject** as an argument to the **subscribe()** method of an **Observable**, because it **implements** `next()`, `error()` and `complete()`.

The Observer has **no information** about **where** the Observable **execution** is coming **from** - a regular Observable or a Subject.

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

The `BehaviorSubject` stores the **latest value** emitted to its consumers.

It **replays** the **current value** whenever an observer **subscribes** to it.

An **initial value** is **required** as a parameter when **instantiating** a Behaviour Subject.


[/slide]

[slide hideTitle]

# Behavior Subject - Example

js-interactive-pipes-interceptors-and-subjects-31-Behavrior-Subject-Example

In this example, we **initialize** a `BehaviourSubject` with a value of 5:

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

It receives two parameters:

- `bufferSize`: the **number of values** to keep in memory;

- `windowsTime`: optional, used to define **how long** the old **values** should be **stored** in memory.

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

Just like you would with a normal `Subject`, `AsyncSubject` can still be used to **multicast**.
 
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