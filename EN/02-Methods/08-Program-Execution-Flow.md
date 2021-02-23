# Program Execution Flow

[slide hideTitle]

# Program Execution

The program flow in Java is controlled via a part of the memory called **the call stack**. 

The stack is used for keeping track of what methods were called and the points of the program at which they were called.

As soon as a method finishes its execution, the program flow resumes from the place in the code from which it was invoked.

Let us see this in action.

```java
public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String city = sc.nextLine();

        printWeather(city);

        System.out.println("Check the weather in another location?");

        String choice = sc.nextLine();

        if (choice.equals("yes")) {
            // Do something
        }
        //Do something else

    }

    public static void printWeather(String city) {
        System.out.println(String.format("The weather in %s is:", city));
        System.out.println("Cloudy with a 53% chance of rain!");
    }

}
```

We are using the Scanner class to accept user input through the console.

First, we read the name of the city and immediately call the `printWeather()` method, passing the string as a parameter to it.

The program then skips down several lines to where the `printWeather(String city)` method declaration is found.

It then executes all the code in the method.

Finally, it will return to where the method was called and continue after it by printing a question and prompting the user for a choice of yes or no.




[/slide]

[slide hideTitle]

# The Call Stack

The stack contains **stack frames** for each method call. These stack frames store information on:

- Any arguments passed into the method
- Local variables
- The address to which to return after a method finishes executing



[/slide]