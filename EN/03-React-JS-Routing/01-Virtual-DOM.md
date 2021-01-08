# Virtual DOM

[slide]

# What is Virtual DOM?

The **virtual DOM** is a representation of the real DOM, which is kept in the browser.

This React concept is kept in the memory by the **ReactDOM** library.

ReactDOM library syncs the real DOM with the virtual one.

The React elements are associated with **Virtual DOM** they represent the user interface.

Generally, React holds track of all components in the Virtual DOM.

When we change a component in the virtual DOM, we compare it with the real one using the **diffing algorithm**.

When this algorithm returns what is updated, react knows which part to modify.

With React, we have **declarative** syntax.

With this syntax, we only need to describe the result, and it will be shown in the browser.

ReactDOM also keeps the **order** of the operations.

[/slide]
