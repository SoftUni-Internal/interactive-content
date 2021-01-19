# Real-Life Example

[slide]
# Video

[vimeo-video startTimeInSeconds="2914" endTimeInSeconds="3142"]
[stream language="EN" videoId="345011935" default /]
[stream language="RO" videoId="393861306"  /]
[/vimeo-video]

[/slide]

[slide]
# Real-Life Example: Clock
[image assetsSrc="06-nested-loops-clock-1159.png" /] 

[image assetsSrc="06-nested-loops-clock-1200.png" /]

Imagine the current time is exactly **11:00** AM. 

Our minutes will gradually increase by **1** until they reach **59**. 

Once they get to 60, the hours will be incremented by **1** and the minutes will be reset back to **00**. 

We can represent this process using `for` loops, and more importantly, why would we even need more than one for-loop to simulate how a simple clock works

As you can see in pseudocode example there are two `for` loops: **inner** and **outer**.

The outer one represents the hours, while the inner one is responsible for the minutes.

# Pseudocode
```
for h which is in range from 0 to 23
    for m which is in range from 0 to 59
        print h and m in format similar to the clock
```
[/slide]