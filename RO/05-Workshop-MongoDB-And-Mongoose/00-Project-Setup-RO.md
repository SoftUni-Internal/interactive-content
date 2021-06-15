# Cubicle - Parta 2

[slide hideTitle]

# Sterarea proiectului

**Aici este link-ul către** [resources](https://videos.softuni.org/resources/javascript/javascript-backend/04-Cubicle-Homework-Part-2-Resources.zip) **pentru această sarcină.**

"**Cubicle**" este un loc în care puteți răsfoi unele dintre cele mai populare cuburi Rubik și puteți adăuga cuburile noi pe care le-ați descoperit.

## Main Task

Dacă ați reușit să finalizați sarcina anterioară, **ați făcut o treabă bună!** 

Acum este timpul să **actualizați** aplicația dvs. și să **implementați** câteva caracteristici noi. 

De exemplu, pentru a înlocui modul în care **stocați** datele folosind **MongoDB** și **Mongoose**, **creând și atașând** accesorii noi la fiecare cub, faceți unele relații între ele și **includeți** încă câteva **pagini**.

## Installing Dependencies

După cum știți deja, ar trebui să **instalați** o grămadă de lucruri noi, astfel încât să puteți continua cu această parte a workshop-ului.

Aici este lista:

1. [MongoDB Download Center](https://www.mongodb.com/try). 

    - Puteți verifica și [Installation Instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) 

2. [MongoDB Node.JS Driver](https://www.npmjs.com/package/mongodb)

3. [Mongoose](https://www.npmjs.com/package/mongoose) - Usefull [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)

4. [Robo 3T](https://robomongo.org/download)


[/slide]

[slide hideTitle]

## Conectarea Bazei de Date cu ExpressJS

Fișierul dvs. **database.json** din **config folder** va fi **modificat**, deoarece **nu mai** veți **stoca** datele în fișierul **json**. 

Deci, asigurați-vă că în interiorul său **mongoose connection** prin **MongoDB** **șirul de conexiune** este **realizat** și **exportat**.

Fișierul `index.js` trebuie să **necesite** conexiunea mongoose exportată (**baza de date**) înainte ca serverul să fie startat.

## Model

Dacă urmați structura anterioară, probabil ați creat clasă Model **ES6** pentru fiecare cub în acest format:

- **Id**: number
- **Name**: string
- **Description**: string
- **Image URL**: string
- **Difficulty Level**: number

Acum este timpul să refactorizați această clasă **ES6** la  **Mongoose Schema**, deci fiecare **Cub** are următoarea structură::

- **Id**: ObjectId
- **Name**: String, required
- **Description**: String, required, max length validation
- **ImageUrl**: String, required, `http/https` validation
- **Difficulty Level**: Number, required, min and max valid range
- **Accessories**: ObjectId, ref Accessories Model

Și creați un alt model (**Accessory**) în următorul format:

- **Id**: ObjectId
- **Name**: String, required
- **ImageUrl**: String, required, http/https validation
- **Description**: String, required, max length validation
- **Cubes**: ObjectId, ref Cubes Model

Modelele dvs. ar trebui să arate in acest mod:

[image assetsSrc="Workshop-Mongoose.jpg" /]

[/slide]

[slide hideTitle]

# Database Persistence

**Toate paginile** din aplicație ar trebui să păstreze datele în **MongoDB** și să funcționeze cu **MongoDB**.

- **Pagini suplimentare**

Ar trebui să implementați **2** noi rute::

- `/create/accessory`: ar trebui să randezeforma de accesoriu creat

- `/attach/accessory/:id`: ar trebui să randeze pagina accesoriilor despre atașarea unui accesoriu nou pentru cub

Și **update the view** on `/details/:id route`, care randează detaliile cubului.

Utilizați Resursele furnizate pentru a crea șabloane suplimentare folosind Handlebars (Autentificarea aici este aceeași ca mai sus - **username: student, password: student**).

Identificați părțile dinamice și utilizați sintaxa adecvată pentru interpolare și redarea contextului aplicației.

Înlocuiți vechiul fișier **CSS** cu cel dat.

- **Create Accessory Page View**

[image assetsSrc="Workshop-Mongoose1.png" /]

- **Attach new accessory view**

[image assetsSrc="Workshop-Mongoose2.png" /]

**Rețineți că opțiunile din interiorul elementului selectate trebuie să fie doar cele pe care cubul curent nu le are atașate**

- **Updated Details Page View**

[image assetsSrc="Workshop-Mongoose3.png" /]

[/slide]
