# Cuantificatori și Gruparea

[slide hideTitle]
# Cuantificatori

**Cuantificatorii** specifică **de câte ori** instanțele ale unui **caracter**, **grup**, sau **clasa de caractere** trebuie să fie **prezente** în intrare pentru ca o potrivire să fie găsită.

| **Notation** | **Meaning** |
| --- | --- |
|`*`|**Zero** or **more** occurrences|
|`+`|**One** or **more** occurrences|
|`?`|**Previous** element zero or one occurrences|
|`{}`|**Exactly** the specified number of occurrences|

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

Putem împărți regexul în **grupuri** și putem folosi aceste grupuri pentru a **extrage informații** despre **o parte a potrivirii**.

- `subexpression` - captează subexpresia potrivită ca grup numerotat

[image assetsSrc="regex-example(17).png" /]

În exemplul de mai sus, există doar un singur grup - textul evidențiat verde.

- `?:subexpression` - definește un grup care nu captează

[image assetsSrc="regex-example(18).png" /]

Textul verde evidențiat este un grup care nu este capturat.

- `?<name>subexpression` - definește un grup de capturare numit

[image assetsSrc="regex-example(19).png" /]

În exemplul de mai sus **day**, **month**, **year** sunt numele grupului.

[/slide]

[slide hideTitle]
# Problem with Solution: Match All Words

Scrieți o **expresie regulată** la [regex101](www.regex101.com) care **extrage toate cuvintele** secvențe de caractere **dintr-un text dat**.

[image assetsSrc="regex-example(25).png" /]

[/slide]

[slide hideTitle]
# Problemă: Potrivere datelor

Scrieți o **expresie regulată** care **extrage datele din text**.

- Format de dată valid: `dd-MMM-yyyy`
- Exemple: `12-Jun-1999`, `3-Nov-1999`

[image assetsSrc="regex-example(26).png" /]

[/slide]


[slide hideTitle]
# Problemă: Validare E-mail

Scrieți o expresie regulată care efectuează **validare simplă a e-mailului**

- Un e-mail constă din: **username**, **@**, **domain name**

- **Usernames** sunt**alfanumerice**

- **Domain names** constau din **două șiruri**, separate printr-o **perioadă**

- **Domain names** pot conține numai **litere în limba engleză**

[image assetsSrc="regex-example(27).png" /]

[/slide]
