# Error Handling

[slide]

# Error Handling

In case of errors, for instance If the given username is **already taken**, **does not exists** or the given **password** (while login) is **incorrect**, handle the error properly and show an appropriate notification.

[image assetsSrc="JS-Web-Validation-And-Error-Handling-4.png" /]

[/slide]

[slide]

# Template Update

If you want to use the notifications which are shown in the pictures, you should modify a little your **main layout hbs** file.

Create a **div** with `id="notifications"`, between the **header** and the **main** element, which holds a single **paragraph** with `id="notification-message"`.

Check the picture below:

[image assetsSrc="JS-Web-Validation-And-Error-Handling-5.png" /]

Also, you should append the following styles into the **site.css** file:

[image assetsSrc="JS-Web-Validation-And-Error-Handling-6.png" /]

[/slide]