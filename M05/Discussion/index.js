/* Selection Controls
	logic
		- the program be able to compare values with one another to determine what to do next

	comparison operators
		- equality operators
		- inequality operators
		- greater than or greater than or equal to
		- less than or less than or equal to
		- not equal

	conditional statements
		- one of the key features or programming language, it allows the condition to evaluate to be true or false, based on the result, a specific code block is executed
			- if statements
			- else statements
			- else if statements
			- switch statements
*/

// if statements
/*
	if statements will run the code block if the condition specified is true or results to be true
	syntax:
		if(condition){
			code block
		}
*/
if(true){
	console.log('We just run an if condition.');
}

const candy = 100;

// if (candy >= 90) {
//	console.log('You have a cavity.');
// }

// else is used when the if before it results in false
if (candy <= 70) {
	console.log('You have a cavity.');
} else {
	console.log('You will not have a cavity');
}

let userName = "crusader_2023";
let userLevel1 = 25
let userAge = 20;

let requiredLevel = 95;
let requiredAge = 18;

if (userName.length > 10){
	console.log("Welcome to the Game Onlines");
}

if (userLevel1 >= requiredLevel){
	console.log("You are qualified to join the guild.");
} else {
	console.log("Your level did not met the required level.");
};

if (userName.length >= 10 && userLevel1 <= 15 && userAge >= requiredAge) {
	console.log ("Thank you for joining the Noobies Guild,");
} else {
	console.log("You are too strong to be a noob :(");
};

// else if
// else if executes statements if the previous or the original condition is false or resulted to false but another specified condition resulted to true

if (userName.length >= 10 && userLevel1 <= 25 && userAge >= requiredAge){
	console.log("Thank you for joining the Noobies Guild.");
} else if (userLevel1 > 25) {
	console.log("You are too strong to be a noob :(");
} else if (userAge < requiredAge) {
	console.log("You are too young to join the guild.");
}else if (userName.length < 10 ) {
	console.log("Username is too short");
};

// if-else function
function addNum(num1, num2){
	//check if the numbers being passed arguments are number types
	// typeof keyword will return a string which tells the type of the data that follows it
	if(typeof num1 === "number" && typeof num2 === "number"){
		console.log("Run only if both arguments passed are number types.");
		console.log(num1 + num2);
	} else {
		console.log("One of the arguments are not numbers.");
	};
};

addNum(8, 5);
addNum('7', 5);

































