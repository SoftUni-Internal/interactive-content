# Summary

[slide hideTitle]

## In this lesson you learned:

js-angular-forms-49-Summary.mp4

- There are three types of **directives**
    - Components, Structural, Attribute
```js
@Directive({
    selector: '[appHighlight]' 
})
export class HighlightDirective {
    constructor() { }
}
```
- There are two ways to handle **forms** in Angular
    - Template-driven forms
    - Reactive forms
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
- Directives are integrated into Form Modules

## In the next lesson you will learn:

- An in-depth Forms Workshop

[/slide]