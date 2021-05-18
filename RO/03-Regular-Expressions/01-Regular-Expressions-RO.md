# Expresii Regulate

[slide hideTitle]
# Ce sunt Expresiile Regulate?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-3-4-What-are-regular-expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Abrevierea** pentru **expresia regulată** este **regex**.

O **expresie regulată** definește un **șablon de căutare** pentru **șiruri**.
 
Șablonul de căutare poate fi un **caracter simplu**, un **șir fix**, sau o expresie complexă care conține caractere speciale.

Șabloanele sunt definite de o sintaxă specială:

- `[0-9]+` - se potrivește cu o secvență de cifre

- `[A-Z][a-z]*` - se potrivește cu o majusculă urmată de zero sau mai multe minuscule
 
Puteți **exersa** realizarea expresiilor regulate la:

- [regexr.com](https://regexr.com)
- [regex101.com](https://regex101.com)

[/slide]

[slide hideTitle]

# Șabloane pentru Expresii Regulate - Exemplu

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-6-Regular-expressions-pattern-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[/slide]


[slide hideTitle]

# Clase de Caractere: Intervale

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-7-Character-classes-ranges-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


În **contextul expresiilor regulate**, o clasă de caractere este un **set de caractere încadrate între paranteze drepte**.
  
Aceasta specifică **caracterele** care **se vor potrivi cu succes** cu un **singur caracter** dintr-un anumit **șir de intrare**.

- **Clasă simplă** - un set de caractere unul lângă altul între paranteze drepte:

[image assetsSrc="regex-example(2).png" /]

În exemplul de mai sus, clasa `[abc]` se potrivește cu oricare dintre caracterele **a**, **b** sau **c**.

- **Negare** - metacaracterul `^` de la începutul clasei de caractere potrivește toate caracterele, cu excepția celor enumerate
  - `[^abc]` - se potrivește cu orice caracter care **nu este** **a**,**b** sau **c**

[image assetsSrc="regex-example(3).png" /]

- **Interval** - se introduce "-" între primul și ultimul caracter pentru a seta intervalul
  - `[0-9]` - **interval** de caractere care se potrivește cu orice cifră de la 0 la 9

[image assetsSrc="regex-example(4).png" /]

[/slide]

[slide hideTitle]

# Clase predefinite

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-8-Predefined-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

| **Notație** | **Semnificație** |
| --- | --- |
|`\w`|se potrivește cu orice caracter de la `a` la `Z`, cifre de la `0-9` și caracterul de subliniere `_`|
|`\W`|se potrivește cu un caracter non-alfanumeric (opusul lui \w)|
|`\s`|se potrivește cu un **spațiu alb**|
|`\S`|se potrivește cu orice caracter în afară de spațiul alb (opusul lui \s)|
|`\d`|se potrivește cu o **cifră** (0-9)|
|`\D`|se potrivește cu orice caracter **non-cifră** (opusul lui \d)|


- `\w` - se potrivește cu un caracter alfanumeric \[a-z, A-Z, 0-9, \_\]
[image assetsSrc="regex-example(5).png" /]

- `\W` - se potrivește cu un caracter non-alfanumeric (opusul lui `\w`)
[image assetsSrc="regex-example(6).png" /]

- `\s` - se potrivește cu un **spațiu alb**
[image assetsSrc="regex-example(7).png" /]

- `\S` - se potrivește cu orice caracter în afară de spațiul alb (opusul lui `\s`)
[image assetsSrc="regex-example(8).png" /]

- `\d` - se potrivește cu o **cifră** \[0-9\]
[image assetsSrc="regex-example(9).png" /]

- `\D` - se potrivește cu orice caracter **non-cifră**
 [image assetsSrc="regex-example(10).png" /]


[/slide]

[slide hideTitle]

# Metacaractere

## Caractere de evadare 

- `\` -  evadează caractere speciale pentru a suprima sensul lor special

 [image assetsSrc="regex-example(11).png" /]


## Ancore

- `^` - Potrivirea trebuie să aibă loc la începutul șirului sau liniei
- `$` - Potrivirea trebuie să aibă loc la sfârșitul șirului sau înainte de linia următoare

[image assetsSrc="regex-example(12).png" /]

Exemplul de mai sus potrivește **întregul șir** cu o lungime cuprinsă între **6** și **12** caractere.

[/slide]
