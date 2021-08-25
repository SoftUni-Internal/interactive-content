# Uncontrolled Forms

[slide hideTitle]
# Uncontrolled Components

There are instances in which handling data by the component itself does not suffice.

**Uncontrolled components** are the alternative solution.

In uncontrolled components, form data is **handled by the DOM itself**.

Instead of writing an **event handler** for changing the **state**, in uncontrolled components, we use a `ref`.

Refs are created using the `React.createRef()` method.

We can attach them to any React element by using the `ref` attribute.

[/slide]


[slide hideTitle]

# Using Refs: Example

The following code is an example of an uncontrolled `UserForm` component:

```js
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);

    this.input = React.createRef();
  }

  submitHandler(event) {
    alert('Welcome back, ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          What is your name:
          <input type="text" ref={this.input} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

```

In the constructor, we create a `ref` for the user's name by using `React.createRef()`.

On the input field, we put a `ref` attribute, which points to the variable:

`<input type="text" ref={this.input} />`

Since the state is handled by the DOM, there is neither an `onChange` attribute nor a change handler.

[/slide]



[slide hideTitle]

# When to Use Refs?

Refs have many use cases, more specifically when performing [imperative](https://en.wikipedia.org/wiki/Imperative_programming) actions like:

- Working with imperative animations

- Managing text selection, focus, or media playback

- Integrating React and non-React code

For better consistency, avoid using refs for stuff that can be done in a [declarative](https://en.wikipedia.org/wiki/Declarative_programming) way.


[/slide]
