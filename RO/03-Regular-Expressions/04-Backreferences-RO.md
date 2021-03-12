# Backreferences

[slide hideTitle]
# Backreferences Match Previous Groups

Backreferences se potrivesc cu **același text** care **corespunde cu precedentul**  de către un **grup de captare**.

[image assetsSrc="regex-example(24).png" /]

În exemplul de mai sus, primul grup se potrivește cu litere mici din `[a-z]+`de una sau de mai multe ori, urmate de cifre din `[0-9]+` de una sau mai multe ori.

După aceea `\1` se potrivește cu **același text** cu **cel mai recent potrivit** de **primul grup de captare**.


[/slide]