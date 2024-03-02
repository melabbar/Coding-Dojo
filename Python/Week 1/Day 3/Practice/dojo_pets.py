class Pet:
        def __init__(self, name , type, tricks, noise):
            self.name = name
            self.type = type
            self.tricks = tricks
            self.health = 100
            self.energy = 50
            self.noise = noise


        def sleep(self):
            self.energy += 25
            return self

        def eat(self):
            self.energy += 5
            self.health += 10
            return self

        def play(self):
            self.health += 5
            self.energy -= 15
            return self

        def sound(self):
            print(self.noise)




class Ninja:
    def __init__(self, first_name, last_name , treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet


    def walk(self):
        self.pet.play()
        print(f"{self.first_name} is taking his pet, {self.pet.name}, for a walk!\nHealht: {self.pet.health}\nEnergy: {self.pet.energy}")
        return self

    def feed(self):

        if len(self.pet_food) > 0:
            #food = self.pet_food.pop()
            print(f"Feeding {self.pet.name} {self.pet_food}!")
            self.pet.eat()
        else:
            print("Out of food")
        return self

    def bathe(self):
        self.pet.sound()

my_treats = ['Sausage','Bacon','Trash Bag']
my_pet_food = ['Pizza','Burger']

Max = Pet("Max","Puppy",['nibbles on things','chases his own tail'],'Woof Woof')

Muftah = Ninja("Muftah","Elabbar",'Nibs','bones', Max)


Muftah.feed()
Muftah.bathe()
Muftah.walk()

