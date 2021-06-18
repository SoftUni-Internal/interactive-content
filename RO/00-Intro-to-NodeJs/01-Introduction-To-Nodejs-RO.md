# Introducere în Node.js

[slide hideTitle]

# Descrierea Node.js 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/01-Intro-to-NodeJS/interactive-js-backend-nodejs-3-4-5-6-7-8-introduction-to-nodejs-installation-and-setup-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În mod normal, JavaScript este utilizat **în browser** pentru a permite unei pagini web să fie **mai interactivă**.

Node.js este un **mediu de rulare** care ne permite să scriem cod JavaScript **direct pe server**.

Iată câteva dintre beneficiile pe care le aduce acesta:

- Node.js este **foarte ușor de învățat** întrucât folosește **limbajul JavaScript obișnuit**

- **Furnizează o performanță înaltă** datorită **motorului V8 al lui Google**, care compilează codul **rapid și eficient**

- Are un **pachet foarte bun de management**, numit **NPM**, care are **peste un milion de pachete gratuite**

- Comunitatea sa este foarte **extinsă și activă** ceea ce înseamnă că erorile și actualizările pe pachete se întâmplă **frecvent**


## Instalarea

**Iată aici un link** [link](https://nodejs.org/en/) **către website-ul oficial de unde puteți descărca Node.js.**

Descărcați și instalați cea mai recentă versiune, dacă nu ați făcut deja acest lucru.

Pentru a verifica dacă aveți cea mai actuală versiune pe un computer, tot ce trebuie să faceți este să deschideți un terminal și să tastați:
```js
node -v
```
Dacă această comandă returnează un număr de versiune, Node.js a fost instalat cu succes.

Dacă nu, mai rulați încă o dată procesul de instalare.

## Setarea mediului

Există două moduri pentru a executa cod JavaScript utilizând Node.js:

- Primul este rularea acestuia **direct din terminal**

```js live
function greeting() {
 console.log('Hello Node.js!');
}

greeting(); 
```

- Cel de-al doilea este scriind codul într-un fișier și deschizându-l cu comanda `node`

```js live
function sumNumbers(x, y){
 console.log(x + y);
}

sumNumbers(25, 55); 
```

Să presupunem că un cod a fost stocat într-un fișier `app.js`.

Îl puteți executa folosind comanda `node`, urmată de numele fișierului respectiv:
```js
node app.js
```

## Pachetele NPM

Proiectele bazate pe Node.js projects sunt **inițializate drept pachete NPM**.

Pentru a inițializa un proiect personal Node.js:

- Deschideți un **terminal** și tastați:

```js
npm init
```

- Definiți **caracteristicile** cheie ale proiectului 

- Așteptați să se **genereze** configurația fișierului `package.json`

- Deschideți un **editor** și începeți să scrieți codul

Pentru a **aplica valori de bază (default values)** tuturor întrebărilor legate de caracteristicile proiectului, trebuie doar să tastați: 

```js
npm init -y
```


## Configurarea (package.json)

Fișierul `package.json` este un obiect, care conține o cheie tip **metadata** și **informații generale** despre un anumit proiect.

Iată mai jos câteva informații pe care le puteți descoperi într-un fișier `package.json`:

- `name`(nume) - numele proiectului (de ex. "Music App")

- `version`(versiune) - numărul versiunii, sub forma **1.0.0**

- `description` (descriere) - scopul aplicației

- `author` (autor) - numele programatorului care a dezvoltat aplicația

- `license` (licență) - tipul de licență / copyright pe care îl are codul (de ex. "ISC")

- `scripts`(script) - scripturi predefinite, accesibile prin folosirea unui cuvânt cheie

Aveți mai jos un exemplu de fișier tipic `package.json`:


```js
{
    "name": "demo",
    "version": "1.0.0",
    "description": "Node.js demo project",
    "main": "index.js",
    "engines": {
        // Sets versions of Node.js and others
        "node": ">= 6.0.0",
        "npm": ">= 3.0.0"
    },
    "scripts": {
        // Defines a set of node scripts
        "start": "node index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```
[/slide]
