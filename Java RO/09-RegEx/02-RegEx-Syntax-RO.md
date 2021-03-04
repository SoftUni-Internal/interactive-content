

[slide]

 # Clasele de caractere

  În **contextul expresiilor regulate**, o clasă de caractere este un **set de caractere încadrate între paranteze drepte**.
  
  Specifică **caracterele** care **se vor potrivi cu succes** unui **singur caracter** dintr-un anumit **șir de intrare**.

- Clasă simplă - un set de caractere unul lângă altul între paranteze drepte:
 [image assetsSrc="regex-example(2).png" /]
 În exemplul de mai sus, clasa `[abc]` se potrivește cu orice caracter fie **a** **b** sau **c**.

- Negare - metacaracterul "^" la începutul clasei de caractere se potrivește cu toate caracterele, cu excepția celor enumerate.
[image assetsSrc="regex-example(3).png" /]
`[^abc]` - matches any character that is **not** **a**,**b** or **c**

- Gamă - se introduce un "-" între primul și ultimul caracter pentru a seta intervalul
[image assetsSrc="regex-example(4).png" /]
`[0-9]` - caracterul **interval** se potrivește cu orice cifră de la 0 la 9:
  



[/slide]

[slide]

# Clase predefinite

| **Notare** | **Semnificare (Returnează potrivirea unde…)**|
| --- | --- |
|`\w`|se potrivește cu orice **cuvânt** cu caractere de la `a` la `Z`, cifre  de la `0-9`, și caracterul de subliniere `_`|
|`\W`|se potrivește cu un caracter nealfanumeric (opusul lui \ w)|
|`\s`|se potrivește cu un caracter de **whitespace**|
|`\S`|se potrivește cu orice în afară de whitespace(opusul lui \s)|
|`\d`|se potrivește cu o **cifră** (0-9)|
|`\D`|se potrivește cu orice în afară de **cifră** (opusul lui \d)|



- `\w` - se potrivește cu un caracter alfanumeric [a-z, A-Z, 0-9, _]
[image assetsSrc="regex-example(5).png" /]

- `\W` - se potrivește cu un caracter nealfanumeric (opusul lui \ w)|
[image assetsSrc="regex-example(6).png" /]

- `\s` - se potrivește cu un caracter de **whitespace**
[image assetsSrc="regex-example(7).png" /]

- `\S` - se potrivește cu orice în afară de whitespace(opusul lui \s)|
[image assetsSrc="regex-example(8).png" /]

- `\d` - se potrivește cu o **cifră** (0-9)| [0-9]
[image assetsSrc="regex-example(9).png" /]

- `\D` -se potrivește cu orice în afară de **cifră**
 [image assetsSrc="regex-example(10).png" /]


[/slide]

[slide]

# Metacaractere

# Caracterul Escapes

- `\` -  evadează caractere speciale pentru a suprima sensul lor special
 [image assetsSrc="regex-example(11).png" /]


# Ancore

- `^` - Potrivirea trebuie să aibă loc la începutul șirului sau liniei
- `$` - Potrivirea trebuie să aibă loc la sfârșitul șirului sau înainte de linia următoare
[image assetsSrc="regex-example(12).png" /]

Exemplul de mai sus se potrivește cu **întregul șir** cu o lungime cuprinsă între **6** și **12** caractere.
[/slide]