# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Messenger

**Aici găsiți un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-applications/RD-01.Messenger.zip) **pentru această sarcină**.

## Lucrul cu Date Remote 
Pentru a soluționa câteva dintre sarcinile de mai jos, veți avea nevoie de o versiune up-to-date a serviciului local REST.

**Puteți să îl descărcați** [aici](https://videos.softuni.org/resources/javascript/javascript-applications/RD-server.zip).

Puteți [citi documentația aici](https://github.com/softuni-practice-server/softuni-practice-server).

## Sarcina Voastră
Creați o aplicație JavaScript care **înregistrează** și **afișează** mesaje. 

Utilizatorul trebuie să poată:
- **posta** un mesaj care conține un nume și conținut
- **accesa** toate mesajele înregistrate la momentul actual

**URL-ul** pentru solicitare este: `http://localhost:3030/jsonstore/messenger`.

Când **butonul** \[**Send**\] este apăsat, trebuie să creați un **obiect nou** și să trimiteți o **solicitare POST** la URL-ul dat. 

Folosiți următoarea structură de mesaj:

```
{
  author: authorName,
  content: msgText,
}
```

Dacă dați click pe **butonul** \[**Refresh**\], trebuie **să preluați** toate mesajele cu o **solicitare GET** și să le afișați în căsuța de text în formatul următor:

`{author}: {message}`

## Exemple

[image assetsSrc="Remote-Databases(21).png" /]

[image assetsSrc="Remote-Databases(22).png" /]

[/slide]

[slide hideTitle]
# Problemă: Phonebook

**Aici aveți un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-applications/RD-02.Phonebook.zip) **pentru această sarcină**.

Creați un program JavaScript care poate **încărca**, **crea** și **elimina** înregistrări dintr-o **carte de telefoane**. 

Veți primi un **șablon HTML** la care trebuie să **adăugați** **funcționalitatea necesară**.

Când butonul \[**Load**\] este apăsat, o solicitare **GET** va fi trimisă către server pentru a prelua toate înregistrările din cartea de telefoane. 

Fiecare înregistrare primită trebuie plasată într-o etichetă `<li>` în cadrul unei alte etichete `<ul>` cu un **id "phonebook"** în formatul următor: `<person>: <phone>`. Fiecare înregistrare trebuie să aibă un buton \[**Delete**\] atașat. 

Apăsarea butonului \[**Delete**\] trebuie să trimită o solicitare **DELETE** către server și să elimine înregistrarea. 

Răspunsul primit va fi un obiect în formatul următor:

`{<key>:{person:<person>, phone:<phone>}, <key2>:{person:<person2>, phone:<phone2>,…}`, unde `<key>` este o cheie unică furnizată de server, în timp ce `<person>` și `<phone>` sunt valorile propriu-zise.

Când butonul \[**Create**\] este apăsat, o nouă solicitare **POST** trebuie făcută către server cu informația din **căsuțele de text** **person** și **phone**. 

Căsuțele de text menționate trebuie eliberate și cartea de telefoane trebuie reîncărcată automat (ca și cum butonul \[**Load**\] ar fi fost apăsat).

Datele **trimise** în urma unei solicitări **POST** trebuie să fie un **obiect valid JSON** care cpnține proprietățile **person** și **phone**. 

**Exemplu de format:**

```
{
  "person": "<person>",
  "phone": "<phone>"
}
```

**URL-ul** la care trebuie să trimită solicitări programul vostru este: [http://localhost:3030/jsonstore/phonebook](http://localhost:3030/jsonstore/phonebook).

Solicitările **GET** și **POST** trebuie să ajungă la `http://localhost:3030/jsonstore/phonebook`.

Solicitările **DELETE** trebuie să ajungă la `http://localhost:3030/jsonstore/phonebook/:key`, unde \:**key** este cheia unică a înregistrării (puteți găsi **cheia** cu ajutorul proprietății key din solicitarea **GET**)

## Screenshots:

[image assetsSrc="Remote-Databases(23).png" /]

[/slide]

[slide hideTitle]
# Problemă: Students

**Acesta este un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-applications/RD-03.Students.zip) **pentru această sarcină**.

Sarcina voastră este să implementați o funcționalitate pentru a crea și pentru a lista studenți dintr-o bază de date. 

Creați o colecție nouă numită "**students**".

Fiecare student are:
- `FirstName` - **șir**, nu este gol
- `LastName` - **șir**, nu este gol
- `FacultyNumber` - **șir** de numere, nu este gol
- `Grade` - **număr**, nu este gol
  
Când creați un student nou, asigurați-vă că numiți proprietățile în mod corespunzător.

Va trebui de asemenea să extrageți studenți. 

Veți primi un **șablon HTML** care cuprinde un tabel. 

Creați o **solicitare AJAX** care extrage toți studenții.

URL-ul pentru această sarcină este: `http://localhost:3030/jsonstore/collections/students`.

## Screenshots

[image assetsSrc="Remote-Databases(24).png" /]

[/slide]

[slide hideTitle]
# Problemă: Book Library

**Acesta este un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-applications/RD-04.Book-library.zip) **pentru această sarcină**.

Sarcina voastră este să implementați operațiile CRUD pentru o bibliotecă virtuală. 

**Utilizați următoarea rută pentru a prelua toate cărțile, utilizând o solicitare GET:**

`http://localhost:3030/jsonstore/collections/books`

Utilizați scheletul furnizat pentru a crea funcționalitătile care lipsesc.

Încărcați toate cărțile dând click pe butonul \[**LOAD ALL BOOKS**\]. 

[image assetsSrc="Remote-Databases(25).png" /]

## Preluarea unei Cărți
Această funcționalitate nu este necesară pentru această sarcină, dar puteți să **o încercați** în Postman prin trimiterea unei solicitări **GET** pentru a **prelua cartea** cu ID-ul: "**d953e5fb-a585-4d6b-92d3-ee90697398a0**". 

Trimiteți o solicitare **GET** la acest **URL**:

`http://localhost:3030/jsonstore/collections/books/:id`

## Crearea unei Cărți
Realizați o funcționalitate pentru a crea o carte nouă atunci când butonul \[**Submit**\] este apăsat. 

Înainte de a trimite solicitarea, validați câmpurile (asigurați-vă că nu sunt goale). 

Pentru a **crea** o carte, trebuie să trimiteți o solicitare **POST** către baza de date, iar corpul JSON trebuie să respecte **următorul** format: 

```
{
  "author": "New Author",
  "title": "New Title"
}
```

## Actualizarea unei cărți
Atunci când apăsați pe butonul \[**Edit**\] al unei anumite cărți, completați informațiile cărții în câmpuri în modul următor:

[image assetsSrc="Remote-Databases(26).png" /]

Comanda HTTP **"PUT" modifică** o **resursă** HTTP existentă. 

URL-ul este: `http://localhost:3030/jsonstore/collections/books/:id`.

Corpul JSON trebuie să respecte **următorul** format:

```
{
  "author": "Changed Author",
  "title": "Changed Title"
}
```

## Eliminarea unei Cărți
Dacă dați click pe butonuul \[**Delete**\], trebuie să ștergeți cartea, fără confirmare. 

Pentru a elimina o carte, trimiteți **o solicitare DELETE** la: `http://localhost:3030/jsonstore/collections/books/:id`.

[/slide]

[slide hideTitle]

# Problemă: Fisher Game

**Acesta este un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-applications/RD-05.Fisher-Game.zip) **pentru această sarcină**.

Sarcina voastră este să implementați operațiile CRUD și o funcționalitate pentru autentificarea utilizatorului.

Dacă utilizatorul nu este logat, toate butoanele trebuie să fie dezactivate, cu excepția butonului \[**LOAD**\].

Prin apăsarea acestuia, toate capturile trebuie încărcate de pe server și trebuie supuse randării, la fel ca în imaginea de mai jos:

[image assetsSrc="Remote-Databases(27).png" /]

## Butonul Load 

Apăsarea butonului \[**Load**\] trebuie să aibă ca rezultat **listarea tuturor** capturilor. 

Se aplică pentru **toți utilizatorii**.

## Butonul Update 

Apăsarea butonului \[**Update**\] are ca rezultat trimiterea unei solicitări PUT și **actualizarea** capturii în Firebase. 

Această funcționalitate trebuie sa fie accesibilă **doar** pentru **creatorul capturii**.

## Butonul Delete 

Apăsarea butonului \[**Delete**\] trebuie **să elimine captura** atât din baza de date, cât și de pe pagină. 

Din nou, acest lucru trebuie să fie valabil **doar** pentru **creatorul capturii**. 

## Butonul Add 

Apăsarea butonului \[**Add**\] trebuie să **înregistreze o nouă captură** cu valorile intrărilor din câmp, cu un `id` "**addFrom**". 

Această funcționalitate este valabilă doar pentru utilizatorii **logați**.

## Proprietăți

Fiecare **captură** se caracterizează prin:

- `angler` - un **șir** care reprezintă numele persoanei care a prins peștele
  
- `weight` - un **număr în virgulă mobilă** care reprezintă greutatea peștelui în kilograme
  
- `species` - un **șir** care reprezintă numele speciei
  
- `location` - un **șir** care reprezintă locația unde a fost realizată captura
  
- `bait` - un **șir** care reprezintă momeala folosită pentru capturarea peștelui
  
- `captureTime` - un **număr întreg** care reprezintă timpul necesar capturii, în minute

## Solicitări

Utilizați următoarele **solicitări** pentru a accesa datele:

- **Listarea Tuturor Capturilor**
  * Destinație - `http://localhost:3030/data/catches`
  * Metodă: **GET**
  
  
- **Crearea unei Noi Capturi**
  * Destinație: `http://localhost:3030/data/catches` 
  * Metodă: **POST**
  * Corpul solicitării (**JSON**): 
  ```
  {"angler":"…", "weight":…, "species":"…", "location":"…",
   "bait":"…", "captureTime":…}
  ```


- **Actualizarea unei Capturi**
  * Destinație: `http://localhost:3030/data/catches/:catchId`
  * Metodă: **PUT**
  * Corpul solicitării (**JSON**): 
  ```
  {"angler":"…", "weight":…, "species":"…", "location":"…",
   "bait":"…", "captureTime":…}
  ```


- **Eliminarea unei Capturi**
  * Destinație: `http://localhost:3030/data/catches/:catchId`
  * Metodă: **DELETE**

[/slide]
