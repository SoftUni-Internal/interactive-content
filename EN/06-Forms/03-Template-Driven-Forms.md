[slide hideTitle]

# Template-Driven Forms

Template-driven forms are not as scalable as Reactive forms. 

We use them when we want a very basic form requirement and logic that can be managed solely in the template.

Follow these steps when building a form by writing templates using the Angular template syntax.
- Track state changes.
- Provide visual feedback using special CSS classes.
- Display validation errors when needed.
- Use reference variables to share information.

[/slide]

[slide]

# Problem: Create a Template-Driven Form

Create a **Template-Driven** form that looks like this:

[image assetsSrc="Angular-Forms.png" /]

[/slide]

[slide]

# Solution: Create A Template-Driven Form

First install Bootstrap. 

It is the most popular open-source front-end framework for designing web sites and web apps.

Install via **npm** and import it inside `angular.json` file.

```
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
]
```

Create **containers**, **form-groups**, **form-controls**, **style buttons** and **errors**.

[/slide]

[slide]

# Introducing Forms Module

Angular is module based and to handle forms, we need **Forms Module**.

Import the following in `app.module.ts`.

```js
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AppModule { }
```

[/slide]

[slide]

# Create a Form Component

An Angular form has two parts: An **HTML** based **template** and a component class to handle data.

```js
@Component({…})
export class LaptopFormComponent {
    operatingSystems: string[] = [
        'Windows 10',
        'Linux',
        'Mac OS'
    ];
}
```

[/slide]

[slide]

# Initial HTML Template

Use the following HTML to create the template.

```html
<div class="container">
  <h1>Laptop Form</h1>
  <form>
    <div class="form-group">
      <label for="processor">Proccessor</label>
      <input type="text" class="form-control" id="processor" 
      required>
    </div>
    <div class="form-group">
      <label for="ram">RAM</label>
      <input type="text" class="form-control" id="ram" 
      required>
    </div>
    <div class="form-group">
      <label for="hardDisk">Hard Disk (GB)</label>
      <input type="number" class="form-control" id="hardDisk">
    </div>
    <div class="form-group">
        <label for="os">Operating System</label>
            <select class="form-control" 
                id="os" 
                required>
                <option *ngFor="let os of operatingSystems"
                    [value]="os">{{os}}
                </option>
            </select>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</div>
```

[/slide]

[slide]

# The NgModel Directive

We need to display, listen and extract data at the same time.

To do this use the **ngModel** directive.

```js
<input type="text"
    class="form-control" id="processor"
    ngModel />
```

Note that this directive will not work without a **name attribute**!

```html
<input name="processor"/>
```

[/slide]

[slide]

# The NgForm Directive

Declare a template veriable to the form.

```html
<form #f="ngForm">
```

Angular will automatically attach a **NgForm Directive**.

The **NgForm Directive** will also add additional features like:
- It can monitor properties.
- It can validate properties.
- It holds a **valid** property which is **true** only if **all controlls** are valid.

[/slide]

[slide]

# Access The Local Reference

Use `@ViewChild` to access the local reference.

```js
@Component({…})
export class LaptopFormComponent implements AfterViewInit {
    @ViewChild('f') form: NgForm
    ngAfterViewInit() {
        console.dir(this.form);
    }
}
```

[/slide]

[slide]

# Submit a Form

To submit a form bind **ngSubmit** event property to form component's `onSubmit()` method.

```html
<form (ngSubmit)="onSubmit()" #f="ngForm">
```

The `onSubmit()` method should send the **control values** directly to an API through a service of some sort.

```js
onSubmit() {
    const content = this.form.value;
    // Send model to API
}
```

[/slide]

[slide]

# Tracking Form State

The **NgForm Directive** tracks if:
- The user has touched the control.
- The user has changed the control.
- The control is valid.

The NgForm Directive does not just track the state of the form control.

It can also update the control with special Angular CSS classes and leverage those class names to change appearance.

[/slide]

[slide]

# Track Control State

Angular provides three pairs of classes for the state of the form control.
 
First pair is **ng-touched** and **ng-untouched**.

This pair of classes defines the state of the control whether it has been touched or not.

**ng-touched** will be applied if the condition is **true** and **ng-untouched** will be applied if **false**.

Second pair is **ng-dirty** and **ng-pristine**.

This pair of classes defines the state of the control whether its value has been changed or not.
 
**ng-dirty** will be applied if the condition is **true** and **ng-pristine** will be applied if **false**.
 
Third pair is **ng-valid** and **ng-invalid**.

This pair of classes defines the state of the control whether its value is valid or not.
 
**ng-valid** will be applied if the condition is **true** and **ng-invalid** will be applied if **false**.

[/slide]

[slide]

# Add Custom CSS For a Visual Feedback

You can mark **required** fields and **invalid** data at the same time with a **colored** bar on the **left** of the **input box**.

```css
input.ng-valid {
    border-left: 5px solid #42A948; /* green */
}
input.ng-invalid.ng-touched {
    border-left: 5px solid #A94442; /* red */
}
```

[/slide]

[slide]

# Add Validation

Add **HTML 5 attributes** to input fields for validation.

Angular tracks most attributes and changes the state depending on the user input.

```js
<input type="text" class="form-control"
    id="processor"
    required
    minLength="5"
    ngModel
    name="processor">
```

[/slide]

[slide]

# Third-party Validators

Angular comes with the following [validators](https://angular.io/api/forms/Validators).

For **template-driven** forms you will need the following [directives](https://angular.io/api?type=directive).

And here you can find some npm packages with [custom validators](https://www.npmjs.com/package/ng5-validation).

[/slide]

[slide]

# Displaying Error Messages - 1

In case of error the user should receive a proper message with some explanation what went wrong.

Use the control's state to reveal a helpful message.

Add a template reference variable in the input.

```html
<input type="text" class="form-control"
    id="processor"
    required
    ngModel
    name="processor"
    #processor="ngModel">
```

[/slide]

[slide]

# Displaying Error Messages - 2

Create a div and display it only when the control state is **invalid**.

Use the reference variable to check the state.

Add a helpful message inside the **div**.

```html
<div *ngIf="processor.invalid && proccer.touched" alert alert-danger>
    Processor is required!
</div>
```

[/slide]

[slide]

# Form Overall Validity

We can bind the form's overall validity using the reference variable declared in the `<form>` tag.

Block the **submit** button in case a control has **invalid state**.

```html
<button type="submit" class="btn btn-success" [disabled]="f.invalid">
    Submit
</button>
```

[/slide]

[slide]

# Two-way Data Binding

Instantly react to any changes using two-way data binding.

```html
<input type="text" class="form-control"
    id="processor"
    required
    [(ngModel)]="laptop.processor"
    name="processor"
    #processor="ngModel">
```

```js
constructor() {
    this.laptop = new Laptop();
}
```

[/slide]

[slide]

# The NgModelGroup Directive

Group similar input fields using **ngModelGroup Directive**.

It is useful for input fields that have the same validation.

For Example: Password and Confirm Password.

```html
<div
    ngModelGroup="passData"
    #passData="ngModelGroup">
```

```html
<div *ngIf="passData.invalid && passData.touched">
    Both passwords must be valid!
</div>
```

[/slide]

[slide]

# Setting and Patching a Form Value

Use `setValue()` or `patchValue()` to change the form from inside the component or add default values.

```js
changeInput() {this.laptopForm.form.patchValue({
    ram: '16 GB'
    processor: 'Intel Core i7'
    });
}
```

[/slide]

[slide]

# Resseting the Form

After a form is submitted resetting is necessary to clear all input fields and reset the track state.

```js
onSubmit() {
    const body = this.form.value;
    // Send body to an API
    this.form.reset();
}
```

[/slide]