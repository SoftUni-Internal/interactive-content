# Introduction to HTML

[slide]
# What is HTML?

[vimeo-video]
[stream language="EN" videoId="431746203" default /]
[stream language="RO" videoId="444864040" /]
[/video-vimeo]

HTML (**HyperText Markup Language**) is the most basic **building block of the Web**. 

It defines the meaning and structure of web content. 

Other technologies besides HTML are generally used to describe a web page's **presentation** (**CSS**) or functionality (**JavaScript**).

"Hypertext" refers to links that connect web pages, either within a single website or between websites. 

Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.

HTML uses "**markup**" to annotate text, images and other content for display in a Web browser. 
[/slide]

[slide]
# HTML Tags

[vimeo-video]
[stream language="EN" videoId="431746990" default /]
[stream language="RO" videoId="444864042" /]
[/video-vimeo]

In HTML, a tag is used for **creating an element**. 

Each HTML tag describes that the browser should do something instead of simply displaying the text. In HTML, the tags begin with (`<`) and end with (`>`).

HTML tags can be of two types:
- Paired Tags
- Unpaired Tags

## Paired Tags
A tag is said to be a paired tag if the text is placed between a tag and its companion tag. In paired tags, the first tag is referred to as **opening tag** and the second tag is referred to as **closing tag**.

Note that the end tag's name is preceded by a **slash character** `</b>`.

Example:
```html
<b>This is bold text.</b>
```

**Note:** Here `<b>` is called opening tag and `</b>` is called closing tag.

## Unpaired Tags

An unpaired tag does not have a closing tag. Unpaired tags are also known as singular or stand-alone tags.

Example
```html
<br>
```

This tag does not require a closing tag.

## Tags Based on Their Usage

We can differentiate tags based on the **purpose they used**. Basically we have three types:
- **Formatting tags** - manage the size of the font, underline part of the text, make the text bold etc.
- **Semantic tags** - description, title, head, body, etc.
- **Control tags** - form tags, script tags, radio buttons, etc are used for interaction with user.
[/slide]

[slide]
# Main HTML Tags

## html tag
The HTML `<html></html>` element represents the **top-level** element of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.

Example:
```html
<html>
  ...
</html>
```

## head tag
The HTML `<head></head>` element contains **machine-readable information** (**metadata**) about the document, like its **title**, **scripts**, and **style sheets**.

```html
<html>
  <head>
    <title>Document title</title>
  </head>
</html>
```

## body tag
The HTML `<body></body>` element represents the content of an HTML document. There can be only one `<body>` element in a document.

```html
<html>
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>This is a paragraph</p>
  </body>
</html>
```

## HTML Page - Example

[vimeo-video]
[stream language="EN" videoId="431749670" default /]
[stream language="RO" videoId="444869129" /]
[/video-vimeo]

[html]
<p class="codepen" data-height="276" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="oNjNxXr" style="height: 276px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="oNjNxXr"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]
[/slide]

[slide]
# Indentation and Whitespace

## What is whitespace?

[vimeo-video]
[stream language="EN" videoId="431748168" default /]
[stream language="RO" videoId="444864043" /]
[/video-vimeo]

Whitespace is any string of text composed only of **spaces**, **tabs** or **line breaks**.

These characters allow you to **format your code** in a way that will make it easily **readable** by yourself and other people. 

In fact, much of our source code is full of these whitespace characters, and we only tend to get rid of it in a production build step to reduce code download sizes.

## HTML ignores whitespace

In the case of HTML, whitespace is largely **ignored** - whitespace in between words is treated as a single character, and whitespace at the start and end of elements and outside elements is ignored. 

Let's look at this example:

[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="ExVxZeN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ExVxZeN">
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

This is so that whitespace characters **don't impact** the layout of your page. 

If we need space around and inside elements, we can do that with **CSS**.
[/slide]

[slide]
# Syntax Error

[vimeo-video]
[stream language="EN" videoId="431748211" default /]
[stream language="RO" videoId="444864044" /]
[/video-vimeo]

These are spelling errors in your code. These are usually easy to fix as long as you are familiar with the language's syntax.

HTML itself doesn't suffer from syntax errors because browsers parse it **permissively**, meaning that the page still displays even if there are syntax errors. 

Browsers have built-in rules to state how to interpret **incorrectly written markup**, so you'll get something running, even if it is not what you expected. 

The web would probably not be as popular as it is today, if it had been more strict from the very beginning.

However, this can still be a **problem**.

## HTML validation

You really want to make sure your HTML is **well-formed**! You probably wonder how? 

The best way is to start by running your HTML page through the [Markup Validation Service](https://validator.w3.org/). 

W3C is the organization that looks after the specifications that define HTML, CSS, and other web technologies. 

This webpage takes an HTML document as an input and tells what is wrong with your HTML.

To specify the HTML to validate, you can give it a **web address**, upload entire **HTML document**, or **directly put** your HTML code.

[/slide]