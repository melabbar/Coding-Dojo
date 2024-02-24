class User():

    def __init__(self, first_name,last_name, email, age, is_rewards_member=False, gold_card_points=0):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.age=age
        self.is_rewards_member=is_rewards_member
        self.gold_card_points=gold_card_points


    def display_info(self):
        print(f"My name is {self.first_name} {self.last_name}")
        print(f"I am {self.age} years old")
        print(f"My email is: {self.email} ")
        print(f"Rewards member: {self.is_rewards_member}")
        print(f"Gold Card points: {self.gold_card_points}")
    
    def enroll(self):
        if self.is_rewards_member:
            print("Already a user.")
            return False
        else:
            self.is_rewards_member=True
        self.is_rewards_member=True
        self.gold_card_points=200
    
    def spend_points(self, amount):
        self.gold_card_points -= amount
        if self.gold_card_points < amount:
            print(f"Whoa {self.first_name}!! Stop it your spending too much!")

        


info= User("Muftah", "Elabbar", "a@a.com", 33, False, 0)
info1 = User("Yassin", "Khalifa","y@y.com", 25, False, 0)
info2 = User("Maria", "Cain","c@c.com", 22, False, 0)


print("----------------------------")
info.enroll()
info.spend_points(50)
info.display_info()


print("----------------------------")
info1.enroll()
info1.spend_points(80)
info1.display_info()

print("----------------------------")
info2.enroll()
info2.spend_points(201)
info2.display_info()


