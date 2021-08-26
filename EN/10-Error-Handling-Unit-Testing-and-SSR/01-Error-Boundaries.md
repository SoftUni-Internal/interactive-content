# Error Boundaries

[slide hideTitle]

# Whar are Error Boundaries?

[video src="" poster="" /]

Facing errors is an inevitable part of being a developer.

**Error boundaries** are React components, built for **handling errors** that occur in their **child component tree**.

They catch errors **during rendering** and inside of **lifecycle methods**.

After catching an error, they **log them** and display an **alternative user interface** using special functions.

Before their introduction in **React 16**, a component crash can result in a broken user interface.

After React 16, errors that have not been caught by any **error boundary** result in the unmounting of the component tree.

In other words, crashed components will simply **not be displayed**.

It is important to remember that error boundaries **will not** catch errors for:

- Event handlers
  
- Asynchronous code (like a `setTimeout` callback, for example)
  
- Server-side rendering
  
- Errors are thrown in the error boundary itself \(rather than its children\)

[/slide]


[slide hideTitle]

# Creating an Error Boundary

The following example shows the syntax of an error boundary:

```js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // Used to change the value of hasError
    return { 
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    // Here you can log your error to your error reporting service
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any alternative user interface in case of an error
      return <h1>Please try again later</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
```

**Only class components can be error boundaries.**

We create our `ErrorBoundary` component by declaring our constructor first.

Then, inside the constructor, we create a state object with the boolean `hasError`, initialized to `false`.

For a class component to become an error boundary it **must** define **at least one** of the following methods:

- `static getDerivedStateFromError()` 
  - Used when rendering a fallback user interface

- `componentDidCatch()`
  - Used to log error information


Depending on the value of `hasError`, we either render a **fallback UI** or render the actual component we have wrapped.

To use an error boundary, we simply wrap our existing components:

```js
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

[/slide]


[slide hideTitle]

# Error Boundaries

It is important to remember those error boundaries:

- Can only be class\-based components

- Can be reused like all other components

- **Do not** catch errors inside event handlers

You may also wrap **top-level route components** to display an Error message to the user, similar to how server-side frameworks handle crashes.

[/slide]