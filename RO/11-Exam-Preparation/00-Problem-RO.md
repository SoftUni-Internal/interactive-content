# Pregătirea Examenului: Theater

[slide hideTitle]

# Regulile de Examen

**Iată un link către** [resources](https://videos.softuni.org/resources/javascript/javascript-backend/08-Exam-Preparation-NEW.zip) **pentru această sarcină.**

**Puteți vizualiza soluția vizitând pagina** [GitHub Repository](https://github.com/martinPandarski/Theaters-Node.js).

- Când sunteți gata, **ștergeți** folderul `node_modules`, asigurați-vă că toate dependențele sunt listate în fișierul `package.json` și trimiteți **proiectul arhivat**

- Vi se oferă resurse **HTML and CSS**, pe care le **POȚI modifica**

- Utilizați `Express.js` ca un cadru back-end

- Utilizați **MongoDB** ca bază de date cu **mongoose**

- Puteți utiliza orice **motor de vizualizare** vă place (Handlebars, EJS, Pug, etc...)

- Rețineți că punctele enumerate mai jos este maximul pe care îl puteți primi pentru aplicarea cu succes a unei funcționalități date

## Prezentarea Generală a Aplicației
Familiarizați-vă cu **codul HTML și CSS** furnizat pentru a crea o aplicație pentru un **teatru.**

[/slide]

[slide hideTitle]
# Cerințe Funcționale

## Oaspeți (Nu sunt Conectați)

**Aplicația** ar trebui să ofere utilizatorilor **Oaspeți** (care nu sunt conectați) funcționalitatea de **autentificare**, **înregistrare** și **vizualizare** a paginii **Guest Home**.

## Utilizatori (Conectați)

**Aplicația** ar trebui să ofere **Utilizatorilor** (conectați) funcționalitatea pentru **vizualizarea tuturor pieselor listate**, o **pagină cu detalii despre piesă și ar trebui să le poată plăcea o piesă.**

Piesele pot fi **publice** sau **ne-publice.**

Utilizatorii pot accesa **doar piesele publice.**

[/slide]


[slide hideTitle]
# Modele de Baze de Date: 10 Pts

**Baza de date** a aplicației **Theater** trebuie să accepte **două entități.**

## Utilizator

- **Username**: șir (**obligatoriu**), **unic**

- **Password**: șir (**obligatoriu**)

- **Liked Plays**: o colecție de piese

## Piesa

- **Title**: șir (**obligatoriu**), **unic**

- **Description**: șir (**obligatoriu**), lungimea maximă de 50 de simboluri

- **Image Url**: șir (**obligatoriu**)

- **Is Public**: boolean, implicit - **fals**

- **Created at**: dată sau șir, **obligatoriu**

- **Users Liked**: o colecție de utilizatori

Asigurați-vă că implementați entitățile cu **tipurile de date corecte.**

[/slide]

[slide hideTitle]
# Guest Pages: 15 Pts

Acestea sunt paginile și funcționalitățile, accesibile de **Invitați (utilizatori deconectați).**

## Pagina Principală (Utilizator Deconectat)

Enumerați **primele trei (3) piese publice** ordonate după **numărul** de aprecieri în ordine **descrescătoare**.

[image assetsSrc="JS-BackEnd-Exam-Preparation-1.png" /]

Dacă nu există încă piese în baza de date, afișați `No plays yet...`

[image assetsSrc="JS-BackEnd-Exam-Preparation-2.png" /]

## Pagina de Înregistrare (Utilizator Deconectat)

Înregistrează un utilizator din baza de date cu **nume de utilizator** și o **parolă.**

Ambele **parole** trebuie **să se potrivească!**

[image assetsSrc="JS-BackEnd-Exam-Preparation-3.png" /]

## Pagina de Autentificare (Utilizator Deconectat)

[image assetsSrc="JS-BackEnd-Exam-Preparation-4.png" /]

[/slide]


[slide hideTitle]
# Pagini de Utilizator: 55 Pts

Acestea sunt **șabloanele** și **funcționalitățile**, accesibile de către **Utilizatori** (utilizatori **conectați**).

## Pagina Principală (Utilizatori Conectați)

Listează **toate piesele publice**, sortate în **ordine descrescătoare** după **momentul creării**

Șablonul fiecărei piese include un buton `Details` care duce la **pagina cu detalii despre piesă.**

[image assetsSrc="JS-BackEnd-Exam-Preparation-5.png" /]

Dacă nu există încă **piese** în baza de date, afișați `No plays yet...`

[image assetsSrc="JS-BackEnd-Exam-Preparation-6.png" /]

## Crearea Paginii de Piese (Utilizatori Conectați)

Permite utilizatorilor să introducă o piesă cu **titlu**, **descriere**, o **imagine URL** și să aleagă dacă piesa va fi **publică** sau nu.

Veți primi valoarea casetei de selectare ca șir, "**on**", dacă este bifată sau **undefined**, dacă nu este. 

Trebuie să convertiți valoarea în Boolean (**adevărat** sau **fals**) și să salvați piesa în baza de date. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-7.png" /]

## Detalii Pagina de Conectare (Utilizatori Conectați)

În Detaliile unei piese, **numele** și **descrierea** ar trebui să fie prezente. 

## Piesa Neapreciată (Utilizatori Conectați)

În cazul în care utilizatorului nu i-a plăcut piesa, butonul **Like** ar trebui să fie **vizibil**.

[image assetsSrc="JS-BackEnd-Exam-Preparation-8.png" /]

## Piesa Apreciată (Utilizatori Conectați)

**După ce** utilizatorului i-a plăcut piesa , **elementul span** `You have already liked this play!` ar trebui să fie afișat **în loc de** butonul `[Like]`. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-9.png" /]

## Play Creator (Utilizatori Conectați)

Creatorul piesei ar trebui să vadă `[Delete]` și `[Edit]`. 

Creatorului NU ar trebui să îi poată plăcea piesele!

[image assetsSrc="JS-BackEnd-Exam-Preparation-10.png" /]

## Ștergerea Piesei (Utilizatori Conectați)

După ștergerea unei piese (făcând clic pe **butonul** `[Delete]`), utilizatorii ar trebui să fie **redirecționați către pagina principală**.

## Editarea Piesei (Utilizatori Conectați)

Toate câmpurile formularului trebuie **completate automat** cu informațiile corespunzătoare piesei selectate.

[image assetsSrc="JS-BackEnd-Exam-Preparation-11.png" /]
[/slide]


[slide hideTitle]

# Cerințe de Securitate: 10 Pts

**Cerințele de securitate** privesc în principal accesul. 

- Utilizatorii **Guest** (care nu sunt conectați) pot accesa pagina **Home** și funcționalitatea acesteia

- Utilizatorii **Guest** (care nu sunt conectați) pot accesa pagina **Login** și funcționalitatea acesteia

- Utilizatorii **Guest** (care nu sunt conectați) pot accesa pagina **Register** și funcționalitatea acesteia

- **Users** (conectați) pot accesa pagina **Home page** (**Lista tuturor pieselor**) și funcționalitatea acesteia

- **Users** (conectați) pot accesa pagina **Play Details** și funcționalitatea acesteia

    * **users** (nu creatorul piesei) pot da **Like** unei piese **o dată** 

    * **users** (creatorul piesei) pot face **Edit** sau **Delete** pieselor

- **Users** (conectați) pot accesa pagina **Create Play** și funcționalitatea acesteia

- **Users** (conectați) pot accesa funcționalitatea **Logout**

[/slide]

[slide hideTitle]
# Validarea și Gestionarea Erorilor: 10 Pts

Aplicația ar trebui să anunțe utilizatorii cu privire la rezultatul acțiunilor lor.

## Autentificare / Înregistrare

Ar trebui să faceți următoarele validări:

- **username** ar trebui să aibă **cel puțin 3 caractere** și să fie format doar din **litere englezești** sau **cifre**

- **password** ar trebui să aibă **cel puțin 3 caractere** și să fie format doar din **litere englezești** sau **cifre**

- **Parola repetată** ar trebui să fie **egală cu parola**

[image assetsSrc="JS-BackEnd-Exam-Preparation-12.png" /]

## Piesă

Ar trebui să faceți următoarele validări în timp ce **creați** sau **editați o piesă:**

- **title** nu ar trebui **să fie necompletat**

- **description** nu ar trebui **să fie necompletat**

- **imageUrl** nu ar trebui **să fie necompletat**

[image assetsSrc="JS-BackEnd-Exam-Preparation-13.png" /]

[/slide]

[slide hideTitle]

# Bonus: 10 Pts

- `[Sort by Likes]`: Filtrați **piesa cu cele mai multe aprecieri** 

[image assetsSrc="JS-BackEnd-Exam-Preparation-14.png" /]

- `[Sort by Date]`: Sortează toate piesele după dată de la cele mai noi la cele mai vechi

[image assetsSrc="JS-BackEnd-Exam-Preparation-15.png" /]

[/slide]
