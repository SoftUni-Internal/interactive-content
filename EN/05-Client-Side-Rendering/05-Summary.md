[slide hideTitle]

# Summary

## In this lesson you learned:

- Client-side rendering is prevalent in the modern web
    * enables instant user interaction
    * saves data by fetching dynamic content only

- Templates make our HTML modular
    * resulting in less repetitive code and fewer data to load
    * they speed up and simplify our development process

```js
html`<h1>I am ${user.name} and my favorite artists are ${user.favoriteArtists.join(', ')}.</h1>`
```

- Lit-html offers many functionalities
    * effective templates
    * can be extended using directives

```js
import {
    html,
    render
} from 'lit-html';

const greetingTemplate = () => {
    return html`
    <h1> Hello, JavaScript!</h1>
  `;
};

const element = document.querySelector('#root');

render(greetingTemplate(), element);

```


## In the next lesson you will learn:

- Single page application​s
- Navigation and history​
- Routing with page.js
    * hash-based​
    * push-based​ 

[/slide]
