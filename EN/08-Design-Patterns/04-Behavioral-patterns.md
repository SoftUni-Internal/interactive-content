# Behavioral Patterns

[slide hideTitle]

# Purposes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-33-34-behavioral-patterns-purposes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Behavioral patterns** are concerned with the **interaction** between objects.

They define the way objects are interconnected.


[/slide]

[slide hideTitle]

# The Command Pattern

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-35-command-pattern-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **command pattern** lets us **parametrize** clients with different requests. 

This pattern provides us a single method to execute commands. 

This can alsobe called **command interface**.

Then, we have the **concrete command** which is an operation that passes a command to the receiver.

The **Receiver** takes the command and acts.

And finally, we have the **Invoker** class that asks the **command** to carry our request.

[image assetsSrc="Design-Patterns(3).png" /]

This simple example shows how a command pattern functions.

We will simulate a simple text editor.

Let us first create our interface which will execute our methods:

```java
public interface Command {
    void execute();
}
```

Then, it is important to create a class that will handle the methods:

``` java
public class Text
{
    public void open()
    {
        System.out.println("Text is Open.");
    }

    public void close()
    {
        System.out.println("Text is Closed.");
    }
}
```

After that, we should create the classes that implement a **Command** interface that we have created:

``` java
public class OpenText implements Command
{
    private Text Text;

    public OpenText(Text sublimeText)
    {
        this.Text = sublimeText;
    }

    @Override
    public void execute()
    {
        Text.open();
    }
}
```

``` java
public class CloseText implements Command {
    private Text text;

    public CloseText(Text sublimeText) {
        this.text = sublimeText;
    }

    @Override
    public void execute() {
        text.close();
    }
}
```

We will also need an **Options** class for our two commands. 

We will create an `Options()` method with holding parameters.

``` java
public class Options {
    private Command openSublimeText;
    private Command closeSublimeText;

    public Options(Command open, Command close) {
        this.openSublimeText = open;
        this.closeSublimeText = close;
    }

    public void pressOpen() {
        openSublimeText.execute();
    }


    public void pressClose() {
        closeSublimeText.execute();
    }
}
```

Let us test our code using the `main` method:

``` java
public class Main {
    public static void main(String[] args ) {
        Text sublimeText = new Text();
        Command openSublimeText = new OpenText(sublimeText);
        Command closeSublimeText = new CloseText(sublimeText);
        Options option = new Options(openSublimeText,closeSublimeText);
        option.pressOpen();
        option.pressClose();
    }
}
```

The **output** of this program will be:

```
Text is Open.
Text is Closed.
```

[/slide]

[slide hideTitle]

# The Template Pattern

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-40-template-pattern-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **template pattern** gives us an abstract idea of an algorithm and an abstract method.

We use template patterns to distribute behavior between classes.

This way, we can **reduce redundancy** in our code.

It also allows any subclasses to **redefine** the implementation of some of the algorithm **parts**, but not its structure.

[image assetsSrc="Design-Patterns(4).png" /]

Let us take a look at this code example:

``` java
public class Salad {

    void prepareSalad() {
     peelVeggies();
     addCheese();
     addFlavor();
     addDressing();
    }

    public void peelVeggies() {
        System.out.println("Peeling Oranges");
    }

     public void addCheese() {
        System.out.println("Adding Cheese");
    }

     public void addFlavour() {
        System.out.println("Spice with some flavour");
    }

     public void addDressing() {
        System.out.println("Adding Dressing");
    }

 }
```
Here we have a main `prepareSalad()` method that calls our four methods. 

They contain the "**algorithm**" to make a salad.


[/slide]
