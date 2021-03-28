// sectionId: "Javascript::Programming-Basics::Nested-Loops::Summary"

[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-51-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In această lecție ați învățat: 

- **Buclele for** pot folosi diferiți **pași**:
   - e.g. `i += 2` sau `i *= 2` sau `i = i * i`
   
- **Buclele imbricate** sunt bucle aflate **în interiorul unei alte bucle**
```js

while (condition) {
   
   for (variable initialization; condition; increment) {   
       
   }
}
```

- Buclele imbricate **for** pot fi utilizate pentru a procesa date pe linii sau coloane
```js
for (variable initialization; condition; increment) {
  
  for (variable initialization; condition; increment) { 
   
  }
}
```
- Buclele imbricate **while** sunt foarte utile pentru a fi aplicate în logica imbricată cu condiții de ieșire
```js
while (condition) {

  while (condition) {

  }
}
```

[/slide]
