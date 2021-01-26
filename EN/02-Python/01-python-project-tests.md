[slide]
# python-project-tests

[code-task title="Yard Greening" taskId="pb-python-statements-Yard-Greening" executionType="tests-execution" executionStrategy="python-project-tests" requiresInput]
[code-upload /]

[task-description]
## Description

... 
[/task-description]
[tests]
[test open]
[input]
from project.card.card_repository import CardRepository
import unittest

class TestStructure(unittest.TestCase):
    def test_card_repository_structure(self):
        cr = CardRepository()
        self.assertTrue("add" in dir(cr))
        self.assertTrue("remove" in dir(cr))
        self.assertTrue("find" in dir(cr))   

if __name__ == "__main__":
    unittest.main()
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
from project.card.card_repository import CardRepository
import unittest

class TestStructure(unittest.TestCase):
    def test_card_repository_structure(self):
        cr = CardRepository()
        self.assertTrue("add" in dir(cr))
        self.assertTrue("remove" in dir(cr))
        self.assertTrue("find" in dir(cr))

if __name__ == "__main__":
    unittest.main()
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

