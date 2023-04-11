/*
	Mini-Activity 2:

Convert the following snippet of code to switch statement:
//function with if-else and return
		function gradeEvaluator(grade){

			//evaluate the grade input and return the letter distinction
			//if the grade is less than or equal to 70 = F
			//if the grade is greater than or equal to 71 = C
			//if the grade is greater than or equal to 80 = B
			//if the grade is greater than or equal to 90 = A

			if(grade >= 90){

				//return keyword can be used in an if-else statement inside a function
				//allows the function to return a value.
				return "A"

			} else if(grade >= 80){

				return "B"

			} else if(grade >= 71){

				return "C"
			} else if(grade <= 70){

				return "F"

			} else {

				return "Invalid"

			};

		};

		let letterDistinction = gradeEvaluator(85);
		console.log(letterDistinction);

		//let letterDistinction = if(){} //will result in error.
		//If-else is not able to explicitly return a value into a variable.
    
    If you're done, send a screenshot your code and output and post it in our discussion

*/


function gradeEvaluator (grade){
			switch(true) {
				case grade >= 90:
				    console.log("A");
				    break;
				case grade >= 80:
				    console.log ("B");
				    break;
				case grade >= 71:
				    console.log ("C");
		    		break;
		    	case grade <= 70:
				    console.log ("F");
		    		break;
		    	default:
						console.log('Invalid Input.');
		}
} 

gradeEvaluator(94);
gradeEvaluator(85);
gradeEvaluator(73);
gradeEvaluator(68);
gradeEvaluator('A');





















