# Component Lifecycle

[slide hideTitle]
# Component Lifecycle

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-3-4-Component-Lifecycle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Various changes that the Component undergoes from its creation until it is terminated are called a **lifecycle of the component.**

Each component goes through three phases of the lifecycle: **Mounting**, **Updating**, **Unmounting**.

These are **phases** in which different methods are performed.

These methods are only available in **class components.**

All these phases are present only in **class components.**

Later in this course, we will learn how to implement them with a functional component using hooks.

A component has lifecycle methods that can be **overridden** to run code at times in the process.
[/slide]

[slide hideTitle]

# Lifecycle Methods

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-5-Lifecycle-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

They are exactly three lifecycle methods:

- **Mounting:** when the first time you access a web page and the component is rendered.

- **Updating:** is the second phase in which the component is updated.

- **Unmounting:** is the third phase in which we hide or remove a component when this component is not displayed on the page in a web browser.

[image assetsSrc="ReactJs-Compenents-Deep-Dive-1.png" /]

Each component in ReactJS, each phase of this component lifecycle has different **methods** that are performed.

Some methods are performed in a **certain phase.**

It is important to know the **order** in which these methods are performed.

For example, in the **mounting phase**, the constructor is called first, then the page is rendered, and then `componentDidMount` is called.

[/slide]

[slide hideTitle]

# Component Lifecycle

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-6-Component-Lifecycle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Component Mounting

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-7-Component-Mounting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Each component can go through these three phases of **Mounting**, **Updating**, **Unmounting** at some point of its lifecycle.

But to load a component in the browser, it always goes through **Mounting**.

When a component goes through **Mounting**, these four methods are executed, and they are executed in **a specific order:**

- **Constructor:** this method is called first, and we can place any code that we would want to run when the component is initialized.

- **static getDerivedStateFromProps:** this method is rarely executed, but when it is executed it must be executed after the constructor.

His only job is to take the properties from the constructor and put them in state.

- **Render:** this method renders the content in the browser, the HTML that will be displayed. 

This method is mandatory and without it, there is no way to preview a web page.

- **componentDidMount:** after HTML is rendered, we can send functions with which we can fetch data, or to log data in the console.

This is one of the most widely used methods in ReactJS.

[/slide]

[slide hideTitle]

# Component Updating

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-8-Component-Updating-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This phase starts with the beginning of the react component and expands by receiving new updates:

- **static getDerivedStateFromProps:** is invoked just before the render method, both on the initial mount and on following updates.

It should return the updated state of an object, or null which stands for nothing has been updated.

- **shouldComponentUpdate:** is invoked before rendering when new props or state are being received.

The default behavior is to re-render the web page when the state has been changed.

- **render:** render HTML in the web browser.

- **getSnapshotBeforeUpdate:** can be used to see an event before the information is updated before the componentDidUpdate function is called.

- **componentDidUpdate:** is invoked immediately after updating occurs.

[/slide]

[slide hideTitle]

# Component Unmounting

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-9-Component-Unmounting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The component is not needed, and the component will get unmounted using `componentWillUnmount()`.

Here React does all the cleanups related to the component:

- Invalidating timers

- Canceling network requests

- Cleaning up any subscriptions

[/slide]
