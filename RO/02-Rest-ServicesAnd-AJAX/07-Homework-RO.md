# Teme Pentru Acasă

[slide hideTitle]
# Ghid: Baze de Date la Distanță 

## 1. Postman

Postman este o aplicație **de testare API** care trimite **cereri** către un **server web** și preia **răspunsuri**. 

Permite utilizatorilor să configureze toate **antetele** și **cookie-urile** pe care **API** le așteaptă și verifică răspunsul. 

O puteți descărca de [here](https://www.postman.com/downloads/). 

## 2. Firebase

Firebase este o platformă de dezvoltare **mobilă** și **web**. 

Oferă o **bază de date în timp real** și un **backend ca serviciu**. 

Serviciul oferă dezvoltatorilor un **API** care permite ca datele aplicațiilor să fie **sincronizate** între clienți și **stocate** pe cloudul Firebase. 

**Datele** sunt **structurate** ca un arbore **JSON**. 

### Înregistrare  

**Înregistrați-vă** la [https://console.firebase.google.com](https://console.firebase.google.com). 

Apoi, **creați un proiect nou** și testați-l pentru a înțelege cum funcționează baza de date. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-1.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-2.png" /]

### Creați o Colecție

În secțiunea **Build** \> **Realtime Database** \> **Data**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-3.png" /]

### Permisiuni
Asigurați-vă că activați **accesul neautorizat** la baza de date. 

Rețineți că acest lucru este doar în **scopuri educaționale** și **nu** trebuie să faceți acest lucru pentru aplicații reale, deoarece este o **gaură de securitate**! 

După aceea, accesați-vă datele prin API-ul REST.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-4.png" /]

### Cheile Aplicației
Putem găsi **App Keys** făcând clic pe "**Project settings**" 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-5.png" /]

### Accesarea unui API REST Firebase cu Postman

- **GET**: `https://testapp-fc138.firebaseio.com`

Deschideți **Postman** și efectuați o solicitare GET pentru **preluarea** tuturor informațiilor din baza dvs. de date. 

În cazul nostru, aceasta este o listă cu toate cărțile disponibile.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-5.png" /]

**Collections** \> **New Collection**. 

Puneți linkul în câmpul "**GET**" și apăsați butonul "**Send**".

## 3. Backendless

**Backendless** este un furnizor **BaaS** care sprijină dezvoltatorii cu privire la configurarea, utilizarea și operarea unui **cloud backend** pentru aplicațiile lor. 

Deține **utilizatori** (un API pentru crearea unui cont) și **colecții de date** (un API pentru operațiuni CRUD).

### Înregistrare
Primul lucru de făcut este să creați un cont în **Backendless**, urmat de crearea unei aplicații. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-6.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-7.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-8.png" /]

### Creați un Utilizator
Pentru a **crea un utilizator**, faceți clic pe "**Data**" > "**Users**". 

Creați un utilizator nou folosind butonul "**New**":

[image assetsSrc="JS-Applications-Remote-Databases-Guide-9.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-10.png" /]

### Creați o Colecție de Date
Pentru a **crea o colecție**, faceți clic pe simbolul **„+”** chiar deasupra "**APP TABLES**" din meniu.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-11.png" /]

Aceasta va deschide o nouă fereastră în care ar trebui să introducem numele colecției. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-13.png" /]

Avem noua noastră colecție fără date. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-15.png" /]

### Creați Coloane de Date
Este timpul să **creăm** câteva **coloane de date** pentru colecția noastră. 

Click pe "**SCHEMA**".

[image assetsSrc="JS-Applications-Remote-Databases-Guide-16.png" /]

Vom crea două coloane numite **title** și **body**. 
Dând clic pe butonul **"+"** se va deschide un formular pentru noi: 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-17.png" /]

Completăm formularul, așa cum se arată în exemplu. 

Folosind butonul "**CREATE**", creăm coloana:

[image assetsSrc="JS-Applications-Remote-Databases-Guide-18.png" /]

Iată cum arată noile coloane în **browser-ul de date**: 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-19.png" /]

### Creați Rânduri de Date
Pentru a crea un rând, faceți clic pe butonul "**New**". 

Aceasta va adăuga un element nou colecției, cu o valoare implicită. 

O putem modifica introducând noua valoare în caseta de intrare.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-20.png" /]

De exemplu, putem adăuga "**Title1**". 

Apoi, putem face clic pe caseta de intrare **ownerId**: 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-21.png" /]

Se va încărca o fereastră în care putem alege un utilizator. 

Acest utilizator va fi desemnat ca proprietar al elementului curent al colecției.

Selectăm utilizatorul și apoi facem clic pe "**ADD RELATION**": 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-22.png" /]

**Am terminat** crearea noului rând:

[image assetsSrc="JS-Applications-Remote-Databases-Guide-23.png" /]

### App Keys
**App ID** și **JS API key** ale aplicației dvs. se află pe pagina principală – **Dashboard**.

### Postman și Backendless
Creați o colecție **Backendless**. 

Deschideți Postman și creați o solicitare **GET** pentru a **citi informațiile** din **colecție**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-24.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-25.png" /]

## 4. Back4App
**Back4App** este un backend cu cod redus **pentru construirea de aplicații moderne**. 

Poate fi folosit pentru a **stoca** și **a interoga date relaționale** pe cloud. 

Poate fi accesibil prin **GraphQL** și **REST** cu un backend scalabil, open-source, bazat pe platforma Parse.

### Înregistrare
Primul lucru de făcut este să vă creați un cont în **Back4App**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-26.png" /]

### Creați o colecție (Class)
Pentru a **crea** o nouă colecție **(Class)**, trebuie să faceți clic pe **"Create a Class" button** (sau "**Create your first class**").

[image assetsSrc="JS-Applications-Remote-Databases-Guide-27.png" /]

Aceasta va deschide o **fereastră nouă**. 

Aici, trebuie să alegeți **tipul** colecției și să scrieți **numele** său.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-28.png" /]

Avem prima noastră colecție care este în prezent goală.

Îi putem **adăuga** noi **coloane**, precum și noi **rânduri**. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-29.png" /]

Să încercăm să adăugăm două coloane numite **name** și **capital**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-30.png" /]

Apoi, putem adăuga **countries** la această colecție (sub formă de **rânduri**). 

Primele **patru** coloane sunt **completate automat** - nu este nevoie să le completăm.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-31.png" /]

### Permisiuni de Colectare
Această **colecție este publică** în mod prestabilit și poate fi accesată de toți cei care au ID-ul aplicației și cheia API.

Putem **modifica permisiunile** pentru colecții:

[image assetsSrc="JS-Applications-Remote-Databases-Guide-32.png" /]

În fereastra recent deschisă, putem alege permisiunile de care avem nevoie.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-33.png" /]

### App Keys
Puteți găsi toate **App Keys** în **App Settings** \-\> **Security and Keys**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-34.png" /]

### Solicitări (operațiuni CRUD)

- **GET all**:
  * Metodă: **GET**
  * Punct final: `https://parseapi.back4app.com/classes/{MyCustomClassName}`
  * Antete: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  ```


- **GET one**:
  * Metodă: **GET**
  * Punct final: `https://parseapi.back4app.com/classes/{MyCustomClassName}/{MyCurrentObjectId}`
  * Antete: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  ```


- **POST**:
  * Metodă: **POST**
  * Punct final: `https://parseapi.back4app.com/classes/{MyCustomClassName}`
  * Antete: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  Content-Type: application/json
  ```
  * Corp: **Un document JSON cu perechile cheie-valoare care reprezintă datele obiectului.**
  

- **PUT**:
  * Metodă: **PUT**
  * Punct final: `https://parseapi.back4app.com/classes/{MyCustomClassName}/{MyCurrentObjectId}`
  * Antete: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  Content-Type: application/json
  ```
  * Corp: **Un document JSON cu perechile cheie-valoare care reprezintă noile date ale obiectului.**


- **DELETE**:
  * Metodă: **DELETE**
  * Punct final: `https://parseapi.back4app.com/classes/{MyCustomClassName}/{MyCurrentObjectId}`
  * Antete: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  ```

### Documentație
Puteți afla mai multe despre **Back4App** făcând clic pe "**API Reference**".

[image assetsSrc="JS-Applications-Remote-Databases-Guide-35.png" /]

[/slide]

[slide hideTitle]
# Problemă: REST Countries

Descărcați **resursele** pentru aceste activități [here](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Apps-Rest-Services-and-AJAX-Resources.zip).

## Lucrul cu Date la Distanță
Pentru soluționarea unora dintre următoarele sarcini, va trebui să utilizați o versiune actualizată a **serviciului local REST**, furnizat în arhiva de resurse a lecției. 

Poți citi documentația de aici [read the documentation here](https://github.com/softuni-practice-server/softuni-practice-server).

## Sarcina dvs.

**NOTĂ**: Instalați  [Postman](https://www.postman.com/) REST Client pentru a **testa** funcțiile. 

- Compilați manual o **cerere HTTP** (ca text) pentru a prelua informații despre Romania
  
- Folosiți **Postman** pentru a face **aceeași cerere**

- Faceți o cerere care **recuperează** numai câmpurile **name**, **capital**, **region** și **population** pentru Italy 

- Faceți o cerere care preia informații despre **toate țările vorbitoare de limba germană**

**Prima dvs. sarcină** este să obțineți informații detaliate despre **Romania**. 

Trimiteți o solicitare "**GET**" la linkul de mai jos 

## Solicitare

`https://restcountries.eu/rest/v2/name/Romania`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-28.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-29.png" /]

Fiecare API are documentație unde puteți vedea cum să o utilizați.

Puteți găsi documentația pentru acest API [here](https://restcountries.com/).

- Încercați să filtrați numai **câmpuri specifice** ale informațiilor despre **Italy**

- Trimiteți o cerere **GET** cu parametrul necesar pentru a primi un răspuns cu **informații despre țară** în acest formular:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-30.png" /]

- Există o modalitate de a **prelua un răspuns care deține toate țările** cu cetățeni **vorbitori de limbă germană** 

- Trimiteți o cerere **GET** pentru a prelua informațiile pentru aceste țări: 
  * Austria
  * Belgium
  * Germany
  * Holy See
  * Liechtenstein
  * Luxembourg
  * Switzerland

Recuperați **numai** **names** și **region** ale acestora.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-31.png" /]

[/slide]

[slide hideTitle]

# Problemă: Bus Stop

Efectuați o solicitare HTTP care afișează orele de sosire pentru toate autobuzele de către un **bus stop ID**.

Trimiteți o solicitare **GET** către `http://localhost:3030/jsonstore/bus/businfo/:stopID` \(înlocuiți `:stopID` cu valoarea corectă\).

Veți primi un obiect JSON în formatul următor:

```
stopId: {
  buses: { busId: time, … },
  name: stopName
}
```

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-32.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-33.png" /]

## Sugestii

Webhost va răspunde cu date **valide** pentru **ID-urile** 1287, 1308, 1327 și 2334.

[/slide]

[slide hideTitle]
# Problem: Phonebook GET

Efectuați o solicitare HTTP care afișează numele și numerele de telefon dintr-o agendă. 

Solicitări **GET**: `http://localhost:3030/jsonstore/phonebook`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-34.png" /]

[/slide]

[slide hideTitle]
# Problemă: Phonebook POST

Creați două solicitări **POST** diferite folosind **Postman**. 

Datele trimise într-o solicitare **POST** ar trebui să fie un obiect JSON valid, conținând o proprietate **person** și una **phone** 

Exemplul **format** este:

```
{
"person": "<person>",
"phone": "<phone>"
}
```

**POST:** `http://localhost:3030/jsonstore/phonebook`

[/slide]


[slide hideTitle]
# Problem: Employees 

Folosiți linkul de mai jos pentru a crea solicitări GET, POST, PUT și DELETE în **Postman**: 

- [http://dummy.restapiexample.com](http://dummy.restapiexample.com/)

## Solicitare GET

Utilizați linkurile din coloana "**Full Route**" pentru a:

- Obține informații despre **toți** angajații

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-35.png" /]

- Obține informații despre un **singur** angajat

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-36.png" /]

## Solicitare POST

Utilizați linkul "**create**" pentru a adăuga o intrare nouă în baza de date:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-37.png" /]

## Solicitare PUT

**Actualizați** informațiile despre angajatul specificat:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-38.png" /]

## Solicitare DELETE

**Ștergeți** informațiile despre angajatul specificat:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-39.png" /]

[/slide]

[slide hideTitle]
# Problemă: Firebase App

Creați o aplicație **Firebase** pentru a crea o colecție care conține **titluri de cărți și autorul acestora**. 

Utilizați Postman pentru a crea, citi și șterge intrări din colecție.

|**Books Genre**|**Title**|**Author**|
|:-----:|:-----:|:-----:|
|**Non-Fiction**|Get Out of Your Head: Stopping the Spiral of Toxic Thoughts|Jennie Allen|
||Trust: America’s Best Chance|Pete Buttigieg|
||When Breath Becomes Air|Paul Kalanithi|
|**Romance**|It Ends With Us|Colleen Hoover|
||The Proposal|Jasmine Guillory|
|**Thrillers**|Gone Girl|Gillian Flynn|

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-40.png" /]

[/slide]

[slide hideTitle]
# Problemă: Backendless App

Utilizați **Backendless** pentru a crea o aplicație muzicală care conține informații despre **titlurile melodiilor** și **cântăreții** lor.

Utilizați **Postman** pentru a crea, citi și șterge intrări din colecție. 

|**Singer**|**Title**|
|:-----:|:-----:|
|Eminem|Cinderella Man|
|Alan Walker|Faded|
|Dove Cameron|We Belong|

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-41.png" /]

[/slide]
