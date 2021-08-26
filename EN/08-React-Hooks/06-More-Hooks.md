# More Hooks

[slide hideTitle]

# UseContext Hook

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/09.ReactJS-React-Hooks/interactive-react-hooks-31-34-usecontext-and-usereducer-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We use **UseContext** when we want to have context, but we do not want to write **class** components.

To have context, we have to wrap the application with **context.Provider**.

That is how it looks:

```js
   <UserContext.Provider value={}>
      {props.children}
   </UserContext.Provider>`
```

We add the **values** that the context will store in the value attribute.

**UseContext** receives a **context object** as an argument and returns the value of the **current context**.

The current value is defined by the nearest **Provider**.

Except that we have to wrap the application with the **Provider**, also we need to create the context.

We do that with `React.createContext()`, and with `useContext()` we can access it.

Have a look at this example:

```js
   const UserContext = React.createContext({
      user: null,
      logIn: () => {},
      logout: () => {},
   });

   const logOut = () => {
      const context = useContext(UserContext);
      context.logout();
   };
```

In this example, we created **UserContext**, which holds the **user data**, a **logIn**  function, and a **logout**  function.

After we instantiated `useContext(UserContext)`, we can access the functions and the data held by the **context**.

## UseReducer Hook

When we have a larger, more complex state, we can use **UseReducer**.

It is familiar to Redux on how to use.

**UseReducer** receives the **reducer** and the **initial state**.

The **initial state** is the current state, and the **reducer** is a function that receives a **state** and an **action**.

**UseReducer** will return an **array** with a **state** and a **dispatch** function.

For example:

```js
   const [state, dispatch] = useReducer(reducer, initialState);
```

We pass to `useReducer()` as arguments the **reducer**, the **initialState**.

After, we destructure the returned result.

[/slide]
