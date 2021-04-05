# Cuantificatorii și Gruparea

[slide hideTitle]
# Cuantificatori

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-9-10-Quantifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Cuantificatorii** permit utilizatorilor să specifice numărul de aparițți ale potrivirilor.

| **Notație** | **Semnificație** |
| --- | --- |
|`*`|**Zero** sau **mai multe** apariții|
|`+`|**Una** sau **mai mult** apariții|
|`?`|Apare **zero** sau **o** dată, prescurtare pentru {0,1}|
|`{}`|Numărul **exact** speciificat al aparițiilor|

- `*` - se potrivește cu elementul precedent zero sau de mai multe ori

[image assetsSrc="regex-example(13).png" /]

- `+` - se potrivește cu unul sau mai multe apariții ale elementului precedent

[image assetsSrc="regex-example(14).png" /]

- `?` - se potrivește cu zero sau una apariție ale elementului precedent

[image assetsSrc="regex-example(15).png" /]

- `{3}` - se potrivește cu elementul precedent exact de 3 ori

[image assetsSrc="regex-example(16).png" /]

[/slide]

[slide hideTitle]

# Gruparea

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-11-Grouping-Expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem împărți expresiile regualte în **grupuri** și putem folosi aceste grupuri pentru a **extrage informații** despre **o parte a potrivirii**.

- `subexpression` - captează subexpresia potrivită ca grup numerotat

[image assetsSrc="regex-example(17).png" /]

În exemplul de mai sus, există doar un singur grup - textul evidențiat în verde.

- `?:subexpression` - definește un grup necapturat

[image assetsSrc="regex-example(18).png" /]

Textul verde evidențiat este un grup care nu este capturat.

- `?<name>subexpression` - definește un grup de capturare numit

[image assetsSrc="regex-example(19).png" /]

În exemplul de mai sus **day**, **month**, **year** sunt numele grupului.

[/slide]

[slide hideTitle]
# Problemă cu soluție: Match All Words

Creați o **expresie regulată** care **extrage toate cuvintele dintr-un text dat** , folosind următorul site web: 
[https://regex101.com](regex101.com)

[image assetsSrc="regex-example(25).png" /]

Puteți folosi textul următor pentru a testa expresia voastră regulată:


```
_|The|great|outdoors|holds|~many|secrets
```

[/slide]

[slide hideTitle]
# Problemă  cu soluție: Match Dates

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/RO/04.Java-Fundamentals-Regular-Expressions-24-Problem-and-Soluttion-Match-Dates-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creați o **expresie regulată** care **extrage toate  datele valide  dintr-un text dat**.

- Format de dată valid: `dd-MMM-yyyy`
- Exemple: `12-Jun-1999`, `3-Nov-1999`

[image assetsSrc="regex-example(26).png" /]

Puteți folosi textul următor pentru a testa expresia voastră regulată:

```
1-Jan-1989 is considered the official birthday of the Internet.
I was not aware that my socks have been missing since 23-Sep-2005.
```

[/slide]


[slide hideTitle]
# Problemă cu soluție: Email Validation

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-13-Solution-email-validation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creați o expresie regulată care efectuează **validare simplă a e-mailului**

- Un e-mail constă din: **username**, **@**, **domain name**

- **Usernames** sunt**alfanumerice**

- **Domain names** constau din **două șiruri**, separate printr-un **punct**

- **Domain names** pot conține numai **litere în limba engleză**

[image assetsSrc="regex-example(27).png" /]

Puteți folosi textul următor pentru a testa expresia voastră regulată:

```
johndoe@gmail.com
my*name*is*@who.com
```
[/slide]
