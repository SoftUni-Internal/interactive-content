[slide]
# Revision
Let's revise what we learned in the last lesson:
- Numbers can be **compared** by the `==`, `<`, `>`, `<=`, `>=` and `!=` operators:
```py live
print(5 <= 10)  # true
```

- Simple **if-conditions** check a condition and execute a code block if it is **true**:
```py live
a = 10
if a > 5:
    print("The number `a` is bigger than 5")
```

- The **if-else construction** executes one of two blocks depending on whether a condition is **true** or **false**:
```py live
a = 10
if a > 5:
    print("The number `a` is bigger than 5")
else:
    print("The number `a` is smaller or equal than 5")
```

- If-else constructions can be chained as **if-elif-else sequences**:
```py live
a = 10
if a > 100:
    print("The number `a` is bigger than 100")
elif a > 20:
    print("The number `a` is bigger than 20")
else:
    print("The number `a` is smaller or equal than 20")
```
[/slide]

[slide]
# Video

[vimeo-video videoId="341568008" startTimeInSeconds="970" endTimeInSeconds="1027" /]

[/slide]