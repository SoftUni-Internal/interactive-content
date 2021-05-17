# Motoare de Șablonare
[slide hideTitle]

# Motor de Șablonare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-11-12-Templating-Engine-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când este utilizată **șablonarea**, fiecare element al interfeței cu utilizatorul este stocat într-un **fișier separat** (un **șablon**).

[image assetsSrc="server-side-rendering(1).png" /]

Un **motor de șablonare** ne permite să folosim aceste **fișiere șablon** în aplicația noastră. 

**În timpul rulării**, motorul de șablonare **înlocuiește variabilele** din fișierele șablon cu **valori** propiu-zise.

Aceste valori sunt **inserate** prin **randare**.

Combinarea **mai multor șabloane** formează un **layout**.

Această abordare creează un mod mai **ușor** și mai **eficient** de a de a proiecta pagini HTML.

[/slide]

[slide hideTitle]

# Motoare de Șablonare Populare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-13-14-Templating-Engines-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există multe dipuri diferite de motoare de șablonare, fiecare cu un set distinct de caracteristici:

## Framework-uri 

- **React**
    * librărie Javascript bazată pe componente
    * permite o flexibilitate mai mare
    * comunitate mare de programatori

- **Vue**
    * combină cele mai bune caracteristici din React și Angular
    * pune accentul pe simplitate și flexibilitate
    * grad înalt de extensibilitate și personalizare 

- **Angular**
    * un framework Javascript
    * mai dificil de învățat decât celelalte două
    * necesită cunoștințe de TypeScript


## Pachete Independente

- **Handlebars**
    * șabloane logic-less
    * acces facil la helperi globali și variabile
    * necesită Javascript pe parte de server \(**Node.js**, de exemplu\) pentru randarea pe partea de server

- **Lit-html**
    * construit pe literali etichetați de tip șablon
    * permite randarea și actualizarea parțială a șabloanelor
    * compatibil cu majoritatea browserelor

În această lecție vom discuta despre lit-html mai în detaliu.

- **Componente Web**
    * o suită de diferite tehnologii
    * învățați mai multe [aici](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

[/slide]
