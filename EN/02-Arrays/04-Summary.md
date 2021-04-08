[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-27-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


## In this lesson you learned:

- Arrays are sequences of elements 

    - their elements are numbered from 0 to `length-1`

``` js live
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[numbers.length-1])
```

- We can create an array using this syntax
``` js 
let numbers = [1, 2, 3, 4, 5];
```
- We can access its elements by their index

``` js 
let numbers = [1, 2, 3, 4, 5];
```

- Elements can be iterated over with a standard loop or a "**for-of**" loop 

``` js live
let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}
```

## In the next lesson, you will learn:

- What is a Function?

- Declaring and invoking functions

- Nested functions

- Value and reference types

- Arrow functions

- Naming and best practices

```plantuml
!define ICONURL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/v2.1.0
skinparam defaultTextAlignment center
!include ICONURL/common.puml
!include ICONURL/font-awesome-5/gitlab.puml
!include ICONURL/font-awesome-5/java.puml
!include ICONURL/font-awesome-5/rocket.puml
!include ICONURL/font-awesome/newspaper_o.puml
FA_NEWSPAPER_O(news,good news!,node) #White {
FA5_GITLAB(gitlab,GitLab.com,node) #White
FA5_JAVA(java,PlantUML,node) #White
FA5_ROCKET(rocket,Integrated,node) #White
}
gitlab ..> java
java ..> rocket
```



[/slide]
