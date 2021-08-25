[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-52-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# In this lesson you learned:

- Components are reusable elements.
    - They are Functional and Class-based.
    ```js
    function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }
    ```

    ```js
    class Welcome extends React.Component {
    render() {
    return <h1>Hello, {this.props.name}</h1>;
        }
    }
    ```
- Props are used to pass down data.
- State is used to hold component data.

    ```js
    class Clock extends React.Component {
        render() {
            return (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
            );
        }
    }
    ```
- Handling Events in React.

    ```js
    <button onClick={activateLasers}>  
        Activate Lasers
    </button>
    ```

- Conditional Rendering.
    - If and ternary operators.

    ```js
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {    
            return <UserGreeting />;  
            }  
        return <GuestGreeting />;
    }
    ```

## In the next lesson, you will learn:

- Component Lifecycle
- Higher-Order Components
- CSS Modules
- Fetching Data
- Context API

[/slide]