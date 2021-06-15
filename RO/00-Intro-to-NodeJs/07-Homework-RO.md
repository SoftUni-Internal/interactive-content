# Teme Pentru Acas: Cat Shelter

[slide hideTitle]
# Descriere

**Aici aveți link** [link](https://videos.softuni.org/resources/javascript/javascript-backend/01-Intro-To-NodeJs-Homework-Resources-NEW.zip) **către resursa necesară rezolvării acestei sarcini.**

Exercițiul în sine va fi împărțit în mai multe părți, fiecare conținând informații mai concrete și sugestii prvind modul de a dezvolta funcționalitatea specificată mai jos. 

"Cat Shelter" este un **catalog de pisici** extrem de simplu, care se reflectă în "baza de date" (fișier JSON) a unui **adăpost de pisici** oarecare și în care **fiecare utilizator** (a cărui înregistrare nu este necesară) poate fi **un potențial proprietar**.

Aplicația va fi compusă din operațiuni de bază conform acronimului CRUD (**Creează (Create)** pisica, **Citește (Read)** pisica, **Actualizează (Update)** pisica și and **Șterge (Delete)** pisica). 

**Fiecare pisică** are un **nume**, o **descriere**, o **imagine** și o **rasă**.

## Specificațiile proiectului

Realizați design-ul și implementarea unei **aplicații web** (conținând rutare și mai multe pagini web) numită **Cat Shelter** folosind HTML 5, CSS 3 și Node.js.


[/slide]

[slide hideTitle]

# Funcționalitate

Aplicația trebuie să conțină următoarele **funcționalități**:

- **Adăugare rasă a pisicii**

  - Creați **rasa** pisicilor, din care puteți alege ulterior, când este adăugată o nouă pisică adăpostului

- **Adăugare pisică**

  - Creați o pisică nouă, care are un **nume**, o **descriere**, o **imagine**, și o **rasă**
  - **Toate pisicile** trebuie salvate într-un fișier **JSON** (care va fi baza noastră de date)

- **Listarea tuturor pisicilor**

  - Listează toate pisicile din "baza de date", **indiferent de rasă**

- **Editare pisică**

  - Editează informațiile referitoare la pisici
    * modificările trebuie să fie salvate în "baza de date"

- **Șterge pisică**

  - Șterge o anumită pisică selectată din baza de date
    * modificările trebuie să fie salvate în "baza de date"

- **Caută pisică**
  - Caută în "baza de date" cu pisici după un anumit **șir de interogare** și arată rezultatele, dacă acestea există

## Exemple

- Pagina de început `/`, unde **sunt prezentate toate pisicile** create și existente în baza de date

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-1.jpg" /]

- Adaugă rasa `/addBreed`, unde poate fi creată **o nouă rasă de pisică** 
  * de aici se poate alege o rasă când se adaugă o pisică nouă în adăpostul de pisici

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-2.jpg" /]

- Adaugă pisică `/addCat`, unde se poate crea o nouă pisică și apoi se salvează în "baza de date" a adăpostului
  * toate rasele create în pasul anterior sunt disponibile într-un meniu, pentru a se putea selecta rasa dorită

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-3.png" /]

În prezent, sunt create 5 rase (pisicile **Bombay**, **American Bobtail**, **Bengaleză**, **British Shorthair**, și **Necunoscută**)

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-4.png" /]


[/slide]

[slide hideTitle]
# Comportamentul Așteptat

## Adăugarea unei Rase

Adăugăm o rasă nouă de pisică denumită "**Persian cat**":

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-5.jpg" /]

După aceea, creăm o pisică **nouă** care are rasa nou creată:

-**breed**: "**Persian cat**"
- **name**: "**Niya**"
- **description**: "**Lonely and lazy cat seek for a hospitable owner**" 
- și o **imagine** importată

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-6.png" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-7.png" /]

## Adăugarea unei Pisici

După ce apăsați pe **butonul** `[ADD CAT]`, ar trebui să urmeze o **redirecționare** către pagina de început unde să se vadă toate pisicile din adăpost, inclusiv cea nouă.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-8.jpg" /]

## Modificarea Informațiilor

De exemplu, dacă apăsăm pe butonul `[Change Info]` corespunzător lui Jerry, ar trebui să ni se încarce următoarea pagină:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-9.png" /]

Schimbăm **numele** și **rasa** lui Jerry:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-10.png" /]

După ce facem click pe **butonul** `[EDIT CAT]`, ar trebui să urmeze o redirecționare către pagina de început `/`, unde să se fi aplicat deja schimbările:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-11.jpg" /]

## Adopția

Dacă facem click pe **butonul** `[New Home]` pentru LeeRoy, următoarea pagină ar trebui să se încarce:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-12.jpg" /]

Dacă dăm click pe **butonul** `[SHELTER THE CAT]`, pagina de început Home page `/` ar trebui să se încarce prin redirecționare și **LeeRoy** nu ar trebui să mai **apară**, pentru că cineva s-a oferit să îl ia acasă și a fost adoptat:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-13.jpg" /]

## Căutarea

Dacă ne folosim de bara de căutare pentru a identifica toate pisicile persane, rezultatul ar trebui să fie:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-14.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-15.jpg" /]

[/slide]

[slide hideTitle]
# Rutarea

Vor fi diferite **vizualizări** care vor fi prezentate pe baza **rutării** (URL-ul curent).

Nu există reguli stricte referitoare la cum ar trebui să arate rutarea aplicației curente, dar există un set comun de **reguli de urmat**:

- Utilizați URL-uri **scurte** și **clare**
  * exemple bune: `/cats/add`, `/cats/edit/3`

  * exemple rele: `/catAddInfo.html`, `showAllProductsByCategoryName/{categoryName}`

- Urmați **standardele HTTP**
  * utilizarea adecvată a metodelor HTTP (GET, POST, PUT, etc.)

  * urmărirea tiparului GET – POST – Redirect

## Modele

**Cat**

- **id**: **șir** sau **număr** - **solicitat** și **unic**

- **name**: **șir** - solicitat

- **description**: **șir** conținând informații suplimentare despre pisică

- **image**: **șir** conținând **referire** la o **imagine** care prezintă pisica dată

- **breed**: **șir** referindu-se la rasa pisicii

[/slide]

[slide hideTitle]
## Configurarea Mediului Integrat de Dezvoltare (IDE)

Pentru început, configurați mediul integrat de dezvoltare (IDE) sau editorul de text.

Așa cum am menționat mai sus, următorii pași vor include capturi de ecran din **Visual Studio Code**.

Alte alegeri la fel de populare sunt **Atom** și **WebStorm**.

Înainte de a continua cu pasul următor, asigurați-vă că totul este configurat în IDE-ul vostru și că puteți începe.

## Configurarea Inițială

Mai întâi, să începem prin a crea proiectul:

Mergeți în folderul unde vreți să salvați proiectul, apoi apăsați `Shift + Right mouse click` (click dreapta) și faceți click pe "**Open command window here**".

Înlăuntrul acestei ferestre nou create, tastați "**npm init**" și completați datele proiectului, așa cum considerați voi de cuviință.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-16.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-17.jpg" /]

Dacă folosiți **Visual Studio Code**, atunci în aceeași consolă (după ce ați inclus toate informațiile necesare), tastați: "**code**".

Această comandă va **deschide** editorul pentru voi.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-18.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-19.jpg" /]

## Structura Folderului

Să creăm structura **inițială** a folderului de proiect. 

Ea ar putea arăta așa:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-20.jpg" /]

Descărcați **resursele** și puneți `site.css` și `favicon.ico` în "**cuprinsul**" folderului, ca în imaginea de mai jos:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-21.jpg" /]

Mutați toate **vizualizările** în **folderul de vizualizări**, astfel:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-22.jpg" /]

[/slide]

[slide hideTitle]
# Inițializarea Serverului

Mergeți la fișierul `index.js` și începeți să implementați serverul.

Mai întâi, ar trebui să creați **două constante**, una pentru **modulul HTTP** și cealaltă pentru **portul** pe care îl vom utiliza pentru serverul nostru.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-23.jpg" /]

Odată ce solicităm modulul HTTP, putem crea serverul printr-o funcție de tip `createServer`.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-24.jpg" /]

Când faceți acest lucru, deschideți terminalul cu comanda `(Ctrl + \)` și rulați serverul cu comanda `node index`.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-25.jpg" /]


[/slide]

[slide hideTitle]
# Afișarea Paginii Principale

Vom începe să implementăm **logica aplicației** în pașii următori.

Vă rog să notați că aplicația **nu are** utilizatori.

Mai întâi, oricând accesăm website-ul, vrem să afișăm modul implicit, sau așa-numita pagină **principală**, de început sau **home**.

Pentru a face acest lucru, trebuie să:

- Implementăm **logica de back-end** a ceea ce urmează a fi afișat
- Scriem **conținutul ce trebuie vizualizat (view)** (HTML și CSS)
- Scriem **server-ul** și **să executăm** **logica** implementată în primul pas

Apoi, mergeți la folderul "**handlers**" și adăugați un nou fișier `home.js`. 

Pentru început, adăugați **modulele** pe care le vom folosi:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-26.jpg" /]

Așa cum am menționat mai sus, vom folosi fișiere **JSON files** pentru a simula o bază de date, așa încât creați un folder denumit "**date**".

În acest folder, creați 2 fișiere **JSON** (**cats.json** (pisici.json) și **breeds.json** (rase.json)).

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-27.jpg" /]

Amintiți-vă să le includeți în fișierul `home.js`. 

Vom avea nevoie de ele **mai tărziu**, dar le vom **include** oricum.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-28.jpg" /]

Apoi, haideți să începem să **exportăm** logica sub forma unei **funcții** care acceptă atât o **solicitare** cât și un **răspuns**.

După aceea, putem să **parsăm** **URL-ul** solicitat și să **îl atașăm** obiectului solicitării:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-29.jpg" /]

În pasul următor, ar trebui să îi spunem **server-ului** când să **expedieze** solicitarea către **home handler** - când **URL-ul solicitat** este: `/` și **metoda** de solicitare este "**GET**":

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-30.jpg" /]

Dacă nu am reusit să gestionăm cererea curentă, vom **notifica** serverul în acest sens, returnând `true` (este o solicitare care **nu a fost soluționată** - `true`).

Ceea ce a mai rămas de făcut este să **găsim** **pagina** HTML 5, **să o citim**, și să o **trimitem** ca **răspuns**.
[/slide]

[slide hideTitle]
# Sugestii

Înlăuntrul instrucțiunii **if** de mai sus, ar trebui să localizați fișierul local `index.html` (practic pagina noastră principală) și să memorați calea de acces către acesta într-o variabilă denumită, de exemplu, **filePath**.

Folosiți funcțiile `path.normalize` și `path.join`, împreună cu proprietatea`__dirname property` pentru a obține acest rezultat.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-31.jpg" /]

Folosiți modulul `fs` pentru a citi fișierul HTML, utilizând funcția **readFile** cu derivata **filePath**.

Dacă se semnalează o eroare, trimiteți un cod de **404 response** și un **mesaj text simplu** corespunzător acestuia.

Dacă acea cale de acces specifică fișierului este **corectă**, trimiteți un răspuns **HTML** cu un **cod** **200** și un **content type** sub formă de "**text/html**".

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-32.jpg" /]

Pagina noastră HTML (**home page**) este aproape **gata** (pisicile vor fi adăugate mai târziu).

Vom fi în curând pregătiți să o **testăm** pentru a vedea dacă toate cele menționate mai sus funcționează.

Mergeți în folderul "**handlers**" și adăugați fișierul `index.js`.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-33.jpg" /]

Acest fișier `index.js` din interiorul folderului de operatori "**handlers**" este fișierul care **exportă** toate **handlerele** ulterioare pe care urmează să îi creăm (**static file handler** și **cat handler**).

După aceea, mergeți înapoi la **root folder** și deschideți `index.js` (fișierul unde am creat **serverul** nostru HTTP).

Așa cum am menționat mai sus, **fișierul** `index.js` **file** din **folderul** "**handlers**" va exporta **toate tipurile de handlere** către "open world". 

Acesta este motivul pentru care ar trebui să îl solicităm ca parte din acest fișierul `index.js`:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-34.jpg" /]

**Efectuați o trecere** prin toate handlerele și dacă îl găsiți pe cel potrivit, rupeți bucla. 

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-35.jpg" /]

**Inițializați serverul** din nou și tastați **localhost:3000** în pagina de browser pentru a vedea rezultatele.

Rezultatul va fi **waiting on the localhost**...

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-36.jpg" /]

**Opriți** încărcarea paginii făcând click pe butonul `[_X_]`.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-37.jpg" /]

Fișierul nostru `index.html` este vizualizat, dar **fără nici un stil**.

Dacă deschideți un **tab de rețea** în interiorul **DevTools** și dați un refresh paginii, rezultatul care va apărea va fi asemănător celui de mai jos:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-38.jpg" /]

Cu alte cuvinte, serverul nu are funcționalitatea de a **servi fișiere statice**. 

Vom soluționa acest aspect în secțiunea următoare.
[/slide]

[slide hideTitle]

# Servirea Fișierelor Statice

În această etapă, vom putea servi fișiere statice.

Cu alte cuvinte, vom putea încărca fișiere **CSS**, **JS** și **imagini** .

Să începem cu adăugarea logicii de **back-end**.

Adăugați un nou fișier denumit `static-files.js` în folderul "**handler**".

Acesta se va comporta precum un **handler** normal, dar **în loc să returneze un HTML**, el va returna **fișier(e)**.

Folderul nostru public se va numi "**content**":

Mai întâi, să creăm o funcție numită `getContentType`.

Ea va primi o cale de acces ***pathname*** (url), va verifica **extension** fișierului și va returna `content-type` **corect** :

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-39.jpg" /]

Urmând exemplul dat, continuați să scrieți logica și pentru celelalte extensii (precum **HTML**, **png**, **js**, etc...).

După aceea, ar trebui să **exportați** o **funcție** care va face următoarele:

- va primi **cererea** noastră atât de familiară și parametrii de **răspuns**
- va verifica **pathname** și metoda de **request**

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-40.jpg" /]

**Implementarea** logicii lipsă.

- **Citiți un fișier** cu funcția `readFile` din modulul **file system** (**fs**)
- Verificați erorile
- Livrați **tipul de conținut (content type)** corect
- **Trimiteți** **răspunsul** corect cu **datele primite** din partea modulului `fs`

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-41.jpg" /]

Acesta va funcționa pentru moment, dar atunci când vom încărca imaginile cu pisici la nivel local, ar trebui să mai facem niște modificări. 

Mergeți înapoi la `handlers/index.js` și adăugați operatorul de fișiere **statice**:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-42.jpg" /]

Dacă nu ați inclus încă fișierul `site.css` și `favicon.ico` în `home/index.html`, mergeți înapoi și faceți întâi asta.

## Notă

Asigurați-vă că toate atributele **href** din HTML încept cu "/**content**/…"

Reinițializați aplicația web:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-43.jpg" /]

[/slide]


[slide hideTitle]

# Implementarea Bazei de Date

Așa cum am menționat, vom folosi **fișiere JSON**.

Astfel, creați un folder nou denumit "**date**" (dacă nu ați facut-o deja) și adăugați **două** fișiere JSON în el (denumite **cats** și **breeds**).

La început, ele vor fi **matrici goale** (ambele fișiere), dar când vom începe să creăm **cats**, respectiv **breeds**, le vom completa.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-44.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-45.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-46.jpg" /]

[/slide]

[slide hideTitle]

# Accesarea Tuturor Vizualizărilor

Ar trebui să creăm un nou operator pentru logica referitoare la pisici. 

Creați un fișier cu denumirea `cat.js` în interiorul folderului denumit "**handlers**".

Acest operator va fi responsabil pentru următoarele:
- **Va afișa** formatul (HTML)
- **Va parsa** datele din acesta 
- **Va adăuga** o nouă pisică în fișierul **JSON**

Mai întâi, **includeți** toate bibliotecile necesare:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-47.jpg" /]

Poate părea că este foarte mult, însă nu vă faceți griji - vom folosi fiecare fiecare element într-un anumit moment.

Puteți verifica și documentația oficială [Node documentation](https://nodejs.org/dist/latest-v14.x/docs/api/) pentru a înțelege ce face fiecare modul în parte.

Logica este similară celei de dinainte.

Utilizând o instrucțiune **if**, ar trebui să puteți verifica fiecare **pathname** unică și să **metodă de solicitare** și să încărcați o pagină HTML sau să parsați datele care intră.

Creați variabila, care va fi **solicitarea** parsată, obțineți **URL pathname** curentă și verificați diferitele cazuri. 

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-48.jpg" /]

Deja aveți toate vizualizările necesare.

Utilizați funcțiile `readFile` sau `createReadStream` pentru a **citi** pe fiecare dintre fișierele HTML (verificați și diferențele dintre aceste două funcții).

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-49.jpg" /]

Încă ceva înainte de a testa aplicația - mergeți la `handlers/index.js` și adăugați operatorul **cat handler**:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-50.jpg" /]

**Restartați serverul** și apoi mergeți la `localhost:3000/cats/add-cat`

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-51.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-52.png" /]

[/slide]

[slide hideTitle]

# Gestionarea POST

Pentru a crea o pisică nouă, mai întâi, ar trebui să creăm funcționalitatea referitoare la rasele de pisici, pentru că ele vor fi listate în **pagina în care adăugăm pisici** ca **opțiuni** în cadrul **meniului de selecție**.

Gestionați cerința privind postarea în `/cats/add-breed`, salvați rasa dată în interiorul fișierului `breeds.json` și când se va încărca fișierul `addCat.html`, ar trebui să putem folosi datele privind rasele din acest fișier **JSON** pentru a selecta opțiunea dorită ori de câte ori o nouă pisică este adăugată în aplicația noastră.

Pentru a gestiona o **cerere POST**, logica este similară:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-53.jpg" /]

Trebuie să faceți următoarele:

- **Să parsați** **datele de intrare** din **formular**

- **Să citiți** fișierul `breeds.json`

- **Să modificați** fișierul `breeds.json`

- **Să actualizați** fișierul `breeds.json`

- **Să redirecționați** către pagina principală `/` și să **închideți** **răspunsul**

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-54.jpg" /]

Iată un exemplu referitor la modul cum funcționează acest lucru.

Fișierul `breeds.json` **înainte**:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-55.jpg" /]

Adăugarea unei "**rase necunoscute**":

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-56.jpg" /]

Dacă ați fost redirecționați către pagina principală, ați reușit să implementați cu succes funcționalitatea de adăugare a unei rase. 

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-57.jpg" /]

Dacă verificăm din nou fișierul `breeds.json`, rezultatul este:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-58.jpg" /]

Fiecare rasă unică pe care o creăm în aplicație este salvată în acest fișier JSON.

Următorul pas este să vizualizăm toate rasele din acest fișier JSON în **meniul de selecție** ca **opțiuni** în fișierul `addCat.html`.

În acest moment, rasa Fluffy Cat este doar un **placeholder**.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-59.png" /]

[/slide]

[slide hideTitle]
# Crearea de Șabloane Personalizate

Pentru a continua, trebuie să creăm **două șabloane**.

Unul este pentru toate **rasele** create în fișierul JSON, și unul pentru toate **pisicile** listate pe pagina principală.

Să începem cu cel mai simplu (**rasele**) pentru că nu putem crea încă o pisică nouă. 

Aceasta este **structura**:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-60.jpg" /]

Fiecare rasă ar trebui să fie o **opțiune** care are o valoare ce reprezintă rasa curentă și un **conținut text** - de asemenea reprezentând denumirea rasei curente.

Toate ar trebui să fie înlăuntrul **select element** cu un indice de "**group**".

Când vrem să redăm fișierul `addCat.html`, ar trebui să **înlocuim** o parte a conținutul în acel HTML.

Pentru a face acest lucru, modificăm pur și simplu fișierul `addCat.html` după cum urmează:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-61.jpg" /]

După asta, deschideți **handler-ul** `cat.js` și mergeți la declarația unde randați fișierul `addCat.html`.

Modificați datele. Înlocuiți `{{catBreeds}}` cu **breed placeholder** actual, astfel:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-62.jpg" /]

În acest caz, **breeds** reprezintă o variabilă care este **cerută** în vârful fișierului și se referă la`breeds.json`.

Putem înlocui/modifica datele și le putem trimite metodei `res.write()`.

Să adăugăm o nouă rasă, doar pentru a **verifica** dacă logica aceasta funcționează cum trebuie:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-63.jpg" /]

After we open the **Add Cat** Tab, we will see that this time, the **options** are the **actual breeds** inside the JSON file.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-64.png" /]

Așa cum probabil ați ghicit, putem folosi aceeași logică pentru a afișa toate pisicile create pe pagina principală.

Totuși, mai întâi ar trebui să creați logica privind **adăugarea** unei noi pisici în fișierul `cat.json` folosind un **formular**.

Dar aici vine partea amuzantă, pentru că adaugă un formular de creare a unei pisici noi care conține input de tipul "**file**".

Acest lucru înseamnă că de această dată va trebui să procesăm diferit datele de intrare. 

Vom utiliza **formidable**. 

Puteți afla mai multe despre cum funcționează această bibliotecă [cum funcționează această librărie](https://www.npmjs.com/package/formidable), sau pur și simplu, puteți utiliza următoarea structură de cod:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-65.jpg" /]

În acest caz, **câmpurile** și **fișierele** vor fi **obiecte**, unde **câmpurile** reprezintă datele de intrare ale formularului și **fișierele** reprezintă informațiile referitoare la fișierele încărcate printr-un formular.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-66.jpg" /]

Folosiți funcția `rename()` pentru a modifica locația fișierului încărcat.

Cu alte cuvinte, puteți să îl **salvați** undeva în fișierele locale.

Doar adăugați **calea de acces veche** și pe cea **nouă** acelui fișier și transmiteți-le ca argument funcției.

Apoi, puteți sa puneți toate pisicile în `json.file` utilizând funcțiile `readFile()` și `writeFile()` din modulul `fs`, **modificați-le** și **rescrieți-le** în fișierul JSON, unde se va include **pisica nouă**.

[/slide]

[slide hideTitle]
# Crearea de Șabloane Personalizate: Exemplu

Acesta este un exemplu de creare a unui șablon **personalizat**.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-67.png" /]

Dacă deschidem fișierul `cats.json`, el **nu** va mai fi o matrice goală.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-68.jpg" /]

Vom avea **deja** posibilitatea de a crea pisici noi.

Pentru a verifica dacă întreaga logică funcționează, puteți verifica `/content/images/`.

Dacă fotografia încărcată de voi este acolo, totul este în regulă. 

Apoi, putem utiliza șablonul dat și putem să redăm toate pisicile din fișierul `cats.json`.

Iată structura pisicilor:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-69.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-70.jpg" /]

Când redăm pagina `index.html`, ar trebui să executăm o buclp prin toate pisicile din fișierul `cats.json`.

Apoi, utilizați substituentul de sus pentru a le modifica și includeți-le în fișierul HTML înainte de a fi redat.

## Cum să Facem Acest Lucru

Mergeți la fișierul `home.js`, pentru că acolo se află logica pe care trebuie să o modificăm. 

Acolo vom încărca fișierul `index.html`, însă cu date statice.

Modificați-l în acest fel:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-71.jpg" /]

Treceți printr-o buclă toate pisicile din fișierul `cats.json` și utilizați formularul dat din șablonul substituent pentru a completa fiecare informație referitoare la fiecare pisică în spațiul corect. 

Nu uitași să folosiți funcțiile `write()` și `end()` pentru a scrie, respectiv a încheia răspunsul.

Amintiți-vă să modificați de asemenea și fișierul `index.html`.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-72.jpg" /]

Dacă restartați serverul și verificați pagina principală `localhost:3000`, rezultatul ar putea să fie similar celui de mai jos:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-73.jpg" /]

Fotografia nu este vizualizată pe pagină.

Motivul este acela că atunci când servim fișiere statice, tindem să uităm de toate cazurile marginale. 

Pentru a rezolva problema, ar trebui să extindem logica referitoare la handler-ul static `static-handler.js`.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-74.jpg" /]

Aceasta este structura pe care ar trebui să o utilizați pentru a rezolva această problemă. 

Logica din aceste două funcții `readFile()` este aproximativ aceeași.

Singura diferență dintre ele este cea de **codificare**, respectiv cel de-al doilea argument, iar acesta este opțional.

Când unele dintre următoarele fișiere sunt servite, nu ar trebui să existe o codificare, inclusiv de tipul **utf8**: **png**, **jpg**, **jpeg**, etc.

Ar trebui doar să **verificați** când:
- **Calea de acces începe cu** `/content`
- **Metoda de solicitare** este `GET`
- **Calea de acces se termină cu** oricare dintre extensiile imagine de mai sus

Citiți fișierul, pasați **pathname** și **funcțiile de apel invers** ca argumente.

În oricare alte cazuri, indiferent de extensia fișierului de la finalul căii de acces, ar trebui să folosiți pentru moment o codificare de tip `utf8`, așa cum vi s-a arătat mai sus.

Dacă faceți acest lucru, rezultatul va fi:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-75.jpg" /]
[/slide]

[slide hideTitle]

# Editarea și Ștergerea

`[Change Info]` și `[New Home]` sunt butoane pe care ar trebui să le aibă **fiecare pisică**.

Vi s-au dat toate vizualizările necesare, inclusiv acestea două - `editCat.html` și `catShelter.html`.

Făcând click pe oricare dintre ele, aplicația ar trebui să vă arate vizualizarea curentă cu informațiile actuale ale pisicii înlăuntru. 

Ar trebui să implementăm următoarea logică:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-76.jpg" /]

Când unele dintre butoanele `[Change info]` sunt apăsate, ar trebui să:

- Verificați **id-ul pisicii** care este furnizat în **URL**
- **Căutați** acea pisică în fișierul `cat.json`
- Folosiți șablonul pentru a **inlocui** datele statice cu informațiile actuale referitoare la pisica respectivă

Dacă verificați operatorul `home.js`, veți observa ceva de genul următor:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-77.jpg" /]

Acesta este **șablonul pisică** creat de noi. 

Când luați datele curente ale pisicii din fișierul `json.file`, puteți să folosiți logica de mai sus pentru a **obține fișierul și a îl randa**, și pentru a aplica acest șablon:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-78.jpg" /]

**Amintiți-vă** să modificați de asemenea și fișierul `editCat.html`:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-79.jpg" /]

Logica după ce vom apăsa pe butonul `[New Home]` este aceeași:

- Verificați **URL-ul** să găsiți **id-ul actual al pisicii**.

- **Căutați** acest id prin fișierul `cat.json`

- **Înlocuiți** `editCat.html` cu informațiile curente ale pisicii respective, cum s-a văzut mai sus

**Cererea POST** pentru aceste două acțiuni este aproape la fel ca logica pentru **adăugarea unei noi pisici**.

Singura diferență este că atunci când **editați** unele dintre informațiile pisicii, veți **modifica** acea pisică înlăuntrul fișierului JSON, **în loc de** a crea un nou (îl modificați cu **informații de intrare** din formular). 

Și **ștergeți** pisica respectivă din fișierul adăpostului denumit `cats.json`.

Pașii sunt aceiași:

- **Parsați** datele de intrare din formular (dacă editați informațiile despre pisică)

- **Citiți** fișierul `cats.json` prin intermediul modulului **fs** și actualizați datele privind pisica (editați sau ștergeți intrarea)

- **Rescrieți** fișierul `cats.json` cu modificările efectuate

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-80.jpg" /]

[/slide]

[slide hideTitle]

# Căutarea

Deținerea unei pagini web cu multe pisici este o chestie amuzantă, dar uneori veți vrea să le **filtrați** după anumite **criterii**.

Prin urmare, pagina noastră principală include un mic formular care are **numai un singur câmp text** (**numele** unei pisici sau o parte a acestuia).

După **transmiterea** formularului, **toate** pisicile **care conțin** astfel de text sau care au același nume ar trebui să fie **afișate**.

**Succes!**

[/slide]

