# Revision

[slide]
# Video

[vimeo-video startTimeInSeconds="984" endTimeInSeconds="1500"]
[stream language="EN" videoId="345185854" /]
[stream language="RO" videoId="393622973" default /]
[/vimeo-video]

[/slide]

[slide]
# Revision
A while loop is used to repeat a block of code when we don't know the count of iterations

```py lvie
n = int(input())
while n % 2 != 0:
  n = int(input())
print(n)
```

# Break Operator
Used for prematurely **exiting** the loop

Can only be executed from the loop's **body**

When it is executed, the code inside the loop's body after it **is skipped** and does not execute

# Infinite While Loop
```py live
number = 1
command = "Add"
while command != "END"
  print(number)
# Always evaluated to True
```

```py live
while True:
  print('Hello world!')
 ```
[/slide]