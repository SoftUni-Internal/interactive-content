# Anexa B: Rularea suitei de testare

[slide hideTitle]
# Starea proiectului

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/10-JS-Applications-Exam-Prep/EN/JS-APPS-Meme-Lounge-Testing-27-28-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Testele necesită un server web pentru a livra conținutul aplicației.

Există un server web de dezvoltare inclus în schela proiectului, dar puteți utiliza un server cu care sunteți familiarizați.

Rețineți că instrumentele specializate precum **BrowserSync** pot interfera cu testele.

Pentru a inițializa proiectul cu dependențele sale, deschideți un terminal în folder, care conține fișierul **package.json** și executați următoarele:

`npm install`

Rețineți că, dacă ați modificat secțiunea **devDependencies** a proiectului, este posibil ca testele să nu se inițializeze corect.

[image assetsSrc="js-application-exap-prep-15.png" /]

## Executarea testelor

Înainte de a rula suita de testare, asigurați-vă că un server web este funcțional și că aplicația poate fi găsită la rădăcina adresei sale de rețea. Pentru a porni serverul dev inclus, deschideți un terminal în folderul care conține **package.json** și executați:

`npm run start`

Aceasta este o operație unică, cu excepția cazului în care terminați serverul în orice moment.

Poate fi repornit cu aceeași comandă ca mai sus.

Pentru a executa testele, nu închideți terminalul care rulează instanța serverului web, deschideți un terminal nou în folderul care conține package.json și executați:

`npm run test`

[image assetsSrc="js-application-exap-prep-16.png" /]

Rezultatele testului vor fi afișate în terminal, împreună cu informații detaliate despre problemele întâlnite.

Puteți efectua această operațiune ori de câte ori este necesar, executând din nou această comandă.

## Depanarea soluției

Dacă un test eșuează, puteți vizualiza informațiile despre cerințele care nu au fost îndeplinite de aplicația dvs.

Deschideți fișierul **e2e.test.js** în folderul **tests** și navigați la secțiunea dorită așa cum este descris mai jos.

**Acest prim pas nu va fi necesar dacă utilizați serverul web inclus.** 

Asigurați-vă că gazda aplicației este setată corect:

[image assetsSrc="js-application-exap-prep-17.png" /]

Valoarea pentru **gazdă** trebuie să fie adresa la care este trimisă cererea dvs.

Asigurați-vă că introducerea acestei adrese într-un browser de internet obișnuit afișează aplicația dvs.

Pentru a rula un singur test, în loc de întreaga suită (utilă atunci când depanați un singur test eșuat), găsiți testul și adăugați `.only` după referința **it**:

[image assetsSrc="js-application-exap-prep-18.png" /]

La mașinile mai lente, unele teste pot necesita mai mult timp pentru finalizare.

Puteți instrui testele să ruleze mai lent, mărind ușor valorile pentru **interval** și **timeout**:

[image assetsSrc="js-application-exap-prep-19.png" /]

Valorile **intervalului** mai mari de 500 și valorile **timeout** mai mari decât 10000 nu sunt recomandate.

Dacă acest lucru nu face testul să treacă, setați valoarea **DEBUG** la **true** și rulați din nou testele - aceasta va lansa o instanță de browser și vă va permite să vedeți ce este testat, ce face testul și unde eșuează (sau expiră):

[image assetsSrc="js-application-exap-prep-20.png" /]

Dacă acțiunile se întâmplă prea repede, puteți crește valoarea **slowMo**.

Dacă browserul este blocat, îl puteți închide și anula orice teste rămase focalizând fereastra terminalului și apăsând `[Ctrl + C]` urmată de litera "y" și `[Enter]`.

O parte importantă de căutat este rândul exact în care testul eșuează:

[image assetsSrc="js-application-exap-prep-21.png" /]

[/slide]

