# Subjects

[slide hideTitle]

# Ce este un Subject?

js-interactive-pipes-interceptors-and-subjects-27-28-Subjects-and-what-is-a-subject

Observables sunt oarecum **pasive, deoarece nu putem declanșa emiterea** unei valori noi în mod manual, lucru care **nu este optim în unele cazuri**. 

În acele cazuri, putem folosi **observable ca emițător de evenimente**, unde putem controla momentul **emiterii unei valori** noi.

Putem face acest lucru cu ajutorul unui concept numit **subject**, care moștenește acel observable.

Un **Subject** este un tip special de **Observable** care poate **schimba valori în mai multi Observers**, comparativ cu doar unul.

Subjects sunt atât **Observables**, cât și **Observers**.

Acest lucru înseamnă că putem **transmite un Subject** ca argument metodei **subscribe()** a unui **Observable**, deoarece **implementează** `next()`, `error()` și `complete()`.
 
Putem avea o **abordare mai activă** folosind observables cu subjects.

Asta nu înseamnă că trebuie să folosiți **mereu** subjects. Folosiți această noțiune în cazul în care aveți nevoie de ceva de tipul unui emițător de evenimente.

[/slide]


[slide hideTitle]

# Subjects - Exemplu

js-interactive-pipes-interceptors-and-subjects-29-Subjects-Example

Pentru **a crea un Subject**, **importați** mai întâi clasa corespunzătoare din RxJS:

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

Următorele date de ieșire vor fi tipărite pe consolă:

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

`BehaviorSubject` stochează valoarea "curentă", ceea ce înseamnă că **ultima valoare emisă** poate fi recuperată mereu.

**Valoarea inițială** este **solicitată** ca argument în momentul **instanțierii** unui Behaviour Subject.

Pentru a primi **ultima valoare emisă**, putem lua acea **valoarea accesând** proprietatea `.value` sau **abonându-ne**.

Dacă a **doua abordare este folosită**, BehaviorSubject va **emite în mod direct valoarea curentă** către abonat.

[/slide]

[slide hideTitle]

# Behavior Subject - Exemplu

js-interactive-pipes-interceptors-and-subjects-31-Behavrior-Subject-Example

În acest exemplu, **inițializăm** un `BehaviorSubject` cu valoarea 5:

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

Datele de ieșire așteptate arată așa:

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

Un `ReplaySubject` poate trimite **valori vechi** către **abonații noi**, similar lui `BehaviorSubject`.

În timp ce un `Subject` normal **nu are memorie**, un `ReplaySubject` poate **înregistra** un segment din **execuția** unui Observable.

El primește două argumente:

- `bufferSize` - **numărul valorilor** păstrate în memorie 

- `windowsTime` - opțional, folosit pentru a defini **cât timp** vor fi **stocate** în memorie **valorile** vechi

[/slide]

[slide hideTitle]

# Replay Subject - Exemplu

js-interactive-pipes-interceptors-and-subjects-33-Replay-Subject-Example

Următorul exemplu arată un `ReplaySubject` cu un `bufferSize` de 2:

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

Următoarele linii vor fi tipărite în CLI:

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

`AsyncSubject` emite către abonații lui doar **ultima valoare pe care a primit-o**.

În plus, **valoarea** va fi trimisă **doar** când execuția a fost **finalizată**.

Pentru **a opri execuția**, trebuie să apelăm metoda `complete()`.

La fel ca în cazul unui `Subject` normal, puteți folosi un `AsyncSubject` pentru **multicasting**.
 
[/slide]

[slide hideTitle]

# Async Subject - Exemplu
js-interactive-pipes-interceptors-and-subjects-35-Async-Subject-Example

Acesta este un exemplu de `AsyncSubject`:

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

Rezultatul așteptat va fi `Observer: 30`.

[/slide]
