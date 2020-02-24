# Summary

[slide]
# Video

[vimeo-video startTimeInSeconds="9031" endTimeInSeconds="9069"]
[stream language="EN" videoId="341553633"  /]
[stream language="RO" videoId="387288483" default /]
[/vimeo-video]

[/slide]

[slide]
# Summary

Numbers can be compared by the `==,` `<`, `>`, `<=`, `>=` and `!=` operators:
```py live
print(5 <= 10) 
```

Simple **if-conditions** check a condition and execute a code block if it is `True`:
```py live
a = int(input())

if a > 5:
    print("The number a is bigger than 5")
```

The **if-else** construction executes one of two blocks depending on whether a condition is `True` or `False`:
```py live
a = int(input())

if a > 5:
    print("The number `a` is bigger than 5")
else:
    print("The number `a` is smaller or equal than 5")
```

If-else constructions can be chained as **if-elif-else sequences**:
```py live
a = int(input())

if a > 100:
    print("The number `a` is bigger than 100")
elif a > 20:
    print("The number `a` is bigger than 20")
else:
    print("The number `a` is smaller or equal than 20")
```
[/slide]