/*
	INSTRUCTIONS

Create two functions:
	- First function: oddEvenChecker
	- This function will check if the number input or passed as an argument is an odd or even number.
	- Check if the argument being passed is a number or not.
		if it is a number, check if the number is odd or even.
		even numbers are divisible by 2.
		log a message in the console: "The number is even." if the number passed as argument is even.
		log a message in the console: "The number is odd." if the number passed as argument is odd.
		if the number passed is not a number type:
		show an alert:
		"Invalid Input."
	- Second Function: budgetChecker()
	- This function will check if the number input or passed as an argument is over or is less than the recommended budget.
	- Check if the argument being is a number or not.
		if it is a number check if the number given is greater than 40000
		log a message in the console: ("You are over the budget.")
		if the number is not over 40000:
		log a message in the console: ("You have resources left.")
		if the argument passed is not a num
 

Pushing Instructions:
	- Go to GitHub:
		- create a new project/repo called bcs24_<firstLetterOfYourName><LastName>_m06
		untick the readme option
		copy the git url from the clone button of your activity repo.
	- Go to Gitbash:
		- go to your bcs24/m06 folder and access activity folder
		initialize m06 folder as a local repo: git init
		connect your local repo to our online repo: git remote add origin <gitURLOfOnlineRepo>
		add your updates to be committed: git add .
		commit your changes to be pushed: git commit -m "includes select control activity"
		push your updates to your online repo: git push origin master
	- Go to SB:
		- copy the url of the home page for your m06/activity repo (URL on browser not the URL from clone button) and link it to SB Lab Discussion: Main Activity

*/


function oddEvenChecker(num) {
   	if (typeof num === 'number') {
		num % 2 === 0 ? console.log(`The number is even.`) : console.log(`The number is odd.`);
	} else 
		console.log('Invalid input.');
}

oddEvenChecker(33);
oddEvenChecker(24);
oddEvenChecker('99');

function budgetChecker(num) {
    if (typeof num === 'number') {
		num > 40000 ? console.log(`You are over budget.`) : console.log(`You have resources left.`);
	} else 
		console.log('Invalid input.');
}

budgetChecker(30000);
budgetChecker(99999);
budgetChecker(`12000`);












