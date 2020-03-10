[slide]
# Problem 06
## Description
For Laura, the words possess great power. 

She's asking you to invent an algorithm to find out which is the "strongest" word. 

Until the command "End of words" you will be receiving words from the console. 

To determine the strength of each word, you need to find the sum of the ASCII values of the symbols that make up the word. 

If it starts with a vowel letter - 'a', 'e', ' i', 'o', 'u', 'y'(or their equivalent capital letters), the result must be multiplied by the length of the word, otherwise, divided by the length and rounded down to the nearest whole number.

## Input
Until the command "End of words" you will receive lines from the console:
- word – string 

## Output
Print the word with the "greatest" power:
- "The most powerful word is \{word with the "greatest" power\} - \{word's power\}" 


[code-task title="Problem-06" taskId="pb-june-pr-06" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Example
## Input
The

Most

Powerful

Word

Is

Experience

End of words

## Output
The most powerful word is Experience - 10320

## Comments
The first word is "The". 

The sum of its ASCII values is 84 + 104 + 101 = 289. 

The word does not begin with a vowel letter, so we divide the sum by the length of the word in this case 3. 289/3 = 96

We continue with the rest of the words.

The last word is "Experience". The amount of its ASCII values is 1032. 

The word begins with a vowel letter, so we multiply the points by the length of the word in this case 10.
1032 * 10 = 10320

We receive the command "End of words"

The most powerful word is "Experience"

[/task-description]
[tests]
[test]
[input]
Whats'up
Bitches
I'm
Back
End of words
[/input]
[output]
The most powerful word is I'm - 663
[/output]
[/test]
[test]
[input]
Are
you
K
Maaaan
End of words
[/input]
[output]
The most powerful word is you - 1047
[/output]
[/test]
[test]
[input]
yes
bitch
Pleaseeeee
Ahoy
End of words
[/input]
[output]
The most powerful word is Ahoy - 1604
[/output]
[/test]
[test]
[input]
Can
i
get
an
Ameeeeen
End of words
[/input]
[output]
The most powerful word is Ameeeeen - 6312
[/output]
[/test]
[test]
[input]
Pesho123
is
the
username
of
the
winner
End of words
[/input]
[output]
The most powerful word is username - 6912
[/output]
[/test]
[test]
[input]
Pesho
Gosho464 23
Emo.13.06.96
End of words
[/input]
[output]
The most powerful word is Emo.13.06.96 - 8880
[/output]
[/test]
[test]
[input]
oaieyu
boss
End of words
[/input]
[output]
The most powerful word is oaieyu - 3912
[/output]
[/test]
[test]
[input]
yes
hello
oreo
End of words
[/input]
[output]
The most powerful word is oreo - 1748
[/output]
[/test]
[/tests]
[/code-task]
[/slide]