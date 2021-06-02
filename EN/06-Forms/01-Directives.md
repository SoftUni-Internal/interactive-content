# Directives

[slide hideTitle]

# Directives Overview

js-angular-forms-3-4-Directives-and-directives-overview

There are three types of directives in Angular: **Components**, **Attribute**, and **Structural**.

# Components Directives

Angular components are a subset of directives, always associated with a template.

Only one component can be instantiated for a given element in a template.

A component must belong to a **NgModule** for it to be available to another component or application.

# Attribute Directives

They change the appearance or behavior of an **element**, **component**, or another **directive**.

For example, the built-in **NgStyle** directive can change several element styles at the same time.

# Structural Directives

Structural directives are responsible for the **HTML** layout. 

They change the DOM's structure, usually by **adding**, **removing**, or **manipulating** elements.

Here are some of the built-in structural directives: **NgIf**, **NgFor**, and **NgSwitch**.

They are easy to recognize: 

```js
<div *ngIf="hero" class="name">{{hero.name}}</div>
```

As shown above, an asterisk `*` precedes the directive attribute's name.

[/slide]

[slide hideTitle]

# Directives Comparison

js-angular-forms-5-Directives-Comparison

Attribute directives look like **HTML** attributes, and they only change the element they are added to.

Examples: **ngStyle**, **ngClass**.

Structural directives have a leading `*` and make changes to the **DOM**.

Examples: `*ngIf`, `*ngFor`.

[/slide]

[slide hideTitle]

# Build a Simple Attribute Directive

js-angular-forms-6-Build-a-Simple-Attribute-Directive

An attribute directive requires the building of a controller class annotated with the `@Directive` decorator.

```js
import { Directive } from '@angular/core'
```

Then the directive can be imported into the declarations array.

The **selector** is surrounded with **square brackets** as in the example.

```js
@Directive({
    selector: '[appHighlight]' 
})
export class HighlightDirective {
    constructor() { }
}
```

[/slide]

[slide hideTitle]

# Attach Styles To Referenced Elements

js-angular-forms-7-Attach-Styles-to-Referenced-Elements
js-angular-forms-8-Warning - Use-Renderer2

Inject the referenced element and change its background color as in the example below.

```js
export class HighlightDirective implements OnInit {
    constructor(private el : ElementRef) {}
    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```

**Note:** It is not a good practice to directly access DOM elements via **ElementRef**.

Angular is not limited to run only on the browser. 

Иt can also run with **service workers**.

**Services Worker** is an environment where the DOM is **inaccessible**.

Use **Renderer2** to manipulate DOM elements.

```js
import { Renderer2 } from '@angular/core'
```

[/slide]

[slide hideTitle]

# Renderer2 Usage

js-angular-forms-8-Warning - Use-Renderer2

To be able to use **Renderer2** inject it. 

This way, we can access its methods to change the DOM.

```js
constructor( private renderer: Renderer2) { }
ngOnInit() {
    this.renderer.setStyle(
        this.el.nativeElement,
        'background-color', 
        'red'
    );
}
```

[/slide]

[slide hideTitle]

# Respond To Events

js-angular-forms-10-Respond-to-Events

The directive could be more dynamic. 

It could detect when the user mouses into or out of the element and respond by setting or clearing the highlight color.

```js
import { HostListener } from '@angular/core'
```

Now we are going to add two event handlers that respond when the mouse enters or leaves.

Use the **HostListener** decorator.

```js
@HostListener('mouseenter') onMouseLeave(e) {
    this.highlight('yellow');
}
@HostListener('mouseleave') onMouseLeave(e) {
    this.highlight('blue');
}
```

[/slide]

[slide hideTitle]

# Using HostBinding

js-angular-forms-11-Using-HostBinding

**HostBinding** is a **decorator** that marks a DOM property as a host-binding property and supplies configuration metadata. 

Angular automatically checks host property bindings during change detection, and if a binding changes, it updates the host element of the directive.

```js
import { HostBinding } from '@angular/core'

export class BasicHighlightDirective {
    @HostBinding('style.backgroundColor')
    backgroundColor: string;
    highlight(color: string) {
        this.backgroundColor = color;
    }
}
```

[/slide]