[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-36-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- The event loop
- Event types: `document.addEventListener('click', getEventType);`
- Event object - properties and methods
    - preventDefault: `event.preventDefault();`
    - stopPropagation: `event.stopPropagation();`
- Handling events
    - attaching an event listener
    ```js
    button.addEventListener('click', () => {
    console.log('Button clicked.');
    });
    ```
    - removing an event listener
     ```js
    button.removeEventListener('click', () => {
    console.log('Button event listener removed.');
    });
    ```
    
## In the next lesson you will learn:

- What `this` is

- Some usages of the `this` keyword

- How to use `this` in functions

- Explicit binding

- Internal object properties
[/slide]