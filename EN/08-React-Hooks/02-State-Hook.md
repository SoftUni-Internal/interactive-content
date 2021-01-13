# State Hook

[slide]

# UseState Hook

With React Hooks, we can use **React state** in functional components.

The function that allows us to do that is called `useState()`.

With this function, we do not have to migrate functional components to class ones anymore.

To use `useState()` we need to import it from **React**.

It look like this: `import React, { useState } from 'react';`.

After we have imported it, **useState** will return an array with two elements.

They will be value and a function, which we use to update the state.

Here is an example of calling **useState**:

```js
const [count, setCount] = useState(0);
```

The **count** is the current state.

**SetCount** is the function that we use to update the state.

In `useState()`, we need to tell the default value.

[/slide]

[slide]

# Example of UseState Hook

Now we will have a look at an example of the `useState()` hook.

Here is an example:

```js
import React, { useState } from 'react';

const Counter = () {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

The first thing that we do is to import **useState**.

After we imported it, we declare it in the **Counter** component.

**UseState** returns an array with two elements.

The first one is **count**, and the second one is **setCount**.

We also set the default value to be zero.

Then we attach **setCount** to a button.

And on every click, we update **count**.

[/slide]

[slide]

# State Hook Overview

With **useState**, we have only one argument, which is the default value.

It is used only for the first instance of the state.

And this argument does not need to be an **object**.

We can call the update function from **anywhere** in the component.

But it is different from **this.setState** because it does not merge the old value and the new one.

Also, we can have more than one **useState** in a component.

Here is an example:

```js
const registerComponent = () {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("0");
  const [password, setPassword] = useState("");
}
```

[/slide]
