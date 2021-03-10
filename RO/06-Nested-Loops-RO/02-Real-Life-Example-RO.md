// sectionId: "Javascript::Programming-Basics::Nested-Loops::Real-Life-Example"

[slide hideTitle]

# Exemplu din viața reală: Ceas

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-11-12-real-life-example-clock-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="06-nested-loops-clock-1159.png" /]

[image assetsSrc="06-nested-loops-clock-1200.png" /]

Imaginați-vă că ora curentă este **11:00 AM.**

Minutele de pe ceas vor crește treptat cu **1 până când vor ajunge la 59.**

După ce ajung la 60, orele vor fi incrementate cu 1, iar minutele vor fi resetate la 00.

Putem reprezenta acest proces folosind **buclele for.**

Mai important, acesta este un bun exemplu pentru care am avea nevoie chiar de mai multe bucle 'for' pentru a finaliza orice sarcină.

După cum puteți vedea în exemplul de pseudocod, există două Bucle for: una interioarî și una exterioară.

Cea exterioară reprezintă orele, în timp ce cea interoară- minutele.

# Pseudocode
```
for h which is in range from 0 to 23
    for m which is in range from 0 to 59
        print h and m in format similar to the clock
```
[/slide]
