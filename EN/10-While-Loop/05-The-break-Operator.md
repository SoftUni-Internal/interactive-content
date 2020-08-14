# The break Statement

[slide]
# Video

[vimeo-video startTimeInSeconds="2860" endTimeInSeconds="2967"]
[stream language="EN" videoId="343587107" default /]
[stream language="RO" videoId="392266139" /]
[/vimeo-video]

[/slide]

[slide]
# The break Statement
The `break` statement stops the execution of a loop at the time it is called and continues from the first line after the end of the loop.

This means that the current iteration of the loop will not be completed, accordingly, the rest of the code in the body of the loop will not be executed.

If you are using nested loops, this statement will stop the execution of the innermost loop and start executing the next line of code after the block.

This example breaks the loop when the input is an odd number:
```py live
while true:
  number = int(input())
  
  if number % 2 != 0:
    break
```
When it comes to using infinite loops intentionally, `break` will terminate the loop when a given condition is met.
[/slide]