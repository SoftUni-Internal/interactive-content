# Pregătirea Aplicației Pentru Implementare 

[slide hideTitle]

# Pregătirea Aplicației

## Urmăriți Baza de Cod Într-un Depozit Git

Pentru a **inițializa un depozit Git**, deschideți o fereastră de comandă\-line în **root project directory** și tastați `git init`.

Este recomandabil să excludeți **fișierele și directoarele neesențiale** care **ocupă spațiu** în depozitul dvs.

Creați un fișier numit `.gitignore` și întroduceți următorul cod în interior:

```js
node_modules
package-lock.json
```

**Node modules** pot fi **reinstalate** folosind `npm install`.

Apoi, tastați `git add .` la **stage** la toate celelalte fișiere.

Pentru a face primul dvs **commit** la `master` branch, tastați:

`git commit -m "name-of-your-commit"`

Puteți **verifica starea depozitului dvs.** în orice moment, folosind `git status`.

## Crearea unui Depozit Github 

Vă recomandăm să creați un **Github repository**, pe care îl puteți utiliza ulterior pentru a implementa **implementări automate**.

Pentru a începe, [apasați aici](https://github.com/new).

**Conectați-vă** cu contul dvs. Github  dacă nu ați făcut deja acest lucru, sau dați clic pe `Create new account` dacă nu aveți un cont.

Odată conectați, alegeți un **nume** pentru depozitul dvs. și faceți clic pe `Create repository`.

Pentru a **conecta depozitul local**, accesați **CLI** și tastați următoarele comenzi, înlocuind `your-username` și `the-name-of-your-repository` cu cele proprii:

```
git remote add origin https://github.com/your-username/the-name-of-your-repository.git
git branch -M main
git push -u origin main
```

## Adăugarea Heroku Git Remote

Pentru a **implementa aplicația**, Heroku are nevoie de o versiune a depozitului dvs. pe un **remote server** special găzduit pe Heroku.

Pentru a crea o **nouă aplicație pe Heroku**, împreună cu un depozit Git conectat, utilizați `heroku create name-of-your-app`.

Numele aplicației dvs. trebuie să fie **unic**.

Puteți, de asemenea, să permiteți Heroku să **genereze un nume** prin **omiterea să il introduceți** ca parametru:

`heroku create`

Pentru a **confirma** că o telecomandă numită `heroku` a fost **setată** pentru aplicația dvs., utilizați comanda `git remote -v`.

Apoi, **implementați** aplicația dvs. folosind `git push heroku master`.

Pentru a vă asigura că există cel puțin **o instanță activă** a aplicației dvs., tastați `heroku ps:scale web=1`.

Ați creat un **proces nou**, numit `web`, care va primi **trafic web** atunci când este implementat.

Puteți vizita aplicația dvs. recent creată, tastând pur și simplu `heroku open` sau vizitând `name_of_your_heroku_project.herokuapp.com`.

## Adăugarea unui Procfile

Heroku folosește un **Procfile** pentru a se asigura că aplicația dvs. rulează **conform intenției**.

Păstrează **comenzi**, care vor fi **executate** la pornirea aplicației.

În **root directory** al aplicației dvs., creați un fișier nou și denumiți-l `Procfile`, cu 'P' majusculă.

În interior, trebuie să **specificați** **comanda** necesară pentru a rula procesul `web` pe care l-am creat anterior.

Dacă ați creat un script `start` în `package.json`, întroduceți următorul cod în `Procfile`:

`web: npm start`

În caz contrar, puteți doar **rula fișierul principal**, cel mai adesea `index.js` sau `server.js`, folosind `node`:

`web: node index.js`

## Asigurați-vă că Ascultați pe Portul Corect

Când rulați aplicația **local**, serverul web poate asculta pe **orice port deschis**

Cu toate acestea, pe Heroku trebuie să asculte pe un port **specific**.

Dacă utilizați Express, accesați fișierul serverului și asigurați-vă că serverul dvs. va asculta pe `process.env.PORT`:

```js
app.listen(process.env.PORT);
```

`process.env.PORT` este o variabila pe care Heroku îi va atribui un **număr de port**

Vă puteți asigura că aplicația dvs. va **rula în continuare** local folosind o instrucțiune `if` după cum urmează:

```js
let port = process.env.PORT;

if (port == null || port == '') {
    port = 5000;
}

app.listen(port);
```

## Utilizați o Bază de Date în loc să Scrieți în Sistemul de Fișiere Local

Heroku folosește containere Linux numite **dynos** pentru a vă rula codul.

**Dynos** sunt **înlocuite automat** în fiecare zi, ceea ce duce la **eliminarea** **datelor locale**.

Dacă aplicația dvs. stochează **date** în sistemul de fișiere local, va trebui să configurați o **bază de date**

Presupunând că aplicația dvs. folosește **MongoDB** sau **o bază de date non-relațională similară**, sunteți **gata pentru pornire**.

O altă soluție populară este **Heroku Postgres**, despre care puteți afla mai mult [aici](https://devcenter.heroku.com/articles/heroku-postgresql).

[/slide]

