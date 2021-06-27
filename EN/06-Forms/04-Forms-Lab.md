# Forms Lab

[slide hideTitle]

# Initial Setup

Forms-Lab-1

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-angular/07-Forms.zip) **for this task.**

Create a new Angular application. 

```js
ng new my-app
```

You are provided with **HTML** and **CSS** files containing the form itself with **styles** and **font awesome** icons.

Go to [FontAwesome](fontawesome.com) and add the provided HTML link inside `index.html`:

```js
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
```

[/slide]

[slide hideTitle]

# Template-Driven Form

Forms-Lab-2

Generate a **register-form** component and use the provided **HTML** to create a **template-driven** form. 

Attach all the needed directives like **ngForm** and **ngModel**.

Use `@ViewChild` to reference the **NgForm** inside the component.

Handle **submission** of the form. Inside the handler function **reset** the form.

Define the options for both select lists as an **array of strings** and loop through the arrays inside the template. 

Add a **default value** to both select lists.

Define the following **CSS** inside `register-form.component.css`:

```css
input.ng-valid {
    border-left: 5px solid #42A948; /* green */
}
input.ng-invalid.ng-touched {
    border-left: 5px solid #A94442; /* red */
}
```

## Validation

- The full name input field must contain **two names** (letters only) separated by a **space**
    * both should start with a **capital** letter
- The email input field must contain a **valid email** address
- The phone number input field must contain a **9 digits** number
- The password input field must be **between 3 and 16 symbols** and must contain only **letters** and **digits**
- Both passwords must **match**

Output error messages inside a `div` with class "**alert alert-danger**" when an input field is **invalid** and **touched**.

**Disable** the **submit button** if the input field is **invalid**.

## Grouping

Wrap both password fields inside a common `ngModelGroup` and add the **password validation** after the group definition.

At the **end**, your form should look like this:

[image assetsSrc="Angular-Forms(1).png" /]

## Create a Custom Attribute Directive

Add another input field containing an **image URL** to a profile picture, use 'fa fa-image' for the font awesome icon. 

Validate this input field by writing your own **attribute directive**.

The directive should listen to **input** events and validate if the input value **starts with HTTP** and ends with **jpg** or **png**.

Use **Renderer2** to set the border-left **styling** of the field to either red or green. 

To manually change the state of an input field to **invalid**, you must inject the **NgForm** inside the directive and use the `setErrors({ 'incorrect': true })` method on the control to mark it as invalid.

Clearing the errors is done with `setErrors(null)`.

[image assetsSrc="Angular-Forms(2).png" /]

[/slide]

[slide hideTitle]

# Reactive Form

Forms-Lab 3-1
Forms-Lab 3-2

Now, let us create a new component with the name **register-form-reactive** and build the same form using the reactive approach.

It is recommended to start from scratch by creating a new Angular application. 

```js
ng new my-app
```

Create your own **form groups** and **form controls**. 

Optionally, you can inject the **form builder**. 

Validate the fields using **Validators**.

[/slide]
