# Care Sunt Excepțiile în Java?

[slide hideTitle]

# Excepții: Definiție

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-3-4-what-are-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Excepții în Java sunt **obiecte**.

Obiectele de excepție au informații detaliate despre eroare.

Acestea permit procesarea situațiilor problematice la mai multe niveluri și simplifică construcția și întreținerea codului.

Clasa **Aruncabil** este o bază pentru toate excepțiile din JVM.

Conține informații pentru cauza erorii.

- **Mesaj-ul**- este o descriere text a excepției

- **StackTrace**- instantaneul stivei în momentul lansării excepției

[/slide]

[slide hideTitle]

# The Throwable Class

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-5-the-throwable-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Superclasa tuturor erorilor și excepțiilor din Java este **clasa Throwable**.

Doar obiectele care reprezintă instanțe ale acestei clase (sau a uneia din subclasele sale) sunt "aruncate" de Mașina Virtuală Java.

Clasa **Throwable** este o bază a tuturor excepțiilor din JVM (Mașina Virtuală Java).

Orice obiect de tip **throwable** conține o captură a stivei de execuție a thread-ului său la momentul creării sale.

De asemenea, poate conține un mesaj care oferă mai multe informații cu privire la eroare


[/slide]

[slide hideTitle]

# Types of Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-6-types-of-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Mai jos de **Throwable** sunt:

- **Exceptions**
     - utilizat pentru condiții excepționale pe care ar trebui să le prindă programele utilizatorilor
     - excepții definite de utilizator

- **Errors**
     - nu este de așteptat să fie capturat în condiții normale din program
     - exemplu - "StackOverflowError"

[/slide]

[slide hideTitle]

# Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-7-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Excepțiile** sunt două tipuri:

- **Checked** - o excepție care este verificată (notificată) de către compilator la momentul compilării
     - numit și **Compile Time exceptions**

```java 
 public static void main(String args[]) {
     File file = new File("E://file.txt");
     FileReader fr = new FileReader(file);
 } //File not found Exception
```
 

- **Unchecked** - o excepție care apare în momentul execuției
     - numit și ca **Runtime Exceptions**

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

# Ierarhie de Excepție 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-8-exception-hierarchy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="exception-handling-example(1).png" /]

[/slide]


