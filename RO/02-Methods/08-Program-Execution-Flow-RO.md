# Fluxul de Executare a Programului

[slide hideTitle]

# Executarea Programului

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-50-51-Program-Execution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În Java fluxul programului este controlat de o parte a memoriei numită **stiva de apeluri (call stack)**.

Stiva este utilizată pentru a monitoriza apelurile metodelor și etapele în care au fost apelate în program.

De îndată ce o metodă își termină execuția, fluxul programului este reluat prin executarea codului care urmează după metodă.

Acest concept este exemplificat mai jos:

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

Folosim clasa `Scanner` pentru a accepta intrarea utilizatorului prin consolă.

Mai întâi, citim numele orașului și apelăm imediat metoda `printWeather()`, transmițând acest șir ca parametru.

Programul omite apoi câteva linii până când găsește metoda `printWeather(String city)` și execută codul din interiorul metodei.

În cele din urmă, va reveni la locul unde metoda a fost apelată și va continua cu imprimarea întrebării corespunzătoare și solicitând utilizatorului să introducă datele.

[/slide]

[slide hideTitle]

# Stiva de Apeluri

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-52-Program-Execution-Call-stack-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Stiva conține **cadre de stivă** pentru fiecare apel al metodei. Aceste cadre de stivă stochează informații despre:

- Orice argumente transmise metodei
- Variabile locale
- Adresa la care să revină după ce metoda curentă este executată


[/slide]
