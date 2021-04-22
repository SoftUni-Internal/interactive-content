[slide hideTitle]

# Cele Șapte Principii de Testare

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-3-10-seven-testing-principles-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există șapte principii **fundamentale** de testare care fac procesul testării software mai eficient:

## 1. Testarea este dependentă de context

Diferite tipuri de software trebuie testate diferit.

**De exemplu:**

Avem diferite domenii precum o **platformă bancară**, una de **marketing**, sau una **publicitară**, pentru a numi câteva.

Fiecare dintre aceste domenii va fi testat în mod diferit în funcție de **cerințe**, **funcții**, **diferite tehnici**, etc.

Același lucru se aplică și în cazul aplicațiilor software.

## 2. Testarea exhaustivă este imposibilă

În termeni simpli - nu putem testa tot. 

De obicei există un număr de combinații aproape **infinit** de **date de intrare**.

În schimb, putem testa **câteva combinații** în funcție de **prioritate** folosind diferite tehnici.

Testarea exhaustivă necesită un efort deosebit și de obicei nu furnizează rezultatul așteptat.

Este încurajată pe scară largă testarea datelor de intrare prin utilizarea unor metode mai specifice precum **Analiza Valorii Limită (Boundary Value Analysis)** sau **Partiționarea Echivalenței (Equivalence Partitioning)**.

## 3. Gruparea Defectelor

Majoritatea defectelor găsite de obicei în timpul **testării pre-lansare** sunt cauzate de un număr mic de module care funcționează defectuos.

Este posibil ca unele module să fie **prea complexe**. 

Depanarea unor asemenea module poate fi o sarcină complicată.

## 4. Testarea în fază incipientă

Cu cât o eroare este găsită mai târziu - cu atât costă mai mult (din punctul de vedere al timpului și al resurselor).

**Costul** reparării defectelor la începutul unui proiect este mai mic, comparativ cu etape mai târzii ale testării.

[image assetsSrc="Unit-Testing-Example.png" /]

## 5. Paradoxul Pesticidelor

Paradoxul pesticidelor afirmă că repetarea **acelorași teste** va înceta să detecteze defecte noi și erori.

Putem depăși această problemă prin crearea de teste noi și adăugarea datelor noi pentru testare.

## 6. Testarea arată prezența defectelor

Este crucial să înțelegem că în ciuda **testării**, nu putem spune cu siguranță că produsul nostru este **100% lipsit de defecte**.

Cu toate acestea, tehnicile eficiente de testare **reduc** șansa existenței unor defecte/erori nedescoperite.

## 7. Raționamentul fals de absență a erorilor (Absence-of-Error Fallacy)

Uneori software-ul nostru este testat cu cerințele greșite.

Găsirea și repararea defectelor nu este utilă atunci când:

- Sistemul construit este inutil pentru realizarea scopului său

- Când software-ul nostru nu îndeplinește nevoile și așteptările utilizatorului 

[/slide]
