# Softuni Forum Workshop: Part 3

[slide hideTitle]

# Task Requirements
[Download resources here!](https://mega.nz/file/qJIX3CSB#n--FyDbN_rx51ZZ6wKKLV6tSTbCczMbdubt-RLqaWJ0)

Now that we have our forms, it is time to edit them, so that the given information is processed as expected. 

Implement the following **validation**, **notification** and **styling** rules for each form.

By default:
- The input fields are **neutral** (neither valid nor invalid). 

If some of the fields are **touched**, you should determine the status of validation from the given data inside it.

- Each input field is **required**.

**Notifications** should be shown, as paragraph `<p>` elements below each input field or button.

The notification **below each button** should display the **status** of the **form validation**:

- If the status is **untouched** or **valid** the **left border** of the input field must be **green**, else **red**.

- If the status is **invalid**:

Use - "**You can't continue until you provide a valid data**" as text or the default text provided from the skeleton. 

The **color** inside that paragraph should be "**red**" and the **button** should be **disabled**.

- If the status is **valid**:

Just **remove** the **notification** and **enable** the **button**.

For more clarity check the examples below each form.

[/slide]

[slide hideTitle]

# Valid or Invalid Cases

In case some of the input fields аrе **invalid**, the following **input field** should be styled with class **input-error**.

Use the following style:

```css
border-left-color: red;
```

**Notification** should be shown with information about the validation. 

The text inside that paragraph also should be **red**.

When the input field is filled with **valid** information, the class **input-error** should be **disabled**.

In this case the left border should be **green** again.

[/slide]

[slide hideTitle]

# Reactive Forms Login

Use the model-driven **reactive** approach to build the **login** and the **register** form.

The login form expects as input **email** and **password**.

Valid credentials in this case are:

- **Email address**: 

Must be at least **6 characters** long, followed by the "At" symbol - `@`. 

The valid **domain name** is only "**gmail**", followed by a dot - "**.**". 

**Top-level** domain can be "**bg**" or "**com**".

- **Valid** email addresses: 

`testing@gmail.com`, `testing@gmail.bg`, `something.else@gmail.com`

- **Invalid** email addresses: 

`qwe@gmail.com`, `123@gmail.bg`, `somethingelse@abv.bg`, `another@abv.com`

- **Password**: 

Must be at least **5 characters** long.

[image assetsSrc="Angular-Forms-Workshop.png" /]

[/slide]

[slide hideTitle]

# Reactive Forms Register

The register form expects as input: **username**, **email**, **password**, **repeat password** and **telephone number** (not required).

- Username validation:

Must be at least **5 characters** long and is **required**.

- Email validation:

Must be at least **6 characters** long, followed by the "At" symbol - `@`.

The valid **domain name** is only "**gmail**", followed by a dot - "**.**". 

**Top-level** domain can be "**bg**" or "**com**".

- **Valid** email addresses: 

`testing@gmail.com`, `testing@gmail.bg`, `something.else@gmail.com`

- **Invalid** email addresses: 

`qwe@gmail.com`, `123@gmail.bg`, `somethingelse@abv.bg`, `another@abv.com`

**Both passwords** should be grouped in the "**passwords**" group. 

- Password validation:

The given **password** must be at least **5 characters** long (any English letter and digits are allowed).

The given **repeat password** must be the **same** as the given **password**.

**Both fields** are considered **invalid** if some of them **do not cover** the described validation. 

If that happens, apply the **invalid stylization** for both. 

Otherwise, apply the valid stylization.

[image assetsSrc="Angular-Forms-Workshop(1).png" /]

[/slide]

[slide hideTitle]

# Template-driven Forms

Use the template-driven approach to build create a new theme and change user information form.

[/slide]

[slide hideTitle]

# New Theme

The new theme form expects as input: **theme name**, **post text**.

- Valid data:

Theme name - must be at least **5 characters** long.

Post text - must be at least **10 characters** long.

[image assetsSrc="Angular-Forms-Workshop(2).png" /]

The "**Post**" button should be **disabled** if the inputs are **NOT** valid.

[image assetsSrc="Angular-Forms-Workshop(3).png" /]

[/slide]

[slide hideTitle]

# Change Profile Information

When you are logged in you can see your profile information.

[image assetsSrc="Angular-Forms-Workshop(4).png" /]

By clicking the "**Edit**" button, the profile information should be turned into **form with editable fields**. 

The input fields should have the current information of the user.

[image assetsSrc="Angular-Forms-Workshop(5).png" /]

- Username validation:

Must be at least **5 characters** long and is **required**.

- Email validation:

Must be at least **6 characters** long, followed by the "At" symbol - `@`. 

The valid **domain name** is only "**gmail**", followed by a dot - "**.**". 

Top-level domain can be "**bg**" or "**com**".

- **Valid** email addresses: 

`testing@gmail.com`, `testing@gmail.bg`, `somethingelse@gmail.com`

- **Invalid** email addresses: 

`qwe@gmail.com`, `123@gmail.bg`, `somethingelse@abv.bg`, `another@abv.com`

If the validation passes, the "**Save**" button should be **enabled**, and the user can make a post request to change the information.

If the "**Cancel**" button is **clicked** all changes must be **reverted**, and the user information should be displayed **unchanged**.

[/slide]

[slide hideTitle]

# Custom Directives

Think about for a second which logic can be isolated in the custom directive, so you avoid repeating part of the code.

**Hint:** Stylization and Validation.

[/slide]


