# Z index

[slide]

# Z index

[vimeo-video]
[stream language="EN" videoId="431760619" default /]
[/video-vimeo]

`z-index` defines the order of the elements on the **z-axis**.

It only works on **positioned** elements (anything apart from static).

If the element has **greater** stack order then it is always **in front** of an element with a lower stack order.

The following values of `z-index` are possible:
* `auto` - Sets the stack order **equal to its parents**. This is **default**;
* \<number> - Sets the **stack order** of the element. Negative numbers are **allowed**.

The order is defined by the **order in the HTML** code:
* First in the code goes behind;
* Last in the code goes in front.

**Example:**

[html]
<p class="codepen" data-height="404" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="RwWqQPZ" style="height: 404px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="z-index">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/RwWqQPZ">
  z-index</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

## Positive Z index

[vimeo-video]
[stream language="EN" videoId="431760631" default /]
[/video-vimeo]

The `z-index` value is relative to the other ones.

The target element is moved in **front** of its siblings.

**Example:**

[html]
<p class="codepen" data-height="406" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="bGVQLpx" style="height: 406px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="z-index:1">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/bGVQLpx">
  z-index:1</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

## Negative Z index

[vimeo-video]
[stream language="EN" videoId="431760668" default /]
[/video-vimeo]

For `z-index` you can use **negative** values.

The target element is moved **behind** its siblings.

**Example:**

[html]
<p class="codepen" data-height="414" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="jObQZMd" style="height: 414px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="z-index:-1">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/jObQZMd">
  z-index:-1</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[vimeo-video]
[stream language="EN" videoId="431760690" default /]
[/video-vimeo]

[/slide]