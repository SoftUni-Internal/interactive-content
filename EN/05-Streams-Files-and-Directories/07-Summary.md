[slide hideTitle]
# Summary


## In this lesson you learned:

- Streams are used to read, write and transfer data

- There are two main types of streams:

    - Input Streams
    
    ```java
    String path = "C:\\input.txt";

    FileInputStream fileStream = 
			new FileInputStream(path);

    int oneByte = fileStream.read();
    while (oneByte >= 0) {
    System.out.print(oneByte);
    oneByte = fileStream.read();
    }
    ```

    - Output Streams

    ```java
    try (FileReader inputStream = new FileReader(input);
             FileWriter outputStream = new FileWriter(output)) {

     int character;
     while ((character = inputStream.read()) != -1) {
         outputStream.write(character);
     }
    } catch (FileNotFoundException ex) {
    System.out.println("Input file not found!");
    } catch (IOException e) {
    e.printStackTrace();
    }
    ```

- Buffered streams boost performance

- Streams can be chained together by passing an instance of one stream to another:
    ```java
    String path = "D:\\input.txt";

    Scanner reader = new Scanner(new FileInputStream(path));
    ```

- Serialization is the process of converting an object to a sequence of bytes, and deserialization is the opposite process

- Serialization and deserialization make it possible for one system to communicate with another system and exchange data regardless of the platform or programming language



[/slide]
