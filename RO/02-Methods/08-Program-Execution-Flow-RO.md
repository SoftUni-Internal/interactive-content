# Fluxul de Executare a Programului

[slide hideTitle]

# Executarea Programului

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-50-51-Program-Execution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Fluxul programului în Java este controlat printr-o parte a memoriei numită **stiva de apel**.

Stiva este utilizată pentru a urmări ce metode au fost numite și punctele programului la care au fost apelate.

De îndată ce o metodă își termină execuția, fluxul programului reia din locul din codul din care a fost invocat.

Să vedem acest lucru în acțiune.

```java
public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String city = sc.nextLine();

        printWeather(city);

        System.out.println("Check the weather in another location?");

        String choice = sc.nextLine();

        if (choice.equals("yes")) {
            // Do something
        }
        //Do something else

    }

    public static void printWeather(String city) {
        System.out.println(String.format("The weather in %s is:", city));
        System.out.println("Cloudy with a 53% chance of rain!");
    }

}
```

Folosim clasa Scanner pentru a accepta intrarea utilizatorului prin consolă.

Mai întâi, citim numele orașului și apelăm imediat metoda `printWeather ()`, trecându-i șirul ca parametru.

Programul trece apoi pe câteva linii până unde se găsește declarația metodei "printWeather (oraș șir)" și execută tot codul din metodă.

În cele din urmă, va reveni la locul unde a fost apelată metoda și va continua după aceasta imprimând o întrebare și solicitând utilizatorului să aleagă da sau nu.

[/slide]

[slide hideTitle]

# Stiva de Apel

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-52-Program-Execution-Call-stack-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Stiva conține **cadre de stivă** pentru fiecare apel de metodă. Aceste cadre de stivă stochează informații despre:

- Orice argumente transmise metodei
- Variabile locale
- Adresa la care să reveniți după ce o metodă termină de executat


[/slide]
