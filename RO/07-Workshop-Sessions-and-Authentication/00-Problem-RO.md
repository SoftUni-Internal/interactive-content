# Cubicle: Part 3

[slide hideTitle]
# Setarea Proiectului

**Avem un link către** [resources](https://videos.softuni.org/resources/javascript/javascript-backend/05-Sessions-and-Authentication-Workshop-Resources.zip) **pentru această sarcină.**

"**Cubicle**"este un loc în care puteți răsfoi unele dintre cele mai populare cuburi Rubik din lume și puteți adăuga câteva cuburi noi pe care le-ați descoperit.

Dacă ați ratat primele două părți ale acestui workshop, **asigurați-vă că le completați** înainte de a continua, deoarece toate părțile acestui workshop sunt legate între ele.

## Sarcina principală 

Acum este timpul să implementați serviciul utilizatorului în aplicația dvs., astfel încât persoanele să se poată **înregistra**, **conecta** și **deconecta**.

Și fiecare cub poate fi **editat** sau **șters**.

Unele dintre funcționalitățile ar trebui **să necesite autentificare** (cum ar fi **create the cube**, **create accessory**) și autorizare (cum ar fi **edit** și **delete**).

De asemenea, toate **rutele** ar trebui să fie **protejate!** 

## Installing Dependencies 

Ar trebui să instalați încă câteva pachete pe care le veți folosi. 

Ele sunt: 

- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): vă permite să decodificați, să verificați și să generați JWT

- [Bcrypt](https://www.npmjs.com/package/bcrypt): o bibliotecă care vă ajută să utilizați hash la parole

- [Cookie-parser](https://www.npmjs.com/package/cookie-parser): analizați **cookie header** și completați `req.cookies` cu un obiect conectat de numele cookie-urilor (dacă alegeți pentru să stocați jwt-ul ca un cookie)

## Model 

Structura a **User Model**:

- **Id**: ObjectId

- **Username**:  string

- **Password**: string (**hashed**), utilizați `bcrypt` pentru utiliza hash și compara parola

Asigurați-vă că, atunci când creați cu succes un nou utilizator în baza de date, să generați un **JSON web token** și să îl utilizați mai târziu pentru **autentificare** și **autorizare.**

De asemenea, trebuie să adăugați o proprietate pe **Cube Model**, care este `creatorId` (tip: **Șir** și **este obligatoriu**), astfel încât să puteți urmări în continuare creatorul fiecărui cub.
[/slide]


[slide hideTitle]
# Authentificare

Asigurați-vă că utilizatorii **anonimi** **nu pot atinge** funcționalitatea care necesită **autentificare**, cum ar fi "**create cube view**".

Și utilizatorii care deja sunt conectați au generat și stocat **jwt**, pot vedea navigarea corectă și **nu pot** accesa formularul de autentificare și înregistrare.

Dacă unele dintre scenarille descrise mai sus au loc, asigurați-vă că utilizatorul curent este redirecționat către pagina de pornire.

Utilizatorii de tip **Guest** pot **vedea** și **accesa** următoarele adrese URL:

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-1.png" /]

- **Home page** **(Browse)**
- **About page**
- **Login page**
- **Register page**
- **Cube details page**

și nu pot accesa și vedea pe ceilalți.

Utilizatorii **înregistrați** pot vedea și accesa următoarele adrese URL:

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-2.png" /]

- **Home page (Browse)**
- **About page**
- **Add cube**
- **Add accessory**
- **Logout**
- **Cube details page**
- **Cube accessories page**
- **Edit Cube page**
- **Delete Cube page**

[/slide]

[slide hideTitle]
# Autorizare

Numai utilizatorii autorizați ar trebui să vadă butoanele `[Edit]` și `[Delete]` și dacă **utilizatorul conectat în prezent este creatorul acestui cub.**

În caz contrar, aceste butoane trebuie să fie **hidden.**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-3.png" /]

[/slide]

[slide hideTitle]
# Pagini adiționale

Ar trebui să implementați patru rute noi:

- `/login`: ar trebui să randeze formularul de autentificare

- `/register`: ar trebui să randeze formularul de înregistrare

- `/edit`: ar trebui să randeze formularul de editare

- `/delete`: ar trebui să randeze formularul de ștergere

Asigurați-vă că atunci când accesați rutele `/edit` și `/delete`, acestea afișează informațiile curente ale cubului.

Utilizați resursele furnizate pentru a crea șabloane suplimentare folosind Handlebars (Utilizați "**username**: **student**", "**password**: **student credentials**" pentru a efectua acest lucru).

Identificați părțile dinamice și utilizați sintaxa adecvată pentru interpolare și randarea contextului aplicației.

Înlocuiți vechiul fișier CSS cu cel dat.

- **Login Page**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-4.png" /]

- **Register Page**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-5.png" /]

- **Edit Cube Page**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-6.png" /]

- **Delete Cube Page**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-7.png" /]

[/slide]
