

[slide]
# Lookahead și Lookbehind

## Lookahead 

- Lookahead Pozitiv
[image assetsSrc="regex-example(20).png" /]
În exemplul de mai sus regexul se potrivește doar cu "abc" deoarece sunt urmate de una sau mai multe cifre.

- Lookahead Negativ
[image assetsSrc="regex-example(21).png" /]
În exemplul de mai sus regexul se potrivește doar cu "ab", deoarece acestea **nu sunt** urmate de una sau mai multe cifre.

## Lookbehind

- Lookbehind Pozitiv
[image assetsSrc="regex-example(22).png" /]
În exemplul de mai sus regexul se potrivește numai cu "abc", deoarece acestea sunt precedate de una sau mai multe cifre.

- Lookbehind Negativ
[image assetsSrc="regex-example(23).png" /]
În exemplul de mai sus, regexul se potrivește numai cu "bc", deoarece **nu sunt precedate** de una sau mai multe cifre.
[/slide]