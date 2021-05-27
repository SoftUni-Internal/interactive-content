
[slide hideTitle]
# Exemplu din Viața Reală: Clock

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-17-18-nested-loops-real-life-example-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="06-nested-loops-clock-1159.png" /] 

Imaginați-vă faptul că ora curentă este exact **11:00** AM. 

Minutele vor fi incrementate gradual cu **1** până când se ajunge la **59**. 

Odată ce se ajunge la 60, ora va fi incrementată cu **1**, iar minutele se vor reseta din nou la **00**. 

[image assetsSrc="06-nested-loops-clock-1200.png" /]

Putem reprezenta acest proces utilizând bucle `for`. Avem nevoie de mai mult de o buclă for pentru a simula modul în care funcționează un ceas.

După cum puteți vedea în exemplul bazat pe pseudocod, avem 2 bucle `for`: **cea din interior** și **cea din exterior**.

Cea din exterior reprezintă ora, în timp ce cea din interior e responsabilă de minute.

## Pseudocod
```
for h which is in range from 0 to 23
    for m which is in range from 0 to 59
        print h and m in a format similar to the clock
```
[/slide]
