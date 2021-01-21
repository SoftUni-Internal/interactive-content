[slide]
# Problem: Construction Crew
[code-task title="Problem: Construction Crew" taskId="js-advanced-Object-Composition-Construction-Crew" executionType="tests-execution" executionStrategy="" requiresInput]
[code-editor language=javascript]
```
function  solve(input) {
    if (input.dizziness === true) {
        input.levelOfHydrated += input.weight * 0.1 * input.experience;
        input.dizziness = false;
    }
    return input;
}
```
[/code-editor]
[task-description]
# Description

Write a program that receives a worker object as a parameter and modifies its properties. 

Workers have the following structure:

`{ weight: Number,
  experience: Number,
  levelOfHydrated: Number,
  dizziness: Boolean }`

Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. 

If you receive a worker who\’s dizziness property is set to **true** it means he needs to intake some water in order to be able to work correctly. 

The required amount is 0\.1ml per kilogram per year of experience. 

The required amount must be added to the existing amount. 

Once the water is administered, change the dizziness property to **false**.

Workers who do not have dizziness should not be modified in any way. Return them as they are.


# Example 1
**Input**

`{ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }`

**Output**

`{ weight: 80,
  experience: 1,
  levelOfHydrated: 8,
  dizziness: false }`

# Example 2
**Input**

`{ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }`

**Output**

`{ weight: 120,
  experience: 20,
  levelOfHydrated: 440,
  dizziness: false }`

# Example 3
**Input**

`{ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }`

**Output**

`{ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }`

[/task-description]
[code-io /]
[tests]
[test]
[input]
let worker = result(\{ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true \}
);

expect(worker.weight).to.equal(80, "Worker weight was modified.");
expect(worker.experience).to.equal(1, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(8, "Worker wasn't given enough water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let worker = result(\{ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true \}
);

expect(worker.weight).to.equal(120, "Worker weight was modified.");
expect(worker.experience).to.equal(20, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(440, "Worker wasn't given enough water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let worker = result(\{ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false \}
);

expect(worker.weight).to.equal(95, "Worker weight was modified.");
expect(worker.experience).to.equal(3, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(0, "Worker was given water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let worker = result(\{ weight: 60,
    experience: 5,
    levelOfHydrated: 600,
    dizziness: false \}
);

expect(worker.weight).to.equal(60, "Worker weight was modified.");
expect(worker.experience).to.equal(5, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(600, "Worker was given water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]