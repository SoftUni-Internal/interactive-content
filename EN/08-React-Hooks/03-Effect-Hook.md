# Effect Hook

[slide hideTitle]

# What is UseEffect Hook?

The **Effect Hooks** allow us to have **side effects** in functional components.

We can use them to **fetch data**, do **subscriptions**, or **manually changing the DOM**.

**Effect Hooks** can influence other components, but it cannot be during rendering.

To have **side effect** operations in function components, we have to **UseEffect** hook.

It bundles the lifecycle methods in a single API.

**UseEffect** does the same thing as: **componentDidMount**, **componentDidUpdate** and **componentWillUnmount**.

To use **useEffect**, we need to import it from React, like this:

```js
import React, { useEffect } from 'react';
```

[/slide]

[slide hideTitle]

# How to use UseEffect?

When we want to use **useEffect**, we need to pass it a function.

**useEffect** will execute when the action is committed.

We can choose when we want to run the function, for example, on update or render.

By default, they are executed after **every completed render**.

Have a look at this example:

```js
   import React, { useState, useEffect } from 'react';

   function App() {
     const [count, setCount] = useState(0);
   
     useEffect(() => {
       document.title = `The counter reached: ${count} times`;
     });
   
     return (
       <div>
         <p>Counter: {count}</p>
         <button onClick={() => setCount(count + 1)}>Update Counter</button>
       </div>
     );
   }
```

In this example, `useEffect()` acts as **componentDidMount** and **componentDidUpdate**.

**UseEffect** will update the title of the document on every update of the counter.

[/slide]

[slide hideTitle]

# UseEffect Hook Overview

We use **useEffect** if we want to **execute** a function when the **DOM** changes.

It is declared inside the component and has access to the **props** and the **state**.

When we want to unmount a component, we can create a **clean up** function.

The **clean up** function is just a regular function that **useEffect** returns.

Here is an example:

```js
  useEffect(() => {
     const subscription = props.source.subscribe();
     return () => {
        subscription.unsubscribe();
     };
  });
```

In this example, **useEffect** acts like **componentWillUnmount**.

On every **unmount** of the component, we will instantiate the `unsubscribe()` method.

[/slide]
