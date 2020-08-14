# Clearing the Float

[slide]

# Clearing the Float

[vimeo-video]
[stream language="EN" videoId="431760937" default /]
[/video-vimeo]

Float’s sister's property is `clear`.

An element that has the `clear` property set on it will **not move up adjacent** to the float, like the float desires, but will move itself **down past the float**.

The `clear` property has the following values:

* `none` - **Allows** floating elements on **both sides**. This is the **default** value;
* `left` - **No** floating elements allowed **on the left side**;
* `right`- **No** floating elements allowed **on the right side**;
* `both` - **No** floating elements allowed **on both left and right** sides.

**Note**: The most common use of the `clear` property is after you have used a `float` property on an element.

[/slide]

[slide]
# Clear examples

[vimeo-video]
[stream language="EN" videoId="431760985" default /]
[/video-vimeo]

# `clear: none;`

When `clear: none;` is used, the element is **not moved down** to clear past floating elements.

**Example:**
[html]
<p class="codepen" data-height="377" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="YzyRpoj" style="height: 377px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="clear-none">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/YzyRpoj">
  clear-none</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

# `clear: left;`

When `clear: left;` is used, the element is **moved down** to clear past **left** floats.

**Example:**
[html]
<p class="codepen" data-height="389" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="XWmyNvM" style="height: 389px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="clear-left">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/XWmyNvM">
  clear-left</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[vimeo-video]
[stream language="EN" videoId="431761017" default /]
[/video-vimeo]

# `clear: right;`

When `clear: right;` is used, the element is **moved down** to clear past **right** floats.

**Example:**
[html]
<p class="codepen" data-height="416" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="GRpwrgz" style="height: 416px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="clear-right">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/GRpwrgz">
  clear-right</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[vimeo-video]
[stream language="EN" videoId="431760951" default /]
[/video-vimeo]

# `clear: both;`

When `clear: both;` is used, the element is **moved down** to clear past **both** left and right floats.

**Example:**
[html]
<p class="codepen" data-height="421" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="mdeQRJv" style="height: 421px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="clear-both">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/mdeQRJv">
  clear-both</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]