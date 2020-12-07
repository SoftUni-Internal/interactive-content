[slide]
# Infinite While Loop

[vimeo-video]
[stream language="EN" videoId="487120926/1516b4fb70" default /]
[stream language="RO" videoId="487120926/1516b4fb70"  /]
[/video-vimeo]


We call an infinite loop one that repeats infinitely the performance of its body. 

In `while` and `do-while` loops the end check is a conditional expression that always returns `true`. 

```js
while (true) {
  // Commands
}
```

[/slide]

[slide]

# Example: Infinite While Loop (Bug)

[vimeo-video]
[stream language="EN" videoId="487120943/858eb0fc69" default /]
[stream language="RO" videoId="487120943/858eb0fc69"  /]
[/video-vimeo]


```js
let command = "Add";
while (command !== "End") {
  console.log("Executing: " + command);
}
```

In the example above, the condition is always `true` because it is never changed.

# Example: Finite Loop (Bug Fixed)
```js
let command = "Add";
while (command != "End") {
  console.log("Executing: " + command);

  command = input.shift();
}
```

Here, the value of the variable `command` is changed at each iteration and the **infinite loop** is avoided. 
[/slide]
