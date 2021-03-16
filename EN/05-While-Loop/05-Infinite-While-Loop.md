// sectionId: "Javascript::Programming-Basics::While-Loop::Infinity-While-Loop"

[slide hideTitle]
# Infinite While-Loop

[video src="https://videos.softuni.org/hls/javascript-basics/05.While-Loop/05.PB-JavaScript-While-Loop-24-25-Infinite-While-Loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We call an infinite loop one that repeats infinitely the performance of its body. 

In "**while**" and "**do-while**" loops the end check is a conditional expression that always returns `true`. 

```js
while (true) {
  // Commands
}
```

[/slide]

[slide hideTitle]

# Example: Infinite While-Loop (Bug)

[video src="https://videos.softuni.org/hls/javascript-basics/05.While-Loop/05.PB-JavaScript-While-Loop-25-Example-infinite-while-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


```js
let command = "Add";
while (command !== "End") {
  console.log("Executing: " + command);
}
```

In the example above, the condition is always `true` because it is never changed.

## Example: Finite Loop (Bug Fixed)
```js
let command = "Add";
while (command != "End") {
  console.log("Executing: " + command);

  command = input.shift();
}
```

Here, the value of the variable "command" is changed at each iteration and the **infinite loop** is avoided. 
[/slide]
