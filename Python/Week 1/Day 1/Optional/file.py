#variable declaration
num1 = 42
num2 = 2.3
boolean = True
string = 'Hello World'
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
fruit = ('blueberry', 'strawberry', 'banana')
#output the type of the tuple variable fruit
print(type(fruit))
#output the value of related to the index of pizza_toppings
print(pizza_toppings[1])
#add value to pizza_toppings
pizza_toppings.append('Mushrooms')
#output name value in the person
print(person['name'])
#add value to each key
person['name'] = 'George'
person['eye_color'] = 'blue'
#output index value from fruits variable
print(fruit[2])
#condition that verfies which number is bigger than 45
if num1 > 45:
    print("It's greater")
else:
    print("It's lower")
#condition for length of string 
if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

#loop 5 times
for x in range(5):
    print(x)
#loop starting from 2 to 5
for x in range(2,5):
    print(x)
#loop starting from 2 to 10 incrementing by 3
for x in range(2,10,3):
    print(x)
#loop the outputs x that increments by 1
x = 0
while(x < 5):
    print(x)
    x += 1
    
#removes last index in variable
pizza_toppings.pop()
#removes index 1 in variable
pizza_toppings.pop(1)

#Outputs person variable
print(person)
#removes eye_color
person.pop('eye_color')
#outputs new value for person
print(person)

#loop for pizza_toppings
for topping in pizza_toppings:
    #condition that variable toppiing is pepperoni outputs string
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    #condition that variable toppiing is ends loop
    if topping == 'Olives':
        break
#function with a loop that prints hello ten times
def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times()
#function with a loop that prints hello 4 times
def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4)
#function with a loop that prints hello ten times
def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
#function with a loop that prints hello 4 times
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)