class BankAccount:

    def __init__(self, int_rate, balance): 
       self.int_rate=int_rate
       self.balance=balance
    
       
    def deposit(self, amount):
        self.balance+= amount
        print(f"You have deposited ${amount}. \nYour account balance is: ${self.balance}")
        print("----------")
        return self
    def withdraw(self, amount):
        if self.balance > amount:
            self.balance-=amount
            print(f"You withdrew ${amount}. \nYour account balance is: ${self.balance}")
            print("----------")
        else:
            print("You have insufficent funds, charging a $5 fee.")
            self.balance-=(amount+5)
            print(f"Your balance is: ${self.balance}")
            print("----------")
        return self
        
    def display_account_info(self):
        print(f"The balance is: ${self.balance}")
        print("----------")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance=(self.balance*self.int_rate)+self.balance
            print(f"With an interest rate of {self.int_rate*100}%,\nYour account balance increased to: ${self.balance}")
        else:
            print("Balance is Negative!")
        return self

    @classmethod
    def bank_info(cls, acc):
        acc.display_account_info()
    
        

Muftah = BankAccount(0,0)
Layla = BankAccount(0,0)

BankAccount.bank_info(Muftah.display_account_info().deposit(3000.00).deposit(3000.00).deposit(3000.00).withdraw(4000.00).yield_interest())
BankAccount.bank_info(Layla.display_account_info().deposit(12000.00).deposit(15000.00).withdraw(500.00).withdraw(300.00).withdraw(1000.00).withdraw(5000.00).yield_interest())



