[slide hideTitle]

# DOM Methods

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-6-7-dom-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

HTML elements in the DOM tree have their own **methods** and **properties**.

They are an **additional tool**, which is very useful in a software engineer's job.

DOM methods are **actions that can be performed on HTML elements and change them.**

DOM properties are **information that can be received and changed.**

[/slide]


[slide hideTitle]

# Example of DOM Methods

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-8-9-example-dom-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

After running this example in the browser:

```js
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

This is how to get the title `h1`, using JavaScript:

```js
let h1Element = document.getElementsByTagName("h1")[0];
// getElementsByTagName returns an array of all HTML elements with a given tag
// [0] specifies the first h1 element of that array

console.log(h1Element);
```

JavaScript can also be **directly** inserted into the HTML document:

```js
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

In this example, a script is inserted into the HTML document by using the `<script>` tag.

And that way, the first title element, which is "**Introduction to DOM**", can be printed into the browser's console.

[/slide]

[slide hideTitle]

# Another Example of DOM Methods

HTML DOM properties are values that you can "**get**" or "**set**":

```js
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
      secondLi.innerHTML+= " - DONE"
    </script>
  </body>
</html>
```

The given code produces the following result:

[image assetsSrc="JS-Advanced-Intro-DOM.JPG" /]

With this example, "**- DONE**" is added to the end of "**DOM Properties example**" and as a result, there is "**DOM Properties example - DONE**".

That is how to change the content of a web page **dynamically**.

[/slide]
