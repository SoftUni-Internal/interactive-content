[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-51-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Unit testing helps us build solid code
- We use the AAA pattern to structure our unit tests

```java
public class AxeTests{

  @Test
  public void weaponAttacksLosesDurability(){
    // Arrange
        Axe axe = new Axe(10, 10);
        Dummy dummy = new Dummy(10, 10);
    // Act
        axe.attack(dummy);
    // Assert
        Assert.assertEquals(9, age.getDurabilityPoints());
  }
}
```

- We need to use descriptive names for our tests

**The following names are bad:**
```
increaseDMG {}
test1() {}
testTransfer()
idontrememberwhatiamtesting {}
```

**This is an example of good naming:**
```
depositAddsMoneyToBalance() {}
depositNegativeShouldNotAddMoney() {}
transferSubtractsFromSourceAddsToDestAccount() {}
```

- Dependency injection looses coupling and improves design 
- The difference between fake implementation and mocking objects

## In the next lesson you will learn:

- The concept of test-driven development

[/slide]
