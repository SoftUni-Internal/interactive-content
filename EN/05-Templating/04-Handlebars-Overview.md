# Handlebars Overview

[slide hideTitle]

# What is Handlebars?

[vimeo-video]
[stream language="EN" videoId="497195006/8d0a49752d" default /]
[stream language="RO" videoId="497195006/8d0a49752d"  /]
[/video-vimeo]

**Handlebars** is a simple **templating language**, based on the Mustache specification.

[image assetsSrc="JS-Applications-templating-3.png" /]

**Handlebars templates** look like a regular text with embedded Handlebars **expressions**.

Handlebars **expressions** are the **basic unit** of a Handlebars **template**.

We will discuss expressions in-depth later.

# Handlebars Installation and Using

There are a few ways to install Handlebars:

## Installing Handlebars using the terminal

To install Handlebars through a **terminal** we need to use the **Node Package Manager**\(NPM\), which comes bundled with **Node.js**

After opening a terminal in our **project directory** we type:

`npm install handlebars`

You can then use Handlebars using `require` in the target file:

`const Handlebars = require("handlebars");`


## Including Handlebars in your markup

If you want to use the **precompiler**, it is recommended to use one of the **browsers builds** of **Handlebars**, located in `node_modules/handlebars/dist/`.

To do so, you have to **include Handlebars in your HTML, using the script tag**, as follows:

```
<script 
    src="node_modules/handlebars/dist/handlebars.js"
</script>
```

You can also use Handlebars **without installing it locally**, with the help of an online CDN:

```
<script 
    src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js"
</script>
```


[/slide]

[slide hideTitle]

# Expressions

[vimeo-video]
[stream language="EN" videoId="497195032/770428affc" default /]
[stream language="RO" videoId="497195032/770428affc"  /]
[/video-vimeo]

Handlebars expressions use the **double curly brace notation** we discussed earlier: 

`Hello {{name}}`

When the template is **executed**, these expressions are **replaced** with the **values** from an input source (for example a **database**).


**Anything between double curly braces will be evaluated.**

You can **dispatch a template** to the **browser** by including it in a `<script>` tag:

```
<script id="profile-template" type="text/x-handlebars-template">
  <div class="greeting">
    <h1>Hello, {{username}}</h1>
  </div>
</script>
```

The **type** attribute **must equal** `text/x-handlebars-template`, otherwise the browser **may not display** your template properly.

You can use any `id` you want, as long as it is **unique**.

[/slide]


[slide hideTitle]

# Compilation and Execution

[vimeo-video]
[stream language="EN" videoId="497194700/1df29e2fa4" default /]
[stream language="RO" videoId="497194700/1df29e2fa4"  /]
[/video-vimeo]

## Compilation

Templates in Handlebars are **compiled** using the `compile()` method, which receives a **template** as a parameter:

``` js
let source = document.getElementById("profile-template").innerHTML;
let template = Handlebars.compile(source)
```

In this example we select `profile-template` element using the DOM `getElementById` method and save its inner HTML in the `source` variable.

Then, we compile the template by calling `compile` with the `source` variable.


## Execution

**Compiled templates are functions**, which can receive the needed data as **variables**.

To get the HTML result of evaluating a Handlebars template, we **call it by passing in an object** with the needed **variables**:

``` js
let context = { username: "johndoe123"};
let html = template(context);
```

The resulting output looks like this:

```
<div class="greeting">
  <h1>Hello, johndoe123</h1>
</div>
```


[/slide]


[slide hideTitle]

# Hello Handlebars
[vimeo-video]
[stream language="EN" videoId="497950510/b2f8f5ae83" default /]
[stream language="RO" videoId="497950510/b2f8f5ae83"  /]
[/video-vimeo]

This is a brief example of Handlebars in action.

```
<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <title>Hello Handlebars</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js" </script>
</head>
<body>
<div id="app"></div>
<script>
  let template = Handlebars.compile('<h1>Hello {{name}}</h1>');
  let container = document.getElementById('app');
  container.innerHTML = template({ name: 'Handlebars' });
</script>
</body>
</html>
```

Right after the `title` in our `head` section, we must include our **handlebars distribution**.

In this case, we retrieve Handlebars from an **online CDN**.

In the `body` tag we have declared a `div` with the `app` tag. 

This is the place where our **templating engine** will output the compiled **templates** when we invoke them.

We can either **import** our JavaScript logic from an **external file** or put it **directly into our HTML**, using the `<script>` tag.

For this example, we will use the latter.

First, we compile our simple **HTML template** with the help of the `Handlebars.compile()` method.

`let template = Handlebars.compile('<h1>Hello {{name}}</h1>');`

Then, we specify the HTML **element**, in which we want to **render our template**.

`let container = document.getElementById('app');`

Lastly, we **call the compiled template** with our variables and save the output in the element:

`container.innerHTML = template({ name: 'Handlebars' });`

[/slide]


[slide hideTitle]

# For-Loops
[vimeo-video]
[stream language="EN" videoId="497950425/888afea457" default /]
[stream language="RO" videoId="497950425/888afea457"  /]
[/video-vimeo]

Using the `#each` **special helper**, we can iterate through an array:

```
<ul class="people_list">
  {{#each people}}
    <li>{{firstName}} {{lastName}}, {{age}}</li>
  {{else}}
    <p class="empty">There are no people</p>
{{/each}}
</ul>
```

As you can see in the above example, we can also add the `{{else}}` section.

It will be **rendered** in case the given **array** is **empty**.

[/slide]

[slide hideTitle]
# Conditional Statements
[vimeo-video]
[stream language="EN" videoId="497950460/b05f75e27e" default /]
[stream language="RO" videoId="497950460/b05f75e27e"  /]
[/video-vimeo]

Similar to JavaScript, you can also use **conditional statements** in your **template**.

The `#if` helper, followed by a condition is used to achieve this:

```
<div class="entry">
{{#if person}}
<h1>{{firstName}} {{lastName}}</h1>
{{/if}}
{{else}}
    <p class="empty">This person does not exist in our database</p>
</div>
```

 If its argument returns `false`, `undefined`, `null`, `""`, `0`, or `[]`, then Handlebars will render the `{{else}}` block, **if such is declared**.



[/slide]

[slide hideTitle]

# Partials and HTML Escaping

[vimeo-video]
[stream language="EN" videoId="497194727/a51e939ff0" default /]
[stream language="RO" videoId="497194727/a51e939ff0"  /]
[/video-vimeo]

Handlebars allows us to **reuse templates** through **partials**. 

**Partials** are normal Handlebars **templates** that can be called directly by **other templates**.

To use a partial, we must register it using the `Handlebars.registerPartial()` method:

`Handlebars.registerPartial('myPartial', '{{newVar}}');`

Partials may be precompiled with a new template, which is passed a second parameter.

Calling a partial is done by double curly braces,  preceding the name with a `>` sign:

`{{> myPartial }}`

# HTML Escaping

As we learned earlier, **double curly braces** are used to **declare** Handlebars **expressions**.

In Handlebars, the values returned by the `{{expression}}` are HTML\-escaped. 

For example, if the expression contains `&`, then the returned HTML-escaped output is generated as `&amp;`. 

If you do not want Handlebars to **escape a value**, you can use the "triple-stash", `{{{`:

`{{{Any symbol inside here will not be escaped}}}`

[/slide]

[slide hideTitle]
# Templating: Demo

[vimeo-video]
[stream language="EN" videoId="497194803/b312568d8a" default /]
[stream language="RO" videoId="497194803/b312568d8a"  /]
[/video-vimeo]

[/slide]