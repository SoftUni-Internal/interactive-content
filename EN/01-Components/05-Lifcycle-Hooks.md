# Lifecycle Hooks

[slide hideTitle]

# Lifecycle Overview

Angular-Components-27-28-Lifecycle-overview

Angular calls **lifecycle hook methods on directives** and components. 

A component has a **lifecycle** managed by Angular.

Angular **creates it**, **renders it**, checks it **when there is a change** in its data-bound properties, and **destroys it before removing** it from the DOM.

A directive has the same **set of lifecycle hooks**, minus the hooks that are **specific to component content** and views.

[/slide]

[slide hideTitle]

# NgOnInit And NgOnDestroy

Angular-Components-29-NgOnInIt-and-NgOnDestroy-example

`ngOnInit()` executes once on a component initialization.

It executes **after data-bound properties are displayed** and when input properties are set.

It will still execute **regardless of whether or not** implements "**OnInit**" is included in the class definition.

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

[slide hideTitle]

# Other Lifecycle Hooks

Angular-Components-30-Other-Lifecycle-Hooks

`ngOnChanges()` will fire before `ngOnInit()` and every time parent data is updated from its parent component

`ngDoCheck()` is called whenever **change detection is run**, and it is called immediately after `ngOnChanges()` and `ngOnInit()`

`ngAfterContentInit()` runs once after the first `ngDoCheck()`

`ngAfterContentChecked()` is called directly after `ngAfterContentInit()`

`ngAfterViewInit()` is called once after `ngAfterContentChecked()`

`ngAfterViewChecked()` is called after `ngAfterContentInit()`

More about [lifecycle hooks](https://angular.io/guide/lifecycle-hooks). 

[/slide]