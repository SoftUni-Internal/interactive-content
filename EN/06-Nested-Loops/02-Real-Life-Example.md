[slide]
# Real-Life Example: Clock

[vimeo-video]
[stream language="EN" videoId="488090119/185587dfb3" default /]
[stream language="RO" videoId="488090119/185587dfb3"  /]
[/video-vimeo]

[image assetsSrc="06-nested-loops-clock-1159.png" /]

[image assetsSrc="06-nested-loops-clock-1200.png" /]

Imagine the current time is **11:00 AM.** 

The minutes on the clock will gradually get increased by **1 until they reach 59.** 

Once they get to 60, the hours will be incremented by 1 and the minutes will be reset back to 00. 

We can represent this process using **for loops.** 

More importantly, this is a good example of why we would even need more than one for-loop to complete any task. 

As you can see in the pseudocode example there are two for loops: an inner and an outer one. 

The outer one represents the hours, while the inner one - the minutes. 

# Pseudocode
```
for h which is in range from 0 to 23
    for m which is in range from 0 to 59
        print h and m in format similar to the clock
```
[/slide]
