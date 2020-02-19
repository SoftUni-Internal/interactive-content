# Summary

[slide]
# Video 
[vimeo-video startTimeInSeconds="9705" endTimeInSeconds="9822"]
[stream language="EN" videoId="343587107"  /]
[stream language="RO" videoId="392266139" default /]
[/vimeo-video]

[/slide]

[slide]
# Summary 
The `while` loop is repeated while a condition is `true`:

```py live
n = int(input())
num = 1
while num <= n:
    print(num)
    num = num + 1
```

If we have to interrupt the loop execution, we do it with the operator `break`:
```py live
n = 0
while True:
   n = int(input())
   if n % 2 == 0:
      break
   print('The number is not even.')

print(f'Even number entered: {n}')
```
[/slide]