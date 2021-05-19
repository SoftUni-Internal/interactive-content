[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-29-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Randarea pe partea de client este prevalentă în web-ul modern
    * facilitează interacțiunea instantă cu utilizatorul
    * economisește date prin preluarea conținutului dinamic

- Șabloanele fac ca HTML-ul nostru să fie modular
    * acest aspect are ca rezultat o repetitivitate redusă a codului și mai puține date care trebuie încărcate
    * accelerează și simplifică procesul de dezvoltare

```js
html`<h1>I am ${user.name} and my favorite artists are ${user.favoriteArtists.join(', ')}.</h1>`
```

- Lit-html oferă multe funcționalități
    * șabloane eficiente
    * poate fi extins folosind directive

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


## În lecția următoare veți învăța:

- Aplicații pe o singură pagină
- Navigare și istoric
- Rutare și page.js
    * hash-based​
    * push-based​ 

[/slide]
