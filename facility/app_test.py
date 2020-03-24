import unittest
import app

class app_test1(unittest.TestCase):
    def test_if_tests_are_working(self):
        self.assertEqual(True,True)

    def test_adding_a_city(self):
        app.api_add('Banff',88,99,77)
        self.assertEqual( {'Name': 'Banff', 'Population': 88, 'Longitude': 99, 'Latitude': 77, 'Counter': 1}, app.cities[4] )


if __name__ == '__main__':
    unittest.main() 