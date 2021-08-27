# Server-Side Rendering with React

[slide hideTitle]

# Client-Side versus Server-Side

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-17-18-client-side-vs-server-side-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The main difference between Server and Client-Side Rendering lies in where the application is being rendered.

## Server-Side Rendering

**Server-side rendering**, as the name implies, takes our JavaScript code and renders it to static HTML and CSS **on the server** before sending it to the client.

It is the more commonly used approach for rendering a page, outside React.

In short, server-side rendering works as follows:

- A user tries to access a website, [most often by using a browser](https://en.wikipedia.org/wiki/User_agent)
   
- The server prepares the HTML templates and compiles them

- This compiled HTML is sent to the client's user agent

- The browser downloads the HTML, making the page visible on the end\-user's browser

- Lastly, the browser downloads the scripts, and by running them, it enables user interaction

## Client-Side Rendering

As opposed to its counterpart, **client-side rendering** does most of the work on the client's machine.

True **Single Page Applications** use client-side rendering and, as a result, it is the **default rendering method in React**, as well as Angular and Vue.

Client-side rendering works in the following order:

- The browser requests the website

- Static files like HTML and CSS are served to the client with the help of a Content Delivery Network \(CDN\)

- The user agent downloads the HTML and JavaScript, while the user sees a loading animation

- Once the JavaScript is fetched, using AJAX it requests an API, continuously fetching dynamic content, which is then rendered

- Once the needed content is downloaded, the browser renders our components by using DOM Processing

[/slide]

[slide hideTitle]

# Server-Side Rendering

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-17-19-server-side-rendering-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Some of the benefits of **server-side rendering** include:

- **Shorter page load time** which results in a better user experience

- Users with slow internet connections benefit from **less waiting time**

- It **assists in loading the page** when the user has an outdated device

[/slide]

[slide hideTitle]

# When to use Server-Side Rendering?

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-20-when-should-you-use-ssr-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Search Engine Optimization

Server-side rendering plays an important role in **search engine optimization** \(SEO\).

Search engines like **Google** tend to favor websites that **load faster**.

This results in your webpage appearing **closer to the top**, drastically improving your **visitor count** and engagement.

## Performance Improvements

When a user requests a page, they do not have to wait for JavaScript to **load** before the content is displayed, since the components have already been **processed on the server**.

This results in a **better user experience**, but application interactivity will only occur when JavaScript and React are **loaded properly**.

However, if the server is **busy**, server-side rendering can also have a **negative** effect on performance.
[/slide]
