[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-51-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Unit Testing helps us build solid code
- We use AAA pattern to structure our unit tests

```java
public class AxeTests{

  @Test
  public void weaponAttacksLosesDurability(){
    //Arrange
        Axe axe = new Axe(10, 10);
        Dummy dummy = new Dummy(10, 10);
    //Act
        axe.attack(dummy);
    //Assert
        Assert.assertEquals(9, age.getDurabilityPoints());
  }
}
```

- We need to use descriptive names for our tests

**Bad**
```
increaseDMG {}
test1() {}
testTransfer()
idontrememberwhatiamtesting {}
```
**Good**
```
depositAddsMoneyToBalance() {}
depositNegativeShouldNotAddMoney() {}
transferSubtractsFromSourceAddsToDestAccount() {}
```

- Looses coupling and improves design by using dependency injection
- Difference between fake implementation and mocking objects

## In the next lesson, you will learn:

- The concept of Test Driven Development

[/slide]
