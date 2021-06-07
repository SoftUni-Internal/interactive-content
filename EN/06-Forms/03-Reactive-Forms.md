# Reactive Forms

[slide hideTitle]

# Reactive Forms Overview

js-angular-forms-37-38-Handling-Forms-and-reactive-forms-overview

Reactive forms provide a model-driven approach to handling form inputs whose values change over time.

They are **immutable** - a change to the form state returns a new state which maintains the model's integrity between changes. 

Also, they are built upon **observable streams** - this means that form inputs and values are provided as streams of input values.

These input values can then be accessed **synchronously**.

This way, we are sure that the information stored is consistent and predictable when requested.

They also enable reactive transformations, such as adding elements dynamically, while also making unit testing much easier.

This approach to building forms brings even more advantages, such as:

- being more **powerful** and **easier** to use
- enabling more **customisability** in complex use-cases
- being **immutable** means **no data binding** is done, a data modeling approach many developers **prefer**

[/slide]

[slide hideTitle]

# Reactive Forms Module

js-angular-forms-39-Reactive-Forms-Module

To use reactive forms, we must import the **Reactive Forms Module**:

```js
import { ReactiveFormsModule } from '@angular/forms'
```

This gives us access to multiple directives.

## formGroup

The `formGroup` directive is responsible for tracking the values and validity states of a group of `FormControl` instances.

## formControl and formControlName

We use `formControl` to track the value and validity of a single form control.

`formControlName` is used to register a `FormControl` in an existing `FormGroup` to a form control element by name.

## formGroupName

`formGroupName` syncs a nested `FormGroup` to a DOM element.
## formArrayName

`formArrayName` syncs a nested `FormArray` to a DOM element.

[/slide]

[slide hideTitle]

# The Component Class

js-angular-forms-40-The-Component-Class

In the component class, create instances of **FormGroup** and **FormControl** that we will bind later in the template.

These controls give us access to the form input's state, enabling us to **update** and **validate** it, as well as **listen** for changes.

Update the template with the form control using the **formControl** binding provided by **FormControlDirective**.

The core idea is to transfer most of the logic from the template inside the component class.

```js
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.css']
})

export class LaptopFormComponent {
  this.laptopForm = new FormGroup({
    processor : new FormControl('Intel Core i7'),
    ram : new FormControl('16 GB DDR4')
  });
}
```

In this example, we create a `laptopForm` group which consists of two `formControl`s - **"processor"** and **"ram"**;

[/slide]

[slide hideTitle]

# The Template

js-angular-forms-41-Template

Once we have created controls in the class, we have to associate the `formGroup` with a form element in the HTML:

```js
<form (ngSubmit)="save()" [formGroup]="laptopForm">
```

In the template, we mark the main **formGroup**, after which we add **formControlName** to each form control:

```js
<input type="text" class="form-control" id="processor"
    required
    formControlName="processor">
```

Here the **formControlName** is the key instance's name.

Now the form control is registered to the `processor` input element.

[/slide]

[slide hideTitle]

# Accessing Form Model Properties

js-angular-forms-42-Accessing-Form-Model-Properties

There are two ways to access the properties of the form model.

We can use **dot notation** as follows: 

```js
laptopForm.controls.processor.valid
```

The second way is by using the `getter` syntax: 

```js
laptopForm.get('processor').valid
```

The idea is to shorten the template and transfer such logic in the component when using reactive forms.

[/slide]

[slide hideTitle]

# Using Form Builder

js-angular-forms-43-Using-Form-Builder

Most Angular applications contain multiple forms.

Creating form control instances manually can become a time-consuming task.

The `FormBuilder` service contains a number of methods that generate form controls.

To start using `FormBuilder`, we have to import the class in our `laptop-form.component.ts` file:

```js
import { FormBuilder } from '@angular/forms';
```

The next step is to inject the service into the constructor:

```js
constructor(private fb : FormBuilder) { }
```

The `FormBuilder` service has contains many useful methods, such as `control()`, `group()`, and `array()`.

```js
this.laptopForm = this.fb.group({
    processor : 'Intel Core i7',
    ram : '16 GB DDR4'
});
```

[/slide]

[slide hideTitle]

# Validation

js-angular-forms-44-Validation

Validation in **reactive** forms can be performed both **synchronously** and **asynchronously**.

Compared to template-driven forms, where the input is validated by adding **template** attributes, here we add validator functions to the form control model, directly in the **class**.

## Validating Synchronously

**Synchronous** validator functions accept a control instance as an argument, and then **return**:

- `null` - when the input is valid
- a set of **errors** - in the case of invalid data

When instantiating a `FormControl`, we can pass a synchronous function as a **second** argument.

## Validating Asynchronously

**Asynchronous** validators also accept a control instance as an argument, but they **return** either a `Promise` or an `Observable`, which evalute to `null`, or a set of errors.

We can pass an asynchronous function as a **third** argument when instantiating a form control.

By default, Angular invokes asynchronous validators after synchronous fail.

This is done for performance reasons.

[/slide]

[slide hideTitle]

# Setting Up Built-in Validation

js-angular-forms-45-Setting-Up-Build-in-Validation

Defining our **FormGroup** with a **FormBuilder** allows us to add an array of validations using the **Validators** class.

```js
import { Validators } from '@angular/forms';

// ...

this.laptopForm = this.fb.group({
    processor : [
        'Intel core i7', [
            Validators.required,
            Validators.minLength(10)
        ]
    ]
});
```

Here we use the `group` method, passing in an object with a `processor` property.

The method creates a new instance of the `FormGroup` class.

[/slide]

[slide hideTitle]

# Adjust the Template

js-angular-forms-46-Adjust-the-Template

The `formGroup` directive has an ``errors`` property

We can use it to **show** errors, depending on its value:

```js
<div *ngIf="(laptopForm.get('processor').touched 
|| laptopForm.get('processor').dirty) 
&& laptopForm.get('processor').errors" class="alert alert-danger">
<span *ngIf="laptopForm.get('processor').errors.required">
  Processor is required!
</span>
<span *ngIf="laptopForm.get('processor').errors.minlength">
  Processor should be at least 10 symbols long!
</span>
</div>
```

The `errors` property is equal to `null` in the case of valid input.

This means that the `span` element with `ngIf*` directives will not be displayed if the input data is valid.

In the other case, the property will contain an object with the errors.

[/slide]

[slide hideTitle]

# Watching and Reacting to Changes

js-angular-forms-47-Watching-and-Reacting-to-Changes

Using **Reactive Forms** we have the ability to **watch** and **react** to changes on form **groups** and form **controls**.

Whenever a **value** of an input **changes**, we can **subscribe** to that event and handle the **observable**.

```js
this.laptopForm.get('os')
.valueChanges
.subscribe(console.log);
```

The `valueChanges` event returns an Observable.

In this example, we then use the `subscribe` method to print the latest value of `os` to the console.

[/slide]

[slide hideTitle]

# Reactive Transformations: Example

js-angular-forms-48-Reactive-Transformations-Example

Import **throttleTime** from the following library.

```js
import { throttleTime } 'rxjs/operators';
```

Then, attach the **throttleTime** function to a form control's **valueChanges** event:

```js
processorControl.valueChanges
.pipe(throttleTime(1500))
.subscribe(value => {
    console.log(value);
});
```

In this code, the `throtlleTime` method will emit the first value, and will then ignore for **1.5** seconds.

[/slide]