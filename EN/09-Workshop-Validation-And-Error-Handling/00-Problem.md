# Cubicle: Part 4

[slide hideTitle]

# Project Setup

"**Cubicle**" is a place, where you can browse some of the most popular Rubik's cubes in the world and add some new cubes that you have discovered.

This is the final part of the workshop, so if you missed some parts, make sure you complete them before you continue because all parts of this workshop are related to each other.

# Main Task

As a final step, you should implement some **validation**, **notification** to **improve the user experience** and **protect the data** that is **stored in the database**.

# Installing Dependencies

You can use [express-validator](https://www.npmjs.com/package/express-validator) to do some **validation** and **sanitization** or continue using Mongoose to do validations as well.

[/slide]

[slide hideTitle]
# User Validations

Before some user **register** or **login**, implement the following validations:

- Username

   - Should be **unique** \(add `unique: true` property to each **User Model** username\)

   - Should consist only with **English letters** and **digits**

   - Should be at least **5 characters** long

- Password

   - Should consist only with **English letters** and **digits**

   - Should be at least **8 characters** long

- Re\-Password

   - Should be the **same** as the given password

[image assetsSrc="JS-Web-Validation-And-Error-Handling-1.png" /]

[image assetsSrc="JS-Web-Validation-And-Error-Handling-2.png" /]

[/slide]

[slide hideTitle]

# Cube and Accessory Validations

The **cube** and **accessory** forms also should have some validation:

- **Name**:

   - At least **5 characters** long, who could be **English letters**, **digits** and **whitespaces**

- **Description**:

   - At least 20 characters, who could be **English letters**, **digits** and **whitespaces**

- **ImageUrl**:

   - Referring to actual picture \(starts with `http://...` or `https://...`\)

[image assetsSrc="JS-Web-Validation-And-Error-Handling-3.png" /]

[/slide]

[slide hideTitle]

# Error Handling

In case of errors, for instance, If the given username is **already taken**, **does not exists** or the given **password** (while login) is **incorrect**, handle the error properly and show an appropriate notification.

[image assetsSrc="JS-Web-Validation-And-Error-Handling-4.png" /]

[/slide]

[slide hideTitle]

# Template Update

If you want to use the notifications which are shown in the pictures, you should modify a little your **main layout has** file.

Create a **div** with `id="notifications"`, between the **header** and the **main** element, which holds a single **paragraph** with `id="notification-message"`.

Check the picture below:

[image assetsSrc="JS-Web-Validation-And-Error-Handling-5.png" /]

Also, you should append the following styles into the `site.css` file:

[image assetsSrc="JS-Web-Validation-And-Error-Handling-6.png" /]

[/slide]