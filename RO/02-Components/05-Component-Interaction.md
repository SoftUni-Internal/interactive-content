# Interacțiunea Componentelor

[slide hideTitle]

# De la Părinte la Copil

Angular-Components-31-Component-Interaction
Angular-Components-32-33-From-Parent-To-Child

Aceasta este cea mai comună și simplă metodă de partajare a datelor.

Funcționează folosind decoratorul `@Input()` pentru a **permite transmiterea datelor prin intermediul șablonului**. 

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

# De la Copil la Părinte

Angular-Components-34-35-Component-Interaction

Alt mod de a **partaja date este să emitem** date de la componenta copil. 

Această abordare este utilă atunci când vrem să **partajăm modificările de date care apar pe lucruri** cum ar fi **clicuri pe butoane**, intrări **din formular** și alte evenimente ale utilizatorilor.

În copil, declarăm o variabilă **onReacted** cu **decoratorul Output** și îl setăm să fie egal cu un **emițător de evenimente**.

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



