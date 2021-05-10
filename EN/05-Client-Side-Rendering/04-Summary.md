[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-29-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Client-side rendering is prevalent in the modern web
    * it enables instant user interaction
    * saves data by fetching dynamic content

- Templates make our HTML modular
    * this results in less code repetition and less data to load
    * they speed up and simplify the development process

```js
html`<h1>I am ${user.name} and my favorite artists are ${user.favoriteArtists.join(', ')}.</h1>`
```

- Lit-html offers many functionalities
    * effective templates
    * it can be extended using directives

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

- Single page applications
- Navigation and history​
- Routing with page.js
    * hash-based​
    * push-based​ 

[/slide]
