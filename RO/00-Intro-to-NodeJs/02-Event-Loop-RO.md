# Bucla Eveniment

[slide hideTitle]

# Bucla Eveniment

Bucla eveniment în limbajul JavaScript **detectează**, **colectează** și **ordonează** evenimente.

Ea este responsabilă pentru **ordinea execuției funcțiilor**.

Așa cum reiese și din denumirea de **buclă**, ea se află într-o **continuă căutare** a noi evenimente pe care să le colecteze.

Odată ce a fost apelată o funcție, sau s-a detectat un eveniment, o funcție este plasată **în interiorul stivei**.

Acea funcție rămâne acolo **până când este executată.**

Iată o reprezentare vizuală a modului cum operează o buclă eveniment:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-4.png" /]

[/slide]

[slide hideTitle]

# Apelarea Stivei

Așa cum am menționat mai sus, funcțiile sunt **adăugate în stiva de apelări** unde **încep să fie executate**.

În cadrul stimei, funcțiile sunt executate **de sus în jos**. 

Acest lucru înseamnă că **cea mai recent adăugată funcție va fi executată prima**.

Graficul de mai jos ne arată comportamentul a două funcții care sunt apelate una după alta:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-5.gif" /]

Funcțiile mai pot fi apelate, de asemenea, **una în cealaltă**.

În acest caz, o funcție este complet executată **odată ce fiecare funcție dinlăuntrul ei a fost executată**.

Evenimentele care au **ascultători de eveniment** adaugă mesaje într-un șir de mesaje.

Fiecare mesaj are o **funcție de manipulare (handler function)**.

Iată cum se întâmplă acest lucru:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-6.gif" /]
[/slide]
