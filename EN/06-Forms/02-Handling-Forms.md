# Handling Forms

[slide hideTitle]

# Forms Overview

js-angular-forms-12-13-Handling-Forms-and-forms-overview

Forms in Angular allow us to handle user input data in a fast and interactive manner.

This enables us to perform numerous data entry tasks, such as logging in, registering, ordering products, as well as storing and modifying information.

There are two types of forms in Angular: **reactive forms** and **template-driven forms**. 

Both capture user input events from the view, validate the user input, create a form model and data model to update.

They also provide a way to track changes.

**Reactive** forms are easier to reuse and test, while also being more robust, and enabling better scalability.

**Template-driven** forms are applicable in more basic use cases.

[/slide]

[slide hideTitle]

# Template-Driven Forms

js-angular-forms-14-Template-Driven-Forms

Template-driven forms are not as scalable as Reactive forms. 

We use them when we want a very basic form requirement and logic that can be managed solely in the template.

Follow these steps when building a form by writing templates using the Angular template syntax:

- Track state changes
- Provide visual feedback using special CSS classes
- Display validation errors when needed
- Use reference variables to share information

[/slide]

[slide hideTitle]

# Problem: Create a Template-Driven Form

js-angular-forms-15-problem-Create-a-Template-Driven-Form

Create a **template-driven** form that looks like this:

[image assetsSrc="Angular-Forms.png" /]

As you can see above, it contains:

- A **Processor** input field with a label, and a placeholder of "Intel Core i7"

- A **RAM** input field and label, with a placeholder of "16 GB DDR4"

- A **Hard Disk (GB)** input field of type "number", a label, and a "1000" placeholder 

- And lastly, a `select` element and label for an **Operating System**, such as "Windows 10"

[/slide]

[slide hideTitle]

# Import Bootstrap

js-angular-forms-16-Import-Bootstrap

Bootstrap is a very powerful JavaScript plugin and one of the most popular front-end toolkits.

Install it using **NPM**:

```
npm install bootstrap
```

Then, import it inside the `angular.json` file as follows:

```
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
]
```

As shown above, you have locate the `styles` array and paste the path to `bootstrap.min.css` in **node_modules**.

You will use Bootstrap to create **containers**, **form-groups**, **form-controls**, **style buttons** and **errors**.

[/slide]

[slide hideTitle]

# Introducing Forms Module

js-angular-forms-17-Introducing-Forms-Module

Since Angular is module-based, to handle forms we have to import the **FormsModule**.

You can do so in `app.module.ts` as shown below:

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

The Forms Module **exports** multiple **providers** and **directives**, required for building template-driven forms.r

For a full list of the exported directives, you can refer to [Angular's documentation](https://angular.io/api/forms/FormsModule#directives).

[/slide]

[slide hideTitle]

# Create a Form Component

js-angular-forms-18-Create-Form-Component

## Defining the Data Model

The first step to creating a form component is defining a blueprint for it.

In the `src/app` directory, we have to create a `laptop.ts` file, for our **Laptop** form:

```js
export class Laptop {

  constructor(
    public processor: string,
    public RAM: string,
    public hardDisk: number,
    public operatingSystem: string
  ) {  }

}
```

As shown above, we export a class, which contains the four main properties of a laptop:

- `processor` - String
- `RAM` - String
- `hardDisk` - Number
- `operatingSystem` - String

## Creating the Form Component

We must create a `LaptopFormComponent` class, which will define our form layout and details.

In the `src/app` directory, we have to create a new `laptop-form` folder.

We are going to store our component in a `laptop-form.component.ts` file.

Angular CLI can do most of this for us as well:

```js
ng generate component laptop-form
```

An Angular form has two parts:

- an **HTML** based **template** 
- a component **class**, used to handle data

```js
@Component({
    selector: 'app-laptop-form',
    templateUrl: './laptop-form.component.html',
    styleUrls: ['./laptop-form.component.css']
})

export class LaptopFormComponent {
    operatingSystems: string[] = [
        'Windows 10',
        'Linux',
        'Mac OS'
    ];

    // ...

    submitted = false;

    onSubmit() { this.submitted = true; }
}
```

In the code above, we export the `LaptopFormComponent` class.

It has an `operatingSystems` property - an array of strings.

Keep an eye on the `submitted` property and `onSubmit` method - they will be used when handling the form submission

[/slide]

[slide hideTitle]

# Initial HTML Template

js-angular-forms-19-20-Initial-HTML-Template

Use the following HTML to create the template.

This markup should be stored in our `src/app/laptop-form` directory, inside a `laptop-form.component.html` file.

```js
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

Here we have a `div` with a class of "container", in which we store an `h1` **title** and a `form` element.

There are **four** "form-group" `div` elements, three of which consist of a label and an input field.

The **operating system** form group has a `select` element that uses the `*ngFor` structural directive to gather a list of OS `option` elements.

At the bottom we can see a `button` of type `submit`, which has the classes of `btn` and `btn-success`.

This is a **Bootstrap** class name that will automatically apply **styling** to our button.

[/slide]

[slide hideTitle]

# The NgModel Directive

js-angular-forms-21-The-NgModel-Directive

We need to display, listen and extract data at the same time.

To do this, we use the **ngModel** directive.

```js
<input type="text"
    class="form-control" id="processor"
    ngModel />
```

The **ngModel** directive binds the controls of a template-driven form to the properties of a data model.

Note that this directive will not work without a **name attribute**!

So, we need to include this in our HTML template:

```js
<input name="processor"/>
```

If we want for Angular to track the user interaction and value of a given form's control, keeping the view up-to-date, we must include the directive as follows:

- `[(ngmodel)]` - this is the syntax for two-way data binding

[/slide]

[slide hideTitle]

# The NgForm Directive

js-angular-forms-22-The-NgForm-Directive

Declare a template variable inside the form.

```js
<form #f="ngForm">
```

Angular will automatically attach a **NgForm Directive**.

The **NgForm Directive** also includes these additional features:
- It can monitor properties
- It can validate properties
- It holds a `valid` property, which is **true** only if **all controls** are valid

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

As you can see, we also use the `ngAfterViewInit` lifecycle hook.

Inside, we print the properties of `this.form` to the console by using the `console.dir` method.

[/slide]

[slide hideTitle]

# Submit a Form

js-angular-forms-24-Submit-a-Form

The **submit** button at the bottom of our form does not perform anything by itself.

It does however trigger a **submit event**, because of its `type="submit"` attribute.

To handle this event, bind **ngSubmit** event property to the form component's `onSubmit()` method.

```js
<form (ngSubmit)="onSubmit()" #f="ngForm">
```

The `onSubmit()` method should send the **control values** directly to an API through a service of some sort.

```js
onSubmit() {
  const content = this.form.value;
  // Send model to an API
}
```

## Handling Form Submission

Once the form has been submitted, it is recommended to hide the encapsulating **div-block**:

```js
<div class="container" [hidden]="submitted">
  <h1>Laptop Form</h1>
  <form (ngSubmit)="onSubmit()" #f="ngForm">

    <!-- Form elements go here -->

  </form>
</div>
```

To achieve that, we bind the **div** with class **container**'s property to the `LaptopFormComponent.submitted` property.

This way we can show something else, like a **loading** animation, or a **read-only** form body.

[/slide]

[slide hideTitle]

# Tracking Form State

js-angular-forms-25-Tracking-Form-State

The **NgForm Directive** tracks if:
- The user has touched the control
- The user has changed the control
- The control is valid

The **NgForm Directive** does not just track the state of the form control.

```js
<form #heroForm="ngForm">
```

It can also **update** the control with special Angular CSS classes and leverage those class names to change the appearance.

[/slide]

[slide hideTitle]

# Track Control State

js-angular-forms-26-Track-Control-State

Angular adds custom CSS classes to input fields and forms, depending on their states.
 
## **ng-touched** / **ng-untouched**

The `ng-touched` class will be applied if the input field has been touched.

`ng-untouched` is applied if it has not yet been touched.

## **ng-dirty** / **ng-pristine**

`ng-dirty` is used to indicate that one or more fields have been modified.

`ng-pristine` indicates that they are in their original state.
 
## **ng-valid** / **ng-invalid**

These two classes are often used when we want to inform the user for wrong input data.

`ngvalid` is applied to a form or input field when their content is valid, in the other case - Angular appiles `ng-invalid`.

[/slide]

[slide hideTitle]

# Add Custom CSS For a Visual Feedback

js-angular-forms-27-Add-Custom-CSS-for-Visual-Feedback

You can mark **required** fields and **invalid** data at the same time, with **colored** bars on the **left** of the **input box**.

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

We can use an `*ngIf` directive to inform the user for incompatible information.

For example:

```js
<div *ngIf="processor.invalid && (processor.dirty || processor.touched)" class="alert">

  <div *ngIf="processor.errors?.required">
    A processor name is required.
  </div>
  <div *ngIf="processor.errors?.minlength">
    The processor's name must be at least 4 characters long.
  </div>
  <div *ngIf="processor.errors?.forbiddenName">
    The processor cannot be named like that.
  </div>
```

[/slide]

[slide hideTitle]

# Third-party Validators

js-angular-forms-29-List-of-Validators-Third-party-Validators

Angular comes with the following [validators](https://angular.io/api/forms/Validators):

- `min(num)` - this validator requires the control's value to be either greater than or equal to the number argument

```js
const ctrl = new FormControl(4, Validators.min(5));

console.log(ctrl.errors); // Output: {min: {min: 5, actual: 4}}
```

- `max(num)` - requires the control's value to be either less than or equal to the passed-in number 

```js
const ctrl = new FormControl(4, Validators.max(3));

console.log(ctrl.errors); // Output: {max: {max: 3, actual: 4}}
```

- `required()` - this validator makes sure the control's value is not empty

```js
const ctrl = new FormControl('', Validators.required);

console.log(ctrl.errors); // Output: {required: true}
```

For **template-driven** forms you will need the following [directives](https://angular.io/api?type=directive).

And here you can find some npm packages with [custom validators](https://www.npmjs.com/package/ng5-validation).

[/slide]

[slide hideTitle]

# Outputing Error Messages

js-angular-forms-30-31-Outputing-Error-Messages

In case of error, the user should receive a proper message with some explanation of what went wrong.

Use the control's state to reveal a helpful message.

Add a template reference variable in the input.

```js
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

```js
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

```js
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

```js
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

For example, **Password** and **Confirm Password**:

```js
<div ngModelGroup="passData" #passData="ngModelGroup"></div>
```

```js
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
