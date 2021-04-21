# Reflecție

[slide hideTitle]

# Metaprogramare

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/RO/interactive-java-oop-advanced-reflection-and-annotations-3-5-6-7-reflection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metaprogramarea este o **tehnică de programare** care ne permite să creăm software care se modifică pe sine sau alt software folosind **metadate**.

Software-ul poate fi conceput pentru a citi, genera, transforma sau analiza datele noastre.

**Reflecția Java** este un proces de examinare sau modificare a proprietăților interne sau a comportamentului unei clase la **runtime**.

## Ce este Reflecția

Să vedem o **explicație mai detaliată** a ceea ce este reflecția.

Toate obiectele din Java au o metodă 'getClass ()'.

Această metodă ne permite să determinăm clasa obiectului chiar dacă nu o cunoaștem **atunci când compilăm**.

Acest lucru ar putea părea nesemnificativ, dar un astfel de proces **nu este posibil în limbaje mai puțin dinamice**, cum ar fi `C++`.

Reflecția ne permite să creăm programe care pot obține informații suplimentare în timpul rulării.

Acest lucru face ca codul computerului să fie **dinamic**.

Multe **cadre** folosesc reflecția utilizând acest efect.

De exemplu, dacă trebuie să creăm un cadru care trebuie să **interopereze** cu **clase definite de utilizator** și nu știm care vor fi membrii, reflecția ne va permite să ne ocupăm de orice clasă fără a o specifica anticipat.

Cu toate acestea, trebuie să știm când să folosim **reflecția** și când ar trebui să o evităm.

Să vedem în ce cazuri **nu ar trebui** să folosim reflecția.

- Reflecția este semnificativ **mai lentă** decât metodele de apelare direct pe nume, deoarece trebuie să **inspecteze** metadatele, în loc să folosească doar **adresele precompilate** și **constantele**.

- Prin utilizarea reflecției putem prelua definiția unui membru „protejat” sau „final”, eliminăm protecția și o putem manipula
    * acest lucru poate fi foarte periculos pentru securitatea software-ului

[/slide]
