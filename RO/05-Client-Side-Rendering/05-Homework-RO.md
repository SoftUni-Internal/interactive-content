# Teme Pentru Acasă

[slide hideTitle]
# Problemă: List Towns

**Acesta este un link către** [reursele](https://videos.softuni.org/resources/javascript/javascript-applications/01.List-Towns-NEW.zip) **pentru această sarcină.**

Există un **câmp pentru introducerea intrărilor**, cu un **buton**. 

În câmpul de intrare trebuie să introduceți **elemente**, **separate** prin **virgulă** și **spațiu** (", "). 

Realizați un **șablon** simplu care creează o **listă** de orașe. 

Informațiile despre fiecare **oraș** provin din câmpul de **intrare**.

**Trebuie** să atașați un eveniment click de **buton** cu id-ul "**btnLoadTowns**" în funcția `attachEvents()` și să **randați** **orașele** introduse în câmpul de intrare în **șablonul HTML** cu id-ul "**towns-template**".

## Screenshots

[image assetsSrc="js-application-client-side-rendering-list-towns-1.png" /]

**Așa arată HTML-ul:**

```js
<div id="root">
   <ul>
      <li>London</li>
      <li>Paris</li>
      <li>Berlin</li>
      <li>Moscow</li>
   </ul>
</div>
```
[/slide]

[slide hideTitle]
# Problemă: HTTP Status Cats

**Acesta este un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-applications/02.HTTP-Status-Cats-NEW.zip) **pentru această sarcină.**

**Refactorizați** codul **HTML** și creați un **șablon** care să reprezinte **fiecare** **card** de pisică separat. 

După ce **ați creat** șablonul, **randați-l** în **div** cu **id-ul** "**allCats**".

O **pisică** are un **id**, **statusCode**, **statusMessage** și **imageLocation**. 

Pisicile trec prin procesul de **seeding** cu ajutoul **funcției** din fișierul js numit "**catSeeder.js**".

Fiecare card are un **buton** care **dezvăluie** informațiile legate de codurile de stare pentru fiecare pisică. 

Trebuie să **comutați** butonul și să schimbați textul de la "**Show status code**" la "**Hide status code**".

## Screenshots

[image assetsSrc="js-application-client-side-rendering-http-status-cats-1.jpg" /]

**"Show status code"/"Hide status code":**

[image assetsSrc="js-application-client-side-rendering-http-status-cats-2.jpg" /]

[image assetsSrc="js-application-client-side-rendering-http-status-cats-3.jpg" /]

[/slide]

[slide hideTitle]
# Date Remote

Pentru soluțiile următoarelor sarcini, trebuie să folosiți o versiune up-to-date a **serviciului local REST**, oferită de arhiva [resurselor](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Apps-Server.zip). 

Puteți citi documentația [aici](https://github.com/softuni-practice-server/softuni-practice-server).
[/slide]

[slide hideTitle]
# Problemă: Fill Dropdown

**Acesta este un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-applications/03.Fill-Dropdown.zip) **pentru această sarcină.**

Creați o funcționalitate care **încarcă elementele unei liste** dintr-un serviciu remote și le afișează într-un meniu **drop-down**. 

Utilizatorul trebuie să aibă posibilitatea să **adauge elemente noi** în serviciu prin introducerea acestora în câmpul de **intrări** al paginii și prin trimiterea formularului. 

Creați un **șablon** pentru **lista drop-down** și pentru **elementele** din ea, un șablon care poate fi **ușor actualizat** cu noi înregistrări.

Atunci când programul pornește, datele trebuie preluate automat de pe server cu ajutorul unei solicitări GET de la URL-ul `http://localhost:3030/jsonstore/advanced/dropdown` și randate ca elemente `<option>` în interiorul etichetei `<select>`, cu **id-ul** "**menu**". 

După trimiterea formularului, trimiteți o solicitare **POST** la același URL și dacă aceasta este executată cu succes actualizați lista de opțiuni prin adăugarea noului element.

Fiecare element are o proprietate **text** introdusă de utilizator și "\_id", care este generat de către server. 

Atunci când creați elemente HTML, folosiți "\_id" ca valoare a opțiunii și textul ca opțiune **textContent**.

## Exemplu
[image assetsSrc="js-application-client-side-rendering-fill-dropdown-1.png" /]


**HTML-ul randat trebuie să arate așa:**

```js
<select id="menu">
   <option value="985d9eab-ad2e-4622-a5c8-116261fb1fd2">Rome</option>
   <option value="3987279d-ad4-4afb-8ca9-5b256ae3b298">Amsterdam</option>
   <option value="8f414b4f-ab39-4d36-bedb-2ad69da9c830">Munich</option>
</select>
```
[/slide]

[slide hideTitle]
# Problemă: Table - Search Engine

**Acesta este un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-applications/04.Table-Search.zip) **pentru această sarcină.**

Creați o funcționalitate care efectuează **căutări** într-un **tabel** în funcție de datele de intrare furnizate. 

Creați un **șablon** pentru un **rând al tabelului**, care poate fi **actualizat** cu valorile clasei când utilizatorul efectuează o căutare. 

Încărcați datele cu ajutorul unei solicitări **GET** de la următorul URL: `http://localhost:3030/jsonstore/advanced/table`.

[image assetsSrc="js-application-client-side-rendering-table-search-engine-1.png" /]

Când butonul "**Search**" este **apăsat**, parcurgeți toate celulele din tabel și verificați dacă datele de intrare date sunt prezente. 

Căutarea nu trebuie să țină cont de tipul de litere folosit \(majuscule sau minuscule\).

Dacă vreunul dintre rânduri conține șirul introdus, adăugați o modalitate de **selectare** a clasei pentru acel rând. 

Țineți cont că pot exista mai multe rânduri care conțin șirul introdus. 

Dacă nu există nicio potrivire, **nimic** nu trebuie evidențiat.

**Notă:** După fiecare căutare, **eliberați câmpul datelor de intrare** și **eliminați toate clasele deja selectate** (dacă acestea există) în urma căutării precedente, astfel încât for **noua căutare** să conțină doar **rezultatele noi**.

Vedeți fișierul **example.html** pentru a observa cum arată html-ul randat.

## Exemplu

De exemplu, dacă încercăm să găsim "**sam**":

[image assetsSrc="js-application-client-side-rendering-table-search-engine-2.png" /]

**Rezultatul ar trebui să fie:**

[image assetsSrc="js-application-client-side-rendering-table-search-engine-3.png" /]

Dacă încercăm să găsim toți studenții care au adrese de email în domeniul "**john-dam**", rezultatul așteptat este:

[image assetsSrc="js-application-client-side-rendering-table-search-engine-4.png" /]


[/slide]

[slide hideTitle]
# Problemă: Book Library

**Acesta este un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-applications/05.Book-Library.zip) **pentru această sarcină.**

Creați șabloane pentru toate elementele de pe pagină. 

Vedeți fișierul **example.html** pentru o previzualizare a modului în care trebuie să arate HTML-ul randat.

Sunteți liberi să adăugați atribute care să vă ajute să implementați funcționalitatea cerută.

## Preluarea Tuturor Cărților

Prima sarcină este să trimiteți o solicitare "**GET**" pentru a extrage toate cărțile atunci când butonul "**Load All Books**" este apăsat. 

Pentru a extrage datele din API, trimiteți o solicitare la următorul URL: `http://localhost:3030/jsonstore/collections/books`.

[image assetsSrc="js-application-client-side-rendering-book-library-1.jpg" /]

## Crearea unei Cărți

Inițial, formularul cu **id-ul** "**add-form**" trebuie să fie afișat. 

Realizați o funcționalitate care creează o nouă înregistrare a unei cărți atunci când butonul de trimitere este apăsat. 

Înainte să trimiteți solicitarea asigurați-vă că câmpurile nu sunt goale (validați datele de intrare). 

Pentru **a crea** o nouă înregistrare a unei cărți, trebuie să trimiteți o solicitare "**POST**", iar corpul JSON trebuie respecte următorul format: 

```js
{
  "author": "New Author",
  "title": "New Title"
}
```

## Preluarea unei Cărți 
Trimiteți o soliciare "**GET**" la următorul URL: `http://localhost:3030/jsonstore/collections/books/:id`.

## Actualizarea unei Cărți
Dacă butonul de editare al unei înregistrări este apăsat, afișați formularul cu **id-ul** "**edit-form**" și populați câmpurile acestuia cu informațiile cărții selectate:

[image assetsSrc="js-application-client-side-rendering-book-library-2.jpg" /]

Comanda HTTP "**PUT**" modifică o **resursă** HHTP existentă. 

URL-ul este: `http://localhost:3030/jsonstore/collections/books/:id`.

Corpul JSON trebuie să aibă **următorul** format:

```js
{
  "author": "Changed Author",
  "title": "Changed Title"
}
```
[/slide]
