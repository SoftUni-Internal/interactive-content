# Cubicle: Partea 1

[slide hideTitle]
# Setări Proiect

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-Express-JS-and-Templating-Workshop/1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Iată un link către** [resources](https://videos.softuni.org/resources/javascript/javascript-backend/03-Cubicle-Workshop-Part-1-Resources.zip) **pentru această sarcină.**

"**Cubicle**" este un loc în care puteți răsfoi unele dintre cele mai populare cuburi Rubik din lume și puteți adăuga câteva cuburi noi pe care le-ați descoperit.

## Vizualizarea Structurii Folderului

Vi se oferă această structură de foldere pentru proiect:

[image assetsSrc="cubicle-workshop-01.png" /]

## Config Folder View

Include următoarele configurații:

[image assetsSrc="cubicle-workshop-02.png" /]

`Config.js`
- Aici puteți seta portul pe care aplicația dvs. va fi accesibilă.
 
[image assetsSrc="cubicle-workshop-03.png" /]

`Database.json`
- Inițial conține doar o matrice goală. Va fi folosit ulterior ca bază de date locală.

[image assetsSrc="cubicle-workshop-04.png" /]

`Express.js`

[image assetsSrc="cubicle-workshop-05.png" /]

`Routes.js`
- Aici vor fi configurate controlerele și rutele.

[image assetsSrc="cubicle-workshop-06.png" /]

`Index.js`
- Rulează întreaga configurație pe baza mediului curent în care rulează aplicația.

Configurează aplicația să funcționeze cu Express și rutele care sunt configurate în fișierul `./config/routes`.

[image assetsSrc="cubicle-workshop-07.png" /]

[/slide]

[slide hideTitle]
# Model Cub și Stocare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-Express-JS-and-Templating-Workshop/2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Model cub**

Fiecare cub ar trebui să aibă următoarele proprietăți (pentru moment puteți utiliza o clasă **ES6**):

**id**: număr întreg

**name**: șir

**description**: șir

**imageUrl**: șir

**difficultyLevel**: număr întreg

- **Stocare** 

Stocați cuburile în interiorul fișierului `/config/database.json`.

Nu este o practică bună, dar putem lucra așa deocamdată.

În următoarele workshop-uri, veți învăța cum să vă conectați și să lucrați cu o bază de date reală.

[/slide]
