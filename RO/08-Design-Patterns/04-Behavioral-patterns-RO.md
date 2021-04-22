# Șabloane de Proiectare Comportamentale

[slide hideTitle]

# Scopuri

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-33-34-behavioral-patterns-purposes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șabloanele comportamentale** sunt preocupate de **interacțiunea** dintre obiecte.

Ele definesc modul în care obiectele sunt interconectate.


[/slide]

[slide hideTitle]

# Șablonul Command

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-35-36-39-command-pattern-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șablonul Command** ne permite **parametrizarea** clienților cu cereri diferite.

Acest model ne oferă o singură metodă de executare a comenzilor.

Aceasta se poate numi și **interfață de comandă**.

Apoi, avem **comanda concretă** care este o operație care transmite o comandă receptorului.

**Receptorul** preia comanda și acționează.

Și, în sfârșit, avem clasa **Invoker** care cere **comenzii** să ne transmită solicitarea.

[image assetsSrc="Design-Patterns(3).png" /]

Acest exemplu simplu arată cum funcționează un tipar de comandă.

Vom simula un editor de text simplu.

Să ne creăm mai întâi interfața care va executa metodele noastre:

```java
public interface Command {
    void execute();
}
```

Apoi, este important să creați o clasă care să se ocupe de metode:

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

După aceea, ar trebui să creăm clasele care implementează o interfață **Command** pe care am creat-o:

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

De asemenea, vom avea nevoie de o clasă **Options** pentru cele două comenzi ale noastre.

Vom crea metoda `Options()` cu parametri de reținere.

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

Să ne testăm codul folosind metoda `main` :

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

**Ieșirea** acestui program va fi:

```
Text is Open.
Text is Closed.
```

[/slide]

[slide hideTitle]

# Șablonul Template

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-40-41-42-template-pattern-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șablonul Template** ne oferă o idee abstractă a unui algoritm și a unei metode abstracte.

Folosim șabloane tempalte pentru a distribui comportamentul între clase.

În acest fel, putem **reduce redundanța** în codul nostru.

De asemenea, permite oricăror subclase să **redefinească** implementarea unor **părți** ale algoritmului, dar nu și structura acestuia.

[image assetsSrc="Design-Patterns(4).png" /]

Să aruncăm o privire la acest exemplu de cod:

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
Aici avem o metodă principală  `prepareSalad()` care apelează cele patru metode ale noastre.

Acestea conțin "**algoritmul**" pentru a face o salată.


[/slide]
