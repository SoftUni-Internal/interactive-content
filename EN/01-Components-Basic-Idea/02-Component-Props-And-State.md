# Component Props And State

[slide]

# Props And State Overview

In React `this.props` and `this.state` are JavaScript objects. It is data that we can render.

Props are data that is passed from the parent to the child. It is like passing an argument to a function.

The state is internal to every component and is basically data that we can manipulate to change what the users see.

Props are immutable to the component receiving them. You do not change props passed to a component from within the component.

The state is changeable, React uses the `setState()` method to update the state of a component, which we will see in a bit. 

A state can only be mutated by the component that contains the state.

[/slide]

