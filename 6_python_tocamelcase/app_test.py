import unittest
from app import to_camel_case

class TestToCamelCase(unittest.TestCase):

    def test_empty_string(self):
        self.assertEqual(to_camel_case(""), "", "An empty string was provided but not returned")

    def test_underscore_case(self):
        self.assertEqual(to_camel_case("the_stealth_warrior"), "theStealthWarrior", "to_camel_case('the_stealth_warrior') did not return correct value")

    def test_dash_case(self):
        self.assertEqual(to_camel_case("The-Stealth-Warrior"), "TheStealthWarrior", "to_camel_case('The-Stealth-Warrior') did not return correct value")

    def test_mixed_case(self):
        self.assertEqual(to_camel_case("A-B-C"), "ABC", "to_camel_case('A-B-C') did not return correct value")

if __name__ == '__main__':
    unittest.main()
