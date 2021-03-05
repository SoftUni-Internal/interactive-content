# Lookahead and Lookbehind
[slide hideTitle]
# Lookahead 

There are **two** ways to use `Lookahead` with RegEx:

- **Positive Lookahead**

[image assetsSrc="regex-example(20).png" /]

In the example above the regex matches only `abc` because they are followed by one or more digits.

- **Negative Lookahead**

[image assetsSrc="regex-example(21).png" /]

In the example above the regex matches only `ab` because they are **not** followed by one or more digits.


## Lookbehind

There are also **two** ways to use `Lookbehind`:

- **Positive Lookbehind**

[image assetsSrc="regex-example(22).png" /]

In the example above the regex matches only `abc` because they are preceded by one or more digits.

- **Negative Lookbehind**

[image assetsSrc="regex-example(23).png" /]

In the example above the regex matches only `bc` because they are **not preceded** by one or more digits.

[/slide]