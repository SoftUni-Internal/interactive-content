# Simple Templating

[slide hideTitle]
# How does Templating work?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06.JS-Applications-Templating/EN/Interactive-js-apps-templating-Simple-Templating-How-does-templating-work-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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