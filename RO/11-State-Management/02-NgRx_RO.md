# NgRx

[slide hideTitle]

# NgRx Store

07-08-NgRx-and-ngrx-store

Biblioteca `@ngrx/store` este un **instrument de management al stării** care implementează un tipar **Redux** folosind **observabile** RxJS.

Ea stochează toate **datele** ce țin de aplicația noastră într-un **singur obiect imuabil**, numit **Store**.

Store este **singura sursă de adevăr** pentru aplicația noastră, iar în această calitate, trebuie să aibă, de asemenea, și o **stare inițială**.

NgRx Store aplică un **flux de date unidirecțional** și poate fi **modificat** numai folosind **funcții de reducere**.

Toate acestea au ca rezultat un **cuplaj slab** care **reduce complexitatea aplicației** și face **mai ușor procesul de dezvoltare**.

## Instalarea

Deschideți instrumentul command\-line în directorul rădăcină al proiectului vostru și tastați:

- `npm install @ngrx/store` if you are using **NPM**

- `yarn add @ngrx/store` for **Yarn**

## Fluxul de date

Această diagramă simplă ilustrează **fluxul de date de bază în NgRx**.

[image assetsSrc="state-management(1).png" /]

[/slide]


[slide hideTitle]

# Acțiunile

09-Actions

**Acțiunile** sunt folosite pentru a **descrie evenimente** care **au loc** pe parcursul utilizării unei aplicații.

Aceste evenimente includ toate tipurile de **interacțiuni cu utilizatorii** precum **trimiterea unor formulări de înscriere** say interacțiunea cu **API**.

Procesul de **trimitere a datelor** este numit **expediere**.

Acțiunile sunt **expediate către** și sunt **manipulate** de către **funcțiile de reducere (reductori)**.

Fiecare **instanță a unei acțiuni** implementează o **interfață a acțiunii** încorporată care are o proprietate `type`(tip) obligatorie.

Proprietatea `type` este un **șir**, care descrie **acțiunea** care va fi **expediată**.

Ea conține **sursa acțiunii expediate între paranteze pătrate** și **tipul evenimentului**:

`[Source] Event Type`

De exemplu, dacă dorim să creăm o acțiune pentru **înregistrarea unui utilizator nou**, tipul va arăta similar cu acesta:

`[Register Page] Signup`

Acțiunile pot să conțină de asemenea o **sarcină utilă** opțională de date precum **email și parolă** preluate dintr-un **formular de înregistrare**.

[/slide]

[slide hideTitle]

# Crearea acțiunilor

10-Create-Actions  

Acest exemplu arată trei acțiuni pentru **creștere**, **scădere** și **resetare** a unei **componente de contorizare**.

Acum este momentul să generăm un nou proiect Angular, dacă nu ați făcut acest lucru deja: 

```js
ng generate new ngrx-counter
```

Pasul următor este să generăm o componentă `counter` în CLI Angular:

```js
ng generate component counter
```

Apoi, vom crea un fișier nou, denumit `counter.actions.ts` în folderul `app`.

```js
import { createAction } from '@ngrx/store';

// O acțiune pentru a crește contorul
export const increment = createAction(
  '[Counter Component] Increment'
)

// O acțiune pentru a descrește contorul
export const decrement = createAction(
  '[Counter Component] Decrement'
)

// O acțiune pentru a reseta contorul
export const reset = createAction(
  '[Counter Component] Reset'
)
```

În interiorul acestuia, vom importa metoda `createAction()` din `@ngrx/store`.

Această metodă acceptă șirul `type` și o **sarcină utilă**, dacă este cazul, și **returnează un action object**.

Ele fac crearea de acțiuni mai puțin explicită, abstractizând logica bazată pe clase de la dezvoltatori.

Fiecare dintre cele trei creatori de acțiuni va returna **funcții creatori**.

Când oricare dintre aceste funcții este invocată, ea va returna un obiect sub forma unei interfețe de **acțiune**.

Funcțiile creatoare de acțiuni pot să accepte de asemenea o altă funcție ca ultim argument:

```js
export const registrationSuccess = createAction(
  '[Auth/API] Registration Success',
  (response: Response) => response.user
);
```

În acest exemplu, returnăm utilizatorul din obiectul de răspuns atunci când o înregistrare este efectuată cu succes.

[/slide]

[slide hideTitle]

# Reductorii

11-Reductors

Folosim **reductorii (funcțiile de reducere)** pentru a defini **cum se modifică starea aplicației noastre**.

Ei sunt **responsabili** pentru **manipularea tranziției de la o stare la alta**.

Reductorii sunt **funcții pure**, ceea ce înseamnă că **nu prezintă efecte secundare** - **valoarea returnată** este determinată numai de **datele de intrare**.

**Neavând efecte secundare**, ele manipulează fiecare tranziție de manieră **sincronă**.

O funcție de reducere acceptă:

- Ultima `Action`  expediată
- **Starea** curentă

În funcție de acestea, ea decide fie să **returneze** o stare modificată, fie starea existentă.

[/slide]


[slide hideTitle]

# Definirea unei funcții reductor

12-Define-a-Reducer-Function

**Funcția de reducere sau reductorul** va fi folosită pentru a **modifica starea în componenta de contorizare (Counter Component)** pe baza **acțiunilor** pe care le-am creat mai devreme.

Să începem prin a crea fișierul `counter.reducer.ts`:

```js
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

```

Mai întâi, importăm `createReducer()` și `on()` din magazinul **NgRx Store**.

Apoi, importăm acțiunile pe care le-am creat mai devreme din `counter.actions.ts`.

Funcția `createReducer()` acceptă o **stare inițială** și un număr de apeluri ale funcției `on()` pentru **fiecare acțiune**.

Invocând funcția `on()`, **facem asocieri între acțiuni și modificări ale stării sale**.

[/slide]

[slide hideTitle]

# Adăugarea StoreModule.forRoot

13-Add-the-Store-Module.forRoot

Pentru ca magazinul să poată fi **accessibil** din **oricare parte a aplicației noastre** trebuie să mergem la `app.module.ts` și să adăugăm modulul `StoreModule.forRoot()` în matricea de importuri:

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// These are the neccessary imports
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

Metoda `forRoot()` acceptă o **hartă de perechi cheie-valoare** care definesc **starea aplicației** noastre. 

Aici, parsăm un obiect cu o singură proprietate `count` care stochează funcția `counterReducer`.
[/slide]


[slide hideTitle]

# Crearea unei Componente de contorizare

14-15-Create-a-Counter-Component

Creăm o nouă **componentă de contorizare** folosind **Angular CLI**:

`ng generate component counter`

Această comandă va crea un folder `counter` în interiorul `src/app` și va **adăuga automat componenta** la matricea  `declarations` din `app.module.ts`.

În interiorul `src/app/counter/`, deschideți `counter.component.ts`.

```js
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
```

Apoi, adăugați următoarele importuri:

```js
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
```

Creați un nou **observabil** cu denumirea `count$`.

În interiorul funcției constructor, conectați **fluxul** `this.count$` la **starea curentă** a lui `count` pe care o avem în Store.

În corpul acestei clase, **definiți funcții pentru fiecare acțiune**:

```js
increment() {
  this.store.dispatch(increment());
}

decrement() {
  this.store.dispatch(decrement());
}

reset() {
  this.store.dispatch(reset());
}
```

Următorul pas este să generați un `div`, și câteva **butoane** pentru a **vizualiza contorul**.

Mergeți la `src/app/counter/counter.component.html` și tastați:

```
<div>Current Count: {{ count$ | async }}</div>

<button (click)="increment()">Increment</button>

<button (click)="decrement()">Decrement</button>

<button (click)="reset()">Reset</button>
```

Aici vom crea un **div-block** care afișează numărătoarea curentă de pe componenta noastră de contorizare.

Avem următoarele **butoane**:

- `increment` - crește valoarea numărătorii cu unu când are loc un eveniment de tip `click`
- `decrement` - descrește numărătoare cu unu când se face click
- `reset` - setează valoarea numărătorii la zero

[/slide]

[slide hideTitle]

# NgRx: Demo

11-NgRx-Demo

[/slide]
