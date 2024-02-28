class User:

    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.checking_account = BankAccount(int_rate=0.02, balance=0)
        self.saving_account = BankAccount(int_rate=0.1, balance=0)

    def make_deposit(self, amount):
        choice=input("Which account, Checking or Savings, do you want to deposit in? [C][S]").lower()
        if choice == "c":
            print(f"You deposited ${amount}.")
            self.checking_account.deposit(amount)
        if choice == "s":
            print(f"You deposited ${amount}.")
            self.saving_account.deposit(amount)
        return self
        
        
    def make_withdraw(self, amount):
        choice=input("Which account, Checking or Savings, do you want to withdraw from? [C][S]").lower()
        if choice == "c":
            print(f"You withdrew ${amount}.")
            self.checking_account.withdraw((amount*self.checking_account.int_rate)+amount)
        if choice == "s":
            print(f"You withdrew ${amount}.")
            self.saving_account.withdraw((amount*self.saving_account.int_rate)+amount)
        return self
    
    def make_tranfer(self, amount, other_user):
        choice=input("TRANSFER to which account, Checking or Saving? [C][S]").lower()
        if choice == "c":
            self.checking_account.balance = self.checking_account.balance- amount
            other_user.checking_account.balance = other_user.checking_account.balance + amount 
            print(f"{self.name} just transfered ${amount} to {other_user.name}'s checkings account")
        if choice == "s":
            self.saving_account.balance = self.saving_account.balance - amount
            other_user.saving_account.balance = other_user.saving_account.balance + amount 
            print(f"{self.name} just transfered ${amount} to {other_user.name}'s savings account")
    
    
    def display_user_balance(self):
        print("----ACCOUNT INFORMATION----")
        print(f"Name: {self.name}")
        print(f"E-Mail: {self.email}")
        print(f"Checking Account Balance: ${self.checking_account.balance}")
        print(f"Saving Account Balance: ${self.saving_account.balance}")
        print("------------------------------------")
        return self
    
#------------------------- BANK ACCOUNT CLASS ---------------------------   
class BankAccount:

    def __init__(self, int_rate, balance): 
       self.int_rate=int_rate
       self.balance=balance

    def deposit(self, amount):
        self.balance+= amount
        print(f"You have deposited ${amount}.")
        print("------------------------------")
        return self
    def withdraw(self, amount):
        if self.balance > amount:
            self.balance-=amount
            
            print("----------")
        else:
            print("You have insufficent funds, charging a $5 fee.")
            self.balance-=(amount+5)
            print(f"Your balance is: ${self.balance}")
            print("----------")
        return self
    
    
Muftah = User("Muftah Elabbar", "me@gmail.com")
Mohsen = User("Mohsen Aljaziri", "ma@gmail.com")

Muftah.display_user_balance().make_deposit(200).display_user_balance().make_withdraw(100).display_user_balance().make_tranfer(10,Mohsen)
Mohsen.display_user_balance().make_deposit(200).display_user_balance().make_withdraw(100).display_user_balance()