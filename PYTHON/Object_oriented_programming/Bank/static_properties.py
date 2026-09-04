# BankAccount - Full Implementation
# Today we learned: Class Properties, Static Methods, Class Methods, Getters, Setters

class BankAccount:
    # ===== CLASS PROPERTIES (Static - Shared by ALL instances) =====
    bank_name = "Post Bank"
    account_count = 0
    interest_rate = 0.05
    min_balance = 100
    
    def __init__(self, name, balance, account_no):
        self.name = name
        self._balance = balance
        self.account_no = account_no
        BankAccount.account_count += 1
    
    # ===== GETTER - Reads balance =====
    @property
    def balance(self):
        print("Somebody tried to read balance")
        return self._balance
    
    # ===== SETTER - Updates balance with validation =====
    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for new balance")
            return
        if value < 0:
            print("Ensure new balance must not be less than 0")
            return
        self._balance = value
    
    # ===== INSTANCE METHODS =====
    def deposit(self, amount):
        if not isinstance(amount, (int, float)):
            print("❌ Amount must be a number!")
            return
        if amount > 0:
            self._balance += amount
            print(f"✅ Deposited ${amount}")
            print(f"   New balance: ${self._balance}")
        else:
            print("❌ Deposit amount must be positive!")
    
    def withdrawal(self, amount):
        if not isinstance(amount, (int, float)):
            print("❌ Amount must be a number!")
            return
        if amount > 0:
            if self._balance - amount >= BankAccount.min_balance:
                self._balance -= amount
                print(f"✅ Withdrew ${amount}")
                print(f"   New balance: ${self._balance}")
            else:
                print(f"❌ Cannot withdraw! Minimum balance of ${BankAccount.min_balance} required")
        else:
            print("❌ Withdrawal amount must be positive!")
    
    def show_account_details(self):
        print(f"\n{'='*40}")
        print(f"Bank: {BankAccount.bank_name}")
        print(f"Owner: {self.name}")
        print(f"Balance: ${self._balance}")
        print(f"Account No: {self.account_no}")
        print(f"Interest Rate: {BankAccount.interest_rate * 100}%")
        print(f"Minimum Balance: ${BankAccount.min_balance}")
        print(f"Total Accounts: {BankAccount.account_count}")
        print(f"{'='*40}")
    
    # ===== STATIC METHOD - Belongs to class, doesn't use self or cls =====
    @staticmethod
    def calculate_interest(amount, years):
        """Calculate interest for a loan or investment"""
        rate = BankAccount.interest_rate
        interest_per_year = amount * rate
        total_interest = interest_per_year * years
        print(f"If you take a loan of ${amount}, interest rate is {rate * 100}% per year")
        print(f"Interest per year: ${interest_per_year}")
        print(f"Total interest for {years} years: ${total_interest}")
        return total_interest
    
    @staticmethod
    def is_valid_amount(amount):
        """Check if amount is valid (positive number)"""
        return isinstance(amount, (int, float)) and amount > 0
    
    @staticmethod
    def format_account_number(account_no):
        """Format account number with leading zeros"""
        return f"ACC-{account_no:06d}"
    
    # ===== CLASS METHOD - Uses cls to access class properties =====
    @classmethod
    def get_bank_info(cls):
        """Get bank information"""
        return f"🏦 {cls.bank_name} | Accounts: {cls.account_count} | Interest: {cls.interest_rate * 100}%"
    
    @classmethod
    def change_interest_rate(cls, new_rate):
        """Change interest rate for ALL accounts"""
        if 0 <= new_rate <= 1:
            cls.interest_rate = new_rate
            print(f"✅ Interest rate updated to {new_rate * 100}%")
        else:
            print("❌ Rate must be between 0 and 1")
    
    @classmethod
    def change_min_balance(cls, new_min):
        """Change minimum balance for ALL accounts"""
        if new_min >= 0:
            cls.min_balance = new_min
            print(f"✅ Minimum balance updated to ${new_min}")
        else:
            print("❌ Minimum balance must be positive")
    
    @classmethod
    def create_account(cls, name, balance, account_no):
        """Factory method to create a new account"""
        return cls(name, balance, account_no)


# =============================================
# ===== TESTING THE CODE =====
# =============================================

print("="*50)
print("BANK ACCOUNT SYSTEM")
print("="*50)

# ===== CREATING ACCOUNTS =====
print("\n--- Creating Accounts ---")
john = BankAccount("John Mwangi", 1000, "2233442223")
samuel = BankAccount("Samuel", 500, "2233442224")
jane = BankAccount.create_account("Jane Wangari", 2000, "2233442225")

# ===== CLASS PROPERTIES =====
print("\n--- Class Properties (Shared by ALL) ---")
print(f"Bank Name: {BankAccount.bank_name}")
print(f"Total Accounts: {BankAccount.account_count}")
print(f"Interest Rate: {BankAccount.interest_rate * 100}%")
print(f"Minimum Balance: ${BankAccount.min_balance}")

# ===== STATIC METHODS =====
print("\n--- Static Methods ---")
print(f"Is 500 valid? {BankAccount.is_valid_amount(500)}")
print(f"Is -50 valid? {BankAccount.is_valid_amount(-50)}")
print(f"Formatted Account: {BankAccount.format_account_number(123)}")

# Calculate interest
print("\n--- Interest Calculation ---")
BankAccount.calculate_interest(1000, 2)

# ===== CLASS METHODS =====
print("\n--- Class Methods ---")
print(BankAccount.get_bank_info())
BankAccount.change_interest_rate(0.08)
BankAccount.change_min_balance(500)

# ===== GETTER =====
print("\n--- Testing GETTER ---")
print(f"John's balance: ${john.balance}")

# ===== SETTER =====
print("\n--- Testing SETTER ---")
john.balance = 1500
print(f"John's new balance: ${john.balance}")

# ===== DEPOSIT =====
print("\n--- Testing Deposit ---")
john.deposit(500)

# ===== WITHDRAWAL =====
print("\n--- Testing Withdrawal ---")
john.withdrawal(200)
john.withdrawal(1000)  # Should fail - would go below min balance

# ===== SHOW ACCOUNT DETAILS =====
john.show_account_details()
samuel.show_account_details()
jane.show_account_details()

# ===== SUMMARY =====
print("\n" + "="*50)
print("SUMMARY")
print("="*50)
print(f"Total Accounts: {BankAccount.account_count}")
print(f"Bank: {BankAccount.bank_name}")
print(f"Interest Rate: {BankAccount.interest_rate * 100}%")
print(f"Minimum Balance: ${BankAccount.min_balance}")
print(BankAccount.get_bank_info())
print("="*50)