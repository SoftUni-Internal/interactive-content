# Unit Testing with Jest and Enzyme

[slide hideTitle]

# What is Jest?

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-8-9-10-jest-and-enzyme-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Jest** is a JavaScript testing framework, created by Facebook.

Jest acts as a **test runner**, **assertion library** and **mocking library**.

While it is most often used in combination with React, it is a **general-purpose testing framework**, meaning it is not limited in regards to what you can use it with.

A main advantage of Jest is its **ease of use**.

It has just two global objects known as `describe` and `it`.

Jest also provides **snapshot testing**.

**Snapshot testing** is a very useful tool when you want to make sure your user interface **does not change unexpectedly**.

Install Jest by typing `npm install --save-dev Jest` in a command-line tool, opened in your project directory.

## What is Enzyme?

**Enzyme** is a framework, specifically created for testing React components.

Made by Airbnb, Enzyme enables **utility methods** not available in Jest, such as:

- Rendering one or multiple components
- Finding elements
- Interacting with elements

The enzyme can only be used with React.

You can [learn more about Enzyme here](https://airbnb.io/enzyme/).

[/slide]

[slide hideTitle]

# Jest and Enzyme Compared

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-11-jest-and-enzyme-compared-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This table summarises the main differences between Jest and Enzyme.

| **Feature**       | **Jest**     | **Enzyme**            |
| :---: | :---: | :---: |
| **Definition**    | Test runner, assertion and mocking library | Testing utility with additional functionality |
| **Usage**         | Defining test case and assertion           | Used for selective rendering                  |
| **Compatibility** | Any app                                    | React only                                    |
| **Standalone**    | Yes, can be used on its own                | Requires being paired with a test runner      |

Using Jest and Enzyme together makes testing React components much easier, and makes for very readable tests.

[/slide]

[slide hideTitle]

# Mounting

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-12-mounting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `mount` method is mainly used for:

- Full DOM rendering, including child components
- Components that may interact with DOM API
- Using React lifecycle methods for component testing
- As it actually mounts the component in the DOM `.unmount()` should be called after each test to stop the tests from affecting each other
- Allowing access to both props directly passed into the root component \(including default props\) and props passed into child components

The only way to test `componentDidMount` and `componentDidUpdate` is the `mount` method.

[/slide]

[slide hideTitle]

# Shallow

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-13-shallow-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`shallow` works as follows:

- Renders only the component itself, without including its children
  - This can be useful for component isolation which enables pure unit testing.
  - It protects against changes or bugs in a child component altering the behavior or output of the component under test
- In Enzyme 3 and above, shallow components have access to lifecycle methods by default
- Cannot access props passed into the root component, but can access those passed into child components, and can test the effect of props passed into the root component

[/slide]

[slide hideTitle]

# Render

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-14-render-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is how the `render` method works:

- Renders to static HTML, including children
- Does not have access to React lifecycle methods
- Less costly than `mount` but provides less functionality

[/slide]

[slide hideTitle]

# Setting up Enzyme

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-15-setting-up-enzyme-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To install Enzyme first, open a command\-line tool in your project directory.

Along with Enzyme, you need to install an **adapter** for your version of React.

For React 16, type in:

`npm i --save-dev enzyme enzyme-adapter-react-16`

Then, you need to configure Enzyme to use the **adapter** you want it to use.

You can do this by using the Enzyme's `configure()` API:

```js
import Enzyme, { configure, shallow, mount, render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

export { shallow, mount, render };
export default Enzyme;
```

After installation, create a `__tests__` folder in your app's main directory. 

The `__tests__` name is the recommended folder naming convention adopted in Jest.

[/slide]


[slide hideTitle]

# Testing Stateless Components

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/11.React-JS-Error-Handling-Unit Testing-SSR/11-react-js-ehutas-16-testing-stateless-components-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is a simple example of stateless component testing.

```js
import React from 'react';

export const ToolTip = data => {
  const { infoArray = [] } = data.data;

  const listOfInfo = () => {
    return infoArray.map((info, index) => {
      const { name, id } = info;
      return [
        <li>
          <a href={`exampleURL?viewMode=id`} >
            {name}
          </a>
        </li>
      ];
    });
  };

  return (
    <div className="tooltip">
        <ul className="desc">{listOfInfo()}</ul>
    </div>
  );
};
```

The `ToolTip` component receives a list of information from a parent component and renders it.

Let us turn our attention to the test case:

```js
import React from "react";
import { shallow, mount } from "enzyme";
import { ToolTip } from "../index.js";

describe("ToolTip", () => {
  test("Tooltip should render properly",() => {
    const wrapper = mount(<ToolTip data={{}} />);
  });
});

```

In our test file, we import the `mount` method from Enzyme.

Next, we import our `ToolTip` component.

We use `describe` to create a block, in which we can group several related tests.

It is not required to have a `describe` block, but it cleans things up and organizes our tests.

Inside the block, we use the `test` method which runs our test.

You can also replace the `test` keyword with its alias \- `it`. 

Inside an arrow function using the `mount` method from Enzyme, we simulate a component going through an unmount/mount lifecycle.


[/slide]
