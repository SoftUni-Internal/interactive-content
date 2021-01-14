# Props

[slide]

# Component Props

**props** is short for **properties**. 

Every component in React has properties.

Props are passed from the **parent** to the **children**. 

Props are immutable.

A parent cannot change their own properties but it is possible to create new ones and pass them to the child.

There is no limit to the number of nested components that we can have.

[/slide]

[slide]

# Passing Props To Nested Components

This is an example of how we can use nested components to pass data from the parent to the child.

The "BookList" component is the parent, and the "Book" component is the child.

We **create** our properties in the parent. 

They should start with **lowercase** letter and consist of a key-value pair like so: `title="IT"`.

Use the following syntax: 

(open tag, name of component, key value pair, closing tag) - `<Book title="IT" />`

```js
const BookList = () => {
    return (
        <ul>
            <Book title="IT" author="Stephen King" price="20" />
            <Book title="The Hunger Games" author="Suzanne Collins" price="10" />
        </ul>
    );
};
```

The `Book()` component receives **props** as an argument.

To display the values inside a div, for example, we need to wrap our props in curly braces like so: `{props.title}`.

In React this is used to provide a dynamic binding for our components.

```js
const Book = (props) => {
    return (
        <li className="book">
            <div>{props.title}</div>
            <div>{props.author}</div>
            <div>{props.price}</div>
        </li>
    );
};
```

[/slide]

[slide]

# Passing Props in Class Components

When composing a class component we receive the **props** inside our **constructor**.

As we said earlier we need to implement the `render()` method as it is required.

Inside this method, we can use the keyword `this` just like in regular JavaScript to point to the current object.

Example: `<div>{this.props.title}</div>`

```js
class Book extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="book">
                <div>{this.props.title}</div>
                <div>{this.props.author}</div>
                <div>{this.props.price}</div>
            </li>
        );
    }
}
```

[/slide]

[slide]

# Children Property

Use the **children** property to access information between opening and closing tags.

```js
const BookList = () => {
    return (
        <ul>
            <Book title="IT" author="Stephen King" price="20" >
                <span>
                    Some value here
                </span> 
            </Book>
        </ul>
    );
};
```

Use `{props.children}` inside the "Book" component to display the text "Some value here" from the "BookList" component.

Notice that this is a stateless function that is why we use `props.children` without the keyword `this`.

```js
const Book = (props) => {
    return (
        <li className="book">
            <div>{props.children}</div>
        </li>
    );
};
```

[/slide]