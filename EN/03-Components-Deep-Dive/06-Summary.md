[slide hideTitle]
# Summary


# In this lesson you learned:

- Component Lifecycle

   - **Mounting**, **Update** and **Unmounting**

- Higher-Order Component (HOC)

```js
function logged(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            console.log(`${WrappedComponent.displayName} mounted`);
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}

```
- CSS Modules

- Using the **Fetch API**

```js
fetch('https://api.github.com/users/k1r1L')
    .then((response) => response.json())
    .then((myJson) => console.log(myJson))
    .catch((myErr) => console.error(myErr));

```

- **Context API** provides way to pass data through the component **without passing** the props manually

## In the next lesson you will learn:

- Virtual DOM​

- Routing Overview​

- React Router​

- Installation, Links, Redirects and etc.​

- React Lazy and Suspense
[/slide]