# Simple Templating

[slide]
# How does Templating work?
[vimeo-video]
[stream language="EN" videoId="497948726/d3414251b3" default /]
[stream language="RO" videoId="497948726/d3414251b3"  /]
[/video-vimeo]

In **templating**, each element of the user interface is stored in a **separate file**, called a **template**.

Every template contains **HTML** markup, defining the **structure of each element** and **data**, that is **displayed dynamically**.

A frequent practice is to use **double curly brackets**  as a **placeholder for the data**, which is typically retrieved from a database:

`<h1> Welcome, {{username}} </h1>`

The following example illustrates a simple Handlebars template:

`<p>Hello, I am {{name}} from {{city}} and I am {{years}} old.</p>`

When the page is **rendered** by the **templating engine**, `{{name}}`, `{{city}}` and `{{years}}` will be **replaced** with the corresponding **data**

[image assetsSrc="JS-Applications-templating-2.png" /]

When **multiple templates are combined**, they result in a **view**.
[/slide]