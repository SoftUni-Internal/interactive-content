# Document with a Logical Tree

[slide]
# Document Object Model

[vimeo-video]
[stream language="EN" videoId="" default /]
[stream language="RO" videoId=""  /]
[/video-vimeo]

**Document Object Model** (DOM) is an interface, which **connects** JavaScript as a programming language and HTML.

HTML is a text with tags. 

When we open a browser we send a `GET` **request to the server**, and the server **sends us back HTML.**

Manipulating the HTML **directly is hard**, we can use regex, loops, etc, but it is still a **tough task.**

This is where **DOM comes to save the day**.

DOM stays **between HTML and JavaScript**, which help us to manipulate HTML.

DOM **translates the HTML to objects**, and those objects we can easily manipulate (add, delete, insert, use animation, and many others).

[image assetsSrc="DOM-JS-Relation.png" /]

DOM is a standard of how to:

- Get HTML element

- Change HTML element

- Add HTML element

- Delete HTML element

Example of **HTML element**:

``` js
<h1>Hello World!</h1>
```

In this example `<h1>` tell the browser that this is a title. 

Then we have the text `Hello World!`.

And at the end, we close the title with `</h1>`.


[/slide]

[slide]
# HTML DOM

The HTML DOM is an Object Model for HTML.

It defines:

- HTML elements as objects

- Properties

- Methods

- Events

[/slide]