# ============================================
# POLYMORPHISM - Shape Class Example
# ============================================
# Same method name, different behavior in different classes
# area() works differently for Rectangle, Triangle, and Square
# ============================================

class Shape:
    # Parent class - common properties and methods for all shapes
    def __init__(self, shape_name):
        self._shape_name = shape_name  # Private attribute

    # GETTER - reads the shape name
    @property
    def shape_name(self):
        return self._shape_name

    # SETTER - updates the shape name
    @shape_name.setter
    def shape_name(self, value):
        self._shape_name = value

    # Describes the shape
    def describe(self):
        print(f"This is a {self.shape_name}")

    # Displays all shape information
    def display_info(self):
        print("")
        print(f"Shape: {self.shape_name}")
        print(f"Area: {self.area()}")
        print(f"Perimeter: {self.perimeter()}")
        print("")

    # Default area method - will be overridden by child classes
    def area(self):
        print(f"For shape {self.shape_name} area calculation missing")
        return None

    # Default perimeter method - will be overridden by child classes
    def perimeter(self):
        print(f"For shape {self.shape_name} perimeter calculation missing")
        return None


# ============================================
# RECTANGLE - Inherits from Shape
# ============================================
class Rectangle(Shape):
    def __init__(self, length, width):
        super().__init__(shape_name="Rectangle")  # Call parent constructor
        self.length = length
        self.width = width

    # POLYMORPHISM: area() for Rectangle = length × width
    def area(self):
        return self.length * self.width

    # POLYMORPHISM: perimeter() for Rectangle = 2 × (length + width)
    def perimeter(self):
        return 2 * (self.length + self.width)


# ============================================
# TRIANGLE - Inherits from Shape
# ============================================
class Triangle(Shape):
    def __init__(self, base, height):
        super().__init__(shape_name="Triangle")
        self.base = base
        self.height = height

    # POLYMORPHISM: area() for Triangle = 0.5 × base × height
    def area(self):
        return 0.5 * self.base * self.height

    # POLYMORPHISM: perimeter() for Triangle = 3 × base
    def perimeter(self):
        return 3 * self.base


# ============================================
# SQUARE - Inherits from Rectangle
# ============================================
class Square(Rectangle):
    def __init__(self, side):
        super().__init__(length=side, width=side)  # Square is a Rectangle with equal sides
        self._shape_name = "Square"  # Override shape name


# ============================================
# TESTING POLYMORPHISM
# ============================================
print("="*50)
print("POLYMORPHISM DEMONSTRATION")
print("="*50)

# Create different shapes
s1 = Square(side=35)
r1 = Rectangle(length=20, width=12)
t1 = Triangle(base=20, height=30)

# Test each shape
print("\n--- SQUARE ---")
print("Shape name:", s1.shape_name)
print("Area is:", s1.area())  # 35 × 35 = 1225
s1.describe()
s1.display_info()

print("\n--- RECTANGLE ---")
print("Shape name:", r1.shape_name)
print("Area is:", r1.area())  # 20 × 12 = 240
r1.describe()
r1.display_info()

print("\n--- TRIANGLE ---")
print("Shape name:", t1.shape_name)
print("Area is:", t1.area())  # 0.5 × 20 × 30 = 300
t1.describe()
t1.display_info()


# ============================================
# POLYMORPHISM IN ACTION
# ============================================
# Same method (area()) behaves differently for each shape
# ============================================
print("\n" + "="*50)
print("POLYMORPHISM IN ACTION")
print("="*50)

shapes = [
    Rectangle(10, 5),   # area = 50
    Square(7),          # area = 49
    Triangle(10, 8),    # area = 40
    Rectangle(15, 3)    # area = 45
]

for shape in shapes:
    print(f"\n{shape.shape_name}:")
    print(f"  Area: {shape.area()}")        # Same method, different result
    print(f"  Perimeter: {shape.perimeter()}")  # Same method, different result