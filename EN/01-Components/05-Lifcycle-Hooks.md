# Lifecycle Hooks

[slide hideTitle]

# Lifecycle Overview

Angular calls lifecycle hook methods on directives and components. 

A component has a lifecycle managed by Angular.

Angular creates it, renders it, checks it when its data-bound properties change, and destroys it before removing it from the DOM.

A directive has the same set of lifecycle hooks, minus the hooks that are specific to component content and views.

[/slide]

[slide]

# NgOnInit And NgOnDestroy

`ngOnInit()` executes once when a component is initialized.

It executes after data-bound properties are displayed and input properties are set.

It will still execute regardless of whether or not implements "OnInit" is included in the class definition.

`ngOnDestroy()` gets called when a component is about to be destroyed.

```js
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({..})
export class GamesComponent implements OnInit, OnDestroy {
    games: Game[];
    ngOnInit() {
        console.log('CREATED');
    }
    ngOnDestroy() {
        console.log('DELETED');
    }
}
```

[/slide]

[slide]

# Other Lifecycle Hooks

`ngOnChanges()` will fire before `ngOnInit()` and every time parent data is updated from its parent component.

`ngDoCheck()` is called whenever change detection is run. it is called immediately after `ngOnChanges()` and `ngOnInit()`.

`ngAfterContentInit()` runs once after the first `ngDoCheck()`.

`ngAfterContentChecked()` is called directly after `ngAfterContentInit()`.

`ngAfterViewInit()` is called once after `ngAfterContentChecked()`.

`ngAfterViewChecked()` is called after `ngAfterContentInit()`.

More about [lifecycle hooks](https://angular.io/guide/lifecycle-hooks) 

[/slide]