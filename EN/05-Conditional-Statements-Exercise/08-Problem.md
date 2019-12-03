[slide]
# Problem: Pipes In Pool
[code-task title="Pipes In Pool" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

A pool with **volume V** has **two pipes** that fill it. **Every pipe has certain flow** (liters water that going through a single pipe per hour). The worker turns on the pipes **at the same time** and goes out for **N hours**. Write a program that shows the condition of the pool **at the moment the worker comes back**.

# Input

**Four** lines of input:

- **V** - **The volume of the pool in liters** - integer in range \[1…10000\]
- **P1** - **flow of the first pipe per hour** - integer in range \[1…5000\]
- **P2** - **flow of the second pipe per hour** - integer in range \[1…5000\]
- **H** - **hours the worker is missing** - float-pointing number in range \[1.0…24.00\]

# Output

Print on the console **one of both possibilities**:

- How far the pool has been filledand which pipe how much contributed in percentage
  - "The pool is \{occupancy of the pool in percent\}% full. Pipe 1: \{percent water from the first pipe\}%. Pipe 2: \{percent water from the second pipe\}%."
- If the pool is overflowing – how many liters are overflowed for the given time
  - "For \{hours pipes are filling the pool\} hours the pool overflows with \{liters water overflow\} liters."

# Example
## Input

Volume - 1000

Flow of first pipe - 100

Flow of second pipe - 120

Hours - 3

## Output

The pool is 66.00% full. Pipe 1: 45.45%. Pipe 2: 54.55%.

## Comments

For 3 hours: The first pipe fills up 300 liters

The second pipe fills up 360 liters

In total – 660 l < 1000 l => 66% are filled up

The first pipe is contributed with 45% (300 of 660 liters).

The second pipe is contributed with 54% (360 of 660 liters).


## Input

Volume - 100

Flow of first pipe - 100

Flow of second pipe - 100

Hours - 2.5

## Output

For 2.50 hours the pool overflows with 400.00 liters. 

## Comments

For 2.5 hours: The first pipe fills up 250 l 

The second pipe fills up 250 l

In total – 500 l > 100 l => 400 l are overflowed.
[/task-description]
[tests]
[test]
[input]
1000
100
120
3
[/input]
[output]
The pool is 66.00% full. Pipe 1: 45.45%. Pipe 2: 54.55%.
[/output]
[/test]
[test]
[input]
100
100
100
2.5
[/input]
[output]
For 2.50 hours the pool overflows with 400.00 liters.
[/output]
[/test]
[test]
[input]
12345
123
123
10
[/input]
[output]
The pool is 19.93% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
8685
3
3
100
[/input]
[output]
The pool is 6.91% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
3942
12
32
5
[/input]
[output]
The pool is 5.58% full. Pipe 1: 27.27%. Pipe 2: 72.73%.
[/output]
[/test]
[test]
[input]
929
123
321
12
[/input]
[output]
For 12.00 hours the pool overflows with 4399.00 liters.
[/output]
[/test]
[test]
[input]
10000
5000
5000
24
[/input]
[output]
For 24.00 hours the pool overflows with 230000.00 liters.
[/output]
[/test]
[test]
[input]
2000
100
120
5.4
[/input]
[output]
The pool is 59.40% full. Pipe 1: 45.45%. Pipe 2: 54.55%.
[/output]
[/test]
[test]
[input]
1258
321
333
7.7
[/input]
[output]
For 7.70 hours the pool overflows with 3777.80 liters.
[/output]
[/test]
[test]
[input]
5946
1000
1
5
[/input]
[output]
The pool is 84.17% full. Pipe 1: 99.90%. Pipe 2: 0.10%.
[/output]
[/test]
[test]
[input]
7869
1
12
23.99
[/input]
[output]
The pool is 3.96% full. Pipe 1: 7.69%. Pipe 2: 92.31%.
[/output]
[/test]
[test]
[input]
2
2
1
1
[/input]
[output]
For 1.00 hours the pool overflows with 1.00 liters.
[/output]
[/test]
[test]
[input]
2
1
1
0.5
[/input]
[output]
The pool is 50.00% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
2222
1111
1111
1
[/input]
[output]
The pool is 100.00% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
4501
12
10
21.93
[/input]
[output]
The pool is 10.72% full. Pipe 1: 54.55%. Pipe 2: 45.45%.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]