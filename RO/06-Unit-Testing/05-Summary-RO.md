[slide hideTitle]

# Rezumat
[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-51-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Testarea unitară ne ajută să construim un cod bun

- Folosim modelul "AAA" pentru a structura testele noastre unitare

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

- Trebuie să folosim nume sugestive pentru testele noastre

**Următoarele nume nu sunt adecvate:**
```
increaseDMG {}
test1() {}
testTransfer()
idontrememberwhatiamtesting {}
```

**Acesta este un exemplu de denumire corectă:**
```
depositAddsMoneyToBalance() {}
depositNegativeShouldNotAddMoney() {}
transferSubtractsFromSourceAddsToDestAccount() {}
```

- Injecția de dependență realizează decuplarea și îmbunătățește design-ul 
- Diferențe dintre implementarea falsă și obiectele de tip mock

## În următoarea lecție veți învăța:

- Conceptul dezvoltării bazate pe testare

[/slide]
