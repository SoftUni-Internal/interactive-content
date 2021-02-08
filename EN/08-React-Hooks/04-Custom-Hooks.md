# Custom Hooks

[slide hideTitle]

# Overview

If we have a **highly re-usable** logic, we can turn it into a **hook**.

In the **class** components, we can do it with **higher-order components**, or by **rendering the props** and wrapping the component with another one.

**Hooks** allow us to have **re-usable** logic without adding more components to the tree.

Also, we can specify what arguments they receive and what they return.

When we use a **default** hooks in our **custom hook**, we need to call them at the **top level** of the **custom** hook.

**Custom Hooks**, like the default ones, have naming conventions.

They always start with **use**.

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
