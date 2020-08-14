# Float

[slide]

# What is float?

[vimeo-video]
[stream language="EN" videoId="431760758" default /]
[/video-vimeo]

CSS `float` is a property that forces any element to **float** (right, left, none, inherit) **inside its parent** body with the rest of the elements to wrap around it.

The element is **removed** from the **normal flow** of the page, though still remaining a part of the flow.

Usually, the float property is used to **wrap text around images**.

[vimeo-video]
[stream language="EN" videoId="431760789" default /]
[/video-vimeo]

The values of float property are:
* `float : right;` - floats the element to **right** of it's container;
* `float : left;` - floats the element to **left** of it's container;
* `float : none;` - it will **restrict** the element to float;
* `float : initial;` - the element remains to it's **default position**;
* `float : inherit;` - enables the element to **inherit** the property **from its parent** element.

[/slide]

[slide]

# Float examples

[vimeo-video]
[stream language="EN" videoId="431760812" default /]
[/video-vimeo]

## `float: none;`

When the `float: none;` is used, the image is displayed where **it occurs** in the text.

**Example:**
[html]
<p class="codepen" data-height="319" data-theme-id="39135" data-default-tab="html,result" data-user="softuni-inter" data-slug-hash="XWmyKYE" style="height: 319px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="float-none">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/XWmyKYE">
  float-none</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

## `float: left;`

When the `float: left;` is used, it defines that an image should **float to the left** in a text.

**Example:**
[html]
<p class="codepen" data-height="319" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="ZEbmOqv" style="height: 319px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="float-left">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/ZEbmOqv">
  float-left</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

## `float: right;`

When the `float: right;` is used, it defines that an image should **float to the right** in a text.

**Example:**
[html]
<p class="codepen" data-height="319" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="vYNQKQo" style="height: 319px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="float-right">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/vYNQKQo">
  float-right</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

## Floating multiple Elements

[vimeo-video]
[stream language="EN" videoId="431760831" default /]
[/video-vimeo]

When multiple elements have the same float property, they float adjacent one to another.

**Example:**
[html]
<p class="codepen" data-height="319" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="xxwQOvM" style="height: 319px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="float-multiple-imgs">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/xxwQOvM">
  float-multiple-imgs</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[vimeo-video]
[stream language="EN" videoId="431760901" default /]
[/video-vimeo]

**Note:** As float implies the use of the block layout, it modifies the computed value of the display values, in some cases:

| Specified value | Computed value |
| --- | --- |
| inline | block |
| inline-block | block |


[/slide]