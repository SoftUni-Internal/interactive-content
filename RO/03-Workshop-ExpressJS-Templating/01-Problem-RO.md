# Rute și Șabloane

[slide hideTitle]
# Rute

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-Express-JS-and-Templating-Workshop/4-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ar trebui să implementați următoarele rute:

- `/` - Pagina principală în care ar trebui vizualizate toate cuburile și un câmp de căutare.
- `/about` - Randați pagina `about`.
- `/create` - Randați formularul `create cube`.
- `/details/:id` - Afișați detaliile pentru cubul selectat
- `Any other` - Ar trebui să afișați pagina `404 Not Found`.

[/slide]

[slide hideTitle]
# Pagina Principală

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-Express-JS-and-Templating-Workshop/5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Afișați următoarea vizualizare atunci când există cuburi în baza de date:

[image assetsSrc="cubicle-workshop-08.png" /]

Dacă nu au fost găsite cuburi, utilizatorul ar trebui să vadă acest lucru:

[image assetsSrc="cubicle-workshop-09.png" /]

[/slide]

[slide hideTitle]
# Pagina About

Așa ar trebui să arate pagina `about`:

[image assetsSrc="cubicle-workshop-10.png" /]

[/slide]

[slide hideTitle]
# Pagina Create

Ar trebui să redați următorul formular pe pagina `create`:

[image assetsSrc="cubicle-workshop-11.png" /]

[/slide]

[slide hideTitle]
# Pagina Details

Iată ce ar trebui să vadă utilizatorul pe pagina `details`:

[image assetsSrc="cubicle-workshop-12.png" /]

[/slide]

[slide hideTitle]
# Pagina nu a Fost Găsită

Afișați acest mesaj de eroare pe orice alt traseu:

[image assetsSrc="cubicle-workshop-13.png" /]

[/slide]

[slide hideTitle]
# Crearea Șabloanelor

Utilizați codul HTML furnizat pentru a crea șabloane folosind Handlebars. 

Identificați părțile dinamice, apoi utilizați sintaxa adecvată pentru interpolare și redarea contextului aplicației.
[/slide]

[slide hideTitle]
# Bonus: Search

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-Express-JS-and-Templating-Workshop/6-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Implementați funcționalitatea de căutare.

Folosiți următoarea validare:

- Dacă utilizatorul caută **numai** după nume și **NO difficulty**, randați  **all difficulties**

- Dacă căutarea **NU** îndeplinește cerințele, redirecționați către pagina de pornire `/`

## Mult succes!
[/slide]
