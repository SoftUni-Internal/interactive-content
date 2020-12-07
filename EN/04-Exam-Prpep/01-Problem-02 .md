[slide]
# Problem 2: Fancy Barcodes
## Description
Your task is to determine if the given sequence of characters is a valid barcode or not.

Each line must not contain anything else but a valid barcode. A barcode is valid when:

* Is surrounded with a `@` followed by one or more `#`

* Is at least **6 characters long** (without the surrounding `@` or `#`)

* Starts with a capital letter

* Contains **only letters** (lower and upper case) and digits

* Ends with a **capital letter**

**Examples of valid barcodes:** `@#FreshFisH@#, @###Brea0D@###, @##Che46sE@##`

Examples of **invalid** barcodes: `##InvaliDiteM##, @InvalidIteM@, @#Invalid_IteM@#`

Next you have to determine the product group of the item from the barcode. The product group is obtained by concatenating all the digits found in the barcode. 

If there are no digits present in the barcode, the default product group is `00`.

**Examples:** 

`@#FreshFisH@#` \-\> product group: 00

`@###Brea0D@###` \-\> product group: 0

`@##Che4s6E@##` \-\> product group: 46

## Input

* On the first line you will be given an integer `n` – the count of barcodes that you will be receiving next.

* On the next n lines, you will receive different strings.


## Output

For each barcode that you process, you need to print a message.

* If the barcode is invalid: `Invalid barcode`

* If the barcode is valid: `Product group: {product group}`

[code-task title="Mu Online" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Examples
**Input** 
`['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##']`

**Output**
Product group\: 00
Product group\: 0
Product group\: 46

 **Input** 
`['6', '@###Val1d1teM@###', '@#InvalidIteM@#', '##InvaliDiteM##', '@InvalidIteM@', '@#Invalid_IteM@#', '@#ValiditeM@#']`

**Output**
Product group\: 11
Product group\: 00
Invalid barcode
Invalid barcode
Invalid barcode
Product group\: 00

[/task-description]
[code-io /]
[tests]
[test]
[input]
1
\@\#invalid\@\#
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
1
\@\#\#Invalid\@\#\#
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
1
\@\#invalidBarcodE\@\#
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
1
\@\#ValiD\@\#
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
1
\@\#\#Xa013mlX\@\#\#
[/input]
[output]
Product group: 013
[/output]
[/test]
[test]
[input]
3
\@\#CucumberS\@\#
\@\#\#CarrotS\@\#\#
\@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#PotatoeS\@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
[/input]
[output]
Product group\: 00
Product group\: 00
Product group\: 00
[/output]
[/test]
[test]
[input]
3
\@\#P1n3Appl3S\@\#
\@\#\#\#X1x2x3x4x5x6x7x8x9x0X\@\#\#\#
\@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#Zzzz987zzz65zzz43zzz210zzZ\@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
[/input]
[output]
Product group\: 133
Product group\: 1234567890
Product group\: 9876543210
[/output]
[/test]
[test]
[input]
1
\@\#Test4et0O\@\#
[/input]
[output]
Product group\: 40
[/output]
[/test]
[test]
[input]
11
\@\#\#Aaa1A1aaA\@\#\#
\@\#Bbbbbb\@\#
\@\#Ccccc_ccccC\@\#
\@\#\#\#D2d3d4D\@\#\#\#
\@\#EfgfE\@\#
\@\#hhhhhhhH\@\#
\@\#IIIIIIIII\@\#
\@\#IIII11IIIII\@\#
\@\#\#JjjjjJ\@\#
\@KkkkkkK\@
\@\#\#Lmn83opq19RsTuV\@\#\#
[/input]
[output]
Product group\: 11
Invalid barcode
Invalid barcode
Product group\: 234
Invalid barcode
Invalid barcode
Product group\: 00
Product group\: 11
Product group\: 00
Invalid barcode
Product group\: 8319
[/output]
[/test]
[test]
[input]
7
\@\#Th1sIsTh3T0ughestT3sT\@\#
\@\#\#\#ItReallyISharD\@\#\#\#
\@\#\#ItT3stsTh3Wh0l3Match1nG\@\#\#
\@\#I\`llThrowSomeInvalidCodeS\@\#
\@\#\#\#AndSomeMorE\@\#\#
\@\#\#AndFinally\@\#\#
\@\#\#Th3R34lM0F0T3sT\@\#\#\#
[/input]
[output]
Product group\: 1303
Product group\: 00
Product group\: 33031
Invalid barcode
Product group\: 00
Invalid barcode
Product group\: 334003
[/output]
[/test]
[test]
[input]
3
\@\#FreshFisH\@\#
\@\#\#\#Brea0D\@\#\#\#
\@\#\#Che46sE\@\#\#
[/input]
[output]
Product group\: 00
Product group\: 0
Product group\: 46
[/output]
[/test]
[test]
[input]
6
\@\#\#\#Val1d1teM\@\#\#\#
\@\#InvalidIteM\@\#
\#\#InvaliDiteM\#\#
\@InvalidIteM\@
\@\#Invalid\_IteM\@\#
\@\#ValiditeM\@\#
[/input]
[output]
Product group\: 11
Product group\: 00
Invalid barcode
Invalid barcode
Invalid barcode
Product group\: 00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
