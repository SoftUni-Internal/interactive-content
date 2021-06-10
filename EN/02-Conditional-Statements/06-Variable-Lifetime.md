[slide hideTitle]

# Variable Scope

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-30-31-variable-scope-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Each variable has a range in which it exists, called **variable scope**. 

This range specifies where a variable can be used and how long its **lifetime** is. 

In Java, the scope in which a variable exists, starts from the line where we **define it** and ends with the first closing curly bracket `}` (of the method, the **if statement**, etc.).

Therefore, it is important to know that **any variable defined inside the body of an** `if` **statement will not be available outside of it** unless we have defined it beforehand in the code.
[/slide]

[slide hideTitle]

# Example: Variable Lifetime

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-30-31-variable-scope-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In the example below, trying to print out the variable `salary` that is defined inside the `if` statement, this will result in an **error** because we do not have access to it.

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

This code **will not compile**, because we are trying to access a variable **out of its scope**.
[/slide]
