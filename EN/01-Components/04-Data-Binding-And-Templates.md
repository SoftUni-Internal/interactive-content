# Data Bindings And Templates

[slide]

# Templates And Data Binding Overview

We define a component's view with its template. A template is a form of HTML that tells Angular how to render the component.

The template is immediately associated with a component and defines that component's view.

Views are arranged hierarchically, allowing you to modify or show and hide entire UI sections or pages as a unit. 

Inside a template we can use:

- render array properties using the `*ngFor` repeater.
- render nested properties of an object.
- condition statements using `*ngIf`.
- attach events and handle them in the component.

They can be both **inline** or in a **separate file**.

[/slide]

[slide]

# Render An Array Using NgFor

Here is aн example of a class called "GamesComponent" and an HTML associated with it.

```js
export class GamesComponent {
    games : Game[];
    constructor() {
        this.games = [ // Array of games ]
    }
}
```

This template includes Angular template-syntax elements, `*ngFor`, `{{game.title}}`.

The template-syntax elements tell Angular how to render the HTML, using program logic and data.

The `*ngFor` directive tells Angular to iterate over a list. 

Notice that the `*` symbol is required before the "ngFor" keyword.

```html
<h1>Games List</h1>
    <p>Pick a game to Buy</p>
<ul>
  <li *ngFor="let game of games">
    {{game.title}}
  </li>
</ul>
```
[/slide]

[slide]

# Conditional Statements Using ngIf

Using the same example:

```js
export class GamesComponent {
    games : Game[];
    constructor() {
        this.games = [ // Array of games ]
    }
}
```

We create **if** statements using the `*ngIf` keyword as shown in the HTML below.

```html
<h1>Games List</h1>
<p>Pick a game to Buy</p>
<ul>
  <li *ngFor="let game of games">
   <div>
   	{{game.title}}
   </div>
   <span *ngIf="game.price >= 100">
	Price: {{game.price}}
   </span>
  </li>
</ul>
```

[/slide]

[slide]

# Attach Events

Showing additional content could be done with Event handlers.

This is an HTML example of how to do the Angular event binding syntax:

```html
<button (click)="showContent($event)">Show Content</button>
```

The event binding listens for the button's click events and calls the component's `showContent()` method whenever a click occurs.

```js
export class GamesComponent {
    public games: Game[];
    showContent: boolean;
    constructor() {
        this.games = [ // Array of games ]
    }
    showAdditionalContent($event) {
        this.showContent = true;
    }
}
```

[/slide]

[slide]

# Binding Attributes

It is recommended setting an element property with a property binding whenever possible. 

If there is no an element property to bind use **attribute binding**.

Attribute binding syntax is similar to property binding, but instead of an element property between brackets, use the name of the attribute with the prefix **attr**, followed by a **dot**. 

Then, set the attribute value with an expression that resolves to a string.

```js
export class GamesComponent {
    imgUrl: string;
    constructor() {
        this.imgUrl = "a url to an image"
    }
}
```

```html
<img [attr.src]="imgUrl" />
```

[/slide]

[slide]

# Binding CSS Classes

## Binding to a class

```html
<div [class]="badCurly">Bad curly</div>
```

## Binding to a specific class name

To create a single class binding, use the prefix class followed by a dot and the name of the CSS class.

For example: `[class.special]="isSpecial"`. 

Angular adds the class when the bound expression, `isSpecial` is **truthy**, and it removes the class when the expression is **falsy**.

```html
<div [class.special]="isSpecial">
 The class binding is special
</div>

<div class="special"[class.special]="!isSpecial">
 This one is not so special
</div>
```

[/slide]

[slide]

# Binding Styles

## Binding to the style attribute

To create a single style binding, use the prefix style followed by a dot and the name of the CSS style property.

For example: `[style.color]="isSpecial ? 'red' : 'green'"`. 

Angular sets the property to the value of the bound expression, which is usually a string.

```html
<button [style.color]="isSpecial ? 'red': 'green'">Red</button>
<button [style.background-color]="canSave ? 'cyan': 'grey'" >
 Save
</button>
```

## Binding to style with units

The styles like font-size, width etc, have unit extension. 

The following example conditionally sets the font-size in "em" unit if `isSpecial` is truthy.

Alternativly it sets the font-size in "%" unit if `isSpecial` is falsy.

```html
<button [style.font-size.em]="isSpecial ? 3 : 1">
 Big
</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50">
 Small
</button>
```

[/slide]

[slide]

# Reference And Null-Safe Operator

Variables can be used from one part of a template in another part of the template.

A template variable can refer to the following:

- a DOM element within a template.
- a directive.
- an element.
- TemplateRef.
- a web component.

In the template use the hash symbol `#` to declare a template variable. 

The following template variable `#phone` declares a phone variable on an `<input>` element.

```html
<input #phone placeholder="phone number" />
```

You can refer to a template variable anywhere in the component's template. 

Here a `<button>` refers to the phone variable.

```html
<button (click)="callPhone(phone.value)">Call</button>
```

In the example below Angular renders the "game" view before "game" got a value assigned.

This will causes an exception. 

`?` stops evaluating when "game" is **null** or **undefined**, which usually happens when data is fetched async, for example from the server which can take some time.

```html
<div>The current hero's name is {{game?.title}}</div>
<div>The null hero's name is {{game && game.name}}</div>
```

The next time when change is detected, the bindings will be re-evaluated. 

When "game" is diferent than **null** or **undefined**, then it will bind `game.title`.

[/slide]

[slide]

# Template Expressions

A template expression produces a value. Angular executes the expression and assigns it to a property of a binding target.

Expressions are placed between braces like so `{{1 + 1}}`. The target could be an HTML element, a component, or a directive.

These template expressions look almost like JavaScript but they are not pure JavaScript. 

Many JavaScript expressions are legal template expressions, but not all.

JavaScript expressions that have or promote side effects are **prohibited**, including:

- assignments `(=, +=, -=, ...)`.
- new - the new operator.
- increment and(or) decrement operators `(++ and --)`.

[/slide]

[slide]

# Types Of Data Binding

There are three types of data binding.

**From Data-Source To View**

Use double braces `{{ }}` to display content from the model:

```js
{{expression}}
[target]="expression"
bind-target="expression"
```

**From View To Data-Source**

Data binding from view to the component can be achieved by using the event binding technique.

```js
(target)="statement"
on-target="statement"
```

**Two-Way Data Binding**

Data binding in Angular is synchronized between the model and the view.

When data in the model changes, the view changes as well, and when data in the view changes, the model is updated as well. 

This happens automatically, which makes sure that the model and the view are updated at all times.

The "ng-model" directive provides a two-way binding between the model and the view.

```js
[(ngModel)]="expression"
bindon-target="expression"
```

[/slide]