# Introduction to HTML

[slide hideTitle]

# What is HTML

[vimeo-video]
[stream language="EN" videoId="431746203" default /]
[stream language="RO" videoId="444864040" /]
[/video-vimeo]

HTML (**Hypertext Markup Language**) is the most basic **building block of the Web**. 

It defines the meaning and structure of web content. 

Other technologies besides HTML are generally used to describe a web page's **presentation** (**CSS**) or functionality (**JavaScript**).

"Hypertext" refers to links that connect web pages, either within a single website or between websites. 

Links are a fundamental aspect of the Web. 

By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.

HTML uses "**markup**" to annotate text, images, and other content for display in a Web browser. 
[/slide]

[slide hideTitle]
# HTML Tags

[vimeo-video]
[stream language="EN" videoId="431746990" default /]
[stream language="RO" videoId="444864042" /]
[/video-vimeo]

In HTML, tags are used for **creating elements**. 

Each HTML tag describes that the browser should do something instead of simply displaying the text. 

In HTML, the tags begin with (`<`) and end with (`>`).

There are two types of HTML tags:
- Paired tags
- Unpaired tags

## Paired Tags
A tag is considered to be paired when content is placed between a certain tag and its companion tag. 

In paired tags, the first tag is referred to as **opening tag** and the second tag is referred to as **closing tag**.

Note that the end tag's name is preceded by a **slash**.

**Example:**
```html
<b>This is bold text.</b>
```

**Note:** Here `<b>` is the opening tag and `</b>` is the closing tag.

## Unpaired Tags

An unpaired tag does not have a closing tag. Unpaired tags are also known as singular or stand-alone tags.

**Example:**
```html
<br>
```

This tag does not require a closing tag.

## Tags Based on Their Usage

We can differentiate tags based on **their purpose**. There are three types:
- **Formatting tags** - manage the size of the font, underline a part of the text, make the text bold, etc.
- **Semantic tags** - describe the content of the element (e.g title, body, article)
- **Control tags** - used for user interactions (e.g form tags, script tags, radio buttons, etc.)
[/slide]

[slide hideTitle]
# Main HTML Tags

## <html> tag

The HTML `<html></html>` element represents the **top-level** element of an HTML document and it is also referred to as the root element. 

All other elements must be descendants of this element.

Example:
```html
<html>
  ...
</html>
```

## <head> tag

The HTML `<head></head>` element contains **machine-readable information** (**metadata**) about the document, like its **title**, **scripts**, and **style sheets**.

```html
<html>
  <head>
    <title>Document title</title>
  </head>
</html>
```

## <body> tag

The HTML `<body></body>` element represents the content of an HTML document. 

There can be only one `<body>` element in a document.

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

[slide hideTitle]

# What is Whitespace?

[vimeo-video]
[stream language="EN" videoId="431748168" default /]
[stream language="RO" videoId="444864043" /]
[/video-vimeo]

Whitespace is any string of text composed only of **spaces**, **tabs**, or **line breaks**.

These characters allow us to **format our code** in a way that will make it easily **readable**. 

Much of our source code is full of whitespace characters, and we tend to remove them in a production build step to reduce code download sizes.

## HTML Ignores Whitespace

In the case of HTML, whitespace is largely **ignored** - whitespace in between words is treated as a single character, and whitespace at the start and end of elements and outside elements is ignored. 

Consider the following example:

[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="ExVxZeN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ExVxZeN">
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

<br/><br/>

This is so that whitespace characters **do not impact** the layout of your page. 

If we need space around and inside elements, we can do that with **CSS**.
[/slide]

[slide hideTitle]
# Syntax Errors

[vimeo-video]
[stream language="EN" videoId="431748211" default /]
[stream language="RO" videoId="444864044" /]
[/video-vimeo]

Syntax errors are spelling errors in our code. 

They are usually easy to fix as long as we are familiar with the language's syntax.

HTML itself doesn't suffer from syntax errors because browsers parse it **permissively**, meaning that the page still displays even if there are syntax errors. 

Browsers have built-in rules to state how to interpret **incorrectly written markup**. 

The web would probably not be as popular as it is today if it had been more strict from the very beginning.

However, this can still be a **problem**.

## HTML Validation

You want to make sure your HTML is **well-formed**! 

The best way is to start by running our HTML page through the [Markup Validation Service](https://validator.w3.org/). 

W3C is the organization that looks after the specifications that define HTML, CSS, and other web technologies. 

This webpage takes an HTML document as an input and if there are any issues with our HTML, it will notify us.

To specify the HTML to validate, you can give it a **web address**, upload entire **HTML document**, or **directly put** your HTML code.

[/slide]
