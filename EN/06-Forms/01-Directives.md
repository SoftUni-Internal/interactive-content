# Directives

[slide hideTitle]

# Directives Overview

js-angular-forms-3-4-Directives-and-directives-overview

There are three types of directives in Angular: **Components**, **Attribute**, and **Structural**.

## Component Directives

Angular **components** are a **subset** of directives, always associated with a **template**.

Only one component can be instantiated for a given element in a template.

Since components are template-based, this enables us to build rich **user interfaces**, using an HTML-like syntax.

This HTML is then directly inserted into the **DOM**.

A component must belong to a **NgModule** for it to be available to another component or application.

## Attribute Directives

Attribute directives change the appearance or behavior of an **element**, **component**, or another **directive**.

For example, the built-in **NgStyle** directive can change several element styles at the same time.

Examples include: 

- **Highlighting** the text of an element 
- **Focusing** on input when a specific action occurs 
- Showing a definition for a word when the user **hovers or clicks** on an element 
- **Hiding and showing** a modal when a button is clicked


## Structural Directives

Structural directives are responsible for the **HTML** layout. 

They change the DOM's structure, usually by **adding**, **removing**, or **manipulating** elements.

Here are some of the built-in structural directives: 

- **NgIf** - accepts an expression which evaluates to either `true` or `false`
- **NgFor** and **NgForOf** - renders templates for each items in a collection
- **NgSwitch** - accepts a switch statement

They are easy to recognize: 

```js
<div *ngIf="hero" class="name">{{hero.name}}</div>
```

As shown above, an asterisk `*` precedes a directive attribute's name.

[/slide]

[slide hideTitle]

# Directives Comparison

js-angular-forms-5-Directives-Comparison

## Attribute Directives

Attribute directives have their layout view and styles.

In other words, they deal with changing the look and behavior of a DOM element.

An attribute directive has a single component on a host element but supports multiple directives.

Some examples include the  `ngStyle` and `ngClass` directives.

### `ngStyle`

The `ngStyle` directive is used to set CSS style properties to an element:

```js
<some-element [ngStyle]="{'font-style': styleExpression}">...</some-element>
```

It is declared using square brackets, with the `ngStyle` keyword inside.

Each style property is defined just like in `CSS` file:

```js
{'max-width.px': widthExpression}
```

### `ngClass`

We use `ngClass` to assign and remove CSS classes from an HTML element.

It accepts three types of expressions:

- `string` - the classes in the string are added after being split by a space

```js
<div [ngClass]="'main navbar'">...</div>
```

- `Array` - classes are added in the same arrangement as the array

```js
<article [ngClass]="['secondary', 'last-article']">...</article>
```

- `Object` - keys are CSS classes that get added when the expression given in the value evaluates to a truthy value, otherwise they are removed

```js
<ul [ngClass]="{'first': true, 'second': true, 'third': false}">...</ul>
```

## Structural Directives

The main purpose of structural directives is to define and modify the HTML layout, and the DOM's structure.

It is important to note that we can apply only one structural directive to a host element.

There are three main structural directives in Angular: `*ngIf`, `*ngFor`, and `*ngSwitch`.

[/slide]

[slide hideTitle]

# Build a Simple Attribute Directive

js-angular-forms-6-Build-a-Simple-Attribute-Directive

An attribute directive requires building a controller class annotated with the `@Directive` decorator.

```js
import { Directive } from '@angular/core'
```

You can also generate a directive with Angular CLI:

```js
ng generate directive highlight
```

This command will create a `highlight.directive.ts` file in the `src/app` directory, as well as a `spec.ts` test file. 

Then the directive can be imported into the declarations array in `AppModule`.

Angular CLI takes care of that automatically.

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

It can also run with **service workers**.

**Services Worker** is an environment where the DOM is **inaccessible**.

Use **Renderer2** to manipulate DOM elements.

```js
import { Renderer2 } from '@angular/core'
```

[/slide]

[slide hideTitle]

# Renderer2 Usage

js-angular-forms-8-Warning - Use-Renderer2

To use Renderer2, we have to inject it.

This way, we can access its methods and modify the DOM.

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

In this example, we use the `setStyle` callback to set a CSS style to the current element.

It accepts three arguments:

- The **element**
- The **name** of the style
- The corresponding **value**

Renderer2 has multiple other methods, such as `setProperty`, `setValue`, and `removeStyle`.

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

In this example, we set the color of an element to yellow when a `mouseenter` event occurs.

When the mouse pointer leaves the element, the color will be set to blue.

[/slide]

[slide hideTitle]

# Using HostBinding

js-angular-forms-11-Using-HostBinding

We use the `HostBinding` **decorator** to mark a DOM property as a host-binding property.

It also supplies configuration metadata. 

Angular performs automatic checks on host property bindings during change detection.

If a binding change is detected, it updates the host element of the directive.

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

In the above code, we create a directive that sets the `backgroundColor` CSS property on an element.

[/slide]