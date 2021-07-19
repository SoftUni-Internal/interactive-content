# Instalarea Angular

[slide hideTitle]

# Creați o nouă aplicație

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/01-Intro-To-Angular-And-Typescript/Intro-to-Angular-and-Typescript-22-23-24-Angular-Installation-and-information-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a instala **Angular CLI**, putem tasta următoarea comandă într-un terminal: `npm install -g @angular/cli`.

Rețineți că această comandă va instala **Angular CLI** la nivel global.

Când instalarea este finalizată, suntem **pregătiți-vă să creăm primul nostru proiect**.

Pentru a crea un proiect, trebuie să introducem: **ng new** și numele aplicației în terminal.

Exemplu: `ng new some-app`.

După ce am **creat un proiect**, putem naviga în el folosind `cd some-app`:

Comanda "cd" vine de la "change directory" și ar trebui să fie urmată de numele folderului proiectului nostru nou creat.

Pentru a rula aplicația, trebuie să pornim un server, tastând `ng serve`.

În mod implicit, acesta va rula pe **portul 4200**.

Puteți găsi mai multe informații pe [Site-ul oficial] (https://angular.io) sau în [documentația] oficială (https://angular.io/docs).


[/slide]

[slide hideTitle]

# Suport pentru IDE

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/01-Intro-To-Angular-And-Typescript/Intro-to-Angular-and-Typescript-25-IDE-Support-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Majoritatea **IDE-urilor** moderne suportă TypeScript sau au **plugin-uri** pe care le putem instala.

De exemplu, **Visual Studio Code** acceptă în totalitate TypeScript, **fără a fi nevoie de plugin-uri suplimentare**.

Atunci când se utilizează VSCode pentru Angular, poate fi instalată extensia "**Angular Language Service**", care va **inițializa IntelliSense atunci când se leagă proprietăți de clasă** sau **componente în fișiere HTML**.

**Angular CLI**, vine cu toate aceste instrumente preinstalate.

Nu este nevoie să folosim **linter** sau să instalăm alte **plugins**.

[/slide]
