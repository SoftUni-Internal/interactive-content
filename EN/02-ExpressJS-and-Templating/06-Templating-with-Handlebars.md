# Templating with Handlebars

[slide hideTitle]
# What is Handlebars?

**Handlebars** is a simple **templating language**, based on the Mustache specification.

**Handlebars templates** look like regular text with embedded Handlebars **expressions**.

## Expressions

Handlebars **expressions** are the **basic unit** of a Handlebars **template**.

They use the **double curly brace notation**:

```js
<body>
<p>My name is {{name}}</p>
</body>
```

When the template is **executed**, these expressions are **replaced** with the **values** from an input source (for example a **database**).

Handlebars enables the use of conditional statements and loops to iterate through data.

[/slide]

[slide hideTitle]
# Integration in Express

Here is a simple web server with a Handlebars integration:

```js
const express = require("express");
const app = express();
const port = 4000;

const handlebars = require("express-handlebars");

app.set("view engine", "handlebars");

app.engine("handlebars", handlebars({
    layoutsDir: __dirname + "/views/layouts",
}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home", {
        layout: "index"
    });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
```

We install Handlebars using NPM:

```js
npm install express-handlebars
```

Then, we need to require Handlebars on application or router level:

```js
const handlebars = require('express-handlebars');
```

We need to declare Handlebars as our view engine as follows:

```js
app.set('view engine', 'handlebars');
```

Using the `app.engine()` method, we define the location of our template files:

```js
app.engine("handlebars", handlebars({
    layoutsDir: __dirname + "/views/layouts",
}));
```

We locate the directory in which our static files are stored:

```js
app.use(express.static('public'));
```

Finally, we declare our homepage view:

```js
app.get("/", (req, res) => {
    res.render("home", {
        layout: "index"
    });
});
```

We pass our `home.hbs` file to the `render()` method.

The method serves the body of our page to the `index.hbs` container.

[/slide]

[slide hideTitle]
# For-Loops

Using the `#each` **special helper**, we can iterate through an array:

```js
const context = {
    people: [{
            name: 'Samantha',
            lastname: 'Smith'
            age: 26
        }, name: 'John', lastname: 'Peterson'
        age: 34
    }]
};
```

```js
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

Similar to JavaScript, you can also use **conditional statements** in your **template**.

The `#if` helper, followed by a condition is used to achieve this:

```js
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
# Partials

Handlebars allows us to **reuse templates** through **partials**.

**Partials** are normal Handlebars **templates** that can be called directly by **other templates**.

To use a partial, we must register it using the `Handlebars.registerPartial()` method:

```js
Handlebars.registerPartial('myPartial', '{{newVar}}');

```

Partials may be precompiled with a new template, which is passed a second parameter.

Calling a partial is done by double curly braces, preceding the name with a `>` sign:

```js
{{> myPartial }}
```

An example of a partial might be a menu, an info card, or any other element you would like to insert into another template.

Partials can be reused in as many locations as you require and are a good way to keep the template simpler without having to repeat the same code in different locations.

[/slide]

[slide hideTitle]
# HTML Escaping

As we learned earlier, **double curly braces** are used to **declare** Handlebars **expressions**.

In Handlebars, the values returned by the `{{expression}}` are HTML\-escaped.

For example, if the expression contains `&`, then the returned HTML-escaped output is generated as `&amp;`.

If you do not want Handlebars to **escape a value**, you can use the "triple-stash", `{{{`:

```js
{{{Any symbol inside here will not be escaped}}}
```

[/slide]

[slide hideTitle]
# Demo: Handlebars
[/slide]