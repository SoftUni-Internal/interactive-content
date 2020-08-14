# Media Queries

[slide]
# Media Queries

## What is Media Query?

[vimeo-video]
[stream language="EN" videoId="431768679" default /]
[/video-vimeo]

Media Queries are a feature of CSS that enables webpage content to **adapt** to different screen sizes and resolutions.

They are a fundamental part of **responsive web design** and are used to customize the appearance of websites for multiple devices.

The example bellow means, that if the browser window is 550px or smaller, the background color will be changed to blue, and the text color will be red.

**Example:**
```html
@media only screen and (max-width: 550px) {
  body {
    background-color: blue;
    color: red;
  }
}
```

[/slide]

[slide]

## How Can be Used Media Queries?

[vimeo-video]
[stream language="EN" videoId="431768717" default /]
[/video-vimeo]

Media queries in CSS3 look at the **capability** of the device.

Media queries can be used to check many things, such as:
* **width** and **height** of the **viewport**;
* **width** and **height** of the **device**;
* orientation (is the tablet/phone in **landscape** or **portrait** mode?);
* **resolution**.

[/slide]

[slide]

## Media Query Syntax

[vimeo-video]
[stream language="EN" videoId="431768746" default /]
[/video-vimeo]

A media query consists of a **media type** and can contain one or more **expressions**, which resolve to either true or false.

**Example:**
```html
@media not|only mediatype and (media-feature-rule) {
  CSS rules goes here
}
```

The result of the query is **true** if the specified media type matches the type of device the document is being displayed on.

Unless you use the **not** or **only** operators, the media type is **optional** and all type will be implied.

[vimeo-video]
[stream language="EN" videoId="431769287" default /]
[/video-vimeo]

A **media type**, which tells the browser what kind of media this code is for (e.g. print, or screen).

A **media feature rule** is a test that must be passed for the contained CSS to be applied.

A set of **CSS rules** that will be applied if the test passes and the media type is correct.

[/slide]

[slide]

## Typical Device Breakpoints

In our days, there are many types of screens and devices with different heights and widths.

It is very hard (almost impossible) to create an exact breakpoint for each device.

To keep things simple you could target five groups:

**Example:**
```html
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .body {background: yellow;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .body {background: red;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .body {background: orange;}
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .body {background: green;}
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .body {background: blue;}
}
```

[/slide]
