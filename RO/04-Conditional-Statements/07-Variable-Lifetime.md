[slide]
# Variable Lifetime
Each variable has a range in which it exists, called **variable scope**. 

This range specifies where a variable can be used and how long is its **lifetime**. 

In the Python language, the scope in which a variable exists, starts from the line in which we **defined it** until the end of the code block (of the method, the **if statement**, etc.).

Thus, it is important to know that **any variable defined inside the body of certain** `if` **statement will not be available outside of it**, unless we have defined it higher in the code.

# Variable Scope – Example
In the example below, on the last line we are trying to print the variable `salary` that is defined in the `if` statement and if the program hasn't gone into the **if**, we will get an **error** because we don't have access to it.

```py
my_money = 500
pay_day_date = 10
if today_date >= pay_day_date:
    salary = 5000
    my_money = my_money + salary
print(my_money) 
print(salary) # Error
```

The above code **will not work**, because we are trying to access a variable **out of its scope**.
[/slide]

[slide]
# Video

[vimeo-video videoId="341553633" startTimeInSeconds="3905" endTimeInSeconds="4025" /]

[/slide]