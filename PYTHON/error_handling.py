try:
    # Code that might cause an error
    pass
except: # ErrorType
    # Code to handle the error
    pass
else:
    # Code to run if NO error
    pass
finally:
    # Code that ALWAYS runs
    pass

# ============================================
# SIMPLE ERROR HANDLING EXAMPLES
# ============================================
# Try, Except, Else, Finally blocks
# Handling exceptions gracefully
# ============================================


# ============================================
# EXAMPLE 1: Basic Try-Except
# ============================================
print("="*50)
print("EXAMPLE 1: Basic Try-Except")
print("="*50)

try:
    num = int(input("Enter a number: "))
    print(f"You entered: {num}")
except ValueError:
    print("❌ That's not a valid number!")

print("\n" + "="*50)


# ============================================
# EXAMPLE 2: Division by Zero
# ============================================
print("EXAMPLE 2: Division by Zero")
print("="*50)

try:
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))
    result = num1 / num2
    print(f"Result: {result}")
except ValueError:
    print("❌ Please enter numbers only!")
except ZeroDivisionError:
    print("❌ Cannot divide by zero!")
except Exception as e:
    print(f"❌ Error: {e}")

print("\n" + "="*50)


# ============================================
# EXAMPLE 3: Try-Except-Else-Finally
# ============================================
print("EXAMPLE 3: Try-Except-Else-Finally")
print("="*50)

try:
    num = int(input("Enter a number: "))
    result = 100 / num
except ValueError:
    print("❌ That's not a number!")
except ZeroDivisionError:
    print("❌ Cannot divide by zero!")
else:
    print(f"✅ Result: {result}")  # Runs if NO error
finally:
    print("✅ This ALWAYS runs!")  # Always runs

print("\n" + "="*50)


# ============================================
# EXAMPLE 4: Raising Exceptions
# ============================================
print("EXAMPLE 4: Raising Exceptions")
print("="*50)

def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    if age < 18:
        raise ValueError("You must be 18 or older!")
    return "Access granted!"

try:
    user_age = int(input("Enter your age: "))
    result = check_age(user_age)
    print(result)
except ValueError as e:
    print(f"❌ Error: {e}")

print("\n" + "="*50)


# ============================================
# EXAMPLE 5: Custom Exception
# ============================================
print("EXAMPLE 5: Custom Exception")
print("="*50)

class AgeError(Exception):
    """Custom exception for age errors"""
    pass

def check_age_custom(age):
    if age < 0:
        raise AgeError("Age cannot be negative!")
    if age < 18:
        raise AgeError("You must be 18 or older!")
    return "Access granted!"

try:
    age = int(input("Enter your age: "))
    result = check_age_custom(age)
    print(result)
except AgeError as e:
    print(f"❌ Age Error: {e}")

print("\n" + "="*50)


# ============================================
# EXAMPLE 6: File Handling
# ============================================
print("EXAMPLE 6: File Handling")
print("="*50)

filename = "test.txt"

try:
    with open(filename, "r") as file:
        content = file.read()
        print(f"File content: {content}")
except FileNotFoundError:
    print(f"❌ File '{filename}' not found!")
else:
    print("✅ File read successfully!")
finally:
    print("✅ File operation complete.")

print("\n" + "="*50)


# ============================================
# EXAMPLE 7: List Index Error
# ============================================
print("EXAMPLE 7: List Index Error")
print("="*50)

my_list = [10, 20, 30, 40, 50]

try:
    index = int(input("Enter an index (0-4): "))
    print(f"Value at index {index}: {my_list[index]}")
except ValueError:
    print("❌ Please enter a number!")
except IndexError:
    print("❌ Index out of range! Use 0-4")

print("\n" + "="*50)


# ============================================
# EXAMPLE 8: Dictionary Key Error
# ============================================
print("EXAMPLE 8: Dictionary Key Error")
print("="*50)

student = {"name": "John", "age": 25}

try:
    key = input("Enter a key (name/age): ")
    print(f"Value: {student[key]}")
except KeyError:
    print(f"❌ Key '{key}' not found!")

print("\n" + "="*50)


# ============================================
# EXAMPLE 9: Simple Bank Account with Error Handling
# ============================================
print("EXAMPLE 9: Simple Bank Account with Error Handling")
print("="*50)

class BankAccount:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
    
    def deposit(self, amount):
        try:
            if amount <= 0:
                raise ValueError("Amount must be positive!")
            self.balance += amount
            print(f"✅ Deposited ${amount}")
            print(f"   Balance: ${self.balance}")
        except ValueError as e:
            print(f"❌ Error: {e}")
    
    def withdraw(self, amount):
        try:
            if amount <= 0:
                raise ValueError("Amount must be positive!")
            if amount > self.balance:
                raise ValueError("Insufficient funds!")
            self.balance -= amount
            print(f"✅ Withdrew ${amount}")
            print(f"   Balance: ${self.balance}")
        except ValueError as e:
            print(f"❌ Error: {e}")

# Test BankAccount
john = BankAccount("John", 1000)

print("\n--- Testing Deposit ---")
john.deposit(500)   # ✅ Works
john.deposit(-100)  # ❌ Error

print("\n--- Testing Withdrawal ---")
john.withdraw(200)  # ✅ Works
john.withdraw(2000) # ❌ Error

print("\n" + "="*50)


# ============================================
# EXAMPLE 10: All-in-One Error Handling
# ============================================
print("EXAMPLE 10: All-in-One Error Handling")
print("="*50)

try:
    # Get user input
    num = int(input("Enter a number: "))
    result = 100 / num
    
    # List operation
    my_list = [1, 2, 3]
    print(f"List value: {my_list[num]}")
    
except ValueError:
    print("❌ Please enter a valid number!")
except ZeroDivisionError:
    print("❌ Cannot divide by zero!")
except IndexError:
    print("❌ Index out of range!")
except Exception as e:
    print(f"❌ Something went wrong: {e}")
else:
    print(f"✅ Result: {result}")
    print("✅ No errors occurred!")
finally:
    print("✅ Program complete!")

print("\n" + "="*50)


# ============================================
# EXAMPLE 11: Simple Calculator with Error Handling
# ============================================
print("EXAMPLE 11: Simple Calculator")
print("="*50)

def calculator():
    print("Simple Calculator")
    print("Operations: +, -, *, /")
    
    try:
        num1 = float(input("Enter first number: "))
        operator = input("Enter operator (+, -, *, /): ")
        num2 = float(input("Enter second number: "))
        
        if operator == "+":
            result = num1 + num2
        elif operator == "-":
            result = num1 - num2
        elif operator == "*":
            result = num1 * num2
        elif operator == "/":
            result = num1 / num2
        else:
            raise ValueError("Invalid operator!")
        
        print(f"Result: {num1} {operator} {num2} = {result}")
        
    except ValueError as e:
        print(f"❌ Error: {e}")
    except ZeroDivisionError:
        print("❌ Cannot divide by zero!")
    except Exception as e:
        print(f"❌ Something went wrong: {e}")
    else:
        print("✅ Calculation successful!")
    finally:
        print("✅ Calculator complete.")

calculator()

print("\n" + "="*50)


# ============================================
# SUMMARY
# ============================================
print("ERROR HANDLING SUMMARY")
print("="*50)

print("""
✅ try:     Code that might cause an error
✅ except:  Code to handle specific errors
✅ else:    Code that runs if NO error occurs
✅ finally: Code that ALWAYS runs (error or not)
✅ raise:   Manually raise an exception

Common Exceptions:
- ValueError      : Invalid value
- TypeError       : Wrong data type
- ZeroDivisionError: Division by zero
- FileNotFoundError: File doesn't exist
- KeyError        : Dictionary key missing
- IndexError      : List index out of range
""")

print("="*50)
print("END OF ERROR HANDLING EXAMPLES")
print("="*50)