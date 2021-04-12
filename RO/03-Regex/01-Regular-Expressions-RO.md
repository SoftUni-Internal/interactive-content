# Expresii Regulate

[slide hideTitle]
# Ce Reprezintă Expresiile Regulate?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-3-4-What-are-regular-expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Expresiile regulate** sunt șabloane utilizate pentru a face potriviri cu combinații de caractere în șiruri.

Ele oferă o sintaxă concisă pentru a realiza cerințe complexe care, în mod normal, ar necesita multe linii de cod.

JavaScript oferă tipul integrat `RegExp` care ne permite să lucrăm cu expresii regulate în mod eficient.

Pentru a testa expresiile noastre regulate, putem utiliza [Regex101](www.regex101.com).

[/slide]

[slide hideTitle]
# Șablonele de Expresii Regulate

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-6-Regular-expressions-pattern-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când lucrăm cu expresii regulate, utilizăm șabloane pentru a extrage doar datele de care avem nevoie:

- Un exemplu de șablon care face potriviri doar pe secvențe nevide de cifre:

`[0-9]+`

- Un exemplu de șablon care corespunde unei majuscule, urmată de litere mică:

`[A-Z][a-z]*`

Un exemplu de model care corespunde unui nume:

`[A-Z][a-z]+ [A-Z][a-z]+` - face potrivire pentru "John Smith".

[/slide]

[slide hideTitle]
# Clase de Caractere: Intervale

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-7-Character-classes-ranges-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Utilizați paranteze drepte pentru a potrivi niște caractere specifice:

- `[nvj]+` - corespunde oricărui caracter care este **n**, **v** sau **j**.

Exemplu:

"**n**ode.**j**s **v**0.12.2" potrivește "njv"

- Utilizați simbolul **caret** `^` pentru a exclude ceva din căutare, la fel ca în cazul exemplului de mai jos:

`[^abc]` - corespunde oricărui caracter care nu e **a**, **b** sau **c**.

**Exemplu:**

**A**b**r**a**h**a**m** potrivește doar "Arhm".

- Intervalul de caractere `[0-9]` - corespunde oricărei cifre de la 0 la 9.

Exemplu:

John are **8** ani.

[/slide]

[slide hideTitle]
# Clase Predefinite

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-8-Predefined-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În regex, avem de asemenea câteva clase de caractere care ne oferă o notație prescurtată pentru seturi de caractere utilizate des.

| **Clasa Prescurtată** | **Semnificație** | **Clasa de Caractere** |
| --- | --- | --- |
| \w | Corespunde oricărui caracter care reprezintă litere, cifre și simbolul bară jos | \[a\-z\, A\-Z\, 0\-9\, \_\] |
| \W | Corespunde oricărui caracter care nu reprezintă litere, cifre și nici simbolul bară jos | \[\^w\] |
| \s | Corespunde oricărui caracter de tip spațiu, rând nou | \[\\t\\r\\n\\f\\] |
| \S | Corespunde oricărui caracter care nu este de tip spațiu sau rând nou | \[\^s\] |
| \d | Corespunde oricărui caracter care reprezintă o cifră | \[0\-9\] |
| \D | Corespunde oricărui caracter care nu reprezintă o cifră | \[\^d\] |

Dacă doriți să citiți mai multe informații cu privire la expresiile regulate: [Expresii Regulate](https://www.regular-expressions.info/)

[/slide]

[slide hideTitle]
# Regex101: Demo

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-5-Regex101-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]
