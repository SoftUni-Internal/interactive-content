# Component Lifecycle

[slide]
# Component Lifecycle

Each component goes through three phases of the lifecycle.

- **Mounting:** when the first time you access the a web page and the component is rendered.

- **Updating:** is the second phase in which the component is updated.

- **Updating:** is the third phase in which we hide or remove a component when this component is not displayed on the page in a web browser.

These are **phases** in which different methods are performed.

These methods are only available in **class components.**

All these phases are present only in **class components.**

Later in this course, we will learn how to implement them with a functional component using hooks.

A component has lifecycle methods that can be **overridden** to run code at times in the process.

[image assetsSrc="Compenents-Deep-Dive-1.png" /]

Each component in ReactJS, each phase of this component lifecycle has different **methods** that are performed.

Some methods are performed in a **certain phase.**

It is important to know the **order** in which these methods are performed.

For example, in the **mounting phase**, the constructor is called first, then the page is rendered, and then `componentDidMount` is called.

[/slide]