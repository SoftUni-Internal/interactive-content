# CSS Typography Properties

[slide]

## Font Family

[vimeo-video]
[stream language="EN" videoId="431758488" default /]
[stream language="RO" videoId="445501177" /]
[/video-vimeo]
[vimeo-video]
[stream language="EN" videoId="431758564" default /]
[stream language="RO" videoId="445501184" /]
[/video-vimeo]

Тwo types of `font-family` names are known in CSS:
* **generic family** - a **group** of font families with a similar look (like "sans-serif" or "monospace");
* **font family** - a **specific** font family (like "Times New Roman" or "Arial")


The **font-family** property specifies the font for an element.

Each **font-family** property lists **one** or **more** font families, separated by commas.

If the browser does not support the first font, it tries the next font, and so on.

**Example:**
```html
font-family: <family-name>, <generic-name>;
font-family: Arial, "Times New Roman", sans-serif; 
```
**Note**: If the name of a font family **contains spaces**, it must be in **quotation marks**, like: "Times New Roman".

Here is a list with properties of `<generic-name>`:
* `serif` – all characters have stroke endings;
* `sans-serif` – no character has stroke endings;
* `monospace` – all characters have the same width;
* `cursive` – handwritten fonts;
* `fantasy` – decorative fonts.

**Example:**
[html]
<p class="codepen" data-height="293" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="eYpKxvG" style="height: 293px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="font-family">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/eYpKxvG">
  font-family</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

### Font Files

[vimeo-video]
[stream language="EN" videoId="431758523" default /]
[stream language="RO" videoId="445501178" /]
[/video-vimeo]

Font files contain one or more fonts that can be accessed by the **OS** and **applications**.

Most modern fonts are stored in the following formats:
* OpenType (.OTF)
* TrueType (.TTF)
* Web Open Font Format (.WOFF)
* Web Open Font Format 2 (.WOFF2)

You can find a variety of fonts here:
https://fonts.google.com/


[/slide]

[slide]
## @font-face

[vimeo-video]
[stream language="EN" videoId="431758586" default /]
[stream language="RO" videoId="445501186" /]
[/video-vimeo]

The `@font-face` CSS at-rule specifies a **custom font** with which to display text. 

The font can be loaded from either a remote server `url()` or a locally-installed font `local()`. 

It's common to use both `url()` and `local()` together so that the user's installed copy of the font is used if available or download a copy if it's not found on the user's device.

**Example:**
```html
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/webfont.woff") format("woff"),
}
```

[/slide]

[slide]
## Font Style

[vimeo-video]
[stream language="EN" videoId="431758617" default /]
[stream language="RO" videoId="445509655" /]
[/video-vimeo]

`font-style` defines how much the text is **slanted**. This property has three values:
* `normal` - The text is shown **normally**;
* `italic` - The text is shown in **italics**;
* `oblique` - The text is "**leaning**" (oblique is very similar to italic, but less supported).

**Example:**
[html]
<p class="codepen" data-height="213" data-theme-id="39135" data-default-tab="html,result" data-user="softuni-inter" data-slug-hash="wvKXNww" style="height: 213px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="font-style">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/wvKXNww">
  font-style</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]

[slide]
## Font Size

[vimeo-video]
[stream language="EN" videoId="431758650" default /]
[stream language="RO" videoId="445509657" /]
[/video-vimeo]

The `font-size` property sets the **size** of the font.

This property is also used to **compute** the size of **em**, **ex**, and another relative `<length>` units.

The `font-size` value can be **absolute** or **relative**.

Absolute:
* `px` - when you need **pixel accuracy**;

Relative:
* `em` - the value is relative to the **parent element's** font-size;
* `rem` - the value is relative to the **root's** font-size;

**Note**: The **default** font-size is `16px`.

**Example:**
```html
font-size: 16px;
font-size: 1rem;
```

[/slide]

[slide]
## Font Weight

[vimeo-video]
[stream language="EN" videoId="431758670" default /]
[stream language="RO" videoId="445509656" /]
[/video-vimeo]

The `font-weight` property defines the **weight** (or **boldness**) of the font.

The weights available depend on the font-family you are using.

The values of this property are:
* **Numeric** - where are used numeric values from `100` to `900`;
* **Keyword values** - such as `thin`, `lighter`, `bold`, `bolder`.

For example the `thin` property equals to `100`, and the `bolder` equals to `900`.

**Example:**
```html
font-weight: 100;
font-weight: 900;
font-weight: bold;
font-weight: bolder;
```

[/slide]

[slide]
## Line Height

[vimeo-video]
[stream language="EN" videoId="431758720" default /]
[stream language="RO" videoId="445509661" /]
[/video-vimeo]

The `line-height` property defines the height of a single line of text.

The `line-height` property is specified as any one of the following:

* **\<number>** (unitless) - The used value is the unitless \<number\> multiplied by the element's font size;
* **\<length>** - The specified \<length\> is used in the calculation of the line box height;
* **\<percentage>**- Percentage is relative to the font size of the element itself;
* the keyword `normal`- Depends on the user agent. It's the default value.

**Example:**
```html
line-height: 1.5;
line-height: 2em;
line-height: 34%;
line-height: normal;
```

[/slide]

[slide]
## Letter Spacing

[vimeo-video]
[stream language="EN" videoId="431758742" default /]
[stream language="RO" videoId="445509658" /]
[/video-vimeo]

`letter-spacing` defines the spacing between the characters of a block of text.

* **\<length>** - Defines an extra space between characters (negative values are allowed);
* `normal` - the spacing between the characters is normal. This is the default value.

**Example:**
```html
letter-spacing: 2px;
letter-spacing: normal;
```

[/slide]

[slide]
## Text Align

[vimeo-video]
[stream language="EN" videoId="431758788" default /]
[stream language="RO" videoId="445509659" /]
[/video-vimeo]

`text-align` defines how the content of the element is horizontally aligned.

The values of this property are:
* `left`	- Aligns the text to the **left**;
* `right`	- Aligns the text to the **right**;	
* `center`	- **Centers** the text;
* `justify`	- Stretches the lines so that each line has **equal width**.

The default value depends on the direction. It's left if the direction is ltr, and right if the direction is rtl.

**Example:**
```html
text-align: right;
text-align: center;
```

[/slide]

[slide]
## Text Decoration

[vimeo-video]
[stream language="EN" videoId="431758821" default /]
[stream language="RO" videoId="445509663" /]
[/video-vimeo]

The `text-decoration` property defines how the text content of the element is decorated: 

`none` – **removes** any text decoration;
`line-through` – draws a line **across** the text;
`underline` draws a line **under** the text;
`overline` draws a line **over** the text.

**Example:**
[html]
<p class="codepen" data-height="301" data-theme-id="39135" data-default-tab="html,result" data-user="softuni-inter" data-slug-hash="YzyjNRp" style="height: 301px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="text-decoration">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/YzyjNRp">
  text-decoration</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]

[slide]
## Text Indent

The `text-indent` property specifies the **indentation of the first line** in a text-block.

* **\<length>** - defines a **fixed** indentation in px, pt, cm, em, etc. Default value is 0;
* `%` - defines the indentation in **percentage of the width of the parent element**.

**Example:**

```html
text-indent: 40px;
```

[/slide]

[slide]
## Text Overflow

The `text-overflow` property defines how the hidden text content behaves if it’s overflowing.

It can be `clipped`, display an `ellipsis` (...), or display a custom `string`.

**Both** of the following properties are **required** for `text-overflow`:
* `white-space: nowrap`;
* `overflow: hidden`;

`text-overflow` values can be:
* `clip` -	The text is clipped and not accessible. It's the default value;
* `ellipsis` -	renders an **ellipsis** ("...") to represent the clipped text;
* `string` -	renders the **given string** to represent the clipped text.

**Example:**

[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="zYvLZYx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="text-overflow">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/zYvLZYx">
  text-overflow</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]

[slide]
## Text Transform

[vimeo-video]
[stream language="EN" videoId="431758846" default /]
[stream language="RO" videoId="445509660" /]
[/video-vimeo]

The `text-transform` property controls, how the text to be capitalized.

The values are:
* `none` -	the text will have no capitalization. This is the default value;
* `capitalize`	- turns the **first character** of each word to uppercase;
* `uppercase`	- turns **all** characters to **uppercase**;
* `lowercase`	- turns **all** characters to **lowercase**.

**Example:**

```html
text-transform: capitalize;
text-transform: uppercase;
```

[/slide]

[slide]
## Word Break

`word-break` defines how words should break when reaching the end of the line.

The values of this property are:
* `normal`– words with no space will not break;
* `break-all`	- words with no space will break as soon as they reach the end of a line;

**Example:**

```html
word-break: normal;
word-break: break-all;
```

[/slide]

[slide]
## Text Color

[vimeo-video]
[stream language="EN" videoId="431758872" default /]
[stream language="RO" videoId="445509664" /]
[/video-vimeo]

The `color` property sets the color of an element's text.

There are different ways to set the color of a text:
* `color: red;` - You can use one of the 140+ **color names**;
* `color: #05ffb0;` - You can use **hexadecimal** color codes;
* `color: rgb(125, 125, 255);` - You can use `rgb()` color codes;
* `color: rgba(255, 0, 0, 0.5);` - You can use `rgba()` color codes, where the last number defines the opacity. 0.0 is fully transparent and 1.0 is fully opaque.

**Example:**

```html
color: red;
color: #05ffb0;
color: rgb(125, 125, 255);
color: rgba(255, 0, 0, 0.5);
```

[/slide]

[slide]
## Background Color

[vimeo-video]
[stream language="EN" videoId="431758912" default /]
[stream language="RO" videoId="445509665" /]
[/video-vimeo]

`background-color` defines the color of the background of an element.

The values of this property can be used the same way, as by the color property.

There is one more property value here:
* `transparent` -	specifies that the background color should be transparent. This is **default** value.

**Example:**

```html
background-color: transparent;
background-color: navy;
background-color: #05ffb0;
background-color: rgb(125, 125, 255);
```

[/slide]