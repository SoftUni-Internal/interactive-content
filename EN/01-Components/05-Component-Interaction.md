# Component Interaction

[slide hideTitle]

# From Parent To Child

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/02-Components/Angular-Components-31-32-33-Component-Interaction-from-parent-to-child-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is the most common and straightforward method of sharing data. 

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

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/02-Components/Angular-Components-34-35-Component-Interaction-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Another way for **sharing data is to emit** data from the child component. 

This approach is useful when we want to **share data changes that occur on things** like **button clicks**, form **entries**, and other user events.

In the child, we declare an **onReacted** variable with the **Output decorator** and we set it to be equal to a new **event emitter**.

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



