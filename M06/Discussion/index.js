/*

	Instructions:
		- M06
			- discussion
				- index.js
			- activity
[Switch]
Switch
	- is a conditional statement that evaluates an expression and matches it to one of several possible cases
	- alternative for multiple 'if..else' statements

	syntax:
		switch(expression){
			case value1:
				- case represents a possible match 
				code to be executed if expression matches value
			break;
			case value2:
				code to be executed if expression matches value
			break;
			default:
				code to be executed if expression matches value
		}

*/

let color = 'red';

switch(color){
	case 'red':
		console.log('The color is red.');
	break;
	// the break statement ensures that the code inside the other cases is not executed
	case 'green':
		console.log('The color is green.');
	break;
	case 'blue':
		console.log('The color is blue.');
	break;
	default:
		console.log('The color is unknown.');
}

function roleChecker(role){
	switch(role){
	case "Admin":
		console.log("Welcome Admin, to the Dashboard.");
	break;
	case "User":
		console.log("You are not autorized to view this page.");
	break;
	//break terminates the code block. If this was not address to your case then, the next case will run as well.
	case "Guest":
		console.log("Go to the registration page to register.");
	break;
	default:
		console.log("Invalid role.");
	//by default your switch ends with default case, so therefore 

	};
};

roleChecker("Guest");

//Mini-Activity 2

function gradeEvaluator(grade) {
    switch(true) {
        case (grade >= 90):
            return 'A';
            break;
        case (grade >= 80):
            return 'B';
            break;
        case (grade <= 70):
            return 'F';
            break;
        case (grade >= 71):
            return 'C';
            break;        
        default:
            console.log("Not valid.")
    }
}

let letterDistinction = gradeEvaluator(84);
console.log(letterDistinction);

// Ternary Operator
/*
	Ternary Operator
		- a shorthand for an if statement
		
		syntax:
		condition ? if-statement : else-statement
*/
let price = 5000;

/*
if(price > 1000) {
	console.log("Price is over 1000");
} else {
	console.log("Price is less than 1000");
};
*/

// if(){} else
price > 1000 ? console.log('Price is over 1000') : ('Price is less than 1000');

let hero = 'Anpan Man';

hero === 'Vegeta' ? console.log("You are the Prince of all Saiyans.") : console.log("You are not even royalty.");

// else statements in ternary operation is required

let villain = 'Harvey Dent';
villain == 'Harvey Dent' 
? console.log("You are supposed to be the chosen one.") 
: console.log("Not quite villainous yet.");

// Ternary Operators are not meant for complex if-else trees. However, its advantage with our regular if else, is not thatit's short but also, ternary operations implicitly returns or it can return without the return keyword

let robin = "Dick Grayson";
let currentRobin = "Tim Drake";

let isFirstRobin = currentRobin === robin ? true : false;
console.log(isFirstRobin);

// else if with ternary operator
let a = 7;

a === 5
? console.log('A')
: (a === 10 ? console.log('A is 10'): console.log('A is not 5 or 10'));














































