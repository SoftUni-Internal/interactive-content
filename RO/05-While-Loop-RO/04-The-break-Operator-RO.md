[slide hideTitle]
# Instrucțiunea Break

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-18-19-20-Break-operator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Instrucțiunea `break` oprește executarea unei bucle în momentul în care este apelată și continuă executarea de la prima linie de după finalul buclei.

Asta înseamnă că iterația curentă a buclei nu va fi finalizată corespunzător, iar restul codului din corpul buclei nu va fi executat. 

Dacă folosiți bucle imbricate, această instrucțiune va opri executarea buclei din interior și va începe să execute următoarea linie de cod care urmează buclei interioare. 

În acest exemplu, instrucțiunea `break` oprește bucla atunci când intrarea este un număr **impar**:
```java
Scanner scanner = new Scanner(System.in);
while (true) {
  int number = Integer.parseInt(scanner.nextLine());
  
  if (number % 2 != 0) {
    break;
  }
}
```
Când dorim să folosim intenționat buclele **infinite**, `break` va încheia bucla în momentul în care este îndeplinită o anumită condiție dată.
[/slide]
