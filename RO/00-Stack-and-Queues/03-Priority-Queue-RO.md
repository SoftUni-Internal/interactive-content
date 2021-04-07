# Coadă Prioritară

[slide hideTitle]
# Coadă Prioritară

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-41-Priority-Queue-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Spre deosebire de cozile normale, **coada prioritară** elementele sunt **recuperate în ordine sortată**.

Să presupunem că vrem să **recuperăm elementele** în **ordinea crescătoare**.

În acest caz, **capul cozii prioritare va fi cel mai mic element**.

Odată ce acest element este recuperat, **cel mai mic element următor va fi capul cozii**.

Este important să rețineți că elementele unei cozi de prioritate **pot să nu fie sortate**.

Cu toate acestea, elementele sunt **întotdeauna recuperate în ordine sortată**

Să vedem următorul exemplu:

```java live
PriorityQueue<Integer> numbers = new PriorityQueue<>();
        
    numbers.add(5);
    numbers.add(4);
    numbers.add(2);
    numbers.add(7);
    numbers.add(1);
    numbers.add(6);
    numbers.add(3);

    while (numbers.size() > 0){
        System.out.println(numbers.poll());
    }
```
După cum puteți vedea, recuperăm numerele prin ordine crescătoare, în ciuda ordinii de inserare a acestora.

## Comparatori Personalizați

Puteți să vă specificați propria ordine de comparație, pasând cozii de prioritate un anumit **comparator personalizat**.


```java live
Comparator<Integer> integerComparator = (a, b) -> {
            if (a < b) {
                return 1;
            }
            return -1;
        };

PriorityQueue<Integer> numbers = new PriorityQueue<>(integerComparator);
        
    numbers.add(5);
    numbers.add(4);
    numbers.add(2);
    numbers.add(7);
    numbers.add(1);
    numbers.add(6);
    numbers.add(3);

    while (numbers.size() > 0){
        System.out.println(numbers.poll());
    }
```

Acest exemplu primește aceleași numere precum precedentul, dar, de această dată, numerele sunt returnate în **ordine descrescătoare**, deoarece am adăugat propriul nostru comparator.

Aici avem un exemplu cu șiruri:


```java live
PriorityQueue<String> strings = new PriorityQueue<>();
    strings.add("Anna");
    strings.add("T");
    strings.add("A");
    strings.add("George");

    while (strings.size() > 0){
        System.out.println(strings.poll());
    }
```

În exemplul de mai sus, elementele sunt eliminate în funcție de ordinea naturală a șirurilor, care e **ordinea alfabetică**. Atunci când două șiruri încep cu același caracter, se compară lungimile acestora, iar prima dată se elimină cel mai scurt dintre cele două. 

[image assetsSrc="Java-Advanced-Stack-and-Queues-12.png" /]


[/slide]

