[slide hideTitle]

# Real Life Example: Clock

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-17-18-nested-loops-real-life-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="06-nested-loops-clock-1159.png" /] 

[image assetsSrc="06-nested-loops-clock-1200.png" /]

Let us take a look at the code logic representing a clock starting from **11:00** AM. 

The minutes will gradually increase by **1** until they reach **59**. 

Once they get to **60** the hours will be incremented by **1** and the minutes will reset back to **00**. 

We can represent this process using **for-loops**. More importantly, let us see why we need more than one **for-loop** to simulate how a clock works.

As you can see this pseudocode example contains two for-loops: an **inner** contained in the body of an **outer** loop.

The **outer for-loop** calculates hours while the **inner for-loop** is responsible for the minutes.

## Pseudocode

```
for h which is in a range from 0 to 23
    the form which is in the range from 0 to 59
        print h and m in a format similar to the clock
```

[/slide]

