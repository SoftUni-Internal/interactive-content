# Program Execution Flow

[slide hideTitle]

# Program Execution

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-50-51-Program-Execution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The program flow in Java is controlled by a part of the memory called **the call stack**. 

The stack is used to keep track of what methods were called and the points of the program at which they were called.

As soon as a method finishes its execution, the program flow resumes from executing the code that follows it.

Let us see this in an example.

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

We use the `Scanner` class to accept user input through the console.

First, we read the name of the city and immediately call the `printWeather()` method, passing in this string as a parameter.

The program then skips down several lines to the `printWeather(String city)` method and executes the code inside it.

Finally, it returns to where the method was called and continues by printing out the question and prompting the user for their input.


[/slide]

[slide hideTitle]

# The Call Stack

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-52-Program-Execution-Call-stack-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The stack contains **stack frames** for each method call. These stack frames store information about:

- Any arguments passed in the method
- Local variables
- The address to which it has to return after the current method finishes executing



[/slide]
