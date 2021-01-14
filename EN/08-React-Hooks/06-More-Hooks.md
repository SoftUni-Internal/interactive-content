# More Hooks

[slide]

# UseContext Hook

We use **UseContext** when we want to have context, but we do not want to have class components.

To have context, we have to wrap the application with **context.Provider**, and after that, we can use it.

That is how it looks:

```js
<UserContext.Provider value={}>
 <App/>
</UserContext.Provider>`
```

On the value attribute, we add the values that the context will store.

**UseContext** receives a context object as an argument and returns the value of the current context.

The current value is defined by the nearest **Provider**.

We create contest with `React.createContext()`.

After we have created it, we can use it with `useContext()`.

Have a look at this example:

```js
const UserContext = React.createContext({
   user: null,
   logIn: () => {},
   logout: () => {},
});

const context = useContext(UserContext);

const logOut = () => {
   context.logout();
};
```

In this example, we created **UserContext**, which holds **user data**, **logIn function**, and **logout function**.

After we called `useContext(UserContext)`, we have access to these functions and the data.

And we can use them.

[/slide]

[slide]

# UseReducer Hook

We use **UseReducer** when we have a bigger, more complex state.

On how it works, it is familiar to Redux.

**UseReducer** receives the **reducer** and the **initial state**.

The **initial state** is the current state, and the **reducer** is a function that receives **state** and **action**.

**UseReducer** will return an array with **state** and **dispatch** function.

That is how to use **useReducer**:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

On `useReducer()` we pass as arguments **reducer**, **initialState**.

And we destructure the result, that it will return.

[/slide]
