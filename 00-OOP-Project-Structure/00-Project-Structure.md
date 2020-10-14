# Project Structure

[slide]

# Methods

We use methods to split code into functional blocks, 
 Improves code readability
 Allows for easier debugging

 Let's see the following example:

 ```java
for (char move : moves){
  for (int r = 0; r < room.length; r++)
    for (int c = 0; c < room[r].length; c++)
      if (room[row][col] == 'b')
        …
}

 ```

It's better to do by 

```java
for (char move : moves) {
    moveEnemies();
    killerCheck();
    movePlayer(move);
 }

```

Another use of methods is when we need easily to reuse 




[/slide]

[slide]


# Classes

[/slide]

[slide]

# Projects

[/slide]