# Variable Scope

[slide]
# Video

[vimeo-video startTimeInSeconds="4005" endTimeInSeconds="4209"]
[stream language="EN" videoId="341539841/456a08950e" default /]
[stream language="RO" videoId="387657941/b7f1ede8f0"  /]
[/vimeo-video]

[/slide]

[slide]
# Variable Scope
Each variable has a range in which it exists, called **variable scope**. 

This range specifies where a variable can be used and how long is its **lifetime**. 

In the Java language, the scope in which a variable exists, starts from the line in which we **defined it** and ends with the first closing curly bracket `}` (of the method, the **if statement**, etc.).

Thus, it is important to know that **any variable defined inside the body of certain** `if` **statement will not be available outside of it**, unless we have defined it higher in the code.

# Variable Scope – Example
In the example below, on the last line we are trying to print the variable `salary` that is defined in the `if` statement, we will get an **error** because we don't have access to it.

```java
int myMoney = 500;
int payDayDate = 10;
if (todayDate >= payDayDate) {
    int salary = 5000;
    myMoney = myMoney + salary;
}
System.out.println(myMoney); 
System.out.println(salary); //Error
```

The above code **will not compile**, because we are trying to access a variable **out of its scope**.
[/slide]