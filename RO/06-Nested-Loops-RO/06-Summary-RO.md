// sectionId: "Javascript-Programming-Basics-Nested-Loops-Summary"

[slide hideTitle]
# Sumar

[vimeo-video]
[stream language="EN" videoId="487129429/3a15190b39" default /]
[stream language="RO" videoId="487129429/3a15190b39"  /]
[/video-vimeo]

In această lecție am învățat: 

- **Buclele for** pot folosi **pași** diferiți
   - E.g. `i += 2` sau `i *= 2` sau `i = i * i`
- **Buclele imbricate** sunt bucle aflate **în interiorul unei alte bucle**
```js

while (condition) {
   
   for (variable initialization; condition; increment) {   
       
   }
}
```

- Buclele imbricate **for**, pot fi utilizate pentru a procesa date pe linii sau coloane
```js
for (variable initialization; condition; increment) {
  
  for (variable initialization; condition; increment) { 
   
  }
}
```
- Buclele imbricate **while** sunt foarte utile pentru a fi aplicate în logica imbricată cu condiționări de ieșire
```js
while (condition) {

  while (condition) {

  }
}
```

[/slide]