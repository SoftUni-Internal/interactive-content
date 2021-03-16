// sectionId: "Javascript::Programming-Basics::Nested-Loops::Summary"

[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-51-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- **For-loops** can use different **steps**
   - e.g. `i += 2` or `i *= 2` or `i = i * i`
- **Nested loops** are loops, placed **within another loop**

```js

while (condition) {
   
   for (variable initialization; condition; increment) {   
       
   }
}
```

- Nested **for-loops**, could be used for processing data by rows and columns 

```js
for (variable initialization; condition; increment) {
  
  for (variable initialization; condition; increment) { 
   
  }
}
```
- Nested **while-loops** are very well applied for nested, repeating logic with exit conditions 
```js
while (condition) {

  while (condition) {

  }
}
```

[/slide]
