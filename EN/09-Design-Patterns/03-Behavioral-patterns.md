[slide]

# Behavioral Patterns

The third type of pattern is Behavioral Patterns.

They are concerned with the **interaction** between objects.

The idea behind behavioral patterns is to concentrate on the way objects are interconnected.

It represents the relationship between objects.

The first pattern we will discuss is **Command pattern**.


# Command Pattern:

The command pattern lets us **parametrize** clients with different requests. 

This pattern provides us a single method for executing commands. This is called **Command Interface**.

Then, we have the **ConcreteCommand** which is an operation that passes the command to the receiver.

The **Receiver** takes the command and act.

And the last, we have the **Invoker** class that basically asks the **command** to carry our request.

[image assetsSrc="Design-Patterns(3).png" /]

This simple example shows how the command pattern is working:

Imagine, we have a very simple text editor:

Let's first create our interface which will execute our methods:

```java
public interface Command {
    void execute();
}
```

Then, it is important to create our class which will handle our methods:

``` java
public class Text
{
    public void open()
    {
        System.out.println("Text is Opened");
    }

    public void close()
    {
        System.out.println("Text is Closed");
    }
}
```

Now, let's create our classes which implements our Command interface that we've created:

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
public class CloseText implements Command
{
    private Text text;

    public CloseText(Text sublimeText )
    {
        this.text = sublimeText;
    }

    @Override
    public void execute()
    {
        text.close();
    }
}
```

We will also need an options class for our two commands. We will create Options() method with two parameters inside.

``` java
public class Options
{
    private Command openSublimeText;
    private Command closeSublimeText;

    public Options( Command open, Command close )
    {
        this.openSublimeText = open;
        this.closeSublimeText = close;
    }

    public void pressOpen()
    {
        openSublimeText.execute();
    }


    public void pressClose()
    {
        closeSublimeText.execute();
    }
}
```

And now, let's test our code using our `main` method:

``` java
public class Main
{
    public static void main(String[] args )
    {
        Text sublimeText = new Text();
        Command openSublimeText = new OpenText(sublimeText);
        Command closeSublimeText = new CloseText(sublimeText);
        Options option = new Options(openSublimeText,closeSublimeText);
        option.pressOpen();
        option.pressClose();
    }
}
```

The **output** of our program will be:

```
Text is Opened
Text is Closed
```



[/slide]

[slide]

# Template Pattern:

What is the nature behind **Template Pattern?**

The template pattern gives us an abstract idea of an algorithm and an abstract method called **Template method**.

We use template patterns to distribute behavior between classes.

This way, we can **reduce redundancy** in our code.

Also, it allows the subclasses to **redefine** the implementation of some of the **parts** of the algorithm, but not its structure.

[image assetsSrc="Design-Patterns(4).png" /]

To picture this clearly, let us take a look at this code example:

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

As we see from this code above, we have a main `prepareSalad()` method that calls our four methods. They contain the "**algorithm**" for making a salad.


[/slide]