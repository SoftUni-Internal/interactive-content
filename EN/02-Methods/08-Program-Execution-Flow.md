# Program Execution Flow

[slide hideTitle]

# Program Execution

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-52-Program-Execution-Call-stack-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The program flow in Java is controlled by a part of the memory called **the call stack**. 

The stack is used for keeping track of what methods were called and the points of the program at which they were called.

As soon as a method finishes its execution, the program flow resumes from the place in the code from, which it was invoked.

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

We are using the `Scanner` class to accept a user's input through the console.

First, we read the name of the city and immediately call the `printWeather()` method, passing the string as a parameter to it.

The program then skips down several lines to where the `printWeather(String city)` method is declarated and executes the code inside the method.

Finally, it will return to where the method was called and continue after it by printing a question and prompting the user for a choice of yes or no.


[/slide]

[slide hideTitle]

# The Call Stack

The stack contains **stack frames** for each method call. These stack frames store information on:

- Any arguments passed into the method
- Local variables
- The address to which to return after a method finishes executing



[/slide]
