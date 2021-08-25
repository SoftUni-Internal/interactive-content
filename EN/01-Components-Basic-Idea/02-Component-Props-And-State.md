# Component Props And State

[slide hideTitle]

# Props And State Overview

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-8-9-10-Component-Props-And-State-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In React, `this.props` and `this.state` are JavaScript objects. 

It is data that we can render.

Props are data that is passed from the parent to the child. 

It is like passing an argument to a function.

The state is internal to every component and is basically data that we can manipulate to change what the users see.

Props are immutable to the component receiving them. You do not change props passed to a component from within the component.

The state is changeable. React uses the `setState()` method to update the state of a component, which we will see in a bit. 

A state can only be mutated by the component that contains the state.

[/slide]

