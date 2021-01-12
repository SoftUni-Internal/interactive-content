[slide]

# Summary

In this lesson you learned about:

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

- What is `this`?

- Usages of `this` Keyword

- `this` in functions

- Explicit binding

- Internal object properties
[/slide]