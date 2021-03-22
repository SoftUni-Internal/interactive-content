# Currying and Partial Application

[slide hideTitle]

# Currying

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-13-15-currying-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We use **currying** to evaluate a function with **multiple arguments**, into a **sequence** of functions with a **single argument**.

```js live
function sumOfThreeNums(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}
console.log(sumOfThreeNums(5)(6)(8));
```

Some example uses of **currying** include:

- **Template functions**

- **Code reuse**

- **Partial implementation**

- **Retaining scope**

[/slide]

[slide hideTitle]
# Partial Application

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-16-partial-application-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Reducing** the number of function **parameters** by converting it to a **new function with fewer parameters**, is called **Partial Application**.

Take a look at this example:

```js live 
function add(a, b) {
    return a + b;
}

function partial(func, a) {
    return (b) => func(a, b);
}

const newAdd = partial(add, 2);
console.log(newAdd(5));
```

The original `add()` function takes in two parameters.

The `partial()` function takes in a **function** and **an additional parameter**. 

After that, it **creates and returns a new function** that takes **another argument**, and **appends** it to the argument that were **already passed in**.

The resulting function takes in **one**, instead of **two** parameters.

[/slide]

[slide hideTitle]
# Currying vs. Partial Application

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-17-currying-vs-partial-application-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The main differences between **currying** and **partial application** are:

- **Currying** is the process of turning a function with **multiple arguments** into a **chain of single-argument functions**

- To **partially apply** means to pass **fewer arguments to a function than it has in its declaration**

Currying is **not** the same as partial application.

However, currying **can be implemented** by using partial application.

[/slide]
