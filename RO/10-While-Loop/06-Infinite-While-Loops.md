[slide]
# Infinite While Loop
We call an infinite loop one that repeats infinitely the performance of its body. 

In `while` loops the end check is a conditional expression that always returns `True`. 

```py
while True:
  # Commands
```

# Example: Infinite While Loop (Bug)
```py
command = "Add"
while command != "End":
  print("Executing: " + command)
```

In the example above, the condition is always `True` because it is never changed.

# Example: Finite Loop (Bug Fixed)
```py
string command = "Add"
while command != "End":
  print("Executing: " + command)

  command = input()
```

Here, the value of the variable `command` is changed at each iteration and the **infinite loop** is avoided. 
[/slide]

[slide]
# Video
 
[vimeo-video videoId="343587107" startTimeInSeconds="2968" endTimeInSeconds="3357" /]

[/slide]