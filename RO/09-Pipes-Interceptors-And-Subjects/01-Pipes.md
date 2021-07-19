# Pipes

[slide hideTitle]

# Ce sunt Pipes?

js-interactive-pipes-interceptors-and-subjects-3-4-pipes-and-whar-are-pipes

Pipe-urile provin din sistemele Linux/Unix, unde se poate scrie `|` în linia de comandă, iar ieșirea este transmisă de la o **comandă** la **alta**.

**Înlănțuirea comenzilor** este aproape exact ca în cazul **promisiunilor**, unde rezultatul unei promisiuni poate fi transmis altei promisiuni și așa mai departe.

În Angular, folosim pipe-uri în cadrul **expresiilor din șablon** pentru a transforma date.

Pipe-urile pot fi aplicate pentru **orice tip de date**, precum **șiruri**, **numere** și **matrice**.

Pentru **a folosi** un pipe, punem **operatorul** `|` **după valoare**, iar apoi adăugăm **numele** pipe-ului.

Câteva **pipe-uri încorporate** sunt:

- `{{ message | lowercase }}` - transformă toate caracterele șirului în **litere mici**

- `{{ message | uppercase | titlecase }}` - pipe-urile pot fi **înlănțuite**, unde ordinea **aplicării lor** este de la stânga la dreapta (uppercase, apoi titlecase)

[/slide]


[slide hideTitle]

# Parametrizarea Pipe-urilor

js-interactive-pipes-interceptors-and-subjects-5-Parameterizing-Pipes

Unele pipe-uri pot să accepte și parametri.

De exemplu, pipe-ul `slice` creează un **șir** sau o **matrice**, care conține un subset al **originalului**.

El acceptă **două argumente**:

- **Indicele de start**
- **Indicele de sfârșit**, care este non-inclusiv și opțional

Parametrii sunt adăugați folosind **două puncte**:

`{{ username | slice:0:6 }}`

Aceasta este **starea inițială** a lui `username`:

`this.username = 'juliemiller'`

După ce pipe-ul `slice` este aplicat, șirul `username` va fi **afișat** ca `julie`.

Pentru a învăța mai multe despre **alte pipe-uri încorporate**, vizitați [documentația](https://angular.io/api?query=pipe) pentru Angular.
[/slide]


[slide hideTitle]

# Crearea Pipe-urilor

js-interactive-pipes-interceptors-and-subjects-6-7-Creating-Pipes

Cel mai ușor mod de a crea un **pipe personalizat** este folosirea lui Angular CLI:

`ng generate pipe greeting`

Făcând acest lucru, eliminăm necesitatea de a **adăuga pipe-ul nostru** la matricea `Declarations` în `app.module.ts`, din moment ce CLI-ul face asta **în mod automat**.

Acesta este un exemplu al unui pipe personalizat `greeting`, care acceptă un șir și adaugă înaintea lui `Hello, `:

```js
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'greeting'
})

export class GreetingPipe implements PipeTransform {
  transform(username: string) {
    return 'Hello, ' + username;
  }
}
```

Înăuntrul lui `src/app/greeting.pipe.ts`, importăm clasele `Pipe` și `PipeTransform` din `@angular/core`.

Decoratorul `@Pipe` acceptă un obiect cu variabila **name**.

Acesta este numele pe care îl vom **folosi** atunci când **aplicăm într-un șablon pipe-ul nostru personalziat**.

Clasa `PipeTransform` conține metoda `transform`, folosită pentru **transformarea datelor**.

Clasa noastră `GreetingPipe` o implementează pentru **a returna șirul modificat**. 

Folosim pipe-ul nostru personalizat după cum urmează:

`<h1>{{ username | greeting }}</h1>`

Așa arată șirul nostru înainte ca pipe-ul nostru personalizat să fie aplicat:

`this.username = 'james.appleseed'`

După ce este aplicat, `Hello, james.appleseed` va fi **randat în view**. 

## Crearea Pipe-urilor: Primirea Parametrilor

La fel ca unele pipe-uri încorporate, **pipe-urile personalizate** pot primi **parametri**.

```js
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})

export class MultiplyPipe implements PipeTransform {

  transform(value: number, multiplier: number) {
    return value * multiplier;
  }

}
```

Pipe-ul `multiply` primește un `multiplicator` ca **parametru** adițional.

`<p>The number is {{250 | multiply:3}}</p>`

Ieșirea așteptată este "750".

[/slide]

[slide hideTitle]

# Async Pipe - Exemplu

js-interactive-pipes-interceptors-and-subjects-8-Async-Pipe-Example

Async pipe-ul este folosit pentru a **rula cod asincron**.

El este **abonat** la o **promisiune** sau **observable** și **returnează** cele mai recente **date**.

```js
notification = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Welcome back!');
  }, 1000)}) 

```

`<h1>{{ notification | async }}</h1>`

[/slide]

[slide hideTitle]

# Async Pipe - Observables

js-interactive-pipes-interceptors-and-subjects-9-Async-Pipe-Observables

Atunci când lucrăm cu **Observables**, `AsyncPipe` se **abonează** în mod automat, **despachetează datele** și **anulează abonarea** atunci când o componentă este **distrusă**.

În următorul exemple, **preluăm** o **listă de utilizatori** dintr-o **bază de date**:

```js
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from 'services/users.service.ts';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit { 
  constructor (
   private usersService : UsersService
  ) { }

  users$ : Observable<User[]>
   
  ngOnInit() {
    this.users$ = this.usersService.getAllUsers();
  }

}

```

Prima dată, **importăm** clasa `Observable` din `rxjs` și un `UsersService` care conține metode folosite pentru preluarea datelor utilizatorului.

`users$` este un **observable** care trebuie să returneze o matrice de **instanțe de utilizatori**.

Înăuntrul lui `ngOnInit` **preluăm toți utilizatorii** și îi salvăm în `this.users$`.

Folosim `ngFor` pentru **a randa** elemente separate `div` cu informații pentru **fiecare utilizator** și aplicăm pipe-ul `async` în felul următor:

```
<div *ngFor="let user of users$ | async">
  // ...
</div>
```

[/slide]
