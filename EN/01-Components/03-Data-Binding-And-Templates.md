# Data Bindings And Templates

[slide hideTitle]

# Templates and Data Binding Overview

Angular-Components-16-17-Data-Binding-And-Templates

Each component's view has a template attached to it.

A template is simply HTML that defines how the component will be rendered.

The arrangement of the **views is hierarchical**, allowing us to **modify** or **show** and **hide** entire UI sections or pages as a unit. 

Inside a template, we can:

- **Render array properties** using the `*ngFor` repeater
- **Render nested properties** of an object
- Use **condition statements** using `*ngIf`
- **Attach events** and handle them in the component

A component's template can be defined with inline HTML or we can specify an external file to load the HTML from.


[/slide]

[slide hideTitle]

# Render An Array Using NgFor

Angular-Components-18-Render-an-array-using-ngfor

Here is an example of a class called "**GamesComponent**" and an HTML associated with it.

```js
export class GamesComponent {
    games : Game[];
    constructor() {
        this.games = [ // Array of games ]
    }
}
```

This template includes **Angular template-syntax** elements, `*ngFor`, `{{game.title}}`.

The template-syntax elements tell **Angular how to render the HTML**, using program logic and data.

The `*ngFor` directive is used for **iterating over a list**. 

Notice that the `*` symbol is required before the "ngFor" keyword.

This symbol means that the attribute after it is a structural directive.

```html
<h1>Games List</h1>
    <p>Pick a game to Buy</p>
<ul>
  <li *ngFor="let game of games">
    {{game.title}}
  </li>
</ul>
```

The code creates a new list item for each game in the array of games.

If we want to access any of the properties of the **game** object, we do so by writing `game.propertyName`

These names are arbitrary. We can name them any way we want.


[/slide]

[slide hideTitle]

# Conditional Statements Using ngIf

Angular-Components-19-Conditional-Statements-Using-ngif

Here is the same example:

```js
export class GamesComponent {
    games : Game[];
    constructor() {
        this.games = [ // Array of games ]
    }
}
```

We create **if** statements using the `*ngIf` keyword, as shown in the HTML code below.

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

The code above checks the **price** property of each object in the array and **only displays it if the price is greater than or equal to 100**.

[/slide]

[slide hideTitle]

# Attach Events

Angular-Components-20-Attach-Events

We can display additional content with the help of Event handlers.

Even handlers are used for listening to certain events and they can be attached to HTML elements.

Here we have an HTML example of **how to implement the Angular event binding** syntax:

```html
<button (click)="showContent($event)">Show Content</button>
```

The event binding **listens for the button's click events** and calls the component's `showContent()` method whenever a click occurs.

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

[slide hideTitle]

# Binding Attributes

Angular-Components-21-Binding-attributes

It is a good idea to always set an element property with a property binding when possible.

When there is no element property to bind, we can use **attribute binding**.

The attribute binding syntax is **similar to the property binding** syntax, but instead of an **element property between the brackets**, we use the name of the attribute with the prefix **attr**, followed by a **dot**. 

Then, we set the **attribute value with an expression** that resolves to a string.

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

Note: If the expression resolves to `null` or `undefined`, the entire attribute will be removed.

[/slide]

[slide hideTitle]

# Binding CSS Classes

Angular-Components-22-Binding-css-classes

## Binding to Multiple CSS Classes

```html
<div [class]="expression">Bad curly</div>
```
Angular will add the class to the expression that we choose. 

This expression can be:
- A string of class names, delimited by spaces
- An object containing class names as keys and truthy/falsy expressions as values
- An array containing class names


## Binding to a Specific Class Name

To create a single class binding, we **use the prefix class**, followed by a **dot** and the **name of the CSS class**.

For example: `[class.special]="isSpecial"`. 

Angular adds the **class when the bound expression** `isSpecial` is **truthy**, and it removes the class when the expression is **falsy**.

```html
<div [class.special]="isSpecial">
 The class binding is special
</div>

<div class="special"[class.special]="!isSpecial">
 This one is not so special
</div>
```

When creating a single class binding, the expression used can be of type boolean, undefined, or null, and the example input values can be either true or false.


[/slide]

[slide hideTitle]

# Binding Styles

Angular-Components-23-Binding-styles

## Binding to the style attribute

If we need to create a **single style binding**, we use the **prefix style**, followed by a **dot** and the **name of the CSS style property**.

For example: `[style.color]="isSpecial ? 'red' : 'green'"`. 

Angular sets the **property to the value of the bound expression**, which is usually a string.

```html
<button [style.color]="isSpecial ? 'red': 'green'">Red</button>
<button [style.background-color]="canSave ? 'cyan': 'grey'" >
 Save
</button>
```

## Binding to style with units

The styles like **font-size**, **width**, etc, have a unit extension. 

The following example **conditionally sets the font-size** in the "em" unit if `isSpecial` is truthy.

Alternatively, it sets the font-size in the "%" unit if `isSpecial` is falsy.

```html
<button [style.font-size.em]="isSpecial ? 3 : 1">
 Big
</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50">
 Small
</button>
```

[/slide]

[slide hideTitle]

# Reference And Null-Safe Operator

Angular-Components-24-Reference-and-nullsafe-operator

We can use variables **from one part of a template** in **another part of the template**.

A template variable can **refer to the following**:

- A **DOM element** within a template
- A **directive**
- An **element**
- **TemplateRef**
- A **web component**

In the template, we **use the hash symbol** `#` to declare a **template variable**. 

The following **template variable** `#phone` declares a phone variable on an `<input>` element.

```html
<input #phone placeholder="phone number" />
```

We can refer **to a template variable anywhere** in the component's template. 

Here, a `<button>` refers to the phone variable.

```html
<button (click)="callPhone(phone.value)">Call</button>
```

In the example below, Angular renders the "**game**" view before the "**game**" got a value assigned.

This will cause an **exception**. 

`?` stops evaluating when "**game**" is **null** or **undefined**, which usually happens when **data is fetched asynchronously**, for example, from the server, which can take some time.

```js
<div>The current hero's name is {{game?.title}}</div>
<div>The null hero's name is {{game && game.name}}</div>
```

The next time when **change is detected**, the bindings will be re-evaluated. 

When "game" is different than **null** or **undefined**, then it will bind the `game.title`.

[/slide]

[slide hideTitle]

# Template Expressions

Angular-Components-25-Template-Expressions

A template **expression produces a value**.

Angular **executes the expression** and assigns it to a **property of a binding target**.

Put the expressions between braces like so `{{1 + 1}}`. 

The target could be an **HTML element**, a **component**, or a **directive**.

These template expressions **look almost like JavaScript**, but they are **not pure JavaScript**. 

Many JavaScript expressions are **legal template expressions**, but not all.

JavaScript **expressions that have** or promote side effects are **prohibited**, including:

- Assignments `(=, +=, -=, ...)`.
- New - the `new` operator.
- Increment and decrement operators `(++ and --)`.

[/slide]

[slide hideTitle]

# Types Of Data Binding

Angular-Components-26-Types-of-data-binding

There are three types of data binding.

**From Data-Source To View**

Use double braces `{{ }}` to display content from the model:

```js
{{expression}}
[target]="expression"
bind-target="expression"
```

**From View To Data-Source**

We can **perform data-binding from a view** to a component by **using the event binding** technique.

```js
(target)="statement"
on-target="statement"
```

**Two-Way Data Binding**

Synchronize data binding in Angular **between the model and the view**.

When data in the **model changes**, the **view changes as well**, and when data in the view changes, the **model is updated as well**. 

It **happens automatically**, which makes sure that the **model** and the **view** are updated at all times.

The `ng-model` directive enables a **two-way binding between** the model and the view.

```js
[(ngModel)]="expression"
bindon-target="expression"
```

[/slide]
