# Basic Streams in Java


[slide]

# Byte Streams

Java byte streams are used to perform input and output of 8-bit bytes.

Byte streams are the lowest level streams there are.

Their main characteristic is that they can read or write only one byte at a time. 

All of the byte streams descend from the InputStream and the OutputStream classes.

Though there are many classes related to byte streams but the most frequently used classes are, **FileInputStream** and **FileOutputStream**.

- Тhe **InputStream is a sequence of bytes finishing with -1**, which is a special character **marking the end of the file**.

[image assetsSrc="streams-files-directories-example(3).png" /]

- The **OutputStream consists only of bytes**, which will be written.

[image assetsSrc="streams-files-directories-example(4).png" /]


[/slide]

[slide hideTitle]
# Problem: Copy Bytes
[code-task title="Copy Bytes" taskId="8b4cd32d-5ff6-4940-a8de-3845ace71241" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```

```
[/code-editor]
[task-description]
## Description
Read the file named "**input.txt**" and write to another file every character's **ASCII** representation.
Write every space or new line as it is, e.g. as a space or a new line.

## Guidelines

There is one zipped folder with resources for all exercises, that you need to use. 

Download the **resources folder** [here](https://mega.nz/file/7YgFUaxb#759BYR32eIMTbn2BiXWIs0s6ip0ZahlwUOuOuFu221Y).

For each exercise submit only the **output** of your program, **not the code**.

## Examples
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes | 79110 749711011797114121 49 44 49535151 44 771059910497101108 6511010310110811144 116104101110 10210510211612145115101118101110 12110197114115 11110810044 119114105116101115 |


[/task-description]
[code-io /]
[tests]
[test]
[input]
79110 749711011797114121 49 44 49535151 44 771059910497101108 6511010310110811144 116104101110 10210510211612145115101118101110 12110197114115 11110810044 11911410511610111513
102114111109 7010811111410111099101 116111 8411110910997115111 10010139 67971189710810510111410544 97 121111117116104 111102 11011198108101 8211110997110 102971091051081214413
119104111 9710211610111411997114100115 981019997109101 104105115 10297118111117114105116101 11211711210510858 3473102 73 100111 110111116 112111115115101115115 11610410113
97114116 111102 1109711810510397116105110103 116104101 11510197 111102 121111117114 112111116101110116 10310111010511711544 11610497116 103101110105117115 11910510810813
110101118101114116104101108101115115 10112099117115101 10910144 97110100 110101105116104101114 100101115112105115101 109121 1051101011131179710810511612144 110111114 1001011099711010013
111102 109101 11610497116 11910410599104 73 10497118101 105116 110111116 105110 109101 116111 10310511810159 11510511099101 11610497116 11910410599104 1151169711010011513
97108111110101 105110 101118101114121116104105110103 9997110 105110 110111116104105110103 102105110100 105116115 991111171101161011141129711411646 87104101114101102111114101 12111111711413
10811111410011510410511244 95116104101 111110108121 108105103104116 105110 111117114 97103101 1181111179910411597102101100 116111 116104105115 11911111410810011595 1049711810511010313
110111 10111311797108 111114 11210110111444 9997110110111116 102105110100 115971161051151029799116105111110 105110 116104101 119111114107 111102 97110121 11111610410111413
1049711010046 7310244 11610410111410110211111410144 116104105115 111114 11610497116 105110 116104101 119111114107115 11910410599104 73 104111112101 97110100 11211411110910511510113
116111 10112010199117116101 115104111117108100 10497112112101110 116111 11210810197115101 12111111744 73 115104111117108100 9997108108 11610497116 11911111410744 11011111613
10311111110044 98117116 1021111141161171109711610146 65110100 105102 73 115104111117108100 101118101114 102101101108 97115115117114101100 11610497116454597115 1049711513
98101101110 114101112111114116101100 116111 109101454573 10497118101 103105118101110 121111117114 108111114100115104105112 115971161051151029799116105111110 105110 11111010113
116104105110103 111114 9711011111610410111444 73 119105108108 10997107101 97 103105102116 116111 121111117 111102 109121 112114101115101110116 97110100 111102 9710810813
11610497116 116104101 102117116117114101 10997121 98114105110103 10910159 97110100 105116 119105108108 98101 97 10311410197116 11297105110 116111 109101 116111 9810113
1171109798108101 116111 1141019997108108 116104101 1129711511644 105110 111114100101114 116111 115101114118101 121111117 115111 10911799104 116104101 1081111101031011144413
10511011511610197100 111102 10497118105110103 111110108121 116104101 10211711611711410144 11910410599104 9997110110111116 98101 10811111010344 11510511099101 73 97109 9710810813
116111111 11110810046 84104101114101 105115 110111116104105110103 109111114101 108101102116 102111114 109101 116111 1159712146 8210197100 109121 10410197114116 9711010013
110111116 109121 10810111611610111444 102111114 109121 112101110 9997110110111116 971121121141119799104 116104101 101120112114101115115105111110 111102 109121 10311111110013
119105108108463491 51 9313
13
[/input]
[output]
79110 749711011797114121 49 44 49535151 44 771059910497101108 6511010310110811144 116104101110 10210510211612145115101118101110 12110197114115 11110810044 11911410511610111513
102114111109 7010811111410111099101 116111 8411110910997115111 10010139 67971189710810510111410544 97 121111117116104 111102 11011198108101 8211110997110 102971091051081214413
119104111 9710211610111411997114100115 981019997109101 104105115 10297118111117114105116101 11211711210510858 3473102 73 100111 110111116 112111115115101115115 11610410113
97114116 111102 1109711810510397116105110103 116104101 11510197 111102 121111117114 112111116101110116 10310111010511711544 11610497116 103101110105117115 11910510810813
110101118101114116104101108101115115 10112099117115101 10910144 97110100 110101105116104101114 100101115112105115101 109121 1051101011131179710810511612144 110111114 1001011099711010013
111102 109101 11610497116 11910410599104 73 10497118101 105116 110111116 105110 109101 116111 10310511810159 11510511099101 11610497116 11910410599104 1151169711010011513
97108111110101 105110 101118101114121116104105110103 9997110 105110 110111116104105110103 102105110100 105116115 991111171101161011141129711411646 87104101114101102111114101 12111111711413
10811111410011510410511244 95116104101 111110108121 108105103104116 105110 111117114 97103101 1181111179910411597102101100 116111 116104105115 11911111410810011595 1049711810511010313
110111 10111311797108 111114 11210110111444 9997110110111116 102105110100 115971161051151029799116105111110 105110 116104101 119111114107 111102 97110121 11111610410111413
1049711010046 7310244 11610410111410110211111410144 116104105115 111114 11610497116 105110 116104101 119111114107115 11910410599104 73 104111112101 97110100 11211411110910511510113
116111 10112010199117116101 115104111117108100 10497112112101110 116111 11210810197115101 12111111744 73 115104111117108100 9997108108 11610497116 11911111410744 11011111613
10311111110044 98117116 1021111141161171109711610146 65110100 105102 73 115104111117108100 101118101114 102101101108 97115115117114101100 11610497116454597115 1049711513
98101101110 114101112111114116101100 116111 109101454573 10497118101 103105118101110 121111117114 108111114100115104105112 115971161051151029799116105111110 105110 11111010113
116104105110103 111114 9711011111610410111444 73 119105108108 10997107101 97 103105102116 116111 121111117 111102 109121 112114101115101110116 97110100 111102 9710810813
11610497116 116104101 102117116117114101 10997121 98114105110103 10910159 97110100 105116 119105108108 98101 97 10311410197116 11297105110 116111 109101 116111 9810113
1171109798108101 116111 1141019997108108 116104101 1129711511644 105110 111114100101114 116111 115101114118101 121111117 115111 10911799104 116104101 1081111101031011144413
10511011511610197100 111102 10497118105110103 111110108121 116104101 10211711611711410144 11910410599104 9997110110111116 98101 10811111010344 11510511099101 73 97109 9710810813
116111111 11110810046 84104101114101 105115 110111116104105110103 109111114101 108101102116 102111114 109101 116111 1159712146 8210197100 109121 10410197114116 9711010013
110111116 109121 10810111611610111444 102111114 109121 112101110 9997110110111116 971121121141119799104 116104101 101120112114101115115105111110 111102 109121 10311111110013
119105108108463491 51 9313
13
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Copy Bytes

```java

String inputPath = "D:\\input.txt";
String outputPath = "D:\\03.CopyBytesOutput.txt";


try (InputStream in = new FileInputStream(inputPath); OutputStream out = new FileOutputStream(outputPath)) {

    int oneByte = 0;
    while ((oneByte = in.read()) >= 0) {

        if (oneByte == 10 || oneByte == 32) {

            out.write(oneByte);
        } else {

            String digits = String.valueOf(oneByte);
            for (int i = 0; i < digits.length(); i++){

                out.write(digits.charAt(i));
            }
        }

    }
} catch (IOException e) {
    e.printStackTrace();
}

```

[/slide]


[slide]

# Character Streams

**Java Character streams** are used to perform input and output for **16-bit unicode**.

Though there are many classes related to character streams but the most frequently used classes are, **FileReader** and **FileWriter**. 

Though internally **FileReader uses FileInputStream** and **FileWriter uses FileOutputStream** but here the major difference is that FileReader **reads two bytes at a time** and FileWriter **writes two bytes at a time**.

In short, the character streams can read and write from an input **character by character**.

- Let's see the following example:

Input and output streams are created by using FileReader and FileWriter classes in a **try-with-resources** block.

After declaring and assigning the character variable, by using the `inputStream.read()` method, the while loop has been started until the last character has been read from the input file.

In the scope of the loop, the characters, from the input files, are written to the output file by using the `outputStream.write()` method.


```java
String input = "C:\\input.txt";
String output = "C:\\output.txt";

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

## Combining Streams

- Character streams are often "**wrappers**" for byte streams:
    - FileReader uses FileInputStream
    - FileWriter uses FileOutputStream

```java
String path = "D:\\input.txt";

Scanner reader = new Scanner(new FileInputStream(path));
```

An example above is given with the `Scanner` class, which you have used for quite some time now.

Here is used to wrap a `FileInputStream` and, by now, you have done that by wrapping `System.in`, wich is nothing more but a constant holding an `InputStream`.

[/slide]


[slide hideTitle]
# Problem: Extract Integers
[code-task title="Problem: Extract Integers" taskId="4c9d07b4-b3a3-4d4a-a023-9284400f7aca" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```

```
[/code-editor]
[task-description]
## Description
Read the file provided, named "**input.txt**" and **extracts all integers that are not a part of a word** in a separate file.

A valid integer is **surrounded with white spaces**.

## Guidelines

There is one zipped folder with resources for all exercises, that you need to use. 

Download the **resources folder** [here](https://mega.nz/file/7YgFUaxb#759BYR32eIMTbn2BiXWIs0s6ip0ZahlwUOuOuFu221Y).

For each exercise submit only the **output** of your program, **not the code**.

## Examples
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes | 1 |
| … | 1533 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1
1533
3
[/input]
[output]
1
1533
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Extract Integers

```java
String inputPath = "D:\\input.txt";
String outputPath = "D:\\04.ExtractIntegersOutput.txt";

Scanner scanner = new Scanner(new FileInputStream(inputPath));

PrintWriter out = new PrintWriter(new FileOutputStream(outputPath));

while (scanner.hasNext()) {
    if (scanner.hasNextInt()){
        out.println(scanner.nextInt());
    }

    scanner.next();
}
out.close();

```

[/slide]

[slide]

# Buffered Streams 

The next layer of abstraction over the byte stream are Buffered Streams. 

The Streams we have seen so far use unbuffered I/O. 

This means each read or write request is handled directly by the underlying Operating System.

This can make a program much less efficient, since each such request often triggers disk space, network activity, or some other operation that is relatively expensive.

To overcome this kind of overhead, the Java platform implements Buffered I/O Streams.

Buffered input streams read data from a memory area known as a buffer.

When the Buffered Stream is created, an internal buffer array is created.

Buffered stream can wrap a character stream and give us access to very powerful methods. 

There are four buffered stream classes used to wrap unbuffered streams:
 - **BufferedInputStream** and **BufferedOutputStream** create buffered **byte streams**
 - **BufferedReader** and **BufferedWriter** create buffered **character streams**.

Let's see the following example:

[image assetsSrc="streams-files-directories-example(5).png" /]

Instead of reading the content "**Files and**", byte by byte or a character by character, we can use a buffer to get bigger chunks of that text at a time. 

In this case, the buffer will hold two characters at the same time. 

This significantly will **boost the performance** of our applications. 

[/slide]

[slide hideTitle]
# Problem: Write Every Third Line
[code-task title="Problem: Write Every Third Line" taskId="67e090f0-cf6b-497a-96c4-68ceb9c925fa" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```

```
[/code-editor]
[task-description]
## Description
Read the file provided, named "**input.txt**" and write to another file all lines which number is **divisible by 3**.

Line numbers **start from one**.

## Guidelines

There is one zipped folder with resources for all exercises, that you need to use. 

Download the **resources folder** [here](https://mega.nz/file/7YgFUaxb#759BYR32eIMTbn2BiXWIs0s6ip0ZahlwUOuOuFu221Y).

For each exercise submit only the **output** of your program, **not the code**.


## Examples
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 ,  | then fifty-seven years old,  |
| Michael Angelo,  | Tommaso de' Cavalieri,  |
| then fifty-seven years old,  |  |
| writes |  |
| from Florence to  |  |
| Tommaso de' Cavalieri,  |  |
| a youth of noble Roman family, |  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
who afterwards became his favourite pupil: "If I do not possess the
of me that which I have it not in me to give; since that which stands
no equal or peer, cannot find satisfaction in the work of any other
good, but fortunate. And if I should ever feel assured that--as has
that the future may bring me; and it will be a great pain to me to be
too old. There is nothing more left for me to say. Read my heart and
[/input]
[output]
who afterwards became his favourite pupil: "If I do not possess the
of me that which I have it not in me to give; since that which stands
no equal or peer, cannot find satisfaction in the work of any other
good, but fortunate. And if I should ever feel assured that--as has
that the future may bring me; and it will be a great pain to me to be
too old. There is nothing more left for me to say. Read my heart and
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Write Every Third Line

```java
String inputPath = "D:\\input.txt";
String outputPath = "D:\\05.WriteEveryThirdLineOutput.txt";

try (BufferedReader in = new BufferedReader(new FileReader(inputPath));
                     PrintWriter out = nePrintWriter(newFileWriter(outputPath))) {

    int counter = 1;
    String line = in.readLine();

    while (line != null) {

        if (counter % 3 == 0){
        out.println(line);
        counter++;
        }
        line = in.readLine();
    }
} catch (IOException e) {
    e.printStackTrace();
}
```
[/slide]

[slide]

# Command I/O Streams 

Java provides support for standard I/O where the user's program can take input from a keyboard and then produce an output on the computer screen.

The Java platform supports three Standard Streams, attached with the console.

**Standard Input** − `System.in` is an **InputStream** which is typically connected to the keyboard input of console programs.

**Standard Output** − `System.out` is often used from console-only programs as a way to display the result of their execution to the user.

**Standard Error** − `System.err` is used to output the error data produced by the user's program.

You might expect the Standard Streams to be character streams, but, for historical reasons, they are **byte streams**. 

`System.out` and `System.err` are defined as **PrintStream** objects. 

Although it is technically a byte stream, PrintStream utilizes an **internal character stream object** to emulate **many of the features of character streams**.

By contrast, `System.in` is a byte stream with **no character stream features**. 

To use **Standard Input** as a character stream, wrap `System.in` in **InputStreamReader**.

The following example is for Buffered input stream wich read content from the `System.in` (**Console**):

We create a **BufferedReader** stream, which wraps an **InputStreamReader**.

Then **InputStreamReader** wraps the `System.in` stream.

The `readline()` - method reads a line of text, in this case, this will be something written in the console.

```java
BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

String hello = reader.readLine(); 
System.out.println(hello);        

```

[/slide]

