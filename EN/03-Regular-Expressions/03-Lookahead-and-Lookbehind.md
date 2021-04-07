# Lookahead and Lookbehind
[slide hideTitle]
# Lookahead and Lookbehind

`Lookahead` and `Lookbehind` are zero-length assertions that match characters, but then give up the match, returning only the result: **match or no match**.


There are two kinds of `Lookahead` assertions: **Positive Lookahead** and **Negative Lookahead**

- **Positive Lookahead**

[image assetsSrc="regex-example(20).png" /]

In the example above, the regular expression matches only `abc` because these letters are followed by one or more digits.

- **Negative Lookahead**

[image assetsSrc="regex-example(21).png" /]

In the example above, the regular expression matches only `ab` because these letters are **not** followed by one or more digits.


## Lookbehind

There are also two kinds of `Lookbehind` assertions: **Positive Lookbehind** and **Negative Lookbehind**

- **Positive Lookbehind**

[image assetsSrc="regex-example(22).png" /]

In the example above, the regular expression matches only `abc` because these letters are preceded by one or more digits.

- **Negative Lookbehind**

[image assetsSrc="regex-example(23).png" /]

In the example above, the regular expression matches only `bc` because these letters are **not preceded** by one or more digits.

[/slide]
