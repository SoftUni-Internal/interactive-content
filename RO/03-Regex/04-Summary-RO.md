[slide hideTitle]
# Summary

# In this lesson you learned:

- A regular expression is a sequence of characters that forms a search pattern

`[A-Z][a-z]+ [A-Z][a-z]+ // Matches "Ben Williams"`

- We define special characters, operators and constructs for building complex patterns

`[abc]+ // Matches any character that is either "a", "b", or "c"`

- We can utilize character classes, groups, quantifiers and more

```js live
let str = 'Hellooo World! Hello Again!';
let pattern = /lo*/g;
let result = str.match(pattern);
console.log(result);
```

## In the next lesson, you will learn:

- How to solve a practical exam
[/slide]
