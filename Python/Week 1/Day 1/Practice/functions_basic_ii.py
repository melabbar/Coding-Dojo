# QUESTION 1 COUNTDOWN FUNCTION
cd=[]
def countdown (input):
    for input in range (input, -1, -1):
        cd.append(input)
    return cd

print(countdown(10))

# QESTION 2 PRINT AND RETURN


def print_and_return(x):
    print(x[0])
    return x[1]

print(print_and_return  ([6,5]))

# QUESTION 3 First Plus Length

def sum(first):
    x=first[0]+len(first)
    print(x)


sum([1,2,3,4,5,6])

# QUESTION 4 Values Greater than Second

def value_greater_than_second(x):
    y=[]
    
    for i in range(len(x)):
        if x[1]< x[i]:
            y.append(x[i])
    print(y)
    return len(y)

print(value_greater_than_second([5,2,3,4,1,7,10,25]))

# QUESTION 5 THIS LENGTH, THAT VALUE
x=[]

def length_value(size, value):
    for i in range (size):
        x.append(value)
    print(x)

length_value(3,9)
