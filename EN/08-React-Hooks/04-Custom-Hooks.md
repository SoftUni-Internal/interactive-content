# Custom Hooks

[slide]

# Overview

When we have a logic that is highly re\-usable, we can make it a hook.

In the class components, this is done by **higher-order components**, or by **rendering the props** and wrapping the component into a separate one.

They allow us to have re\-usable logic without adding more components to the tree.

**Custom Hooks**, like the default ones, have naming conventions.

They always start with **use**.

Custom hooks do not have to have a particular signature, unlike the components.

With them, we can specify what arguments they receive and what they return.

Here is an example:

```js
function useStatus(friendID) {
   const [status, setStatus] = useState([]);

   return status;
}
```

In this example, we made a custom hook called **useStatus**.

This hook sets the state and returns it.

[/slide]
