# Handling Forms

[slide hideTitle]

# Forms Overview

js-angular-forms-12-13-Handling-Forms-and-forms-overview

Forms in Angular allow us to work with user inputs like login, register, save, update, and many other data entry tasks.

There are two types of forms in Angular: **reactive forms** and **template-driven forms**. 

Both capture user input events from the view, validate the user input, create a form model and data model to update.

They also provide a way to track changes.

[/slide]

[slide hideTitle]

# Template-Driven Forms

js-angular-forms-14-Template-Driven-Forms

Template-driven forms are not as scalable as Reactive forms. 

We use them when we want a very basic form requirement and logic that can be managed solely in the template.

Follow these steps when building a form by writing templates using the Angular template syntax.
- Track state changes.
- Provide visual feedback using special CSS classes.
- Display validation errors when needed.
- Use reference variables to share information.

[/slide]

[slide hideTitle]

# Problem: Create a Template-Driven Form

js-angular-forms-15-problem-Create-a-Template-Driven-Form

Create a **Template-Driven** form that looks like this:

[image assetsSrc="Angular-Forms.png" /]

[/slide]

[slide hideTitle]

# Import Bootstrap

js-angular-forms-16-Import-Bootstrap

First, install Bootstrap. 

It is the most popular open-source front-end framework for designing websites and web apps.

Install via **npm** and import it inside `angular.json` file.

```
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
]
```

Create **containers**, **form-groups**, **form-controls**, **style buttons** and **errors**.

[/slide]

[slide hideTitle]

# Introducing Forms Module

js-angular-forms-17-Introducing-Forms-Module

Angular is module-based, and to handle forms, we need **Forms Module**.

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

[slide hideTitle]

# Create a Form Component

js-angular-forms-18-Create-Form-Component

An Angular form has two parts: An **HTML** based **template** and a component **class** to handle data.

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

[slide hideTitle]

# Initial HTML Template

js-angular-forms-19-20-Initial-HTML-Template

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

[slide hideTitle]

# The NgModel Directive

js-angular-forms-21-The-NgModel-Directive

We need to display, listen and extract data at the same time.

To do this use the **ngModel** directive.

```js
<input type="text"
    class="form-control" id="processor"
    ngModel />
```

Note that this directive will not work without a **name attribute**!

So, we need to include this in our HTML template.

```html
<input name="processor"/>
```

[/slide]

[slide hideTitle]

# The NgForm Directive

js-angular-forms-22-The-NgForm-Directive

Declare a template variable inside the form.

```html
<form #f="ngForm">
```

Angular will automatically attach a **NgForm Directive**.

The **NgForm Directive** will also add additional features:
- It can monitor properties.
- It can validate properties.
- It holds a **valid** property which is **true** only if **all controls** are valid.

[/slide]

[slide hideTitle]

# Access the Local Reference

js-angular-forms-23-Access-the-Local-Reference

In Angular, we can easily fetch a value of any input through local references.

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

[slide hideTitle]

# Submit a Form

js-angular-forms-24-Submit-a-Form

To submit a form bind **ngSubmit** event property to the form component's `onSubmit()` method.

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

[slide hideTitle]

# Tracking Form State

js-angular-forms-25-Tracking-Form-State

The **NgForm Directive** tracks if:
- The user has touched the control
- The user has changed the control
- The control is valid

The **NgForm Directive** does not just track the state of the form control.

It can also **update** the control with special Angular CSS classes and leverage those class names to change the appearance.

[/slide]

[slide hideTitle]

# Track Control State

js-angular-forms-26-Track-Control-State

Angular provides three pairs of classes for the state of the form control.
 
The first one is **ng-touched** and **ng-untouched**.

This pair of classes define the state of the control whether it has been touched or not.

**ng-touched** will be applied if the condition is **true** and **ng-untouched** will be applied if **false**.

The second one is **ng-dirty** and **ng-pristine**.

This pair of classes define the state of the control whether its value has been changed or not.
 
**ng-dirty** will be applied if the condition is **true** and **ng-pristine** will be applied if **false**.
 
The third one is **ng-valid** and **ng-invalid**.

This pair of classes define the state of the control, whether its value is valid or not.
 
**ng-valid** will be applied if the condition is **true** and **ng-invalid** will be applied if **false**.

[/slide]

[slide hideTitle]

# Add Custom CSS For a Visual Feedback

js-angular-forms-27-Add-Custom-CSS-for-Visual-Feedback

You can mark **required** fields and **invalid** data, at the same time with a **colored** bar on the **left** of the **input box**.

```css
input.ng-valid {
    border-left: 5px solid #42A948; /* green */
}
input.ng-invalid.ng-touched {
    border-left: 5px solid #A94442; /* red */
}
```

[/slide]

[slide hideTitle]

# Add Validation

js-angular-forms-28-Add-Validation

Add **HTML 5 attributes** to the input fields for validation.

Angular tracks the attributes and changes the state depending on the user input.

```js
<input type="text" class="form-control"
    id="processor"
    required
    minLength="5"
    ngModel
    name="processor">
```

[/slide]

[slide hideTitle]

# Third-party Validators

js-angular-forms-29-List-of-Validators-Third-party-Validators

Angular comes with the following [validators](https://angular.io/api/forms/Validators).

For **template-driven** forms you will need the following [directives](https://angular.io/api?type=directive).

And here you can find some npm packages with [custom validators](https://www.npmjs.com/package/ng5-validation).

[/slide]

[slide hideTitle]

# Outputing Error Messages

js-angular-forms-30-31-Outputing-Error-Messages

In case of error, the user should receive a proper message with some explanation of what went wrong.

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


Create a **div** and display it **only** when the control state is **invalid**.

Use the reference variable to check the state.

Add a helpful message inside the **div**.

```html
<div *ngIf="processor.invalid && proccer.touched" alert alert-danger>
    Processor is required!
</div>
```

[/slide]

[slide hideTitle]

# Form Overall Validity

js-angular-forms-32-Form-Overall-Validity

We can bind the form's overall validity using the reference variable declared in the `<form>` tag.

Block the **submit** button in case a control has **invalid state**.

```html
<button type="submit" class="btn btn-success" [disabled]="f.invalid">
    Submit
</button>
```

[/slide]

[slide hideTitle]

# Two-way Data Binding

js-angular-forms-33-Two-way-Data-Binding

Instantly react to any changes using two-way data binding.

Use two-way binding syntax - a combination of square brackets and parentheses `[()]`.

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

[slide hideTitle]

# The NgModelGroup Directive

js-angular-forms-34-The-NgModelGroup-Directive

This directive can only be used as a child of **NgForm** within `<form>` tags.

Use it to validate a sub-group of your form separately from the rest of your form.

It is useful for input fields that have the same validation.

For Example, Password and Confirm Password.

```html
<div ngModelGroup="passData" #passData="ngModelGroup"></div>
```

```html
<div *ngIf="passData.invalid && passData.touched">
    Both passwords must be valid!
</div>
```

[/slide]

[slide hideTitle]

# Setting and Patching a Form Value

js-angular-forms-35-Setting-and-Patching-Form-Value

Use `setValue()` or `patchValue()` to change the form from inside the component or add default values.

```js
changeInput() {this.laptopForm.form.patchValue({
    ram: '16 GB'
    processor: 'Intel Core i7'
    });
}
```

[/slide]

[slide hideTitle]

# Resseting the Form

js-angular-forms-36-Resetting-the-Form

After a form is submitted, resetting is necessary to clear all input fields and reset the track state.

```js
onSubmit() {
    const body = this.form.value;
    // Send body to an API
    this.form.reset();
}
```

[/slide]
