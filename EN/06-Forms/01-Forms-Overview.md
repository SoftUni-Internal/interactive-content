# Forms Overview

[slide hideTitle]

# Forms in React

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/07.ReactJS-Forms/React-Forms-3-4-Forms-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Forms are among the most important components of a React application.

They enable receiving data from our users, like an email and password on a login page, or shipping info in an online store.

Form elements in React work a little differently from the rest of the HTML elements.

That is because in React, form elements always keep some **internal state**.

From the moment a component **renders**, it is equipped with an **initial state**.

The following example illustrates a simple form.

```js
<form>
  <label>
    How are you today:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

**By default**, when pressing on the `Submit` button, you will be either **redirected** or the **current page** will **reload**.

If this is the behavior you are looking for, React supports it completely.

However, since most React applications are **single page applications**, a common practice is to create a JavaScript **function that handles the form submission and accesses the user-entered data**.

There are two ways to handle forms in React:

- Controlled components
  - This is the most used way to handle forms

- Uncontrolled components
  - Helpful in some specific cases

[/slide]
