# IntelliJ IDEA Debugger

[slide hideTitle]

# Cum se Depanează un Proces

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-10-how-to-debug-a-process-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**IntelliJ IDEA** are un instrument de depanare încorporat.

Este util, deoarece ne permite:

- Adăugarea unor **puncte de întrerupere**
    - adăugăm **puncte de întrerupere** atunci când vrem să oprim programul pe o anumită linie de cod

- Vizualizați **fluxul programului**
    - aceasta înseamnă să vedeți, de exemplu, de câte ori va itera **for-loop**

- Controlați **fluxul de execuție**
    - acest lucru ne permite să **controlăm** pas cu pas **fluxul** al **execuției programului**
- Urmăriți **valorile** stocate în **variabile**


## Lansarea Unui Proces de Depanare

Pentru a rula depanatorul în **InteliJ IDEA** trebuie să apăsăm **Ctrl + Alt + F5**.

După aceea, va apărea o listă pop-up, din care trebuie să selectăm procesul dorit.

În cele din urmă, putem depana programul nostru.

Putem rula depanatorul pe un program care nu rulează.

De asemenea, ne putem atașa la un program, care nu este **disponibil direct în** **IntelliJ IDEA**.

[image assetsSrc="debugging-techniques-example(1).png" /]


[/slide]

[slide hideTitle]
# Live Demo: PhoneBook

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-live-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[/slide]


[slide hideTitle]
# Depanarea Unui Proiect

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-11-15-debugging-a-project-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a rula programul în **modul de depanare**, trebuie să facem clic dreapta și să alegem „**Depanare** \{**numele clasei**\} **.Main()**”

Avem un alt mod de a rula programul în **modul de depanare**.

Există o comandă rapidă, care este - „**Shift + F9**.

**Modul de depanare** ne oferă control asupra fluxului de execuție.

De asemenea, ne permite să observăm valorile variabilelor.


## Depanare Windows

**Fereastra de depanare** ne arată sesiunea de depanare.

În fereastră, există tab pentru **consola** și tab pentru **depanator**.

În consolă putem pune intrarea necesară.
 
Tab-ul **Debugger** arată pașii prin care trece programul.

Există diferite categorii în fereastră pe care le putem observa:

- Rame / fire

- Variabile

- Watches

## Bara de Instrumente de Depanare

**Modul de depanare** al **InteliJ IDEA** ne permite să controlăm pas cu pas execuția programului.

Putem face acest lucru din bara de instrumente sau prin comenzi rapide.

Din bara de instrumente putem **sări peste**, **să trecem peste**, **să intrăm în** etc.

Iată comenzile rapide pentru cele mai utilizate acțiuni:

- **Sari peste** - "**F8**"
- **Ieșiți** - "**Shift + F8**"
- **Intră în** - "**F7**"
- **Reluați** - ⏯
- **Pauză** - ⏸

## Controlul Executării

În mod implicit, o aplicație va rula neîntreruptă când este în **modul de depanare**.

Comportamentul se va schimba când vom **întrerupe** programul sau vom atinge un **punct de întrerupere**.

Când controlăm execuția programului, putem obține o vizualizare mai bună a stării **programului**.

Acest lucru ne permite să vedem ce se întâmplă exact în programul nostru.

Când examinăm starea programului, controlăm **fluxul de execuție** al programului.

Asta înseamnă că folosim **bara de instrumente de depanare**.

## Opțiuni și Setări

Pentru a utiliza depanatorul, trebuie să setăm câteva lucruri.

Primul este **Vizualizările de date** și al doilea este **Compilatorul**.

Putem găsi aceste pagini în secțiunea **Construire, execuție și implementare** din **Setări**.

Căile complete pentru ambele setări sunt:
 
- "**Setare** \-\> **Construire, execuție și implementare** \-\> **Depanator** \-\> **Tipuri de date** \-\> **Java**"

- "**Setare** \-\> **Construire, execuție și implementare** \-\> **Compilator** \-\> **Compilator Java**"

Dacă dorim să depanăm un proiect, putem schimba **structura proiectului**.

Din opțiunea **Structura proiectului** din meniul **Fișier** sau printr-o comandă rapidă - „**Ctrl + Shift + Alt + S**”

[/slide]

[slide hideTitle]

# Puncte de Întrerupere

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-16-19-breakpoints-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Punctele de întrerupere** ne oferă posibilitatea de a opri programul pentru o anumită acțiune.

Putem adăuga **puncte de întrerupere** făcând clic pe **partea stângă** a **ferestrei de cod sursă**.

Sau putem folosi comanda rapidă „**Ctrl + F8**” atunci când suntem pe linia în care dorim să adăugăm un punct de întrerupere.

**IntelliJ debugger** are multe funcții încorporate de care putem profita atunci când folosim puncte de întrerupere.

De exemplu, putem seta opțiuni specifice sub care să oprim programul.

Unele dintre ele sunt **Condiții**, **Filtre**, **Eliminați odată apăsat** și multe altele.

Pentru a seta aceste opțiuni, trebuie să accesăm **Fereastra punctului de întrerupere**.

Putem face acest lucru făcând clic dreapta pe **punctul de întrerupere** sau printr-o **comandă rapidă pe linia** unde se află punctul de întrerupere.

Comanda rapidă este: "**Ctrl + Shift + F8**".

În fereastra punctului de întrerupere, nu numai că putem **elimina** sau **dezactiva** punctele de întrerupere, dar le putem **muta**.

[image assetsSrc="debugging-techniques-example(2).png" /]

[/slide]
