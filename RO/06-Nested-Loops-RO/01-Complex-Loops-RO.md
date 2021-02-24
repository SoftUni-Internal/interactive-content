// sectionId: "Javascript::Programming-Basics::Nested-Loops::Complex-Loops"

[slide hideTitle]
# Bucle complexe

[vimeo-video]
[stream language="EN" videoId="488089818/dbec289e55" default /]
[stream language="RO" videoId="488089818/dbec289e55"  /]
[/video-vimeo]


# Buclele  for pot avea pași diferiți

* Bucla for inversată


``` js live
for (let i = 5; i >= 0; i--){
 console.log(i);
}
```

* Bucla for cu un pas cu 2


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
# Problem with Solution: Numbers from N down to 1

[vimeo-video]
[stream language="EN" videoId="488089892/222dacd55c" default /]
[stream language="RO" videoId="488089892/222dacd55c"  /]
[/video-vimeo]

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
Creați un program pentru a imprima numerele de la N până la 1.

Funcția primește un număr **n** și imprimă numerele de la **n** până la 1.

# Exemplu

| **Input** | **Output** |
| --- | --- |
| numbersFromNto1(5) | 5, 4, 3, 2, 1 |


[/task-description]
[tests]
[test]
[input]
numbersFromNto1(5)
[/input]
[output]
5, 4, 3, 2, 1
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
# Problem with Solution: Numbers from 1 to N with Step 3

[vimeo-video]
[stream language="EN" videoId="488090074/f832efa21d" default /]
[stream language="RO" videoId="488090074/f832efa21d"  /]
[/video-vimeo]

[code-task title="Numbers from 1 to N with Step 3" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersFrom1ton(n) {
  // Scrieți codul dvs. aici;
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
Creați un program pentru a imprima numerele de la 1 la **n** cu pasul 3:

*Primește un număr **n**

*Tipărește numerele de la 1 la **n** cu pasul 3

# Exemplu
| **Input** | **Output** |
| --- | --- |
| numbersFrom1ton(7) | 1, 4, 7 |
| numbersFrom1ton(10) | 1, 4, 7, 10 |

[/task-description]
[tests]
[test]
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
# Problem with Solution: Even Powers of 2

[vimeo-video]
[stream language="EN" videoId="488090120/198b6ba65a" default /]
[stream language="RO" videoId="488090120/198b6ba65a"  /]
[/video-vimeo]

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
Creați un program pentru a imprima puterile pare cu 2:

* Primește un număr **n**

* Tipărește puterile uniforme de la 2 până la **2n**:

# Exemplu

| **Input** | **Output** |
| --- | --- |
| evenPowersOfTwo(5) | 1, 4, 16 |
| evenPowersOfTwo(10) | 1, 4, 16, 64, 256, 1024 |

[/task-description]
[tests]
[test]
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