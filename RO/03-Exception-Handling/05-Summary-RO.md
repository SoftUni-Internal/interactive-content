[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-29-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Ce sunt excepțiile în Java?
     - Ierarhie de excepție
- Cum să Manuiți Excepția?
     - try-catch Constructor
     ```java 
    try {
    // Specify a piece of code logic that could raise an exception 
    } catch (SomeException) {
    // Handle the caught exception
    }
    ```

     - try-finally Declarația 
     ```java 
    try {
    // Specify a piece of code logic that could raise an exception 
    } finally {
    // This block will always execute
    }

- Cum să ridici (throw) excepții
     - Utilizarea Cuvântului Cheie "throw"
     ```java
     try {
          …
     } catch (SQLException sqlEx) {
     throw new IllegalStateException("Cannot save invoice.", sqlEx);
     }
     ```
     
     - Relansarea Excepțiilor
     ```java
     try {
          Integer.parseInt(str);
     } catch (NumberFormatException ex) {
          System.out.println("Parse failed!");
          throw ex; // Re-throw the caught exception
     }

- Cele Mai Bune Practici
     - utilizarea Blocului de Captură
     - alegerea Tipului de Excepție

## În următoarea lecție, veți învăța:

- Ce este Depanarea?
     - lucrul cu instrumentele de depanare (`debuggers`)
     - importanța Depanării
- Lucrul cu **IntelliJ IDEE Depanator**
     - puncte de întrerupere
- Inspecția Datelor

[/slide]