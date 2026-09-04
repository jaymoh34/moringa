# GETTER AND SETTER - BankAccount Example

class BankAccount:
    def __init__(self, name, balance, account_no):
        self.name = name
        self._balance = balance
        self.account_no = account_no

    # GETTER - reads the balance
    @property
    def balance(self):
        print("somebody tried to read johns balance")
        return self._balance

    # SETTER - sets/updates the balance with validation
    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for new balance")
            return
        if value < 0:
            print("Ensure new balance must not be less than 0")
            return
        self._balance = value

    # setter
    def deposit(self):
        pass

    def withdrawal(self):
        pass

    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account No {self.account_no}")


john = BankAccount(name="John Mwangi", balance=0, account_no="223344223")

print("John blance ", john.balance)

# Testing the GETTER
print("\n--- Testing GETTER ---")
print(john.balance)  # Calls the getter

# Testing the SETTER
print("\n--- Testing SETTER with valid value ---")
john.balance = 1000  # Calls the setter - should work
print(john.balance)  # Calls the getter to see new value

print("\n--- Testing SETTER with invalid value (negative) ---")
john.balance = -500  # Calls the setter - should show error

print("\n--- Testing SETTER with invalid value (string) ---")
john.balance = "hello"  # Calls the setter - should show error
