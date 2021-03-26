# Cele Mai Bune Bractici

[slide hideTitle]

# Utilizarea Blocului de Captură (Catch)

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-23-24-best-practices-using-catch-block-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Blocurile **Catch** ar trebui:

- Începeți cu excepțiile cele mai mici din ierarhie
- Continuați cu excepțiile mai generale
- În caz contrar, va apărea o eroare de compilare

Fiecare bloc **catch** ar trebui să gestioneze numai aceste excepții pe care le așteaptă:

- Dacă o metodă nu este competentă pentru a gestiona o excepție, aceasta ar trebui să o lase nesoluționată

- Gestionarea tuturor excepțiilor fără a lua în considerare tipul lor este o practică proastă populară (anti-model)!

[/slide]

[slide hideTitle]

# Alegerea Tipului de Excepție

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-25-26-choosing-the-exception-type-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Când o aplicație încearcă să utilizeze **null** într-un caz în care este necesar un obiect:

| **Tipului de Excepție** | **Când se folosește** |
| --- | --- |
| **NullPointerException** | A fost accesată o matrice cu un index ilegal. |
| **StringIndexOutOfBoundsException** | Un index este fie negativ, fie mai mare decât dimensiunea șirului. |
| **NumberFormatException** | Încearcă să convertească un șir necorespunzător la unul dintre tipurile numerice. |
| **ArithmeticException** | Când a apărut o afecțiune aritmetică excepțională. |
| **ClassCastException** | O metodă a primit un argument ilegal sau inadecvat. |

[/slide]

[slide hideTitle]

# Cele Mai Bune Practici

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-27-28-exceptions-best-practices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când ridicați o excepție, transmiteți întotdeauna constructorului un **mesaj de explicație bună.**

Mesajul de excepție ar trebui să explice ce cauzează problema și cum s-o rezolve.

- **Bine**: "Dimensiunea trebuie să fie întreagă în intervalul \[1…15\]"
- **Bine**: "Stare nevalidă. Primul apel Initialize()"
- **Rău**: "Eroare neașteptată"
- **Rău**: "Argument nevalid"

Excepțiile pot reduce performanța aplicației.

- Aruncați excepții numai în situații cu adevărat excepționale și care ar trebui tratate
- Nu aruncați excepții în fluxul normal de control al programului
- JVM ar putea arunca excepții în orice moment, fără nicio modalitate de a le prevedea, cum ar fi **StackOverflowError**

[/slide]
