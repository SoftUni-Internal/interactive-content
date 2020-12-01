# HTML Common Elements

[slide]
# Video

[vimeo-video startTimeInSeconds="688" endTimeInSeconds="1692"]
[stream language="EN" videoId="424672446" default /]
[stream language="RO" videoId="424672683"  /]
[/video-vimeo]

[/slide]


[slide]
# Headings

The HTML `<h1>...<h6>` elements represent six levels of section headings. 

`<h1>` is the highest section level and `<h6>` is the lowest.

[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="QWjWpEj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="QWjWpEj">
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]

[slide]
# Paragraphs

The HTML `<p>` element represents a paragraph. Browsers automatically add some space before and after each `<p>` element. The margins can be modified with **CSS**.

HTML paragraphs can be used for **grouping related content**, such as images.

[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="RwWwpov" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RwWwpov"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]
[/slide]

[slide]
# Tag Attributes

Tags in HTML have **attributes**. These are additional values that provide **additional information** about an element.

Attributes are always specified in the st**art tag**.

Attributes usually come in **name/value pairs** like: `name="value"`.

[html]
<p class="codepen" data-height="186" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="abvbJWq" style="height: 186px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="abvbJWq"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

You will learn more about links and the `<a>` tag in the next page.
[/slide]

[slide]
# Hyperlinks

Links allow users to click their way from **page to page**. When you move the mouse over a link, the mouse arrow will turn into a **little hand**.

**Note**: A link does not have to be text. It can be an image or any other HTML element.

## External Hyperlinks
External pages can be referenced with an URL to the web page.

[html]
<p class="codepen" data-height="186" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="abvbJWq" style="height: 186px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="abvbJWq"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

The `href` attribute specifies the destination address of the link - softuni.org in the example. 

The link text is the **visible part** - `Go to SoftUni home page!` in the example.

## Local Links
The link will lead to an element within this webpage:

```html
<h1 id="exercises">Exercises</h1>

See the <a href="#exercises"></a>
```

## New Tab Hyperlink

The `target` attribute specifies where to open the linked document.

The `target` attribute can have one of the following values:
- `_blank` - Opens the linked document in a new window or tab;
- `_self` - Opens the linked document in the same tab (this is the default);
- `_top` - Opens the linked document in the full body of the window.

This example will open the linked document in a new tab:
[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="abvbJRj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="abvbJRj">
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

## Same Domain Hyperlink
Clicking the link will navigate the user to another page **within the website's domain**.

```html
<a href="./js-dev>">JS Web Developer</a>
```
[/slide]

[slide]
# Images

The HTML `<img>` element embeds an image into the document.
```html
<img src="softuni.png" alt="SoftUni Logo">
```
**NOTE**: `softuni.png` is a local file in the example.

The above example shows the usage of the `<img>` element:
- The `src` attribute is **required**, and contains the **path to the image**.
- The `alt` attribute holds a text description of the image, which isn't mandatory but is incredibly useful since screen readers read this description out to their users so they know what the image means. 
[/slide]

[slide]
# Lists
HTML lists are used to present a list of information in a well-formed and semantic way. 

There are three different types of list in HTML and each one has a specific purpose and meaning:
- Unordered HTML List
- Ordered HTML List

## Ordered HTML List
The HTML `<ol>` element represents an ordered list of items - typically rendered as a numbered list.

Each list item is represented by the `<li>` tag.

[html]
<p class="codepen" data-height="208" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="bGVGWgR" style="height: 208px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="bGVGWgR"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

## Unordered HTML List
The HTML `<ul>` element represents an unordered list of items. Each list item is represented by the `<li>` tag.

The list items will be marked with **bullets** (small black circles) by default:
[html]
<p class="codepen" data-height="238" data-theme-id="39135" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="YzyzVpP" style="height: 238px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="YzyzVpP"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]