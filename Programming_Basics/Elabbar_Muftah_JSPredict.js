//---------PREDICT 1---------------
function myBirthYearFunc() {
    console.log("I was born in" + 1980);
}
myBirthYearFunc();

//the output is I was born in1980



// -----------PREDICT 2------------

function myBirthYearFunc(birthYearInput) {
    console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980);
//The output is "I was born in1980" if the birthYearInput was assigned as a variable. Since it is not verified it will be "I was born in" undefined.



//---------PREDICT 3---------------

function add(num1, num2) {
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);

/* the output is: 

Summing Numbers!
num1 is: 10
num2 is: 20
30
*/
