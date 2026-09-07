# ============================================
# SHAPE CLASS (Parent/Base Class)
# properties and methods common to all shapes.
# ============================================

class Shape:
    def __init__(self, shape_name):
        self.shape_name = shape_name

    def describe(self):
        print(f"This is a {self.shape_name}")

    def display_info(self):
        print("\n" + "="*30)
        print(f"Shape: {self.shape_name}")
        print(f"Area: {self.area()}")
        print(f"Perimeter: {self.perimeter()}")
        print("="*30)


# ============================================
# RECTANGLE CLASS (Child Class)
# Inheritance: class Name (<class inheriting from>)
# ============================================

class Rectangle(Shape):
    def __init__(self, length, width):
        super().__init__(shape_name="Rectangle")
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)


# ============================================
# SQUARE CLASS (Child of Rectangle)
# ============================================
# Code for the square class
# Square inherits from Rectangle
# A square is a special rectangle where length = width
# ============================================

class Square(Rectangle):
    def __init__(self, side):
        # super -> its not shape its Rectangle
        # Calls Rectangle.__init__ with length=side and width=side
        super().__init__(length=side, width=side)
        # Override shape_name to "Square"
        self.shape_name = "Square"



# ===== Rectangle Test =====
print("="*40)
print("RECTANGLE TEST")
print("="*40)

r1 = Rectangle(length=20, width=12)
print("Shape name:", r1.shape_name)
print("Area is:", r1.area())
r1.describe()
r1.display_info()

# ===== Square Test =====
print("\n" + "="*40)
print("SQUARE TEST")
print("="*40)

s1 = Square(side=35)
print("Shape name:", s1.shape_name)  # shape name
print("Area is:", s1.area())
s1.describe()  # Shape.describe()
s1.display_info()  # Shape.display_info()