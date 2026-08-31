def log_deco(func):
    def wrapper(*args, **kwargs):
        print("")  # Blank line
        print("Args:", args)  # Fixed string
        print("Kwargs:", kwargs)  # Fixed string
        result = func(*args, **kwargs)
        print(f"Function called was {func.__name__}")
        print("Results:", result)  # Fixed string
        print("")  # Blank line
        return result
    return wrapper  # Moved to correct position

@log_deco
def hello():
    print("Hello world")
    return 123

@log_deco
def sum(a, b):
    ans = a + b
    return ans

# Call the decorated functions
print("=== Calling sum with kwargs ===")
sum(a=20, b=30)  # kwargs

print("\n=== Calling sum with args ===")
sum(1, 5)  # args

print("\n=== Calling hello ===")
hello()