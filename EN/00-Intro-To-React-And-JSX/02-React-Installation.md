# React Installation

[slide hideTitle]

# Create React App

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-8-9-React-Installation-Creae-React-App-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Developed by Facebook, `Create-React-App` is a command-line tool, that enables bootstrapping a **React** project in seconds.

Using `create-react-app` enables several benefits:

- Once you **save a change** in your codebase, React automatically **recompiles** your app and **reloads the page** instantly, resulting in less waiting time

- Under the hood, it uses **Babel** and **webpack**, which it takes care of by itself

- Deploying to production is as easy as running the `npm run build` command

[/slide]

[slide hideTitle]

# Install and Run the React App Creator

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-10-Install-and-run-React-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us create our first React application.

First, open a terminal instance in a directory of your choice.

Make sure you have Node.js installed by typing `node -v`.

If you do not have Node.js, you can download it [here](https://nodejs.org/en/).

Then, in the command-line window type `npx create-react-app my-app` and press [Enter].

You can replace `my-app` with any name you want for your app directory.

The `npx` syntax is not a mistake.

Included with NPM 5.2 and above, it makes sure you always run the most up-to-date version of a given package.

After installation finishes, go to the newly created directory by typing `cd my-app`.

To start your React application, type in `npm start`.

This will open a development version of your project in your default browser.

In case it does not open, just click [this link](http://localhost:3000) or open your browser of choice and go to `http://localhost:3000`.

[/slide]

[slide hideTitle]

# Finding Information

To learn more information about React, you can [visit their official website: reactjs.org](https://reactjs.org/).

You can also [view the detailed documentation](https://reactjs.org/docs/installation.html).

CodeSandbox is an online environment in which you can experiment with your code and see the results in real-time.

You can visit it [here](https://codesandbox.io/).

[/slide]

[slide hideTitle]

# React App Structure

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-11-React-App-Structure-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

React applications typically consist of many files.

This is what a typical file tree looks like:

[image assetsSrc="intro-to-react-and-jsx-2.png" /]

Here are some of the most important files and what they do:

- `package.json`: Stores the project configuration
  - Names and version numbers of all dependencies
  - Build actions that can be run from a terminal instance

[image assetsSrc="intro-to-react-and-jsx-3.png" /]

- `index.html`: The main HTML file of our app
  - The `div` with `id="main"` is typically what React uses to output components

[image assetsSrc="intro-to-react-and-jsx-4.png" /]

- `index.js`: This file takes care of our startup script
  - Here we also define which HTML element to use for rendering
  
[image assetsSrc="intro-to-react-and-jsx-5.png" /]

**React Component file structure**:

Let us take a look at the `App` component.

- `App.js`: Stores the component logic
  
[image assetsSrc="intro-to-react-and-jsx-6.png" /]

- `App.css`: Contains all the styles, related to the given component

[image assetsSrc="intro-to-react-and-jsx-7.png" /]

- `App.test.js`: Used when testing the component functionality

[image assetsSrc="intro-to-react-and-jsx-8.png" /]

[/slide]
