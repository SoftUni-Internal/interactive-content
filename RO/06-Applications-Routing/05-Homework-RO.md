# Teme pentru acasă 

[slide hideTitle]
# Furniture Store

## Working with Remote Data

Pentru soluționarea unora dintre următoarele sarcini, va trebui să utilizați o versiune actualizată a **serviciului REST local**, furnizat în arhiva de resurse a lecției.

Puteți citi documentația [aici](https://github.com/softuni-practice-server/softuni-practice-server).

## Implement Furniture Store

**Aici este un link către** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Routing-Resources-NEW.zip) **pentru această sarcină.**

Puteți face cereri către următoarele puncte finale:

-- Register User (POST): `http://localhost:3030/users/register`
- Login User (POST): `http://localhost:3030/users/login`
- Logout User (GET): `http://localhost:3030/users/logout`

- Create Furniture (POST): `http://localhost:3030/data/catalog`
- All Furniture (GET): `http://localhost:3030/data/catalog`
- Furniture Details (GET): `http://localhost:3030/data/catalog/:id`
- Update Furniture (PUT): `http://localhost:3030/data/catalog/:id`
- Delete Furniture (DELETE): `http://localhost:3030/data/catalog/:id`
- My Furniture (GET): `http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22`

## All Furniture

Enumerați **toate mobilierele** care pot fi găsite în magazin.

Afișați linkurile corespunzătoare în bara de navigare, pe baza sesiunii utilizatorului.

Dacă faceți clic pe oricare dintre butoanele `[Details]` ar trebui **redirecționat către detalii**.

[image assetsSrc="js-application-applocatopns-routing-furniture-store-1.jpg" /]

[/slide]

[slide hideTitle]

# Application Users

## Register User

Trebuie să creați funcționalități pentru înregistrarea de noi utilizatori.

Făcând clic pe butonul `[Register]`, trebuie să încărcați formularul de înregistrare.

Când se face clic pe butonul `[Register]` din formular, trebuie să trimiteți o cerere POST.

Dacă înregistrarea este **cu succes**, puteți **redirecționa spre pagina Dashboard**.

## Login User

Dacă utilizatorul **s-a înregistrat deja**, se poate conecta folosind **formularul de autentificare**.

După o autentificare **de succes**, utilizatorul ar trebui să fie **redirecționat spre pagina Dashboard**.

Salvați jetonul returnat în memoria de sesiune și trimiteți-l cu fiecare cerere.

## Logout User

**Utilizatorul conectat** poate fi **deconectat** făcând clic pe **butonul** `[Logout]`.

Creați o funcționalitate pentru această acțiune.

[/slide]

[slide hideTitle]

# Create Furniture

[image assetsSrc="js-application-applocatopns-routing-furniture-store-2.png" /]

**Validați câmpurile:**
- **marca** și **modelul** ar trebui să aibă **cel puțin 4 simboluri**
- Anul trebuie să fie **între 1950 și 2050**
- Descrierea trebuie să aibă **mai mult de 10 simboluri**
- Prețul trebuie să fie un **număr pozitiv**
- **URL-ul imaginii este necesar**
- Materialul este **opțional**

Dacă intrarea este validă, ar trebui să **adăugați clasa** "**is-valid**" în câmpul de intrare și **dacă nu este validă** - **clasa** "**is-invalid**".

**Redirecționați la pagina Dashbord dacă valorile sunt valide.**

[/slide]

[slide hideTitle]
# Furniture Details

Obțineți **id-ul** din **URL** și **afișați** informațiile.

Dacă **utilizatorul conectat este creatorul**, butoanele `[Edit]` și `[Delete]` ar trebui să fie **vizibile și funcționale**.

[image assetsSrc="js-application-applocatopns-routing-furniture-store-3.png" /]

[/slide]

[slide hideTitle]

# Update and Delete Furniture

## Update Furniture

Dacă **utilizatorul conectat** este **creatorul**, acesta poate edita datele despre mobilier.

Când formularul este **încărcat**, **toate câmpurile** trebuie **completate** cu **informațiile de pe server**.

**Validările** ar trebui să fie aceleași cu validările la crearea de mobilier nou.

Trebuie trimisă o **cerere PUT**.

[image assetsSrc="js-application-applocatopns-routing-furniture-store-4.png" /]

## Delete Furniture

Făcând clic pe butonul `[Delete]`, utilizatorul trebuie să **confirme ștergerea** (puteți utiliza o alertă sau o altă notificare personalizată), apoi aplicația trebuie să trimită o **cerere de DELETE** către back-end și **să ștergeți mobilierul**.

Apoi **redirecționați** către **pagina dashbord**.
[/slide]

[slide hideTitle]
# My Furniture
Un utilizator conectat poate vedea o listă a publicațiilor sale făcând clic pe linkul `[My Publications]` din bara de navigare.

Afișați o pagină similară cu catalogul principal (tabloul de bord), dar afișați numai înregistrările asociate cu utilizatorul conectat în prezent.

[image assetsSrc="js-application-applocatopns-routing-furniture-store-5.jpg" /]
[/slide]
