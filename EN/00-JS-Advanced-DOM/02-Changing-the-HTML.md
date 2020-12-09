# Changing the HTML

[slide]
# DOM Methods

HTML elements in the DOM tree have their own **methods** and **properties**, which we can use.

They are an **additional instrument**, which is very useful in our job as software engineers.

DOM **methods are actions you can perform on HTML elements**, and change them.

DOM **properties are information that we can receive or change.**
[/slide]

[slide]
# Example 1: DOM Methods

We can run this example int the browser:

``` js
<html>
    <head>
        <title>Intro to DOM</title>
    </head>
    <body>
        <h1>Intoduction to DOM</h1>
        <ul>
            <li>DOM Methods example</li>
            <li>DOM Properties example</li>
        </ul>
    </body>
</html>
```

In this HTML document we can get our title `h1`, using JavaScirpt:

``` js
let h1Element = document.getElementsByTagName('h1')[0];
console.log(h1Element);
```

We can insert JavaScript dorectly into the HTML document:

``` js
<html>
    <head>
        <title>Intro to DOM</title>
    </head>
    <body>
        <h1>Introduction to DOM</h1>
        <ul>
            <li> DOM Methods example</li>
            <li>DOM Properties example</li>
        </ul>
        <script>
            let h1Element = document.getElementsByTagName('h1')[0];
            console.log(h1Element);
        </script>
    </body>
</html>
```
In this example, we insert a script into the HTML document by using `<script>` tag.

And that way we can print into the browser's console the first title element, which is `Introduction to DOM`.
[/slide]

[slide]
# Example 2: DOM Methods

HTML DOM property is a value that you can `get` or `set`:

``` js
<html>
<head>
    <title>Intro to DOM</title>
</head>
<body>
    <h1>Intoduction to DOM</h1>
    <ul>
        <li> DOM Methods example</li>
        <li>DOM Properties example</li>
    </ul>
    <script>
        let secondLi = document.getElementsByTagName('li')[1];
        secondLi.innerHTML += " - DONE"
    </script>
</body>
</html>
```

With this example we add ` - DONE` to the end of `DOM Properties example` and as a result, we receive `DOM Properties example - DONE`.

This is how we can dynamically change the content of a web page.
[/slide]