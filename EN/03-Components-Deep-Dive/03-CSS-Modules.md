# CSS Modules

[slide hideTitle]

# Definition

A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.

When we want to import CSS into our project, there are several options to use CSS in react.

We can import CSS that we will use

`import './counter-label.css'`

But when using the default CSS implementation, we **should not use classes with the same names**, because then the names are **overridden.**

Another problem is that browsers have a **limited number of style tags**, and if they become too many it becomes difficult for the browser to render all the CSS.

The other option is to use CSS modules, which puts a unique id on the class and thus avoids repetition.

Something else that CSS modules do is to bundle **several** CSS together and **display** it as one CSS.
[/slide]

[slide hideTitle]

# CSS Modules: Example

We can name the CSS classes as we wish.

React supports CSS Modules alongside regular stylesheet using the `[name].module.css` file naming convention.

This way ReactJS will know that this is a CSS module

```
.App {
  text-align: center;
}
.btn {
  background-color: green;
  color: white;
  border-radius: 15px;
  margin: 2%;
  padding: 0.5%;
  font-size: 24px;
  cursor: pointer;
}

```

[image assetsSrc="Compenents-Deep-Dive-2.png" /]

[/slide]

[slide hideTitle]

# Import CSS Modules

CSS Modules let you use the same CSS class name in a different file without worrying about naming clashes.

In this example we have a CSS file named `Button.module.css`:

```
.error {
  background-color: white;
  color: red;
}
```

Then we import the given a CSS into our file:

```js
import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    return <button className={styles.error}>Error Button</button>;
  }
}
```

[/slide]