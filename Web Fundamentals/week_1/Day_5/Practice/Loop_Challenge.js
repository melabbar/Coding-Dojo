//-----For loop OUTPUT ODD NUMBERS FROM 1 TO 20

for (var i = 1; i <= 20; i++) {
    if (i % 2) {
        console.log(i)
    }
}
//-----While loop OUTPUT ODD NUMBERS FROM 1 TO 20
var i = 0
while (i < 20) {
    if (i % 2) {
        console.log(i)
    }
    i++
}

//--------- FOR LOOP Decreasing Multiples of 3
for (var i = 100; i >= 1; i--) {
    if (i % 3 == 0) {
        console.log(i)
    }
}


//--------- WHILE LOOP Decreasing Multiples of 3
var i = 100
while (i > 1) {
    if (i % 3 == 0) {
        console.log(i)
    }
    i--
}

//--------- FOR LOOP print sequence
for (var i = 4; i >= -4; i -= 1.5) {
    console.log(i)
}

//--------- WHILE LOOP print sequence
var i = 4
while (i >= -4) {
    console.log(i)
    i -= 1.5
}

//--------- FOR LOOP SIGMA
var sum = 0
for (var i = 1; i <= 100; i++) {
    sum = sum + i
}
console.log(sum)
//--------- WHILE LOOP sigma
var sum = 0
var i = 0
while (i <= 100) {
    sum = sum + i
    i++
}
console.log(sum)


//--------- FOR LOOP Factorial
var product = 1
for (var i = 1; i <= 12; i++) {
    product = product * i
}
console.log(product)

//--------- WHILE LOOP Factorial
var product = 1
var i = 1
while (i <= 12) {
    product = product * i
    i++
}
console.log(product)