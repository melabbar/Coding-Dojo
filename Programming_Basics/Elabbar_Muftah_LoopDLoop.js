var mile = 0

for (var i = 0; i < 6; i++) {
    mile = mile + 1
    if (mile % 2 == 0 && mile != 6) {
        console.log("Heres a candy at Mile " + mile)
    } else if (mile == 6) {
        console.log("Stop candy at mile " + 6)
    }
}

//---------------BONUS-----------------------

var mile = 0
var speed = 0.5 // initial speed mph (Miles per hour)

for (var i = 0; i < 6; i++) {
    speed = speed + 1
    mile = mile + 1
    if (mile % 2 == 0 && mile != 6 && speed >= 5.5) {
        console.log("Heres a candy at Mile " + speed)
    } else if (mile == 6 && mile < 5.5) {
        console.log("Stop candy at mile " + mile)
    }
}

/*
Question 1
How do we know when we need a loop here?
The loop is needed because we need to give the runner a candy every two miles 

Question 2
What's the starting point of the loop?
the loop should start at 0 where the runner starts

Question 3
When should the loop stop?
The loop should stop when giving out the candy.

Question 4
How will the loop know when to stop?
The loop should stop at the 6th mile when the candy stops giving out

Question 5
What's incrementing for each iteration of the loop?
the increments are located within the loop to increase the amount of miles run

Question 6
What variables do we need?
We need a counter variable that counts the number of loops and a variable that counts the amount of miles. 
*/

