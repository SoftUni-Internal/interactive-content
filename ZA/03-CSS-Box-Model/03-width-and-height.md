# Width and Height

[slide]

## Width

[vimeo-video]
[stream language="EN" videoId="431760011" default /]
[stream language="RO" videoId="446432573" /]
[/video-vimeo]

Block elements have **width** and **height**.

The `width` property defines the width of an element.

The width of an element excludes **paddings**, **borders**, or **margins**!

The values of this property are:
* `auto` - The browser calculates the width. Default value.	
* **\<length>** -	Defines the width in **px**, **cm**, etc.	
* **%** - Defines the width in percent of the containing block.

## Max-Width

The `max-width` property defines the maximum width of an element.

The default value of this property is `none`.

## Min-Width

The `min-width` property defines the minimum width of an element.

The default value of this property is `0`.

**Note**: The `min-width` and `max-width` properties override the `width` property.

**Example:**
[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="bGVxGVB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="width">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/bGVxGVB">
  width</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]

[slide]

## Height

[vimeo-video]
[stream language="EN" videoId="431760050" default /]
[stream language="RO" videoId="446432580" /]
[/video-vimeo]

The `height` property defines the height of an element.

The height of an element excludes **paddings**, **borders**, or **margins**!

The values of this property are:
* `auto` - The browser calculates the height. Default value.	
* **\<length>** -	Defines the height in **px**, **cm**, etc.	
* **%** - Defines the height in percent of the containing block.

## Max-Height

The `max-height` property defines the maximum height of an element.

The default value of this property is `none` and the other values are **the same as the height property values**.

In the case of **larger content**, as the maximum height is, the content will **overflow**.

In the case of **smaller content**, as the maximum height is, the max-height property has **no effect**.

## Min-Height

The `min-height` property defines the minimum height of an element.

The default value of this property is `0`.

If the content is **smaller than the minimum height**, the minimum height will be **applied**.

If the content is **larger than the minimum height**, the min-height property has **no effect**.

**Note**: The `min-height` and `max-height` properties override the `height` property.

**Example:**
[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="vYNzYJO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="height">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/vYNzYJO">
  height</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]