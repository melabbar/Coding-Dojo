var minAge = 10; // Minimum age is 10
var minHieght = 42; // Minimum hieght is 42 inches


if (minHieght >= 42) {
    console.log("Get on that ride, Kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year.")
}


//------------ STRETCH 1 --------------------

if (minHieght >= 42 && minAge >= 10) {
    console.log("Get on that ride, Kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year.")
}


//------------ STRETCH 2 --------------------

if (minHieght >= 42 || minAge >= 10) {
    console.log("Get on that ride, Kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year.")
}