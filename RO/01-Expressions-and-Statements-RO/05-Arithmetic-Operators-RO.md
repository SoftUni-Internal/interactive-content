
[slide]
# Operatorii aritmetici

[vimeo-video]
[stream language="EN" videoId="486856657/5524b19304" default /]
[stream language="RO" videoId="486856657/5524b19304"  /]
[/video-vimeo]

Haideți să examinăm **operațiile aritmetice** de bază în pragramare. 

Putem aduna,scădea, înmulți și împărți, folosind operatorii `+`, `-`, `*` și `/`.

## Adunarea numerelor
Putem **aduna** numere, utilizând operatorul  `+`:
```js live
let a = 5;
let b = 7;
let sum = a + b;
console.log(sum);
```

## Scăderea numerelor
**Scăderea** numereleor se efectuează prin utilizarea operatorului `-`:
```js live
let a = 15;
let b = 7;
console.log(a - b);
```

[/slide]

[slide]
# Înmulțirea numerelor

[vimeo-video]
[stream language="EN" videoId="486856776/0a071915ba" default /]
[stream language="RO" videoId="486856776/0a071915ba"  /]
[/video-vimeo]

Pentru **înmulțirea** nuemrelor folosim operatorul `*`:
```js live
let a = 5;
let b = 7;
console.log(a * b);
```

## Împărțirea numerleor
**Împărțirea** numerelor se efectuează prin utilizarea operatorului `/`.

Tipul numerelor reprezintă **atât** numerele întregi  (integer), cât și cele în virgulă mobilă (floating point number). Nu este  **împărțire întreagă implicită**.
* If you do this: 
```js live
let result = 5/4;
console.log(result);
```
rezultatul așteptat este 1, dar răspunsul este 1.25.

Împărțirea întreagă poate fi atinsă foarte ușor prin rotunjirea în jos a rezultatului împărțirii, utilizând `Math.floor()`:
```js live
let result = Math.floor(5/4);
console.log(result);
```
Aceasta însă duce la o problemă. Ce se întâmplă, dacă avem o astfel de situație: 
```js live
let result = Math.floor(-5/4);
console.log(result);
```
În acest caz rezultatul este negativ. 
* Răspunsul așteptat este -1, dar veți obține -2, în schimb.
* Rotunjirea în jos funcționează în sensul opus pentru numerele negative. O instrucțiune if poate poate repara aceasta problemă:
```js live
let result = -5/4;
if(result >=0){
  result = Math.floor(result);
}else{
  result = Math.ceil(result);
}
console.log(result);
```
Atunci când trebuie să împărțim un număr la zero, avem două situații principale:
```js live
let result = 0/0;
console.log(result);
```
```js live
let result = 1/0;
console.log(result);
```

Iata și câteva exemple cu operatorul de împărțire:
```js live
let a = -5;
let i = a / 0;
console.log(i);
let f = a / 4.0;
console.log(f);
```
[/slide]

[slide]
# Aminitire

[vimeo-video]
[stream language="EN" videoId="486856887/86a313dc61" default /]
[stream language="RO" videoId="486856887/86a313dc61"  /]
[/video-vimeo]

Operatorul pentru restul împărțirii `%` calculează restul de împărțire a operandului din stânga cu operandul din dreapta.
```js live
let a = 7;
let b = 2;
console.log(a % b);
console.log(3.5 % 1);
```
Acesta este folositor în cazul în care dorim să verificăm dacă un număr e  **par** sau **impar**.

Dacă restul la împrțirea la 2 e egal cu 0, atunci numărul este par, altfel numărul e impar. 

Să vedem următorul exemplu: 
```js live
console.log(3 % 2);
console.log(4 % 2);
```
[/slide]