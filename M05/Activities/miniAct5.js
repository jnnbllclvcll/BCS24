/*
		check if the argument passed are string? (90) stretch goal (10) = 100
		Create a function that accepts username and password with the following criteria:
			- The parent  if statement is able to agree to 
			accomplish its condition
				- add another condition to our nested if statement:
					- check if the password is at least 8 characters long
				- add an else statement which will run if both conditions were not met:
					- display a message that says "Credentials are too short!"
			Stretch goal (+10 points)
				- add an else if statement that if the username is less than 8 characters
					- display "user name is too short."
				- add else if statement that if the password is less than 8 characters
					- display "password too short.

			Screenshot your code and result and paste into our Lecture Mini-Activity discussion
	 */

function login(userName, password){
	if(typeof userName === "string" && typeof password === "string"){
		if (password.length >= 8 && userName.length >= 8){
			console.log("You have successfully logged in.");
		} else if (userName.length < 8 && password.length >= 8) {
			console.log("Username is too short.");
		} else if (password.length < 8 && userName.length >= 8) {
		console.log("Password is too short.");
		} else {
		console.log("Credentials are too short.");
		}
	}
}


login('Bellieboop', 'kaori110399'); //Successful pass
login('Belle', 'kaori110399'); // Short Username
login('Bellieboop', 'kaori03'); // Short Password
login('Belle', 'kaori03'); // Short Username and Password
















