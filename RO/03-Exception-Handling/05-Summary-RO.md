[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-29-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Ce sunt excepțiile 
     - ierarhia excepțiilor 
     
- Tratarea excepțiilor
     - instrucțiunea **try-catch** 
    ```java 
    try {
    // Specify a piece of code logic that could raise an exception 
    } catch (SomeException) {
    // Handle the caught exception
    }
    ```

     - instrucțiunea **try-finally**
    ```java 
    try {
    // Specify a piece of code logic that could raise an exception 
    } finally {
    // This block will always execute
    }
    ```

- Generarea excepțiilor
     - utilizarea cuvântului-cheie **throw**
     ```java
     try {
          …
     } catch (SQLException sqlEx) {
     throw new IllegalStateException("Cannot save invoice.", sqlEx);
     }
     ```
     
     - re-aruncarea excepțiilor
     ```java
     try {
          Integer.parseInt(str);
     } catch (NumberFormatException ex) {
          System.out.println("Parse failed!");
          throw ex; // Re-throw the caught exception
     }
     ```

- Cele mai bune practici
     - utilizarea blocului **catch**
     - alegerea corectă a **tipului de excepție**

## În următoarea lecție veți învăța:

- Ce este depanarea
     - lucrul cu instrumentele de depanare (`debuggers`)
     - importanța depanării
- Lucrul cu **IntelliJ IDEА Debugger**
     - puncte de întrerupere
- Inspecția datelor

[/slide]
