[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/07.ReactJS-Forms/React-Forms-17-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# In this lesson you learned:

- Forms in React keep an initial state

`state = {value: ''};`

- Controlled forms
  - State is handled by the component
  - Using event handlers to take care of changes in state as well as form submissions


```js
class Register extends React.Component {
  state = {
    email: '',
    password: '',
    repeatPassword: ''
};
  changeHandler(event) {
    this.setState({value: event.target.value});
  }
  submitHandler(event) {
    event.preventDefault();
    // Doing some AJAX with the data...
  }

  // render() ...
}

```

- Uncontrolled forms
  - Form data is handled by the DOM itself
  - Done by creating references to DOM elements


```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() { return <div ref={this.myRef} />; }
}

```

## In the next lesson you will learn:

- React Hooks
  - State hook
  - Effect hook
  - Custom hooks
- Rules of hooks
- `UseContext` and `UseReducer` hooks

[/slide]
