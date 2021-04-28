# Templating Engines
[slide hideTitle]

# Templating Engine

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-11-12-Templating-Engine-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In **templating**, each element of the user interface is stored in a **separate file**, called a **template**.

[image assetsSrc="server-side-rendering(1).png" /]

A **templating engine** enables us to use these **template files** in our application. 

**At runtime**, the templating engine **replaces variables** in the template files with actual **values**.

These values are **inserted** via **rendering context**.

Combining **multiple templates** results in a **layout**.

This approach enables an **easier** and more **efficient** way to design an HTML page.

[/slide]

[slide hideTitle]

# Popular Templating Engines

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-13-14-Templating-Engines-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are many different types of templating engines, each with a distinct set of features:

## Frameworks  

- **React**
    * component-based JavaScript library
    * enables more flexibility
    * large community of developers

- **Vue**
    * combines the best features from React and Angular
    * focuses on simplicity and flexibility
    * highly customisable and extensible

- **Angular**
    * a JavaScript framework
    * much steeper learning curve
    * requires you to be familiar with TypeScript


## Standalone Packages

- **Handlebars**
    * logic\-less templates
    * easy access to global helpers and variables
    * requires server side JavaScript \(**Node.js**, for example\) to render on the server

- **Lit-html**
    * built on tagged template literals
    * allows rendering and partial updating of templates
    * compatible with all major browsers

In the remainder of this lesson, we will discuss lit-html in more depth.

- **Web Components**
    * a suite of different technologies
    * learn more [here](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

[/slide]