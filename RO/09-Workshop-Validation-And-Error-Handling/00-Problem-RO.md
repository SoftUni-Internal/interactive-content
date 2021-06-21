# Cubicle: Partea 4

[slide hideTitle]

# Setarea Proiectului

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/06.Workshop-Validation-And-Error-Handling/workshop-validation-and-error-handling-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

"**Cubicle**"este un loc în care puteți răsfoi unele dintre cele mai populare cuburi Rubik din lume și puteți adăuga câteva cuburi noi pe care le-ați descoperit.

Aceasta este ultima parte acestui workshop, asigurați-vă că le completați cele precedente înainte de a continua, deoarece toate părțile acestui workshop sunt legate între ele.

## Sarcina Principală

Ca pas final, ar trebui să implementați unele **validări**, **notificări** pentru **îmbunătățirea experienței utilizatorului** și **protejarea datelor** care sunt **stocate în baza de date**.

## Installing Dependencies

Puteți utiliza [express-validator](https://www.npmjs.com/package/express-validator) pentru a executa **validation** și **sanitization** sau puteți continua să utilizați Mongoose pentru a executa și validări.
[/slide]

[slide hideTitle]
# User Validations

Înainte ca un utilizator **să se înregistreze** sau **să se autentifice**, implementați următoarele validări:

- Nume de utilizator

   - ar trebui să fie **unic**\(adăugați `unique: true` property la fiecare **User Model** username\)

   - ar trebui să conste numai din **litere engleze** și **cifre**
   - ar trebui să aibă cel puțin **5 caractere**

- Parola

   - ar trebui să conste numai din **litere engleze** și **cifre**
   - ar trebui să aibă cel puțin **8 caractere**

- Re\-Password

   - ar trebui să fie **aceeași** ca și parola dată

[image assetsSrc="JS-Web-Validation-And-Error-Handling-1.png" /]

[image assetsSrc="JS-Web-Validation-And-Error-Handling-2.png" /]

[/slide]

[slide hideTitle]

# Cube and Accessory Validations

Formularele **cube** și **accessory** ar trebui, de asemenea, să aibă unele validări:

- **Name**:

   - cel puțin **5 caractere** care pot fi litere engleze, **cifre** și **spații albe**

- **Description**:

   - cel puțin 20 caractere care pot fi litere engleze, **cifre** și **spații albe**

- **ImageUrl**:

   - referindu-ne la imaginea actuala \(începe cu `http://...` sau `https://...`\)

[image assetsSrc="JS-Web-Validation-And-Error-Handling-3.png" /]

[/slide]

[slide hideTitle]

# Error Handling

În caz de erori, de exemplu, dacă numele de utilizator furnizat este **deja luat**, **nu există** sau **parola dată** (în timp ce autentificarea) este **incorectă**, gestionați corect eroarea și afișați o notificare adecvată.

[image assetsSrc="JS-Web-Validation-And-Error-Handling-4.png" /]

[/slide]

[slide hideTitle]

# Template Update

Dacă doriți să utilizați notificările care sunt afișate pe imaginile, ar trebui să modificați puțin fișierul **main layout has**.

Creați un **div** cu `id="notifications"`, între **header** și elementul **principal**, care conține un singur **paragraf** cu `id="notification-message"`.

Verificați imaginea de mai jos:

[image assetsSrc="JS-Web-Validation-And-Error-Handling-5.png" /]

De asemenea, ar trebui să adăugați următoarele stiluri în fișierul `site.css`:

[image assetsSrc="JS-Web-Validation-And-Error-Handling-6.png" /]

[/slide]