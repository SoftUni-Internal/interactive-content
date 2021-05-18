# Lookahead și Lookbehind

[slide hideTitle]
# Lookahead și Lookbehind

**Lookahead** și **lookbehind** sunt aserțiuni fără lungime care potrivesc caractere, dar apoi renunță la potrivire și returnează doar rezultatul: dacă există sau nu o ptorivire.

Există două tipuri de aserțiuni **Lookahead**: **Lookahead Pozitiv** și **Lookahead Negativ**

- **Lookahead Pozitiv**

[image assetsSrc="regex-example(20).png" /]

În exemplul de mai sus, expresia regulată potrivește doar **"abc"**, deoarece aceste litere sunt urmate de una sau mai multe cifre.

- **Lookahead Negativ**

[image assetsSrc="regex-example(21).png" /]

În exemplul de mai sus, expresia regulată potrivește doar **"ab"**, deoarece acestea **nu sunt** urmate de una sau mai multe cifre.

## Lookbehind
Există de asemenea două tipuri de aserțiuni **Lookbehind**: **Lookbehind Pozitiv** și **Lookbehind Negativ**

- **Lookbehind Pozitiv**

[image assetsSrc="regex-example(22).png" /]

În exemplul de mai sus, expresia regulată potrivește numai **"abc"**, deoarece aceste litere sunt precedate de una sau mai multe cifre.

- **Lookbehind Negativ**

[image assetsSrc="regex-example(23).png" /]

În exemplul de mai sus, expresia regulată potrivește numai **"bc"**, deoarece **nu sunt precedate** de una sau mai multe cifre.

[/slide]
