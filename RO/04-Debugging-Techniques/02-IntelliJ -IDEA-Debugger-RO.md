# IntelliJ IDEA Debugger

[slide hideTitle]

# Cum se Depanează un Proces

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-8-9-10-intelij-idea-debugger-debug-a-process-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**IntelliJ IDEA** are un instrument de depanare **încorporat**.

Este util deoarece permite:

- Adăugarea unor **puncte de întrerupere**
    - adăugăm **puncte de întrerupere** atunci când vrem să oprim programul pe o anumită linie de cod

- Vizualizarea **fluxului programului**
    - acest lucru înseamnă să vedem, de exemplu, de câte ori va itera **bucla for**

- Controlul **fluxului de execuție**
    - acest lucru ne permite să **controlăm** pas cu pas **fluxul** **execuției programului**
    
- Urmărirea **valorilor** stocate în **variabile**


## Lansarea Unui Proces de Depanare

Pentru a rula depanatorul în **IntelliJ IDEA** trebuie să folosim combinația **Ctrl + Alt + F5**.

După aceea, va apărea o listă pop-up, din care trebuie să selectăm procesul dorit.

În cele din urmă, putem depana programul nostru.

Putem rula depanatorul pe un program care nu rulează.

De asemenea, îl putem atașa la un program care nu este **direct disponibil în** **IntelliJ IDEA**.

[image assetsSrc="debugging-techniques-example(1).png" /]


[/slide]

[slide hideTitle]
# Live Demo: PhoneBook

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-live-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[/slide]


[slide hideTitle]
# Depanarea Unui Proiect

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-11-15-debugging-a-project-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a rula programul în **modul de depanare**, trebuie să facem clic dreapta și să alegem **"Debug \{numele clasei\}.main\(\)"**

Avem un alt mod de a rula programul în **modul de depanare**.

Există o comandă rapidă, care este - "**Shift + F9**".

**Modul de depanare** ne oferă control asupra fluxului de execuție.

De asemenea, ne permite să observăm valorile variabilelor.


## Fereastra Debug

**Fereastra Debug** ne arată sesiunea de depanare.

În fereastră există tab pentru **consolă** și tab pentru **depanator**.

În tab-ul consolei putem introduce datele necesare.
 
Tab-ul **Debugger** arată pașii prin care trece programul.

Există diferite categorii pe care le putem observa:

- Frames / Threads

- Variables

- Watches

## Bara de Instrumente pentru Depanare

**Modul de depanare** al **InteliJ IDEA** ne permite să controlăm pas cu pas execuția programului.

Putem face acest lucru din bara de instrumente sau prin comenzi rapide.

Din bara de instrumente putem **omite**, **să trecem peste**, **să intrăm în** etc.

Iată comenzile rapide pentru cele mai utilizate acțiuni:

- **Săriți peste** - "**F8**"
- **Ieșiți** - "**Shift + F8**"
- **Intrați în** - "**F7**"
- **Reluați** - ⏯
- **Pauză** - ⏸

## Controlul Execuției

În mod implicit, o aplicație va rula neîntreruptă când este în **modul de depanare**.

Comportamentul se va schimba când vom **întrerupe** programul sau vom atinge un **punct de întrerupere**.

Când controlăm execuția programului, putem obține o vizualizare mai bună a **stării** programului.

Acest lucru ne permite să vedem ce se întâmplă mai exact în programul nostru.

Când examinăm starea programului, controlăm **fluxul de execuție** al programului.

Asta înseamnă că folosim **bara de instrumente de depanare**.

## Opțiuni și Setări

Pentru a utiliza depanatorul, trebuie să setăm câteva lucruri.

Primul este **Data Views** și al doilea este **Compiler**.

Putem găsi aceste pagini în secțiunea **Build, Execution and Deployment** din **Settings**.

Căile complete pentru ambele setări sunt:
 
- "**Settings** \-\> **Build, Execution and Deployment** \-\> **Debugger** \-\> **Data Views** \-\> **Java**"

- "**Settings** \-\> **Build, Execution and Deployment** \-\> **Compiler** \-\> **Java Compiler**"

Dacă dorim să depanăm un proiect, putem schimba **structura proiectului**.

Acest lucru se realizează cu ajutorul opțiunii **Project Structure** din meniul **File** sau printr-o comandă rapidă - "**Ctrl + Shift + Alt + S**"

[/slide]

[slide hideTitle]

# Puncte de Întrerupere

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/RO/Java-Advanced-Debugging-Techniques-16-19-breakpoints-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Punctele de întrerupere** ne oferă posibilitatea de a opri programul la nivelul unei acțiuni specifice.

Putem adăuga **puncte de întrerupere** făcând clic pe **partea stângă** a **ferestrei codului sursă**.

O alternativă este utilizarea comenzii rapide "**Ctrl + F8**" atunci când suntem pe linia pentru care dorim să adăugăm un punct de întrerupere.

**IntelliJ debugger** are multe funcții încorporate de care putem profita atunci când folosim puncte de întrerupere.

De exemplu, putem seta opțiuni specifice pentru care să oprim programul.

Câteva dintre ele sunt **Condition**, **Filters**, **Remove once hit** și multe altele.

Pentru a seta aceste opțiuni, trebuie să accesăm **fereastra Breakpoints**.

Putem face acest lucru făcând clic dreapta pe **punctul de întrerupere** sau printr-o **comandă rapidă pe linia** unde se află punctul de întrerupere.

Comanda rapidă este: "**Ctrl + Shift + F8**".

În fereastra Breakpoints putem **elimina**, **dezactiva** sau **muta** punctele de întrerupere.

[image assetsSrc="debugging-techniques-example(2).png" /]

[/slide]
