# Expresii regulate

[[slide hideTitle]]
# Ce sunt expresiile regulate?

[vimeo-video]
[stream language="EN" videoId="489818611/b94191c1c8" default /]
[stream language="RO" videoId="489818611/b94191c1c8"  /]
[/video-vimeo]

"Expresiile regulate" sunt șabloane utilizate pentru a face potriviri cu combinații de caractere în șiruri.

Ele oferă o sintaxă concisă pentru a realiza cerințe complexe care, în mod normal, ar necesita multe linii de cod.

"JavaScript" oferă tipul integrat "RegExp" care ne permite să lucrăm cu expresii regulate în mod eficient.

Pentru a testa expresiile noastre regulate, putem utiliza următorul site:

[Regex101](www.regex101.com)

[/[slide hideTitle]]

[[slide hideTitle]]
# Tiparul expresiilor regulate

[vimeo-video]
[stream language="EN" videoId="489818685/4416e06b0f" default /]
[stream language="RO" videoId="489818685/4416e06b0f"  /]
[/video-vimeo]

Când lucrăm cu expresii regulate, utilizăm șabloane pentru a extrage doar datele de care avem nevoie.

Acesta este un exemplu de tipar care face potriviri doar pe secvențe nevide de cifre:

`[0-9]+`

Un exemplu de tipar care corespunde unei majuscule, urmată de o literă mică:

`[A-Z][a-z]*`

Un exemplu de model care corespunde unui nume:

`[A-Z][a-z]+ [A-Z][a-z]+` face potrivire pe "John Smith".

[/[slide hideTitle]]

[[slide hideTitle]]
# Clase de Caractere: Intervale


[vimeo-video]
[stream language="EN" videoId="489818738/683c3c4047" default /]
[stream language="RO" videoId="489818738/683c3c4047"  /]
[/video-vimeo]

Utilizați paranteze drepte:

`[nvj]+` corespunde oricărui caracter care este **n**, **v** sau **j**.

Exemplu:

**n**ode.**j**s **v**0.12.2

Utilizați simbolul **caret** `^` pentru a exclude ceva din căutare, la fel ca în cazul exemplului de mai jos.

`[^abc]` corespunde oricărui caracter care nu e **a**, **b** sau **c**.

Exemplu:

**A**b**r**a**h**a**m** face potriviri doar pentru "Arhm".

Intervalul de caractere `[0-9]`: corespunde oricărei cifre de la 0 la 9.

Exemplu:

John are **8** ani.

[/[slide hideTitle]]

[[slide hideTitle]]
# Clase Predefinite


[vimeo-video]
[stream language="EN" videoId="489818761/ed44d0ae3b" default /]
[stream language="RO" videoId="489818761/ed44d0ae3b"  /]
[/video-vimeo]

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

[/[slide hideTitle]]

[[slide hideTitle]]
# Regex101: Demo

[vimeo-video]
[stream language="EN" videoId="489818656/8342484c8d" default /]
[stream language="RO" videoId="489818656/8342484c8d"  /]
[/video-vimeo]

[/[slide hideTitle]]