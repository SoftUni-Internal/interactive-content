# Component Interaction

[slide hideTitle]

# From Parent To Child

Angular-Components-31-Component-Interaction
Angular-Components-32-33-From-Parent-To-Child

This is the most common method of sharing data. 

It works by using the `@Input()` decorator to **allow data to be passed via the template**. 

```js
import { Component, Input } from '@angular/core';
import { Game } from '../games/game';
@Component({
    selector: 'game',
    template: `<li><div>{{game.title | uppercase}}
        <span *ngIf="game.price >= 100">-> Price: {{game.price}}</span>
        </div></li>`
})
export class GameComponent {
    @Input('gameProp') game : Game;
}
```

```html
<h1>Games List</h1>
 <p>Pick a game to Buy</p>
   <ul>
	<game *ngFor="let game of games" 
	  [gameProp]="game">
	</game>
   </ul>
<button (click)="showAdditionalContent()">Show Image</button>
```

[/slide]

[slide hideTitle]

# From Child To Parent

Angular-Components-34-35-Component-Interaction

Another way for **sharing data is to emit** data from the child. 

This approach is useful when you want to **share data changes that occur on things** like **button clicks**, form **entries**, and other user events.

In the child, declare an **onReacted** variable with the **Output decorator** and set it equal to a new event emitter.

```js
import { Output, EventEmitter } from '@angular/core';
export class GameComponent {
    @Input('gameProp') game : Game;
    @Output() onReacted = new EventEmitter<boolean>();
    react(isLiked : boolean) {
        this.onReacted.emit(isLiked); 
 } 
}
```

```html
<game *ngFor="let game of games="[gameProp]"="game"    	 
    (onReacted)="onReacted($event)">
</game>
```

```js
export class GamesComponent {
    games: Game[];
    likes: number;
    dislikes : number;
    onReacted(isLiked: boolean) {
        isLiked ? this.likes++ : this.dislikes++;
    }
}
```

[/slide]



