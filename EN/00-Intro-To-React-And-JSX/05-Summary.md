[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-21-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# In this lesson you learned:

- React is a JavaScript Library
  - Makes it easy to build user interfaces
  - Components are its main building blocks
  
```js
const HelloMessage = (props) => (
  <div>Hello {props.name}</div>
);

ReactDOM.render(
  <HelloMessage name="Maria" />,
  document.getElementById('root')
);

```

- Create-React-App initializes a project in a matter of seconds
  - Just type `npx create-react-app my-app` in the terminal


- JSX is React's own JavaScript syntax
  - Enables embedding HTML inside JavaScript, and vice versa
  
   
```js
// JSX Syntax
<div className="red">Children Text</div>

// Compiles to plain JavaScript
React.createElement("div",
  { className: "red" },
  "Children Text"
);
```

- Component composition defines views
  - Encapsulation keeps data accessible only to the component it belongs to
  
```js
function Welcome() {
  return <h1>Hello, from React</h1>; 
}
function Cya() {
  return <h1>C ya, from React</h1>;
}
function ComponentBlender() { 
  return (
    <div>
      <Welcome />
      <Cya />
    </div>
  );
} 
```


## In the next lesson you will learn:

- Components Overview
  * Props
  * State
  * Handling DOM Events
  * Conditional Rendering

[/slide]
