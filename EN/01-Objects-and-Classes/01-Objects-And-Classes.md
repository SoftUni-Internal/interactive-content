# Objects and Classes

[slide hideTitle]
# Objects

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-3-4-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An object is a **basic unit** and an **instance of a class**.

Classes define templates for objects like **fields**, **constructors**, and **methods**.

This is how **objects** can be derived from a **class**:

- `LocalDate` - A sample **class**

- `birthdayPeter` and `birthdayMaria` - Sample **objects**

An object has:

- **state** - Represented by **fields**

- **behavior** - Represented by **methods**, which are used for object interaction 

- **identity** - Gives a **unique name** to an object

In real life, dogs have a **breed** state and **barking** behavior.

An object holds a set of **named values**.

A birthday object, for example, will have values like `day`, `month`, `year` etc.

```java live no-template
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        LocalDate birthday = LocalDate.of(2018,5,5);
        System.out.println(birthday);
    }
}
```

[/slide]

[slide hideTitle]
# Classes

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-5-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Classes and objects are the **two main aspects** of object-orientated programming. 

Everything in Java is associated with classes and objects, along with their fields and methods.

In programming classes provide the **structure for describing and creating objects**. 

It builds the specification of a given type object from the real-world.

The class **body** (the area between the braces) contains all the code that provides for the life cycle of the objects created from class:

- **Fields** that provide the state of the class and its objects:

  - `String type` 

  - `int age`

- **Constructors** for initializing new objects

- **Getters and Setters** for accessing and changing the fields: 

  - `getType()`

  - `setType(String type)`

  - `getAge()`

  - `setAge(int age)`
 
- **Methods** to implement the behavior of the class and its objects: 

  - `makeSound()`


```java
public class MyClass {
    // fields
    // constructors
    // getters and setters
    // other methods
}
```

```java
public class Animal {
    // fields
    private String type;
    private int age;

    // constructors
    public Animal() {
    }

    public Animal(String type) {
        this.type = type;
    }

    // getters and setters
    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // methods
    public void makeSound() {
        System.out.println("The animal is making sounds.");
    }
}
```

[/slide]

[slide hideTitle]
# Real-Life Example

All entities with similar characteristics can be arranged in categories.

For example, all animals are grouped in a single `class` and each animal is an `object` of that class.

[image assetsSrc="ObjectsAndClasses_RealLifeExample.png" /]

Each animal has states like type, age, colour, preferred food, etc. and behaviour like eat, drink water, move, make sound, etc. 

A class is like an object constructor, that contains all of their similar characteristics. It is a "blueprint" for creating objects.

[/slide]

[slide hideTitle]

# Objects - Instances of Classes

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-6-objects-instances-of-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creating an object based on a predefined class is called **instantiation**.

The **instance** is the object itself, which is created at runtime.

All instances have common **behavior**. 

To create an object: 

1) Declare the `main` **method**

2) Specify the **class name** 

3) Set an **object name**

4) Use the `new` **keyword** 

```java
public class Animal {
    // fields
    private String type;

    // constructors
    public Animal() {
    }

    public Animal(String type) {
        this.type = type;
    }

    // getters and setters
    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    // methods
    public void makeSound() {
        System.out.println("The animal is making sounds.");
    }

    // main method
    public static void main(String[] args) {
        Animal dog = new Animal("mammal");
        Animal lizard = new Animal("reptile");
    }
}
```

You can create **multiple objects** out of one class.

```java
public class Animal {
    public static void main(String[] args) {
        Animal dog = new Animal("mammal");
        Animal lizard = new Animal("reptile");
    }
}
```

[/slide]

[slide hideTitle]

# Classes vs. Objects

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-7-classes-vs-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Problem with Solution: Songs

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-problem-and-solution-songs-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Songs" taskId="java-fund-16-Objects-and-Classes-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Define a class **Song**, which holds the following information about songs: 
- **Type List**

- **Name**

- **Time**

### Input / Constraints

- On the first line you will receive the **number of songs - N**.

- On the next N-lines you will be receiving data in the following format: 
"\{typeList\}\_\{name\}\_\{time\}".

- On the last line you will receive **Type List** or **"all"**.

### Output

Print only the **Names of the songs** which are from that **Type List** or **All songs**.

## Examples

| **Input** | **Output** |
| --- | --- |
| 3 | DownTown |
| favourite_DownTown_3:14 | Kiss |
| favourite_Kiss_4:16 | Smooth Criminal |
| favourite_Smooth Criminal_4:01 | |
| favourite | |

| **Input** | **Output** |
| --- | --- |
| 4 | Andalouse |
| favourite_DownTown_3:14 | |
| listenLater_Andalouse_3:24 | |
| favourite_In To The Night_3:58 | |
| favourite_Live It Up_3:48 | |
| listenLater | |

| **Input** | **Output** |
| --- | --- |
| 2 | Replay |
| like_Replay_3:15 | Photoshop |
| ban_Photoshop_3:48 | |
| all | |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
favourite_DownTown_3:14
favourite_Kiss_4:16
favourite_Smooth Criminal_4:01
favourite
[/input]
[output]
DownTown
Kiss
Smooth Criminal
[/output]
[/test]
[test open]
[input]
4
favourite_DownTown_3:14
listenLater_Andalouse_3:24
favourite_In To The Night_3:58
favourite_Live It Up_3:48
listenLater
[/input]
[output]
Andalouse
[/output]
[/test]
[test open]
[input]
2
like_Replay_3:15
ban_Photoshop_3:48
all
[/input]
[output]
Replay
Photoshop
[/output]
[/test]
[test]
[input]
4
v_rrr_3:14
listenLater_rr_3:24
v_r_3:58
v_rp_3:48
v
[/input]
[output]
rrr
r
rp
[/output]
[/test]
[test]
[input]
6
v_rrr_3:14
listenLater_rr_3:24
v_r_3:58
v_rp_3:48
b_wqeq_3:58
b_tre_3:48
b
[/input]
[output]
wqeq
tre
[/output]
[/test]
[test]
[input]
5
a_opsa_2:51
like_Replay_3:15
c_tigre_4:21
Ceca_Trepni_3:58
ban_Photoshop_3:48
all
[/input]
[output]
opsa
Replay
tigre
Trepni
Photoshop
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Students

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-problem-and-solution-students-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Students" taskId="java-fund-16-Objects-and-Classes-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Define a class **Student**, which holds the following information about students: 
 - first name
 - last name
 - age
 - hometown

### Input / Constraints

Read a list of students until you receive **"end"** command.

After that, you will receive a **city name**.

### Output

Print only students which are from the given city, in the following format: 
"\{firstName\} \{lastName\} is \{age\} years old.".

## Examples

| **Input** | **Output** |
| --- | --- |
| John Smith 15 Sofia | John Smith is 15 years old. |
| Peter Ivanov 14 Plovdiv | Linda Bridge is 16 years old. |
| Linda Bridge 16 Sofia | |
| Simon Stone 12 Varna | |
| end | |
| Sofia | |

| **Input** | **Output** |
| --- | --- |
| Anthony Taylor 15 Chicago | Anthony Taylor is 15 years old. |
| David Anderson 16 Washington | Jack Lewis is 14 years old. |
| Jack Lewis 14 Chicago | David Lee is 14 years old. |
| David Lee 14 Chicago | |
| end | |
| Chicago | |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Smith 15 Sofia
Peter Ivanov 14 Plovdiv
Linda Bridge 16 Sofia
Simon Stone 12 Varna
end
Sofia
[/input]
[output]
John Smith is 15 years old
Linda Bridge is 16 years old
[/output]
[/test]
[test open]
[input]
Anthony Taylor 15 Chicago
David Anderson 16 Washington
Jack Lewis 14 Chicago
David Lee 14 Chicago
end
Chicago
[/input]
[output]
Anthony Taylor is 15 years old
Jack Lewis is 14 years old
David Lee is 14 years old
[/output]
[/test]
[test]
[input]
Anthony Taylor 13 varna
David A 14 b
Jack L 16 varna
David Lee 17 varna
end
varna
[/input]
[output]
Anthony Taylor is 13 years old
Jack L is 16 years old
David Lee is 17 years old
[/output]
[/test]
[test]
[input]
Thony Taylor 13 varna
David A 14 b
Jack L 16 varna
David Lee 17 b
end
b
[/input]
[output]
David A is 14 years old
David Lee is 17 years old
[/output]
[/test]
[test]
[input]
T T 13 varna
b Aa 14 b
N m 21 c
Jack L 16 varna
David Lee 17 b
end
c
[/input]
[output]
N m is 21 years old
[/output]
[/test]
[test]
[input]
T T 13 v
b Aa 14 v
N m 21 v
Jack L 16 v
David Lee 17 v
end
v
[/input]
[output]
T T is 13 years old
b Aa is 14 years old
N m is 21 years old
Jack L is 16 years old
David Lee is 17 years old
[/output]
[/test]
[test]
[input]
T T 22 a
b Aa 14 e
N m 30 c
Jack L 18 e
Port Lee 14 e
end
e
[/input]
[output]
b Aa is 14 years old
Jack L is 18 years old
Port Lee is 14 years old
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Students 2.0

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-problem-and-solution-students-2.0-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Students 2.0" taskId="java-fund-16-Objects-and-Classes-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Use the class from the previous problem.

If you receive a student, who already exists (**first name** and **last name** should be **unique**) overwrite the information.

## Examples

| **Input** | **Output** |
| --- | --- |
| John Smith 15 Sofia | John Smith is 16 years old. |
| John Smith 16 Sofia | Linda Bridge is 17 years old. |
| Linda Bridge 17 Sofia | |
| Simon Stone 12 Varna | |
| end | |
| Sofia | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Smith 15 Sofia
John Smith 16 Sofia
Linda Bridge 17 Sofia
Simon Stone 12 Varna
end
Sofia
[/input]
[output]
John Smith is 16 years old
Linda Bridge is 17 years old
[/output]
[/test]
[test]
[input]
John Smith 15 Sofia
Peter Ivanov 14 Plovdiv
Peter Ivanov 14 Sofia
Linda Bridge 16 Sofia
Simon Stone 12 Varna
end
Sofia
[/input]
[output]
John Smith is 15 years old
Peter Ivanov is 14 years old
Linda Bridge is 16 years old
[/output]
[/test]
[test]
[input]
J S 3 S
Peter Ivanov 14 P
P J 104 S
J P 61 S
Simon Stone 12 Varna
Simon Sone 12 Varna
end
Varna
[/input]
[output]
Simon Stone is 12 years old
Simon Sone is 12 years old
[/output]
[/test]
[test]
[input]
J S 3 S
Peter Ivanov 14 P
P J 104 S
J P 61 S
Simon Stone 12 Varna
Simon Sone 12 Varna
end
S
[/input]
[output]
J S is 3 years old
P J is 104 years old
J P is 61 years old
[/output]
[/test]
[/tests]
[/code-task]
[/slide]