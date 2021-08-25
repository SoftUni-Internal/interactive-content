# Higher-Order Components

[slide hideTitle]
# Definition

**React 16.8** introduces the concept of higher-order components.

A higher-order component or **HOC** is an advanced technique in React for reusing component logic.

**HOCs** are similar to higher-order functions, which can take a function as an argument and produce another function.

**HOCs** basically incorporate the don-not-repeat-yourself or **DRY** principle of programming, which means less code fewer bugs.

**HOCs** are not part of the React API, it is part of a software design pattern.

[/slide]

[slide hideTitle]

# Example: Reducer Function

In JavaScript we have a `reduce()` function, to which we pass **two parameters**, a function and an array.

What reduce does is to **go through each element of the array** and apply the function we have submitted and **update** the array and returns **the changed array as a result.**

```js live
function reduce(arr, func) {
    let result = arr[0];
    for (let nextElement of arr.slice(1))
        result = func(result, nextElement);
    return result;
}
console.log(reduce([5, 10, 20], (a, b) => a + b));
console.log(reduce([5, 10, 20], (a, b) => a * b));

```

In this example, we pass an **array of numbers** and in one case we apply an addition function, adding each element.

And in other cases the multiplication function is applicable, multiplying each element.
[/slide]

[slide hideTitle]

# Higher-Order Functions 

Components are the primary unit of code reuse.

- Some patterns are not straightforward for traditional components

Whereas as component transforms props into UI.

- **HOC** is a simple function to which we can pass a component we have and receive another component.

```js 
const EnhancedComponent = higherOrderComponent(WrappedComponent);

```

[/slide]

[slide hideTitle]

# HOC Example

In this example, we have a **logger function** that accepts the created component, and this function **returns another class component** to which `componentDidMount` is attached.

And as a result, it **renders** the component we submitted to it.

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
[/slide]

[slide hideTitle]

# Advantages

Some of the advantages of using **HOCs** are

- Greater code reuse: which leads to lesser errors.

- Reduced boilerplate

- Easily handle cross-cutting concerns

**HOCs** commonly used for:

- Managing form input

- Binding component props to business logic

- Automating repetitive tasks

[/slide]