[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/11-State-Management/16-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- **NgRx Store** is a powerful State Management solution
  * install using `npm install @ngrx/store`


- **Actions** in NgRx Store have a `type` in the form of a string
  * they contain a payload of data

```js
import { createAction } from '@ngrx/store';

// An action to increment a Counter Component
export const increment = createAction(
  '[Counter Component] Increment'
)
```

- **Reducers** are responsible for handling transitions from one state to another
  * they are pure functions
  * can determine which action to handle based on the action's type


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
