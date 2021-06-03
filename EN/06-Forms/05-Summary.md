[slide hideTitle]

# Summary

## In this lesson you learned:

js-angular-forms-49-Summary

- There are three types of **directives**
    * we use **component** directives to define user interfaces    
    * **attribute** directives change the appearance and behavior of components or other directives
    * **structural** directives control the HTML's layout

```js
@Directive({
    selector: '[appHighlight]' 
})
export class HighlightDirective {
    constructor() { }
}
```

- There are two ways to handle **forms** in Angular
    * template-driven forms provide direct access to the forms object model
    * reactive forms are immutable and easier to test
    
```js
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');
}
```

## In the next lesson you will learn:

- An in-depth **Forms Workshop**
    * how to implement forms in a real application

[/slide]