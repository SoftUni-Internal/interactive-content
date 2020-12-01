# Introduction to CSS

[slide]
# Video

[vimeo-video startTimeInSeconds="2593" endTimeInSeconds="5197"]
[stream language="EN" videoId="424672446" default /]
[stream language="RO" videoId="424672683"  /]
[/video-vimeo]

[/slide]

[slide]
# What is CSS?
**Cascading Style Sheets** (**CSS**) is a stylesheet language used to describe the **presentation of a document written in HTML**.

CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

For example, change text color in green for all paragraph elements:
[html]
<p class="codepen" data-height="240" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="vYNYqKm" style="height: 240px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="vYNYqKm"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]

[slide]
# CSS Syntax

A CSS rule-set consists of a **selector** and a **declaration block**:
```
[selector] { 
  [declaration] property: value
  [declaration] property: value
}
```

The selector points to the **HTML element** you want to style.

The declaration block contains declarations separated by semicolons.

Each declaration includes a CSS property **name** and a **value**, separated by a colon.

A CSS declaration always ends with a **semicolon**, and declaration blocks are **surrounded by curly braces**.

Example:
[html]
<p class="codepen" data-height="240" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="vYNYqKm" style="height: 240px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="vYNYqKm"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

Example Explained:
- p is a selector in CSS (it points to the HTML element you want to style: `<p>`, we will cover in the next pages)
- `color` is a **property**, and `green` is the **property value**

# Element Selectors
The element selector selects all elements with the specified element name.

Styling all headings of level 1 `<h1>`:
[html]
<p class="codepen" data-height="234" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="rNONEwN" style="height: 234px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rNONEwN">
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]

[slide]
# Internal CSS

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the `<style>` element, inside the `head` section.

Example:
[html]
<p class="codepen" data-height="454" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="vYNYqJJ" style="height: 454px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="vYNYqJJ"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]

[slide]
# CSS id Selector

The CSS ID selector matches an element based on the value of its `id` attribute which must **match exactly** the value given in the selector.

The id of an element is **unique within a page**, so the id selector is used to **select one unique element**.

## Define CSS

To select an element with a specific id, write a hash (`#`) character, followed by the id of the element.

**CSS Syntax**:
```css
#name {
  background-color: blue;
}
```

**HTML Usage**:
```html
<p id="name">John Smith</p>
```
[/slide]

[slide]
# CSS class Selector

The `.class` selector selects elements with a specific `class` attribute.

To select elements with a specific class, write a period (`.`) character, followed by the name of the class.

**CSS Syntax**:
```css
.main {
  background-color: green;
}
```

**HTML Usage**:
```html
<p class="main">lorem ipsum dolor sit amet</p>
```

You can also specify that **only specific HTML elements** should be affected by a class.

```css
h1.headings {
  color: green;
}
```

Here, all `<h1>` elements with class `headings` will be affected.
[/slide]

[slide]
# Pseudo-classes
A pseudo-class is used to define a **special state of an element**.

Examples of pseudo-classes:
- Style a link when the user's mouse is over it
- Style **visited** and **unvisited** links differently

Syntax:
```
selector:pseudo-class {
  property:value;
}
```

Example:
[html]
<p class="codepen" data-height="176" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="yLYLmee" style="height: 176px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="yLYLmee"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]

[slide]
# Adding CSS to HTML Documents

There are three ways of inserting a style sheet:
- External style sheet;
- Internal style sheet;
- Inline style.

We already have covered the **Internal style sheet**. Now, let's see how we can add CSS to our HTML in other ways.

## External Style Sheet
An external style sheet is a separate file linked to an HTML web page. All the styles that need to be used on a website can be declared in the external style sheet.

The most common way to add CSS, is to keep the styles in **separate CSS files**. 

Benefits of the external style sheet:
- It can be applied to an unlimited number of web pages;
- An external style sheet can be applied instantly to apply the look to each and every web page;
- It helps in bringing a uniform format to every page they are attached to.

To link an external stylesheet, you'd include a `<link>` element inside your `<head>` like this:
```css
<head>
    <link href="mystyles.css" rel="stylesheet">
</head>
```

An external style sheet can be written in any text editor and must be saved with a `.css` extension.

The external `.css` file should not contain any HTML tags.

Here is how the `mystyles.css` file looks like:
```css
p {
    font-size: 16px;
}

h1 {
  text-align: center;
  color: green;
}
```

## Inline CSS
An inline style may be used to apply a unique style for a single element.

To use inline styles, add the `style` attribute to the relevant element. The style attribute can contain any CSS property.

Example of Inlince CSS:
[html]
<p class="codepen" data-height="202" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="MWaWNEb" style="height: 202px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="MWaWNEb">
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

## Priority Level
All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:
- Inline style
- External and internal style sheets
- Browser default

So, an `inline` style has the highest priority and will override `external` and `internal` styles and browser defaults.

Also, one HTML element can be targeted by multiple CSS rules. Let's use a simple heading for example:
```html
<h1 class="heading-class" id="heading-id">Level 1 Heading</h1>
```

Let's add an element selector by applying this CSS:
```css
h1 {
    color: red;
}

.heading-class {
    color: green;
}

#heading-id {
    color: blue;
}

```

Because the browser can only pick **one color** to apply on this paragraph, it will have to decide which CSS rule takes priority over other ones.

Here is the priority list as it follows, where number one has the highest priority:
- `#id`
- `.class`
- `tag`


[/slide]