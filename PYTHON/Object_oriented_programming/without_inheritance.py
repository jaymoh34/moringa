# ============================================
# INHERITANCE
# ============================================
# Can extend a class using another class.
# -> a class inherits methods and properties of another class.
# -> DRY (Don't Repeat Yourself)
# ============================================

# --- Biology Classification ---

# ----- Shapes -----
# Rectangle and Square . <triangle>
#     --- shapes . <shape_name>
#     --- sides . <rectangle, square, trapezium> sidea, sideb, sidec
#     --- area.<>
#     --- methods. perimeter of the rectangle
# ============================================

class Rectangle:
    # Constructor - initializes rectangle with length and width
    def __init__(self, length, width):
        self.length = length      # Store length
        self.width = width        # Store width
        self.shape_name = "Rectangle"  # Shape name

    # Method to calculate area of rectangle
    def area(self):
        area = self.length * self.width  # Area = length × width
        print(f"For rectangle of length {self.length} and width {self.width} area: {area}")


class Square:
    # Constructor - initializes square with side
    def __init__(self, side):
        self.length = side        # Length equals side
        self.width = side         # Width equals side (same as length)
        self.shape_name = "Square"  # Shape name

    # Method to calculate area of square
    def area(self):
        area = self.length * self.width  # Area = side × side
        print(f"For square of length {self.length} and width {self.width} is area: {area}")


r1=Rectangle(length=20,width=10)
r1.area()

r1.shape_name

s1=Square(side=10)
s1.area()