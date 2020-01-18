[slide]
# Sequence of If-Else Conditions
Sometimes we need to do a sequence of conditions before we decide what actions our program will execute. 

In such cases, we can apply the construction `if-elif ... -else` **in series**.

For this purpose, we use the following format:
```py
if condition:
  # condition body
elif second condition:
  # condition body
elif third condition:
  # condition body
…
else
  # else construction body
```
[/slide]

[slide]
# Example: Digits in English
Print the digits in the range of 1 to 9 (digits are read from the console) in English. 

We can read the digit and then, through a **sequence of conditions** we print the relevant English word:
```py live
num = int(input())

if num == 1:
    print("one")
elif num == 2:
    print("two")
elif num == 3:
    print("three")
elif num == 4:
    print("four")
elif num == 5:
    print("five")
elif num == 6:
    print("six")
elif num == 7:
    print("seven")
elif num == 8:
    print("eight")
elif num == 9:
    print("nine")
else:
    print("number too big")
```

The program logic from the above example **sequentially compares** the input number from the console with the digits from 1 to 9, when **each following comparison is being performed only in case the previous comparison is not true**. 

Eventually, if none of the `if` statements are true, the last `else` **clause** is performed.
[/slide]

[slide]
# Video

[vimeo-video videoId="341553633" startTimeInSeconds="3225" endTimeInSeconds="4025" /]

[/slide]
