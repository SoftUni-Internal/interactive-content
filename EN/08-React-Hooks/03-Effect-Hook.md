# Effect Hook

[slide]

# What is UseEffect Hook?

The effect hooks come when we want to **fetch data**, do **subscriptions**, or **manually changing the DOM**.

They can influence other components, but it cannot be during rendering.

These operations are also called **side effects**.

**UseEffect** allows us to have side effect operations in function components.

It bundles the lifecycle methods in a single API.

**UseEffect** does the same thing as:

-  **componentDidMount**.

-  **componentDidUpdate**.

-  **componentWillUnmount**.

To use **useEffect**, we need to import it from React, like this:

```js
import React, { useEffect } from 'react';
```

[/slide]

[slide]

# How to use UseEffect?

When we want to use **useEffect**, we need to pass it a function.

This function will be executed when the action is committed.

We can choose when we want to run the function.

For example, on update or render.

By default, they are executed after **every completed render**.

Now, have a look at this example.

```js
import React, { useState, useEffect } from 'react';

const counter = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      document.title = `The counter reached: ${count} times`;
   });
};
```

In this example, `useEffect()` acts as **componentDidMount** and **componentDidUpdate**.

**UseEffect** will update the document title on every update of the counter.

[/slide]

[slide]

# UseEffect Hook Overview

We use **useEffect** when we want to run a function on a change to the DOM.

It is declared inside the component and has access to the props and the state.

When we want to do unmounting, we create a **clean up** function.

The **clean up** function is just a function that **useEffect** returns.

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

So on every unmount of the component, we will **unsubscribe**.

[/slide]
