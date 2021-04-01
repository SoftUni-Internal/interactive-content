// sectionId: "Javascript::Programming-Basics::Nested-Loops::Complex-Loops"

[slide hideTitle]
# Bucle Complexe

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-3-4-complex-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


## Buclele for pot avea pași diferiți

* Bucla for inversată


``` js live
for (let i = 5; i >= 0; i--){
 console.log(i);
}
```

* Bucla for cu un pas de 2


``` js live
for (let j = 1; j <= 10; j += 2) {
   console.log(j);
}
```

* Bucla for care se înmulțește cu 2 la fiecare pas

``` js live
for (let k = 1; k <= 6; k *= 2) {
   console.log(k);
}
```

* Bucla for care folosește un pas care împarte variabila la 2

``` js live
for (let d = 40; d > 0; d /= 2) {
   console.log(d);
}
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Numbers from N down to 1

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-5-6-solution-numbers-from-n-down-to-one-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Numbers from N down to 1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersFromNto1(input) {
   // Scrieți codul dvs. aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

# Descriere
Creați un program care imprimă numerele de la **n** până la 1:

- Veți primi un număr **n** 
- Imprimați numerele de la **n** până la 1 în **ordine descrescătoare** 

# Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| numbersFromNto1(5) | 5, 4, 3, 2, 1 |
| numbersFromNto1(10)| 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 |


[/task-description]
[tests]
[test open]
[input]
numbersFromNto1(5)
[/input]
[output]
5, 4, 3, 2, 1
[/output]
[/test]
[test open]
[input]
numbersFromNto1(10)
[/input]
[output]
10, 9, 8, 7, 6, 5, 4, 3, 2, 1
[/output]
[/test]
[test]
[input]
numbersFromNto1(4)
[/input]
[output]
4, 3, 2, 1
[/output]
[/test]
[test]
[input]
numbersFromNto1(3)
[/input]
[output]
3, 2, 1
[/output]
[/test]
[test]
[input]
numbersFromNto1(2)
[/input]
[output]
2, 1
[/output]
[/test]
[test]
[input]
numbersFromNto1(1)
[/input]
[output]
1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Numbers from 1 to N With Step 3

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-7-8-numbers-from-one-to-n-with-step-three-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Numbers from 1 to N with Step 3" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersFrom1ton(n) {
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

# Descriere
Creați un program care imprimă numerele de la 1 la **n** cu pasul 3:

* Veți primi un număr **n** ca intrare

* Tipăriți numerele de la 1 la **n** cu pasul 3

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| numbersFrom1ton(7) | 1, 4, 7 |
| numbersFrom1ton(10) | 1, 4, 7, 10 |

[/task-description]
[tests]
[test open]
[input]
numbersFrom1ton(7)
[/input]
[output]
1, 4, 7
[/output]
[/test]
[test opne]
[input]
numbersFrom1ton(10)
[/input]
[output]
1, 4, 7, 10
[/output]
[/test]
[test]
[input]
numbersFrom1ton(15)
[/input]
[output]
1, 4, 7, 10, 13
[/output]
[/test]
[test]
[input]
numbersFrom1ton(20)
[/input]
[output]
1, 4, 7, 10, 13, 16, 19
[/output]
[/test]
[test]
[input]
numbersFrom1ton(25)
[/input]
[output]
1, 4, 7, 10, 13, 16, 19, 22, 25
[/output]
[/test]
[test]
[input]
numbersFrom1ton(30)
[/input]
[output]
1, 4, 7, 10, 13, 16, 19, 22, 25, 28
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Even Powers of 2

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-9-10-even-powers-of-two-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Even Powers of 2" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function evenPowersOfTwo(n) {
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

# Descriere
Creați un program, care imprimă toate puterile pare de 2 până la o intrare dată:

* Veți primi un număr **n** ca intrare

* Imprimați puterile pare de 2 până la **n**

# Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| evenPowersOfTwo(5) | 1, 4, 16 |
| evenPowersOfTwo(10) | 1, 4, 16, 64, 256, 1024 |

[/task-description]
[tests]
[test open]
[input]
evenPowersOfTwo(5)
[/input]
[output]
1, 4, 16
[/output]
[/test]
[test open]
[input]
evenPowersOfTwo(10)
[/input]
[output]
1, 4, 16, 64, 256, 1024
[/output]
[/test]
[test]
[input]
evenPowersOfTwo(15)
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384
[/output]
[/test]
[test]
[input]
evenPowersOfTwo(20)
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576
[/output]
[/test]
[test]
[input]
evenPowersOfTwo(25)
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216
[/output]
[/test]
[test]
[input]
evenPowersOfTwo(30)
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216, 67108864, 268435456, 1073741824
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
