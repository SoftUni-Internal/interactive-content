# Softuni Forum Workshop: Partea 3

[slide hideTitle]

# Cerințe Privind Sarcina

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/08-Workshop-Forms/Part-0-Intro-Information-about-the-assignment-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În acest moment, aplicația are **formulare**. 

Modificați-le, astfel încât informațiile furnizate să fie tratate corespunzător. 

Implementați următoarele reguli de **validare**, **notificare** și **stilizare** pentru fiecare formular. 

**În mod implicit:** 

- Câmpurile de intrare sunt **neutre** (nici valide, nici invalide).
  * în cazul în care unele dintre câmpuri sunt **atinse**, ar trebui să determinați starea de validare din datele date în interiorul lor.

- Fiecare câmp de intrare este **obligatoriu**.

**Notificările** trebuie să fie afișate ca elemente de paragraf  (`<p>`) **dedesubtul** fiecărui câmp de intrare sau buton.

Notificarea **de sub fiecare buton** ar trebui să afișeze **starea** **de validare a formularului**: 

- Dacă starea este nevalidă, utilizați - "**You can't continue until you provide valid data**" ca text

**Culoarea** din acel paragraf ar trebui să fie "red", iar **butonul** ar trebui să fie **disabled**.

- Dacă starea este **validă**, trebuie doar să **eliminați** **notificarea** și să **activați** **butonul**.

**Verificați exemplele de sub fiecare formular pentru mai multă claritate.**

[/slide]

[slide hideTitle]

# Cazuri Valide și Invalide

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/08-Workshop-Forms/Part-1-Login-form-functionality-and-validations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Cazuri nevalide

În cazul în care unele dintre câmpurile de intrare аr fi nevalide, următorul **câmp de intrare** trebuie stilizat cu clasa **input-error**, care are următorul stil: 

```css
.input-error { 
   margin-bottom: 10px; 
   color: red;  
   font-weight: bold; 
} 
```

Și ar trebui să se afișeze o **notificare** cu informații despre validare. 

Textul din interiorul paragrafului respectiv ar trebui, de asemenea, să fie **red**. 

## Cazuri valide

Atunci când câmpul de intrare este completat cu informații **valide**, clasa **input-error** trebuie să fie **dezactivată / eliminată**.

[/slide]

[slide hideTitle]

# Formulare Reactive

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/08-Workshop-Forms/Part-2-Register-form-functionality-and-Login-form-validations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosiți **abordarea** **bazată pe model** (**reactivă**) pentru a crea formularele de autentificare și de **înregistrare**. 

## Autentificarea

Formularul de autentificare așteaptă ca date de intrare un **email** și o **parolă**.

Intrarile valide sunt: 

- **Adresele de e-mail** trebuie să conțină cel puțin **6 caractere**, după care simbolul **"@"**.  Singurul **nume de domeniu** valabil este **"gmail"** urmat de un punct **"."**. Domeniul de **nivel superior** poate fi doar **"com"**.
   * adrese de e-mail **valide**: `testing@gmail.com`, `something.else@gmail.com`  
   * adrese de e-mail **nevalide**: `qwe@gmail.com` 

- **parola** trebuie să fie de cel puțin **5 caractere**.

[image assetsSrc="Angular-Forms-Workshop-1.png" /]

[image assetsSrc="Angular-Forms-Workshop-2.png" /]

## Înregistrare

Formularul de înregistrare așteaptă: **un nume de utilizator**, **un e-mail**, **o parolă**, **o parolă repetată** și **un număr de telefon** (nu este obligatoriu).

**Validare nume de utilizator**:

- Trebuie să aibă o lungime de cel puțin **5 caractere** și este **obligatoriu**.

**Validarea e-mailului** în acest scop este aceeași ca și în cazul autentificării:

- Ar trebui să fie de cel puțin **6 caractere**, urmat de **"@"** 
   * singurul **nume de domeniu valid** este **"gmail"**, urmat de un punct "**.**".
   * domeniul **de nivel superior** poate fi doar `com`
   * adrese de e-mail **valide**: `testing@gmail.com`, `something.else@gmail.com`
   * adrese de e-mail **invalide**: `qwe@gmail.com`

**Ambele parole** trebuie să fie plasate într-un grup "**passwords**". 

Procesul de validare este următorul:

- Parola **introdusă trebuie să fie de cel puțin 5 caractere** (sunt permise orice litere și/sau cifre din limba engleză).

- Iar **parola repetată** trebuie să fie **la fel** ca **parola**.

**Ambele câmpuri** sunt considerate **nevalide** dacă unul dintre ele **nu acoperă** detaliile descrise. 

Dacă se întâmplă acest lucru, aplicați **stilizarea nevalidă pentru ambele**. 

În caz contrar, se aplică **stilizarea validă**.

[image assetsSrc="Angular-Forms-Workshop-3.png" /]

[image assetsSrc="Angular-Forms-Workshop-4.png" /]


[/slide]

[slide hideTitle]

# Formulare Bazate pe Șabloane

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/08-Workshop-Forms/Part-3-New-Theme-form-functionality-and-validations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosiți **abordarea bazată pe șablon** pentru a crea formularul **"create new theme"** și formularul **"change user information"**.

## Temă nouă

Formularul pentru noua temă așteaptă ca date de intrare: un **numele temei**, un **text al postului**.

Validarea datelor:

- **Theme name** - trebuie să aibă **cel puțin 5 caractere**.

- ***Post text** - trebuie să aibă **cel puțin 10 caractere**

Butonul "**Post**" ar trebui să fie **dezactivat** dacă datele introduse **NU SUNT** valide.


[image assetsSrc="Angular-Forms-Workshop-5.png" /]

[image assetsSrc="Angular-Forms-Workshop-6.png" /]

[/slide]

[slide hideTitle]

# Modificarea Informațiilor Despre Profil

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/08-Workshop-Forms/Part-4-Create-edit-form-on-profile-page-and-update-the-info-dynamically-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Atunci când este conectat, un utilizator ar trebui să își poată vedea **informațiile de profil**.

[image assetsSrc="Angular-Forms-Workshop-7.png" /]

Făcând clic pe butonul **"Edit"**, informațiile din profil ar trebui să se transforme într-un **formular cu câmpuri editabile**. 

Câmpurile de intrare trebuie să conțină în continuare informațiile actuale ale utilizatorului.

[image assetsSrc="Angular-Forms-Workshop-8.png" /]

**Validarea numelui de utilizator** aici este aceeași ca în cazul înregistrării:

- Trebuie să conțină cel puțin **5 caractere** și este **obligatoriu**.

Validarea de **Email** este aceeași ca și în cazul login și register:

- Ar trebui să fie de cel puțin **6 caractere**, urmat de **"@"** 
   * singurul **nume de domeniu valid** este **"gmail"**, urmat de un punct "**.**".
   * domeniul **de nivel superior** poate fi doar `com`
   * adrese de e-mail **valide**: `testing@gmail.com`, `something.else@gmail.com`
   * adrese de e-mail **invalide**: `qwe@gmail.com`

În cazul în care validarea trece, butonul **"Save"** ar trebui să fie activat, iar utilizatorul poate face o cerere **post** pentru a modifica informațiile.

În cazul în care se face clic pe butonul **"Cancel"**, toate modificările trebuie să **revină** la starea inițială, iar informațiile despre utilizator trebuie să fie afișate ca fiind **neschimbate**.

## Directive Personalizate

Poate fi izolată oricare dintre funcționalități într-o directivă personalizată pentru a evita repetarea unor părți din cod?

**Sugestie: Stylization / Validation**

[/slide]
