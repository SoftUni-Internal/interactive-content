# Backreference

[slide hideTitle]
# Backreferences Match Previous Groups

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-14-15-Backreferences-Match-Previous-Groups-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Backreferences match **the same text** as **previously matched** by a **capturing group**.

[image assetsSrc="regex-example(24).png" /]

In the example above the first group matches small letters from `[a-z]+` one and more times followed by digits from `[0-9]+` one or more times.

After that `\1` matches **the same text** as **most recently matched** by the **first capturing group**.

[/slide]