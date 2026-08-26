# Example variables

x = 10          # Integer
y = 3.14        # Float
z = "Hello"     # String
a = True        # Boolean <True, False>
b = [1, 2, 3, 4]  # List <Array> Mutable <By value>
c = {1, 2, 3}   # Set
d = (1, 2, 3)   # Tuple <List> Immutable
e = {"key": "value"}  # Dictionary <Object:js>

# For dictionary use bracket notation

# Determining the types - Format 1 (comma separated)
print("X is ", x, "Its type", type(x))  # Output: <class 'int'>
print("Y is ", y, "Its type", type(y))  # Output: <class 'float'>
print("Z is ", z, "Its type", type(z))  # Output: <class 'str'>
print("A is ", a, "Its type", type(a))  # Output: <class 'bool'>
print("B is ", b, "Its type", type(b))  # Output: <class 'list'>
print("C is ", c, "Its type", type(c))  # Output: <class 'set'>
print("D is ", d, "Its type", type(d))  # Output: <class 'tuple'>
print("E is ", e, "Its type", type(e))  # Output: <class 'dict'>

print()  # Empty line for spacing

# Determining the types - Format 2 (f-string template)
print(f"X is {x} its type is {type(x)}")  # Output: <class 'int'>
print(f"Y is {y} its type is {type(y)}")  # Output: <class 'float'>
print(f"Z is {z} its type is {type(z)}")  # Output: <class 'str'>
print(f"A is {a} its type is {type(a)}")  # Output: <class 'bool'>
print(f"B is {b} its type is {type(b)}")  # Output: <class 'list'>
print(f"C is {c} its type is {type(c)}")  # Output: <class 'set'>
print(f"D is {d} its type is {type(d)}")  # Output: <class 'tuple'>
print(f"E is {e} its type is {type(e)}")  # Output: <class 'dict'>