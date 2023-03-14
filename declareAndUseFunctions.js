// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?
// Return the value of what she should be paying.
function monthlyPayment (cost) {
    return (cost*(1+(0.1/100)))+3 ;
}
console.log(monthlyPayment(200));




// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.
function friendName (name1, name2, name3) {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
}
friendName('a', 'b', 'c') ;

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.
// i.e. 1990 returns 30
function calAge (birthYear) {
    // const nowDate = new Date;
    // const nowYear = nowDate.getFullYear();
    const nowYear = new Date().getFullYear();
    return Math.abs(nowYear-birthYear);
}
console.log(`Your age is ${calAge(1990)}. `);

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.
function friendNameAndAge (name1, name2, name3, year1, year2, year3) {
    console.log(`Welcome ${name1}, you are ${calAge(year1)}. Welcome ${name2}, you are ${calAge(year2)}. Welcome ${name3}, you are ${calAge(year3)}.`);
}
friendNameAndAge('d', 'e', 'f', 1991, 1992, 1993) ;




// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

function checkGrading (rubricN) {
    if (rubricN >= 5 && rubricN <=11) {
        return true;
    }
    else if (rubricN >=0 && rubricN <5) {
        return false;
    }
    // else {
    //     console.log("number is incorrect.");
    // }
}

function gradingR(numberR) {
    let rubric = Math.ceil(numberR);
    if (checkGrading(rubric)) {
        if (rubric >8 && rubric <11) {
            console.log("Excellent");
        }
        else if (rubric === 11) {
            console.log("Perfect");
        } 
        else {
            console.log("Good");
        }
    }
    else if (checkGrading(rubric) === false) {
        console.log("Try again. Be Fighting!");
    }
    else {
        console.log("number is incorrect.");
    }
    
    console.log(rubric);
}

gradingR(-2);

