[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-22-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- What a Multidimensional Array is
    - arrays can have more than one dimension, e.g. matrices

```java
int[][] intMatrix = new int[3][];

```

- Creating and Initializing

```java 
int[][] matrix = {
  {1, 2, 3, 4}, // row 0 values
  {5, 6, 7, 8}  // row 1 values
};
```

- Manipulating a Matrix
    - Accessing Elements of `2D Array`
   ```java
   int [][] array = new int [5][5];
   array[0][0]  // the first element of the matrix
    ```
    - Getting Element Value

   ```java live
   int[][] matrix = {
     {1, 2, 3, 4}, 
     {5, 6, 7, 8} 
   };

   int element = matrix[1][2]; 
   System.out.println(element);
  ```

    - Setting Element Value
    ```java 
   int[][] matrix = {
        {1, 2, 3, 4}, // row 0 values
        {5, 6, 7, 8}  // row 1 values
   };
   for (int row = 0; row < matrix.length; row++) {
      for (int col = 0; col < matrix[row].length; col++) {

          // setting all elements values to 1
          matrix[row][col] = 1;
     }
  }
  ```

- Reading and Printing a Matrix


## In the next lesson, you will learn:

- Sets:
    - HashSet\<E\>
    - TreeSet\<E\>
    - LinkedHashSet\<E\>
- Maps:
    - HashMap\<K, V\>
    - TreeMap\<K, V\>
    - LinkedHashMap\<K, V\>

[/slide]
