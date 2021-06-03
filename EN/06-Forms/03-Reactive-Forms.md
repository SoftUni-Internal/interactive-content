# Reactive Forms

[slide hideTitle]

# Reactive Forms Overview

js-angular-forms-37-38-Handling-Forms-and-reactive-forms-overview

Reactive forms provide a model-driven approach to handling form inputs whose values change over time.

Reactive forms are immutable. 

A change to the form state returns a new state which maintains the model's integrity between changes. 

They are built upon observable streams, where form inputs and values are provided as streams of input values that are synchronously accessible.

Reactive forms also make testing easy.

This way, we are sure that the information stored is consistent and predictable when requested.

[/slide]

[slide hideTitle]

# Reactive Forms Module

js-angular-forms-39-Reactive-Forms-Module

To use reactive forms, we need the **Reactive Forms Module**.

```js
import { ReactiveFormsModule } from '@angular/forms'
```

After importing the **Reactive Forms Module**, we have access to all the needed directives like:
- **formGroup**
- **formControl** and **formControlName**
- **formGroupName**
- **formArrayName**

[/slide]

[slide hideTitle]

# The Component Class

js-angular-forms-40-The-Component-Class

In the component class, create instances of **FormGroup** and **FormControl** that we will bind later in the template.

By creating these controls in our component class, we get immediate access to listen for, **update**, and **validate** the state of the form input.

Update the template with the form control using the **formControl** binding provided by FormControlDirective.

The core idea is to transfer most of the logic from the template inside the component class.

```js
import { FormGroup, FormControl } from '@angular/forms'
```

```js
this.laptopForm = new FormGroup({
    processor : new FormControl('Intel Core i7'),
    ram : new FormControl('16 GB DDR4')
});
```

[/slide]

[slide hideTitle]

# The Template

js-angular-forms-41-Template

In the template, we have to mark the main **formGroup**, after which we add **formControlName** to each form control.

Here the **formControlName** is the key instance's name.

```js
<form (ngSubmit)="save()" [formGroup]="laptopForm">
```

```js
<input type="text" class="form-control" id="processor"
    required
    formControlName="processor">
```

[/slide]

[slide hideTitle]

# Accessing Form Model Properties

js-angular-forms-42-Accessing-Form-Model-Properties

There are two ways to access the properties of the form model.

This is the first one: `laptopForm.controls.processor.valid`.

This is the second one: `laptopForm.get('processor').valid`.

The idea is to shorten the template and transfer such logic in the component when using reactive forms.

[/slide]

[slide hideTitle]

# Using Form Builder

js-angular-forms-43-Using-Form-Builder

Use the **FormBuilder** service to bypass creating instances of **FormGroup** and **FormControl**.

```js
import { FormBuilder } from '@angular/forms';
```

Inject it into the constructor.

```js
constructor(private fb : FormBuilder) { }
```

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

Angular gives us the possibility to **add** or **remove** validators dynamically in reactive forms based on some user action.

- **Cross-field** validation: It is validating one form control based on the value of another.
- We can also create custom validators with parameters:

For that, we create a **factory function**, which accepts the **parameter**. The **factory function** returns the **validator function**.
- We can adjust rules at runtime.

[/slide]

[slide hideTitle]

# Setting Up Built-in Validation

js-angular-forms-45-Setting-Up-Build-in-Validation

Defining our **FormGroup** with a **FormBuilder** allows us to add an array of validations using the **Validators** class.

```js
this.laptopForm = this.fb.group({
    processor : [
        'Intel core i7', [
            Validators.required,
            Validators.minLength(10)
        ]
    ]
});
```

[/slide]

[slide hideTitle]

# Adjust the Template

js-angular-forms-46-Adjust-the-Template

The **formGroup** directive has an errors property, which can be used to **show** errors only when needed.

```html
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

[/slide]

[slide hideTitle]

# Reactive Transformations: Example

js-angular-forms-48-Reactive-Transformations-Example

Import **throttleTIme** from the following library.

```js
import { throttleTime } 'rxjs/operators';
```

Attach the **throttleTIme** function to a form control's **valueChanges** event.

```js
processorControl.valueChanges
.pipe(throttleTime(1500))
.subscribe(value => {
    console.log(value);
});
```

[/slide]