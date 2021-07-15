# Ce Sunt Excepțiile în Java?

[slide hideTitle]

# Excepții: Definiție

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-3-4-what-are-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O excepție este un eveniment care poate apărea în orice moment al execuției programului.

Când apare o excepție, fluxul normal al programului este întrerupt, lucru care are de obicei ca rezultat oprirea programului.

Pentru a preveni acest lucru, aceste evenimente trebuie "tratate".

În Java, excepțiile sunt obiecte care conțin informații detaliate legate de eroarea apărută.

[/slide]

[slide hideTitle]

# Clasa Throwable 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-5-the-throwable-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Clasa Throwable** este superclasa tuturor erorilor și excepțiilor din Java.

Doar obiectele care reprezintă instanțe ale acestei clase (sau ale uneia din subclasele sale) sunt "aruncate" de Mașina Virtuală Java.

Clasa **Throwable** este baza tuturor excepțiilor din JVM (Mașina Virtuală Java).

Orice obiect de tip **throwable** conține o captură a stivei de execuție a thread-ului său la momentul creării sale.

De asemenea, poate conține un mesaj care oferă mai multe informații cu privire la eroare.


[/slide]

[slide hideTitle]

# Tipuri de Excepții

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-6-types-of-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Exceptions**
     - utilizate pentru condiții excepționale pe care programele trebuie să le aibă în vedere
     - excepții definite de utilizator

- **Errors**
     - nu sunt prezente în mod normal
     - exemplu - "StackOverflowError"

Clasele **Exceptions** și **Errors** sunt subclase ale clasei **Throwable**.

[/slide]

[slide hideTitle]

# Excepții

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-7-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Excepțiile** sunt de două tipuri:

- **Verificate (checked)** - o excepție care este verificată (notificată) de către compilator în momentul compilării
     - numite și **Compile Time Exceptions**

```java 
 public static void main(String args[]) {
     File file = new File("E://file.txt");
     FileReader fr = new FileReader(file);
 } //File not found Exception
```
 

- **Neverificate (unchecked)** - o excepție care apare în momentul execuției
     - numite și **Runtime Exceptions**

```java 
  public static void main(String args[]) {
      int num1 = 10;
      int num2 = 0;
      int res = num1 / num2; //Throws ArithmeticException (dividing by 0)
      System.out.println(res);
  } //ArithmeticException
```
[/slide]

[slide hideTitle]

# Ierarhia Excepțiilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-8-exception-hierarchy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="exception-handling-example(1).png" /]

[/slide]


