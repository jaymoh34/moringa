# Conditional statements (if, elif, else)
age = 23  # You need to define age first

if age > 18:
    print("You can drink")
    print("Something Else")
    if age == 23:
        print("This is awesome")
        print("Another line")
elif age == 44:
    print("You are not that young")
else:
    print("Last else")

print()  # Empty line for spacing

# While loop
k = 0
while k < 30:
    k = k + 1
    print("K is ", k)

print()  # Empty line for spacing

# For loop with range(start, stop, step)
for i in range(0, 5, 1):
    print("I is ", i)

print()  # Empty line for spacing

# For loop with range and len() - index based
ar = [23, "hello", 67, 45, 40]  # 5 elements
for i in range(0, len(ar)):
    single_item = ar[i]
    print(single_item)

print()  # Empty line for spacing

# For loop - iterating directly over list (like for...of in JS)
for single_item in ar:
    print("Single item", single_item)

if age > 80:     # Python style (CORRECT)
    pass         # Placeholder - does nothing
    # You'll add code here later