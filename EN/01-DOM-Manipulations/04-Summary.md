[slide hideTitle]

# Summary

## In this lesson we learned:

- Event Loop
- Event Types: `document.addEventListener('click', getEventType);`
- Event Object Properties and Methods
    - preventDefault: `event.preventDefault();`
    - stopPropagation: `event.stopPropagation();`
- Handling Events
    - Attach
    ```js
    button.addEventListener("click", () => {
    console.log("Button clicked.");
    });
    ```
    - Remove
     ```js
    button.removeEventListener("click", () => {
    console.log("Button event listener removed.");
    });
    ```
    
## In the next lesson we will learn:

- What `this` is

- Some usages of the `this` keyword

- How to use `this` in functions

- Explicit binding

- Internal object properties
[/slide]