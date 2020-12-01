# Sample Problems
[slide]
# Video

[vimeo-video startTimeInSeconds="2124" endTimeInSeconds="5147"]
[stream language="EN" videoId="431381828" default /]
[stream language="RO" videoId="431385564" /]
[/video-vimeo]

[/slide]
[slide]
# Logical Thinking Problems

## Nine Dots

[image assetsSrc="9-dots-problem1.png" /]

**Problem Desctiption**

Connect **all** the nine dots, using only **4 lines**, without taking the **pencil off the paper**.

## Five Gallons

[image assetsSrc="water-problem1.png" /]

**Problem Description**

You are mixing cement and the recipe calls for **5 gallons** of water.

You have an **unlimited** amount of water (a garden hose).

The problem is that you only have a **4-gallon bucket** and a **7-gallon bucket**.

Find a method to measure **5 gallons**.

## 10 Piles Gold and Counterfeit Coins

[image assetsSrc="GoldCouns1.png" /]

**Problem Description**

You have 10 stacks of 10 gold coins.

All the coins in one of these stacks are **counterfeit**, all the other coins are **not**.

A real coin weighs **10 grams**.

A counterfeit coin weighs **11 grams**.

You can use an extremely accurate digital weighing scale **only once**.

How do you determine **which set** of 10 coins is faulty?
[/slide]

[slide]
# Solutions

## Nine Dots solution
[image assetsSrc="9-dots-problem-solution1.png" /]

Start from the top right dot, draw a line to the top-left dot, then draw a diagonal line, then go all the way up and the finale line is diagonal.

## Five Gallons

1. Fill the 4-gallon bucket.
2. Empty the 4-gallon bucket into the 7-gallon bucket.
3. Fill the 4-gallon bucket.
4. Pour the 3 gallons from the 4-gallon bucket into the 7-gallon bucket.
5. Empty the 7-gallon bucket.
6. Pour the 1 gallon from the 4-gallon bucket into the 7-gallon bucket.
7. Fill the 4-gallon bucket.
8. Empty the 4-gallon bucket into the 7-gallon bucket.

## 10 Piles Gold and Counterfeit Coins

We **take 1 coin** from pile \#1, **2 coins from pile** \#2, **3 coins from pile** \#3 and so on, up to **10 coins from pile** \#10

Total 55 coins: if real weight = 550 g.

However, some will be counterfeit.

We weigh **all the coins together** using the scale.

It reads, for example, 553 g.

The **difference** is: 553 – 550 = 3 g.

We have 3 counterfeit coins.

These **are the coins from the pile** \#3.

Conclusion: Pile #3 is counterfeit.

[/slide]

[slide]
# Tech Problem: Largest Palindrome Sub-List

We are given a list of letters

We want to find the longest sub-list, which is a palindrome (reads the same backward as forward)

[image assetsSrc="palindrom-pick.png" /]

**Define the problem**:
- goal among all sub-lists of the input list, find which are palindromes and which is the longest among them.

**Analyse the problem**:
- we can have 2 type of palindromes: **odd-length** and **even-length**.

**Identify potential solutions**: 
- find all possible start and end positions and check for palindrome,
- find all possible single central points and double central points and check for palindrome around them.

**Evaluate and choose a solution**:
- the second approach will be faster.

**Plan actions (algorithm)**:
-choose each letter as a central point and count how many letters around it form a palindrome,
- choose each two consecutive equal letters as the central point and count how many letters around it form a palindrome,
- choose the longest among all palindromes found.

**Implement**: 
- write the code to implement the above idea.

**Review the results**:
- can we do it better?
- does it work for all the cases?
- edge cases?

# Largest Palindrome Sub-List: Solutions

1. Solution Find all possible start + end positions and check for palindrome.

2. Solution Find all possible single central points and double central points and check for palindrome around them.

3. Solution Find all sub-lists of size n (the length of the input list), then of size n-1, n-2, …, 1 and check for palindrome each sub-list

Can we find the length of the longest palindrome without checking all palindromes in the list? 
-  Yes, solution 3.

Which is the most efficient solution?
- solution 2.

# Largest Palindrome Sub-List: Implementation

```
string letters = Console.ReadLine();
int maxLen = 0;

// Check all single letter central points
for (var c = 0; c < letters.Length; c++)
  maxLen = Math.Max(maxLen, CalcPalindromeSize(c, c));

// Check all double letter central points
for (var c = 0; c < letters.Length-1; c++)
  maxLen = Math.Max(maxLen, CalcPalindromeSize(c, c+1));
Console.WriteLine(maxLen);

int CalcPalindromeSize(int leftIndex, int rightIndex)
{
  while (leftIndex >= 0 && rightIndex < letters.Length
      && letters[leftIndex] == letters[rightIndex])
  {
    leftIndex--;
    rightIndex++;
  }
  return rightIndex - leftIndex - 1;
}
```

# Largest Palindrome Sub-List: Review

**Review** the results:
- Does this solution work well for all cases?
- Any edge cases?

**Tests**, covering the edge cases:
- abc, abcd, ab, a -\> 1
- aa, aa0, 0aa, 0aa1, aabb -\> 2
- aaa, aaa0, 0aaa, 0aaa1, 00aaa11 -\> 3

Can we solve this problem better?
[/slide]