# Coadă Prioritară

[slide hideTitle]
# PriorityQueue

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-41-Priority-Queue-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**PriorityQueue** este un tip special de coadă. Elementele sale sunt **recuperate într-o ordine stabilită**.

Această funcționalitate este bazată pe ordinea naturală a tipului de date conținut în coadă. Cel mai mic element se va afla mereu la începutul cozii atunci când acesta este extras.

Să ne imaginăm că vrem să extragem un număr întreg dintr-un PriorityQueue care conține numere. De fiecare dată când extragem un element, va fi extras mai întâi **cel mai mic element**, apoi următorul cel mai mic element, până când coada este goală.

Este important să notăm faptul că este posibil ca elementele unui Priority Queue să nu fie stocate intern într-o anumită ordine, dar acestea vor fi extrase întotdeauna în ordinea corespunzătoare.

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
După cum puteți vedea, numerele sunt extrase în ordine crescătoare, în ciuda ordinii de inserare a acestora.

## Comparatori Personalizați

Puteți să specificați propriul mod de ordonare, prin transmiterea unui **comparator personalizat**.


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

Acest exemplu primește aceleași numere ca în exemplul precedent, dar, de această dată, numerele sunt returnate în **ordine descrescătoare**, deoarece am adăugat propriul nostru comparator.

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

În exemplul de mai sus, elementele sunt eliminate în funcție de ordinea naturală a șirurilor, adică **ordinea alfabetică**. Atunci când două șiruri încep cu același caracter, vor fi comparate lungimile acestora, iar prima dată va fi eliminat cel mai scurt dintre cele două. 

[image assetsSrc="Java-Advanced-Stack-and-Queues-12.png" /]


[/slide]


