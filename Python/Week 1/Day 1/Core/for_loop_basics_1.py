# 1. basics

for i in range (151):
    print(i)

# 2. Multiples of 5
for i in range (0,1001, 5):
    print(i)

# 3. Counting the Dojo Way

for i in range(1, 101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5== 0:
        print("Coding")
    else:
        print (i)

# 4. Whoa, that suckers huge!

sum=0

for i in range (500001):
    if i%2:
        sum+=i
print(sum)

# 5. Countdown by Fours 

for i in range(2018, 0, -4):
    print(i)

# 6. Flexible Counter

low_num=4
high_num=32
mult =3
for i in range(low_num, high_num):
    if i%mult==0:
        print(i)