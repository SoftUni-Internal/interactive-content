# Position Property

[slide]

# Position Property

[vimeo-video]
[stream language="EN" videoId="431761037" default /]
[/video-vimeo]

The `position` property specifies the type of positioning method used for an element:
* Static;
* Relative;
* Absolute;
* Fixed;
* Sticky.

When the `position` property is set, the elements are positioned using the **top, bottom, left,** and **right** properties. 
 
These properties also work differently **depending on the position value**.

[/slide]

[slide]

# Position Static

[vimeo-video]
[stream language="EN" videoId="431761060" default /]
[/video-vimeo]

`position: static;` is the **default** state of every element.

It just means: 'put the element into its **normal position** in the document layout flow'.

**Note**: It **will not react** to the following properties: top, bottom, left, right, z-index.

**Example:**
[html]
<p class="codepen" data-height="206" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="eYpQvdL" style="height: 206px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="position-static">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/eYpQvdL">
  position-static</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]

[slide]

# Position Relative

[vimeo-video]
[stream language="EN" videoId="431761082" default /]
[/video-vimeo]

`position: relative;` is very similar to static positioning, **except** that once the positioned element has taken its place, you can then modify its final position with the **positional properties** – left, right, top, bottom, z-index.

It also makes the element **positioned**: it will act as **anchor** point for the absolutely positioned block.

When the position is set to **relative**, the following properties can be set:

[vimeo-video]
[stream language="EN" videoId="431761492" default /]
[/video-vimeo]

[vimeo-video]
[stream language="EN" videoId="431760468" default /]
[/video-vimeo]

* `top` - defines the position of the element according to its **top** edge. The element will move **downwards** by the amount defined by the **top** value;

[vimeo-video]
[stream language="EN" videoId="431761410" default /]
[/video-vimeo]

[vimeo-video]
[stream language="EN" videoId="431761435" default /]
[/video-vimeo]

* `right` - defines the position of the element according to its **right** edge. The element will move **left** by the amount defined by the **right** value;

[vimeo-video]
[stream language="EN" videoId="431761241" default /]
[/video-vimeo]

[vimeo-video]
[stream language="EN" videoId="431761267" default /]
[/video-vimeo]

* `bottom` - defines the position of the element according to its **bottom** edge. The element will move **upwards** by the amount defined by the **bottom** value;

[vimeo-video]
[stream language="EN" videoId="431761368" default /]
[/video-vimeo]

[vimeo-video]
[stream language="EN" videoId="431761390" default /]
[/video-vimeo]

* `left` - defines the position of the element according to its **left** edge. The element will move **right** by the amount defined by the **left** value.

**Example:**
[html]
<p class="codepen" data-height="352" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="mdeQBLK" style="height: 352px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="position-relative-t">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/mdeQBLK">
  position-relative-t</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

**Example:**
[html]
<p class="codepen" data-height="338" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="MWazErW" style="height: 338px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="position-relative-l">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/MWazErW">
  position-relative-l</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]

[slide]

# Position Absolute

[vimeo-video]
[stream language="EN" videoId="431761110" default /]
[/video-vimeo]

When `position: absolute;` is used the element will **not remain** in the natural flow of the page, but it will **react** to the positional properties.

It will position itself according to the **closest positioned ancestor**.

Because it’s positioned, it will act as an **anchor point** for the absolutely positioned block.

When the position is set to **absolute**, the following properties can be set:

[vimeo-video]
[stream language="EN" videoId="431760499" default /]
[/video-vimeo]

* `top` - the element will position itself from the **top** of the first positioned **ancestor**;

[vimeo-video]
[stream language="EN" videoId="431761463" default /]
[/video-vimeo]

* `right` - the element will position itself from the **right** of the first positioned **ancestor**;

[vimeo-video]
[stream language="EN" videoId="431761306" default /]
[/video-vimeo]

* `bottom` - the element will position itself from the **bottom** of the first positioned **ancestor**;

[vimeo-video]
[stream language="EN" videoId="431761347" default /]
[/video-vimeo]

* `left` - the element will position itself from the **left** of the first positioned **ancestor**.

**Example:**
[html]
<p class="codepen" data-height="392" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="xxwQPZp" style="height: 392px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="position-absolute-r">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/xxwQPZp">
  position-absolute-r</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]

[slide]

# Position Fixed

[vimeo-video]
[stream language="EN" videoId="431761138" default /]
[/video-vimeo]

By `position: fixed;` the element will **not remain** in the natural flow of the page, but it will **react** to the positional properties.

It will position itself according to the **viewport**.

Because it’s positioned, it will act as an **anchor point** for the absolutely positioned block.

**Example:**
[html]
<p class="codepen" data-height="338" data-theme-id="39135" data-default-tab="css,result" data-user="softuni-inter" data-slug-hash="wvKQPra" style="height: 338px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="position-fixed">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/wvKQPra">
  position-fixed</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]

[slide]

# Position Sticky

[vimeo-video]
[stream language="EN" videoId="431761161" default /]
[/video-vimeo]

`position: sticky;` - the element is positioned based on the user’s **scroll position**.

A sticky element toggles between **relative** and **fixed**, depending on the scroll position.

It is positioned relative until a given offset position is met in the viewport – then it 'sticks' in place (like position: fixed).

[vimeo-video]
[stream language="EN" videoId="431761190" default /]
[/video-vimeo]

[vimeo-video]
[stream language="EN" videoId="431761211" default /]
[/video-vimeo]

**Example:**
[html]
<p class="codepen" data-height="300" data-theme-id="39135" data-default-tab="result" data-user="softuni-inter" data-slug-hash="abvQVPa" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="position-sticky">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/abvQVPa">
  position-sticky</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[/html]

[/slide]