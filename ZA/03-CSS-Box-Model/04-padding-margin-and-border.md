# Margin, Padding and Border

[slide]

# Margin

[vimeo-video]
[stream language="EN" videoId="431760081" default /]
[stream language="RO" videoId="446432575" /]
[/video-vimeo]

[vimeo-video]
[stream language="EN" videoId="431760107" default /]
[stream language="RO" videoId="446432576" /]
[/video-vimeo]

`margin` defines the space outside the element.

It is a **short hand** property for the following properties:
* `margin-top`
* `margin-left`
* `margin-bottom`
* `margin-right`


The values of the margin property are:
* \<length> - Specifies a margin in **px, pt, cm,** etc. Default value is 0. **Negative** values are allowed;
* `%` - Specifies a margin in **percent of the width** of the containing element.

The following two examles make the same thing:

**Example:**
```html
div {
  margin-top: 50px;
  margin-right: 0;
  margin-bottom: 40px;
  margin-left: 10px;
}
```

**Example:**
```html
div {
	margin: 50px 0 40px 10px;
}
```

**Example:**
[html]
<p class="codepen" data-height="318" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="vYNQbVR" style="height: 318px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="margin">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/vYNQbVR">
  margin</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]

[slide]

# Padding

[vimeo-video]
[stream language="EN" videoId="431760133" default /]
[stream language="RO" videoId="446432578" /]
[/video-vimeo]

`padding` defines the space between the content and the border.

It is a **short hand** property for the following properties:
* `padding-top`
* `padding-left`
* `padding-bottom`
* `padding-right`

The values of the padding property are:
* **\<length>** - Specifies the padding in **px, pt, cm,** etc. Default value is 0.
* `%` - Specifies the padding in **percent of the width** of the containing element

The following two examples make the same thing:

**Example:**
```html
div {
  padding-top: 30px;
  padding-right: 0;
  padding-bottom: 30px;
  padding-left: 0px;
}
```

**Example:**
```html
div {
	padding: 30px 0;
}
```

**Example:**
[html]
<p class="codepen" data-height="332" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="GRpwzwB" style="height: 332px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="padding">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/GRpwzwB">
  padding</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]

[slide]

# Border

[vimeo-video]
[stream language="EN" videoId="431759721" default /]
[stream language="RO" videoId="446432579" /]
[/video-vimeo]

`border` is a **short hand** property for the following properties:
* `border-width` - defines the **width** of the border (`1px`, `3%`, etc.);
* `border-style` - defines the **style** of the border (`solid`, `dotted`, `dashed`, etc.);
* `border-color` - defines the **color** of the border( `red`, `#fff`, `rgb(225, 0, 158)`);

`border-style` has the following values:
* `none` - Default value. Defines no border;
* `hidden` - The same as "none", except in border conflict resolution for table elements;	
* `dotted` - Defines dotted border;
* `dashed` - Defines dashed border;
* `solid` - defines solid border;
* `double` - Defines double border;
* `groove` - defines 3D grooved border. The effect depends on the border-color value;
* `ridge` - defines 3D ridged border. The effect depends on the border-color value;
* `inset` - defines 3D inset border. The effect depends on the border-color value;
* `outset` - defines 3D outset border. The effect depends on the border-color value.

**Example:**
[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="dyYqyBM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="border-color">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/dyYqyBM">
  border-color</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

**Example:**
[html]
<p class="codepen" data-height="309" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="jObvENv" style="height: 309px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="border-properties">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/jObvENv">
  border-properties</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

# Cursor

[vimeo-video]
[stream language="EN" videoId="431759758" default /]
[stream language="RO" videoId="446432582" /]
[/video-vimeo]

`cursor` - Sets the mouse cursor when hovering the element.

**Example:**
```html
p {
  cursor: pointer;
}
div {
  cursor: move;
}
```

**Example**
[html]
<p class="codepen" data-height="300" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="mdeQvvj" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="cursor">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/mdeQvvj">
  cursor</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]