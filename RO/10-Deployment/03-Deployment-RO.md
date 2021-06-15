# Implementări prin Heroku GitHub 

[slide hideTitle]

# Activarea Integrării GitHub

**Integrаrea** Heroku cu **Github** permite funcții utile, cum ar fi automatic **builds** și **releases**.

Pentru a activa integrarea Github, [accesați Heroku Dashboard](https://dashboard.heroku.com/apps).

**Alegeți aplicația dvs.** din listă și apoi faceți clic pe tab-ul `Deploy`.

[image assetsSrc="JS-BackEnd-deployment-1.png" /]

Selectați GitHub ca **metodă de implementare** și faceți clic pe `Connect to Github`.

[image assetsSrc="JS-BackEnd-deployment-2.png" /]

Vi se va solicita să acordați Heroku **acces la depozitul dvs.**.

Apoi veți fi redirecționat la pagina **Deploy**.

[image assetsSrc="JS-BackEnd-deployment-3.png" /]

O **zonă de text** va apărea în secțiunea **Connect to Github**.

Tastați **numele** al depozitului dvs. și apăsați pe `Search`.

Odată ce depozitul  dvs. a fost localizat, faceți clic pe `Connect`.

[/slide]


[slide hideTitle]

# Implementări Manuale

Puteți **implementa manual** orice branch a depozitului dvs. GitHub.

Implementările manuale pot fi utile atunci când doriți să implementați un **test branch** temporar, **fără a afecta** setările dvs. de **implementare automată**.

[image assetsSrc="JS-BackEnd-deployment-4.png" /]

Alegeți branch-ul pe care doriți să-l implementați și faceți clic pe butonul `Deploy Branch`.

[/slide]


[slide hideTitle]

# Implementări Automate

Când **implementările automate** sunt **activate** pentru  un anumit branch, Heroku implementează aplicația dvs. **de fiecare dată când există o modificare** în baza de cod.

[image assetsSrc="JS-BackEnd-deployment-5.png" /]

Selectați branch-ul pe care doriți să-l implementați automat și apoi apăsați pe `Enable automatic deploys`.

Daca repozitoriul dvs. este configurat pentru a utiliza **Continuous Integration**, puteți puteți bifa și caseta de selectare `Wait for CI to pass before deploy`.

Aceasta înseamnă că Heroku se va implementa automat numai dacă **toate stările de validare** afișează `success`.

[/slide]

[slide hideTitle]

# Deconectarea de la GitHub

Pentru a **deconecta** o aplicație de la GitHub, apăsați butonul `Disconnect`, localizat pe tab-ul `Deploy`.

[image assetsSrc="JS-BackEnd-deployment-6.png" /]

De asemenea, puteți **să deconectați profilul GitHub** în general [accesând setările contului dvs.](https://dashboard.heroku.com/account/applications#third-party-applications).

[/slide]
