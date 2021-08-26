# State Hook

[slide hideTitle]

# UseState Hook

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/09.ReactJS-React-Hooks/interactive-react-hooks-6-12-state-hook-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**React Hooks** allow us to use **state** in **functional components**.

The function that provides the **state** is called `useState()`.

With `useState()` hook, we do not have to migrate from **functional components** to **class** ones anymore.

If we want to use `useState()`, we need to import it from **React** like this: `import React, { useState } from 'react';`.

After **useState** is instantiated, it will return an **array** with two elements.

They will be value and a function, which we use to update the state.

Here is an example of calling **useState**:

```js
  const [count, setCount] = useState(0);
```

The **count** is the current state.

The update function is **SetCount**.

In the `useState()`, we need to assign the default value.

## Example of UseState Hook

In this example, we will use `useState()` to set a counter for how many times the user clicks the button.

Have a look:

```js
  import React, { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Update Counter
        </button>
      </div>
    );
  }
```

We imported `useState()` and declare it in the **Counter** component.

`useState()` returns an array with two elements and has a default value of zero.

The first one is **count**, and the second one is the **setCount** function.

After, we attach **setCount** function to the `onClick={}` event of the button.

On every click, we will update **count**. 

If the user refreshes the application, the counter will have a value of **zero**.

## State Hook Overview

**UseState** have only one argument, which is the **default value**.

It is used only for the **first instance** of the state, and it does not need to be an **object**.

If we want, we can call the update function from **anywhere** in the component.

The `setName()` function is different from **this.setState** because it **does not** merge the **old** and the **new** value.

Also, we can have more than one **useState** in a component.

Here is an example:

```js
  function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div>
        <input
          type="text"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          id="username"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p>Email: {email}</p>
        <p>Pass: {password}</p>
      </div>
    );
  }
```

In this example, we created a component with **input fields** and **paragraph** tags.

On every change in the **input fields**, we will update the **state**. 

We visualize the **state** in the **paragraph** tags.

[/slide]
