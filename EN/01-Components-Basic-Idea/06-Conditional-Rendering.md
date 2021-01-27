# Conditional Rendering

[slide hideTitle]

# Using if operator

React uses the same syntax and conventions for boolean expressions like JavaScript.

We can use an "if" statement or a "ternary" operator.

In the example, we have two components: "UserGreeting" and " GuestGreeting".

As we know, they can take **props** as a parameter and return JSX.

We also need another function called "Greeting", which also takes **props** as a parameter.

Inside this function, we will write our logic.

If we are logged-in, we return the "UserGreeting" component otherwise we return the "GuestGreeting" component.

```js
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
```

```js
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />
}
```

[/slide]

[slide hideTitle]

# Using the ternary operator

In this example, which is the same as the previous example we use the ternary operator.

With ternary operator, we write less code but could be hard to read sometimes if the expression is too long.

```js
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
function Greeting(props) {
    return (
        <div>
            { props.isLoggedIn ? < UserGreeting /> : <GuestGreeting /> }
        </div>
    )
}
```

[/slide]