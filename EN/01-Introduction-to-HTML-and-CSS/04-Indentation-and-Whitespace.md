[slide]
# Indentation and Whitespace

## What is whitespace?
Whitespace is any string of text composed only of **spaces**, **tabs** or **line breaks**.

These characters allow you to **format your code** in a way that will make it easily **readable** by yourself and other people. 

In fact, much of our source code is full of these whitespace characters, and we only tend to get rid of it in a production build step to reduce code download sizes.

## HTML ignores whitespace

In the case of HTML, whitespace is largely **ignored** - whitespace in between words is treated as a single character, and whitespace at the start and end of elements and outside elements is ignored. 

Let's look at this example:

[html]
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="atanas-atanasov-the-scripter" data-slug-hash="ExVxZeN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ExVxZeN">
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

This is so that whitespace characters **don't impact** the layout of your page. 

If we need space around and inside elements, we can do that with **CSS**.
[/slide]