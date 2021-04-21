[slide hideTitle]

# Moștenire și Interfețe

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/RO/Java-OOP-Advanced-Interfaces-and-Abstraction-3-inheritance-and-interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Moștenirea** și **interfețele** sunt alte două concepte majore în programarea **orientată pe obiecte**.

**Moștenirea** permite claselor să **moștenească date și funcționalitate** dintr-o **clasă părinte** (numită și o **clasă de bază**).

Când o clasă moștenește o altă clasă, **câmpurile clasei părinte** sunt îmbinate cu **câmpurile clasei copil** și formează **setul de câmpuri de date** pentru clasa copil.

**Interfețele** definesc acțiuni abstracte.

- Acestea sunt acțiuni care trebuie **implementate în clasele descendente**

- Interfețele definesc un **set de metode goale (sau abstracte)** (sau acțiuni) care vor fi implementate obligatoriu în clasele copil

- Interfețele sunt, de asemenea, numite **contracte**, deoarece definesc un set distinct de funcționalități, un contract pentru implementarea unor metode date

Folosim clase **abstracte** pentru a modela abstracții.

- O clasă abstractă vă permite să creați funcționalități pe care subclasele le pot **implementa** sau **suprascrie**

- Clasele abstracte sunt similare cu interfețele

- Nu le puteți instanția și pot conține un amestec de **metode** declarate cu sau fără implementare

- De exemplu, clasa **Figura** nu este o figură concretă precum pătratul sau dreptunghiul, ci conceptul sau abstractizarea unei **figuri**

- Clasele abstracte definesc **date + acțiuni** (sau metode normale) + **acțiuni abstracte** (sau metode goale)

- Clasele de abstracte sunt **concepute pentru a fi moștenite** (sau extinse)

Clasele „concrete” precum **Cerc** și **Dreptunghi** reprezintă **entități** reale, nu abstracții.

- Clasele concrete definesc **câmpuri de date** + **funcționalitate concretă** (metode)

- Pot **implementa interfețe** și **moșteni abstract** și alte clase

[/slide]

[slide hideTitle]
# Exemplu: Clase Abstracte și Clase Concrete

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/RO/Java-OOP-Advanced-Interfaces-and-Abstraction-4-inheritance-and-interfaces-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="Interfaces-and-Abstraction-example.png" /]

În acest exemplu demonstrăm clasele **abstracte** și clasele **concrete**.

Acesta este un exemplu de clasă abstractă, care modelează o abstractizare **"Figure"**.

- Definește două câmpuri **de date**: `x` și `y`

- De asemenea, definește o **acțiune abstractă** (sau metodă) pentru calcularea ariei figurii

- Această metodă este **goală** (sau **abstractă**), deoarece este specifică figurii concrete, cum ar fi **"circle"** sau **"rectangle"**

- În clasele de copii (sau descendenți), această acțiune abstractă **va deveni concretă**

* va ține codul pentru a calcula o zonă de cerc sau o zonă dreptunghiulară în funcție de figura concretă

- Această clasă abstractă modelează **abstractul "Figure"** și **clasele copil** generice va determina tipul figurii

 Clasa copil Cerc este o clasă, care moștenește proprietăți din clasa **abstractă** "Figure"

- În acest fel, clasa copil **are trei câmpuri**: două moștenite din clasa părinte și unul definit suplimentar

- **Moștenește** câmpurile **„x”** și **„y”** din "Figure" și adaugă un câmp suplimentar **"radius"**

- Clasa **Circle** definește o **implementare concretă** a metodei abstracte **"calcArea"**, care calculează aria cercului folosind formula binecunoscută din matematică la nivel școlar

**Clasa copil** "Rectangle" moștenește proprietățile din **clasa de bază "Figure"**.

- Clasa **"Rectangle"** definește două câmpuri suplimentare: **width** și **height**

- Oferă o implementare concretă diferită a metodei abstracte **"calcArea"**, care calculează aria dreptunghiului

[/slide]
