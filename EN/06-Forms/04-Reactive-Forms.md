# Reactive Forms

[slide hideTitle]

# Reactive Forms Overview

Reactive forms provide a model-driven approach to handling form inputs whose values change over time.

Reactive forms are immutable. A change to the form state returns a new state, which maintains the integrity of the model between changes. 

They are built around observable streams, where form inputs and values are provided as streams of input values, which can be accessed synchronously.

Reactive forms also make testing easy, this way we are assured that our data is consistent and predictable when requested.

[/slide]

[slide]

# Reactive Forms Module

In order to use reactive forms we need the **Reactive Forms Module**.

```js
import { ReactiveFormsModule } from '@angular/forms'
```

After importing the **Reactive Forms Module** we have access to all the needed directives like:
- **formGroup**
- **formControl** and **formControlName**
- **formGroupName**
- **formArrayName**

[/slide]

[slide]

# The Component Class

In the component class create instances of **FormGroup** and **FormControl** that we will bind later in the template.

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

[slide]

# The Template

In the template we have to mark the main **formGroup** and after that add **formControlName** to each form control.

Here **formControlName** is the name of the key instance.

```html
<form (ngSubmit)="save()" [formGroup]="laptopForm">
```

```html
<input type="text" class="form-control" id="processor"
    required
    formControlName="processor">
```

[/slide]

[slide]

# Accessing Form Model Properties

There are two ways to access the properties of the form model.

This is the first one: `laptopForm.controls.processor.valid`.

This is the second one: `laptopForm.get('processor').valid`.

The idea is to shorten the template and transfer such logic in the component when using reactive forms.

[/slide]

[slide]

# Using Form Builder

Use the **FormBuilder** service to avoid creating instances of **FormGroup** and **FormControl** name.

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