[slide hideTitle]

# Rezumat

16-Rezumat

## În această lecție ați învățat:

- Că **NgRx Store** este o soluție puternică de management al stării
  * și o puteți instala folosind `npm install @ngrx/store`


- **Acțiunile** în NgRx Store au un `type` sub forma unui șir
  * și ele conțin sarcini utile care vizează date

```js
import { createAction } from '@ngrx/store';

// An action to increment a Counter Component
export const increment = createAction(
  '[Counter Component] Increment'
)
```

- **Reductorii sau funcțiile de reducere** sunt responsabili pentru manipularea tranzițiilor de la o stare la altă
  * ei sunt funcții pure
  * pot determina ce acțiuni să fie executate în funcție de tipul acțiunii


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

[/slide]
