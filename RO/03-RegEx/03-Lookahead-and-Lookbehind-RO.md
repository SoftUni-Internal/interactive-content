# Lookahead și Lookbehind

[slide hideTitle]
# Lookahead 

There are **two** ways to use `Lookahead` with RegEx:

- **Lookahead Pozitiv**

[image assetsSrc="regex-example(20).png" /]

În exemplul de mai sus regexul se potrivește doar cu "abc" deoarece sunt urmate de una sau mai multe cifre.

- **Lookahead Negativ**

[image assetsSrc="regex-example(21).png" /]

În exemplul de mai sus regexul se potrivește doar cu "ab", deoarece acestea **nu sunt** urmate de una sau mai multe cifre.

## Lookbehind
There are also **two** ways to use `Lookbehind`:

- **Lookbehind Pozitiv**

[image assetsSrc="regex-example(22).png" /]

În exemplul de mai sus regexul se potrivește numai cu "abc", deoarece acestea sunt precedate de una sau mai multe cifre.

- **Lookbehind Negativ**

[image assetsSrc="regex-example(23).png" /]

În exemplul de mai sus, regexul se potrivește numai cu "bc", deoarece **nu sunt precedate** de una sau mai multe cifre.

[/slide]