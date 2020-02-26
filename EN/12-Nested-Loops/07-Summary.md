# Summary

[slide]
# Video

[vimeo-video startTimeInSeconds="11287" endTimeInSeconds="11339"]
[stream language="EN" videoId="345185854" default /]
[stream language="RO" videoId="393622973" /]
[/vimeo-video]

[/slide]

[slide]
# Summary

We can nest `for` loops in one another:
```py live
n = 5
for i in range(1, n + 1):
    for j in range(1, n + 1):
        for k in range(1, n + 1):
            print(f'{i}{j}{k}')
```

We can nest `while` loops in one another:
```py live
i = 0
n = 5
while i < n:
    print(f'Value of i: {i}')
    j = 1
    i += 1

  while j < n:
    print(f'  Value of j: {j}')
    j += 1
```
[/slide]