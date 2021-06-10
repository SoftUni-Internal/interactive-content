# Softuni Forum Workshop: Part 3

[slide hideTitle]

# Task Requirements

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-angular/08-Forms-Workshop.zip) **for this task.**

At this point the application has **forms**.

Edit them, so the given information is handled properly.

Implement the following **validation**, **notification** and **styling rules** for each form.

**By default:** 

- The input fields are **neutral** (neither valid nor invalid)
  * if some of the fields are **touched**, you should determine the status of validation from the given data inside it

- Each input field is **required**

**Notifications** should be shown as paragraph (`<p>`) elements **below** each input field or button.

The notification **below each button** should display the **status** of the **form validation**: 


- If the status is invalid, use - "**You can't continue until you provide valid data**" as text

**The color** inside that paragraph should be "red" and the **button** should be **disabled**.

- If the status is **valid** just **remove** the notification and **enable** the **button**

**Check the examples below each form for more clarity.**

[/slide]

[slide hideTitle]

# Valid and Invalid Cases

## Valid Cases
In case some of the input fields аrе invalid, the following **input field** should be styled with class **input-error**, which has the following style: 

```css
.input-error { 
  	margin-bottom: 10px; 
   color: red;  
  	font-weight: bold; 
} 
```

And a **notification** should be shown with information about the validation. 

The text inside that paragraph also should be **red**. 

## Valid Cases

When the input field is filled with **valid** information, the class **input-error** should be **disabled / removed**.

[/slide]

[slide hideTitle]

# Reactive Forms 

Use the **model driven** (**reactive**) **approach** to build the login and **register** forms. 

## Login

The login form expects an **email** and a **password** as input.

Valid credentials are: 

- **Email address** must have at least 6 symbols, and the symbol `@` after that
   * the only valid **domain name** is `gmail` followed by a full stop "**.**". 
   * the top-level domain can only be `com`
   * **valid** email addresses: `testing@gmail.com`, `something.else@gmail.com`
   * **invalid** email addresses: `qwe@gmail.com`

- The **password** should be at least **5 characters** long

[image assetsSrc="Angular-Forms-Workshop-1.png" /]

[image assetsSrc="Angular-Forms-Workshop-2.png" /]

[/slide]

[slide hideTitle]

# Register

The register form expects: **a username**, **an email**, **a password**, **a password repeat** and **a telephone number** (not required).

**Username validation**:

- Should be least **5 characters** long and is **required**

**Email validation** for this purpose is the same as the login case:

- Should be at least 6 characters long, followed by `@` 
   * the only valid domain name is `gmail`, followed by a full stop "**.**"
   * the top-level domain can only be `com`
   * valid email addresses: `testing@gmail.com`, `something.else@gmail.com`
   * invalid email addresses: `qwe@gmail.com`

**Both passwords** should be placed in the "**passwords**" group. 

The validation process is:

- The entered **password** should be at **least 5 characters** (any English letters and/or digits are allowed)

- The given **password repeat** should be the **same** as the password

**Both fields** are considered **invalid** if one of them **does not cover** the described details. 

If that happens, apply the **invalid stylization for both**. 

Otherwise, the **valid stylization** is applied.

[image assetsSrc="Angular-Forms-Workshop-3.png" /]

[image assetsSrc="Angular-Forms-Workshop-4.png" /]


[/slide]

[slide hideTitle]

# Template-Driven Forms

Use the **template-driven approach** to build the **"create new theme"** form and the **"change user information"** form.

## New Theme

The new theme form expects as input: a **theme name**, a **post text**.

Data validation:

- **Theme name**: should be at **least 5 characters** long

- **Post text**: should be at **least 10 characters** long

The "**Post**" button should be **disabled** if the input is **NOT** valid.


[image assetsSrc="Angular-Forms-Workshop-5.png" /]

[image assetsSrc="Angular-Forms-Workshop-6.png" /]

[/slide]

[slide hideTitle]

# Change Profile Information

When logged in, a user should be able to see their **profile information**.

[image assetsSrc="Angular-Forms-Workshop-7.png" /]

By clicking the `Edit` button, the profile information should be turned into a **form with editable fields**. 

The input fields should still hold the current information of the user.

[image assetsSrc="Angular-Forms-Workshop-8.png" /]

**Username validation** here is the same as the register case:

- Should contain at least **5 symbols** and is **required**

**Email** validation is the same as the login and register cases:

- Should be at least **6 symbols** long, followed by `@` 
   * the only valid domain name is `gmail` followed by a full stop "**.**"
   * the top-level domain can only be `com`
   * **valid** email addresses: `testing@gmail.com`, `somethingelse@gmail.com`
   * **invalid** email addresses: `qwe@gmail.com`,`123@gmail.com`

If the validation passes, the `Save` button should be enabled, and the user can make a **post** request to change the information.

If the `Cancel` button is clicked all changes must be **reverted**,  the user information should then be displayed **unchanged**.

## Custom Directives

Can any of the functionalities be isolated in a custom directive, to avoid repeating parts of the code?

**Hint: Stylization / Validation**

[/slide]
