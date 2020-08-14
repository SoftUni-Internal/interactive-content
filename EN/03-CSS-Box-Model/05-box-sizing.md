# Box Sizing

[slide]

# Box-sizing Property

[vimeo-video]
[stream language="EN" videoId="431759802" default /]
[stream language="RO" videoId="446432583" /]
[/video-vimeo]

`box-sizing` sets how the total width and height of an element is calculated. 

This property defines if the padding and border are included or excluded in the total width/height.

* `content-box` is the **initial** and **default** value. The width and height properties include the content, but they **don't include** the padding, border and margin;
* `border-box` The width and height properties **include** content, padding and border.

**Example:**
```html
html {
  box-sizing: border-box;
}
```
[/slide]

[slide]
# Universal Box-sizing

[vimeo-video]
[stream language="EN" videoId="431759846" default /]
[stream language="RO" videoId="446432584" /]
[/video-vimeo]

The box-sizing **Reset** takes care of the box-sizing of every element by setting it to **border-box** using a universal CSS selector.

Save your **time** and don't write the same thing **again-and-again**.

Set the **"universal box-sizing"** with inheritance:

**Example:**
```html
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

[html]
<p class="codepen" data-height="436" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="pojQGMJ" style="height: 436px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="box-sizing">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/pojQGMJ">
  box-sizing</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]