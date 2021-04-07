# Backreference

[slide hideTitle]
# Backreferences Match Previous Groups

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-14-15-Backreferences-Match-Previous-Groups-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **backreference** is a way to repeat a capturing group. A backreference is used inside a regular expression by inlining its group number preceded by a single backslash.

[image assetsSrc="regex-example(24).png" /]

In the example above, the first group `[a-z]+` matches one or more small letters. 

The second group `[0-9]+` matches one or more digits.

Backreference match the same text as previously matched by a capturing group and so `\1` will match the same text that was captured by group 1 (\[**a-z**\]).

[/slide]
