"""
FUNCTIONS IN PYTHON - Made Simple
=================================
A function is like a machine: you give it input, it does work, and gives output.
"""

# ============================================
# 1. SIMPLE FUNCTION (Just does something)
# ============================================

def greet():
    """Prints a welcome message"""
    print("Hello, welcome to Python!")

# Call the function
greet()


# ============================================
# 2. FUNCTION WITH PARAMETERS (Takes input)
# ============================================

def greet_person(name):
    """Greets a person by name"""
    print(f"Hello, {name}!")

greet_person("John")
greet_person("Alice")


# ============================================
# 3. FUNCTION WITH RETURN (Gives output)
# ============================================

def add_numbers(a, b):
    """Adds two numbers and returns the result"""
    result = a + b
    return result

# Store the returned value
sum = add_numbers(5, 3)
print(f"5 + 3 = {sum}")

# Use returned value directly
print(f"10 + 20 = {add_numbers(10, 20)}")


# ============================================
# 4. CIRCLE AREA 
# ============================================

def area_circle(radius):
    """Calculates area of a circle"""
    area = 3.142 * radius * radius
    print(f"Circle with radius {radius} has area {area}")

area_circle(20)


# ============================================
# 5. FUNCTION WITH DEFAULT VALUE
# ============================================

def greet_user(name, greeting="Hello"):
    """Greets with default or custom greeting"""
    print(f"{greeting}, {name}!")

greet_user("John")           # Uses default "Hello"
greet_user("Alice", "Hi")    # Uses custom greeting


# ============================================
# 6. FUNCTION WITH *args (Many inputs)
# ============================================

def add_all(*numbers):
    """Adds any number of values"""
    total = 0
    for num in numbers:
        total = total + num
    return total

print(add_all(1, 2, 3))        # 6
print(add_all(10, 20, 30, 40)) # 100


# ============================================
# 7. FUNCTION WITH **kwargs (Named inputs)
# ============================================

def show_info(**info):
    """Shows any named information"""
    for key, value in info.items():
        print(f"{key}: {value}")

show_info(name="John", age=25, city="Nairobi")


# ============================================
# 8. FUNCTION ASSIGNMENT (Functions are like variables)
# ============================================

def square(x):
    """Returns square of a number"""
    return x * x

# Assign function to a new variable
my_function = square

# Both do the same thing
print(square(5))    # 25
print(my_function(5))  # 25


# ============================================
# 9. MULTIPLE RETURN VALUES
# ============================================

def get_min_max(numbers):
    """Returns both minimum and maximum"""
    minimum = min(numbers)
    maximum = max(numbers)
    return minimum, maximum

# Get both values
nums = [5, 2, 8, 1, 9]
small, large = get_min_max(nums)
print(f"Min: {small}, Max: {large}")


# ============================================
# 10. LAMBDA (One-line function)
# ============================================

# Normal function
def double(x):
    return x * 2

# Lambda (same thing, shorter)
double_lambda = lambda x: x * 2

print(double(5))        # 10
print(double_lambda(5)) # 10


# ============================================
# QUICK REFERENCE
# ============================================

"""
FUNCTION TYPES SUMMARY:

1. def name():
   - Just does something
   - Example: greet()

2. def name(param):
   - Takes input
   - Example: greet_person("John")

3. def name(param):
       return value
   - Gives output
   - Example: result = add(5, 3)

4. def name(param=default):
   - Has default value
   - Example: greet_user("John", "Hi")

5. def name(*args):
   - Takes many inputs
   - Example: add_all(1, 2, 3, 4)

6. def name(**kwargs):
   - Takes named inputs
   - Example: show_info(name="John", age=25)

7. lambda x: x*2
   - One-line function
   - Example: double = lambda x: x*2
"""