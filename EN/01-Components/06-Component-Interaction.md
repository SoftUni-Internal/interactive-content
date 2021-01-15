# Component Interaction

[slide]

# From Parent To Child

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

[slide]

# From Child To Parent

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



