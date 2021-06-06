# Lifecycle Hooks

[slide hideTitle]

# Lifecycle Overview

Angular-Components-27-28-Lifecycle-overview

**Lifecycle hook methods** are called by Angular on all the directives and components.


Each component's **lifecycle** is managed by Angular.

Angular **creates it**, **renders it**, checks it **when there is a change** in its data-bound properties, and **destroys it before removing** it from the DOM.

Angular manages the creation, rendering, and tracking changes in data-bound properties in the components.

These actions are managed by the **lifecycle hooks**.

Directives also have a set of lifecycle hooks that manage them.

[/slide]

[slide hideTitle]

# NgOnInit And NgOnDestroy

Angular-Components-29-NgOnInIt-and-NgOnDestroy-example

`ngOnInit()` is a hook that executes once on component initialization.

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


| **Lifecycle Hook** | **Description** |
| --- | --- |
| ngOnChanges() | Fires before `ngOnInit()` and every time parent data is updated from its parent component |
| ngDoCheck() | Called whenever **change detection is run**, and it is called immediately after `ngOnChanges()` and `ngOnInit()`|
| ngAfterContentInit() | Runs once after the contents of a directive have been fully initialized |
| ngAfterContentChecked() | Called after the change detector has checked all content of a directive for changes. |
| ngAfterViewInit() | Called after the component's view has been fully initialized |
| ngAfterViewChecked() | Called after the default changes detector has checked the component's view for changes. |

All of the lifecycle hooks can be customized with actions that you want to perform at a particular stage of the life of a component.

For example, you can create a component that has a custom implementation of the `ngAfterContentInit()` hook.

```js
@Component({
    selector: 'heading',
    template: `<h1>{{title}}</h1>`,
    styles: [ `h1 { background-color: red; }` ]
})

class MyHeading implements AfterContentInit {
    ngAfterContentInit() {
        //... some action to execute after initialization here
    }
}
```

[/slide]
