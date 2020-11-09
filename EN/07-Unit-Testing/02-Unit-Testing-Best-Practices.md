[slide]

# Unit-Testing best practices

Here, we will take a look at some good practices in Unit Testing.

`assertEquals(expected, actual)` method gives us better description details when we are working with values than `assertTrue()` method.

For example:

When we use `assertTrue()` method here, we can less descriptive output:

``` java
Assert.assertTrue(account.getBalance() == 50);
```

Output: 

```
java.lang.AssertionError <3 internal calls>
```

If we use `assertEquals()` method, we will obtain more information:

``` java
Assert.assertEquals(50, account.getBalance());
```

Output: 

```
java.lang.AssertionError:
Expected :50
Actual :35
<Click to see difference>
```


[/slide]

[slide]

# Magic Numbers

[/slide]