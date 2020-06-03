[slide]
# Backreferences

Backreferences match **the same text** as **previously matched** by a **capturing group**.

[image assetsSrc="regex-example(24).png" /]

In the example above the first group match small letters from `[a-z]+` one and more times followed by digits from `[0-9]+` one ore more times after that `\1` matches **the same text** as **most recently matched** by the **first capturing group**.


[/slide]