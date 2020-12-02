# Backreferences

[slide]
# Video

[vimeo-video startTimeInSeconds="8892" endTimeInSeconds="9433"]
[stream language="EN" videoId="421806246" default /]
[stream language="RO" videoId="435070128"  /]
[/video-vimeo]

[/slide]

[slide]
# Backreferences

Backreferences match **the same text** as **previously matched** by a **capturing group**.

[image assetsSrc="regex-example(24).png" /]

In the example above the first group matches small letters from `[a-z]+` one and more times followed by digits from `[0-9]+` one or more times.
After that `\1` matches **the same text** as **most recently matched** by the **first capturing group**.


[/slide]