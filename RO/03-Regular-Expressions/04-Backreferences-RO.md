# Backreference

[slide hideTitle]

# Backreferences Potrivesc Grupuri Anterioare

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-14-15-Backreferences-Match-Previous-Groups-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Backreferences** sunt o modalitate de a repeta un grup de capturare. Un backreference este utilizat în interiorul unei expresii regulate prin inserarea numărului grupului, precedat de un backslash.

[image assetsSrc="regex-example(24).png" /]

În exemplul de mai sus, primul grup `[a-z]+` se potrivește cu una sau mai multe litere mici.

Al doilea grup `[0-9]+` se potrivește cu una sau mai multe cifre.

După aceea, `\1` se potrivește cu același "șir de corespondență" care va fi capturat de grupul 1 (\[**a-z**\]) în timpul rulării.


[/slide]
